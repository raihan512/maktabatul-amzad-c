import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Auth from "../Layout/Auth";
import SignUp from "../Pages/Auth/SignUp/SignUp";
import SignIn from "../Pages/Auth/SignIn/SignIn";
import ConfirmEmail from "../Pages/Message/ConfirmEmail";
import Allbooks from "../Pages/Allbooks/Allbooks";
import BookDetails from "../Pages/BookDetails/BookDetails";
import PrivateRoute from "./PrivateRoute";
import CartDetails from "../Pages/CartDetails/CartDetails";
import AllWriters from "../Pages/AllWriters/AllWriters";
import WriterDetails from "../Pages/WriterDetails/WriterDetails";
import AllCategories from "../Pages/AllCategories/AllCategories";
import Category from "../Pages/Category/Category";
import Admin from "../Layout/Admin";
import PublisherDetails from "../Pages/PublisherDetails/PublisherDetails";
import AddBook from "../Pages/Admin/AddBook/AddBook";
import AddWriter from "../Pages/Admin/AddWriter/AddWriter";
import AddPublisher from "../Pages/Admin/AddPublisher/AddPublisher";
import AddSubject from "../Pages/Admin/AddSubject/AddSubject";
import AddSubSubject from "../Pages/Admin/AddSubSubject/AddSubSubject";
import BookTable from "../Pages/Admin/BookTable/BookTable";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import WriterTable from "../Pages/Admin/WriterTable/WriterTable";
import CategoryTable from "../Pages/Admin/CategoryTable/CategoryTable";
import SubCategoryTable from "../Pages/Admin/SubCategoryTable/SubCategoryTable";
import PublisherTable from "../Pages/Admin/PublisherTable/PublisherTable";
import AdminRoute from "./AdminRoute";
import Profile from "../Pages/User/Profile/Profile";
import ConfirmOrder from "../Pages/ConfirmOrder/ConfirmOrder";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allbooks",
        element: <Allbooks></Allbooks>,
      },
      {
        path: "/writers",
        element: <AllWriters></AllWriters>,
      },
      {
        path: "/categories",
        element: <AllCategories></AllCategories>,
      },
      {
        path: "/categories/:categoryId",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(
            `https://maktabatul-amzad-server.onrender.com/api/categories/${params.categoryId}`
          ),
      },
      {
        path: "/writers/:writer",
        element: <WriterDetails></WriterDetails>,
        loader: ({ params }) =>
          fetch(
            `https://maktabatul-amzad-server.onrender.com/api/writers/${params.writer}`
          ),
      },
      {
        path: "/book/:id",
        element: <BookDetails></BookDetails>,
        loader: ({ params }) =>
          fetch(
            `https://maktabatul-amzad-server.onrender.com/api/books/${params.id}`
          ),
      },
      {
        path: "/publishers/:publisherId",
        element: <PublisherDetails></PublisherDetails>,
        loader: ({ params }) =>
          fetch(
            `https://maktabatul-amzad-server.onrender.com/api/publisher/:${params.publisherId}`
          ),
      },

      {
        path: "/cartdetails",
        element: (
          // <PrivateRoute>
          <CartDetails></CartDetails>
          // </PrivateRoute>
        ),
      },
      {
        path: "/confirmorder",
        element: (
          // <PrivateRoute>
          <ConfirmOrder></ConfirmOrder>
          // </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth></Auth>,
    children: [
      {
        path: "/auth/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/auth/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/auth/confirmemail",
        element: <ConfirmEmail></ConfirmEmail>,
      },
      {
        path: "/auth/profile",
        element: <Profile></Profile>,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <AdminRoute>
        <Admin></Admin>
      </AdminRoute>
    ),
    children: [
      {
        path: "addbook",
        element: <AddBook></AddBook>,
      },
      {
        path: "booklist",
        element: <BookTable></BookTable>,
      },
      {
        path: "addwriter",
        element: <AddWriter></AddWriter>,
      },
      {
        path: "writerlist",
        element: <WriterTable></WriterTable>,
      },
      {
        path: "categorylist",
        element: <CategoryTable></CategoryTable>,
      },
      {
        path: "subcategorylist",
        element: <SubCategoryTable></SubCategoryTable>,
      },
      {
        path: "publisherlist",
        element: <PublisherTable></PublisherTable>,
      },
      {
        path: "addpublisher",
        element: <AddPublisher></AddPublisher>,
      },
      {
        path: "addcategory",
        element: <AddSubject></AddSubject>,
      },
      {
        path: "addsubcategory",
        element: <AddSubSubject></AddSubSubject>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
