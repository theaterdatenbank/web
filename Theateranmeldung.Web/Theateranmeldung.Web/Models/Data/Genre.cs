using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Theateranmeldung.Web.Models.Data
{
    public class Genre
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string GenreId
        {
            get; set;
        }

        public string Description { get; set; }
    }
}