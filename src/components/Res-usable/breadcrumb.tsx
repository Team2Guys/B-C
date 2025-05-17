"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Container from "./Container/Container";
import { BreadcrumbProps } from "types/product";

const Breadcrumb = ({
  title = "",
  slug = "",
  subcategory = "",
  className = "",
}: BreadcrumbProps & { className?: string }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 5);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const arrow = (
    <svg
      viewBox="0 0 7 12"
      className=" fill-primary w-[5px] sm:w-[7px]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6.51562 6.53125L2.26562 10.7812C1.95312 11.0938 1.48438 11.0938 1.20312 10.7812L0.484375 10.0938C0.203125 9.78125 0.203125 9.3125 0.484375 9.03125L3.51562 6.03125L0.484375 3C0.203125 2.71875 0.203125 2.25 0.484375 1.9375L1.20312 1.21875C1.48438 0.9375 1.95312 0.9375 2.26562 1.21875L6.51562 5.46875C6.79688 5.78125 6.79688 6.25 6.51562 6.53125Z" />
    </svg>
  );

  return (
    <div
      className={`z-20 w-full p-2 bg-white  ${
        isScrolled ? "fixed top-[60px] sm:top-[92px]" : "relative  "
      } ${className}`}
    >
      <Container className=" flex items-center gap-2 sm:gap-4">
        <Link href="/" className="capitalize text-primary">
          Home
        </Link>

        {slug && (
          <>
            {arrow}
            <Link href={`/${slug}`} className="capitalize text-primary">
              {slug.replace(/-/g, " ")}
            </Link>
          </>
        )}

        {subcategory && (
          <>
            {arrow}
            {title ? (
              <Link
                href={`/${slug}/${subcategory}`}
                className="capitalize text-primary"
              >
                {subcategory.replace(/-/g, " ")}
              </Link>
            ) : (
              <span className="capitalize  font-bold text-primary">
                {subcategory.replace(/-/g, " ")}
              </span>
            )}
          </>
        )}

        {title && (
          <>
            {arrow}
            <span className=" font-medium capitalize text-primary">
              {title.replace(/-/g, " ")}
            </span>
          </>
        )}
      </Container>
    </div>
  );
};

export default Breadcrumb;
