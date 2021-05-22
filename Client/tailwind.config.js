module.exports = {
  purge: {
    enabled: true,
    content: ['**/*.jsx', '**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: {
        form: '700px',
      },
      height: {
        form: '93%',
      },
      maxHeight: {
        form: '770px',
      },
      minWidth: {
        input: '300px',
        submit: '102px',
      },
      backgroundColor: {
        form: '#18212d',
      },
    },
    scale: {
      250: '2.5',
    },
  },
  variants: {
    extend: {
      transitionProperty: ['hover', 'focus'],
    },
  },
  plugins: [],
  important: true,
};
