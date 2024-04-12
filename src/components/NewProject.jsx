import Input from "./Input"

export default function NewProject() {
    return(
        <div>
            <menu>
                <li><button>Cancel</button></li>
                <li><button>Save</button></li>
            </menu>

            <div>
                <Input inputType={'text'} label={'Title'}></Input>
                <Input inputType={'textarea'} isTextarea label={'Description'}></Input>
                <Input inputType={'date'} label={'Date'}></Input>
            </div>
        </div>
    )
}