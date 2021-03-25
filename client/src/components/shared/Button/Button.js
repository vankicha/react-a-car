import './Button.scss';

const Button = ({ children, handlerClick, className }) => {
    return (
        <button className={className} onClick={handlerClick}>
            <span>{children}</span>
        </button>
    );
};

export default Button;
