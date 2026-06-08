async function sendMessage() {
  const input = document.getElementById("input");
  const chatBox = document.getElementById("chat-box");

  const userText = input.value;
  chatBox.innerHTML += `<p>🧑: ${userText}</p>`;

  const res = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message: userText })
  });

  const data = await res.json();
  chatBox.innerHTML += `<p>🤖: ${data.reply}</p>`;

  input.value = "";
    }
