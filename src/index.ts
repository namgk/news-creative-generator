import Jimp from 'jimp/es';
import Path from 'path';
import { Font } from '@jimp/plugin-print';

const dir = process.env.DIRNAME || `${__dirname}/../`;
const fontPath = Path.join(
  dir,
  'assets/sans_white.fnt'
);
const gradientPath = Path.join(dir, 'assets/tmp.png');

export const generateNewsCreative = async (
  logoUrl : string, 
  enclosureUrl: string, 
  link: string, 
  text: string,
) => {

  const font = await Jimp.loadFont(fontPath);
  const gradient = (await Jimp.read(gradientPath)).resize(1920, 1080);
  const logo = (await Jimp.read(logoUrl)).scaleToFit(350, 140);
  const enclosure = await Jimp.read(enclosureUrl);

  let effectiveText = text;
  if (text.length >= 77){
    effectiveText = text.substring(0, 74) + "...";
  }

  enclosure.resize(1920, 1080)
  .composite(gradient, 0, 0)
  .composite(logo, 120, 120)
  .print(font, 120, 270, effectiveText, 1400);

  return enclosure;
}