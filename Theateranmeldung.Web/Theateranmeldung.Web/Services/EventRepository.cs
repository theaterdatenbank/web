using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using Microsoft.AspNetCore.Components.Forms;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using Theateranmeldung.Web.Models;
using Theateranmeldung.Web.Models.Data;
using Theateranmeldung.Web.Settings;

namespace Theateranmeldung.Web.Services
{
    public class EventRepository : IEventRepository
    {
        private readonly IMongoCollection<Event> _events;
        private readonly IMongoCollection<Genre> _genres;

        public EventRepository(IEventStoreSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _events = database.GetCollection<Event>(settings.EventsCollectionName);
            _genres = database.GetCollection<Genre>(settings.GenresCollectionName);
        }

        public List<Event> GetEvents()
        {
            return _events.Find(m => m.Approved).ToList();
        }

        public List<Genre> GetGenres()
        {
            return _genres.Find(_ => true).ToList();
        }

        public List<Event> GetEventById(string eventId)
        {
            return _events.Find(m => m.Approved && m.EventId == eventId).ToList();
        }

        public void AddEvent(Event eventData)
        {
            _events.InsertOne(eventData);
        }

        public void AddGenre(Genre genreData)
        {
            _genres.InsertOne(genreData);
        }

        public List<Event> GetEventsFiltered(string wanted, string notwanted)
        {
            
            var wantedEscape = Regex.Escape(wanted ?? string.Empty);
            var notwantedEscape = Regex.Escape(notwanted ?? string.Empty);

                var builder = Builders<Event>.Filter;

                var filter = builder.Empty;
                if (!string.IsNullOrEmpty(wanted))
                {
                    filter = builder.Or(builder.Regex(m => m.EventName, new BsonRegularExpression(wantedEscape)),
                        builder.Regex(m => m.EventText, new BsonRegularExpression(wantedEscape)));
                }

                var otherFilter = builder.Not(builder.Or(builder.Regex(m => m.EventName, new BsonRegularExpression(notwantedEscape)),
                builder.Regex(m => m.EventText, new BsonRegularExpression(notwantedEscape))));

            if (!string.IsNullOrEmpty(notwanted))
            {
                filter = builder.And(filter, otherFilter);
            }

            return _events.Find(filter).ToList();

        }

        public void CreateIndex()
        {
            var keys = Builders<Event>.IndexKeys.Text("EventName").Text("EventText");
            _events.Indexes.CreateOne(keys);
        }
    }
}