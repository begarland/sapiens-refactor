import * as React from 'react'
import { AppTypes } from '../../App'
import { Modals } from '../../utils/Enums'

interface InvisibleFullScreenTypes extends AppTypes {}

const InvisibleFullScreen = (props: InvisibleFullScreenTypes) => {

    const { modalSelection, signedIn, showUserActions, showModal } = props.appState

    let show = (showUserActions || showModal)
    let onClick
    if (showUserActions){
        onClick = props.toggleUserActions
    } else if (showModal){
        onClick = props.toggleModal('none')
    } else {
        onClick = () => console.error('this should not be visible')
    }

    if (!signedIn){
        if (modalSelection === Modals.SignInOrRegister || modalSelection === Modals.SignIn) {
            onClick = () => null
        }
    } else {
        if (modalSelection === Modals.SignOut) {
            onClick = () => null
        }
    }

    if (show){
        return (
            <div id="invisible-full-screen" onClick={onClick}/>
        )
    } else {
        return null
    }

}

export default InvisibleFullScreen