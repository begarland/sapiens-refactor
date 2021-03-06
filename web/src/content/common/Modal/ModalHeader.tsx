import * as React from 'react'
import HeadingComponent from '../HeadingComponent/HeadingComponent'
import IconComponent from '../IconComponent/IconComponent'

export interface ModalHeaderTypes {
    title: string;
    additionalClasses?: string;
    showCloseButton?: boolean;
    closeModal?: (MouseEvent) => void;
}

const ModalHeader = (props: ModalHeaderTypes) => {
    return (
        <div id="modal-header-container" className={`${props.additionalClasses ? props.additionalClasses : ''}`}>
            <HeadingComponent heading={props.title} additionalClasses="modal-heading"/>
            {props.showCloseButton && 
                <IconComponent id="close-button" faIcon="times" onClick={props.closeModal}/>
            }

        </div>
    )
}

export default ModalHeader