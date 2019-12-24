import {
  LOGIN,
  LOGOUT,
  INTEGRATE_WALLET,
  REMOVE_WALLET,
  LOGIN_JETSTREAM,
} from 'redux/actions/actionTypes'

const initialState = {
  isLoggedIn: !!sessionStorage.getItem('walletInstance'),
  isJetstream: false,
  privateKey: null,
  address: null,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
      }
    case LOGIN_JETSTREAM:
      return {
        ...state,
        isLoggedIn: true,
        isJetstream: true,
        address: jet.klay.address,
      }
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      }
    case INTEGRATE_WALLET:
      return {
        ...state,
        privateKey: action.payload.privateKey,
        address: action.payload.address,
      }
    case REMOVE_WALLET:
      return {
        ...state,
        privateKey: null,
        address: null,
      }
    default:
      return state
  }
}

export default authReducer
