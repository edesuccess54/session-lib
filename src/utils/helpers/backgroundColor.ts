export const backgroundColor = ({
  body,
  text,
  brand,
  border,
  inputBg,
}: {
  body: string;
  text: string;
  brand: string;
  border: string;
  inputBg: string;
}) => {
  document.body.style.backgroundColor = body;

  document.documentElement.style.setProperty("--body", body);
  document.documentElement.style.setProperty("--body", text);
  document.documentElement.style.setProperty("--brand", brand);
  document.documentElement.style.setProperty("--border", border);
  document.documentElement.style.setProperty("--inputBg", inputBg);
};
