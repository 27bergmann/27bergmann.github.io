const text = {
    en: {
        subtitle: "Platform Scripting | Roblox Executor",
        secure: "Secure Connection",
        info: "Paste this script into your executor to run it.",
        copy: "Copy Script"
    },
    id: {
        subtitle: "Platform Scripting | Eksekutor Roblox",
        secure: "Koneksi Aman",
        info: "Tempel skrip ini ke eksekutor Anda.",
        copy: "Salin Script"
    },
    es: {
        subtitle: "Plataforma de Scripts | Ejecutor Roblox",
        secure: "Conexión Segura",
        info: "Pega este script en tu ejecutor.",
        copy: "Copiar Script"
    },
    fr: {
        subtitle: "Plateforme de Script | Exécuteur Roblox",
        secure: "Connexion Sécurisée",
        info: "Collez ce script dans votre exécuteur.",
        copy: "Copier le Script"
    },
    ja: {
        subtitle: "スクリプトプラットフォーム | Roblox 実行",
        secure: "安全な接続",
        info: "実行ツールに貼り付けてください。",
        copy: "コピー"
    }
};

const lang = (navigator.language || "en").slice(0,2);
const t = text[lang] || text.en;

subtitle.textContent = t.subtitle;
secure.textContent = t.secure;
info.textContent = t.info;
copyText.textContent = t.copy;

function copyScript() {
    document.getElementById("copySound").play();
    navigator.clipboard.writeText(code.innerText);
}
