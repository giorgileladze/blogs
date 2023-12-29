import { useEffect, useState } from "react";
import api from "../axios";
import BlogsList from "../components/global/BlogsList";
import heroImg from "../assets/images/header-block-image.png"
import Categories from "../components/common/Categories";
import { useSearchParams } from "react-router-dom";

const HomePage = () => {
    const [categories, setCategories] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await api.get("/categories");
                setCategories(response.data.data)
            } catch (e) {
                console.log(e);
            }
        }
        fetchCategories();
    }, [])

    const togleSearchParams = (id) => {
        setSearchParams(params => {
            const current = params.get("categories") || "";
            
            if(current.includes(id)) {
                return {"categories": current.split(",").filter(el => el !== id).join(",")};
            } else {
                return {"categories": current + `${id},`};
            }   
        })
    }

    return (
        <div>
            <div className=" text-text-primary text-[64px] leading-[72px] font-bold flex justify-between py-[64px]">
                <h1 className="ml-[13px]" >ბლოგი</h1>
                <img src={heroImg} alt="HeroImg"/>
            </div>
            <div className="flex overflow-x-auto whitespace-nowrap gap-6 mb-[64px] categories-scrollbar pb-1 max-w-[70%] mx-auto">
                {categories.map((category, i) => {
                    return <Categories category={category} key={i} onClick={togleSearchParams} isActive={searchParams.get("categories")?.includes("" + category.id)}/>
                })}
            </div>
            <BlogsList categorieIds={searchParams.get("categories")?.split(",").filter(id => id.length) || []}/>
        </div>
    );
}

export default HomePage;