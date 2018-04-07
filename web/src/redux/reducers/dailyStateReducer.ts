import {dailyState, DailyStateTypes} from '../store/templates/dailyState'

export default (state: DailyStateTypes = dailyState, action) => {
    switch (action.type) {
        case 'some-case': {
            return {
                ...state,

            }
        }
        default: {
            return state
        }
    }
}