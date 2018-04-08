import * as React from 'react'
import {AppTypes} from '../../../App'
import DropdownButton, {DropdownButtonTypes} from '../../../common/DropdownButton/DropdownButton'

interface UserActionsTypes extends AppTypes {}

const UserActions = (props: UserActionsTypes) => {
    const userActions: DropdownButtonTypes[] = [
        {label: 'Weigh In', onClick: props.toggleModal('weigh-in')},
        {label: 'Edit Profile', onClick: props.toggleModal('edit-profile')},
        {label: 'Sign Out', onClick: props.toggleModal('sign-out')},
    ]

    return (
        <div id="user-actions-drawer" className={props.appState.userActionsDrawerClass}>
            {userActions.map((userAction, index) =>
                <DropdownButton key={index} label={userAction.label} onClick={userAction.onClick}/>
            )}
        </div>
    )
}

export default UserActions