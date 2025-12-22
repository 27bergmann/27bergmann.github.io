const clickSound = document.getElementById("clickSound");
const copySound = document.getElementById("copySound");

function play(sound) {
    sound.currentTime = 0;
    sound.play();
}

function copyScript() {
    play(copySound);
    const text = document.getElementById("code").innerText;
    navigator.clipboard.writeText(text);
}

function setEN() {
    document.getElementById("subtitle").innerText =
        "Platform Scripting | Roblox Executor";
    document.getElementById("secure").innerText =
        "🔒 Secure Connection";
    document.getElementById("info").innerText =
        "Paste this script into your executor to run it.";
}

function setID() {
    document.getElementById("subtitle").innerText =
        "Platform Scripting | Eksekutor Roblox";
    document.getElementById("secure").innerText =
        "🔒 Koneksi Aman";
    document.getElementById("info").innerText =
        "Tempel skrip ini ke eksekutor Anda untuk menjalankan.";
}

/* Auto language detect */
const lang = navigator.language || navigator.userLanguage;
if (lang.startsWith("id")) {
    setID();
} else {
    setEN();
}

document.body.addEventListener("click", () => play(clickSound));
