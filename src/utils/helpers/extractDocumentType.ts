export const ExtractDocumentType = (pathname: string): string => {
  const parts = pathname.split("create-");
  return parts.length > 1 ? parts[1].split("?")[0] : "";
};
