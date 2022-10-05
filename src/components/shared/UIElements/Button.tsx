import './Button.css';

interface ButtonProps {
    children: string,
    borderColor?: string,
    backgroundColor?: string,
}

function Button({children : title, borderColor, backgroundColor}: ButtonProps) {
    const className = `button ${borderColor} ${backgroundColor}`;  

    return (
        <button className={className}>{title}</button>
    );
}

export default Button;