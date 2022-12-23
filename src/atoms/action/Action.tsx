import React from 'react';
import { Navigate } from 'react-router-dom';
import ActionModel from './ActionModel';
import Styles from '../../common/Styles';
import FathymComponent from '../../common/FathymComponent';
import FathymProperties from '../../common/FathymProperties';

export class ActionProperties extends FathymProperties {
  public action!: ActionModel;

  public children?: React.ReactNode;

  public size?: 'Small' | 'Base' | 'Large' | 'BLAM';

  public color?: 'Primary' | 'Secondary' | 'Tertiary';

  public variation?: 'Text' | 'Solid' | 'Outline' | 'Link';

  constructor() {
    super();

    this.size = 'Base';

    this.variation = 'Text';
  }
}

class ActionState {
  public ShouldNavigate: boolean;

  constructor() {
    this.ShouldNavigate = false;
  }
}

class Action extends FathymComponent<ActionProperties, ActionState> {
  //#region Fields
  protected actionHandler?: () => void;

  protected actionNav?: typeof Navigate;

  protected actionPath?: string;
  //#endregion

  //#region Properties
  //#endregion

  //#region Constructors
  /** Initialize the default property values based on constructor. */
  public static defaultProps = new ActionProperties();

  constructor(props: ActionProperties) {
    super(props);

    this.state = {
      ...new ActionState(),
    };

    this.configureActionHandling();

    this.handleNavClicked = this.handleNavClicked.bind(this);
  }
  //#endregion

  //#region API Methods
  public render(): React.ReactNode {
    const className = this.resolveClassName();

    if (!!this.actionHandler) {
      return this.renderButton(className);
    } else if (!!this.actionPath) {
      return this.renderAnchor(className);
    } else if (!!this.actionNav) {
      return this.renderNavigate(className);
    }
  }
  //#endregion

  //#region Helper
  /**
   * Setup the action handler based on passed in configuration.
   */
  protected configureActionHandling(): void {
    if (typeof this.props.action.Action === 'function') {
      this.actionHandler = (this.props.action.Action as () => void).bind(this);
    } else if (typeof this.props.action.Action === 'string') {
      this.actionPath = this.props.action.Action as string;
    } else if ((this.props.action.Action as any)?.type?.name === 'Navigate') {
      this.actionNav = this.props.action.Action! as typeof Navigate;
    }
  }

  protected handleNavClicked(): void {
    this.setState({
      ShouldNavigate: true,
    });
  }

  protected loadClassNameInstructions(): string[][] {
    const size = this.props.size || 'Base';

    const color = this.props.color || '';

    const variation = this.props.variation || 'Text';

    return [
      ['Default'],
      ['Sizes', size],
      ['Variations', variation],
      ['Variations', color, variation],
    ];
  }

  protected loadDefaultStyles(): Styles {
    return {
      Default:
        'px-4 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150',
      Sizes: {
        Small: 'text-xs',
        Base: 'text-lg',
        Large: 'text-3xl',
        BLAM: 'text-6xl',
      },
      Variations: {
        Text: '',
        Solid: '',
        Outline: 'border',
        Link: 'underline',
        '': {
          Text: 'active:text-white-600',
          Solid: 'bg-slate-500 active:bg-slate-600',
          Outline:
            'border-slate-500 text-slate-500 active:border-slate-600 active:text-slate-600',
          Link: 'active:text-white-600',
        },
        Primary: {
          Text: 'text-primary-500 active:text-primary-600',
          Solid: 'bg-primary-500 active:bg-primary-600',
          Outline:
            'border-primary-500 text-primary-500 active:border-primary-600 active:text-primary-600',
          Link: 'text-primary-500 active:text-primary-600',
        },
        Secondary: {
          Text: 'text-secondary-500 active:text-secondary-600',
          Solid: 'bg-secondary-500 active:bg-secondary-600',
          Outline:
            'border-secondary-500 text-secondary-500 active:border-secondary-600 active:text-secondary-600',
          Link: 'text-secondary-500 active:text-secondary-600',
        },
        Tertiary: {
          Text: 'text-tertiary-500 active:text-tertiary-600',
          Solid: 'bg-tertiary-500 active:bg-tertiary-600',
          Outline:
            'border-tertiary-500 text-tertiary-500 active:border-tertiary-600 active:text-tertiary-600',
          Link: 'text-tertiary-500 active:text-tertiary-600',
        },
      },
    };
  }

  protected loadPropsType(): new () => ActionProperties {
    return ActionProperties;
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

  /**
   * Build the button version of the action for handling router nav.
   *
   * @returns The button version of the action for navigation.
   */
  protected renderNavigate(className: string): React.ReactNode {
    return (
      <button
        type="button"
        onClick={this.handleNavClicked}
        className={className}
        {...this.expandProps()}
      >
        {this.props.children || this.props.action.Label}

        {this.state.ShouldNavigate && this.actionNav}
      </button>
    );
  }
  //#endregion
}

// Remove with es7?
Action.defaultProps = new ActionProperties();

export default Action;
