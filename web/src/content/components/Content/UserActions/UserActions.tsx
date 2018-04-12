import * as React from 'react'
import {AppTypes} from '../../../App'
import DropdownButton, {DropdownButtonTypes} from '../../../common/DropdownButton/DropdownButton'
import {Modals, Paths} from '../../../utils/Enums'

interface UserActionsTypes extends AppTypes {}

const UserActions = (props: UserActionsTypes) => {
    const userActions: DropdownButtonTypes[] = [
        {label: 'Weigh In', onClick: props.toggleModal(Modals.WeighIn)},
        {label: 'Edit Profile', onClick: props.navigateTo(Paths.EditProfile)},
        {label: 'Sign Out', onClick: props.toggleModal(Modals.SignOut)},
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