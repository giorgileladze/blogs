import { useEffect, useState } from "react";
import api from "../axios";
import { useNavigate, useParams } from "react-router-dom";
import Blog from "../components/global/Blog/Blog.component";
import goBackArrow from "../assets/icons/go-back-arrow.png"
import BlogsList from "../components/global/BlogsList";

const BlogPage = () => {
    const [blog, setBlog] = useState(null);
    const [ids, setIds] = useState([])
    const { blogId } = useParams();
    const navigate = useNavigate();

    const redirectToHome = () => {
        navigate("/");
    }

    useEffect(() => {
        const fetchBlogData = async () => {
            try {
                const response = await api.get(`/blogs/${blogId}`);
                setBlog(response.data);
            } catch (e) {
                console.log(e);
            }
        }
        
        if (blogId) {
            const arr = [];
            blog?.categories?.foreach(categori => arr.push(categori.id))
            setIds(arr);
            fetchBlogData();
        }
    }, [blogId]);

    if(!blog) return null;

    return (
        <>
            <div className="pt-[40px] absolute">
                <img onClick={redirectToHome} src={goBackArrow} alt="goBackArrow" className="cursor-pointer"/>
            </div>
            <div>
                <Blog blog={blog} />
                <div className="mt-[98px]">
                    <BlogsList categorieIds={[...ids]} type="slider"/>
                </div>
            </div>
        </>
    );
}

export default BlogPage;