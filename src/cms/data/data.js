const data = {
  label: "Data",
  name: "data",
  files: [
    {
      label: "Projects",
      name: "projects",
      file: "content/data/projects.json",
      fields: [
        {
          label: "Projects",
          name: "projects",
          widget: "list",
          fields: [
            { label: "ID", name: "id", widget: "hidden", default: "projects" },
            { label: "Name", name: "name", widget: "string" },
            { label: "Date", name: "date", widget: "string", hint: "enter date as it should appear" },
            { label: "Repo", name: "repo", widget: "string", hint: "enter full URL" },
            { label: "Topics", name: "topics", widget: "list" },
            {
              label: "Data",
              name: "data",
              widget: "list",
              fields: [
                { label: "Set", name: "set", widget: "string" },
                { label: "Link", name: "link", widget: "string", hint: "enter full URL" },
              ],
            },
            { label: "Summary", name: "summary", widget: "string" },
            { label: "Authors", name: "authors", widget: "list" },
            { label: "README", name: "readme", widget: "string", hint: "enter full URL" },
            { label: "Preprint", name: "preprint", widget: "string", hint: "enter full URL" },
            { label: "Discussion", name: "discussion", widget: "string", hint: "enter full URL" }
          ],
        },
      ],
    },
    {
      label: "About",
      name: "about",
      file: "content/data/about.json",
      fields: [
        { label: "About Us", name: "aboutUs", widget: "string" },
        { label: "Location", name: "location", widget: "string" },
        { label: "Poistion Highlight One", name: "positionHighlightOne", widget: "string" },
        { label: "Poistion Highlight Two", name: "positionHighlightTwo", widget: "string" },
        { label: "Belief Highlight", name: "beliefHighlight", widget: "string" },
        { label: "Belief", name: "belief", widget: "string" },
        { label: "Lab Details One", name: "labDetailsOne", widget: "string" },
        { label: "Lab Details Two", name: "labDetailsTwo", widget: "string" },
        {
          label: "Team",
          name: "team",
          widget: "list",
          fields: [
            {
              label: "Name",
              name: "name",
              widget: "string",
              hint: "enter your full name",
            },
            { label: "Bio", name: "bio", widget: "string" },
            { label: "Thumbnail", name: "thumbnail", widget: "image", choose_url: true }
          ],
        },
      ],
    },
    {
      label: "News",
      name: "news",
      file: "content/data/news.json",
      fields: [
        {
          label: "News",
          name: "news",
          widget: "list",
          fields: [
            { label: "ID", name: "id", widget: "hidden", default: "news" },
            {
              label: "Article",
              name: "article",
              widget: "list",
              fields: [
                { label: "Title", name: "title", widget: "string" },
                { label: "URL", name: "url", widget: "string", hint: "enter full URL" },
              ],
            },
            { label: "Lede", name: "lede", widget: "string" },
            { label: "Thumbnail", name: "thumbnail", widget: "image", choose_url: true },
            {
              label: "Source",
              name: "source",
              widget: "list",
              fields: [
                { label: "Name", name: "name", widget: "string" },
                { label: "Date", name: "date", widget: "string", hint: "enter date as it should appear" },
              ],
            }
          ],
        },
      ],
    },
  ],
};

export default data;
