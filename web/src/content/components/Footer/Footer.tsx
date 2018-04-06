import * as React from 'react'
import {AppTypes} from '../../App'
import InlineButtonContainer from '../../common/InlineButtonContainer/InlineButtonContainer'
import {ButtonComponentTypes} from '../../common/ButtonComponent/ButtonComponent'

interface FooterTypes extends AppTypes {

}

const Footer = (props: FooterTypes) => {
    const activeFooterButton = props.appState.activeFooterButton

    const footerButtons: ButtonComponentTypes[] = [
        {
            id: 'nutrition-console-select',
            label: 'Nutrition',
            onClick: props.navigateToNutrition,
            additionalClasses:`footer-button ${activeFooterButton === 'nutrition' ? '' : 'inactive-footer-button'}`
        },
        {
            id: 'actions-console-select',
            label: 'Actions',
            onClick: props.navigateToActions,
            additionalClasses:`footer-button ${activeFooterButton === 'actions' ? '' : 'inactive-footer-button'}`
        }
    ]


    return (
        <div id="footer-root">
            <InlineButtonContainer buttonArray={footerButtons} />
        </div>
    )
}

export default Footer