const Categories = ({category, onClick = () => {}, isActive}) => {
    const {
        id,
        text_color,
        background_color,
        title,
    } = category;

    return (
        <span onClick={() => {onClick("" + id)}} className={`px-4 py-2 rounded-[30px] text-[12px] leading-4 font-medium cursor-pointer whitespace-nowrap border ${isActive && "border-[#000]"}`} style={{backgroundColor: background_color, color: text_color}}>
            {title}
        </span>
    );
}

export default Categories;