namespace Theateranmeldung.Web.Settings
{
    public class EventStoreSettings : IEventStoreSettings
    {
        public string GenresCollectionName { get; set; }
        public string EventsCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

    public interface IEventStoreSettings
    {
        string GenresCollectionName { get; set; }

        string EventsCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}