// Basic obfuscation (not readable in HTML)
const encoded = "bG9hZHN0cmluZyhnYW1lOkh0dHBHZXQoImh0dHBzOi8vMjdiZXJnbWFubi5naXRodWIuaW8vbWFpbi5sdWEiKSkoKQ==";

document.getElementById("script").innerText =
    atob(encoded);

const lang = navigator.language.startsWith("id") ? "id" : "en";

const text = {
    en: {
        subtitle: "Platform Scripting | Roblox Executor",
        secure: "Secure Connection",
        copy: "Copy Script",
        info: "Paste this script into your executor."
    },
    id: {
        subtitle: "Platform Scripting | Eksekutor Roblox",
        secure: "Koneksi Aman",
        copy: "Salin Script",
        info: "Tempel skrip ini ke eksekutor."
    }
};

subtitle.textContent = text[lang].subtitle;
secureText.textContent = text[lang].secure;
copyText.textContent = text[lang].copy;
info.textContent = text[lang].info;

function copyScript() {
    navigator.clipboard.writeText(script.innerText);
}
