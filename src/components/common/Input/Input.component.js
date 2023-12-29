import { useState } from "react";
import { twMerge } from "tailwind-merge";

const Input = (props) => {
    const [val, setVal] = useState("");

    const {
        className,
        validations = [],
        onChange = () => {},
        ...rest
    } = props;

    const updateVal = (e) => {
        setVal(e.target.value)

        onChange(e);
    }

    return (
        <div className="mb-2">
            <input 
                onChange={(e) => {updateVal(e)}}
                className={twMerge(
                    "bg-[#FCFCFD] hover:bg-input w-full h-11 pl-[12px] rounded-xl border border-input-border placeholder:text-input-placeholder outline-none focus:border-input-border-active focus:border-[2px]",
                    className
                )} 
                {...rest} 
            />
            <ul className="list-disc ml-4">
                {validations.map((validation, i) => {
                    return <li key={i} className={`text-[12px] leading-5 ${!val || val === "" ? "text-[#85858D]" : validation.regex.test(val) ? "text-[#14D81C]" : "text-[#EA1919]"}`}>{validation.text}</li>
                })}
            </ul>
        </div>
    );
}

export default Input;