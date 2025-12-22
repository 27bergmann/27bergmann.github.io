/* Reset and base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  user-select: none;
  -webkit-user-select: none;
}

body {
  background: #1b0000;
  color: #e65454;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 1rem;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  max-width: 400px;
  width: 100%;
  background-color: #2a0000;
  border-radius: 15px;
  padding: 25px 25px 40px 25px;
  box-shadow:
    0 0 15px #730909,
    inset 0 0 80px #8c1010,
    inset 0 0 25px #aa1515;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header {
  width: 100%;
  text-align: center;
  margin-bottom: 22px;
}

.title {
  font-weight: 800;
  font-size: 3rem;
  color: #fff;
  text-shadow: 
    0 0 6px #ff4040,
    0 0 20px #ff1a1a;
  border-bottom: 3px solid #ff4848;
  text-transform: none;
  padding-bottom: 6px;
  font-family: 'Segoe UI Semibold', sans-serif;
  letter-spacing: 0.02em;
  user-select: text;
  animation: pulseGlow 3s ease-in-out infinite;
}

.subtitle {
  margin-top: 6px;
  font-weight: 300;
  font-size: 1.05rem;
  color: #cc8b8b;
  letter-spacing: 0.08em;
  user-select: none;
}

@keyframes pulseGlow {
  0%, 100% {
    text-shadow:
      0 0 6px #ff5858,
      0 0 18px #ff3a3a,
      0 0 30px #ff2828;
  }
  50% {
    text-shadow:
      0 0 15px #ff8989,
      0 0 38px #ff5c5c,
      0 0 50px #ff5050;
  }
}

.script-section {
  width: 100%;
  background-color: #330000;
  border-radius: 14px;
  padding: 18px 18px 24px 18px;
  box-shadow: 0 0 15px #b73434;
  display: flex;
  flex-direction: column;
  color: #ff6b6b;
  user-select: none;
  transition: box-shadow 0.3s ease;
}

.script-section:hover {
  box-shadow: 0 0 30px #ff5858, inset 0 0 40px #ff7272;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.45rem;
  font-weight: 700;
  padding-bottom: 3px;
  color: #ff3e3e;
  border-bottom: 1px solid #6c1818;
}

.icon {
  stroke: #ff3e3e;
  width: 26px;
  height: 26px;
  stroke-width: 2;
  flex-shrink: 0;
  user-select: none;
}

.secure-connection {
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #ff5b5b;
  font-weight: 600;
  user-select: none;
  letter-spacing: 0.02em;
}

.icon-shield {
  width: 18px;
  height: 18px;
  stroke-width: 1.7;
}

.script-textarea {
  margin-top: 14px;
  width: 100%;
  height: 3rem;
  resize: none;
  padding: 11px 13px;
  background-color: #2b0000;
  border-radius: 11px;
  border: none;
  color: #ff7f7f;
  font-family: monospace;
  font-weight: 600;
  font-size: 1rem;
  box-shadow:
    inset 0 0 15px #ff4747;
  overflow-x: auto;
  white-space: nowrap;
  cursor: text;
  user-select: all;
  transition: box-shadow 0.3s ease;
}

.script-textarea:focus {
  outline: none;
  box-shadow: 0 0 25px #ff6161;
}

.copy-button {
  margin-top: 18px;
  background: linear-gradient(90deg, #dc1414 0%, #ff4747 100%);
  border: none;
  padding: 14px 0;
  width: 100%;
  border-radius: 14px;
  font-weight: 700;
  font-size: 1.15rem;
  color: #fff;
  cursor: pointer;
  box-shadow: 0 0 23px #e32a2a;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  transition: background 0.3s ease, box-shadow 0.3s ease;
  user-select: none;
}

.copy-button svg {
  stroke-width: 1.7;
  width: 22px;
  height: 22px;
  stroke: white;
}

.copy-button:hover {
  background: linear-gradient(90deg, #ff4949 0%, #ca0e0e 100%);
  box-shadow: 0 0 38px #ff4545;
}

.info-text {
  margin-top: 14px;
  font-size: 0.88rem;
  color: #bc7d7d;
  text-align: center;
  letter-spacing: 0.05em;
  user-select: none;
  white-space: nowrap;
  overflow: hidden;
  position: relative;
  height: 20px;
}

.info-text::before {
  content: "ℹ️ Paste this script into your executor to run     ";
  position: absolute;
  white-space: nowrap;
  will-change: transform;
  animation: marquee 20s linear infinite;
  color: #a86464;
  top: 0;
  left: 100%;
  padding-left: 100%;
}

/* Footer */
.footer {
  margin-top: 36px;
  text-align: center;
  color: #bc7d7d;
  font-size: 0.9rem;
  user-select: none;
}
.social-links {
  margin-top: 12px;
  display: flex;
  gap: 18px;
  justify-content: center;
  flex-wrap: wrap;
}

.social-links a {
  text-decoration: none;
  font-size: 1rem;
  color: white;
  font-weight: 600;
  border-radius: 11px;
  padding: 10px 28px;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 0 10px #3b0202;
  transition: background-color 0.3s ease, box-shadow 0.4s ease;
  user-select: none;
  cursor: pointer;
}

.social-links a svg {
  width: 24px;
  height: 24px;
  filter: drop-shadow(0 0 4px rgba(0,0,0,0.25));
  flex-shrink: 0;
}

/* Discord Button */
.discord-btn {
  background-color: #5865f2;
  box-shadow: 0 0 20px #5865f2;
}

.discord-btn:hover {
  background-color: #4752c4;
  box-shadow: 0 0 30px #4752c4;
}

/* YouTube Button */
.youtube-btn {
  background-color: #bf2b2b;
  box-shadow: 0 0 18px #bf2b2b;
}

.youtube-btn:hover {
  background-color: #9e2323;
  box-shadow: 0 0 30px #9e2323;
}

/* Marquee animation for info text */
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

@media (max-width: 400px) {
  .container {
    max-width: 100%;
  }
}
