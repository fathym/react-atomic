import React from 'react';
import ReactDOM from 'react-dom/client';
import './tailwind.css';
import Action from './atoms/action/Action';
import ActionModel from './atoms/action/ActionModel';

export * from '../src/common';
export * from '../src/atoms';
export * from '../src/molecules';
export * from '../src/organisms';
export * from '../src/templates';
export * from '../src/pages';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const action = new ActionModel();
action.Action = () => alert('Clicked');
action.Label = 'Click Me';

root.render(
  <React.StrictMode>
    <div>
      <Action action={action} className="line-through" />
    </div>
  </React.StrictMode>
);
