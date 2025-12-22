document.getElementById('copy-btn').addEventListener('click', () => {
  const scriptText = document.getElementById('script-url').value;
  navigator.clipboard.writeText(scriptText).then(() => {
    alert('Teks berhasil disalin ke clipboard!');
  }).catch(err => {
    alert('Gagal menyalin teks: ' + err);
  });
});
