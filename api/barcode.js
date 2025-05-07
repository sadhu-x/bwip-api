import bwipjs from 'bwip-js';

export default async function handler(req, res) {
  try {
    const {
      bcid = 'qrcode',
      text = '123456789',
      scale = 2,
      // includetext = 'false'
    } = req.query;

    const png = await bwipjs.toBuffer({
      bcid,
      text,
      scale: parseInt(scale),
      // includetext is unnecessary for QR
    });

    res.setHeader('Content-Type', 'image/png');
    res.send(png);
  } catch (err) {
    res.status(400).send(`Error: ${err.message}`);
  }
}
