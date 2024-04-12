export default function Input({inputType, isTextarea, label}) {
    return(
        <p>
            <label>{label}</label>
            {isTextarea ? <textarea></textarea> : <input type={inputType}></input>}
        </p>
    )
}