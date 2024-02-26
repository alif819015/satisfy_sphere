import Image from "next/image";
import Link from "next/link";




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
    </>
  );