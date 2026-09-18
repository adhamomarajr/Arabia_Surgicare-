export default function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {}
  }

  const password = body?.password;
  if (
    password === 'host123' ||
    password === '^host123^' ||
    password === 'host123^' ||
    password === '^host123' ||
    password === 'as123' ||
    password === '^as123^' ||
    password === 'admin'
  ) {
    return res.status(200).json({ success: true, message: 'Authenticated successfully' });
  }

  return res.status(401).json({ success: false, message: 'Invalid password' });
}
