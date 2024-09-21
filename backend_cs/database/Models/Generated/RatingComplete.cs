using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace database.Models;

[PrimaryKey("UserId", "AnimeId")]
[Table("rating_complete")]
public partial class RatingComplete
{
    [Key]
    [Column("user_id")]
    public int UserId { get; set; }

    [Key]
    [Column("anime_id")]
    public int AnimeId { get; set; }

    [Column("rating")]
    [Precision(4, 2)]
    public decimal? Rating { get; set; }
}
