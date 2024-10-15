


import { useEffect, useState } from "react";
import Product from "./Product";

function Productslist(){

    const api_url = "https://fakestoreapi.com/products";
    const [products, set_products] = useState([]);
    const [categories, set_categories] = useState([]);
    const [categoriesdata, set_categoriesdata] = useState([])
    const getproduct = () =>{
        fetch(api_url).then((res)=>(res.json())).then((data)=>(set_products(data)));

    }
    const getcateory = () =>{
        fetch(`${api_url}/categories`).then((res)=>(res.json())).then((data)=>(set_categories(data)));
    }
    useEffect (() =>{

        getproduct();
         getcateory();

    }, [])
    return(
        <>
        <h2 className="text-center p-3">Our Products</h2>
        <div className="container">
            <button onClick={()=>{
                getproduct();
            }}>all</button>
            {categories.map((cat)=>{
                return<button key={cat.id} className="btn btn-info" onClick={()=>{
                    const getproductincategories =(catname) =>{
                        console.log(catname)
                        fetch(`${api_url}/categories/${catname}`).then((res)=>(res.json())).then((data)=>(set_categoriesdata(data)));
                    }
                }}>{cat}</button>
            })}
        <div className="row">
            {products.map((product_n)=>{
                      return (
                      <>
                         <div className="col-4" key={product_n.id}>
                             <Product product={product_n} />
                            </div>
                      </>
                      );
            })};
       
        </div>
       
        </div>
        </>
    );
}
export default Productslist;