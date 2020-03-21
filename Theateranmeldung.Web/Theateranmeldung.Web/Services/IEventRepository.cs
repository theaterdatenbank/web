using System.Collections.Generic;
using Theateranmeldung.Web.Models.Data;

namespace Theateranmeldung.Web.Services
{
    public interface IEventRepository
    {
        List<Event> GetEvents();

        List<Event> GetEventById(string eventId);

        void AddEvent(Event eventData);
        List<Event> GetEventsFiltered(string wanted, string notwanted);
        void CreateIndex();
        void AddGenre(Genre genreData);
        List<Genre> GetGenres();
    }
}