using System;
using System.Collections.Generic;
using System.Linq;
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
            var wantedTokens = string.IsNullOrWhiteSpace(wanted) ? new List<string>() : wanted.Split(' ').ToList().ConvertAll(m => Regex.Escape(m));
            var notWantedTokens = string.IsNullOrWhiteSpace(notwanted) ? new List<string>() : notwanted.Split(' ').ToList().ConvertAll(m => Regex.Escape(m));

            var builder = Builders<Event>.Filter;

            FilterDefinition<Event> firstFilter, secondFilter;
            if (!wantedTokens.Any())
            {
                firstFilter = builder.Empty;
            }
            else
            {
                firstFilter = builder.Not(builder.Empty);
            }

            foreach (var wantedToken in wantedTokens)
            {
                firstFilter = builder.Or(firstFilter, 
                    builder.Regex(m => m.EventName, new BsonRegularExpression(wantedToken, "i")),
                    builder.Regex(m => m.EventText, new BsonRegularExpression(wantedToken+"i")),
                    builder.Regex(m => m.Subtitle, new BsonRegularExpression(wantedToken, "i")),
                    builder.Regex(m => m.Genre, new BsonRegularExpression(wantedToken, "i")));
            }

            foreach (var notWantedToken in notWantedTokens)
            {
                firstFilter = builder.And(firstFilter, builder.Not(builder.Or(
                    builder.Regex(m => m.EventName, new BsonRegularExpression(notWantedToken, "i")),
                    builder.Regex(m => m.EventText, new BsonRegularExpression(notWantedToken + "i")),
                    builder.Regex(m => m.Subtitle, new BsonRegularExpression(notWantedToken, "i")),
                    builder.Regex(m => m.Genre, new BsonRegularExpression(notWantedToken, "i")))));

            }

            return _events.Find(_ => firstFilter.Inject()).ToList();

        }

        public void CreateIndex()
        {
            var keys = Builders<Event>.IndexKeys.Text("EventName").Text("EventText");
            _events.Indexes.CreateOne(keys);
        }
    }
}