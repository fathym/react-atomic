import React from 'react';
import FathymComponent from '../../common/FathymComponent';
import Styles from '../../common/Styles';

export class InputProperties {
  [key: string]: any;

  public className?: string;

  public style?: 'Primary' | 'Secondary' | 'Tertiary';
}

class InputState {}

class Input extends FathymComponent<InputProperties, InputState> {
  //#region Fields
  //#endregion

  //#region Properties
  //#endregion

  //#region Constructors
  /** Initialize the default property values based on constructor. */
  public static defaultProps = new InputProperties();
  //#endregion

  //#region API Methods
  public render(): React.ReactNode {
    const className = this.resolveClassName();

    return (
      <div className="mb-3 pt-0 relative flex flex-wrap items-stretch">
        {/* <span className="z-10 h-full leading-snug font-normal text-center absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
          icon
        </span> */}

        <input className={className} {...this.expandProps()} />
      </div>
    );
  }
  //#endregion

  //#region Helper
  protected loadClassNameInstructions(): string[][] {
    const style = this.props.style || '';

    console.log(style);

    return [['Default'], ['Styles', style]];
  }

  protected loadDefaultStyles(): Styles {
    return {
      Default:
        'px-2 py-1 relative rounded border-0 shadow outline-none focus:outline-none',
      Styles: {
        '': 'text-slate-500 placeholder-slate-300 shadow-slate-300 active:shadow-slate-800 focus:shadow-slate-800',
        Primary: 'text-primary-500 placeholder-primary-200 shadow-primary-300 active:shadow-primary-800 focus:shadow-primary-800',
        Secondary: 'text-secondary-500 placeholder-secondary-200 shadow-secondary-300 active:shadow-secondary-800 focus:shadow-secondary-800',
        Tertiary: 'text-tertiary-500 placeholder-tertiary-200 shadow-tertiary-300 active:shadow-tertiary-800 focus:shadow-tertiary-800',
      },
    };
  }

  protected loadPropsType(): new () => InputProperties {
    return InputProperties;
  }
  //#endregion
}

// Remove with es7
Input.defaultProps = new InputProperties();

export default Input;
