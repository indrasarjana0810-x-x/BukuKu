import React, { useEffect, useState } from "react";

const API = "https://localhost:7142/api";

export default function Buku() {
  const [buku, setBuku] = useState([]);

  useEffect(() => {
    fetch(`${API}/Bukus`)
      .then(res => res.json())
      .then(data => {
      console.log("DATA DARI API =", data);
      setBuku(data);
    })
      .catch(err => console.error(err));
  }, []);

  const addToCart = (item) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ ...item, quantity: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Ditambahkan ke keranjang!");
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">📚 Daftar Buku</h2>

      <div className="row">
        {buku.map(item => (
          <div key={item.bukuId} className="col-md-3 mb-4">
            <div className="card shadow-sm">
              <img
                src={item.cover}
                className="card-img-top"
                alt={item.judul}
                style={{ height: "250px", objectFit: "cover" }}
              />

              <div className="card-body">
                <h5 className="card-title">{item.judul}</h5>
                <p className="text-muted">{item.genre}</p>
                <p><strong>Harga:</strong> Rp {item.harga}</p>

                <a href={`/detail/${item.bukuId}`} className="btn btn-primary w-100 mb-2">
                  Detail
                </a>

                <button className="btn btn-success w-100" onClick={() => addToCart(item)}>
                  + Keranjang
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}