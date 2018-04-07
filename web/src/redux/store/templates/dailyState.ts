export const dailyState: DailyStateTypes = {
    calories: {
        consumed: 0,
        allotted: 0,
        burned: 0,
        target: 0,
        progressBarFills: {
            fill: 75,
            innerFill: 30,
            targetFill: 225,
            totalFill: 225,
            last: {
                fill: 0,
                innerFill: 0,
            }
        }
    },
    hydration: {
        hydrated: 0,
        dehydrated: 0,
        baseHydration: 0,
        targetHydration: 0,
        progressBarFills: {
            fill: 75,
            innerFill: 30,
            targetFill: 225,
            totalFill: 225,
            last: {
                fill: 0,
                innerFill: 0,
            }
        }
    },
    nutrients: {

    },
}

export interface DailyStateTypes {
    calories: CalorieTypes;
    hydration: HydrationTypes;
    nutrients: NutrientsTypes;
}

export interface CalorieTypes{
    consumed: number;
    allotted: number;
    burned: number;
    target: number;
    progressBarFills: ProgressBarFillTypes;
}

export interface HydrationTypes{
    hydrated: number;
    dehydrated: number;
    baseHydration: number;
    targetHydration: number;
    progressBarFills: ProgressBarFillTypes;
}

export interface NutrientsTypes{}

export interface ProgressBarFillTypes {
    fill: number;
    innerFill: number;
    targetFill: number;
    totalFill: number;
    last: {
        fill: number;
        innerFill: number;
    }
}