import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: './icon.svg',
    brandTitle: 'Saqlain Shah Components',
    brandUrl: 'https://Saqlainw.com',
  },
});
