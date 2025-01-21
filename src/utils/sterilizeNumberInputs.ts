export const sterilizeNumberInputs = (
  e: React.ChangeEvent<HTMLInputElement>,
  setFieldValue: (field: string, value: string) => void,
  fieldName: string
): void => {
  const { value } = e.target;
  // Allow numbers and decimal points
  const sanitizedValue = value
    .replace(/[^\d.]/g, "")
    .replace(/(\..*?)\..*/g, "$1");
  setFieldValue(fieldName, sanitizedValue);
};
