import LoginForm from "@/components/LoginForm";

export default function Home() {
  return (
    <div className="flex flex-col justify-center h-screen items-center bg-black">
      <h1 className="text-3xl my-3 text-white">Next Auth Implementation</h1>
      <LoginForm />
    </div>
  );
}
