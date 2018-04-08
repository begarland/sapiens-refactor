import * as React from 'react'
import ModalHeader from './ModalHeader'
import {ButtonComponentTypes} from '../ButtonComponent/ButtonComponent'

interface ModalTypes {
    modalType?: string;
    headerTitle?: string;
    showCloseButton?: boolean;

    buttonsArray?: ButtonComponentTypes[];
}

const Modal = (props: ModalTypes) => {
    return (
        <div id="modal">
            {props.headerTitle && <ModalHeader title={props.headerTitle} showCloseButton={props.showCloseButton}/>}


        </div>
    )
}

export default Modal