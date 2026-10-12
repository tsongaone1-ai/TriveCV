export default async function handler(req, res) {
  if (req.method === 'GET') {
    const myUrl = new URL(req.url, `https://${req.headers.host}`);
    const mode = myUrl.searchParams.get('hub.mode');
    const token = myUrl.searchParams.get('hub.verify_token');
    const challenge = myUrl.searchParams.get('hub.challenge');
    if (mode === 'subscribe' && token === process.env.VERIFY_TOKEN) {
      console.log('WEBHOOK_VERIFIED');
      return res.status(200).send(challenge);
    }
    return res.status(403).send('Forbidden');
  }
  if (req.method === 'POST') {
    console.log('WA message received');
    return res.status(200).send('EVENT_RECEIVED');
  }
  return res.status(405).send('No');
}
  
