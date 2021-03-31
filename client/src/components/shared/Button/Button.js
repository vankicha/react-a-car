import './Button.scss';

const Button = ({ children, handlerClick, className, disabled }) => {
    return (
        <button
            className={className}
            onClick={handlerClick}
            disabled={disabled}
        >
            <span>{children}</span>
        </button>
    );
};

export default Button;
