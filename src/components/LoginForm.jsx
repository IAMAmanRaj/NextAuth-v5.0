"use client";

import SocialLogins from "./SocialLogins";
import { doCredentialLogin } from "@/app/actions";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginForm = () => {
  const router = useRouter();
  const [errors, setErrors] = useState({});

  async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const response = await doCredentialLogin(formData);

    if (!response.success) {
      setErrors(response.errors || { form: response.message });
    } else {
      router.push("/home");
    }
  }

  return (
    <>
      <div className="text-xl text-red-500">
        {errors.form && <p>{errors.form}</p>}
      </div>
      <form
        className="my-5 flex flex-col bg-zinc-900 items-center border p-3 border-gray-200 rounded-md"
        onSubmit={onSubmit}
      >
        <div className="my-2 flex flex-col gap-1 w-full">
          <div className=" flex flex-row justify-between items-center w-full">
            <label htmlFor="email">Email Address</label>
            <input
              className="border mx-2 p-1 bg-zinc-900 border-blue-100 rounded"
              type="email"
              name="email"
              id="email"
            />
          </div>

          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>

        <div className="my-2 flex flex-col w-full">
          <div className="flex flex-row justify-between items-center">
            <label htmlFor="password">Password</label>
            <input
              className="border mx-2 p-1 bg-zinc-900 border-blue-100 rounded"
              type="password"
              name="password"
              id="password"
            />
          </div>

          {errors.password && <p className="text-red-500">{errors.password}</p>}
        </div>

        <button
          type="submit"
          className="bg-zinc-900 text-blue-100 border-2 border-blue-100 mt-4 rounded flex justify-center items-center w-36"
        >
          Credential Login
        </button>
      </form>
      <SocialLogins />
    </>
  );
};

export default LoginForm;
