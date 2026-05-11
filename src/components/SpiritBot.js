import { useEffect, useRef, useState } from "react";

import spiritResponses from "../data/spiritResponses";

function SpiritBot() {

  const [idle, setIdle] = useState(false);

  const [open, setOpen] = useState(false);

  const [message, setMessage] = useState("");

  const [typing, setTyping] = useState(false);

  const [notification, setNotification] = useState("");

  const chatEndRef = useRef(null);

  const suggestions = [

    "Projects",

    "Skills",

    "AWS",

    "Contact",

    "About You"
  ];

  const [chat, setChat] = useState([
    {
      type:"bot",
      text:"🌸 Welcome wanderer..."
    },
    {
      type:"bot",
      text:"✨ Ask me about Balu's projects, skills or certifications."
    }
  ]);

  useEffect(() => {

  const timer = setTimeout(() => {

    setNotification(
      "🌸 Welcome to Balu's Portfolio"
    );

  }, 2500);

  return () => clearTimeout(timer);

}, []);

  /* AUTO SCROLL */

  useEffect(() => {

    chatEndRef.current?.scrollIntoView({
      behavior:"smooth"
    });

  }, [chat, typing]);

  /* USER ACTIVITY */

  useEffect(() => {

    let timer;

    const resetTimer = () => {

      setIdle(false);

      clearTimeout(timer);

      timer = setTimeout(() => {

        setIdle(true);

      }, 4000);

    };

    window.addEventListener("mousemove", resetTimer);

    window.addEventListener("scroll", resetTimer);

    window.addEventListener("click", resetTimer);

    resetTimer();

    return () => {

      window.removeEventListener("mousemove", resetTimer);

      window.removeEventListener("scroll", resetTimer);

      window.removeEventListener("click", resetTimer);

    };

  }, []);

  /* IDLE NOTIFICATIONS */

  useEffect(() => {

    if(idle){

      const idleMessages = [

        "🌸 Still exploring?",

        "🚀 Ask about AI projects.",

        "☁️ Curious about AWS certification?",

        "💡 Explore Balu's technical skills.",

        "🌸 The spirit awaits your questions."
      ];

      const random =
      idleMessages[
        Math.floor(
          Math.random() * idleMessages.length
        )
      ];

      setNotification(random);

      setTimeout(() => {

        setNotification("");

      }, 3500);

    }

  }, [idle]);

  /* BOT RESPONSE */

  const getBotReply = (userMessage) => {

    let botReply =
    "🌸 The spirit is thinking...";

    spiritResponses.forEach((item) => {

      item.keywords.forEach((word) => {

        if(
          userMessage
          .toLowerCase()
          .includes(word)
        ){

          botReply = item.answer;

        }

      });

    });

    return botReply;
  };

  /* SEND MESSAGE */

  const sendMessage = (customMessage = null) => {

    const finalMessage =
    customMessage || message;

    if(!finalMessage.trim()) return;

    const userMsg = {

      type:"user",

      text:finalMessage
    };

    setChat((prev) => [

      ...prev,

      userMsg

    ]);

    setMessage("");

    setTyping(true);

    const botReply =
    getBotReply(finalMessage);

    setTimeout(() => {

      setTyping(false);

      setChat((prev) => [

        ...prev,

        {
          type:"bot",
          text:botReply
        }

      ]);

    }, 1400);
  };

  return (

    <>

      {/* NOTIFICATION */}

      {notification && !open && (

        <div className="bot-notification">

          {notification}

        </div>

      )}

      {/* BOT */}

      <div
        className={`spirit-bot ${idle ? "idle" : "active"}`}
        onClick={() => setOpen(!open)}
      >

        <div className="spirit-face">
          ✦
        </div>

        <div className="spirit-eyes">

          {idle ? "・・・" : "◕ ◕"}

        </div>

        <div className="spirit-aura"></div>

      </div>

      {/* CHAT */}

      {open && (

        <div className="spirit-chat">

          <div className="spirit-chat-header">

            🌸 Spirit Companion

          </div>

          <div className="spirit-chat-body">

            {chat.map((msg, index) => (

              <div
                key={index}
                className={`msg ${msg.type}`}
              >

                {msg.text}

              </div>

            ))}

            {/* TYPING */}

            {typing && (

              <div className="msg bot typing">

                <span></span>

                <span></span>

                <span></span>

              </div>

            )}

            {/* SUGGESTIONS */}

            <div className="suggestions">

              {suggestions.map((item, index) => (

                <button
                  key={index}
                  onClick={() => sendMessage(item)}
                >

                  {item}

                </button>

              ))}

            </div>

            <div ref={chatEndRef}></div>

          </div>

          {/* INPUT */}

          <div className="spirit-chat-input">

            <input
              type="text"
              placeholder="Speak with the spirit..."
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }

              onKeyDown={(e) => {

                if(e.key === "Enter"){

                  sendMessage();

                }

              }}
            />

            <button
              onClick={() => sendMessage()}
            >

              ✦

            </button>

          </div>

        </div>

      )}

    </>

  );
}

export default SpiritBot;