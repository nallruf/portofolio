/** @type {import('tailwindcss').Config} */

const colors = require("./tailwindcss/colors");
const spacing = require("./tailwindcss/spacing");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
      colors: {
        text: {
          primary: colors.gray[900],
          primary_on_brand: colors.base.white,
          secondary: colors.gray[700],
          secondary_hover: colors.gray[800],
          secondary_on_brand: colors.brand[200],
          tertiary: colors.gray[600],
          tertiary_hover: colors.gray[700],
          tertiary_on_brand: colors.brand[200],
          quatenary: colors.gray[500],
          quantenary_on_brand: colors.brand[300],
          white: colors.base.white,
          disabled: colors.gray[500],
          placeholder: colors.gray[500],
          placeholder_subtle: colors.gray[300],
          brand: {
            primary: colors.brand[900],
            secondary: colors.brand[700],
            tertiary: colors.brand[600],
            tertiary_alt: colors.brand[600],
          },
          error: {
            primary: colors.error[600],
          },
          warning: {
            primary: colors.warning[600],
          },
          success: {
            primary: colors.success[600],
          },
        },
      

      border: {
        primary: colors.gray[300],
        secondary: colors.gray[200],
        tertiary: colors.gray[100],
        disabled: colors.gray[300],
        disabled_subtle: colors.gray[200],
        brand: colors.brand[300],
        brand_solid: colors.brand[600],
        brand_solid_alt: colors.brand[600],
        error: colors.error[300],
        error_solid: colors.error[600],
      },

      bg: {
        primary: colors.base.white,
        primary_alt: colors.base.white,
        primary_hover: colors.gray[50],
        primary_solid: colors.gray[950],
        secondary: colors.gray[50],
        secondary_alt: colors.gray[50],
        secondary_hover: colors.gray[100],
        secondary_subtle: colors.gray[25],
        secondary_solid: colors.gray[600],
        tertiary: colors.gray[100],
        quanternary: colors.gray[200],
        active: colors.gray[50],
        disabled: colors.gray[100],
        disabled_subtle: colors.gray[50],
        overlay: colors.gray[950],
        brand: {
          primary: colors.brand[50],
          primary_alt: colors.brand[50],
          secondary: colors.brand[100],
          solid: colors.brand[600],
          solid_hover: colors.brand[700],
          section: colors.brand[800],
          subtle: colors.brand[700],
        },
        error: {
          primary: colors.error[50],
          secondary: colors.error[200],
          solid: colors.error[600],
        },
        warning: {
          primary: colors.warning[50],
          secondary: colors.warning[100],
          solid: colors.warning[600],
        },
        success: {
          primary: colors.success[50],
          secondary: colors.success[100],
          solid: colors.success[600],
        },
      },

      fr: {
        primary: colors.gray[900],
        secondary: colors.gray[700],
        secondary_hover: colors.gray[800],
        tertiary: colors.gray[600],
        tertiary_hover: colors.gray[700],
        quanternary: colors.gray[500],
        quanternary_hover: colors.gray[600],
        quinary: colors.gray[400],
        quinary_hover: colors.gray[500],
        senary: colors.gray[300],
        white: colors.base.white,
        disabled: colors.gray[400],
        disabled_subtle: colors.gray[300],
        brand: {
          primary: colors.brand[600],
          primary_alt: colors.brand[600],
          secondary: colors.brand[500],
        },
        error: {
          primary: colors.error[600],
          secondary: colors.error[500],
        },
        warning: {
          primary: colors.warning[600],
          secondary: colors.warning[500],
        },
        success: {
          primary: colors.success[600],
          secondary: colors.success[500],
        },
      },
    },
    

  },
  extend: {
    spacing: {
      'none': spacing['0'],
      'xxs': spacing['0.5'],
      'xs': spacing['1'],
      'sm': spacing['1.5'],
      'md': spacing['2'],
      'lg': spacing['3'],
      'xl': spacing['4'],
      '2xl': spacing['5'],
      '3xl': spacing['6'],
      '4xl': spacing['8'],
      '5xl': spacing['10'],
      '6xl': spacing['12'],
      '7xl': spacing['16'],
      '8xl': spacing['20'],
      '9xl': spacing['24'],
      '10xl': spacing['32'],
      '11xl': spacing['40'],
    },

    borderRadius: {
      'none': spacing['0'],
      'xxs': spacing['0.5'],
      'xs': spacing['1'],
      'sm': spacing['1.5'],
      'md': spacing['2'],
      'lg': '10px', 
      'xl': spacing['3'],
      '2xl': spacing['4'],
      '3xl': spacing['5'],
      '4xl': spacing['6'],
      'full': '99999px', 
    },
  },
  plugins: [],
};
