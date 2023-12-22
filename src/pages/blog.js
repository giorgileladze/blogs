import { useEffect, useState } from "react";
import api from "../axios";
import { useNavigate, useParams } from "react-router-dom";
import Blog from "../components/global/Blog/Blog.component";
import goBackArrow from "../assets/icons/go-back-arrow.png"
import BlogsList from "../components/global/BlogsList";

const BlogPage = () => {
    const [blog, setBlog] = useState(null);
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
            fetchBlogData();
        }
    }, [blogId]);

    return (
        <>
            <div className="pt-[40px]">
                <img onClick={redirectToHome} src={goBackArrow} alt="goBackArrow" className="cursor-pointer"/>
            </div>
            <div>
                <Blog blog={blog} />
                <div className="mt-[98px]">
                    <BlogsList categorieIds={[]} type="slider"/>
                </div>
            </div>
        </>
    );
}

export default BlogPage;