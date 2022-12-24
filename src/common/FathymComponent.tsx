import React, { useContext } from 'react';
import ExpanderService from './ExpanderService';
import FathymProperties from './FathymProperties';
import Styles from './tailwind/Tails';
import { ActionSymbol } from '../atoms/action/ActionSymbol';



export default abstract class FathymComponent<
  TProps extends FathymProperties,
  TState
> extends React.Component<TProps, TState> {
  //#region Helpers
  /**
   * Passthrough to the ExpanderService for getting props without type specific properties.
   *
   * @returns The expanded props without an coded properties.
   */
  protected expandProps() {
    return ExpanderService.Expand(this.loadPropsType(), this.props);
  }

  /**
   * Used to return the properties class for use in expand usage.
   */
  protected abstract loadPropsType(): new () => TProps;
  //#endregion
}
