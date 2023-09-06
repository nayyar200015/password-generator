const CheckBox = ({ title, state, index,onChange }) => (
    <div>
        <input
            type="checkbox"
            id={title + index}
            onChange={onChange}
            checked={state} />
        <label htmlFor={title + index}>{title}</label>
    </div>
)

export default CheckBox
