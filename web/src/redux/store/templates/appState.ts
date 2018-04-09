export const appState: AppStateTypes = {
    showNavigateButton: true,
    moveBox: false,
    spinLogo: true,
    inputs: {
        name: '',
        age: null,
        favoriteColor: '',
    },
    activeFooterButton: 'nutrition',
    showActionsBackButton: false,
    showUserActions: false,
    userActionsDrawerClass: '',
    showModal: true,
    modalSelection: 'calories',
}

export interface AppStateTypes {
    showNavigateButton: boolean;
    moveBox: boolean;
    spinLogo: boolean;
    inputs: InputTypes;
    activeFooterButton: string;
    showActionsBackButton: boolean;
    showUserActions: boolean;
    userActionsDrawerClass: string;
    showModal: boolean;
    modalSelection: string;
}

export interface InputTypes {
    name: string;
    age: number;
    favoriteColor: string;
}