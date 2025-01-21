import { backgroundColor } from "./backgroundColor";
import { checkPathname } from "./checkPathname";
// import {
//   encrypt,
//   decrypt,
//   obfuscateValues,
//   deobfuscateValues,
// } from "./encryption";
import { extractDocumentType } from "./extractDocumentType";
import { formatSessionData, UserDataProps } from "./formatSessionData";
import { generateRandomKey } from "./generateRandomKey";
import { handleEnterKeyDown } from "./handleEnterKeyDown";
import { handleOTPKeyDown, handleInputChange, handlePaste } from "./otpUtils";
import { getStatusClasses, getStatusText, Status } from "./statusLabel";

export {
  // encrypt,
  // decrypt,
  handlePaste,
  getStatusText,
  checkPathname,
  // obfuscateValues,
  backgroundColor,
  getStatusClasses,
  handleOTPKeyDown,
  // deobfuscateValues,
  formatSessionData,
  generateRandomKey,
  handleInputChange,
  handleEnterKeyDown,
  extractDocumentType,
  type Status,
  type UserDataProps,
};
