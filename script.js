document.getElementById('copy-btn').addEventListener('click', () => {
  const scriptText = document.getElementById('script-url').value;
  navigator.clipboard.writeText(scriptText).then(() => {
    const btn = document.getElementById('copy-btn');
    const originalHTML = btn.innerHTML;

    btn.innerHTML = `<span data-icon="check-circle"></span> Copied!`;

    // Reapply Lucide icon SVG for the check-circle icon
    const svg = lucide.createIcon("check-circle", {strokeWidth: 1.5, width: 22, height: 22, color: "white"});
    btn.querySelector('span').replaceWith(svg);

    btn.disabled = true;
    btn.style.cursor = 'default';

    setTimeout(() => {
      btn.innerHTML = originalHTML;
      // Reapply clipboard icon SVG after restoring text
      document.querySelectorAll("[data-icon]").forEach(el => {
        const iconName = el.getAttribute("data-icon");
        const newSvg = lucide.createIcon(iconName, {strokeWidth: 1.5, width: 20, height: 20, color: "#fff"});
        el.replaceWith(newSvg);
      });
      btn.disabled = false;
      btn.style.cursor = 'pointer';
    }, 2200);
  }).catch(err => {
    alert('Failed to copy text: ' + err);
  });
});
