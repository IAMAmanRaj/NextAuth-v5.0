"use client";

import SocialLogins from "./SocialLogins";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const RegistrationForm = () => {
  const router = useRouter();
  const [errors, setErrors] = useState({});

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formDataJson = Object.fromEntries(formData.entries());

    const response = await fetch(`/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataJson),
    });

    if (!response.ok) {
      const result = await response.json();
      setErrors(result.errors || { form: "An unexpected error occurred." });
    } else {
      const result = await response.json();
      if (result.success) {
        router.push("/home");
      } else {
        setErrors(
          result.errors || {
            form: result.message || "An unexpected error occurred.",
          }
        );
      }
    }
  }

  return (
    <>
      <div className="text-xl text-red-500">
        {errors.form && <p>{errors.form}</p>}
      </div>
      <form
        onSubmit={handleSubmit}
        className="my-5 flex bg-zinc-800  flex-col items-center border p-2 sm:p-8 border-gray-200 rounded-md"
      >
        <div className="my-2 flex flex-col gap-1 w-full">
          <div className=" flex flex-row justify-between items-center w-full">
            <label htmlFor="name">Name</label>
            <input
              className="border mx-2 p-1 bg-zinc-900 border-gray-500 rounded"
              type="text"
              name="name"
              id="name"
            />
          </div>

          {errors.name && <p className="text-red-500 my-4">{errors.name}</p>}
        </div>

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

          {errors.password && Array.isArray(errors.password) ? (
            errors.password.map((error, index) => (
              <p key={index} className="text-red-500 max-w-[300px] mt-4">
                {error}
              </p>
            ))
          ) : errors.password ? (
            <p className="text-red-500 mt-4">{errors.password}</p>
          ) : null}
        </div>

        <button
          type="submit"
          className="p-1 bg-zinc-900 mt-4 rounded flex justify-center items-center w-36"
        >
          Register
        </button>
      </form>
      <SocialLogins />
    </>
  );
};

export default RegistrationForm;
