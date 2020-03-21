using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Theateranmeldung.Web.Models.Data
{

    public class Event
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string EventId
        {
            get; set;
        }

        public DateTime EventDate { get; set; }

        public string StreamingLink { get; set; }

        public string Subtitle { get; set; }

        public string Genre { get; set; }

        public TimeSpan Length { get; set; }

        public bool LongTimeAvailable { get; set; }

        public DateTime AvailableFrom { get; set; }

        public DateTime AvailableTil { get; set; }

        public string Thumbnail { get; set; }

        public string Thumbnail_Copyright { get; set; }

        public string EventName { get; set; }

        public string EventText { get; set; }

        public Organiser Organisation { get; set; }

        public bool Approved { get; set; }
    }
}