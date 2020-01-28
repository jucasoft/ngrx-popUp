export class Home {
  public id: string = undefined;
  /**
   * metodo statico utilizzato per recuperare l'id dell'entita.
   * @param item
   */
  static selectId: (item: Home) => string = item => item.id;
}
