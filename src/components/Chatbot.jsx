import React, { useState, useEffect, useRef } from "react";
import Fuse from "fuse.js";

function Chatbot({ products }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Xin chào! Tôi có thể giúp gì cho bạn?" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    setMessages((msgs) => [...msgs, userMsg]);

    // Tách từ: loại bỏ stop word cơ bản
    const stopWords = [
      "mình",
      "muốn",
      "học",
      "tôi",
      "cần",
      "tìm",
      "muốn",
      "có",
      "sản",
      "phẩm",
    ];
    const keywords = input
      .toLowerCase()
      .split(/\s+/)
      .filter((word) => word.length > 2 && !stopWords.includes(word));

    // Gộp lại để Fuse search nhiều keyword
    const searchQuery = keywords.join(" ");

    const fuse = new Fuse(products, {
      keys: ["name", "shortDesc", "category", "price"],
      threshold: 0.4,
    });

    const results = fuse.search(searchQuery);
    const matched = results.map((result) => result.item);

    let botReply;
    if (matched.length > 0) {
      botReply = `Mình tìm thấy ${matched.length} sản phẩm phù hợp với yêu cầu của bạn:`;
    } else {
      botReply =
        "Xin lỗi, mình chưa tìm thấy sản phẩm phù hợp với yêu cầu này.";
    }

    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        { from: "bot", text: botReply, products: matched },
      ]);
    }, 700);

    setInput("");
  };

  return (
    <>
      {/* Nút bật/tắt chat */}
      <button
        aria-label="Open Chatbot"
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          backgroundColor: "#007bff",
          color: "white",
          borderRadius: "50%",
          width: 60,
          height: 60,
          fontSize: 30,
          border: "none",
          cursor: "pointer",
          zIndex: 9999,
        }}
        onClick={() => setOpen(!open)}
      >
        💬
      </button>

      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 90,
            right: 20,
            width: 320,
            maxHeight: 400,
            backgroundColor: "white",
            border: "1px solid #ddd",
            borderRadius: 8,
            display: "flex",
            flexDirection: "column",
            boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
            zIndex: 9999,
          }}
          role="dialog"
          aria-modal="true"
        >
          {/* Khung tin nhắn */}
          <div
            style={{
              flex: 1,
              padding: 10,
              overflowY: "auto",
              fontSize: 14,
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  marginBottom: 10,
                  textAlign: msg.from === "bot" ? "left" : "right",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    backgroundColor: msg.from === "bot" ? "#eee" : "#007bff",
                    color: msg.from === "bot" ? "black" : "white",
                    borderRadius: 12,
                    padding: "6px 12px",
                    maxWidth: "80%",
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                  }}
                >
                  {msg.text}

                  {/* Hiển thị danh sách sản phẩm nếu có */}
                  {msg.products && msg.products.length > 0 && (
                    <ul style={{ marginTop: 6, paddingLeft: 20 }}>
                      {msg.products.map((p) => (
                        <li key={p.id}>
                          <strong>{p.name}</strong> - {p.price.toLocaleString()}{" "}
                          VND
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input chat */}
          <div
            style={{
              borderTop: "1px solid #ddd",
              padding: 8,
              display: "flex",
              gap: 8,
            }}
          >
            <input
              type="text"
              aria-label="Chat input"
              placeholder="Nhập câu hỏi..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{
                flex: 1,
                padding: 6,
                borderRadius: 4,
                border: "1px solid #ccc",
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSend();
              }}
            />
            <button
              onClick={handleSend}
              style={{
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: 4,
                padding: "6px 12px",
                cursor: "pointer",
              }}
              aria-label="Send message"
            >
              Gửi
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;
