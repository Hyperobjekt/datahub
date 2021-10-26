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
  ],
};

export default data;
