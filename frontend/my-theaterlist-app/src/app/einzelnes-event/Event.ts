import {Organiser} from './Organiser';
import {TimeSpan} from './TimeSpan';

export class Event {

  public constructor(
    public eventDate: string,
    public eventName: string,
    public subTitle: string,
    public genre: string,
    public eventText: string,
    public organistion: Organiser,
    public timeSpan: TimeSpan,
    public thumbnail: string,
    public streamingLink: string,
    public longTimeAvailable: boolean,
    public availableFrom: string,
    public availableTil: string
  ) {
  }
}
