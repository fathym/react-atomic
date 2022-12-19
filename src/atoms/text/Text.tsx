import React from 'react';
import { ExpanderService } from '../../common/ExpanderService';

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

  constructor() {
    this.element = 'span';
  }
}

class TextState {}

class Text extends React.Component<TextProperties, TextState> {
  //# Fields
  //#

  //# Properties
  //#

  //# Constructors
  /** Initialize the default property values based on constructor. */
  public static defaultProps = new TextProperties();
  //#

  //# API Methods
  public render(): React.ReactNode {
    const className = `${this.props.className}`;

    const CustomTag: any = this.props.element || 'span';

    return (
      <CustomTag className={className} {...this.expandProps()}>
        {this.props.children || this.props.action.Label}
      </CustomTag>
    );
  }
  //#

  //# Helper
  protected expandProps() {
    return ExpanderService.Expand(TextProperties, this.props);
  }
  //#
}

// Remove with es7
Text.defaultProps = new TextProperties();

export default Text;
