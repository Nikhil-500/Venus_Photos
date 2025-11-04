import { useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);

  const sendMessage = async () => {
    if (!message.trim()) return;

    setStatus("sending");
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/chat/send`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message }),
        }
      );

      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-green-600 text-white rounded-full p-4 shadow-lg hover:bg-green-700 transition"
        >
          <MessageCircle size={28} />
        </button>
      ) : (
        <div className="bg-white shadow-2xl rounded-2xl w-80 h-96 flex flex-col border border-gray-200">
          <div className="bg-green-600 text-white p-3 flex justify-between items-center rounded-t-2xl">
            <span className="font-semibold">Chat with us</span>
            <button onClick={() => setIsOpen(false)}>
              <X size={22} />
            </button>
          </div>

          <div className="flex-1 p-3 overflow-y-auto text-gray-800">
            <p className="text-sm text-gray-500 mb-2">
              👋 Hi! How can we help you today?
            </p>
          </div>

          <div className="p-3 border-t flex items-center gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 border rounded-full px-3 py-2 text-sm focus:outline-none"
              placeholder="Type your message..."
            />
            <button
              onClick={sendMessage}
              className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700"
            >
              <Send size={20} />
            </button>
          </div>

          {status === "sent" && (
            <p className="text-xs text-center text-green-600 pb-2">
              ✅ Message sent!
            </p>
          )}
          {status === "error" && (
            <p className="text-xs text-center text-red-600 pb-2">
              ❌ Failed to send
            </p>
          )}
        </div>
      )}
    </div>
  );
}
