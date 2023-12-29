import { useNavigate } from "react-router-dom";
import goBackArrow from "../assets/icons/go-back-arrow.png"
import CreateBlogForm from "../components/global/CreateBlogForm";

const CreateBlogPage = () => {
    const navigate = useNavigate();

    const redirectToHome = () => {
        navigate("/");
    }

    return (
        <>
            <div className="pt-[40px] absolute">
                <img onClick={redirectToHome} src={goBackArrow} alt="goBackArrow" className="cursor-pointer"/>
            </div>
            <div className="flex pt-10">
                <CreateBlogForm />
            </div>
        </>
    );
}

export default CreateBlogPage;