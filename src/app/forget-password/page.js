"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";

import Link from "next/link";
import { auth } from "@/auth";

const ForgetPassword = () => {
  const router = useRouter();
  const [errors, setErrors] = useState({});

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  return (
    <>
      <div className="text-xl text-red-500">
        {errors.form && <p>{errors.form}</p>}
      </div>
      <h1 className="text-4xl text-center font-semibold mb-8">
        Forget Password
      </h1>
      <form className="my-5 flex flex-col bg-zinc-300 items-center border-2  p-3 border-gray-900 rounded-md">
        <div className="my-2 flex flex-col gap-1 w-full">
          <div className="flex flex-row justify-center items-center w-full">
            <label className="roboto" htmlFor="email">
              Email Address
            </label>
            <input
              className="border mx-2 p-1 bg-zinc-400 border-blue-100 rounded"
              type="email"
              name="email"
              id="email"
            />
          </div>

          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>

        <button
          type="submit"
          className="bg-zinc-900 text-blue-100 border-2 border-blue-100 mt-4 rounded flex justify-center items-center w-36"
        >
          Submit
        </button>
      </form>
      <div className="text-center mx-auto">
        <Link href="/" className="mx-2 hover:underline roboto">
          Login Here
        </Link>
      </div>
    </>
  );
};

export default ForgetPassword;
