const path = require('path');
const style_config = require('./styleguide.config');
const env = require('dotenv').config({
  path: path.join(__dirname, './.env')
});


/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
    // Local Dir tailwind watcher
    './core/resources/**/*.{js,html}',
    './**/templates/**/*.html',
    './public/**/*{html}',
    './src/**/*.{js,html}',

    // External Dir tailwind watcher (ciheul-package)
    `${env.parsed.PACKAGE_URL}/**/*.{js,html}`
  ],
  theme: {
    screens: {
      'xs': '525px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '0.75rem',
        sm: '1rem',
        lg: '1.25rem',
        xl: '1.5rem',
        '2xl': '2rem',
      },
      screens: {
        md: '600px',
        lg: '728px',
        xl: '984px',
        '2xl': '1240px',
      },
    },
    borderRadius: {
      DEFAULT: style_config.rounded.base,
      ...style_config.rounded
    },
    extend: {
      margin: style_config.spacer,
      padding: style_config.spacer,
      borderColor: style_config.colors.borders,
      colors: {
        "brPrimary": {
          DEFAULT: style_config.colors.brand.primary["400"],
          ...style_config.colors.brand.primary
        },
        "brSecondary": {
          DEFAULT: style_config.colors.brand.secondary["400"],
          ...style_config.colors.brand.secondary
        },
        "brTertiary": {
          DEFAULT: style_config.colors.brand.tertiary["400"],
          ...style_config.colors.brand.tertiary
        },
        "bsFill": style_config.colors.base.fill,
        "bsText": style_config.colors.base.text,
        "ctFill": style_config.colors.content.fill,
        "ctText": style_config.colors.content.text,
      },
    },
  },
  plugins: [],
}

