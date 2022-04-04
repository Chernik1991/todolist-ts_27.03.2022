import React, {ChangeEvent} from 'react';

type checkBoxPropsType={
    tIsDone:boolean
    callBack:(currentEvent:boolean)=>void
}

export const CheckBox = (props:checkBoxPropsType) => {
    const checkBoxHandler=(event:ChangeEvent<HTMLInputElement>)=>{
        props.callBack(event.currentTarget.checked)
    }
    return (
        <input type="checkbox"
               checked={props.tIsDone}
               onChange={checkBoxHandler}/>
    );
};
