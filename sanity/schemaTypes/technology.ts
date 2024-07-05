import { defineField, defineType } from "sanity";

export default defineType({
  name: "technology",
  title: "Technology",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "url",
    }),
    defineField({
      name: "version",
      title: "Version",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "name",
      version: "version",
    },
    prepare(selection) {
      const { title, version } = selection;
      return { ...selection, title: version ? `${title} - ${version}` : title };
    },
  },
});
