import LoginForm from "@/components/LoginForm";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col text-gray-300  bg-black h-screen justify-center items-center">
      <h1 className="text-3xl my-3">Hey, time to Sign In</h1>
      <LoginForm />
      <p className="my-3">
        Don't you have an account?
        <Link href="register" className="mx-2 underline">
          Register
        </Link>
      </p>
    </div>
  );
}
