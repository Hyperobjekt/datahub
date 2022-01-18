const data = {
  label: "Data",
  name: "data",
  files: [
    {
      label: "Authors",
      name: "authors",
      file: "content/data/authors.json",
      fields: [
        { label: "ID", name: "id", widget: "hidden", default: "authors" },
        {
          label: "Authors",
          name: "authors",
          widget: "list",
          fields: [
            { label: "ID", name: "id", widget: "string" },
            {
              label: "Name",
              name: "name",
              widget: "string",
              hint: "enter your full name",
            },
            { label: "Email", name: "email", widget: "string" },
          ],
        },
      ],
    },
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
  ],
};

export default data;
