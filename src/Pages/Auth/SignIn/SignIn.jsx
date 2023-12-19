import { useContext } from "react";
import { Link, json, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import SigninWith from "../SigninWith/SigninWith";
import InputField from "../../../Components/InputField";
import PrimaryBtn from "../../../Components/Buttons/PrimaryBtn";

const SignIn = () => {
  const { setUser, signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((res) => {
        setUser(res.user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };
  return (
    <section className="min min-h-screen">
      <div className="container mx-auto px-0.5  sm:px-3 md:px-0 mb-8">
        <div className="md:w-6/12 mx-auto">
          <h3 className="text-2xl md:text-4xl lg:text-4xl font-bold text-primary text-center mt-5 mb-10">
            Sign In
          </h3>

          <form onSubmit={handleSignIn}>
            <InputField id={"email"} placeholder={"Enter your email"}>
              Email
            </InputField>
            <InputField id={"password"} placeholder={"Enter your password"}>
              Password
            </InputField>
            <PrimaryBtn>Submit</PrimaryBtn>
          </form>
          <div>
            <p className="my-2 text-sm">
              New user?{" "}
              <Link to="/auth/signup" className="text-primary">
                Sign Up
              </Link>
            </p>
          </div>

          <SigninWith></SigninWith>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
