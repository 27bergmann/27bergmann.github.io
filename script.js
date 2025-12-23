/* LOADER */
window.onload = () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        document.getElementById("app").classList.remove("hidden");
    }, 1200);
};

/* TYPE TITLE */
const titleText = "Berg Hub";
let i = 0;
function typeTitle() {
    if (i < titleText.length) {
        title.textContent += titleText[i++];
        setTimeout(typeTitle, 120);
    }
}
typeTitle();

/* SCRIPT */
const encoded = "bG9hZHN0cmluZyhnYW1lOkh0dHBHZXQoImh0dHBzOi8vMjdiZXJnbWFubi5naXRodWIuaW8vbWFpbi5sdWEiKSkoKQ==";
script.textContent = atob(encoded);

/* LANGUAGE */
const isID = navigator.language.startsWith("id");
subtitle.textContent = isID
 ? "Platform Scripting | Eksekutor Roblox"
 : "Platform Scripting | Roblox Executor";

secureText.textContent = isID ? "Koneksi Aman" : "Secure Connection";
copyText.textContent = isID ? "Salin Script" : "Copy Script";
info.textContent = isID
 ? "Tempel skrip ini ke eksekutor."
 : "Paste this script into your executor.";

/* COPY */
function copyScript() {
    navigator.clipboard.writeText(script.textContent);
    copyText.textContent = isID ? "Tersalin!" : "Copied!";
    setTimeout(() => {
        copyText.textContent = isID ? "Salin Script" : "Copy Script";
    }, 1500);
}
