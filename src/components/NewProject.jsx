import { useRef } from "react";

import Input from "./Input";

export default function NewProject() {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    return(
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button className="text-stone-800 hover:text-stone-950">Cancel</button>
                </li>
                <li>
                    <button className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md">Save</button>
                </li>
            </menu>

            <div>
                <Input inputType={'text'} label={'Title'}></Input>
                <Input inputType={'textarea'} isTextarea label={'Description'}></Input>
                <Input inputType={'date'} label={'Due Date'}></Input>
            </div>
        </div>
    )
}