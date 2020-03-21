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
                EventText = "Volltext",
                Length = new TimeSpan(0, 0, 60, 0),
                LongTimeAvailable = true,
                Organisation = new Organiser()
                {
                    OrganiserName = "Schauspielhaus Berlin"
                },
                StreamingLink = "https://www.google.de",
                EventName = "Tanz der Vampire",
                Thumbnail = "Thumbnail",
                Thumbnail_Copyright = "(c) by ..."
            };
            _eventRepository.AddEvent(event1);
        }

        [HttpGet("createIndex")]
        public void CreateIndex()
        {
            _eventRepository.CreateIndex();
        }
    }
}