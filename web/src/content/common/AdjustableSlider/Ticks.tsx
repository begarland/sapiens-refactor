import * as React from 'react'

interface TicksInterface {
    largeTickLocations: number [];
    numSmallTicks: number;

}

const Ticks = (props: TicksInterface) => {
    const smallTick = (position: number, index: number) => {
        return (<div className="small-tick" style={{left: position}} key={index}/>)
    }

    const largeTick = (position: number, thickness: number, index: number) => {
        return (<div className="large-tick" style={{left: position, width: thickness + 'px'}} key={index}/>)
    }

    let smallTicksLocations: number [] = []
    props.largeTickLocations.map((location, index) => {
        const distance = (300/(props.largeTickLocations.length - 1))/(props.numSmallTicks + 1)
        if (index < props.largeTickLocations.length - 1) {
            for (let i = 0; i <= props.numSmallTicks; i++) {
                smallTicksLocations.push(location + ( distance * i))
            }
        }})

    return (
        <div className="tick-adjustment">
            {props.largeTickLocations.map((location, index) => {
                return largeTick(location, 2, index)
            })}
            {smallTicksLocations.map((location, index)=> {
                return smallTick(location, index)
            })}
        </div>
    )
}

export default Ticks
