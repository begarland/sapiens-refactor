import * as React from 'react'
import {AppTypes} from '../../App'

interface InvisibleFullScreenTypes extends AppTypes {}

const InvisibleFullScreen = (props: InvisibleFullScreenTypes) => {
    let show = (props.appState.showUserActions || props.appState.showModal)
    let onClick

    if (props.appState.showUserActions){
        onClick = props.toggleUserActions
    } else if (props.appState.showModal){
        onClick = props.toggleModal
    } else {
        onClick = () => console.error('this should not be visible')
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