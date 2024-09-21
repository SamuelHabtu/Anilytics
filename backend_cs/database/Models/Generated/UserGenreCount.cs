using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace database.Models;

[Table("user_genre_count")]
public partial class UserGenreCount
{
    [Key]
    [Column("user_id")]
    public int UserId { get; set; }

    [Column("comedy")]
    public int? Comedy { get; set; }

    [Column("game")]
    public int? Game { get; set; }

    [Column("slice_of_life")]
    public int? SliceOfLife { get; set; }

    [Column("romance")]
    public int? Romance { get; set; }

    [Column("mecha")]
    public int? Mecha { get; set; }

    [Column("psychological")]
    public int? Psychological { get; set; }

    [Column("harem")]
    public int? Harem { get; set; }

    [Column("shounen_ai")]
    public int? ShounenAi { get; set; }

    [Column("magic")]
    public int? Magic { get; set; }

    [Column("sports")]
    public int? Sports { get; set; }

    [Column("super_power")]
    public int? SuperPower { get; set; }

    [Column("kids")]
    public int? Kids { get; set; }

    [Column("adventure")]
    public int? Adventure { get; set; }

    [Column("shounen")]
    public int? Shounen { get; set; }

    [Column("police")]
    public int? Police { get; set; }

    [Column("military")]
    public int? Military { get; set; }

    [Column("seinen")]
    public int? Seinen { get; set; }

    [Column("space")]
    public int? Space { get; set; }

    [Column("parody")]
    public int? Parody { get; set; }

    [Column("hentai")]
    public int? Hentai { get; set; }

    [Column("samurai")]
    public int? Samurai { get; set; }

    [Column("yaoi")]
    public int? Yaoi { get; set; }

    [Column("thriller")]
    public int? Thriller { get; set; }

    [Column("ecchi")]
    public int? Ecchi { get; set; }

    [Column("supernatural")]
    public int? Supernatural { get; set; }

    [Column("school")]
    public int? School { get; set; }

    [Column("music")]
    public int? Music { get; set; }

    [Column("martial_arts")]
    public int? MartialArts { get; set; }

    [Column("drama")]
    public int? Drama { get; set; }

    [Column("mystery")]
    public int? Mystery { get; set; }

    [Column("sci_fi")]
    public int? SciFi { get; set; }

    [Column("dementia")]
    public int? Dementia { get; set; }

    [Column("fantasy")]
    public int? Fantasy { get; set; }

    [Column("vampire")]
    public int? Vampire { get; set; }

    [Column("action")]
    public int? Action { get; set; }

    [Column("shoujo")]
    public int? Shoujo { get; set; }

    [Column("cars")]
    public int? Cars { get; set; }

    [Column("josei")]
    public int? Josei { get; set; }

    [Column("horror")]
    public int? Horror { get; set; }

    [Column("historical")]
    public int? Historical { get; set; }

    [Column("demons")]
    public int? Demons { get; set; }
}
