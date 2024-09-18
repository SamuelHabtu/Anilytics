using api.Drivers;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

PostGresDriver db = new PostGresDriver("localhost","postgres","dev","anilytics");

app.MapGet("/", async () => {
    return db.read();
});

app.Run();
