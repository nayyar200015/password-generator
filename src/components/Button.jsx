const Button = ({ onClick, text, customClass }) => (
    <button className={customClass} onClick={onClick}>{text}</button>
)

export default Button
