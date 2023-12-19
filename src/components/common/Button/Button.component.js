const Button = (props) => {
    const {
        children,
        ...rest
    } = props;

    return (
        <button
            className={"button-primary"}
            {...rest}
        >
            {children}
        </button>
    );
}

export default Button;