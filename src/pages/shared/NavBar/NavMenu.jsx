import Image from "next/image";
import Link from "next/link";
import icon from "../../../../public/Mahmud Hasan.jpg";

export const NavOption = (
    <>
      <Link href="/" className="text-white text-xl font-bold">
        SatisfySphere
      </Link>
  
      <div className="hidden md:flex items-center space-x-4">
        <Link href="/" className="text-white hover:text-gray-300">
          Home
        </Link>
        <Link href="/about" className="text-white hover:text-gray-300">
          About
        </Link>
  
        <Link href="#" className="text-white hover:text-gray-300">
          Services
        </Link>
        <Link href="#" className="text-white hover:text-gray-300">
          Contact
        </Link>
        <Link href="/logIn" className="text-white hover:text-gray-300">
          LogIn
        </Link>
        <div className="hidden lg:block">
          <div className="border-2 border-[#028090] rounded-full  flex items-center justify-center">
            <Image
              src={icon}
              className="rounded-full w-12 h-12"
              alt="Online avater"
            />
          </div>
        </div>
      </div>
    </>
  );
  export const NavOption2 = (
    <>
      <Link href="/" className="block px-4 py-2 text-white hover:text-gray-300">
        Home
      </Link>
      <Link
        href="/about"
        className="block px-4 py-2 text-white hover:text-gray-300"
      >
        About
      </Link>
      <Link href="#" className="block px-4 py-2 text-white hover:text-gray-300">
        Services
      </Link>
      <Link href="#" className="block px-4 py-2 text-white hover:text-gray-300">
        Contact
      </Link>
      <Link href="/logIn" className="block px-4 py-2 text-white hover:text-gray-300">
          LogIn
        </Link>
      <div className="flex items-center">
        <div className=" mx-auto mt-5 flex items-center justify-center">
          <Image
            src={icon}
            className="border-2 border-[#028090] rounded-full w-12 h-12"
            alt="Online avater"
          />
        </div>
      </div>
    </>
  );