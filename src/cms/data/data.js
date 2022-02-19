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
            { label: "Manuscript", name: "manuscript", widget: "string", hint: "enter full URL", required: false },
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
        {
          label: "First Block",
          name: "firstBlock",
          widget: "list",
          fields: [
            { label: "Motive", name: "motive", widget: "string" },
            { label: "Location", name: "location", widget: "string" },
          ],
        },
        {
          label: "Second Block",
          name: "secondBlock",
          widget: "list",
          fields: [
            { label: "Drive", name: "drive", widget: "string" },
            { label: "Approach", name: "approach", widget: "string" },
          ],
        },
        {
          label: "Third Block",
          name: "thirdBlock",
          widget: "list",
          fields: [
            { label: "Motive", name: "motive", widget: "string" },
            { label: "Approach", name: "approach", widget: "string" },
          ],
        },
        {
          label: "Fourth Block",
          name: "fourthBlock",
          widget: "list",
          fields: [
            { label: "Position One", name: "positionOne", widget: "string" },
            { label: "Position Two", name: "positionTwo", widget: "string" },
          ],
        },
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
