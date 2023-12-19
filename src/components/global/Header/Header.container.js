import HeaderComponent from "./Header.component";

const Header = () => {
    const isAuthorized = false;

    return (
        <HeaderComponent
            isAuthorized={isAuthorized}
        />
    );
}

export default Header;