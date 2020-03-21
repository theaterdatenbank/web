export class Event {
  public name: string;
  public beschreibung: string;
  public linkZuVorschauBild: string;

  public constructor(name: string, beschreibung: string, linkZuVorschaubild: string) {
    this.name = name;
    this.beschreibung = beschreibung;
    this.linkZuVorschauBild = linkZuVorschaubild;
  }

}
