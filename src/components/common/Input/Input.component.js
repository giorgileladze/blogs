import { twMerge } from "tailwind-merge";

const Input = (props) => {
    const {
        className,
        ...rest
    } = props;

    return (
        <div className="mb-2">
            <input 
                className={twMerge(
                    "bg-input w-full h-11 pl-[12px] rounded-xl border border-input-border placeholder:text-input-placeholder outline-none focus:border-input-border-active focus:border-[2px]",
                    className
                )} 
                {...rest} 
            />
        </div>
    );
}

export default Input;