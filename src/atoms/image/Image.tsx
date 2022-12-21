import React from 'react';
import FathymComponent from '../../common/FathymComponent';
import Styles from '../../common/Styles';

export class ImageProperties {
  [key: string]: any;

  public alt!: string;

  public className?: string;

  public color?: 'Primary' | 'Secondary' | 'Tertiary';

  public src!: string;

  public variation?: 'Rounded' | 'Circle';
}

class ImageState {}

class Image extends FathymComponent<ImageProperties, ImageState> {
  //#region Fields
  //#endregion

  //#region Properties
  //#endregion

  //#region Constructors
  /** Initialize the default property values based on constructor. */
  public static defaultProps = new ImageProperties();
  //#endregion

  //#region API Methods
  public render(): React.ReactNode {
    const className = this.resolveClassName();

    return (
      <div className="flex flex-wrap justify-center">
        <div className="w-6/12 sm:w-4/12 px-4">
          <img
            src={this.props.src}
            className={className}
            alt={this.props.alt}
            {...this.expandProps()}
          />
        </div>
      </div>
    );
  }
  //#endregion

  //#region Helper
  protected loadClassNameInstructions(): string[][] {
    const color = this.props.color || '';

    const variation = this.props.variation || '';

    return [['Default'], ['Colors', color], ['Variations', variation]];
  }

  protected loadDefaultStyles(): Styles {
    return {
      Default: 'shadow-lg max-w-full h-auto align-middle border-none',
      Colors: {
        '': '',
        Primary: 'shadow-primary-300',
        Secondary: 'shadow-secondary-300',
        Tertiary: 'shadow-tertiary-300',
      },
      Variations: {
        Rounded: 'rounded',
        Circle: 'rounded-full',
      },
    };
  }

  protected loadPropsType(): new () => ImageProperties {
    return ImageProperties;
  }
  //#endregion
}

// Remove with es7
Image.defaultProps = new ImageProperties();

export default Image;
