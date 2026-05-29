import { useEffect, useRef, useState } from "react";

import {
  chatSuggestions,
  getRandomItem,
  getSpiritReply,
  idleSpiritMessages,
  initialSpiritChat
} from "../utils/spiritBot";

function SpiritBot() {
  const [idle, setIdle] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [typing, setTyping] = useState(false);
  const [notification, setNotification] = useState("");
  const chatEndRef = useRef(null);
  const [chat, setChat] = useState(initialSpiritChat);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotification("Need the fastest tour? Ask me about projects or skills.");
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat, typing]);

  useEffect(() => {
    let timer;

    const resetTimer = () => {
      setIdle(false);
      clearTimeout(timer);
      timer = setTimeout(() => setIdle(true), 6000);
    };

    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("scroll", resetTimer);
    window.addEventListener("click", resetTimer);
    resetTimer();

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("scroll", resetTimer);
      window.removeEventListener("click", resetTimer);
    };
  }, []);

  useEffect(() => {
    if (!idle || open) return;

    setNotification(getRandomItem(idleSpiritMessages));

    const timer = setTimeout(() => setNotification(""), 3600);
    return () => clearTimeout(timer);
  }, [idle, open]);

  const sendMessage = (customMessage = null) => {
    const finalMessage = customMessage || message;
    if (!finalMessage.trim() || typing) return;

    setChat((prev) => [...prev, { type: "user", text: finalMessage }]);
    setMessage("");
    setTyping(true);

    const botReply = getSpiritReply(finalMessage);

    setTimeout(() => {
      setTyping(false);
      setChat((prev) => [...prev, { type: "bot", text: botReply }]);
    }, 650);
  };

  return (
    <>
      {notification && !open && (
        <button className="bot-notification" onClick={() => setOpen(true)}>
          {notification}
        </button>
      )}

      <button
        className={`spirit-bot ${idle ? "idle" : "active"}`}
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close portfolio guide" : "Open portfolio guide"}
      >
        <span className="spirit-face">AI</span>
        <span className="spirit-eyes">{idle ? "..." : "Ask"}</span>
        <span className="spirit-aura"></span>
      </button>

      {open && (
        <div className="spirit-chat" role="dialog" aria-label="Portfolio guide">
          <div className="spirit-chat-header">
            <div>
              <span>Portfolio Guide</span>
              <small>Ask anything about Balu</small>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chat">Close</button>
          </div>

          <div className="spirit-chat-body">
            {chat.map((msg, index) => (
              <div key={`${msg.type}-${index}`} className={`msg ${msg.type}`}>
                {msg.text}
              </div>
            ))}

            {typing && (
              <div className="msg bot typing" aria-label="Assistant typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}

            <div className="suggestions">
              {chatSuggestions.map((item) => (
                <button key={item} onClick={() => sendMessage(item)}>
                  {item}
                </button>
              ))}
            </div>

            <div ref={chatEndRef}></div>
          </div>

          <div className="spirit-chat-input">
            <input
              type="text"
              placeholder="Ask about projects, skills, or contact..."
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") sendMessage();
              }}
            />
            <button onClick={() => sendMessage()} aria-label="Send message">
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default SpiritBot;
