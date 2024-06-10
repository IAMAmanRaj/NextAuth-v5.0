import { logout } from "@/app/actions";

const Logout = () => {
  return (
    <form action={logout} className="">
      <button
        className=" my-2 text-white p-1 px-4 border-white border-2 hover:text-opacity-80 rounded "
        type="submit"
      >
        Logout
      </button>
    </form>
  );
};

export default Logout;
