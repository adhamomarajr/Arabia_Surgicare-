// Vercel Serverless Function for /api/doctors
// Note: In serverless environments, in-memory/KV or body echoes persist during active sessions.

let memoryDoctorsCache: any[] | null = null;

export default function handler(req: any, res: any) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'GET') {
    return res.status(200).json({
      success: true,
      doctors: memoryDoctorsCache || []
    });
  }

  if (req.method === 'POST') {
    let payload = req.body;
    if (typeof payload === 'string') {
      try {
        payload = JSON.parse(payload);
      } catch {}
    }

    const doctors = Array.isArray(payload) ? payload : payload?.doctors;
    const password = payload?.password;

    if (
      password &&
      password !== 'host123' &&
      password !== '^host123^' &&
      password !== 'host123^' &&
      password !== '^host123' &&
      password !== 'as123' &&
      password !== '^as123^' &&
      password !== 'admin'
    ) {
      return res.status(403).json({ success: false, message: 'Unauthorized' });
    }

    if (Array.isArray(doctors)) {
      memoryDoctorsCache = doctors;
      return res.status(200).json({
        success: true,
        message: 'Updated live successfully',
        count: doctors.length,
      });
    }
    return res.status(400).json({ success: false, message: 'Invalid data' });
  }

  return res.status(405).json({ success: false, message: 'Method not allowed' });
}
