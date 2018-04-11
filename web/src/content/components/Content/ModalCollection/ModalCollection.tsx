import * as React from 'react'
import Modal from '../../../common/Modal/Modal'
import HeadingComponent from '../../../common/HeadingComponent/HeadingComponent'
import MxModalContent from './Collections/MxModalContent'
import LabelComponent from '../../../common/LabelComponent/LabelComponent'
import { AppTypes } from '../../../App'
import { ButtonComponentTypes } from '../../../common/ButtonComponent/ButtonComponent'
import { ModalHeaderTypes } from '../../../common/Modal/ModalHeader'
import { ModalButtonsTypes } from '../../../common/Modal/ModalButtons'
import SignInModalContent from './Collections/SignInModalContent'

interface ModalCollectionTypes extends AppTypes {}

const ModalCollection = (props: ModalCollectionTypes) => {
    const modalSelection = props.appState.modalSelection

    const closeModal = props.toggleModal('none')

    const UpdateAndCloseButtons: ButtonComponentTypes [] = [
        {id: 'update-button', label: 'Update', onClick: () => console.log('update')}, //TODO: Implement update Function
        {id: 'close-button', label: 'Close', onClick: closeModal},
    ]

    const SignOutAndStayButtons: ButtonComponentTypes [] = [
        {id: 'sign-out-button', label: 'Yes, Sign Out', onClick: () => console.log('sign-out')}, //TODO: Implement update Function
        {id: 'stay-button', label: 'No, Stay', onClick: closeModal},
    ]

    const SignInRegisterCancelButtons: ButtonComponentTypes [] = [
        {id: 'sign-in-button', label: 'Sign in', onClick: props.toggleModal('sign-in')},
        {id: 'register-button', label: 'Register', onClick: props.toggleModal('register')},
        {id: 'cancel-button', label: 'Cancel', onClick: props.toggleModal('none')},
    ]

    const SignInForgotPasswordCancelButtons: ButtonComponentTypes [] = [
        {id: 'sign-in-button', label: 'Sign in', onClick: props.signIn},
        {id: 'forgot-password-button', label: 'Forgot Password', onClick: props.toggleModal('forgot-password')},
        {id: 'cancel-button', label: 'Cancel', onClick: props.toggleModal('none')},
    ]




    let modalHeader: ModalHeaderTypes
    let ModalContent
    let modalButtons: ModalButtonsTypes

    if (modalSelection === 'calories' || modalSelection === 'hydration') {
        modalHeader = {title: modalSelection, showCloseButton: true, closeModal: closeModal}
        ModalContent = (
            <MxModalContent {...props}/>
        )
        modalButtons = {buttonArray: UpdateAndCloseButtons}
    } else if (modalSelection === 'weigh-in') {

    } else if (modalSelection === 'sign-out') {
        modalHeader = {title: 'Sign out?', showCloseButton: true, closeModal: closeModal}
        ModalContent = (
            <div id="sign-out-modal-content" className="single-line-modal">
                <LabelComponent additionalClasses="full-width-label" label="Are you sure you'd like to sign out?" hideColon={true}/>
            </div>
        )
        modalButtons = {buttonArray: SignOutAndStayButtons}
    } else if (modalSelection === 'sign-in-or-register'){
        modalHeader = {title: 'Sign in or Register', showCloseButton: true, closeModal: closeModal}
        ModalContent = (
            <div id="sign-in-or-register-modal-content" className="single-line-modal">
                <LabelComponent additionalClasses="full-width-label" label="You have to be signed in to use this feature" hideColon={true}/>
            </div>
        )
        modalButtons = {buttonArray: SignInRegisterCancelButtons}
    } else if (modalSelection === 'sign-in'){
        modalHeader = {title: 'Sign in', showCloseButton: true, closeModal: closeModal}
        ModalContent = (
            <SignInModalContent {...props}/>
        )
        modalButtons = {buttonArray: SignInForgotPasswordCancelButtons}
    } else if (modalSelection === 'forgot-password'){

    }else if (modalSelection === 'register'){

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