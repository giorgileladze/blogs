import { useEffect, useState } from "react";
import BlogsListComponent from "./BlogsList.component";
import api from "../../../axios";

const BlogsList = ({categorieIds, type = "grid"}) => {
    const [blogs, setBlogs] = useState([]);

    const blogsFilter = (blogsToFilter) => {
        if(!categorieIds || !categorieIds.length) return blogsToFilter;

        return blogsToFilter.filter(elem => {
            let include = false;
            categorieIds.forEach(id => {
                elem.categories.forEach(cat => {
                    // eslint-disable-next-line eqeqeq
                    if(cat.id == id) include = true;
                })
            });

            return include;
        });
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

    if(!blogs || !blogs.length) return null;

    return (
        <BlogsListComponent type={type} blogs={blogsFilter(blogs)} />
    );
}

export default BlogsList;