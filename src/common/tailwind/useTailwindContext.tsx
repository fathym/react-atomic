import { useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import Styles from './Tails';
import { TailwindContext } from './TailwindContexts';


export default function useTailwindContext(compSymbol: symbol) {
  const tailsCtxt = useContext(TailwindContext);

  const mergeTails = (tails: string) => {
    return twMerge(tails);
  };

  const resolveTails = (instructions: string[][], tailOverrides?: string) => {
    const defaultTails = tailsCtxt.Custom[compSymbol];

    const tailSegments = instructions.reduce((tails, instructions) => {
      let worked: string | Styles = { ...defaultTails };

      if (!!worked) {
        worked = instructions.reduce((wrk, instruction) => {
          return (wrk as Styles)[instruction];
        }, worked as string | Styles);
      }

      if (!!worked) {
        tails.push((worked as string) || '');
      }

      return tails;
    }, []);

    tailSegments.push(tailOverrides || '');

    const tails = mergeTails(tailSegments.join(' '));

    return tails;
  };

  return { tailsCtxt, mergeTails, resolveTails };
}
