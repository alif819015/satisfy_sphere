"use client";
import React from "react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const UserInfo = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    router.push("/logIn");
  };

  return (
    <div className="grid h-screen place-items-center">
      <div className=" shadow-md border-2 rounded-lg w-[30%] p-5">
        <h1>User</h1>
        <div>
          Name: <span> {session?.user?.name}</span>
        </div>
        <div>
          email: <span> {session?.user?.email}</span>
        </div>
        <button onClick={handleLogout} className="bg-red-500">
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
