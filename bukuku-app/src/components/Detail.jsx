import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API = "https://localhost:7142/api";

export default function Detail() {
  const { id } = useParams();
  const [buku, setBuku] = useState(null);

  useEffect(() => {
    fetch(`${API}/Bukus/${id}`)
      .then(res => res.json())
      .then(data => setBuku(data))
      .catch(console.error);
  }, [id]);

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ ...buku, quantity: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Ditambahkan ke keranjang!");
  };

  if (!buku) return <div className="container mt-4">Loading...</div>;

  return (
    <div className="container mt-4">
      <h2>Detail Buku</h2>

      <div className="row mt-4">
        <div className="col-md-4">
          <img src={buku.cover} alt={buku.judul} className="img-fluid rounded" />
        </div>

        <div className="col-md-8">
          <h3>{buku.judul}</h3>
          <p><strong>Genre:</strong> {buku.genre}</p>
          <p><strong>Tanggal Terbit:</strong> {buku.tgl_terbit}</p>
          <p><strong>Harga:</strong> Rp {buku.harga}</p>
          <p><strong>Stok:</strong> {buku.stok}</p>

          <button className="btn btn-success w-100" onClick={addToCart}>
            + Keranjang
          </button>
        </div>
      </div>
    </div>
  );
}