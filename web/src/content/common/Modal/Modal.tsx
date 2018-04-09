import * as React from 'react'
import ModalHeader, {ModalHeaderTypes} from './ModalHeader'
import ModalButtons, {ModalButtonsTypes} from './ModalButtons'
import { ReactNode } from 'react'

interface ModalTypes {
    modalContent: ReactNode;
    additionalClasses?: string;
    modalHeader?: ModalHeaderTypes;
    modalButtons?: ModalButtonsTypes;
}

const Modal = (props: ModalTypes) => {
    let ModalHeaderComponent
    if (props.modalHeader)
        ModalHeaderComponent = (
            <ModalHeader
                {...props.modalHeader}
                additionalClasses="modal-heading"
            />
        )
    let ModalButtonsComponent
    if (props.modalButtons) {
        ModalButtonsComponent = (
            <ModalButtons {...props.modalButtons}/>
        )
    }

    return (
        <div id='modal' className={`${props.additionalClasses ? props.additionalClasses : ''}`}>
            {ModalHeaderComponent}
            <div id='modal-content-container'>
                {props.modalContent}
            </div>
            {ModalButtonsComponent}


        </div>
    )
}

export default Modal