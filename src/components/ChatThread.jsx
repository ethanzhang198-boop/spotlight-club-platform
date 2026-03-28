export function ChatThread({ items }) {
  return (
    <div className="chat-thread">
      {items.map((item, index) => (
        <div key={`${item.role}-${index}`} className={`bubble ${item.role}`}>
          {item.text}
        </div>
      ))}
    </div>
  );
}
