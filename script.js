function copyScript() {
    const text = document.getElementById("code").innerText;
    navigator.clipboard.writeText(text);
    document.getElementById("copyBtn").innerText = "✅ Copied!";
    setTimeout(() => {
        document.getElementById("copyBtn").innerText = "📋 Copy to Clipboard";
    }, 1500);
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
