using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace database.Models;

[PrimaryKey("UserId", "AnimeId")]
[Table("animelist")]
public partial class Animelist
{
    [Key]
    [Column("user_id")]
    public int UserId { get; set; }

    [Key]
    [Column("anime_id")]
    public int AnimeId { get; set; }

    [Column("rating")]
    [Precision(4, 2)]
    public decimal Rating { get; set; }

    [Column("status")]
    public short? Status { get; set; }

    [Column("episodes")]
    public int? Episodes { get; set; }
}
