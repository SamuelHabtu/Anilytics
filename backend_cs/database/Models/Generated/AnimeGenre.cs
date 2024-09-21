using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace database.Models;

[Keyless]
public partial class AnimeGenre
{
    [Column("anime_id")]
    public int? AnimeId { get; set; }

    [Column("genre_1")]
    public string? Genre1 { get; set; }

    [Column("genre_2")]
    public string? Genre2 { get; set; }

    [Column("genre_3")]
    public string? Genre3 { get; set; }

    [Column("genre_4")]
    public string? Genre4 { get; set; }

    [Column("genre_5")]
    public string? Genre5 { get; set; }

    [Column("genre_6")]
    public string? Genre6 { get; set; }

    [Column("genre_7")]
    public string? Genre7 { get; set; }

    [Column("genre_8")]
    public string? Genre8 { get; set; }

    [Column("genre_9")]
    public string? Genre9 { get; set; }

    [Column("genre_10")]
    public string? Genre10 { get; set; }

    [Column("genre_11")]
    public string? Genre11 { get; set; }

    [Column("genre_12")]
    public string? Genre12 { get; set; }

    [Column("genre_13")]
    public string? Genre13 { get; set; }

    [Column("genre_14")]
    public string? Genre14 { get; set; }

    [Column("genre_15")]
    public string? Genre15 { get; set; }

    [Column("genre_16")]
    public string? Genre16 { get; set; }

    [Column("genre_17")]
    public string? Genre17 { get; set; }
}
