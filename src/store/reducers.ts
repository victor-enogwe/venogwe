import {
  CombinedActions,
  Locales,
  ResetAction,
  SwitchLocaleAction,
  Theme,
  ToggleThemeAction,
  VEState,
} from '@/typings/typings';
import { combineReducers } from 'redux';

export class Reducers {
  // eslint-disable-next-line no-useless-constructor
  constructor(private initialState: VEState = {} as any) {}

  rootReducer(state: VEState = this.initialState, action: CombinedActions) {
    switch (action.type) {
      case `RESET_STATE`:
        return this.reset.apply(this, [state, action]);
      default:
        return combineReducers({
          locale: this.locale.bind(this),
          theme: this.theme.bind(this),
        })(state, action);
    }
  }

  private reset(
    state: VEState = this.initialState,
    action: ResetAction,
  ): VEState {
    return action.type === `RESET_STATE` ? this.initialState : state;
  }

  private locale(
    state: Locales = this.initialState?.locale ?? null,
    action: SwitchLocaleAction,
  ): Locales {
    return action.type === `SWITCH_LOCALE` ? action.data : state;
  }

  private theme(
    state: Theme = this.initialState?.theme ?? null,
    action: ToggleThemeAction,
  ): Theme {
    return action.type === `TOGGLE_THEME` ? action.data : state;
  }
}
