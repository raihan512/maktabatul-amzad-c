import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";

const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <section className="min-h-screen py-10">
      <div className="container mx-auto">
        <h2>{user?.email}</h2>
      </div>
    </section>
  );
};

export default Profile;
