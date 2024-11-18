import { items } from 'data/data';
import { RiVerifiedBadgeFill } from 'react-icons/ri';

function Choose() {
  return (
    <div className="px-2 md:px-9 py-8 bg-white drop-shadow-md rounded-xl xl:w-7/12 w-full lg:mt-5 space-y-2">
      <h2 className="text-black font-semibold text-20 md:text-3xl">
        Why Choose Us:
      </h2>
        <p className="font-normal lg:text-3xl text-18 md:text-2xl ">
        Made-to-Measure Window Treatments | 15+ Unique Blind Styles, 3000 Fabrics
        </p>
      <p className="mt-2 text-12 sm:text-14 2xl:text-16 text-black md:leading-9">
      Providing style and functionality to each room for you is what we do as a trusted window treatment company.
      </p>
      <ul className="mt-8 space-y-2">
      {items.map((item) => (
        <li
          key={item.id}
          className="text-black text-12 sm:text-14 2xl:text-16 leading-6 flex items-center gap-2 py-1"
        >
          <span>
            <RiVerifiedBadgeFill  className="text-secondary text-20 md:text-[30px]" />
          </span>
          <span>{item.text}</span>
        </li>
      ))}

      </ul>
    </div>
  );
}

export default Choose;
