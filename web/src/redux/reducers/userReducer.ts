import {userState, UserStateTypes} from '../store/templates/userState'

export default (state: UserStateTypes = userState, action) => {
    switch (action.type) {
        case 'some-cases': {
            return {
                ...state,

            }
        }
        default: {
            return state
        }
    }
}