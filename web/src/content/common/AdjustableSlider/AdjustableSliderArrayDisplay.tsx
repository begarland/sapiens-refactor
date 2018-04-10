import * as React from 'react'
import AdjustableSlider, { AdjustableSliderTypes } from './AdjustableSlider'

export interface AdjustableSliderArrayDisplayTypes {
    array: AdjustableSliderTypes [];
}

const AdjustableSliderArrayCreator = (props: AdjustableSliderArrayDisplayTypes) => {
    return(
        <div id="adjustable-slider-array-display">
            {props.array.map(function(value: any, index: number) {
                return(
                    <AdjustableSlider
                        key={index}
                        id={value.id}
                        label={value.label}
                        units={value.units}
                        deltaValue={value.deltaValue}
                        sliderThumbColor={value.sliderThumbColor}
                        handleDrag={value.handleDrag}
                        largeTickLocations={value.largeTickLocations}
                        numSmallTicks={value.numSmallTicks}
                    />
                )
            })

            }
        </div>
    )
}

export default AdjustableSliderArrayCreator
