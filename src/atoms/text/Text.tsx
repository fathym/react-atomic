import React from 'react';
import FathymComponent from '../../common/FathymComponent';
import Styles from '../../common/Styles';

export class TextProperties {
  [key: string]: any;

  public element!:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
    | 'div'
    | 'span'
    | '';

  public className?: string;

  public children!: React.ReactNode;

  public color?: 'Primary' | 'Secondary' | 'Tertiary';

  constructor() {
    this.element = 'span';
  }
}

class TextState {}

class Text extends FathymComponent<TextProperties, TextState> {
  //#region Fields
  //#endregion

  //#region Properties
  //#endregion

  //#region Constructors
  /** Initialize the default property values based on constructor. */
  public static defaultProps = new TextProperties();
  //#endregion

  //#region API Methods
  public render(): React.ReactNode {
    const className = this.resolveClassName();

    const CustomTag: any = this.props.element || 'span';

    return (
      <CustomTag className={className} {...this.expandProps()}>
        {this.props.children || this.props.action.Label}
      </CustomTag>
    );
  }
  //#endregion

  //#region Helper
  protected loadClassNameInstructions(): string[][] {
    const color = this.props.color || '';

    return [['Default'], ['Colors', color]];
  }

  protected loadDefaultStyles(): Styles {
    return {
      Default: '',
      Colors: {
        '': '',
        Primary: 'text-primary-500',
        Secondary: 'text-secondary-500',
        Tertiary: 'text-tertiary-500',
      },
    };
  }

  protected loadPropsType(): new () => TextProperties {
    return TextProperties;
  }
  //#endregion
}

// Remove with es7
Text.defaultProps = new TextProperties();

export default Text;
