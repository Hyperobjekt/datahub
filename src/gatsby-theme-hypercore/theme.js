import { createTheme } from "@material-ui/core/styles";
import { deepmerge } from "@material-ui/utils";

let base = {
  palette: {
    primary: {
      main: "#6a00ff",
    },
    secondary: {
      main: "#6699cc",
    },
    background: {
      dark: "#354049",
    },
  },
  typography: {
    fontFamily: ["source-code-pro, sans-serif", "zeitung, sans-serif"],
  },
};

export const ALT_FONT = "zeitung, sans-serif";

const Theme = () => {
  const theme = createTheme(base);

  const overrides = {
    overrides: {
      MuiCssBaseline: {
        "@global": {
          // make wrappers fill viewport
          "html, body, #___gatsby,#gatsby-focus-wrapper": {
            height: "100%",
          },
          html: {
            scrollBehavior: "smooth",
          },
          code: {
            background: "rgb(45, 42, 85)",
            color: "rgb(158, 254, 255)",
            padding: "0 4px",
            borderRadius: "4px",
            display: "inline-block",
          },
        },
      },
      MuiTypography: {
        body1: {
          margin: "1rem 0",
        },
        subtitle1: {
          fontSize: "14px",

          margin: "10px 0 10px 0",
        },
        subtitle2: {
          fontSize: "12px",

          margin: "10px 0 10px 0",
        },
      },
      MuiDivider: {
        root: { margin: "1rem 0" },
      },
      HypHeader: {
        toolbar: {
          backgroundColor: "white",
        },
      },
      MuiTableCell: {
        root: {
          borderBottom: "none",
          padding: '10px'
        },
      },
      MuiInputBase: {
        root: {
          fontFamily: ALT_FONT,
          fontWeight: "500",
          fontSize: "1.1em",

          background: "#E8F5FF",

          height: "40px",
          [theme.breakpoints.down("md")]: {
            fontFamily: ALT_FONT,
            fontWeight: "500",
            fontSize: "1em",

            width: "120px",
          },
          [theme.breakpoints.up("md")]: {
            width: "200px",
          },
          [theme.breakpoints.up("lg")]: {
            width: "200px",
          },
        },
      },
      MuiOutlinedInput: {
        root: {
          "& $notchedOutline": {
            borderColor: "white",
          },
          "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
            borderColor: "white",
            borderWidth: 2,
          },
          "&$focused $notchedOutline": {
            borderColor: "white",
          },
        },
        notchedOutline: {},
      },
      MuiSelect: {
        select: {
          "&:focus": {
            backgroundColor: "transparent",
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
          fontFamily: 'zeitung'
        }
      },
      MuiTablePagination: {
        caption: {
          fontFamily: 'zeitung'
        }
      },
      MuiLink: {
        root: {
          fontFamily: 'source-code-pro',
          fontSize: ".5em",
      
          color: 'inherit',
          textDecoration: 'none'
        }
      },
      HorizontalNavigation: {
        listItem: {
          background: "white",
        },
        link: {
          color: "black",
        },
        linkActive: {
          color: "#064493",
          fontWeight: "none",
        },
      },
      // make the page fill the viewport
      HypPage: {
        root: {
          height: "100%",
        },
      },
      HypBranding: {
        root: {
          color: "black",
          fontSize: 24,
          textDecoration: "none",
        },
      },
      // hide the social links in the header
      HypSocialLinks: {
        root: {
          display: "none",
        },
      },
      // hide the page level breadcrumb
      HypBreadcrumb: {
        root: {
          display: "none",
        },
      },
      HypNavigation: {
        link: {
          padding: 0,
        },
      },
      HypFooter: {
        root: {
          textAlign: "center",
          alignContent: "center",
        },
      },
    },
  };

  return deepmerge(theme, overrides);
};

export default Theme();
