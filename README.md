# BukuKu
Repository untuk sistem manajemen buku dan transaksi penjualan. Backend API ini dibangun dengan ASP.NET Core dan Entity Framework Core untuk mengelola data master buku serta proses transaksi penjualan.

# 🚀 Fitur Utama
Master Data
Manajemen katalog buku (CRUD operations)

Informasi lengkap buku: judul, penulis, genre, harga, stok, cover

Tracking stok buku otomatis

Transaksi Penjualan
Sistem penjualan dengan header-detail structure

Composite key pada detail transaksi untuk optimalisasi

Kalkulasi subtotal dan total otomatis

Validasi stok sebelum transaksi

# 🏗️ Arsitektur Database
Entities:
Buku - Master data buku dengan primary key Id_buku

Penjualan - Header transaksi penjualan

PenjualanDetail - Detail transaksi dengan composite key (PenjualanId, BukuId)

Relationships:
One-to-Many: Penjualan → PenjualanDetail

Many-to-One: PenjualanDetail → Buku

# 🛠️ Teknologi
ASP.NET Core 6/7

Entity Framework Core

SQL Server

REST API Architecture

# 📋 API Endpoints
text
GET    /api/Buku           # Get all books
GET    /api/Buku/{id}      # Get book by id
POST   /api/Buku           # Create new book
PUT    /api/Buku/{id}      # Update book
DELETE /api/Buku/{id}      # Delete book

GET    /api/Penjualan      # Get all sales
POST   /api/Penjualan      # Create new sales transaction
# 🎯 Use Cases
Aplikasi toko buku online

Sistem inventory perpustakaan

Manajemen stok dan penjualan retailer buku

Repository ini menyediakan foundation yang solid untuk pengembangan sistem manajemen buku dengan struktur database yang optimal dan scalable.
