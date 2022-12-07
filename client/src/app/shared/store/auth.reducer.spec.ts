import * as AuthReducer from './auth.reducer';
import * as AuthActions from './auth.actions';

describe('*** Auth reducer ***', () => {
  describe('*** FetchCurrentUserSuccessAction ***', () => {
    it('-> should set user in state', () => {
      const initialAuthState = AuthReducer.AUTH_INTIAL_STATE;
      const user = { name: 'Jean', email: 'jean@gmail.com' };
      const action = AuthActions.fetchCurrentUserSuccessAction({ user });
      expect(AuthReducer.authReducer(initialAuthState, action)).toEqual({
        ...initialAuthState,
        user,
        isLoggedin: true,
      });
    });
    it('-> should set null in state', () => {
      const initialAuthState = AuthReducer.AUTH_INTIAL_STATE;
      const user = null;
      const action = AuthActions.fetchCurrentUserSuccessAction({ user });
      expect(AuthReducer.authReducer(initialAuthState, action)).toEqual({
        ...initialAuthState,
        user,
        isLoggedin: false,
      });
    });
  });
});
