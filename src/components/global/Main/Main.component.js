import { Route, Routes } from "react-router-dom";
import HomePage from "../../../pages/home";
import CreateBlogPage from "../../../pages/createBlog";
import BlogPage from "../../../pages/blog";

const MainComponent = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/createblog" element={<CreateBlogPage />}></Route>
                <Route path="/blogs/:blogId" element={<BlogPage />}></Route>
            </Routes>
        </main>
    );
}

export default MainComponent;