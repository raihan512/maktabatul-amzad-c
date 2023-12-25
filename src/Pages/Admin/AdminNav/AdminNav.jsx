import { Link } from "react-router-dom";

const AdminNav = () => {
  return (
    <div className="p-4 bg-primary h-screen admin-nav">
      <h3 className="text-xl font-bold text-white">Admin Routes</h3>
      <div className="my-5">
        <Link to="addbook" className="block my-5 border-b w-full text-white ">
          Add Book
        </Link>
        <Link to="booklist" className="block my-5 border-b w-full text-white ">
          Check all Book
        </Link>
        <Link to="addwriter" className="block my-5 border-b w-full text-white ">
          Add Writer
        </Link>
        <Link
          to="writerlist"
          className="block my-5 border-b w-full text-white "
        >
          Check All Writer
        </Link>
        <Link
          to="addpublisher"
          className="block my-5 border-b w-full text-white "
        >
          Add Publisher
        </Link>
        <Link
          to="publisherlist"
          className="block my-5 border-b w-full text-white "
        >
          Check All Publisher
        </Link>
        <Link
          to="addcategory"
          className="block my-5 border-b w-full text-white "
        >
          Add Category
        </Link>
        <Link
          to="categorylist"
          className="block my-5 border-b w-full text-white "
        >
          Check All Category
        </Link>
        <Link
          to="addsubcategory"
          className="block my-5 border-b w-full text-white "
        >
          Add Sub Category
        </Link>
        <Link
          to="subcategorylist"
          className="block my-5 border-b w-full text-white "
        >
          Check All Sub Category
        </Link>
      </div>
    </div>
  );
};

export default AdminNav;
