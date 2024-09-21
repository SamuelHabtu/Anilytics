using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace database.Models;

[Table("watching_status")]
public partial class WatchingStatus
{
    [Key]
    [Column("status")]
    public short Status { get; set; }

    [Column("description")]
    [StringLength(20)]
    public string Description { get; set; } = null!;
}
