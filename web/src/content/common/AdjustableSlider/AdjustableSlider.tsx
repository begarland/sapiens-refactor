import * as React from 'react'
import Draggable from 'react-draggable'
import Ticks from './Ticks'
import SliderValueInput from './SliderValueInput'

export interface AdjustableSliderTypes {
    id: string;
    label: string;
    units: string;
    deltaValue: number;
    sliderPosition: number;
    sliderThumbColor?: string;
    largeTickLocations: number [];
    numSmallTicks: number;
    handleDrag: (MouseEvent, Object) => void;
    inputChange: (id: string, value: string | boolean | number) => void;



}

const AdjustableSlider = (props: AdjustableSliderTypes) => {
    return (
        <div className="slider-container">
            <div className="slider-label-input-container">
                <h4 id={props.id + '-label'} className="slider-label">{props.label}:</h4>
                <SliderValueInput id={props.id} units={props.units} deltaValue={props.deltaValue} onInputChange={props.inputChange}/>
            </div>
            <div className="slider-bar">
                <Ticks largeTickLocations={props.largeTickLocations} numSmallTicks={props.numSmallTicks}/>
                <Draggable
                    axis="x"
                    position={{x: props.sliderPosition, y: 0}}
                    bounds={{top: 0, left: 0, right: 300, bottom: 0}}
                    onDrag={props.handleDrag}
                >
                    <div className="invisible-slider">
                        <div
                            className="slider-thumb"
                            style={{borderColor: `transparent transparent ${props.sliderThumbColor ? props.sliderThumbColor : '#66AA55'} transparent`}}
                        />
                    </div>
                </Draggable>
            </div>

        </div>
    )
}

export default AdjustableSlider