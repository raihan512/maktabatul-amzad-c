import { BsGoogle } from "react-icons/bs";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";

const SigninWith = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const { signinUserGoogle, setUser } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    signinUserGoogle()
      .then((res) => {
        setUser(res.user);
        navigate(from, { replace: true });
      })
      .then((error) => console.log(error));
  };
  return (
    <section className="text-xl font-semibold grid grid-cols-1 gap-3 my-5">
      <p className="text-center">Or Signin with</p>
      <button
        className="bg-primary text-white py-2 px-12 border border-primary text-lg font-semibold hover:border-black hover:bg-transparent hover:text-black flex items-center justify-center"
        onClick={handleGoogleLogin}
      >
        <FaGoogle className="mr-2" />
        <p>Google</p>
      </button>
      <button className="bg-red text-white py-2 px-12 border border-red text-lg font-semibold hover:border-black hover:bg-transparent hover:text-black flex items-center justify-center">
        <FaFacebookF className="mr-2" />
        <p>Facebook</p>
      </button>
    </section>
  );
};

export default SigninWith;
