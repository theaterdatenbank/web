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