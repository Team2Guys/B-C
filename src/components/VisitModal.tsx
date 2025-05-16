// components/VisitModal.tsx
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { RxCross1 } from 'react-icons/rx';

export default function VisitModal() {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const isModalClosed = localStorage.getItem('visitModalClosed');
    if (!isModalClosed) {
    setTimeout(() => {
      setShowModal(true);
    }, 5000);
    }
  }, []);

  const handleClose = () => {
    setShowModal(false);
    localStorage.setItem('visitModalClosed', 'true');
  };
  if (!showModal) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
      <div className="bg-white p-6 rounded-lg shadow-lg relative md:h-[550px]">
        <div><RxCross1 className='absolute cursor-pointer right-2 top-1 ' onClick={handleClose} /></div>
        <Link href='/contact-us' onClick={handleClose}>
        <Image src="https://bncvidoes.s3.eu-north-1.amazonaws.com/laptop_gdsvy2.webp" unoptimized height={500} width={500} objectFit='cover' className='w-full h-full' alt='Banner Image'/>
        </Link>
   
      </div>
    </div>
  );
}
