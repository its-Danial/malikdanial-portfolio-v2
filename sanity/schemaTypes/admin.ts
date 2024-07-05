import { defineField, defineType } from "sanity";

export default defineType({
  name: "admin",
  title: "Admin",
  type: "document",
  fields: [
    defineField({
      name: "firstName",
      title: "First Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "lastName",
      title: "Last Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "jobTitle",
      title: "Job Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "picture",
      title: "picture",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alternative Text",
          type: "string",
          validation: (Rule) => Rule.required(),
          options: {
            isHighlighted: true,
          },
        },
      ],
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: "firstName",
      lastName: "lastName",
      subtitle: "jobTitle",
      media: "picture",
    },
    prepare(selection) {
      const { title, lastName } = selection;
      return { ...selection, title: lastName ? `${title} ${lastName}` : title };
    },
  },
});
