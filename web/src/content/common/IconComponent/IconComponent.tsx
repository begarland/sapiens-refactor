import * as React from 'react'

interface IconComponentTypes {
    id: string;
    faIcon: string;
    onClick: (MouseEvent) => void;
}

const IconComponent = (props: IconComponentTypes) => {
    return (
        <span
            id={`${props.id}-span`}
            onClick={props.onClick}
        >
                <i
                    id={props.id}
                    className={`fas fa-${props.faIcon}`}
                />
            </span>
    )
}

export default IconComponent