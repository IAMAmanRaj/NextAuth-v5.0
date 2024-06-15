import { NextResponse } from "next/server";
import { createUser } from "@/queries/users";

import bcrypt from "bcryptjs";
import { dbConnect } from "@/lib/mongo";

export const POST = async (request) => {
  const { name, email, password } = await request.json();

  console.log(name, email, password);

  await dbConnect();

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = {
    name,
    password: hashedPassword,
    email,
  };

  try {
    await createUser(newUser);
  } catch (err) {
    return new NextResponse(error.message, {
      status: 500,
    });
  }

  return new NextResponse("User has been created", {
    status: 201,
  });
};