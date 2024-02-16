import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function show ({categories}) {
    console.log(categories);
    const {register, handleSubmit, reset, formState: {errors}} = useForm()
    const [myCategories, setMyCategories] = useState([...categories])
    const del = (id) => {
        let filteredCats = myCategories.filter(elm => elm.id != id)
        setMyCategories([...filteredCats])
    }
    const add = (data) => {
        setMyCategories([...myCategories, {...data, id: Date.now()}])
    }
    return(
        <div className="show">
            <div className="show-div">
                {myCategories?.map(elm => {
                    return(
                        <div className="show-div__item" key={elm.id}>
                            <p>{elm?.name}</p>
                            <Link href={`/details/${elm?.id}`}>See more</Link>
                            <button className="del" onClick={() => del(elm.id)}>Delete</button>
                            <img src={elm?.image} alt="" />
                        </div>
                    )
                })}
            </div>
            <form className="form" onSubmit={handleSubmit(add)}>
                <input placeholder="Enter category name" {...register("name", {
                    required: "Enter category name"
                })}/>
                {errors.name && <p className="error">{errors.name.message}</p>}
                <input placeholder="Enter image url" {...register("image")} />
                <button className="add">Add category</button>
            </form>
        </div>
    )
}

export const getStaticProps = async () => {
    const {data} = await axios.get("https://api.escuelajs.co/api/v1/categories")
    return {
        props: {
            categories: data
        }
    }
}