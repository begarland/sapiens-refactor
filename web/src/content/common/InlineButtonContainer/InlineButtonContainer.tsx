import * as React from 'react'
import ButtonComponent, {ButtonComponentTypes} from '../ButtonComponent/ButtonComponent'


interface InlineButtonContainerTypes {
    buttonArray: ButtonComponentTypes[]
}

const InlineButtonContainer = (props: InlineButtonContainerTypes) => {
    return (
        <div className="inline-button-container">
            {props.buttonArray.map((button, index) => {
                return (
                    <ButtonComponent
                        key={index}
                        id={button.id}
                        onClick={button.onClick}
                        label={button.label}
                        additionalClasses={`inline-button ${button.additionalClasses ? button.additionalClasses : ''}`}
                    />
                )
            })}
        </div>
    )
}

export default InlineButtonContainer