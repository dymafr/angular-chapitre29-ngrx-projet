import * as AuthSelectors from './auth.selectors';
import * as AuthReducer from './auth.reducer';

describe('*** Auth selectors ***', () => {
  describe('*** SelectAuthFeature ***', () => {
    it('-> should return AuthState', () => {
      const initialAuthState = AuthReducer.AUTH_INTIAL_STATE;
      const stateSlice = AuthSelectors.selectAuthFeature({
        [AuthReducer.authStateKey]: initialAuthState,
      });
      expect(stateSlice).toEqual(initialAuthState);
    });
  });
  describe('*** SelecCurrentUser ***', () => {
    it('-> should return null', () => {
      const initialAuthState = AuthReducer.AUTH_INTIAL_STATE;
      const stateSlice = AuthSelectors.selectCurrentUser({
        [AuthReducer.authStateKey]: initialAuthState,
      });
      expect(stateSlice).toEqual(null);
    });
  });
  it('-> should return user', () => {
    const user = { name: 'Jean', email: 'jean@gmail.com' };
    const initialAuthState = AuthReducer.AUTH_INTIAL_STATE;
    const stateSlice = AuthSelectors.selectCurrentUser({
      [AuthReducer.authStateKey]: { ...initialAuthState, user },
    });
    expect(stateSlice).toEqual(user);
  });
});
