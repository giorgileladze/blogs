import HeaderComponent from "./Header.component";

const Header = () => {
    const isAuthorized = localStorage.getItem("isAuth") === "true";

    return (
        <HeaderComponent
            isAuthorized={isAuthorized}
        />
    );
}

export default Header;