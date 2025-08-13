const fetch = require('node-fetch');

exports.handler = async (event) => {
  const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
  const CHAT_ID = process.env.CHAT_ID;

  if (!TELEGRAM_TOKEN || !CHAT_ID) {
    return { statusCode: 500, body: "Missing TELEGRAM_TOKEN or CHAT_ID" };
  }

  const params = event.queryStringParameters;

  const message = `📢 *Koyo Ngelead*
Offer: ${params.offer_name || '-'}  
Payout: $${params.payout_usd || '0'}  
SubID1: ${params.subid1 || '-'}  
SubID2: ${params.subid2 || '-'}  
Country: ${params.country || '-'}  
Status: ${params.status || '-'}  
Time: ${params.datetime || '-'}`;

  const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

  await fetch(telegramUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message,
      parse_mode: "Markdown"
    })
  });

  return { statusCode: 200, body: "Postback sent to Telegram" };
};
