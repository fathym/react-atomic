export default class TailwindBase {
    //#region Properties
    public Text!: string;
    //#endregion
    //#region Constructors
    constructor() {
        this.Text =
            'font-sans font-normal leading-relaxed font-base dark:text-gray-100 text-gray-800';
    }
    //#endregion
    //#region API Methods
    public toString(): string {
        return `${this.Text}`;
    }
}
