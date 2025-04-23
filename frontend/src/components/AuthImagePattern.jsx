import { useEffect, useState } from "react";
import { MessageSquare, Smile, Users, Send, PhoneCall, ThumbsUp } from "lucide-react";
import toast from "react-hot-toast";

const emojiOptions = ["😎", "🥳", "💬", "🔥", "😂", "🤖", "👀", "😜", "🚀", "🧠", "🍕", "💡"];

const getRandomEmoji = () => emojiOptions[Math.floor(Math.random() * emojiOptions.length)];

const AuthImagePattern = ({ title, subtitle }) => {
const icons = [MessageSquare, Smile, Users, Send, PhoneCall, ThumbsUp];

  const [emojis, setEmojis] = useState(() =>
    Array.from({ length: 9 }, () => getRandomEmoji())
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setEmojis((prev) =>
        prev.map((emoji) => (Math.random() > 0.7 ? getRandomEmoji() : emoji))
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleEmojiClick = (emoji) => {
    toast.success(`You clicked ${emoji}!`, { icon: emoji });
  };

  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        <div className="grid grid-cols-3 gap-4 mb-8">
          {emojis.map((emoji, i) => (
            <button
              key={i}
              onClick={() => handleEmojiClick(emoji)}
              className={`w-20 h-20 rounded-xl bg-primary/10 text-3xl flex items-center justify-center
              transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-6
              ${i % 3 === 1  ? "animate-bounce" : i % 3 === 3 ? "animate-pulse" : ""}`}
            >
              {emoji}
            </button>
          ))}
        </div>
        <h2 className="text-3xl font-extrabold mb-2 text-primary animate-fade-in">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
    
  );
};

export default AuthImagePattern;






