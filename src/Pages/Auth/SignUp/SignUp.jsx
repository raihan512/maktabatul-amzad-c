import { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import SigninWith from "../SigninWith/SigninWith";
import InputField from "../../../Components/InputField";
import PrimaryBtn from "../../../Components/Buttons/PrimaryBtn";

const SignUp = () => {
  const navigate = useNavigate();
  const { setUser, createUserEmail } = useContext(AuthContext);

  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.text.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    createUserEmail(email, password)
      .then((res) => {
        setUser(res.user);
        navigate("/auth/confirmemail");
      })
      .catch((error) => console.log(error));
  };
  return (
    <section className="min min-h-screen">
      <div className="container mx-auto px-0.5  sm:px-3 md:px-0 mb-8">
        <div className="md:w-6/12 mx-auto">
          <h3 className="text-2xl md:text-4xl lg:text-4xl font-bold text-primary text-center mt-5 mb-10">
            Sign Up
          </h3>

          <form onSubmit={handleSignup}>
            <InputField id={"text"} placeholder={"Enter your name"}>
              Full Name
            </InputField>
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
              Have an account?{" "}
              <Link to="/auth/signin" className="text-primary">
                Sign In
              </Link>
            </p>
          </div>

          <SigninWith></SigninWith>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
