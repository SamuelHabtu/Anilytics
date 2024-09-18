using Npgsql;

namespace api.Drivers
{
    class PostGresDriver(){
        private readonly string? host;
        private readonly string? username;
        private readonly string? password;
        private readonly string? database;
        private NpgsqlDataSource? db;
        public PostGresDriver(string host, string username,string password, string database):this(){
            this.host = host;
            this.username = username;
            this.password = password;
            this.database = database;
        }

        public void Connect(){
            string connectionString = $"Host={host};Username={username};Password={password};Database={database}";
            try{
                this.db = NpgsqlDataSource.Create(connectionString);
            }
            catch(Exception e){
                Console.WriteLine(e.Message);
            }
        }

        public string async read(){
            await using (var cmd = db.CreateCommand("SELECT * FROM anime limit 10"));
            await using (var reader = await cmd.ExecuteReaderAsync());
            await reader.ReadAsync();
            return reader.GetString(0);
        }
    }
}

