import { logout } from "@/app/actions";

const Logout = () => {
  return (
    <form action={logout} className="">
      <button
        className=" my-2 text-blue-800 p-1 px-4 border-blue-800 border-2 hover:text-opacity-80 rounded "
        type="submit"
      >
        Logout
      </button>
    </form>
  );
};

export default Logout;
