import React from 'react';

export class ActionModel {
  public Action?: string | (() => void);

  public Actions?: ActionModel[];

  public Label?: React.ReactNode;
}
