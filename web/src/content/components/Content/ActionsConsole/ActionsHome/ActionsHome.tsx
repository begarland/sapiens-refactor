import * as React from 'react'
import SearchContainer from './SearchContainer/SearchContainer'
import ActionsButtons from './ActionsButtons/ActionsButtons'
import {AppTypes} from '../../../../App'


interface ActionsHomeTypes extends AppTypes {

}

const ActionsHome = (props: ActionsHomeTypes) => {
    return (
        <div id="actions-home-container">
            <div id="landscape-tablet-and-above-actions-content">
                <SearchContainer {...props}/>
                <ActionsButtons {...props}/>
            </div>
            <div id="mobile-and-portrait-tablet-actions-content">
                <ActionsButtons {...props}/>
            </div>
        </div>
    )
}

export default ActionsHome