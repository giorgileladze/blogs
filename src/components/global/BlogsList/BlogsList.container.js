import { useEffect, useState } from "react";
import BlogsListComponent from "./BlogsList.component";
import api from "../../../axios";

const BlogsList = () => {
    const [blogs, setBlogs] = useState([]);

    const blogsFilter = () => {
        // TODO: implement actual filter for blogs using categories
        return blogs;
    }

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await api.get("/blogs");
                setBlogs(response.data.data);
            } catch (e) {
                console.log(e);
            }         
        }
        fetchBlogs();
    }, [])

    if(!blogs.length) return null;

    return (
        <BlogsListComponent blogs={blogs} />
    );
}

export default BlogsList;