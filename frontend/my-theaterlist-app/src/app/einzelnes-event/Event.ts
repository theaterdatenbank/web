import {Organiser} from "./Organiser";

export class Event {
  //Titel, Subtitel, Bild, Veranstalter, StreamLink, Datum ?

  public constructor(
    public eventDate: Date | number,
    public eventName: string,
    public subTitle: string,
    public eventText: string,
    public organistion: Organiser,
    public thumbnail: string,
    public streamingLink: string
  ) {
  }
}
