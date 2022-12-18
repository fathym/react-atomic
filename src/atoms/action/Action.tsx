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

class Action extends React.Component<ActionProperties, ActionState> {
  //# Fields
  protected actionHandler?: () => void;

  protected actionPath?: string;
  //#

  //# Properties
  //#

  //# Constructors
  /** Initialize the default property values based on constructor. */
  public static defaultProps = new ActionProperties();

  constructor(props: ActionProperties) {
    super(props);

    this.configureActionHandling();
  }
  //#

  //# API Methods
  public render(): React.ReactNode {
    console.log(ExpanderService.Expand(ActionProperties, this.props));

    const className = `text-3xl font-bold underline ${this.props.className}`;

    if (!!this.actionHandler) {
      return this.renderButton(className);
    } else if (!!this.actionPath) {
      return this.renderAnchor(className);
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

  protected expandProps() {
    return ExpanderService.Expand(ActionProperties, this.props);
  }

  /**
   * Build the anchor version of the action to handle path navigation.
   *
   * @returns The anchor version of the action.
   */
  protected renderAnchor(className: string): React.ReactNode {
    return (
      <a href={this.actionPath} className={className} {...this.expandProps()}>
        {this.props.children || this.props.action.Label}
      </a>
    );
  }

  /**
   * Build the button version of the action to handle clicks.
   *
   * @returns The button version of the action.
   */
  protected renderButton(className: string): React.ReactNode {
    return (
      <button
        type="button"
        onClick={this.actionHandler}
        className={className}
        {...this.expandProps()}
      >
        {this.props.children || this.props.action.Label}
      </button>
    );
  }
  //#
}

// Remove with es7
Action.defaultProps = new ActionProperties();

export default Action;
