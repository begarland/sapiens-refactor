import * as React from 'react'

interface HeadingComponentTypes {
    heading: string;
    additionalClasses?: string;
}

const HeadingComponent = (props: HeadingComponentTypes) => {
    return (
        <h1 className={`heading ${props.additionalClasses ? props.additionalClasses : ''}`}>{props.heading}</h1>
    )
}

export default HeadingComponent