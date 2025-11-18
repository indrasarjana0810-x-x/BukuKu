import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

export const notifySuccess = (message) => {
  return Swal.fire({
    icon: "success",
    title: "Berhasil!",
    text: message,
    timer: 1800,
    showConfirmButton: false
  });
};

export const notifyError = (message) => {
  return Swal.fire({
    icon: "error",
    title: "Gagal!",
    text: message,
    confirmButtonText: "OK",
  });
};

export const notifyWarning = (message) => {
  return Swal.fire({
    icon: "warning",
    title: "Perhatian!",
    text: message,
    confirmButtonText: "OK",
  });
};

export const notifyConfirm = async (message) => {
  return Swal.fire({
    title: "Yakin?",
    text: message,
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Ya",
    cancelButtonText: "Batal",
  });
};