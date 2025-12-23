/* TYPE WRITER TITLE */
const titleText = "Berg Hub";
let i = 0;
const title = document.getElementById("title");

function typeTitle() {
    if (i < titleText.length) {
        title.textContent += titleText.charAt(i);
        i++;
        setTimeout(typeTitle, 120);
    }
}
typeTitle();

/* SCRIPT (OBFUSCATED) */
const encoded = "bG9hZHN0cmluZyhnYW1lOkh0dHBHZXQoImh0dHBzOi8vMjdiZXJnbWFubi5naXRodWIuaW8vbWFpbi5sdWEiKSkoKQ==";
document.getElementById("script").innerText = atob(encoded);

/* LANGUAGE */
const lang = navigator.language.startsWith("id") ? "id" : "en";
const text = {
    en: {
        subtitle: "Platform Scripting | Roblox Executor",
        secure: "Secure Connection",
        copy: "Copy Script",
        copied: "Copied!",
        info: "Paste this script into your executor."
    },
    id: {
        subtitle: "Platform Scripting | Eksekutor Roblox",
        secure: "Koneksi Aman",
        copy: "Salin Script",
        copied: "Tersalin!",
        info: "Tempel skrip ini ke eksekutor."
    }
};

subtitle.textContent = text[lang].subtitle;
secureText.textContent = text[lang].secure;
copyText.textContent = text[lang].copy;
info.textContent = text[lang].info;

/* COPY */
function copyScript() {
    navigator.clipboard.writeText(script.innerText);
    copyText.textContent = text[lang].copied;
    setTimeout(() => {
        copyText.textContent = text[lang].copy;
    }, 1500);
}
