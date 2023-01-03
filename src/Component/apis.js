import axios from "axios";

export function getProducts(){
    return axios.get("https://myeasykart.codeyogi.io/products").then((res)=>{
        return res.data;
    })
}

export function getSingleProduct(id){
    return axios.get("https://myeasykart.codeyogi.io/product/"+id).then((res)=>{
        return res.data
    })
}