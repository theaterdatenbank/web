export class Event {
  //Titel, Subtitel, Bild, Veranstalter, StreamLink, Datum ?

  public constructor(
    public datum: Date | number,
    public titel: string,
    public subTitel: string,
    public volltext: string,
    public veranstalter: string,
    public linkZuVorschauBild: string,
    public linkZuStream: string
  ) {
  }

}
