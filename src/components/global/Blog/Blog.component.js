const Blog = ({blog}) => {
    if(!blog) return null;

    const {
        title,
        image,
        author,
        publish_date,
        description,
        email,
    } = blog;

    return (
        <div className="w-[720px] pt-[40px] mx-auto grid gap-y-10">
            <div>
                <img className="w-full" src={image} alt="BlogImg" />
            </div>
            <div className="grid gap-y-6">
                <div className="grid gap-2">
                    <p className="font-medium leading-5 text-[16px] text-text-primary">{author}</p>
                    <p className="text-text-secondary text-xs">{publish_date.split("-").reverse().join(".")} • {email}</p>
                </div>
                <div className="text-[32px] leading-10 text-text-primary font-bold">
                    <p>{title}</p>
                </div>
                {/* <div> */}
                    {/* TODO: list categories there */}
                {/* </div> */}
            </div>
            <div className="text-[16px] leading-7 text-text-content">
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Blog;