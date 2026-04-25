const chatToggle = document.getElementById("chat-toggle");
const chatWindow = document.getElementById("chat-window");
const closeChat = document.getElementById("close-chat");
const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatBody = document.getElementById("chat-body");

chatToggle.addEventListener("click", () => {
  chatWindow.classList.remove("hidden");
});

closeChat.addEventListener("click", () => {
  chatWindow.classList.add("hidden");
});

sendBtn.addEventListener("click", sendMessage);

userInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});

function sendMessage() {
  const text = userInput.value.trim();

  if (text === "") return;

  addMessage(text, "user");
  const reply = getBotReply(text);

  setTimeout(() => {
    addMessage(reply, "bot");
  }, 400);

  userInput.value = "";
}

function addMessage(text, sender) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", sender);
  messageDiv.textContent = text;
  chatBody.appendChild(messageDiv);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function getBotReply(input) {
  const message = input.toLowerCase();

  if (message.includes("hello") || message.includes("hi")) {
    return "Hi! Welcome to Lumière Beauty. Ask me about lipstick, foundation, palettes, shipping, returns, or contact details.";
  }

  if (message.includes("lipstick")) {
    return "Our Velvet Matte Lipstick is one of our best sellers and costs $22.";
  }

  if (message.includes("foundation")) {
    return "Our Flawless Finish Foundation gives lightweight, buildable coverage for $34.";
  }

  if (message.includes("palette") || message.includes("eyeshadow")) {
    return "The Glow Eyeshadow Palette includes bold and neutral shades for $45.";
  }

  if (message.includes("mascara")) {
    return "Our Volume Mascara lifts and defines lashes instantly for $24.";
  }

  if (message.includes("product") || message.includes("shop") || message.includes("buy")) {
    return "You can explore our best sellers in the product section on this page.";
  }

  if (message.includes("shipping") || message.includes("delivery")) {
    return "We offer fictional standard shipping within 3 to 5 business days.";
  }

  if (message.includes("return") || message.includes("refund")) {
    return "Fictional returns are accepted within 14 days for unused products in original packaging.";
  }

  if (
    message.includes("contact") ||
    message.includes("phone") ||
    message.includes("email") ||
    message.includes("support")
  ) {
    return "You can contact Lumière Beauty at hello@lumierebeauty.com or 0400 123 456.";
  }

  return "Sorry, I can help with products, shipping, returns, and contact details. Try asking about lipstick, foundation, or delivery.";
}