import { LOGIN_USER, LOGOUT_USER } from '../actions/actions'
import jwtDecode from 'jwt-decode'

const initialState = () => {
    const token = localStorage.getItem('ACCESS_TOKEN');
    if (token) {
        return jwtDecode(token)
    } else {
        return {
            userRole: "guest"
        }
    }
}

function userReducer(currentUser = initialState(), action) {
    switch (action.type) {
        case LOGIN_USER:
            return {
                id: action.id,
                userRole: action.userRole,
                userName: action.userName,
            }
        case LOGOUT_USER:
            return {
                userRole: "guest"
            }
        default:
            return currentUser
    }
}


export default userReducer