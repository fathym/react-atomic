import React, { createContext } from 'react';
import TailwindContextConfiguration from './TailwindContextConfiguration';

export const TailwindContext = createContext(
  new TailwindContextConfiguration()
);
