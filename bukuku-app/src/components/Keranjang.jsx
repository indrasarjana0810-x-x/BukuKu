import React, { useState, useEffect } from "react";

const API = "https://localhost:7142/api";

export default function Keranjang() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  const updateCart = (newCart) => {
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  const checkout = () => {
    const total = cart.reduce((sum, item) => sum + item.harga * item.quantity, 0);

    const penjualan = {
      tanggal: new Date(),
      total: total,
      penjualanDetails: cart.map(c => ({
        bukuId: c.bukuId,
        quantity: c.quantity,
        harga_satuan: c.harga,
        subtotal: c.harga * c.quantity
      }))
    };

    fetch(`${API}/Penjualans`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(penjualan)
    })
      .then(() => {
        alert("Checkout berhasil!");
        localStorage.removeItem("cart");
        setCart([]);
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="container mt-4">
      <h2>🛒 Keranjang</h2>

      {cart.length === 0 && <p>Keranjang kosong</p>}

      {cart.length > 0 && (
        <>
          <table className="table table-striped mt-3">
            <thead>
              <tr>
                <th>Buku</th>
                <th>Harga</th>
                <th>Qty</th>
                <th>Subtotal</th>
              </tr>
            </thead>

            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>{item.judul}</td>
                  <td>Rp {item.harga}</td>
                  <td>
                    <input
                      type="number"
                      min="1"
                      className="form-control"
                      value={item.quantity}
                      onChange={(e) => {
                        const newCart = [...cart];
                        newCart[index].quantity = Number(e.target.value);
                        updateCart(newCart);
                      }}
                    />
                  </td>
                  <td>Rp {item.harga * item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <button className="btn btn-primary" onClick={checkout}>
            Checkout
          </button>
        </>
      )}
    </div>
  );
}