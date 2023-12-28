import LoginModalComponent from "./LoginModal.component";
import { useEffect, useState } from "react";
import api from "../../../axios"

const LoginModal = ({isOpen, closeModal}) => {
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();
    const [success, setSuccess] = useState();

    const handleSubmit = async () => {
        if(!email || !validateEmail(email)) return;

        try {
            const response = await api.post("/login", {
                email: email
            })
            if(response.status === 204) {
                setSuccess(true)
                localStorage.setItem("isAuth", "true")
            }
        } catch (e) {
            console.error(e);
            setMessage("ელ-ფოსტა არ მოიძებნა");
            setSuccess(false)
        }
    }

    const validateEmail = (val) => {
        const regex = /^[a-zA-Z0-9.]+@redberry\.ge$/;

        return regex.test(val);
    }

    useEffect(() => {
        if(email && !validateEmail(email)) setMessage("მეილი უნდა მთავრდებოდეს @redberry.ge-ით");

        setSuccess(undefined);
    }, [email])

    if(!isOpen) return null;
    
    return (
        <LoginModalComponent 
            setEmail={setEmail}
            handleSubmit={handleSubmit}
            isInvalidEmail={(!validateEmail(email) && email) || success === false}
            message={message}
            success={success}
            closeModal={closeModal}
        />
    );
}

export default LoginModal;