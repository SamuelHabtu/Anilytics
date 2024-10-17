namespace database.Models;

public partial class Anime
{
    public override string ToString()
    {
        return $"ID: {this.AnimeId}, Name: {(this.Name != null ? this.Name : "null")}, English Name: {(this.EnglishName != null ? this.EnglishName : "null")}, Japanese Name: {(this.JapaneseName != null ? this.JapaneseName : "null")}";
    }
}
