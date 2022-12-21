import React from 'react';
import TailwindContextConfiguration from './TailwindBase';

export class TailwindContextProperties {
  public config!: TailwindContextConfiguration;
}

class TailwindContextState {}

class TailwindContext extends React.Component<
  TailwindContextProperties,
  TailwindContextState
> {
  //#region Fields
  //#endregion

  //#region Properties
  //#endregion

  //#region Constructors
  /** Initialize the default property values based on constructor. */
  public static defaultProps = new TailwindContextProperties();
  //#endregion

  //#region API Methods
  public render(): React.ReactNode {
    return <div className={this.props.config.toString()}></div>;
  }
  //#endregion

  //#region Helper
  //#endregion
}

// Remove with es7?
TailwindContext.defaultProps = new TailwindContextProperties();

export default TailwindContext;

// Use context to pass the whole config down
// Use context to provide hook to invoke manual dark change