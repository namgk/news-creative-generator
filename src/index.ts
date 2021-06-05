import Jimp from 'jimp/es';
import Path from 'path';
import { Font } from '@jimp/plugin-print';

const dir = process.env.DIRNAME || `${__dirname}/../`;
const fontPath = Path.join(
  dir,
  'assets/sans_white.fnt'
);
const gradientPath = Path.join(dir, 'assets/tmp.png');
const curiocityPath = Path.join(dir, 'assets/curiocity.png');

const width = 1920;
const height = 1080;

export const generateNewsCreative = async (
  enclosureUrl: string, 
  text: string,
) => {

  const font = await Jimp.loadFont(fontPath);
  const gradient = (await Jimp.read(gradientPath)).resize(width, height);
  const logo = (await Jimp.read(curiocityPath)).resize(345, 73);
  const enclosure = await Jimp.read(enclosureUrl);

  let effectiveText = text;
  if (text.length >= 77){
    effectiveText = text.substring(0, 74) + "...";
  }

  enclosure.resize(width, height)
  .composite(gradient, 0, 0)
  .composite(logo, 120, 120)
  .print(font, 120, 270, effectiveText, 1400);

  return enclosure;
}