import Logo from "../../common/Logo";
import Button from "../../common/Button";
import {Link} from "react-router-dom";

const HeaderComponent = (props) => {
    const {
        isAuthorized,
    } = props;



    return (<header className={"h-20 bg-header border-b border-header-gray flex justify-between"}>
            <div className={"h-fit my-auto"}>
                <Logo/>
            </div>
            <div className={"h-fit my-auto"}>
                {!isAuthorized ?
                    <Button>შესვლა</Button> :
                    <Link href={"/createblog"} className={"button-primary"}>დაამატე ბლოგი</Link>
                }
            </div>
        </header>);
}

export default HeaderComponent;
