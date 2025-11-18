import React, { useState } from "react";
import { notifySuccess, notifyError } from "./Notif";

export default function BukuForm() {

  const [form, setForm] = useState({
    judul: "",
    tgl_terbit: "",
    genre: "",
    harga: "",
    cover: "",
    stok: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // validasi simple
    if (!form.judul || !form.genre || !form.harga || !form.stok) {
      notifyError("Semua field wajib diisi!");
      return;
    }

    const payload = {
      judul: form.judul,
      tgl_terbit: form.tgl_terbit,
      genre: form.genre,
      harga: parseFloat(form.harga),
      cover: form.cover,
      stok: parseInt(form.stok)
    };

    try {
      const res = await fetch("https://localhost:7142/api/Bukus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        notifySuccess("Buku berhasil ditambahkan!");
        setForm({
          judul: "",
          tgl_terbit: "",
          genre: "",
          harga: "",
          cover: "",
          stok: ""
        });
      } else {
        notifyError("Gagal menyimpan data buku!");
      }
    } catch (error) {
      notifyError("Terjadi error pada server!");
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Tambah Data Buku</h3>

      <form className="card p-4 shadow" onSubmit={handleSubmit}>
        
        <div className="mb-3">
          <label className="form-label">Judul Buku</label>
          <input
            type="text"
            className="form-control"
            name="judul"
            value={form.judul}
            onChange={handleChange}
            placeholder="Masukkan judul buku..."
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Tanggal Terbit</label>
          <input
            type="date"
            className="form-control"
            name="tgl_terbit"
            value={form.tgl_terbit}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Genre</label>
          <input
            type="text"
            className="form-control"
            name="genre"
            value={form.genre}
            onChange={handleChange}
            placeholder="Contoh: Fiksi, Edukasi, Novel"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Harga</label>
          <input
            type="number"
            className="form-control"
            name="harga"
            value={form.harga}
            onChange={handleChange}
            placeholder="Masukkan harga buku"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Cover (URL)</label>
          <input
            type="text"
            className="form-control"
            name="cover"
            value={form.cover}
            onChange={handleChange}
            placeholder="URL gambar cover (opsional)"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Stok</label>
          <input
            type="number"
            className="form-control"
            name="stok"
            value={form.stok}
            onChange={handleChange}
            placeholder="Jumlah stok tersedia"
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Simpan Buku
        </button>
      </form>
    </div>
  );
}