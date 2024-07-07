import { formatDuration } from "@/utils/functions";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "url",
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "date",
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "technology" } }],
    }),
    defineField({
      name: "description",
      title: "description",
      type: "blockContent",
    }),
  ],

  preview: {
    select: {
      title: "role",
      startDate: "startDate",
      endDate: "endDate",
    },
    prepare(selection) {
      const { startDate, endDate } = selection;
      return {
        ...selection,
        subtitle: formatDuration({ startDate, endDate }),
      };
    },
  },
});
