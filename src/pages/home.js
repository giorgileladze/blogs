import { useEffect, useState } from "react";
import api from "../axios";
import BlogsList from "../components/global/BlogsList";
const HomePage = () => {
    const [categories, setCategories] = useState([]);

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

    return (
        <div>
            <BlogsList categorieIds={[]}/>
        </div>
    );
}

export default HomePage;