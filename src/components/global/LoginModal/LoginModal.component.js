import Input from "../../common/Input/Input.component";
import Button from "../../common/Button";
import errorInfoImg from "../../../assets/icons/info-circle.svg"
import xIcon from "../../../assets/icons/x-icon.png";
import tickIcon from "../../../assets/icons/tick-circle.svg"

const LoginModalComponent = (props) => {
    const {
        handleSubmit,
        setEmail,
        isInvalidEmail,
        message,
        success,
        closeModal,
    } = props;
    //TODO: styles changes is needed, focus color on input is overriding error and success colors
    
    return (
        <div className="absolute w-[100%] h-screen top-0 flex bg-opacity-[24%] bg-text-primary" onClick={closeModal}>
            <div className="relative mx-auto w-[480px] bg-white rounded-xl h-fit opacity-100 mt-[300px] px-6 py-10 text-text-primary" onClick={(e) => {e.stopPropagation()}}>
                <div className="absolute end-5 top-5 cursor-pointer" onClick={closeModal}>
                    <img src={xIcon} alt="xIcon" />
                </div>
                {success !== true ? 
                    <>
                        <div className="text-2xl font-bold text-center mb-6">
                            <h2>შესვლა</h2>
                        </div>
                        <div className="mb-6 flex flex-col">
                            <label htmlFor="email" className="mb-2 text-sm font-semibold">ელ-ფოსტა</label>
                            <Input
                                onChange={(e) => {setEmail(e.target.value)}} 
                                name="email" 
                                id="email" 
                                type="email" 
                                placeholder="Example@redberry.ge"
                                className={`${isInvalidEmail === true ? "border-input-border-error" : isInvalidEmail === false ? "border-input-border-valid": ""}`}
                            />
                            {isInvalidEmail && !!message && 
                                <div className="text-text-error flex text-[12px] leading-5 gap-2">
                                    <img src={errorInfoImg} alt="infoCircle"/>
                                    <p>{message}</p>
                                </div>
                            }
                        </div>
                    </> : 
                    <div className="flex flex-col mb-12 mt-6">
                        <div className="mb-4 mx-auto">
                            <img src={tickIcon} alt="tickCircle" />
                        </div>
                        <div className="font-bold text-xl text-center">
                            <p>წარმატებული ავტორიზაცია</p>
                        </div>
                    </div>
                }
                <div>
                    {success !== true ? 
                        <Button onClick={handleSubmit} className={"w-full"} >შესვლა</Button> : 
                        <Button onClick={closeModal} className={"w-full"} >კარგი</Button>
                    }
                </div>
            </div>
        </div>
    );
}

export default LoginModalComponent;