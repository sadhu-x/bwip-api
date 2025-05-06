import bwipjs from 'bwip-js';

export default async function handler(req, res) {
  try {
    const {
      bcid = 'code128',
      text = '123456789',
      scale = 2,
      includetext = 'false'
    } = req.query;

    const png = await bwipjs.toBuffer({
      bcid,
      text,
      scale: parseInt(scale),
      includetext: includetext === 'true'
    });

    res.setHeader('Content-Type', 'image/png');
    res.send(png);
  } catch (err) {
    res.status(400).send(`Error: ${err.message}`);
  }
}
