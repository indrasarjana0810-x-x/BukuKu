import React, { useEffect, useState } from "react";

const API = "https://localhost:7142/api";

export default function Penjualan() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${API}/Penjualans`)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>📄 Riwayat Penjualan</h2>

      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tanggal</th>
            <th>Total</th>
            <th>Detail</th>
          </tr>
        </thead>

        <tbody>
          {data.map(item => (
            <tr key={item.penjualanId}>
              <td>{item.penjualanId}</td>
              <td>{item.tanggal}</td>
              <td>Rp {item.total}</td>
              <td>
                <ul>
                  {item.penjualanDetails?.map((d, i) => (
                    <li key={i}>
                      Buku {d.bukuId} - Qty {d.quantity} | Subtotal Rp {d.subtotal}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}