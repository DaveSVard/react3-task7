import axios from "axios"
import { useRouter } from "next/router"
import { useState } from "react";

export default function id ({categoryProd}) {
    const router = useRouter()
    const [catProducts, setCatProducts] = useState([...categoryProd])
    return(
        <div className="show">
            
                {catProducts?.map(elm => {
                    return(
                        <div className="singleProd" key={elm?.id}>
                            <p>Title: {elm?.title}</p>
                            <p>Description: {elm?.description}</p>
                            <p>Price: {elm?.price}</p>
                            <hr />
                        </div>
                    )
                })}
            
        </div>
    )
}

export const getServerSideProps = async ({params}) => {
    const {data} = await axios.get(`https://api.escuelajs.co/api/v1/categories/${params.id}/products`)
    return {
        props: {
            categoryProd: data
        }
    }
}