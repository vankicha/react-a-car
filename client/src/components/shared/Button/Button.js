import './Button.scss';

const Button = ({ children, handlerClick, className, disabled, dataId }) => {
    return (
        <button
            data-id={dataId}
            className={className}
            onClick={handlerClick}
            disabled={disabled}
        >
            <span>{children}</span>
        </button>
    );
};

export default Button;
