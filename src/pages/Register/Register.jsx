"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();
  // console.log("Name", name, "Email", email);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("All field is requere.");
      return;
    }
    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const { user } = await resUserExists.json();
      if (user) {
        setError("User already exist");
        return;
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/");
      } else {
        console.log("User registation field");
      }
    } catch (error) {
      console.log("Error during registation:", error);
    }
  };

  return (
    <div className="grid h-full place-items-center pt-24 pb-14">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-cyan-600">
        <h1 className="text-2xl font-bold py-5 text-center">Register Page</h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 w-full lg:w-[350px]"
        >
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="full name"
          />

          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="email"
          />

          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
          />

          <button
            type="submit"
            className="bg-blue-500 rounded-md px-5 py-2 font-bold cursor-pointer"
          >
            Register
          </button>
          {error && (
            <div className="bg-red-400 w-fit px-4 py-1 rounded-md">{error}</div>
          )}

          <Link className="text-sm mt-2 text-right" href={"/logIn"}>
            Already have an account? <span className="underline">Login</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
