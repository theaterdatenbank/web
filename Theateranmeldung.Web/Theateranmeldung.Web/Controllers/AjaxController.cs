using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Theateranmeldung.Web.Models.Data;
using Theateranmeldung.Web.Services;

namespace Theateranmeldung.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AjaxController : ControllerBase
    {
        private readonly IEventRepository _eventRepository;
        public AjaxController(IEventRepository eventRepository)
        {
            _eventRepository = eventRepository;
        }

        [HttpGet("events")]
        public List<Event> Events()
        {
            return _eventRepository.GetEvents().OrderBy(m => m.EventDate).ToList(); ;
        }

        [HttpGet("genres")]
        public List<Genre> Genres()
        {
            return _eventRepository.GetGenres();
        }

        [HttpGet("events_filtered")]
        public List<Event> EventsFiltered(string wanted, string notwanted)
        {
            return _eventRepository.GetEventsFiltered(wanted, notwanted).OrderBy(m => m.EventDate).ToList();
        }

        [HttpGet("createEvents")]
        public void CreateSamples()
        {
            _eventRepository.AddEvent(new Event
            {
                Approved = true,
                AvailableFrom = new DateTime(2020, 03, 14),
                AvailableTil = new DateTime(2020, 03, 08),
                EventDate = new DateTime(2020, 03, 14),
                EventName = "Il Trovatore",
                Subtitle = "Oper von Guiseppe Verdi",
                EventText = @"BESETZUNG / CAST
Musikalische Leitung / Conductor Paolo Carignani Inszenierung / Production Olivier PyBühne und  Kostüme / Sets and CostumesPierre-André Weitz Licht / Lighting concept Bertrand Killy Chor / ChorusSören Eckhoff
Anja Harteros, Jonas Kaufmann",
                Length = new TimeSpan(2, 23,0),
                Genre = "Oper",
                StreamingLink = "https://operlive.de/trovatore/",
                Organisation = new Organiser
                {
                    Name = "Bayrische Staatsoper München"
                },
                Thumbnail = "1",
            });
            _eventRepository.AddEvent(new Event
            {
                Approved = true,
                AvailableFrom = new DateTime(2020, 03, 7),
                AvailableTil = new DateTime(2020, 03, 28),
                EventDate = new DateTime(2020, 03, 7),
                EventName = "1. Montagskonzert",
                Subtitle = "Mit Igor Levit u.a.",
                EventText = @"Robert Schumann
Liederalbum für die Jugend op. 79
Christina Landshamer, Sopran
Christian Gerhaher, Bariton
Gerold Huber, Klavier
Wolfgang Amadeus Mozart
Streichquartett Nr. 14 G-Dur KV 387
Schumann Quartett München
Barbara Burgdorf, Traudi Pauer, Violine
Stephan Finkentey, Viola
Oliver Göske, Violoncello
Ludwig van Beethoven
Diabelli Variationen op. 120
Igor Levit, Klavier (vor dem Stream aufgezeichnet)

Johann Sebastian Bach
Präludium 2 c-Moll BWV 847

Chick Corea
Spain
OPERcussion
Claudio Estay, Thomas März, Marcel Morikawa, Maxime Pidoux, Carlos Vera Larrucea, Schlagzeug",
                Length = new TimeSpan( 2, 42,0),
                Genre = "Konzert",
                StreamingLink = "https://operlive.de/trovatore/",
                Organisation = new Organiser
                {
                    Name = "Bayrische Staatsoper München"
                },
                Thumbnail = "2"
            });

            _eventRepository.AddEvent(new Event
            {
                Approved = true,
                AvailableFrom = new DateTime(2020, 03, 21),
                AvailableTil = new DateTime(2020, 03, 22),
                EventDate = new DateTime(2020, 03, 21),
                EventName = "Ein Volksfeind",
                Subtitle = "Schauspiel von Hendrik Ibsen",
                EventText = @"Ein Volksfeind
von Henrik Ibsen
Regie: Thomas Ostermeier


In einer Bearbeitung von Florian Borchmeyer

Badearzt Dr. Stockmann entdeckt, dass das Heilwasser seines Heimatorts von krankheitserregenden Mikroorganismen durchsetzt ist. Der Grund: die Zuleitungsrohre führen durch ein abwasserverseuchtes Sumpfgebiet. Im Interesse der Allgemeinheit will Stockmann den Befund in der Zeitung veröffentlichen und fordert die Stadtverwaltung auf, die Wasserleitungen umzulegen. Sein Vorschlag stößt auf Zustimmung. Einflussreiche Bürger und Pressevertreter des Ortes sichern ihm Unterstützung zu. Sein Bruder Peter, der Stadtrat des Ortes, hält ihm jedoch schwere Bedenken entgegen: Das Verbreiten der Neuigkeit bedrohe die wirtschaftliche Prosperität des Kurortes, die Reparaturen hätten hohe Kosten für die Allgemeinheit zur Folge. Plötzlich beginnt Stockmanns Rückhalt unter den Entscheidungsträgern der Stadt zu schwinden. Man sät Zweifel an seinem Vorhaben und versucht, die Nachricht vom kontaminierten Wasser zu vertuschen. Stockmann besteht auf Aufklärung und will öffentlich sprechen. In einer alles entscheidenden Rede will er die Stadt auf seinen Kurs zwingen. Den endgültigen Bruch mit seinem Bruder und das Risiko der vollständigen persönlichen Ausgrenzung nimmt er in Kauf. Es geht ihm längst nicht mehr nur um das verschmutzte Heilbad: Seine Zielscheibe ist die Gesellschaft als Ganzes.
Ibsens Drama bewegt sich auf dem schmalen Grat zwischen Aufklärung und Fanatismus. Welche Chance hat die Wahrheit in einer durchökonomisierten Gesellschaft?

Autor: Henrik Ibsen
Regie: Thomas Ostermeier
Bühne: Jan Pappelbaum
Kostüme: Nina Wetzel
Musik: Malte Beckenbach, Daniel Freitag
Dramaturgie: Florian Borchmeyer
Licht: Erich Schneider
Wandzeichnungen: Katharina Ziemke

Dr. Stockmann: Christoph Gawenda
Stadtrat: Konrad Singer
Frau Stockmann: Eva Meckbach
Hovstad: Renato Schuch / Andreas Schröders
Aslaksen: David Ruland
Billing: Moritz Gottwald
Morten Kiil: Thomas Bading

Dauer: ca. 150 Minuten",
                Length = new TimeSpan(2, 26, 0),
                Genre = "Schauspiel",
                StreamingLink = "https://player.vimeo.com/video/399494890",
                Organisation = new Organiser
                {
                    Name = "Schaubühne Berlin"
                },
                Thumbnail = "3"
            });

            _eventRepository.AddEvent(new Event
            {
                Approved = true,
                AvailableFrom = new DateTime(2020, 4, 30),
                AvailableTil = new DateTime(2020, 10, 25),
                EventDate = new DateTime(2020, 04, 30),
                EventName = "Carmen",
                Subtitle = "Von George Bizet",
                EventText = @"When a free-spirited Gypsy is arrested, an impressionable soldier is charmed into letting her go. But having risked everything to be with her and lost, his hopes of happiness soon turn into a jealous rage.

With equal parts danger and desire, Carmen is an intoxicating cocktail that never fails to excite the senses. Spanish mezzo-soprano María José Montiel plays the seductive sevillana in this festive production from ‘The Giant Egg’ in Beijing. Streamed on Bizet’s birthday, this performance is part of OperaVision’s events celebrating the inaugural World Opera Day on 25 October 2019.",
                Length = new TimeSpan(2, 32, 0),
                Genre = "Oper",
                StreamingLink = "https://operavision.eu/en/library/performances/operas/carmen-ncpa-beijing",
                Organisation = new Organiser
                {
                    Name = "State Opera Beijing"
                },
                Thumbnail = "4"
            });

            _eventRepository.AddEvent(new Event
            {
                Approved = true,
                AvailableFrom = new DateTime(1970, 1, 1),
                AvailableTil = new DateTime(1970, 1, 1),
                EventDate = new DateTime(1970, 1, 1),
                EventName = "Cum-Ex Papers",
                Subtitle = "Eine Recherche zum entfesselten Finanzwesen",
                EventText = @"Am 18. Oktober 2018 um sechs Uhr morgens veröffentlichten 19 vom Recherchezentrum Correctiv koordinierte Medien zeitgleich den größten Steuerraub in der Geschichte Europas: Die CumEx-Files. Das Theaterteam um Regisseur Helge Schmidt begleitete den journalistischen Prozess über Monate und bringt ihn exklusiv auf die Bühne.

Die „Cum-Ex Papers“ hatten die einmalige Gelegenheit, das Innenleben der Finanzwelt und des investigativen Journalismus dokumentieren zu dürfen. Die maßlose Gier auf der einen und die Spannung rund um den Scoop auf der anderen Seite entwickeln einen enormen Sog: Wie Wall Street und Spotlight in einem.

Seit Anfang September läuft nun der erste Gerichtsprozess zum Cum-Ex-Skandal. Das Theaterstück „Cum-Ex Papers“ zeigt die Hintergründe dieser Thematik.

REGIE
Helge Schmidt
REGIE-ASSISTENZ
Judith Wessbecher
AUSSTATTUNG
Anika Marquardt
AUSSTATTUNG
Lani Tran-Duc
VIDEO(-DESIGN)
Jones Seitz
CHOREOGRAPHIE
Jonas Woltemate

Die Produktion wurde 2019 mit dem FAUST-Preis des Deutschen Bühnenvereins ausgezeichnet.",
                Length = new TimeSpan(1, 30, 0),
                Genre = "Schauspiel",
                StreamingLink = "https://beta.spectyou.com/video/cum-ex-papers-eine-recherche-zum-entfesselten-finanzwesen",
                Organisation = new Organiser
                {
                    Name = "Lichthof-Theater Hamburg"
                },
                Thumbnail = "5"
            });


            _eventRepository.AddEvent(new Event
            {
                Approved = true,
                AvailableFrom = new DateTime(2020, 03, 23),
                AvailableTil = new DateTime(2020,03,23),
                EventDate = new DateTime(2020, 03, 23, 22,0,0),
                EventName = "Die unendliche Geschichte",
                Subtitle = "Michael Ende",
                EventText = @" Sönke Busch liest aus der Unendlichen Geschichte
Jeden Abend live um 22 Uhr auf Facebook",
                Length = new TimeSpan(0,0, 0),
                Genre = "Lesung",
                StreamingLink = "https://www.facebook.com/soenke.busch1",
                Organisation = new Organiser
                {
                    Name = "Sönke Busch"
                },
                Thumbnail = "6"
            });

            _eventRepository.AddEvent(new Event
            {
                Approved = true,
                AvailableFrom = new DateTime(1970, 1, 1),
                AvailableTil = new DateTime(1970, 1, 1),
                EventDate = new DateTime(1970, 1, 1),
                EventName = "Salomé",
                Subtitle = "Von Oscar Wilde",
                EventText = @"Mitschnitt der Inszenierung von Siegersbusch Film.  

Von Jochanaan fühlt Salome sich angezogen: „Ich will deinen Mund küssen“ – doch dieser verweigert ihr den Kuss. Gleichzeitig wünscht sich Herodes, Salome möge für ihn tanzen. Erst als er verspricht, ihr jeden Wunsch zu erfüllen, beginnt sie zu tanzen. Sie fordert dafür Jochanaans Kopf. Es geschieht wie von ihr verlangt. In rasender Verzückung küsst Salome den abgeschlagenen Kopf und bringt sich damit selbst in Gefahr.So skizziert Oscar Wilde den Mythos der Salome in seiner einzigen Tragödie von 1893. Salome steht nicht nur für die Verkörperung von Erotik und Grausamkeit, sondern auch für die Lust am Schauen und die emanzipatorische Kraft weiblichen Begehrens. Der düstere Geschichtenerzähler Stef Lernous wird diesen Mythos gemeinsam mit unserem Ensemble, einer vierköpfigen Band und Musik, die der Duisburger Flowerpornoes-Gründer Tom Liwa extra für „Salome“ komponieren wird, mit einer ordentlichen Portion Gothic auf die Bühne bringen.

Tom Liwa hat die Songs, die er während den Aufführungen mit unserem Ensemble auf der Bühne spielt, auf einer CD aufgenommen. SALOMESONGS gibt es bei allen Aufführungen am Theater Oberhausen zu kaufen. Mehr Informationen zum Entstehungsprozess der Songs gibt es HIER.

Das Programmheft zu Salome kann HIER kostenlos heruntergeladen werden.

Premiere 25.1.2019 Theater Oberhausen nach Oscar Wilde Regie: Stef LernousMusik: Tom Liwa / Flowerpornoes Stef Lernous (*1973) ist Schauspieler, Autor und Lehrer an der Schauspielabteilung der Brüsseler School of Arts RITCS. 1999 gründete er zusammen mit seinen Partner*innen Nick Kaldunski und Tine Van den Wyngaert seine eigene Theatergruppe ‚Abattoir Fermé‘ (geschlossener Schlachthof) – eine Art „Untergrund-GuerillaPerformance-Theater“ – mit der er schnell international Bekanntheit erlangte. Lernous führte Regie bei mehr als 70 Produktionen, sowohl textbasierten Stücken als auch visuellem Theater, Opern, Kurzfilmen, Kinderstücken, Konzerten, einer TV-Serie und vielem mehr. Seine Arbeiten weisen Einflüsse des Barock, der Schauerliteratur, der Horror-Ikonographie und der Popkultur auf. Sie spiegeln außerdem seine Faszination für Rituale, den Menschen und seinen Körper und Phänomene abseits vom Mainstream wider.

Tom Liwa (*1961) war Mitte der Neunziger Jahre mit seiner Band FLOWERPORNOES wichtiger, bodenständiger Außenposten der sogenannten Hamburger Schule. Seitdem gilt der Exil-Duisburger als einer der einflussreichsten und zugleich mainstreamresistentesten, deutschsprachigen Songschreiber.In den langen Jahren seiner Solo-Karriere bewies Liwa genreübergreifende Vielseitigkeit als Musiker, Schriftsteller, Kurator und zuletzt auch bildender Künstler. Sein aktuelles Album „Ganz normale Songs“ entstand mit Produzentenlegende Tobias Levin und erschien im April 2018 bei Grand Hotel Van Cleef. Liwas Musik zu Stef Lernous’ Salome entwirft ein gespenstisches Szenario zwischen Weird Folk, Dark-Soul-Country und psychedelischen Gassenhauern. Es spiegelt sein Interesse an der gegenseitigen Durchdringung von Profanem und Kosmologie.

REGIE
Stef Lernous
REGIE
Stef Lernous
MUSIK
Tom Liwa",
                Length = new TimeSpan(1, 55, 0),
                Genre = "Schauspiel",
                StreamingLink = "https://beta.spectyou.com/video/salome",
                Organisation = new Organiser
                {
                    Name = "Theater Oberhausen"
                },
                Thumbnail = "7"
            });

            _eventRepository.AddEvent(new Event
            {
                Approved = true,
                AvailableFrom = new DateTime(2020,03,23),
                AvailableTil = new DateTime(2020,03,24),
                EventDate = new DateTime(2020,03,23, 00, 30,0),
                EventName = "Tristan und Isolde",
                Subtitle = "Oper von Richard Wagner",
                EventText = @"Met audiences were fascinated by Mariusz Treliński’s gripping, visionary production of Wagner’s epic opera. In the daunting title roles of the doomed lovers, Nina Stemme and Stuart Skelton are passionate, overwhelming, and heartbreaking as they battle every obstacle that separates them from their true destiny. René Pape is King Marke, betrayed not only by Isolde but by Tristan, the man he most trusts and loves like a son. With Ekaterina Gubanova as Isolde’s confidante Brangäne and Evgeny Nikitin as Kurwenal, Tristan’s loyal lieutenant. Simon Rattle conducts a surging, shimmering account of Wagner’s monumental score.

CONDUCTOR / Dirigent: Sir Simon Rattle
ISOLDE
Nina Stemme
BRANGÄNE
Ekaterina Gubanova
TRISTAN
Stuart Skelton
KURWENAL
Evgeny Nikitin
KING MARKE
René Pape",
                Length = new TimeSpan(3, 50, 0),
                Genre = "Oper",
                StreamingLink = "https://www.metopera.org/user-information/nightly-met-opera-streams/",
                Organisation = new Organiser
                {
                    Name = "Metropolitan Opera New York"
                },
                Thumbnail = "8"
            });

            _eventRepository.AddEvent(new Event
            {
                Approved = true,
                AvailableFrom = new DateTime(2020, 03, 23),
                AvailableTil = new DateTime(2020, 03, 24),
                EventDate = new DateTime(2020, 03, 23, 00, 30, 0),
                EventName = "Hoffmanns Erzählungen",
                Subtitle = "Operette von Offenbach",
                EventText = @"Les contes d’Hoffmann hat keine Ouvertüre im eigentlichen Sinn. Die Oper beginnt mit wenigen Takten einer einleitenden Musik, deren Thematik sich in der ganzen Oper nicht wiederholt, und mündet direkt in den ersten Akt, in welchem die Muse den Zuhörer darüber in Kenntnis setzt, dass sie beabsichtigt, Hoffmann von seinem unglücklichen Liebesleben abzulenken und zur Literatur zurückzuführen.

Auf diesen erklärenden ersten Akt folgen die drei Mittelakte mit den voneinander inhaltlich unabhängigen Erzählungen Hoffmanns. Der rote Faden ist hierbei der kompositorische Kniff, die Protagonisten der Erzählungen jeweils von denselben Interpreten singen zu lassen (die vier Geliebten Hoffmanns, die vier Widersacher sowie die vier Dienerrollen). Den Abschluss der Oper bildet der fünfte Akt, welcher sich zeitlich an den ersten anschließt. Hier besinnt sich Hoffmann auf die Kunst und gibt sich der Muse hin.",
                Length = new TimeSpan(3, 50, 0),
                Genre = "Operette",
                StreamingLink = "https://www.metopera.org/user-information/nightly-met-opera-streams/",
                Organisation = new Organiser
                {
                    Name = "Semperoper"
                },
                Thumbnail = "9"
            });



            _eventRepository.AddGenre(new Genre { Description = "Oper" });
            _eventRepository.AddGenre(new Genre { Description = "Operette" });
            _eventRepository.AddGenre(new Genre { Description = "Schauspiel" });
            _eventRepository.AddGenre(new Genre { Description = "Konzert klassisch" });
            _eventRepository.AddGenre(new Genre { Description = "Kammerkonzert" });
            _eventRepository.AddGenre(new Genre { Description = "Kindertheater" });
            _eventRepository.AddGenre(new Genre { Description = "Konzert Pop" });
            _eventRepository.AddGenre(new Genre { Description = "Jazz" });
            _eventRepository.AddGenre(new Genre { Description = "Tanz" });
            _eventRepository.AddGenre(new Genre { Description = "Ballett" });
            _eventRepository.AddGenre(new Genre { Description = "Lesung" });
            _eventRepository.AddGenre(new Genre { Description = "Musical" });
            _eventRepository.AddGenre(new Genre { Description = "Sonstige" });
        }

        [HttpGet("createIndex")]
        public void CreateIndex()
        {
            _eventRepository.CreateIndex();
        }
    }
}