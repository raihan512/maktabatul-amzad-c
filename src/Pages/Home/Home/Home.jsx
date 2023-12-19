import DynamicTitle from "../../../Hooks/DynamicTitle";
import Banner from "../Banner/Banner";
import Tabs from "../Tabs/Tabs";

const Home = () => {
  DynamicTitle("Maktabatul Amzad - Home");

  return (
    <>
      <Banner />
      <Tabs />
    </>
  );
};

export default Home;
