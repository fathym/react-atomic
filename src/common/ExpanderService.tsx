
export class ExpanderService {
  /**
   * Used to get an expanded object of the properties that excludes the actual properties of the prototype.
   */
  public static Expand<T extends { [key: string]: any; }>(obj: T): any {
    const keys = Object.keys(obj);

    const checkProps = [...this.localProps(obj), 'Expanded'];

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
  private static localProps<T>(obj: T): string[] {
    const proto = Object.getPrototypeOf(obj);

    return Object.keys(new proto.constructor());
  }
}
