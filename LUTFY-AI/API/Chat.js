export default async function handler(req, res) {
  const { message } = req.body;

  let reply = "Saya adalah LUTFY AI 🚀";

  if (message.toLowerCase().includes("planet")) {
    reply = "Planet adalah benda langit yang mengorbit bintang 🌍";
  } 
  else if (message.toLowerCase().includes("black hole")) {
    reply = "Black hole adalah objek dengan gravitasi sangat kuat 🕳️";
  }
  else if (message.toLowerCase().includes("galaksi")) {
    reply = "Galaksi adalah kumpulan miliaran bintang 🌌";
  }

  res.status(200).json({ reply });
}
