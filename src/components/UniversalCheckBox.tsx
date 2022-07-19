import React, {ChangeEvent} from 'react';

type UniversalCheckBoxPropsType={
    callBack:(checkedValue:boolean)=>void
    checkedValue:boolean
}
export const UniversalCheckBox = (props:UniversalCheckBoxPropsType) => {
    const onChangeHandler=(event:ChangeEvent<HTMLInputElement>)=>{
        props.callBack(event.currentTarget.checked)
    }
    return (
            <input type="checkbox" onChange={onChangeHandler} checked={props.checkedValue}/>
    );
};

export default UniversalCheckBox;