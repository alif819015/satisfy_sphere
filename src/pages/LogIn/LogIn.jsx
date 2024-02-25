import Link from "next/link";
import React from "react";

const LogIn = () => {
  return (
    <div className="grid h-screen place-items-center pt-24 pb-14">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-cyan-600">
        <h1 className="text-2xl font-bold my-3">LogIn Page</h1>

        <form className="flex flex-col gap-3">
          <input type="text" placeholder="email" />
          <input type="password" placeholder="password" />
          <button className="bg-blue-500 rounded-md px-5 py-2 font-bold cursor-pointer">
            Login
          </button>
          <div className="bg-red-400 w-fit px-4 py-1 rounded-md">
            Error message
          </div>

          <Link className="text-sm mt-2 text-right" href={"/register"}>
            Don't have an account? <span className="underline">Register</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
