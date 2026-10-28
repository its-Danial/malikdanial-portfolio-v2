import { formatDuration } from "@/utils/functions";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "education",
  title: "Education",
  type: "document",
  fields: [
    defineField({
      name: "degree",
      title: "Degree",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "institution",
      title: "Institution",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
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
      description: "Leave empty to hide the dates on the site.",
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "date",
      description: "Leave empty while studying.",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "blockContent",
    }),
  ],

  preview: {
    select: {
      title: "institution",
      degree: "degree",
      startDate: "startDate",
      endDate: "endDate",
    },
    prepare({ title, degree, startDate, endDate }) {
      const period = startDate ? formatDuration({ startDate, endDate }) : "";
      return {
        title,
        subtitle: [degree, period].filter(Boolean).join(" · "),
      };
    },
  },
});
