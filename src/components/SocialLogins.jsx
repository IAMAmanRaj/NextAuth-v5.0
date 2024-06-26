import { doSocialLogin } from "@/app/actions";

const SocialLogin = () => {
  return (
    <form action={doSocialLogin} className="relative">
      <button className="" type="submit" name="action" value="google">
        <img src="./google.jpg" className="w-8 mr-12 mb-1 rounded-full h-8" />
      </button>

      <button className="" type="submit" name="action" value="github">
        <img src="./github.png" className="w-10 h-10" />
      </button>
    </form>
  );
};

export default SocialLogin;
