import * as React from 'react'
import Modal from '../../../common/Modal/Modal'
import HeadingComponent from '../../../common/HeadingComponent/HeadingComponent'
import MxModalContent from './Collections/MxModalContent'
import LabelComponent from '../../../common/Label/Label'
import SignInModalContent from './Collections/SignInModalContent'
import ForgotPasswordModalContent from './Collections/ForgotPasswordModalContent'
import Spinner from '../../../common/IconComponent/Spinner'
import { AppTypes } from '../../../App'
import { ButtonComponentTypes } from '../../../common/ButtonComponent/ButtonComponent'
import { ModalHeaderTypes } from '../../../common/Modal/ModalHeader'
import { ModalButtonsTypes } from '../../../common/Modal/ModalButtons'
import { Modals, Paths } from '../../../utils/Enums'
import WeighInModalContent from './Collections/WeighInModalContent'



interface ModalCollectionTypes extends AppTypes {}

const ModalCollection = (props: ModalCollectionTypes) => {
    const modalSelection = props.appState.modalSelection
    const spinners = props.appState.spinners

    const closeModal = props.toggleModal(Modals.None)
    const cancelButton =  {id: 'cancel-button', label: 'Cancel', onClick: closeModal}
    const closeButton =  {id: 'close-button', label: 'Close', onClick: closeModal}
    const okayButton =  {id: 'okay-button', label: 'Okay', onClick: closeModal}

    const UpdateAndCloseButtons: ButtonComponentTypes [] = [
        {id: 'update-button', label: 'Update', onClick: () => console.log('update')}, //TODO: Implement update Function
        closeButton,
    ]

    const SignOutAndStayButtons: ButtonComponentTypes [] = [
        {id: 'sign-out-button', label: 'Yes, Sign Out', onClick: props.signOut},
        {id: 'stay-button', label: 'No, Stay', onClick: closeModal},
    ]

    const SignInRegisterCancelButtons: ButtonComponentTypes [] = [
        {id: 'sign-in-button', label: 'Sign in', onClick: props.toggleModal(Modals.SignIn)},
        {id: 'register-button', label: 'Register', onClick: props.navigateTo(Paths.Register)},
        cancelButton,
    ]

    const SignInForgotPasswordCancelButtons: ButtonComponentTypes [] = [
        {id: 'sign-in-button', label: 'Sign in', onClick: props.signIn},
        {id: 'forgot-password-button', label: 'Forgot Password', onClick: props.toggleModal(Modals.ForgotPassword)},
        cancelButton,
    ]

    const ForgotPasswordSubmitAndCancelButtons: ButtonComponentTypes [] = [
        {id: 'submit-button', label: 'Submit', onClick: props.forgotPassword},
        cancelButton,
    ]

    const WeighInSubmitAndCancelButtons: ButtonComponentTypes [] = [
        {id: 'submit-button', label: 'Submit', onClick: props.weighIn},
        cancelButton,
    ]

    const CloseButton: ButtonComponentTypes [] = [closeButton]

    const OkayButton: ButtonComponentTypes [] = [okayButton]

    let modalHeader: ModalHeaderTypes
    let ModalContent
    let modalButtons: ModalButtonsTypes

    if (modalSelection === Modals.Calories || modalSelection === Modals.Hydration) {
        modalHeader = {title: modalSelection, showCloseButton: true, closeModal: closeModal}
        ModalContent = (
            <MxModalContent {...props}/>
        )
        modalButtons = {buttonArray: UpdateAndCloseButtons}

    } else if (modalSelection === Modals.WeighIn) {
        modalHeader = {title: 'Weigh in', showCloseButton: true, closeModal: closeModal}
        ModalContent = (
            <WeighInModalContent {...props}/>
        )
        modalButtons = {buttonArray:  WeighInSubmitAndCancelButtons}

    } else if (modalSelection === Modals.SignOut) {
        modalHeader = {title: 'Sign out?', showCloseButton: true, closeModal: closeModal}
        ModalContent = (
            <div id="sign-out-modal-content" className="single-line-modal">
                <LabelComponent additionalClasses="full-width-label" label="Are you sure you'd like to sign out?" hideColon={true}/>
            </div>
        )
        modalButtons = {buttonArray: SignOutAndStayButtons}

    } else if (modalSelection === Modals.SignInOrRegister){
        modalHeader = {title: 'Sign in or Register', showCloseButton: true, closeModal: closeModal}
        ModalContent = (
            <div id="sign-in-or-register-modal-content" className="single-line-modal">
                <LabelComponent additionalClasses="full-width-label" label="You must be signed in to use this feature" hideColon={true}/>
            </div>
        )
        modalButtons = {buttonArray: SignInRegisterCancelButtons}

    } else if (modalSelection === Modals.SignIn){
        if (spinners.signIn){
            modalHeader = {title: 'Signing in...', showCloseButton: false,}
            ModalContent = (
                <div id="sign-in-modal-content" className="modal-content">
                    <Spinner/>
                </div>
            )
            modalButtons = null
        } else {
            modalHeader = {title: 'Sign in', showCloseButton: true, closeModal: closeModal}
            ModalContent = (
                <SignInModalContent {...props}/>
            )
            modalButtons = {buttonArray: SignInForgotPasswordCancelButtons}
        }

    } else if (modalSelection === Modals.ForgotPassword) {
        modalHeader = {title: 'Forgot Password?', showCloseButton: true, closeModal: closeModal}
        if (props.appState.inputs.forgotPassword.databaseQueried === true) {
            ModalContent = (
                <div id="forgot-password-modal-content" className="single-line-modal">
                    <LabelComponent additionalClasses="full-width-label" label="A password reset email has been sent!"
                                    hideColon={true}/>
                </div>
            )
            modalButtons = {buttonArray: CloseButton}
        } else if (spinners.forgotPassword){
            modalHeader = {title: 'Searching for email...',}
            ModalContent = (
                <div id="forgot-password-modal-content" className="modal-content">
                    <Spinner/>
                </div>
            )
            modalButtons = null
        } else {
            ModalContent = (
                <ForgotPasswordModalContent {...props} />
            )
            modalButtons = {buttonArray: ForgotPasswordSubmitAndCancelButtons}
        }

    } else if (modalSelection === Modals.Error) {
        modalHeader = {title: 'Error!!!', showCloseButton: true, closeModal: closeModal, additionalClasses: 'error-header'}
        ModalContent = (
            <div id="error-modal-content" className="modal-content">
                <LabelComponent additionalClasses="full-width-label" label="An error has occurred!" hideColon={true}/>
                <LabelComponent additionalClasses="full-width-label" label={props.appState.error} hideColon={true}/>
            </div>
        )
        modalButtons = {buttonArray: OkayButton}
    }

    else {
        ModalContent = (
            <HeadingComponent heading="hello"/>
        )
    }

    return (
        <Modal modalHeader={modalHeader} modalContent={ModalContent} modalButtons={modalButtons}/>
    )
}

export default ModalCollection