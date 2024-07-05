import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "completionDate",
      title: "Completion Date",
      type: "date",
    }),
    defineField({
      name: "madeAt",
      title: "Made At",
      type: "string",
    }),
    defineField({
      name: "coverImage",
      title: "Cover image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "technology" } }],
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "url",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "blockContent",
    }),
  ],

  preview: {
    select: {
      title: "title",
      media: "coverImage",
    },
    // prepare(selection) {
    //   const { author } = selection;
    //   return { ...selection, subtitle: author && `by ${author}` };
    // },
  },
});
