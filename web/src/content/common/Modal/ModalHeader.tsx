import * as React from 'react'
import HeadingComponent from '../HeadingComponent/HeadingComponent'
import IconComponent from '../IconComponent/IconComponent'

interface ModalHeaderTypes {
    title: string;
    showCloseButton?: boolean;
    toggleModal: (string) => (MouseEvent) => void;
}

const ModalHeader = (props: ModalHeaderTypes) => {
    return (
        <div id="modal-header-container">
            <HeadingComponent heading={props.title} additionalClasses="modal-heading"/>
            {props.showCloseButton && 
                <IconComponent id="close-button" faIcon="window-close" onClick={props.toggleModal('hidden')}/>
            }

        </div>
    )
}

export default ModalHeader