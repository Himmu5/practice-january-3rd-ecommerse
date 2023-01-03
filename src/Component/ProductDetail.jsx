import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "./apis";
import Button from "./Button";
import Input from "./Input";
import Loading from "./Loading";

function ProductDetail() {

    const [product , setProduct] = useState();
    const id = useParams().id ;

    useEffect(()=>{
        getSingleProduct(id).then((res)=>{
            setProduct(res);
        })
    })


    if(!product){
        return <Loading />
    }

  return (
    <div className="sm:flex gap-5 shadow-md p-4 rounded-md ">
      <div className="w-1/2"> 
        <img
          src={product.thumbnail}
          alt=""
        />
      </div>
      <div className="w-1/2 flex flex-col gap-2 ">
        <p>Home / {product.category} / {product.title}</p>
        <p className="text-2xl font-bold"> {product.title}</p>
        <p>${product.price}.00</p>
        <p>
          {product.description}
        </p>
        <div className="flex gap-2">
          <Input type="number" />
          <Button>ADD TO CART</Button>
        </div>
      </div>
    </div>
  );
}
export default ProductDetail;
