import React from 'react';
import { Navigate } from "react-router-dom";

export default class ActionModel {
  public Action?: string | (() => void) | typeof Navigate;

  public Actions?: ActionModel[];

  public Label?: React.ReactNode;
}
