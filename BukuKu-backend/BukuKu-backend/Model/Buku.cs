namespace BukuKu_backend.Model
{
    public class Buku
    {
        public int BukuId { get; set; }
        public string Judul { get; set; } = string.Empty;
        public DateTime Tgl_terbit { get; set; }
        public string Genre { get; set; } = string.Empty;
        public double Harga { get; set; }
        public string? Cover { get; set; } = string.Empty;
        public int Stok { get; set; }
    }
}
