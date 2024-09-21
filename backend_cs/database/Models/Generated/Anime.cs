﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace database.Models;

[Table("anime")]
public partial class Anime
{
    [Key]
    [Column("anime_id")]
    public int AnimeId { get; set; }

    [Column("name")]
    [StringLength(200)]
    public string? Name { get; set; }

    [Column("score")]
    [Precision(4, 2)]
    public decimal? Score { get; set; }

    [Column("genres")]
    [StringLength(200)]
    public string? Genres { get; set; }

    [Column("english_name")]
    [StringLength(200)]
    public string? EnglishName { get; set; }

    [Column("japanese_name")]
    [StringLength(200)]
    public string? JapaneseName { get; set; }

    [Column("type")]
    [StringLength(100)]
    public string? Type { get; set; }

    [Column("episodes")]
    public int? Episodes { get; set; }

    [Column("aired")]
    [StringLength(100)]
    public string? Aired { get; set; }

    [Column("premiered")]
    [StringLength(20)]
    public string? Premiered { get; set; }

    [Column("producers")]
    [StringLength(500)]
    public string? Producers { get; set; }

    [Column("licensors")]
    [StringLength(200)]
    public string? Licensors { get; set; }

    [Column("studios")]
    [StringLength(200)]
    public string? Studios { get; set; }

    [Column("source")]
    [StringLength(100)]
    public string? Source { get; set; }

    [Column("duration")]
    [StringLength(100)]
    public string? Duration { get; set; }

    [Column("rating")]
    [StringLength(100)]
    public string? Rating { get; set; }

    [Column("ranked")]
    [Precision(6, 1)]
    public decimal? Ranked { get; set; }

    [Column("popularity")]
    public int? Popularity { get; set; }

    [Column("members")]
    public int? Members { get; set; }

    [Column("favorites")]
    public int? Favorites { get; set; }

    [Column("watching")]
    public int? Watching { get; set; }

    [Column("completed")]
    public int? Completed { get; set; }

    [Column("on_hold")]
    public int? OnHold { get; set; }

    [Column("dropped")]
    public int? Dropped { get; set; }

    [Column("plan_to_watch")]
    public int? PlanToWatch { get; set; }

    [Column("score_10")]
    [Precision(10, 1)]
    public decimal? Score10 { get; set; }

    [Column("score_9")]
    [Precision(10, 1)]
    public decimal? Score9 { get; set; }

    [Column("score_8")]
    [Precision(10, 1)]
    public decimal? Score8 { get; set; }

    [Column("score_7")]
    [Precision(10, 1)]
    public decimal? Score7 { get; set; }

    [Column("score_6")]
    [Precision(10, 1)]
    public decimal? Score6 { get; set; }

    [Column("score_5")]
    [Precision(10, 1)]
    public decimal? Score5 { get; set; }

    [Column("score_4")]
    [Precision(10, 1)]
    public decimal? Score4 { get; set; }

    [Column("score_3")]
    [Precision(10, 1)]
    public decimal? Score3 { get; set; }

    [Column("score_2")]
    [Precision(10, 1)]
    public decimal? Score2 { get; set; }

    [Column("score_1")]
    [Precision(10, 1)]
    public decimal? Score1 { get; set; }
}