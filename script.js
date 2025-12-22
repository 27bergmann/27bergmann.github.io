document.getElementById('copy-btn').addEventListener('click', () => {
  const scriptText = document.getElementById('script-url').value;
  navigator.clipboard.writeText(scriptText).then(() => {
    // Create a temporary notification
    const btn = document.getElementById('copy-btn');
    const originalText = btn.textContent;

    btn.textContent = '✅ Copied!';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = originalText;
      btn.disabled = false;
    }, 2000);
  }).catch(err => {
    alert('Failed to copy text: ' + err);
  });
});
