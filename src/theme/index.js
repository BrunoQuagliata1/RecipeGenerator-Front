export default {
  // example colors with dark mode
  breakpoints: ['376px', '576px', '768px', '992px', '1200px', '1650px'],
  colors: {
    text: '#34495E', // Charcoal Grey for body color and primary color, enhancing readability
    text_secondary: '#7D6608', // A softer tone close to Saffron Yellow for secondary body color
    heading: '#E74C3C', // Rich Tomato Red for primary heading color, evoking appetite
    heading_secondary: '#34495E', // Charcoal Grey for secondary heading color
    background: '#FAF3E0', // Soft Beige as body background color, providing a warm, inviting atmosphere
    background_secondary: '#F5F5F5', // Warm Grey for secondary background color, modern and sophisticated
    border_color: '#DDD', // Light Grey for border color, ensuring elements are subtly defined
    primary: '#27AE60', // Earthy Green for primary button and link color, reflecting freshness
    secondary: '#F39C12', // Warm Orange for secondary color - can be used for hover states, drawing attention
    black: '#0F2137', // Black color, kept for contrast and depth in text or critical elements
    gray: '#ECF0F1', // A lighter shade of grey for a softer look
    muted: '#7B8188', // Muted color, retained for less emphasized text
    accent: '#8E44AD', // Deep Eggplant as a contrast color for emphasizing UI, sophisticated and premium
  },  
  fonts: {
    body: 'DM Sans',
    // body:
    //   'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'DM Sans',
    // heading: 'Bree Serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [13, 14, 16, 18, 20, 21, 30, 36, 48, 64],
  fontWeights: {
    body: 'normal',
    heading: 500,
    bold: 700,
  },
  lineHeights: {
    body: 2,
    heading: '50px',
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
    heading: '-0.5px',
  },
  // space: [0, 4, 8, 16, 32, 64],
  sizes: {
    container: ['1250px'],
  },
  // variants can use custom, user-defined names
  layout: {
    container: {
      px: ['15px', null, null, '30px', '40px'],
    },
    header: {
      color: '#02073E',
      fontWeight: 'normal',
      py: 3,
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      // justifyContent: 'space-between',
    },
    main: {},
    footer: {
      backgroundColor: 'background_secondary',
    },
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4,
      letterSpacing: 'heading',
      color: 'heading',
    },
    heroPrimary: {
      fontSize: [5, 55],
      fontWeight: 'normal',
      lineHeight: ['40px', '80px'],
      letterSpacing: '-1px',
      textAlign: ['center', 'left'],
    },
    title: {
      variant: 'text.heading',
      fontWeight: 'bold',
      fontSize: 18,
      lineHeight: '30px',
      color: '#0F2137',
    },
    heroSecondary: {
      color: 'text_secondary',
      lineHeight: ['30px', '42px'],
      letterSpacing: '0.1em',
      textAlign: ['center', 'left'],
    },
    lead: {
      fontSize: 40,
      fontFamily: 'DM Sans',
      fontWeight: '500',
      lineHeight: '60px',
      letterSpacing: '-1.5px',
      color: '#0F2137',
    },
    muted: {
      lineHeight: '26px',
      color: 'muted',
    },
    secondary: {
      fontWeight: 500,
      color: '#00A99D',
      lineHeight: '40px',
    },
  },
  links: {
    bold: {
      fontWeight: 'bold',
    },
    nav: {
      display: ['none', null, 'inline-block'],
      p: 2,
    },
    footer: {
      display: 'block',
      px: 0,
      color: 'inherit',
      cursor: 'pointer',
      textDecoration: 'none',
    },
  },
  images: {
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 99999,
    },
  },
  // variants for buttons
  buttons: {
    menu: {
      display: [null, null, 'none'],
    }, // default variant for MenuButton
    // you can reference other values defined in the theme
    primary: {
      fontWeight: 'bold',
      color: 'white',
      bg: 'primary',
      cursor: 'pointer',
      transition: '500ms',
      fontSize: 2,
      outline: 'none',
      '&:hover': {
        bg: 'secondary',
      },
    },
  },

  styles: {
    // To add base, top-level styles to the <body> element, use theme.styles.root.
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      WebkitFontSmoothing: 'antialiased',
    },
    a: {
      cursor: 'pointer',
      textDecoration: 'none',
    },
    button: {
      cursor: 'pointer',
    },
    // Divider styles
    hr: {
      border: 0,
      borderBottom: '1px solid',
      borderColor: '#D9E0E7',
    },
    // also you can use other HTML elements style here
    ul: {
      listStyle: 'none',
    },
    srOnly: {
      border: '0 !important',
      clip: 'rect(1px, 1px, 1px, 1px) !important',
      clipPath: 'inset(50%) !important',
      height: '1px !important',
      margin: '-1px !important',
      overflow: 'hidden !important',
      padding: '0 !important',
      position: 'absolute !important',
      width: '1px !important',
      whiteSpace: 'nowrap !important',
    },
  },
};
