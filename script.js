const copyBtn = document.getElementById('copy-btn');
const scriptTextarea = document.querySelector('.script-textarea');

copyBtn.addEventListener('click', () => {
  const textToCopy = scriptTextarea.value;
  navigator.clipboard.writeText(textToCopy).then(() => {
    copyBtn.disabled = true;
    const originalText = copyBtn.innerHTML;
    copyBtn.innerHTML = `
      <svg class="icon icon-check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:22px;height:22px;margin-right:7px;">
        <path d="M5 13l4 4L19 7" />
      </svg>
      Copied!
    `;
    setTimeout(() => {
      copyBtn.innerHTML = originalText;
      copyBtn.disabled = false;
    }, 1800);
  }).catch(err => {
    alert('Failed to copy text: ' + err);
  });
});
