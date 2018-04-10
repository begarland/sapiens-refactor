import * as React from 'react'
import HeadingComponent from '../../../../common/HeadingComponent/HeadingComponent'
import {MiniProgressBarArrayDisplay} from '../../../../common/ProgressBar/MiniProgressBar/MiniProgressBarArrayDisplay'
import { AppTypes } from '../../../../App'

interface NutrientsConsoleTypes extends AppTypes {

}

interface NutrientProgressBarTypes {
    type: string;
    consumed: number;
    allotted: number;
    units: string;
    barFills?: {
        barFill: number,
        barTotalFill: number;
    }
}

const NutrientsConsole = (props: NutrientsConsoleTypes) => {

    const micronutrientsArray: NutrientProgressBarTypes[] = [
        {
            type: props.dailyState.nutrients.VITA_IU.id,
            consumed: props.dailyState.nutrients.VITA_IU.consumedValue,
            allotted: props.dailyState.nutrients.VITA_IU.dailyValue,
            units: props.dailyState.nutrients.VITA_IU.units,
        },
        {
            type: props.dailyState.nutrients.VITB6A.id,
            consumed: props.dailyState.nutrients.VITB6A.consumedValue,
            allotted: props.dailyState.nutrients.VITB6A.dailyValue,
            units: props.dailyState.nutrients.VITB6A.units,

        },
        {
            type: props.dailyState.nutrients.VITB12.id,
            consumed: props.dailyState.nutrients.VITB12.consumedValue,
            allotted: props.dailyState.nutrients.VITB12.dailyValue,
            units: props.dailyState.nutrients.VITB12.units,

        },
        {
            type: props.dailyState.nutrients.VITC.id,
            consumed: props.dailyState.nutrients.VITC.consumedValue,
            allotted: props.dailyState.nutrients.VITC.dailyValue,
            units: props.dailyState.nutrients.VITC.units,

        },
        {
            type: props.dailyState.nutrients.ERGCAL.id,
            consumed: props.dailyState.nutrients.ERGCAL.consumedValue,
            allotted: props.dailyState.nutrients.ERGCAL.dailyValue,
            units: props.dailyState.nutrients.ERGCAL.units,

        },
        {
            type: props.dailyState.nutrients.TOCPHA.id,
            consumed: props.dailyState.nutrients.TOCPHA.consumedValue,
            allotted: props.dailyState.nutrients.TOCPHA.dailyValue,
            units: props.dailyState.nutrients.TOCPHA.units,

        },
        {
            type: props.dailyState.nutrients.VITK1.id,
            consumed: props.dailyState.nutrients.VITK1.consumedValue,
            allotted: props.dailyState.nutrients.VITK1.dailyValue,
            units: props.dailyState.nutrients.VITK1.units,

        },
        {
            type: props.dailyState.nutrients.CA.id,
            consumed: props.dailyState.nutrients.CA.consumedValue,
            allotted: props.dailyState.nutrients.CA.dailyValue,
            units: props.dailyState.nutrients.CA.units,

        },
        {
            type: props.dailyState.nutrients.CU.id,
            consumed: props.dailyState.nutrients.CU.consumedValue,
            allotted: props.dailyState.nutrients.CU.dailyValue,
            units: props.dailyState.nutrients.CU.units,

        },
        {
            type: props.dailyState.nutrients.FOL.id,
            consumed: props.dailyState.nutrients.FOL.consumedValue,
            allotted: props.dailyState.nutrients.FOL.dailyValue,
            units: props.dailyState.nutrients.FOL.units,

        },
        {
            type: props.dailyState.nutrients.FE.id,
            consumed: props.dailyState.nutrients.FE.consumedValue,
            allotted: props.dailyState.nutrients.FE.dailyValue,
            units: props.dailyState.nutrients.FE.units,

        },
        {
            type: props.dailyState.nutrients.MG.id,
            consumed: props.dailyState.nutrients.MG.consumedValue,
            allotted: props.dailyState.nutrients.MG.dailyValue,
            units: props.dailyState.nutrients.MG.units,

        },
        {
            type: props.dailyState.nutrients.MN.id,
            consumed: props.dailyState.nutrients.MN.consumedValue,
            allotted: props.dailyState.nutrients.MN.dailyValue,
            units: props.dailyState.nutrients.MN.units,

        },
        {
            type: props.dailyState.nutrients.NIA.id,
            consumed: props.dailyState.nutrients.NIA.consumedValue,
            allotted: props.dailyState.nutrients.NIA.dailyValue,
            units: props.dailyState.nutrients.NIA.units,

        },
        {
            type: props.dailyState.nutrients.PANTAC.id,
            consumed: props.dailyState.nutrients.PANTAC.consumedValue,
            allotted: props.dailyState.nutrients.PANTAC.dailyValue,
            units: props.dailyState.nutrients.PANTAC.units,

        },
        {
            type: props.dailyState.nutrients.P.id,
            consumed: props.dailyState.nutrients.P.consumedValue,
            allotted: props.dailyState.nutrients.P.dailyValue,
            units: props.dailyState.nutrients.P.units,

        },
        {
            type: props.dailyState.nutrients.K.id,
            consumed: props.dailyState.nutrients.K.consumedValue,
            allotted: props.dailyState.nutrients.K.dailyValue,
            units: props.dailyState.nutrients.K.units,

        },
        {
            type: props.dailyState.nutrients.RIBF.id,
            consumed: props.dailyState.nutrients.RIBF.consumedValue,
            allotted: props.dailyState.nutrients.RIBF.dailyValue,
            units: props.dailyState.nutrients.RIBF.units,

        },
        {
            type: props.dailyState.nutrients.SE.id,
            consumed: props.dailyState.nutrients.SE.consumedValue,
            allotted: props.dailyState.nutrients.SE.dailyValue,
            units: props.dailyState.nutrients.SE.units,

        },
        {
            type: props.dailyState.nutrients.THIA.id,
            consumed: props.dailyState.nutrients.THIA.consumedValue,
            allotted: props.dailyState.nutrients.THIA.dailyValue,
            units: props.dailyState.nutrients.THIA.units,

        },
        {
            type: props.dailyState.nutrients.ZN.id,
            consumed: props.dailyState.nutrients.ZN.consumedValue,
            allotted: props.dailyState.nutrients.ZN.dailyValue,
            units: props.dailyState.nutrients.ZN.units,

        },

    ]

    const macronutrientsArray: NutrientProgressBarTypes[] = [
        {
            type: props.dailyState.nutrients.FAT.id,
            consumed: props.dailyState.nutrients.FAT.consumedValue,
            allotted: props.dailyState.nutrients.FAT.dailyValue,
            units: props.dailyState.nutrients.FAT.units,

        },
        {
            type: props.dailyState.nutrients.FASAT.id,
            consumed: props.dailyState.nutrients.FASAT.consumedValue,
            allotted: props.dailyState.nutrients.FASAT.dailyValue,
            units: props.dailyState.nutrients.FASAT.units,

        },
        {
            type: props.dailyState.nutrients.CHOLE.id,
            consumed: props.dailyState.nutrients.CHOLE.consumedValue,
            allotted: props.dailyState.nutrients.CHOLE.dailyValue,
            units: props.dailyState.nutrients.CHOLE.units,

        },
        {
            type: props.dailyState.nutrients.NA.id,
            consumed: props.dailyState.nutrients.NA.consumedValue,
            allotted: props.dailyState.nutrients.NA.dailyValue,
            units: props.dailyState.nutrients.NA.units,

        },
        {
            type: props.dailyState.nutrients.PROCNT.id,
            consumed: props.dailyState.nutrients.PROCNT.consumedValue,
            allotted: props.dailyState.nutrients.PROCNT.dailyValue,
            units: props.dailyState.nutrients.PROCNT.units,

        },
        {
            type: props.dailyState.nutrients.CHODF.id,
            consumed: props.dailyState.nutrients.CHODF.consumedValue,
            allotted: props.dailyState.nutrients.CHODF.dailyValue,
            units: props.dailyState.nutrients.CHODF.units,

        },
        {
            type: props.dailyState.nutrients.FIBTG.id,
            consumed: props.dailyState.nutrients.FIBTG.consumedValue,
            allotted: props.dailyState.nutrients.FIBTG.dailyValue,
            units: props.dailyState.nutrients.FIBTG.units,

        },
    ]

    micronutrientsArray.map(nutrient => {
        const barFill = 150 * (nutrient.consumed / (nutrient.allotted + (nutrient.allotted / 3)))
        const barTotalFill = 150 * (nutrient.allotted / (nutrient.allotted + (nutrient.allotted / 3)))
        nutrient.barFills = {barFill, barTotalFill}
    })

    macronutrientsArray.map(nutrient => {
        const barFill = 150 * (nutrient.consumed / (nutrient.allotted + (nutrient.allotted / 3)))
        const barTotalFill = 150 * (nutrient.allotted / (nutrient.allotted + (nutrient.allotted / 3)))
        nutrient.barFills = {barFill, barTotalFill}
    })


    const Macronutrients = (
        <div id="macronutrient-container">
            <HeadingComponent heading="Macronutrients"/>
            <MiniProgressBarArrayDisplay array={macronutrientsArray}/>
        </div>
    )
    const Micronutrients = (
        <div id="micronutrient-container">
            <HeadingComponent heading="Micronutrients"/>
            <MiniProgressBarArrayDisplay array={micronutrientsArray}/>
        </div>
    )
    return (
        <div id="nutrients-console-root">
            {Macronutrients}
            {Micronutrients}
        </div>
    )
}

export default NutrientsConsole
