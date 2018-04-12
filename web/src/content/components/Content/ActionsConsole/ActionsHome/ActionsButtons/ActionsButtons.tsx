import * as React from 'react'
import ButtonComponent, { ButtonComponentTypes } from '../../../../../common/ButtonComponent/ButtonComponent'
import { AppTypes} from '../../../../../App'
import { Modals, Paths } from '../../../../../utils/Enums'

interface ActionsButtonsTypes extends AppTypes {}

const ActionsButtons = (props: ActionsButtonsTypes) => {

    const preventInteraction = () => props.toggleModal(Modals.SignInOrRegister)

    const mobileButtonsArray: ButtonComponentTypes[] = [
        {id: 'search', label: 'Search the database...', onClick: props.navigateTo(Paths.Search)},
        {id: 'favorites', label: 'Favorites', onClick: (props.appState.signedIn ? props.navigateTo(Paths.Favorites) : preventInteraction()) },
        {id: 'history', label: 'History', onClick: (props.appState.signedIn ? props.navigateTo(Paths.History) : preventInteraction())},
        {id: 'goals', label: 'Goals and Progress', onClick: (props.appState.signedIn ? props.navigateTo(Paths.Goals) : preventInteraction())},
    ]

    const landscapeTabletButtonsArray: ButtonComponentTypes[] = [
        {id: 'favorites', label: 'Favorites', onClick: (props.appState.signedIn ? props.navigateTo(Paths.Favorites) : preventInteraction()) },
        {id: 'history', label: 'History', onClick: (props.appState.signedIn ? props.navigateTo(Paths.History) : preventInteraction())},
        {id: 'goals', label: 'Goals and Progress', onClick: (props.appState.signedIn ? props.navigateTo(Paths.Goals) : preventInteraction())},
    ]

    return (
        <div id="actions-buttons-container">
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