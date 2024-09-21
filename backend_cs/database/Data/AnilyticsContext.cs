using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using database.Models;

namespace database.Data;

public partial class AnilyticsContext : DbContext
{
    public AnilyticsContext()
    {
    }

    public AnilyticsContext(DbContextOptions<AnilyticsContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Anime> Animes { get; set; }

    public virtual DbSet<AnimeAnimelist> AnimeAnimelists { get; set; }

    public virtual DbSet<AnimeGenre> AnimeGenres { get; set; }

    public virtual DbSet<AnimeJoinGenre> AnimeJoinGenres { get; set; }

    public virtual DbSet<Animelist> Animelists { get; set; }

    public virtual DbSet<RatingComplete> RatingCompletes { get; set; }

    public virtual DbSet<UserGenreCount> UserGenreCounts { get; set; }

    public virtual DbSet<WatchingStatus> WatchingStatuses { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseNpgsql("Host=localhost;Username=postgres;Password=dev;Database=anilytics");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Anime>(entity =>
        {
            entity.HasKey(e => e.AnimeId).HasName("anime_pkey");

            entity.Property(e => e.AnimeId).ValueGeneratedNever();
        });

        modelBuilder.Entity<AnimeAnimelist>(entity =>
        {
            entity.ToView("anime_animelist");
        });

        modelBuilder.Entity<AnimeGenre>(entity =>
        {
            entity.ToView("anime_genres");
        });

        modelBuilder.Entity<AnimeJoinGenre>(entity =>
        {
            entity.ToView("anime_join_genres");
        });

        modelBuilder.Entity<Animelist>(entity =>
        {
            entity.HasKey(e => new { e.UserId, e.AnimeId }).HasName("animelist_pkey");
        });

        modelBuilder.Entity<RatingComplete>(entity =>
        {
            entity.HasKey(e => new { e.UserId, e.AnimeId }).HasName("rating_complete_pkey");
        });

        modelBuilder.Entity<UserGenreCount>(entity =>
        {
            entity.HasKey(e => e.UserId).HasName("user_genre_count_pkey");

            entity.Property(e => e.UserId).ValueGeneratedNever();
            entity.Property(e => e.Action).HasDefaultValue(0);
            entity.Property(e => e.Adventure).HasDefaultValue(0);
            entity.Property(e => e.Cars).HasDefaultValue(0);
            entity.Property(e => e.Comedy).HasDefaultValue(0);
            entity.Property(e => e.Dementia).HasDefaultValue(0);
            entity.Property(e => e.Demons).HasDefaultValue(0);
            entity.Property(e => e.Drama).HasDefaultValue(0);
            entity.Property(e => e.Ecchi).HasDefaultValue(0);
            entity.Property(e => e.Fantasy).HasDefaultValue(0);
            entity.Property(e => e.Game).HasDefaultValue(0);
            entity.Property(e => e.Harem).HasDefaultValue(0);
            entity.Property(e => e.Hentai).HasDefaultValue(0);
            entity.Property(e => e.Historical).HasDefaultValue(0);
            entity.Property(e => e.Horror).HasDefaultValue(0);
            entity.Property(e => e.Josei).HasDefaultValue(0);
            entity.Property(e => e.Kids).HasDefaultValue(0);
            entity.Property(e => e.Magic).HasDefaultValue(0);
            entity.Property(e => e.MartialArts).HasDefaultValue(0);
            entity.Property(e => e.Mecha).HasDefaultValue(0);
            entity.Property(e => e.Military).HasDefaultValue(0);
            entity.Property(e => e.Music).HasDefaultValue(0);
            entity.Property(e => e.Mystery).HasDefaultValue(0);
            entity.Property(e => e.Parody).HasDefaultValue(0);
            entity.Property(e => e.Police).HasDefaultValue(0);
            entity.Property(e => e.Psychological).HasDefaultValue(0);
            entity.Property(e => e.Romance).HasDefaultValue(0);
            entity.Property(e => e.Samurai).HasDefaultValue(0);
            entity.Property(e => e.School).HasDefaultValue(0);
            entity.Property(e => e.SciFi).HasDefaultValue(0);
            entity.Property(e => e.Seinen).HasDefaultValue(0);
            entity.Property(e => e.Shoujo).HasDefaultValue(0);
            entity.Property(e => e.Shounen).HasDefaultValue(0);
            entity.Property(e => e.ShounenAi).HasDefaultValue(0);
            entity.Property(e => e.SliceOfLife).HasDefaultValue(0);
            entity.Property(e => e.Space).HasDefaultValue(0);
            entity.Property(e => e.Sports).HasDefaultValue(0);
            entity.Property(e => e.SuperPower).HasDefaultValue(0);
            entity.Property(e => e.Supernatural).HasDefaultValue(0);
            entity.Property(e => e.Thriller).HasDefaultValue(0);
            entity.Property(e => e.Vampire).HasDefaultValue(0);
            entity.Property(e => e.Yaoi).HasDefaultValue(0);
        });

        modelBuilder.Entity<WatchingStatus>(entity =>
        {
            entity.HasKey(e => e.Status).HasName("watching_status_pkey");

            entity.Property(e => e.Status).ValueGeneratedNever();
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
