import * as React from 'react'

export interface DropdownButtonTypes {
    label: string;
    additionalClasses?: string;
    onClick: (MouseEvent) => void;

}

const DropdownButton = (props: DropdownButtonTypes) => {
    return (
        <div
            className={`dropdown-option ${props.additionalClasses ? props.additionalClasses : ''}`}
            onClick={props.onClick}
        >
            {props.label}
        </div>
    )
}

export default DropdownButton
