import React, {ChangeEvent, useState} from 'react';

type EditableSpanPropsType = {
    title: string
    callBack:(newTitle:string)=>void
}

export const EditableSpan = (props: EditableSpanPropsType) => {
    let [newTitle, setNewTitle] = useState(props.title)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }
    const turnOnHandler = () => {
        setEdit(true)
    }
    const turnOffHandler = () => {
        setEdit(false)
        props.callBack(newTitle)
    }
    let [edit, setEdit] = useState(false)
    return (
        edit
            ? <input value={newTitle}
                     onChange={onChangeHandler}
                     autoFocus onBlur={turnOffHandler}/>
            : <span onDoubleClick={turnOnHandler}>{props.title}</span>
    );
};

