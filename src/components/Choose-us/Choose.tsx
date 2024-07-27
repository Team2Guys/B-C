import { RiVerifiedBadgeFill } from "react-icons/ri";

function Choose() {
  return (
    <div className="px-9 py-8 bg-white drop-shadow-md rounded-md w-[70%]">
      <h2 className="text-primary font-semibold text-3xl">
        Why Choose Us:
        <br />
        <span className="font-normal">
          Experience Unmatched Quality & Service!
        </span>
      </h2>
      <p className="mt-2 font-normal text-sm text-black leading-9">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <ul className="mt-4">
        <li className="font-normal text-sm leading-6 flex items-center gap-2 py-2">
          <span>
            <RiVerifiedBadgeFill size={24} className="text-primary" />
          </span>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
        </li>
        <li className="font-normal text-sm leading-6 flex items-center gap-2 py-2">
          <span>
            <RiVerifiedBadgeFill size={24} className="text-primary" />
          </span>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
        </li>
        <li className="font-normal text-sm leading-6 flex items-center gap-2 py-2">
          <span>
            <RiVerifiedBadgeFill size={24} className="text-primary" />
          </span>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
        </li>
        <li className="font-normal text-sm leading-6 flex items-center gap-2 py-2">
          <span>
            <RiVerifiedBadgeFill size={24} className="text-primary" />
          </span>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Choose;
