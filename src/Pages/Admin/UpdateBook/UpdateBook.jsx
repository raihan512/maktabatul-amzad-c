import { useLoaderData } from "react-router-dom";

const UpdateBook = () => {
  const book = useLoaderData();
  const { title, thumb, price, pages } = book;
  return <div></div>;
};

export default UpdateBook;
