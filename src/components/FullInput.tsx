import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type PropsInputType={
    callBack:(newTitle:string)=>void
}

export const FullInput = (props:PropsInputType) => {
    let [newTitle, setNewTitle] = useState('')
    const onClickHandler = () => {
        props.callBack(newTitle)
        setNewTitle(' ')
    }

const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
        onClickHandler()
    }
}
const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.currentTarget.value)
}
return (
    <div>
        <input value={newTitle}
               onKeyPress={onKeyPressHandler}
               onChange={onChangeHandler}
        />
        < button
            onClick={onClickHandler}> +
        </button>
    </div>
)}