"use server";

import { signIn, signOut } from "@/auth";

export async function login(formData) {
  const action = formData.get("action");
  await signIn(action, { redirectTo: "/home" });
}

export async function logout() {
  await signOut({ redirectTo: "/" });
}
