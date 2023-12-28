import { Link } from "react-router-dom";
import linkArrow from "../../../assets/icons/link_arrow.png"

const BlogCard = ({blog}) => {
    const {
        title,
        image,
        author,
        publish_date,
        description,
        id,
    } = blog;
    return (
        <div className="m">
            <div >
                <img className="rounded-[12px]" src={image} alt="Blog"/>
            </div>
            <div className="mt-6 grid gap-4">
                <div className="grid gap-2">
                    <p className="font-medium leading-5 text-[16px] text-text-primary">{author}</p>
                    <p className="text-text-secondary text-xs">{publish_date.split("-").reverse().join(".")}</p>
                </div>
                <div className="text-xl text-text-primary font-medium">
                    <p>{title}</p>
                </div>
                {/* <div> */}
                    {/* TODO: list categories there */}
                {/* </div> */}
                <div className="text-[16px] leading-7 text-text-content">
                    {/* TODO: make description no longer than 2 line in blogsList */}
                    <p>{description}</p>
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
                {blogs.map(blog => {
                    return (
                        <BlogCard blog={blog}/>
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