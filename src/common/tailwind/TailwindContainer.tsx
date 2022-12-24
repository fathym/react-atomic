import React, { createContext } from 'react';
import TailwindContextConfiguration from './TailwindContextConfiguration';

export class TailwindContainerProperties {
  public children!: React.ReactNode;

  public config?: TailwindContextConfiguration;

  /**
   *
   */
  constructor() {
    this.config = new TailwindContextConfiguration();
  }
}

export default function TailwindContainer(
  { children, config } = new TailwindContainerProperties()
) {
  const TailwindContext = createContext(config);

  return (
    <TailwindContext.Provider value={config}>
      <div className={config?.Base}>{children}</div>
    </TailwindContext.Provider>
  );
}
