import {FooterButtons, Modals} from '../../../content/utils/Enums'

export const appState: AppStateTypes = {
    signedIn: true,
    adjustableSliderValues: {
        caloriesConsumed: 0,
        caloriesBurned: 0,
        hydrated: 0,
        dehydrated: 0,
    },
    inputs: {
        adjustableSlider: {
            caloriesConsumed: 0,
            caloriesBurned: 0,
            hydrated: 0,
            dehydrated: 0,
        },
        signIn: {
            email: '',
            password: '',
            showPassword: false,
        },
        forgotPassword: {
            email: '',
            emailExistsInDB: null,
        },
        weighIn: {
            weight: null,
        },
        createMember: {
            step: 3,
            numSteps: 4,
            email: '',
            confirmEmail: '',
            password: '',
            confirmPassword: '',
            showPassword: false,
            name: '',
            birthDate: '',
            height: null, //in/mm
            weight: null, //lb/kg
            metric: false,
            gender: 50, //0 male - 100 female #feminism
            targetWeightChange: 0,
        },
        editMember: {
            email: '',
            confirmEmail: '',
            password: '',
            confirmPassword: '',
            name: '',
            height: 0,
            weight: 0,
            metric: false,
            gender: 50,
            targetWeightChange: 0,
        },

    },
    activeFooterButton: FooterButtons.Nutrition,
    showActionsBackButton: false,
    showUserActions: false,
    userActionsDrawerClass: '',
    showModal: false,
    modalSelection: Modals.None,

    spinners: {
        signIn: false,
        forgotPassword: false,
        weighIn: false,
    },
    error: '',
}

export interface AppStateTypes {
    signedIn: boolean;
    adjustableSliderValues: AdjustableSliderValuesTypes;
    inputs: InputTypes;
    activeFooterButton: string;
    showActionsBackButton: boolean;
    showUserActions: boolean;
    userActionsDrawerClass: string;
    showModal: boolean;
    modalSelection: string;
    spinners: SpinnerTypes;
    error: string;
}

export interface InputTypes {
    adjustableSlider: {
        caloriesConsumed: number;
        caloriesBurned: number;
        hydrated: number;
        dehydrated: number;
    },
    signIn: {
        email: string;
        password: string;
        showPassword: boolean;
    },
    forgotPassword: {
        email: string;
        emailExistsInDB: null | boolean;
    },
    weighIn: {
        weight: null | number;
    },
    createMember: {
        step: number;
        numSteps: 4;
        email: string;
        confirmEmail: string;
        password: string;
        confirmPassword: string;
        showPassword: boolean;
        name: string;
        birthDate: string;
        height: null | number; //in/mm
        weight: null | number; //lb/kg
        metric: boolean;
        gender: number; //0 male - 100 female #feminism
        targetWeightChange: number;
    },
    editMember: {
        email: string;
        confirmEmail: string;
        password: string;
        confirmPassword: string;
        name: string;
        height: number;
        weight: number;
        metric: boolean;
        gender: number;
        targetWeightChange: number;
    },
}

export interface AdjustableSliderValuesTypes {
    caloriesConsumed: number;
    caloriesBurned: number;
    hydrated: number;
    dehydrated: number;
}

export interface SpinnerTypes {
    signIn: boolean;
    forgotPassword: boolean;
    weighIn: boolean;
}

