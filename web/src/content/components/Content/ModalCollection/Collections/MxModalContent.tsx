import * as React from 'react'
import AdjustableSliderArrayCreator from '../../../../common/AdjustableSlider/AdjustableSliderArrayDisplay'
import { AppTypes } from '../../../../App'
import { AdjustableSliderTypes } from '../../../../common/AdjustableSlider/AdjustableSlider'
import { Mx, Units, Calories, Hydration } from '../../../../utils/Enums'

interface MxModalContentTypes extends AppTypes {}

const MxModalContent = (props: MxModalContentTypes) => {
    let largeTickLocations: number[] = []
    let content: boolean
    let contentArray: AdjustableSliderTypes [] = []
    const inputChange = props.inputChange('adjustableSlider')
    const modalSelection = props.appState.modalSelection
    if (modalSelection === Mx.Calories){
        content = true
        largeTickLocations = [0, 59.5, 119.5, 179.5, 239.5, 299]
        contentArray = [
            {
                id: `${Mx.CaloriesConsumed}`,
                label: `${Calories.Consumed}`,
                units: (props.memberState.metric ? Units.CaloriesMetric : Units.CaloriesImperial),
                deltaValue: props.appState.inputs.adjustableSlider.caloriesConsumed,
                sliderPosition: props.appState.adjustableSliderValues.caloriesConsumed,
                handleDrag: props.handleDrag(`${Mx.CaloriesConsumed}`),
                sliderThumbColor: `${Calories.BarFillColor}`,
                inputChange,
                largeTickLocations,
                numSmallTicks: 4,

            },
            {
                id: `${Mx.CaloriesBurned}`,
                label: `${Calories.Burned}`,
                units: (props.memberState.metric ? Units.CaloriesMetric : Units.CaloriesImperial),
                deltaValue: props.appState.inputs.adjustableSlider.caloriesBurned,
                sliderPosition: props.appState.adjustableSliderValues.caloriesBurned,
                handleDrag: props.handleDrag( `${Mx.CaloriesBurned}`),
                sliderThumbColor: `${Calories.BarInnerFillColor}`,
                inputChange,
                largeTickLocations,
                numSmallTicks: 4,

            },
        ]
    } else if (modalSelection === Mx.Hydration) {
        const largeTickLocations = [0, 59.5, 119.5, 179.5, 239.5, 299.5]
        const numSmallTicks = (props.memberState.metric ? 3 : 4)
        content = true
        contentArray = [
            {
                id: `${Mx.Hydrated}`,
                label: `${Hydration.Hydrated}`,
                units: (props.memberState.metric ? Units.HydrationMetric : Units.HydrationImperial),
                deltaValue: props.appState.inputs.adjustableSlider.hydrated,
                handleDrag: props.handleDrag(`${Mx.Hydrated}`),
                sliderPosition: props.appState.adjustableSliderValues.hydrated,
                sliderThumbColor: `${Hydration.BarFillColor}`,
                inputChange,
                largeTickLocations,
                numSmallTicks,
            },
            {
                id: `${Mx.Dehydrated}`,
                label: `${Hydration.Dehydrated}`,
                units: (props.memberState.metric ? Units.HydrationMetric : Units.HydrationImperial),
                deltaValue: props.appState.inputs.adjustableSlider.dehydrated,
                sliderPosition: props.appState.adjustableSliderValues.dehydrated,
                handleDrag: props.handleDrag(`${Mx.Dehydrated}`),
                sliderThumbColor: `${Hydration.BarInnerFillColor}`,
                inputChange,
                largeTickLocations,
                numSmallTicks,
            },
        ]
    }
    else {
        content = false

    }
    return (
        <div id="mx-modal-content">
            {content && <AdjustableSliderArrayCreator array={contentArray}/>}
        </div>
    )
}

export default MxModalContent
