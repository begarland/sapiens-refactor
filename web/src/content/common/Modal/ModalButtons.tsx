import * as React from 'react'
import {ButtonComponentTypes} from '../ButtonComponent/ButtonComponent'
import InlineButtonContainer from '../InlineButtonContainer/InlineButtonContainer'

export interface ModalButtonsTypes {
    buttonArray: ButtonComponentTypes[]

}

const ModalButtons = (props: ModalButtonsTypes) => {
    return (
        <div id="modal-buttons-container">
            <InlineButtonContainer buttonArray={props.buttonArray}/>
        </div>
    )
}

export default ModalButtons