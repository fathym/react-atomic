import Tails from '../../common/tailwind/Tails';

export default class ActionTails extends Tails {
  constructor() {
    super();

    this.loadDefaultTails();
  }

  protected loadDefaultTails(): void {
    const tails = {
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
    } as Tails;

    const tailKeys = Object.keys(tails);

    tailKeys.reduce((map, tail) => {
      map[tail] = tails[tail];
      return map;
    }, this);
  }
}
