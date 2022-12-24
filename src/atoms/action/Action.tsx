import React from 'react';
import { Navigate } from 'react-router-dom';
import ActionModel from './ActionModel';
import Tails from '../../common/tailwind/Tails';
import FathymComponent from '../../common/FathymComponent';
import FathymProperties from '../../common/FathymProperties';
import ActionTails from './ActionTails';
import useTailwindContext from '../../common/tailwind/useTailwindContext';
import { ActionSymbol } from './ActionSymbol';

export class ActionProperties extends FathymProperties {
  public action!: ActionModel;

  public children?: React.ReactNode;

  public size!: 'Small' | 'Base' | 'Large' | 'BLAM';

  public color!: 'Primary' | 'Secondary' | 'Tertiary' | '';

  public variation!: 'Text' | 'Solid' | 'Outline' | 'Link';

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

export default function Action(
  {
    action,
    children,
    size,
    color,
    tails,
    variation
  } = new ActionProperties()
) {
  const { resolveTails } = useTailwindContext(ActionSymbol);
  
  const actionHandler: (() => void) | undefined= undefined;

  const actionNav: typeof Navigate;

  const actionPath?: string;

  const loadTailsInstructions = () => {
    size = size || 'Base';

    color = color || '';

    variation = variation || 'Text';

    return [
      ['Default'],
      ['Sizes', size],
      ['Variations', variation],
      ['Variations', color, variation],
    ];
  }

  const configureActionHandling = () => {
    if (typeof action.Action === 'function') {
      actionHandler = (action.Action as () => void);
    } else if (typeof action.Action === 'string') {
      actionPath = action.Action as string;
    } else if ((action.Action as any)?.type?.name === 'Navigate') {
      actionNav = action.Action! as typeof Navigate;
    }
  }

  const className = resolveTails(loadTailsInstructions(), tails);

  if (!!actionHandler) {
    return renderButton(className);
  } else if (!!actionPath) {
    return renderAnchor(className);
  } else if (!!actionNav) {
    return renderNavigate(className);
  }
}

class Action extends FathymComponent<ActionProperties, ActionState> {
  //#region Fields
  //#endregion

  //#region Properties
  //#endregion

  //#region Constructors
  constructor(props: ActionProperties) {
    super(props);

    this.state = {
      ...new ActionState(),
    };

    this.configureActionHandling();

    this.handleNavClicked = this.handleNavClicked.bind(this);
  }
  //#endregion

  //#region Helper
  protected handleNavClicked(): void {
    this.setState({
      ShouldNavigate: true,
    });
  }

  protected loadDefaultStyles(): TailwindConfig {
    return new ActionTails();
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
