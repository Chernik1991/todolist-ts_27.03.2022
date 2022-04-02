import React from 'react';

type PropsTypeModal={
    name:string
}

export const ModalWindow:React.FC<PropsTypeModal>= ({name,children}) => {
    return (
        <div>
            <h1>{name}</h1>
            {children}
            <button>Yes</button>
            <button>No</button>
            </div>
    );
};