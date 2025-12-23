document.addEventListener('DOMContentLoaded', function() {
    const copyBtn = document.getElementById('copyBtn');
    const scriptInput = document.getElementById('scriptInput');
    const copyText = copyBtn.querySelector('.copy-text');
    
    copyBtn.addEventListener('click', async function() {
        try {
            await navigator.clipboard.writeText(scriptInput.value);
            
            copyBtn.classList.add('copied');
            copyText.textContent = 'Copied!';
            
            setTimeout(() => {
                copyBtn.classList.remove('copied');
                copyText.textContent = 'Copy Script';
            }, 2000);
            
        } catch (err) {
            const textArea = document.createElement('textarea');
            textArea.value = scriptInput.value;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            textArea.style.top = '-999999px';
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            
            try {
                document.execCommand('copy');
                copyBtn.classList.add('copied');
                copyText.textContent = 'Copied!';
                
                setTimeout(() => {
                    copyBtn.classList.remove('copied');
                    copyText.textContent = 'Copy Script';
                }, 2000);
            } catch (fallbackErr) {
                console.error('Failed to copy text: ', fallbackErr);
                copyText.textContent = 'Failed!';
                setTimeout(() => {
                    copyText.textContent = 'Copy Script';
                }, 2000);
            }
            
            document.body.removeChild(textArea);
        }
    });
    
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('click', function() {
            const label = this.querySelector('.feature-label').textContent;
            
            this.classList.add('pulse');
            setTimeout(() => {
                this.classList.remove('pulse');
            }, 2000);
            
            switch(label) {
                case 'Discord':
                    window.open('https://discord.gg/your-discord-invite', '_blank');
                    break;
                case 'YouTube':
                    window.open('https://youtube.com/your-youtube-channel', '_blank');
                    break;
                case 'Scripts':
                    window.open('https://github.com/yourusername/berg-hub/tree/main/scripts', '_blank');
                    break;
                case 'Secure Protected':
                    alert('Berg Hub uses advanced encryption and security measures to protect your data and scripts.');
                    break;
                case 'Open Source Community':
                    window.open('https://github.com/yourusername/berg-hub', '_blank');
                    break;
            }
        });
    });
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});
