import { CaseType, DocumentTypes } from "../types";

export const formatDocumentType = (
  documentType: DocumentTypes,
  caseType: CaseType
): string => {
  if (!documentType) return "none";

  const documentTypes: {
    [key in DocumentTypes]: {
      lowerCase: string;
      upperCase: string;
    };
  } = {
    none: {
      lowerCase: "invalid-document-type",
      upperCase: "Invalid-Document-Type",
    },
    invoice: {
      lowerCase: "invoice",
      upperCase: "Invoice",
    },
    receipt: {
      lowerCase: "receipt",
      upperCase: "Receipt",
    },
    creditnote: {
      lowerCase: "credit note",
      upperCase: "Credit note",
    },
  };

  const selectedDocumentType = documentTypes[documentType];

  if (!selectedDocumentType) {
    throw new Error(`Invalid document type: ${documentType}`);
  }

  const formattedText = selectedDocumentType[caseType];

  if (!formattedText) {
    throw new Error(`Invalid case type: ${caseType}`);
  }

  return formattedText;
};
