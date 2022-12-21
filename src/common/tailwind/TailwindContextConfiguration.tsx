import TailwindBase from './TailwindBase';

export default class TailwindContextConfiguration {
  //#region Properties
  public Base!: TailwindBase;
  //#endregion

  //#region Constructors
  constructor() {
    this.Base = new TailwindBase();
  }
  //#endregion

  //#region API Methods
  public toString(): string {
    return `${this.Base.toString()}sdrgad4`;
  }
  //#endregion

  //#region Helpers
  //#endregion
}

const FathymDefaultTailwind = new TailwindContextConfiguration();

export { FathymDefaultTailwind };
