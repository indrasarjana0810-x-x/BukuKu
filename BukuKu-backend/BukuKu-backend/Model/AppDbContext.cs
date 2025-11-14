using Microsoft.EntityFrameworkCore;

namespace BukuKu_backend.Model
{
    public class AppDbContext : DbContext
    {

    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        // Tambahkan DbSet untuk masing-masing model
        public DbSet<Buku> Buku { get; set; } = null!;
        public DbSet<Penjualan> Penjualan { get; set; } = null!;
        public DbSet<PenjualanDetail> PenjualanDetail { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // composite PK
            modelBuilder.Entity<PenjualanDetail>()
                .HasKey(pd => new { pd.PenjualanId, pd.BukuId });
        }
    }
}
