import * as React from 'react'

export interface ButtonComponentTypes {
    id: string;
    label?: string;
    additionalClasses?: string;
    onClick: (MouseEvent) => void;
}


const ButtonComponent = (props: ButtonComponentTypes) => {
    return (
        <button
            id={`${props.id}-button`}
            className={`button ${props.additionalClasses ? props.additionalClasses : ''}`}
            onClick={props.onClick}
        >
            {props.label}
        </button>
    )
}

export default ButtonComponent