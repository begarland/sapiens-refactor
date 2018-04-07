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
        FAT: {
            id: 'fat',
            units: 'g',
            dvUnits: 'g',
            dailyValue: 50.57,
            consumedValue: 20,
            tagname: 'FAT',
        },
        FASAT: {
            id: 'saturated fat',
            units: 'g',
            dvUnits: 'g',
            dailyValue: 15.56,
            consumedValue: 10,
            tagname: 'FASAT',
        },
        CHOLE: {
            id: 'cholesterol',
            units: 'mg',
            dvUnits: 'mg',
            dailyValue: 233400,
            consumedValue: 180000,
            tagname: 'CHOLE',
        },
        NA: {
            id: 'sodium',
            units: 'mg',
            dvUnits: 'mg',
            dailyValue: 1867.2,
            consumedValue: 1500,
            tagname: 'NA',
        },
        K: {
            id: 'potassium',
            units: 'mg',
            dvUnits: 'mg',
            dailyValue: 2723,
            consumedValue: 2320,
            tagname: 'K',
        },
        CHODF: {
            id: 'carbohydrate',
            units: 'g',
            dvUnits: 'g',
            dailyValue: 233.4,
            consumedValue: 230,
            tagname: 'CHODF',
        },
        FIBTG: {
            id: 'fiber',
            units: 'g',
            dvUnits: 'g',
            dailyValue: 19.45,
            consumedValue: 10,
            tagname: 'FIBTG',
        },
        PROCNT: {
            id: 'protein',
            units: 'g',
            dvUnits: 'g',
            dailyValue: 38.9,
            consumedValue: 30,
            tagname: 'PROCNT',
        },
        VITA_IU : {
            id: 'vitamin A',
            units: 'IU',
            dvUnits: 'IU',
            dailyValue: 3890,
            consumedValue: 820,
            tagname: 'VITA_IU',
        },
        VITC: {
            id: 'vitamin C',
            units: 'mg',
            dvUnits: 'mg',
            dailyValue: 46.68,
            consumedValue: 20,
            tagname: 'VITC',
        },
        CA: {
            id: 'calcium',
            units: 'mg',
            dvUnits: 'mg',
            dailyValue: 778,
            consumedValue: 230,
            tagname: 'CA',
        },
        FE: {
            id: 'iron',
            units: 'mg',
            dvUnits: 'mg',
            dailyValue: 14.004000000000001,
            consumedValue: 10,
            tagname: 'FE',
        },
        ERGCAL: {
            id: 'vitamin D',
            units: 'µg',
            dvUnits: 'µg',
            dailyValue: 7.78,
            consumedValue: 4,
            tagname: 'ERGCAL',
        },
        TOCPHA: {
            id: 'vitamin E',
            units: 'µg',
            dvUnits: 'µg',
            dailyValue: 15.56,
            consumedValue: 10,
            tagname: 'TOCPHA',
        },
        VITK1: {
            id: 'vitamin K',
            units: 'µg',
            dvUnits: 'µg',
            dailyValue: 62.24,
            consumedValue: 40,
            tagname: 'VITK1',
        },
        THIA: {
            id: 'thiamin',
            units: 'mg',
            dvUnits: 'mg',
            dailyValue: 1.167,
            consumedValue: .5,
            tagname: 'THIA',
        },
        RIBF: {
            id: 'riboflavin',
            units: 'mg',
            dvUnits: 'mg',
            dailyValue: 1.3226,
            consumedValue: .5,
            tagname: 'RIBF',
        },
        NIA: {
            id: 'niacin',
            units: 'mg',
            dvUnits: 'mg',
            dailyValue: 15.56,
            consumedValue: 0,
            tagname: 'NIA',
        },
        VITB6A: {
            id: 'vitamin B6',
            units: 'mg',
            dvUnits: 'mg',
            dailyValue: 1.556,
            consumedValue: 0,
            tagname: 'VITB6A',
        },
        FOL: {
            id: 'folate',
            units: 'µg',
            dvUnits: 'µg',
            dailyValue: 311.2,
            consumedValue: 210,
            tagname: 'FOL',
        },
        VITB12: {
            id: 'vitamin B12',
            units: 'µg',
            dvUnits: 'µg',
            dailyValue: 4.668,
            consumedValue: 4,
            tagname: 'VITB12',
        },
        PANTAC: {
            id: 'pantothenic acid',
            units: 'mg',
            dvUnits: 'mg',
            dailyValue: 7.78,
            consumedValue: 5,
            tagname: 'PANTAC',
        },
        P: {
            id: 'phosphorus',
            units: 'mg',
            dvUnits: 'mg',
            dailyValue: 778,
            consumedValue: 740,
            tagname: 'P',
        },
        MG: {
            id: 'magnesium',
            units: 'mg',
            dvUnits: 'mg',
            dailyValue: 311.2,
            consumedValue: 210,
            tagname: 'MG',
        },
        ZN: {
            id: 'zinc',
            units: 'mg',
            dvUnits: 'mg',
            dailyValue: 11.67,
            consumedValue: 10,
            tagname: 'ZN',
        },
        SE: {
            id: 'selenium',
            units: 'µg',
            dvUnits: 'µg',
            dailyValue: 54.46,
            consumedValue: 40,
            tagname: 'SE',
        },
        CU: {
            id: 'copper',
            units: 'mg',
            dvUnits: 'mg',
            dailyValue: 1.556,
            consumedValue: .5,
            tagname: 'CU',
        },
        MN: {
            id: 'manganese',
            units: 'mg',
            dvUnits: 'mg',
            dailyValue: 1.556,
            consumedValue: .5,
            tagname: 'MN',
        }
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

export interface NutrientsTypes{
    FAT: NutrientTypes;
    FASAT: NutrientTypes;
    CHOLE: NutrientTypes;
    NA: NutrientTypes;
    K: NutrientTypes;
    CHODF: NutrientTypes;
    FIBTG: NutrientTypes;
    PROCNT: NutrientTypes;
    VITA_IU : NutrientTypes;
    VITC: NutrientTypes;
    CA: NutrientTypes;
    FE: NutrientTypes;
    ERGCAL: NutrientTypes;
    TOCPHA: NutrientTypes;
    VITK1: NutrientTypes;
    THIA: NutrientTypes;
    RIBF: NutrientTypes;
    NIA: NutrientTypes;
    VITB6A: NutrientTypes;
    FOL: NutrientTypes;
    VITB12: NutrientTypes;
    PANTAC: NutrientTypes;
    P: NutrientTypes;
    MG: NutrientTypes;
    ZN: NutrientTypes;
    SE: NutrientTypes;
    CU:  NutrientTypes;
    MN: NutrientTypes;
}

export interface NutrientTypes {
    id: string;
    units: string;
    dvUnits: string;
    dailyValue: number;
    consumedValue: number;
    tagname: string;
}

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