import React from 'react';
import { ActionModel } from './ActionModel';
import { ExpanderService } from '../../common/ExpanderService';

export class ActionProperties {
  [key: string]: any;

  public action!: ActionModel;

  public className?: string;

  public children?: React.ReactNode;

  public size?: 'small' | 'medium' | 'large';

  constructor() {
    this.size = 'medium';
  }
}

class ActionState {}

export default class Action extends React.Component<
  ActionProperties,
  ActionState
> {
  //# Fields
  protected actionHandler?: () => void;

  protected actionPath?: string;
  //#

  //# Properties
  //#

  //# Constructors
  /** Initialize the default property values based on constructor. */
  static defaultProps = new ActionProperties();

  constructor(props: ActionProperties) {
    super(props);

    this.configureActionHandling();
  }
  //#

  //# API Methods
  public render(): React.ReactNode {
    console.log(ExpanderService.Expand(this.props));
    if (!!this.actionHandler) {
      return this.renderButton();
    } else if (!!this.actionPath) {
      return this.renderAnchor();
    }
  }
  //#

  //# Helper
  /**
   * Setup the action handler based on passed in configuration.
   */
  protected configureActionHandling(): void {
    if (typeof this.props.action.Action === 'function') {
      this.actionHandler = (this.props.action.Action as () => void).bind(this);
    } else if (typeof this.props.action.Action === 'string') {
      this.actionPath = this.props.action.Action as string;
    }
  }

  /**
   * Build the anchor version of the action to handle path navigation.
   *
   * @returns The anchor version of the action.
   */
  protected renderAnchor(): React.ReactNode {
    return (
      <a
        href={this.actionPath}
        className={this.props.className}
        {...ExpanderService.Expand(this.props)}
      >
        {this.props.children || this.props.action.Label}
      </a>
    );
  }

  /**
   * Build the button version of the action to handle clicks.
   *
   * @returns The button version of the action.
   */
  protected renderButton(): React.ReactNode {
    return (
      <button
        type="button"
        onClick={this.actionHandler}
        className={this.props.className}
        {...ExpanderService.Expand(this.props)}
      >
        {this.props.children || this.props.action.Label}
      </button>
    );
  }
  //#
}
