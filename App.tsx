import { useState, useEffect } from 'react';
import { Shield, Copy, Check, Github, MessageCircle, Youtube, Code2, Info, Lock } from 'lucide-react';

function App() {
  const [titleText, setTitleText] = useState('');
  const [copied, setCopied] = useState(false);
  const [lang] = useState(navigator.language.startsWith('id') ? 'id' : 'en');

  const fullTitle = 'Berg Hub';
  const scriptCode = atob('bG9hZHN0cmluZyhnYW1lOkh0dHBHZXQoImh0dHBzOi8vMjdiZXJnbWFubi5naXRodWIuaW8vbWFpbi5sdWEiKSkoKQ==');

  const text = {
    en: {
      subtitle: 'Platform Scripting | Roblox Executor',
      secure: 'Secure Connection',
      copy: 'Copy Script',
      copied: 'Copied!',
      info: 'Paste this script into your executor.',
      features: 'Features',
      about: 'About'
    },
    id: {
      subtitle: 'Platform Scripting | Eksekutor Roblox',
      secure: 'Koneksi Aman',
      copy: 'Salin Script',
      copied: 'Tersalin!',
      info: 'Tempel skrip ini ke eksekutor.',
      features: 'Fitur',
      about: 'Tentang'
    }
  };

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullTitle.length) {
        setTitleText(fullTitle.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 120);

    return () => clearInterval(timer);
  }, []);

  const copyScript = () => {
    navigator.clipboard.writeText(scriptCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#160000] via-[#0a0000] to-[#040000] flex items-center justify-center p-6">
      <div className="w-full max-w-2xl animate-fade-in">

        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-3 tracking-tight">
            <span className="inline-block bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,0,0,0.5)]">
              {titleText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          <div className="w-32 h-0.5 mx-auto mb-4 bg-gradient-to-r from-transparent via-red-500 to-transparent shadow-[0_0_15px_rgba(255,0,0,0.8)]"></div>

          <p className="text-gray-300 text-sm md:text-base">{text[lang].subtitle}</p>
        </div>

        <div className="bg-gradient-to-b from-[#0d0000] to-[#050000] rounded-2xl p-6 shadow-[0_0_30px_rgba(255,0,0,0.2)] border border-red-950/30 backdrop-blur-sm animate-slide-up">

          <div className="flex items-center justify-center gap-2 mb-4">
            <Lock className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-medium">{text[lang].secure}</span>
          </div>

          <div className="bg-[#0a0000] rounded-xl p-4 mb-4 shadow-[inset_0_0_20px_rgba(255,0,0,0.2)] border border-red-950/20">
            <pre className="text-gray-300 text-xs md:text-sm font-mono overflow-x-auto whitespace-pre-wrap break-all">
              {scriptCode}
            </pre>
          </div>

          <button
            onClick={copyScript}
            className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 shadow-[0_0_20px_rgba(255,0,0,0.4)] hover:shadow-[0_0_30px_rgba(255,0,0,0.6)] flex items-center justify-center gap-2"
          >
            {copied ? (
              <>
                <Check className="w-5 h-5" />
                <span>{text[lang].copied}</span>
              </>
            ) : (
              <>
                <Copy className="w-5 h-5" />
                <span>{text[lang].copy}</span>
              </>
            )}
          </button>

          <p className="text-center text-gray-400 text-xs mt-4">{text[lang].info}</p>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3">
          <a
            href="https://discord.gg/YOUR"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#100000] hover:bg-[#1a0000] rounded-xl p-4 flex flex-col items-center gap-2 transition-all duration-200 shadow-[inset_0_0_15px_rgba(0,0,0,0.8)] hover:shadow-[0_0_15px_rgba(255,0,0,0.3)] group"
          >
            <MessageCircle className="w-6 h-6 text-red-400 group-hover:text-red-300 transition-colors" />
            <span className="text-white text-sm font-medium">Discord</span>
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#100000] hover:bg-[#1a0000] rounded-xl p-4 flex flex-col items-center gap-2 transition-all duration-200 shadow-[inset_0_0_15px_rgba(0,0,0,0.8)] hover:shadow-[0_0_15px_rgba(255,0,0,0.3)] group"
          >
            <Youtube className="w-6 h-6 text-red-400 group-hover:text-red-300 transition-colors" />
            <span className="text-white text-sm font-medium">YouTube</span>
          </a>

          <a
            href="https://scriptblox.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#100000] hover:bg-[#1a0000] rounded-xl p-4 flex flex-col items-center gap-2 transition-all duration-200 shadow-[inset_0_0_15px_rgba(0,0,0,0.8)] hover:shadow-[0_0_15px_rgba(255,0,0,0.3)] group"
          >
            <Code2 className="w-6 h-6 text-red-400 group-hover:text-red-300 transition-colors" />
            <span className="text-white text-sm font-medium">Scripts</span>
          </a>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="bg-[#100000] rounded-xl p-4 flex items-center gap-3 shadow-[inset_0_0_15px_rgba(0,0,0,0.8)]">
            <Shield className="w-5 h-5 text-green-400 flex-shrink-0" />
            <div className="text-left">
              <h3 className="text-white text-sm font-medium">Secure</h3>
              <p className="text-gray-400 text-xs">Protected</p>
            </div>
          </div>

          <div className="bg-[#100000] rounded-xl p-4 flex items-center gap-3 shadow-[inset_0_0_15px_rgba(0,0,0,0.8)]">
            <Github className="w-5 h-5 text-red-400 flex-shrink-0" />
            <div className="text-left">
              <h3 className="text-white text-sm font-medium">Open Source</h3>
              <p className="text-gray-400 text-xs">Community</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
