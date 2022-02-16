# Refactor / Review (Feb 16)

## Content Structure

- preference to keep page content in one file vs. split between multiple. currently `index.mdx` has top sections then bottom sections are in `HomePage.js`. better to have all in single file (e.g. all in `HomePage.js`)

## useEffect Dependencies

- [ResourcesTable.js](../src/components/home/ResourcesTable.js): updateProjects function is used within a hook, which uses `projects` variable.

## Hardcoding Style Values

- [NewsStyles.js](../src/news/styles/NewsStyles.js): use values from `theme.js` instead of hardcoding font family / color values.
- use `theme.spacing` for consistent margin / padding increments vs. pixel values.

## Semantic Markup

you can use [axe devtools extension](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd) to test

- heading order
  - h6 on home for "resources" heading
  - h5 on news for "news" heading
- table headers should match content
  - date column should only include date, actions split in different column.
- use `a` tag for links only. use heading tags, `p` tags, or `span` for text values, depending on context.

## Lean Components

- For readability, split large components into smaller components. Especially when defining sub-components within the body of a parent component. (e.g. `tableHeader` in [ResourcesTable.js](../src/components/home/ResourcesTable.js))
- component body should contain the minimum amount of logic. ideally the component will have no logic other than the render function with the exception of:
  - state selectors
  - simple hook calls
  - handler functions
- the component body should _not_ contain:
  - sub component creation (break into separate component)
  - utility function definition (define outside of the scope of the component body)
