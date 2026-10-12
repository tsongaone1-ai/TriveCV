// ThriveCV Bot No4 - +27 79 680 6177
// Phone ID: 1260116430528728

const PHONE_ID = process.env.PHONE_ID || "1260116430528728";
const VERIFY_TOKEN = process.env.VERIFY_TOKEN || "thrivecv2024";
const TOKEN = process.env.WHATSAPP_TOKEN;

export default async function handler(req, res) {
  // GET = Meta verifies webhook
  if (req.method === "GET") {
    const mode = req.query["hub.mode"];
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];
    if (mode === "subscribe" && token === VERIFY_TOKEN) {
      console.log("WEBHOOK VERIFIED FOR No4!");
      return res.status(200).send(challenge);
    }
    return res.status(403).send("Forbidden");
  }

  // POST = Someone sent WhatsApp to 79 680 6177
  if (req.method === "POST") {
    try {
      const entry = req.body.entry?.[0];
      const change = entry?.changes?.[0];
      const msg = change?.value?.messages?.[0];

      if (msg) {
        const from = msg.from; // e.g. 27684110396
        const text = msg.text?.body?.toLowerCase() || "";

        let reply = "Hi! 👋 Welcome to ThriveCV.co.za 🚀\n\nReply with:\n1. CV\n2. HELP\n3. JOIN";

        if (text.includes("cv") || text.includes("1")) {
          reply = "🔥 Let's build your CV! Go to: https://thrivecv.co.za/create\nOr reply with your name and job title, I'll start it here!";
        }

        // Send reply via WhatsApp Graph API
        await fetch(`https://graph.facebook.com/v20.0/${PHONE_ID}/messages`, {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${TOKEN}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            messaging_product: "whatsapp",
            to: from,
            type: "text",
            text: { body: reply }
          })
        });
      }
      return res.status(200).send("OK");
    } catch (e) {
      console.error(e);
      return res.status(200).send("OK");
    }
  }
}
