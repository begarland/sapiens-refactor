import * as React from 'react'
import {AppTypes} from '../../../App'
import Modal from '../../../common/Modal/Modal'
import HeadingComponent from '../../../common/HeadingComponent/HeadingComponent'
import {ButtonComponentTypes} from '../../../common/ButtonComponent/ButtonComponent'
import {ModalHeaderTypes} from '../../../common/Modal/ModalHeader'
import {ModalButtonsTypes} from '../../../common/Modal/ModalButtons'

interface ModalCollectionTypes extends AppTypes {}

const ModalCollection = (props: ModalCollectionTypes) => {
    const modalSelection = props.appState.modalSelection

    const UpdateAndCloseButtons: ButtonComponentTypes [] = [
        {id: 'update-button', label: 'Update', onClick: ()=> console.log('update') },
        {id: 'close-button', label: 'Close', onClick: props.toggleModal('none') }
    ]

    let modalHeader: ModalHeaderTypes
    let ModalContent
    let modalButtons: ModalButtonsTypes

    if (modalSelection === 'calories' || modalSelection === 'hydration'){
        modalHeader = {title: modalSelection, showCloseButton: true, closeModal: props.toggleModal('none')}
        ModalContent = (
            <HeadingComponent heading={modalSelection}/>
        )
        modalButtons = {buttonArray: UpdateAndCloseButtons}
    } else {
        ModalContent = (
            <HeadingComponent heading="hello"/>
        )
    }

    return (
        <div>
            <Modal modalHeader={modalHeader} modalContent={ModalContent} modalButtons={modalButtons}/>
        </div>
    )
}

export default ModalCollection