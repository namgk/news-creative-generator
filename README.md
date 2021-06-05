# This library creates a news creative based on a news title and a background image, and with a nice black-white gradient from bottom to the top. A sample is like bellow:

![bigpizza](https://i.imgur.com/l0ai7PO.jpeg)

# Usage

    import { generateNewsCreative } from 'news-player';

    const enclosureUrl = "https://curiocity.com/wp-content/uploads/2021/06/bigpizza.jpg";
    const text = "This GTA spot serves insanely big pizza slices you've got to see to believe, blaeoio awejfoiajwe oawej ofijawef";

    const image = await generateNewsCreative(enclosureUrl, text);
    image.write("bigpizza.jpeg");
