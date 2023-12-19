const PrimaryBtn = ({ children, action }) => {
  return (
    <button
      onClick={action}
      className="bg-primary text-white py-2 px-12 border border-primary text-lg font-semibold hover:border-black hover:bg-transparent hover:text-black flex items-center justify-center"
    >
      {children}
    </button>
  );
};

export default PrimaryBtn;
