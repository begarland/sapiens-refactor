import * as React from 'react'
import MiniProgressBar from '../../../../common/ProgressBar/MiniProgressBar/MiniProgressBar'

interface NutrientsConsoleTypes {

}

const NutrientsConsole = (props: NutrientsConsoleTypes) => {

    const MacroNutrientBarColors = {
        barFillColor: '#762A83',
        barTotalFillColor: '#C2A5CF',
    }

    const MicroNutrientBarColors = {
        barFillColor:'#C2A5CF',
        barTotalFillColor: '#762A83',
    }

    return (
        <div id="nutrients-console-root">
            <div className="forced-space"/>
            {/*<MiniProgressBar type="test" barFills={{barTotalFill: 100, barFill: 30}} />*/}
        </div>
    )
}

export default NutrientsConsole
