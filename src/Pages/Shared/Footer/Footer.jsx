import { MdLocalShipping } from "react-icons/md";
import { TfiReload } from "react-icons/tfi";
import { TbMessages } from "react-icons/tb";
import { AiFillGift } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black pt-8">
      <div className="container mx-auto px-0.5  sm:px-3 md:px-0">
        {/* footer top */}
        <div className="md:flex justify-between">
          {/* footer left */}
          <div className="md:w-3/12 xl:w-2/12 md:border-r border-black2">
            {/* footer left item container */}
            <div className="flex flex-wrap md:flex-col flex-wrap justify-between  md:justify-start">
              {/* footer left item */}
              <div className="flex items-center mb-8">
                <div className="bg-black2 p-4">
                  <MdLocalShipping className="text-white text-xl" />
                </div>
                <div className="ml-2">
                  <p className="text-red text-base uppercase">Free shipping</p>
                  <p className="text-gray text-xs">on orders over 50$</p>
                </div>
              </div>
              {/* footer left item */}
              <div className="flex items-center mb-8">
                <div className="bg-black2 p-4">
                  <TfiReload className="text-white text-xl" />
                </div>
                <div className="ml-2">
                  <p className="text-red text-base uppercase">Free shipping</p>
                  <p className="text-gray text-xs">on orders over 50$</p>
                </div>
              </div>
              {/* footer left item */}
              <div className="flex items-center mb-8">
                <div className="bg-black2 p-4">
                  <TbMessages className="text-white text-xl" />
                </div>
                <div className="ml-2">
                  <p className="text-red text-base uppercase">Free shipping</p>
                  <p className="text-gray text-xs">on orders over 50$</p>
                </div>
              </div>
              {/* footer left item */}
              <div className="flex items-center mb-8">
                <div className="bg-black2 p-4">
                  <AiFillGift className="text-white text-xl" />
                </div>
                <div className="ml-2">
                  <p className="text-red text-base uppercase">Free shipping</p>
                  <p className="text-gray text-xs">on orders over 50$</p>
                </div>
              </div>
            </div>
          </div>
          {/* footer right */}
          <div className="md:w-9/12 xl:w-10/12 md:pl-5">
            {/* footer right subscription */}
            <div className="flex flex-wrap justify-between pb-8 border-b border-black2">
              <div className="mb-5">
                <p className="uppercase text-base text-white mb-2">
                  <strong>signup for news and offers</strong>
                </p>
                <p className="text-gray text-sm">
                  Make sure that you are updated with our interesting and
                  special offers
                </p>
              </div>
              <div>
                <form className="flex">
                  <input name="email" className="pl-3 focus:outline-0" />
                  <button className="bg-red py-2 px-3 md:px-5 text-white md:ml-2">
                    Submit
                  </button>
                </form>
              </div>
            </div>
            {/* footer right links */}
            <div className="flex flex-wrap justify-between mb-5">
              {/* footer links item */}
              <div className="mt-8 ">
                <h6 className="text-base uppercase text-white mb-3">Browser</h6>
                <div className="text-gray text-sm">
                  <p>
                    <Link to="">Books</Link>
                  </p>
                  <p>
                    <Link to="">Giftcards</Link>
                  </p>
                  <p>
                    <Link to="">Teens</Link>
                  </p>
                  <p>
                    <Link to="">New Books</Link>
                  </p>
                  <p>
                    <Link to="">Deal</Link>
                  </p>
                </div>
              </div>
              {/* footer links item */}
              <div className="mt-8 ">
                <h6 className="text-base uppercase text-white mb-3">
                  Information
                </h6>
                <div className="text-gray text-sm">
                  <p>
                    <Link to="">About Us</Link>
                  </p>
                  <p>
                    <Link to="">Customer Service</Link>
                  </p>
                  <p>
                    <Link to="">Primacy Policy</Link>
                  </p>
                  <p>
                    <Link to="">Search Terms</Link>
                  </p>
                  <p>
                    <Link to="">Orders & Returns</Link>
                  </p>
                  <p>
                    <Link to="">Site Map</Link>
                  </p>
                </div>
              </div>
              {/* footer links item */}
              <div className="mt-8 ">
                <h6 className="text-base uppercase text-white mb-3">
                  My Account
                </h6>
                <div className="text-gray text-sm">
                  <p>
                    <Link to="">Sign In</Link>
                  </p>
                  <p>
                    <Link to="">View Cart</Link>
                  </p>
                  <p>
                    <Link to="">My Wishlist</Link>
                  </p>
                  <p>
                    <Link to="">Check Out</Link>
                  </p>
                  <p>
                    <Link to="">Track My Orders</Link>
                  </p>
                  <p>
                    <Link to="">Contact us</Link>
                  </p>
                </div>
              </div>
              {/* footer links item */}
              <div className="mt-8 ">
                <h6 className="text-base uppercase text-white mb-3">
                  Location
                </h6>
                <div className="text-gray text-sm">
                  <p>Address: North brook hall road, Banglabazar, Dhaka</p>
                  <p>Mail: maktabatulamjad@gmail.com</p>
                  <p>Phone: +8801734768772</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer bottom */}
        <div className="flex flex-wrap justify-center md:justify-between items-center py-4 border-t border-black2">
          <div>
            <p className="text-sm text-gray">
              Design and developed by <span className="text-red">RG06</span>
            </p>
          </div>
          <div className="flex items-center">
            <div className="w-16 p-2 rounded md:ml-3">
              <img
                className="w-full"
                src="https://i.ibb.co/H7WTt0c/Mastercard-Logo.png"
                alt=""
              />
            </div>
            <div className="w-16 p-2 rounded md:ml-3">
              <img
                className="w-full"
                src="https://i.ibb.co/XXfWCh4/paypal-logo-png-1.png"
                alt=""
              />
            </div>
            <div className="w-16 p-2 rounded md:ml-3">
              <img
                className="w-full"
                src="https://i.ibb.co/NKghvtF/Visa-Logo.png"
                alt=""
              />
            </div>
            <div className="w-16 p-2 rounded md:ml-3">
              <img
                className="w-full"
                src="https://i.ibb.co/FxqCYQN/footer-logo.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
