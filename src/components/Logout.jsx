import { doLogout } from "@/app/actions";

const Logout = () => {
  return (
    <form action={doLogout}>
      <button
        className="bg-zinc-900 my-2 text-blue-100 p-2 border-gray-200 border-2 rounded"
        type="submit"
      >
        Logout
      </button>
    </form>
  );
};

export default Logout;
