import reducer, { initialState, type State } from './reducer';

describe('RegistrationContext Reducer', () => {
  it('increments the step on NEXT_STEP', () => {
    const nextState = reducer(initialState, { type: 'NEXT_STEP' });
    expect(nextState.step).toBe(initialState.step + 1);
  });

  it('decrements the step on PREV_STEP', () => {
    const state: State = { ...initialState, step: 2 };
    const nextState = reducer(state, { type: 'PREV_STEP' });
    expect(nextState.step).toBe(1);
  });

  it('updates the selected OTP method', () => {
    const nextState = reducer(initialState, {
      type: 'UPDATE_OTP_SELECTED_METHOD',
      payload: 'email',
    });
    expect(nextState.selectedMethod).toBe('email');
  });

  it('updates a string form field', () => {
    const nextState = reducer(initialState, {
      type: 'UPDATE_FIELD',
      payload: { field: 'firstName', value: 'Alice' },
    });
    expect(nextState.form.firstName).toBe('Alice');
  });

  it('updates a boolean form field', () => {
    const nextState = reducer(initialState, {
      type: 'UPDATE_FIELD',
      payload: { field: 'termsAccepted', value: true },
    });
    expect(nextState.form.termsAccepted).toBe(true);
  });

  it('returns the same state for unknown action', () => {
    // @ts-expect-error intentionally passing invalid action
    const nextState = reducer(initialState, { type: 'UNKNOWN' });
    expect(nextState).toEqual(initialState);
  });
});
