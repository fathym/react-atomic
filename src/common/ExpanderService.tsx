import BasicHash from "./BasicHash";

export default class ExpanderService {
  /**
   * Used to get an expanded object of the properties that excludes the actual properties of the prototype.
   */
  public static Expand<T extends BasicHash>(type: new () => T, obj: T): any {
    const keys = Object.keys(obj);

    const localProps = this.localProps<T>(type, obj);

    const checkProps = [...localProps, 'Expanded'];

    const expandedKeys = keys.filter((k) => checkProps.indexOf(k) === -1);

    return expandedKeys.reduce((expand, k) => {
      expand[k] = obj[k];

      return expand;
    }, {} as any);
  }

  /**
   * Used to determine local prototype properties for expanded logic.
   *}
   * @returns The list of properties from the local prototype
   */
  private static localProps<T extends BasicHash>(type: new () => T, obj: T): string[] {
    // const proto = Object.getPrototypeOf(obj);

    return Object.keys(new type());
  }
}
