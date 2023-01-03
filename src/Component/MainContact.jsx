import { useEffect, useState } from "react";
import { getProducts } from "./apis";
import Loading from "./Loading";
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";

function MainContact() {
  const [response, setResponse] = useState();
  console.log(
    "🚀 ~ file: MainContact.jsx:7 ~ MainContact ~ response",
    response
  );

  useEffect(() => {
    getProducts().then((res) => {
      setResponse(res);
    });
  }, []);

  if (!response) {
    return <Loading />;
  }

  return (
    <div className=" rounded-md  border shadow-md  p-4">
      <div className="flex flex-col gap-5 ">
        <h1 className=" ">Home / Shop</h1>
        <p className="text-red-500 font-bold text-2xl ">Shop</p>

        <div className="flex justify-between ">
          <p>Showing 1–9 of 11 results</p>
          <select name="" id="" className="px-4 py-2 border ">
            <option value="">Default Sort</option>
            <option value="title">Sort By : name</option>
            <option value="HTL">Sort By : High to Low</option>
            <option value="LTH">Sort By : Low to High</option>
          </select>
        </div>
      </div>

      <div className="my-10 sm:grid grid-cols-3 gap-7">
        {response.data.map((product) => {
          return (
            <div className="shadow-md p-2 flex flex-col gap-2">
              <div className="max-w-sm max-h-60 overflow-hidden">
                <img src={product.thumbnail} className="h-64 w-72" alt="" />
              </div>
              <p className="text-sm">{product.category}</p>
              <p className=" font-bold ">{product.title}</p>
              <div className="flex gap-1">
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
              </div>
              <div className="flex justify-between ">
                <p>${product.price}.00</p>
                <Link to={"/ProductDetail/"+product.id} className="underline text-red-500 ">
                  View Details
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex gap-1">
        {[...Array(response.meta.last_page).keys()].map((num) => {
          return (
            <div className="px-2 py-1 bg-red-500 hover:bg-red-600 text-white rounded-md ">
              {num + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default MainContact;
