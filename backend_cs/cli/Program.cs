using database.Data;
using database.Models;
namespace cli;
class Program
{
    public static void Main()
    {

        AnilyticsContext context = new AnilyticsContext();

        var anime = context.Animes.Take(10);
        foreach (Anime show in anime)
        {
            Console.WriteLine(show.ToString());
        }
    }
}