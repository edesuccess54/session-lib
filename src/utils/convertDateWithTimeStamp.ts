export const convertDateWithTimeStamp = (date: string | Date): string => {
  if (!date) return "";

  // Parse dateIssued and dueDate strings to Date objects
  const parsedDate = new Date(date);

  // Add current timestamp to dateIssued and dueDate
  parsedDate.setHours(0, 0, 0, 0); // Set time to midnight

  // Update dateIssued and dueDate to include the current timestamp
  parsedDate.setHours(
    new Date().getHours(),
    new Date().getMinutes(),
    new Date().getSeconds(),
    new Date().getMilliseconds()
  );

  // Format dateIssued and dueDate back to the desired format
  return parsedDate.toISOString();
};
