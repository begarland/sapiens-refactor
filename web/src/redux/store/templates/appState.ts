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
    showModal: false,
}

export interface AppStateTypes {
    showNavigateButton: boolean;
    moveBox: boolean;
    spinLogo: boolean;
    inputs: InputTypes;
    activeFooterButton: string;
    showActionsBackButton: boolean;
    showUserActions: boolean;
    showModal: boolean;


}

export interface InputTypes {
    name: string;
    age: number;
    favoriteColor: string;
}