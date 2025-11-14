namespace BukuKu_backend.Model
{
    public class PenjualanDetail
    {
        // FK ke Penjualan
        public int PenjualanId { get; set; }

        // FK ke Buku  
        public int BukuId { get; set; }

        public int Quantity { get; set; }
        public decimal Harga_satuan { get; set; }
        public decimal Subtotal { get; set; }

        // Navigation properties
        public Penjualan Penjualan { get; set; } = null!;
        public Buku Buku { get; set; } = null!;
    }
}
