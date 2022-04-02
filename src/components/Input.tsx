import React, {ChangeEvent, KeyboardEvent} from 'react';

type PropsInputType={
    newTitle:string
    setNewTitle:(newTitle:string)=>void
    callBack:()=>void
}

export const Input = (props:PropsInputType) => {
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
            if (event.key === 'Enter') {
                props.callBack()
            }
        }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setNewTitle(event.currentTarget.value)
    }

    return (
        <input value={props.newTitle}
               onKeyPress={onKeyPressHandler}
               onChange={onChangeHandler}/>
    )
}