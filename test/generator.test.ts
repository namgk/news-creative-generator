import { generateNewsCreative } from '../src';
import Jimp from 'jimp/es';

describe('generateNewsCreative', () => {
  it('generateNewsCreative', async () => {
    const logoUrl = "https://dl.airtable.com/.attachments/4249e6d89d247f13458d8300205e84be/0ebf72ac/curiosity.png";
    const enclosureUrl = "https://curiocity.com/wp-content/uploads/2021/06/bigpizza.jpg";
    const link = "https://curiocity.com/this-gta-spot-serves-insanely-big-pizza-slices-youve-got-to-see-to-believe/";
    const text = "This GTA spot serves insanely big pizza slices you've got to see to believe, blaeoio awejfoiajwe oawej ofijawef";

    const image = await generateNewsCreative(logoUrl, enclosureUrl, "", text);
    image.write("/Users/nhong/Downloads/bigpizza.jpeg")
  });
});
