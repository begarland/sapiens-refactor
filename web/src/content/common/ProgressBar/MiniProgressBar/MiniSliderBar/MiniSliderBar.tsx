import * as React from 'react'

export interface MiniSliderBarProps {
    id?: string;
    location: number;
    type: string;
    fill?: boolean;
    fillColor?: string;
}

const MiniSliderBar = (props: MiniSliderBarProps) => {
    return(
        <div
            id={props.id}
            className="outermost-upper-mini-slider-bar-container"
            style={{marginLeft: `${props.location - 6}px`}}
        >
            <div id="mini-vertical-line-upper"/>
        </div>
    )
}

export default MiniSliderBar