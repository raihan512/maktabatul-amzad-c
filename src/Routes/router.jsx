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
import AddBook from "../Pages/Admin/AddBook/AddBook";
import PublisherDetails from "../Pages/PublisherDetails/PublisherDetails";
import BookTable from "../Pages/Admin/BookTable/BookTable";
import UpdateBook from "../Pages/Admin/UpdateBook/UpdateBook";

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
        element: (
          <PrivateRoute>
            <BookDetails></BookDetails>
          </PrivateRoute>
        ),
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
        path: "/addbook",
        element: <AddBook></AddBook>,
      },
      {
        path: "/watchbooks",
        element: <BookTable></BookTable>,
      },
      {
        path: "/updatebook/:id",
        element: <UpdateBook></UpdateBook>,
        loader: ({ params }) =>
          fetch(
            `https://maktabatul-amzad-server.onrender.com/api/books/${params.id}`
          ),
      },
      {
        path: "/cartdetails",
        element: (
          <PrivateRoute>
            <CartDetails></CartDetails>
          </PrivateRoute>
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
    ],
  },
]);
