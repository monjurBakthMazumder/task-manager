import { useLocation, useNavigate } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import UseAuth from "../../../Hook/UseAuth";
import toast from "react-hot-toast";

const SocialSingIn = () => {
  const loginSuccessToast = () => toast.success("Login successfully");
  const loginErrorToast = () => toast.error("Something went wrong");
  const { singInWithGoogle, singInWithGithub } = UseAuth();
  const navigate = useNavigate();
  const loc = useLocation();

  const from = loc.state?.from?.pathname || "/";
  const handleSocialLogin = (media) => {
    media()
      .then(() => {
        navigate(from, { replace: true });
        loginSuccessToast();
      })
      .catch(() => {
        loginErrorToast();
      });
  };
  return (
    <div className=" px-8">
      <div className="flex flex-wrap justify-center items-center gap-2 my-5">
        <button
          onClick={() => handleSocialLogin(singInWithGoogle)}
          type="button"
          className="btn btn-primary btn-outline rounded-sm flex-1"
        >
          <FcGoogle className="text-3xl" /> Google
        </button>
        <button
          onClick={() => handleSocialLogin(singInWithGithub)}
          type="button"
          className="btn btn-primary btn-outline rounded-sm flex-1"
        >
          <FaGithub className="text-3xl" /> Github
        </button>
      </div>
      <div className="divider">OR</div>
    </div>
  );
};

export default SocialSingIn;
