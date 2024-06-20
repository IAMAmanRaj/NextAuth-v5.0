import { createUser } from "@/queries/users";
import bcrypt from "bcryptjs";
import { dbConnect } from "@/lib/mongo";
import { SignupFormSchema } from "@/lib/definitions";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { name, email, password } = await request.json();

  const validationResult = SignupFormSchema.safeParse({
    name,
    email,
    password,
  });

  if (!validationResult.success) {
    return NextResponse.json(
      {
        success: false,
        errors: validationResult.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  await dbConnect();

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    name,
    password: hashedPassword,
    email,
  };

  try {
    const response = await createUser(newUser);
    if (response.error) {
      return NextResponse.json(
        {
          success: false,
          message: response.error,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "User has been created",
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("Error creating user:", err);
    return NextResponse.json(
      {
        success: false,
        message: "User not registered",
      },
      { status: 500 }
    );
  }
};
