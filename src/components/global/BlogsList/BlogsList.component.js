import { Link } from "react-router-dom";
import linkArrow from "../../../assets/icons/link_arrow.png"
import Categories from "../../common/Categories";

const BlogCard = ({blog}) => {
    const {
        title,
        image,
        author,
        publish_date,
        description,
        id,
        categories,
    } = blog;
    return (
        <div className="">
            <div >
                <img className="rounded-[12px]" src={image} alt="Blog"/>
            </div>
            <div className="mt-5 grid gap-3">
                <div className="grid gap-1">
                    <p className="font-medium leading-5 text-[16px] text-text-primary">{author}</p>
                    <p className="text-text-secondary text-xs">{publish_date.split("-").reverse().join(".")}</p>
                </div>
                <div className="text-xl text-text-primary font-medium">
                    <p>{title}</p>
                </div>
                <div className="flex gap-4 flex-wrap">
                    {categories.map((category, i) => {
                        return <Categories category={category} key={i} />
                    })}
                </div>
                <div className="text-[16px] leading-7 text-text-content">
                    <p>{description.slice(0, 80)}...</p>
                </div>
                <div>
                    <Link to={`/blogs/${id}`} className="flex text-button-active font-medium gap-1">
                        სრულად ნახვა 
                        <img className="my-auto w-[10px] h-[10px]" src={linkArrow} alt="arrow" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

const BlogsListComponent = ({blogs, type}) => {

    const slider = () => {
        return <h1>slider to implement</h1>
    } 

    const grid = () => {
        return (
            <div className="grid grid-cols-3 gap-x-8 gap-y-14">
                {blogs.map((blog, i) => {
                    return (
                        <BlogCard key={i} blog={blog}/>
                    );
                })}
            </div>
        );
    }

    if(type === "slider") {
        return slider();
    }

    return grid();
}

export default BlogsListComponent;