import { createTheme } from '@material-ui/core/styles';
import { deepmerge } from '@material-ui/utils';

import FlyoutBg from '../../static/graphics/flyoutMobile.svg'

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
      letterSpacing: '0.03em'
    },
    caption: {
      fontFamily: ALT_FONT,
      fontWeight: 150,
      fontSize: 13,
      lineHeight: 18 / 13,
      letterSpacing: '-0.02em'
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
            fontWeight: '600',
          },
          '&.margin': {
            margin: '10px 0 10px 0'
          },
          '&.mono': {
            fontFamily: FONT,
          },
          '&.dhTopicsDataSets': {
            fontFamily: ALT_FONT,
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "12px",

            margin: 0
          },
          '&.dhTableRow': {
            fontFamily: FONT,
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "15px",
            color: "#064493",

            [theme.breakpoints.down('sm')]: {
              fontSize: '12px',
            },
          },
          '&.dhNewsHeader': {
            fontFamily: FONT,
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "24px",
            marginTop: 0,

            [theme.breakpoints.down('sm')]: {
              fontSize: '15px',
            },
          },
          '&.dhHlText': {
            fontFamily: FONT,
            fontWeight: 600,
            fontSize: 32,
            lineHeight: 38 / 32,

            [theme.breakpoints.down('sm')]: {
              fontSize: 20,
            },
          },
          '&.dhHlBody': {
            fontFamily: ALT_FONT,
            fontSize: 16,

            [theme.breakpoints.down('sm')]: {
              fontSize: 14
            },
          },
          '&.cursor': {
            cursor: 'pointer'
          }
        },
        body1: {
          margin: '1rem 0',
        },
        body2: {
          [theme.breakpoints.down('sm')]: {
            fontFamily: ALT_FONT,
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 13,
            lineHeight: 23 / 16,
            letterSpacing: '-0.02em',
          },
        },
        subtitle1: {
          fontFamily: ALT_FONT,
          fontSize: '14px',

          margin: '10px 0 10px 0',
        },
        subtitle2: {
          fontFamily: ALT_FONT,
          fontSize: '12px',
          
          display: 'inline-block',

          [theme.breakpoints.down('sm')]: {
            fontSize: '9.5px',
          },
        },
        h6: {
          [theme.breakpoints.down('sm')]: {
            fontSize: '18px',
          },
        }
      },
      MuiDivider: {
        root: { margin: '1rem 0' },
      },
      HypHeader: {
        root: {
          fontFamily: FONT,
        },
        toolbar: {
          backgroundColor: 'white',
        }
      },
      MuiTableCell: {
        root: {
          borderBottom: 'none',
          padding: '10px',
        },
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
          [theme.breakpoints.down('md')]: {
            fontSize: '13px'
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
          fontFamily: ALT_FONT,
        },
        root: {
          color: "white"
        }
      },
      MuiTablePagination: {
        caption: {
          fontFamily: ALT_FONT,
        },
      },
      MuiLink: {
        root: {
          fontFamily: FONT,
          fontSize: '.5em',

          color: 'inherit',
          textDecoration: 'none',

          cursor: 'pointer',
        },
      },
      MuiTablePagination: {
        actions: {
          [theme.breakpoints.down('md')]: {
            marginLeft: '5px',
          },
        }
      },
      MuiButton: {
        root: {
          '&.dhTable-clearAll': {
            color: 'rgba(0, 0, 0, 0.54)',
            minWidth: '24px'
          }
        },
        label: {
          color: "#064493"
        }
      },
      MuiIconButton: {
        label: {
          color: "white"
        }
      },
      MuiDrawer: {
        root: {
          "&. HypNavigation-link": {
            color: "#fff",
          },
        },
        paper: {
          root: {
            "&. HypNavigation-link": {
              color: "#fff",
            }
          },
          width: "100%",
          background: "#1D2D39",
          backgroundPosition: "100% 75%",
          backgroundImage: `url(${FlyoutBg})`,
          backgroundSize: "cover",
          "&. HypNavigation-link": {
            color: "#fff",
          },
          // "&.HypNavigation": {
          //   root: {
          //     flex: "none",
          //     height: "80%",
          //     alignItems: "center",
          //   },
          //   link: {
          //     [theme.breakpoints.down('sm')]: {
          //       color: "#fff",
          //       fontFamily: FONT,
          //       fontSize: "23px",
          //       fontWeight: "700",


          //       justifyContent: "center"
          //     },
          //   },
          // }
        }
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
        logo: {
          width: '10%'
        }
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
      HorizontalNavigation: {
        listItem: {
          background: 'none'
        },
        link: {
          color: 'black'
        },
        linkActive: {
          color: '#064493'
        }
      },
      HypNavigation: {
        root: {
          flex: "none",
          height: "80%",
          alignItems: "center",
        },
        link: {
          [theme.breakpoints.down('sm')]: {
            color: "#fff",
            fontFamily: FONT,
            fontSize: "23px",
            fontWeight: "700",

            justifyContent: "center"
          },
        },
      },
    },
  };

  return deepmerge(theme, overrides);
};

export default Theme();
