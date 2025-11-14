using System.ComponentModel.DataAnnotations;

namespace BukuKu_backend.Model
{
    public class Penjualan
    {
        public int PenjualanId { get; set; }
        public DateTime Tanggal { get; set; }
        public decimal Total { get; set; }

        // Navigation property ke detail
        public List<PenjualanDetail> PenjualanDetails { get; set; } = new List<PenjualanDetail>();
    }
}
