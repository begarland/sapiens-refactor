import * as React from 'react'
import Modal from '../../../common/Modal/Modal'
import HeadingComponent from '../../../common/HeadingComponent/HeadingComponent'
import MxModalContent from './Collections/MxModalContent'
import { AppTypes } from '../../../App'
import { ButtonComponentTypes } from '../../../common/ButtonComponent/ButtonComponent'
import { ModalHeaderTypes } from '../../../common/Modal/ModalHeader'
import { ModalButtonsTypes } from '../../../common/Modal/ModalButtons'

interface ModalCollectionTypes extends AppTypes {}

const ModalCollection = (props: ModalCollectionTypes) => {
    const modalSelection = props.appState.modalSelection

    const UpdateAndCloseButtons: ButtonComponentTypes [] = [
        {id: 'update-button', label: 'Update', onClick: () => console.log('update')}, //TODO: Implement update Function
        {id: 'close-button', label: 'Close', onClick: props.toggleModal('none')}
    ]

    const SignOutAndCancelButtons: ButtonComponentTypes [] = [
        {id: 'sign-out-button', label: 'Sign Out', onClick: () => console.log('sign-out')}, //TODO: Implement update Function
        {id: 'cancel-button', label: 'Cancel', onClick: props.toggleModal('none')}
    ]


    let modalHeader: ModalHeaderTypes
    let ModalContent
    let modalButtons: ModalButtonsTypes

    if (modalSelection === 'calories' || modalSelection === 'hydration') {
        modalHeader = {title: modalSelection, showCloseButton: true, closeModal: props.toggleModal('none')}
        ModalContent = (
            <MxModalContent {...props}/>
        )
        modalButtons = {buttonArray: UpdateAndCloseButtons}
    } else if (modalSelection === 'weigh-in') {

    } else if (modalSelection === 'sign-out') {

    } else {
        ModalContent = (
            <HeadingComponent heading="hello"/>
        )
    }

    return (
        <Modal modalHeader={modalHeader} modalContent={ModalContent} modalButtons={modalButtons}/>
    )
}

export default ModalCollection