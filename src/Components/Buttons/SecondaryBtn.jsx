const SecondaryBtn = ({ children }) => {
  return (
    <button className="bg-red text-white py-2 px-12 border border-red text-lg font-semibold hover:border-black hover:bg-transparent hover:text-black flex items-center justify-center">
      {children}
    </button>
  );
};

export default SecondaryBtn;
