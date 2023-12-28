import Logo from "../../common/Logo";
import Button from "../../common/Button";
import {Link} from "react-router-dom";
import LoginModal from "../LoginModal/LoginModal.container";
import { useState } from "react";

const HeaderComponent = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const {
        isAuthorized,
    } = props;

    const closeModal = () => setIsOpen(false);

    return (
        <>
            <header className={"h-20 bg-header border-b border-header-gray flex justify-between"}>
                <div className={"h-fit my-auto"}>
                    <Logo/>
                </div>
                <div className={"h-fit my-auto"}>
                    {!isAuthorized ?
                        <Button onClick={() => setIsOpen(true)}>შესვლა</Button> :
                        <Link href={"/createblog"} className={"button-primary"}>დაამატე ბლოგი</Link>
                    }
                </div>
            </header>
            <LoginModal isOpen={isOpen} closeModal={closeModal}/>
        </>
    );
}

export default HeaderComponent;
