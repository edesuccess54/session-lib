import { BackgroundColor } from "./backgroundColor";
import { CheckPathname } from "./checkPathname";
// import {
//   encrypt,
//   decrypt,
//   obfuscateValues,
//   deobfuscateValues,
// } from "./encryption";
import { ExtractDocumentType } from "./extractDocumentType";
import { FormatSessionData, UserDataProps } from "./formatSessionData";
import { GenerateRandomKey } from "./generateRandomKey";
import { HandleEnterKeyDown } from "./handleEnterKeyDown";
import { HandleOTPKeyDown, handleInputChange, handlePaste } from "./otpUtils";
import { GetStatusClasses, GetStatusText, Status } from "./statusLabel";

export {
  // encrypt,
  // decrypt,
  handlePaste,
  GetStatusText,
  CheckPathname,
  // obfuscateValues,
  BackgroundColor,
  GetStatusClasses,
  HandleOTPKeyDown,
  // deobfuscateValues,
  FormatSessionData,
  GenerateRandomKey,
  handleInputChange,
  HandleEnterKeyDown,
  ExtractDocumentType,
  type Status,
  type UserDataProps,
};
