function submitOrder() {
  event.preventDefault();
  const nama = document.getElementById('nama').value;
  const wa = document.getElementById('wa').value;
  const alamat = document.getElementById('alamat').value;
  const varian = document.getElementById('varian').value;
  const pembayaran = document.getElementById('pembayaran').value;

  const pesan = `Halo kak, saya ingin pesan Jam Tangan atas nama:\n\n- Nama: ${nama}\n- No WA: ${wa}\n- Alamat: ${alamat}\n- Varian: ${varian}\n- Pembayaran: ${pembayaran}\n\nTerima Kasih.`;
  const encoded = encodeURIComponent(pesan);
  window.open(`https://wa.me/6281316660739?text=${encoded}`, '_blank');

  fbq('track', 'ViewContent');
  fbq('track', 'Purchase', {value: 165000, currency: 'IDR'});
}
