const formatDate = (dateStr: string, format: Intl.DateTimeFormatOptions) => {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat("en-US", format).format(date);
};

export const formatDuration = ({
  startDate,
  endDate,
}: {
  startDate: string;
  endDate?: string;
}) => {
  if (!startDate) return "";

  const startYear = new Date(startDate).getFullYear();
  const endYear = endDate ? new Date(endDate).getFullYear() : null;

  if (!endDate) {
    return `${formatDate(startDate, { year: "numeric" })} — Present`;
  }

  if (startYear !== endYear) {
    return `${formatDate(startDate, { year: "numeric" })} — ${formatDate(endDate, { year: "numeric" })}`;
  }

  if (startYear === endYear) {
    return `${formatDate(startDate, { month: "short" })} — ${formatDate(endDate, { month: "short" })} ${startYear}`;
  }

  return "";
};
