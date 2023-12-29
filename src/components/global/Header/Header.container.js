import { useState } from "react";
import HeaderComponent from "./Header.component";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const isAuthorized = localStorage.getItem("isAuth") === "true";

    return (
        <HeaderComponent
            isAuthorized={isAuthorized}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
        />
    );
}

export default Header;