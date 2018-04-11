import * as React from 'react'
import ButtonComponent, {ButtonComponentTypes} from '../../../../../common/ButtonComponent/ButtonComponent'
import {AppTypes} from '../../../../../App'

interface ActionsButtonsTypes extends AppTypes {}

const ActionsButtons = (props: ActionsButtonsTypes) => {

    const mobileButtonsArray: ButtonComponentTypes[] = [
        {id: 'search', label: 'Search the database...', onClick: props.navigateTo('search')},
        {id: 'favorites', label: 'Favorites', onClick: props.navigateTo('favorites')},
        {id: 'history', label: 'History', onClick: props.navigateTo('history')},
        {id: 'goals', label: 'Goals and Progress', onClick: props.navigateTo('goals')},

    ]

    const landscapeTabletButtonsArray: ButtonComponentTypes[] = [
        {id: 'favorites', label: 'Favorites', onClick: props.navigateTo('favorites')},
        {id: 'history', label: 'History', onClick: props.navigateTo('history')},
        {id: 'goals', label: 'Goals and Progress', onClick: props.navigateTo('goals')},
    ]
    const doNothing = () => {return null}
    const preventInteraction = () => props.toggleModal('sign-in-or-register')
    const actionsOnClick = (props.appState.signedIn ? doNothing() : preventInteraction()  )


    return (
        <div id="actions-buttons-container" onClick={actionsOnClick}>
            <div id="mobile-and-portrait-tablet-actions-buttons">
                {mobileButtonsArray.map((button, index) =>
                    <ButtonComponent key={index} id={button.id} onClick={button.onClick} label={button.label}/>
                )}
            </div>
            <div id="landscape-tablet-and-above-actions-buttons">
                {landscapeTabletButtonsArray.map((button, index) =>
                    <ButtonComponent key={index} id={button.id} onClick={button.onClick} label={button.label}/>
                )}
            </div>
        </div>
    )
}

export default ActionsButtons