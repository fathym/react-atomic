import React from 'react';
import { twMerge } from "tailwind-merge";
import ExpanderService from './ExpanderService';
import FathymProperties from './FathymProperties';
import Styles from './Styles';

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
   * Load the class name instructions for this component.
   *
   * @returns The Styles to be used for the action.
   */
  protected abstract loadClassNameInstructions(): string[][];

  /**
   * Load the default Styles for this component.
   *
   * @returns The Styles to be used for the action.
   */
  protected abstract loadDefaultStyles(): Styles;

  /**
   * Used to return the properties class for use in expand usage.
   */
  protected abstract loadPropsType(): new () => TProps;

  protected mergeTails(className: string): string {
    return twMerge(className);
  }

  protected resolveClassName(): string {
    const defaultStyles = this.loadDefaultStyles();

    const instructionSets: string[][] = this.loadClassNameInstructions();

    const classNameSegments = instructionSets.reduce(
      (tails, instructions) => {
        let worked: string | Styles = { ...defaultStyles };

        if (!!worked) {
          worked = instructions.reduce((wrk, instruction) => {
            return (wrk as Styles)[instruction];
          }, worked as string | Styles);
        }

        if (!!worked) {
          tails.push((worked as string) || '');
        }

        return tails;
      },
      []
    );

    classNameSegments.push(this.props.tails || '');

    const className = this.mergeTails(classNameSegments.join(' '));

    return className;
  }
  //#endregion
}
