import { createTheme } from '@material-ui/core/styles';
import { deepmerge } from '@material-ui/utils';
export const FONT = 'source-code-pro, sans-serif';
export const ALT_FONT = 'zeitung, sans-serif';

let base = {
  palette: {
    primary: {
      main: '#6a00ff',
    },
    secondary: {
      main: '#6699cc',
    },
    background: {
      dark: '#354049',
    },
  },
  typography: {
    fontFamily: ['source-code-pro, sans-serif', 'zeitung, sans-serif'],
    h1: {
      fontWeight: 600,
      fontSize: 32,
      lineHeight: 38 / 32,
    },
    h2: {
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 26,
      lineHeight: 30 / 26,
      letterSpacing: '0.01em',
    },
    h3: {
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 22,
      lineHeight: 30 / 22,
      letterSpacing: '0.01em',
    },
    h4: {},
    h5: {},
    h6: {},
    subtitle1: {},
    subtitle2: {},
    body1: {
      fontFamily: ALT_FONT,
      fontWeight: 150,
      fontSize: 18,
      lineHeight: 24 / 16,
      letterSpacing: '-0.02em',
    },
    body2: {
      fontFamily: ALT_FONT,
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 16,
      lineHeight: 23 / 16,
      letterSpacing: '-0.01em',
    },
    overline: {
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 15,
      lineHeight: 19 / 15,
      letterSpacing: '0.03em',
    },
    caption: {
      fontFamily: ALT_FONT,
      fontWeight: 150,
      fontSize: 13,
      lineHeight: 18 / 13,
      letterSpacing: '-0.02em',
    },
  },
};

const Theme = () => {
  const theme = createTheme(base);

  const overrides = {
    overrides: {
      MuiCssBaseline: {
        '@global': {
          // make wrappers fill viewport
          'html, body, #___gatsby,#gatsby-focus-wrapper': {
            height: '100%',
          },
          html: {
            scrollBehavior: 'smooth',
          },
          code: {
            background: 'rgb(45, 42, 85)',
            color: 'rgb(158, 254, 255)',
            padding: '0 4px',
            borderRadius: '4px',
            display: 'inline-block',
          },
        },
      },
      MuiTypography: {
        root: {
          '&.sourceCode': {
            fontFamily: FONT
          },
          '&.zeitung': {
            fontFamily: ALT_FONT
          },
          '&.bold': {
            fontWeight: 'bold',
          },
          '&.uppercase': {
            textTransform: 'uppercase',
          },
          '&.mono': {
            fontFamily: FONT,
          },
        },
        body1: {
          margin: '1rem 0',
        },
        subtitle1: {
          fontFamily: ALT_FONT,
          fontSize: '14px',

          margin: '10px 0 10px 0',
        },
        subtitle2: {
          fontFamily: ALT_FONT,
          fontSize: '12px',

          margin: '10px 0 10px 0',
          display: 'inline-block'
        },
      },
      MuiDivider: {
        root: { margin: '1rem 0' },
      },
      HypHeader: {
        root: {
          "& .HypNavigation-listItem": {
            background: "none"
          }
        },
        toolbar: {
          backgroundColor: 'white',
        },
      },
      MuiTableCell: {
        root: {
          borderBottom: 'none',
          padding: '10px',
        },
      },
      MuiInputBase: {
        root: {
          background: '#E8F5FF',
          height: '40px',
          [theme.breakpoints.down('md')]: {
            width: '60px',
            marginRight: '10px',
          },
          [theme.breakpoints.up('md')]: {
            width: '200px',
          }
        }
      },
      MuiOutlinedInput: {
        root: {
          '& $notchedOutline': {
            borderColor: 'white',
          },
          '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
            borderColor: 'white',
            borderWidth: 2,
          },
          '&$focused $notchedOutline': {
            borderColor: 'white',
          },
        },
        notchedOutline: {},
      },
      MuiSelect: {
        select: {
          '&:focus': {
            backgroundColor: 'transparent',
          },
        },
      },
      MuiList: {
        padding: {
          paddingTop: 0,
        },
      },
      MuiListItem: {
        button: {
          fontFamily: 'zeitung',
        },
      },
      MuiTablePagination: {
        caption: {
          fontFamily: 'zeitung',
        },
      },
      MuiLink: {
        root: {
          fontFamily: 'source-code-pro',
          fontSize: '.5em',

          color: 'inherit',
          textDecoration: 'none',
        },
      },
      HorizontalNavigation: {
        listItem: {
          background: 'white',
        },
        link: {
          color: 'black',
        },
        linkActive: {
          color: '#064493',
          fontWeight: 'none',
        },
      },
      // make the page fill the viewport
      HypPage: {
        root: {
          height: '100%',
        },
      },
      HypBranding: {
        root: {
          color: 'black',
          fontSize: 24,
          textDecoration: 'none',
        },
      },
      // hide the social links in the header
      HypSocialLinks: {
        root: {
          display: 'none',
        },
      },
      // hide the page level breadcrumb
      HypBreadcrumb: {
        root: {
          display: 'none',
        },
      },
      HypNavigation: {
        link: {
          padding: 0,
        },
        
      },
      HypFooter: {
        root: {
          textAlign: 'center',
          alignContent: 'center',
        },
      },
    },
  };

  return deepmerge(theme, overrides);
};

export default Theme();
