
function submitOrder() {
  event.preventDefault();
  const nama = document.getElementById('nama').value;
  const wa = document.getElementById('wa').value;
  const alamat = document.getElementById('alamat').value;
  const pembayaran = document.getElementById('pembayaran').value;

  const pesan = `Halo, saya ingin pesan Jam Tangan Wanita.\n\nNama: ${nama}\nNo WA: ${wa}\nAlamat: ${alamat}\nPembayaran: ${pembayaran}`;
  const encoded = encodeURIComponent(pesan);
  window.open(`https://wa.me/6281316660739?text=${encoded}`, '_blank');

  fbq('track', 'ViewContent');
  fbq('track', 'Purchase', {value: 139000, currency: 'IDR'});
}
