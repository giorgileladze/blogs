import { twMerge } from "tailwind-merge";

const Button = (props) => {
    const {
        children,
        className,
        ...rest
    } = props;

    return (
        <button
            className={twMerge(
                "button-primary",
                className
            )}
            {...rest}
        >
            {children}
        </button>
    );
}

export default Button;