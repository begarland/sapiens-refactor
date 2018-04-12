import * as React from 'react'
import LabelDataArrayDisplay from '../../../../common/LabelDataDisplay/LabelDataArrayDisplay'
import HeadingComponent from '../../../../common/HeadingComponent/HeadingComponent'
import ProgressBar from '../../../../common/ProgressBar/RegularProgressBar/ProgressBar'
import { LabelDataDisplayTypes } from '../../../../common/LabelDataDisplay/LabelDataDisplay'
import { BarColorsTypes } from '../../../../utils/MiscellaneousInterfaces'
import { ProgressBarFillTypes } from '../../../../../redux/store/templates/dailyState'

interface MxConsoleTypes {
    heading: string;
    labelDataArray: LabelDataDisplayTypes[];
    barColors: BarColorsTypes;
    barFills: ProgressBarFillTypes;
    onClick: (Event) => void;

}
const MxConsole = (props: MxConsoleTypes) => {
    return (
        <div className="mx-console">
            <HeadingComponent heading={props.heading}/>
            <ProgressBar
                type={props.heading}
                firstUpperSlider={props.labelDataArray[0].label}
                firstLowerSlider={props.labelDataArray[1].label}
                secondLowerSlider={props.labelDataArray[2].label}
                secondUpperSlider={props.labelDataArray[3].label}
                barFillColor={props.barColors.barFillColor}
                barInnerFillColor={props.barColors.barInnerFillColor}
                barTotalFillColor={props.barColors.barTotalFillColor}
                barFill={props.barFills.fill}
                barInnerFill={props.barFills.innerFill}
                barTargetFill={props.barFills.targetFill}
                barTotalFill={props.barFills.totalFill}
                onClick={props.onClick}
            />
            <LabelDataArrayDisplay labelDataArray={props.labelDataArray}/>
        </div>
    )
}

export default MxConsole