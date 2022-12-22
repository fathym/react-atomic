import React from 'react';
import FathymComponent from '../../../common/FathymComponent';
import FathymProperties from '../../../common/FathymProperties';
import Styles from '../../../common/Styles';

export class BasicCallToActionProperties extends FathymProperties {
  public callToAction!: React.ReactNode;

  public children?: React.ReactNode;

  public image!: string;

  public title!: React.ReactNode;
}

class BasicCallToActionState {}

class BasicCallToAction extends FathymComponent<BasicCallToActionProperties, BasicCallToActionState> {
  //#region Fields
  //#endregion

  //#region Properties
  //#endregion

  //#region Constructors
  /** Initialize the default property values based on constructor. */
  public static defaultProps = new BasicCallToActionProperties();
  //#endregion

  //#region API Methods
  public render(): React.ReactNode {
    const className = this.resolveClassName();

    return (
      <section className="lg:py-12 lg:flex lg:justify-center">
        <div className="overflow-hidden bg-white dark:bg-gray-900 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
          <div className="lg:w-1/2">
            <div
              style={{ backgroundImage: `url('${this.props.image}')` }}
              className="h-64 bg-cover lg:h-full"
            ></div>
          </div>

          <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
              {this.props.title}
            </h2>

            <p className="mt-4 text-gray-500 dark:text-gray-300">
              {this.props.callToAction}
            </p>

            <div className="inline-flex w-full mt-6 sm:w-auto">
              {this.props.children}
            </div>
          </div>
        </div>
      </section>
    );
  }
  //#endregion

  //#region Helper
  protected loadClassNameInstructions(): string[][] {
    const style = this.props.style || '';

    return [['Default']];
  }

  protected loadDefaultStyles(): Styles {
    return {
      Default: '',
    };
  }

  protected loadPropsType(): new () => BasicCallToActionProperties {
    return BasicCallToActionProperties;
  }
  //#endregion
}

// Remove with es7
BasicCallToAction.defaultProps = new BasicCallToActionProperties();

export default BasicCallToAction;
