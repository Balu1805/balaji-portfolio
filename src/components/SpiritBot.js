import { useEffect, useState } from "react";

import spiritResponses from "../data/spiritResponses";

function SpiritBot() {

  const [idle, setIdle] = useState(false);

  const [open, setOpen] = useState(false);

  const [message, setMessage] = useState("");

  const [chat, setChat] = useState([
    {
      type: "bot",
      text: "🌸 Welcome wanderer..."
    }
  ]);

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

  /* AUTO IDLE MESSAGES */

  useEffect(() => {

    if(idle){

const idleMessages = [

  "🌸 Still exploring?",

  "🌸 Discipline creates elegance.",

  "🌸 Curiosity moves the petals.",

  "🌸 Have a beautiful day ahead.",

  "🌸 You look focused today.",

  "🌸 Quiet minds build powerful systems.",

  "🌸 Even the petals admire consistency.",

  "🌸 Keep moving forward gently.",

  "🌸 The spirit believes in your journey.",

  "🌸 A calm mind creates great ideas.",

  "🌸 Chess sharpens strategy. Life tests it.",

  "🌸 Small steps become beautiful destinations.",

  "🌸 Don't forget to rest your mind too.",

  "🌸 Your presence changes the atmosphere.",

  "🌸 Some journeys deserve patience.",

  "🌸 The petals dance for determined souls.",

  "🌸 Keep building. Keep evolving.",

  "🌸 Soft hearts can still build strong futures.",

  "🌸 There is beauty in discipline.",

  "🌸 Have a peaceful evening wanderer.",

  "🌸 The spirit enjoys your company.",

  "🌸 Every engineer carries silent dreams.",

  "🌸 Today feels calm... doesn't it?",

  "🌸 Balance creates strength.",

  "🌸 Stay consistent. Beautiful things take time."

];
      const random =
      idleMessages[
        Math.floor(
          Math.random() * idleMessages.length
        )
      ];

      setChat((prev) => [
        ...prev,
        {
          type:"bot",
          text:random
        }
      ]);

    }

  }, [idle]);

  /* SEND MESSAGE */

  const sendMessage = () => {

    if(!message.trim()) return;

    const userMsg = {
      type:"user",
      text:message
    };

    let botReply =
    "🌸 The spirit is thinking...";

    spiritResponses.forEach((item) => {

      item.keywords.forEach((word) => {

        if(
          message.toLowerCase().includes(word)
        ){
          botReply = item.answer;
        }

      });

    });

    setChat((prev) => [
      ...prev,
      userMsg,
      {
        type:"bot",
        text:botReply
      }
    ]);

    setMessage("");
  };

  return (

    <>

      {/* SPIRIT */}

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

      {/* CHAT WINDOW */}

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

          </div>

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
            <button onClick={sendMessage}>
              ✦
            </button>

          </div>

        </div>

      )}

    </>

  );
}

export default SpiritBot;