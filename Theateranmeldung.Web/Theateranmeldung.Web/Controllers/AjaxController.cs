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
            return _eventRepository.GetEvents();
        }

        [HttpGet("genres")]
        public List<Genre> Genres()
        {
            return _eventRepository.GetGenres();
        }

        [HttpGet("events_filtered")]
        public List<Event> EventsFiltered(string wanted, string notwanted)
        {
            return _eventRepository.GetEventsFiltered(wanted, notwanted);
        }

        [HttpGet("createEvents")]
        public void CreateSamples()
        {
            var event1 = new Event()
            {
                Approved = true,
                AvailableFrom = new DateTime(2020, 05, 01),
                AvailableTil = new DateTime(2020, 05, 02),
                EventDate = new DateTime(2020, 05, 02),
                EventText = @"In einem Gasthaus, wo man sich ihrer angenommen hat, finden die beiden einen ersten Hinweis auf Vampire: Knoblauch. Aber jeder bestreitet, an die Existenz von Vampiren zu glauben, und der Wirt, Chagal, streitet sogar ab, etwas von einem Schloss in der Nähe zu wissen.  Während Professor Abronsius weiter versucht, die Vampire ausfindig zu machen, verliebt sich Alfred in Sarah, die schöne Tochter des Wirtes. Aber der junge Student ist nicht der einzige, denn Graf von Krolock, ein Vampir, hat ebenfalls ein Auge auf die schöne Sarah geworfen und lockt sie in sein Schloss.  Sofort macht sich ihr Vater auf den Weg, sie zu retten, und wird selbst Opfer der Vampire. Professor Abronsius will den toten Chagal umgehend pfählen, um zu verhindern, dass er als Vampir wieder aufersteht und sich dem Grafen anschließt. Allerdings weigert sich dessen Frau Rebecca und wenig später erwacht der Wirt als Vampir. Schnell wird Magda, die an seiner vermeintlichen Leiche trauert, sein Opfer.  In der Nacht wollen Professor Abronsius und Alfred das zuvor fehlgeschlagene Pfählen des ehemaligen Wirtes vollenden, merken jedoch, dass er bereits ein Vampir ist. Allerdings können sie Chagal überreden, sie zum Schloss des Grafen von Krolock zu führen. Dieser empfängt sie und stellt sie seinem homosexuellen Sohn Herbert vor, der sofort in Alfred einen Menschen gefunden haben will, der ihm seine Langeweile nimmt. Der Graf überredet die beiden, über Nacht zu bleiben, indem er den Professor mit reichlich Studienmaterial lockt.",
                Length = new TimeSpan(0, 0, 60, 0),
                LongTimeAvailable = true,
                Subtitle = "Musical",
                Genre = "Musical",
                Organisation = new Organiser()
                {
                    Name = "Schauspielhaus Berlin"
                },
                StreamingLink = "https://youtube.com/",
                EventName = "Tanz der Vampire",
                Thumbnail = "Thumbnail",
                Thumbnail_Copyright = "(c) by ..."
            };

            var event2 = new Event()
            {
                Approved = true,
                AvailableFrom = new DateTime(2020, 05, 01),
                AvailableTil = new DateTime(2020, 05, 02),
                EventDate = new DateTime(2020, 05, 02),
                EventText = @"Pünktlich zum Wechsel der Direktoren findet eine große Gala in der Pariser Oper statt. Dort brilliert eine bisher unbekannte Sängerin: Christine Daaé. Zur selben Zeit findet man die Leiche des Bühnenarbeiters Joseph Buquet. Die Ballettmädchen mutmaßen, dass dies die Tat des Phantoms der Oper war, welches seit geraumer Zeit umgeht.  Unter den Anwesenden der Gala sind auch Philippe, Comte de Chagny, und sein 20 Jahre jüngerer Bruder Raoul, der in Christine seine Jugendfreundin erkennt und sich auf den Weg zu ihrer Garderobe macht. Dort gibt Christine zunächst vor, Raoul nicht zu erkennen, und bittet ihn zu gehen. Doch kaum hat Raoul die Garderobe verlassen, hört er eine Männerstimme, die mit Christine spricht. Als Christine geht, stürzt Raoul zurück in die Garderobe, findet sie jedoch leer vor.",
                Length = new TimeSpan(0, 0, 60, 0),
                LongTimeAvailable = true,
                Subtitle = "Musical",
                Genre = "Musical",
                Organisation = new Organiser()
                {
                    Name = "Schauspielhaus Berlin"
                },
                StreamingLink = "https://youtube.com/",
                EventName = "Phantom der Oper",
                Thumbnail = "Thumbnail",
                Thumbnail_Copyright = "(c) by ..."
            };
            _eventRepository.AddEvent(event1);
            _eventRepository.AddEvent(event2);

            _eventRepository.AddGenre(new Genre { Description = "Oper"});
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