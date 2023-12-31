import DynamicTitle from "../../../Hooks/DynamicTitle";
import Banner from "../Banner/Banner";
import DealsOfWeek from "../DealsOfWeek/DealsOfWeek";
import Sidenav from "../Sidenav/Sidenav";
import Tabs from "../Tabs/Tabs";

const Home = () => {
  DynamicTitle("Maktabatul Amzad - Home");

  return (
    <>
      <Banner />
      <Tabs />
      <div className="container mx-auto px-0.5  sm:px-3 md:px-0 flex justify-between">
        <Sidenav />
        <DealsOfWeek></DealsOfWeek>
      </div>
    </>
  );
};

export default Home;
