import Image from "next/image";
import LoginForm from "@/components/LoginForm";
import Logout from "@/components/Logout";
import { auth } from "@/auth";

import { redirect } from "next/navigation";

const HomePage = async () => {
  const session = await auth();

  if (!session?.user) redirect("/");

  return (
    <div className="flex flex-col bg-black pt-12 h-screen items-center">
      <h1 className="text-3xl my-2">Welcome, {session?.user?.name}</h1>
      <Image
        src={session?.user?.image}
        alt={session?.user?.name}
        width={72}
        height={72}
        className="rounded-full"
      />
      <h1 className="text-white my-4">Signed in as {session?.user?.name}</h1>
      <Logout />
    </div>
  );
};

export default HomePage;