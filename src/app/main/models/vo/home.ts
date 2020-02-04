export class Home {
  public id: string = undefined;
  public value: string = undefined;
  public name: string = undefined;
  public description: string = undefined;
  /**
   * metodo statico utilizzato per recuperare l'id dell'entita.
   * @param item
   */
  static selectId: (item: Home) => string = item => item.id;
}
