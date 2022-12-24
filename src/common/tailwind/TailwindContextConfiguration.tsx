import { ActionSymbol } from '../../atoms/action/ActionSymbol';
import Tails from './Tails';

export default class TailwindContextConfiguration {
  //#region Properties
  public Base!: string;

  public Custom!: { [comp: symbol]: Tails };
  //#endregion

  //#region Constructors
  constructor() {
    this.Base =
      'font-sans font-normal leading-relaxed font-base dark:text-gray-100 text-gray-800';

    this.Custom = {
      [ActionSymbol]: new Tails(),
    };
  }
  //#endregion

  //#region API Methods
  //#endregion

  //#region Helpers
  //#endregion
}
