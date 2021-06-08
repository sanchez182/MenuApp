import { IAuthActions,IPayloadAuth,SET_AUTH_LOGIN,CHECKING_FINISH,AUTH_LOGOUT } from './actionsInterfaces/IAuthActions';


export const setAuthLogin = (payload: IPayloadAuth): IAuthActions => {
  return {
    type: SET_AUTH_LOGIN,
    payload 
  }
}

export const checkingFinish = (): any => {
  return {
    type: CHECKING_FINISH
  }
}


export const logout = (): any => {
  return {
    type: AUTH_LOGOUT
  }
}


/* authCheckingFinish: '[auth] Finish checking login state',
authStartLogin: '[auth] Start login',
authLogin: '[auth] Login',
authStartRegister: '[auth] Start Register',
authStartStartTokenRenew: '[auth] Start token renew',
authLogout: '[auth] Logout',
 */