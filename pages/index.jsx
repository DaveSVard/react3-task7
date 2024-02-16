import axios from "axios"
import { useState } from "react";

export default function home ({products}) {
    console.log(products);
    const [myProducts, setMyProducts] = useState([...products])
    const del = (id) => {
        let filteredProds = myProducts.filter(elm => elm.id != id)
        setMyProducts([...filteredProds])
    }
    return(
        <div className="show">
            <div className="show-div">
                {myProducts?.map(elm => {
                    return(
                        <div className="show-div__prods" key={elm?.id}>
                            <p>Title: {elm?.title}</p>
                            <p>Description: {elm?.description}</p>
                            <p>Price: {elm?.price}</p>
                            <button className="del" onClick={() => del(elm.id)}>Delete</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export const getStaticProps = async () => {
    const {data} = await axios.get("https://api.escuelajs.co/api/v1/products")
    return {
        props: {
            products: data,
        }
    }
}


