"use server";

import { signIn, signOut } from "@/auth";
import { LoginFormSchema } from "@/lib/definitions";

export async function doSocialLogin(formData) {
  const action = formData.get("action");
  await signIn(action, { redirectTo: "/home" });
}

export async function doLogout() {
  await signOut({ redirectTo: "/" });
}

export async function doCredentialLogin(formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const validationResult = LoginFormSchema.safeParse({
    email,
    password,
  });

  if (!validationResult.success) {
    return {
      success: false,
      errors: validationResult.error.flatten().fieldErrors,
    };
  }

  try {
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (response.error) {
      return { success: false, message: response.error };
    }

    return { success: true, data: response };
  } catch (err) {
    console.error("Login error:", err);

    return { success: false, message: "Invalid email or password." };
  }
}
