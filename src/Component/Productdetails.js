import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

function Productdetails(){
    let showbutton = true;
    const api_url = "https://fakestoreapi.com/products/20";
    const [product, set_product] = useState([])
    const prams = useParams();
    useEffect(()=>{
        fetch(api_url).then((res)=>res.json()).then((prod)=>set_product(prod))
    },[])
    console.log(prams);

    return(
    <>
    {/* <h1>product details{product.title} {product.id} </h1> */}
        <Product product ={product} showbutton={false}/>
    </>
    );
}
export default Productdetails;