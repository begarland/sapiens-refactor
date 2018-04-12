import * as React from 'react'
import IconComponent from './IconComponent'


interface SpinnerTypes {}

const Spinner = (props: SpinnerTypes) => {
    return (
        <IconComponent id="spinner" faIcon="spinner" additionalClasses="fa-pulse" onClick={() => null}/>

    )
}

export default Spinner