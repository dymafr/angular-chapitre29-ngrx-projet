import * as AuthActions from './auth.actions';

describe('*** Auth actions ***', () => {
  describe('** TryFetchCurrentAction **', () => {
    it('-> should create a TryFetchCurrentAction action', () => {
      const action = AuthActions.tryFetchCurrentUserAction();
      expect(action).toEqual({
        type: AuthActions.tryFetchCurrentUserAction.type,
      });
    });
  });
  describe('** FetchCurrentUserSuccessAction **', () => {
    it('-> should create a FetchCurrentUserSuccessAction action', () => {
      const user = {
        email: 'paul@dupond.fr',
        name: 'Paul',
      };
      const action = AuthActions.fetchCurrentUserSuccessAction({ user });
      expect(action).toEqual({
        type: AuthActions.fetchCurrentUserSuccessAction.type,
        user,
      });
    });
  });
});
