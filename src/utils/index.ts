import { hexToRgba } from "./hexToRgba";
import { maskEmail } from "./maskEmail";
import { userInitials } from "./userInitials";
import { checkPathname } from "./checkPathname";
import { getOrdinalWord } from "./getOrdinalWord";
import { backgroundColor } from "./backgroundColor";
import { generateRandomKey } from "./generateRandomKey";
import { handleEnterKeyDown } from "./handleEnterKeyDown";
import { formatDocumentType } from "./formatDocumentType";
import { extractDocumentType } from "./extractDocumentType";
import { formatDate, formatDateWithTime } from "./formatDate";
import { sterilizeNumberInputs } from "./sterilizeNumberInputs";
import { capitalizeFirstLetter } from "./capitalizeFirstLetter";
import { convertNumberToKFormat } from "./convertNumberToKFormat";
import { formatNumberWithCommas, truncateToTwoDecimals } from "./formatNumberWithCommas";
import { convertDateWithTimeStamp } from "./convertDateWithTimeStamp";
import { getStatusClasses, getStatusText, Status } from "./statusLabel";
import { handleOTPKeyDown, handleInputChange, handlePaste } from "./otpUtils";
import { getPlanClasses, getPlanText } from "./planLabel";
import { formatSlugName } from "./formatSlugName";
import { createInitials } from "./createInitials";
import { formatChartsNumber } from "./formatChartsNumber";
import { getTokenExpiration, formatTokenExpiration } from "./getTokenExpiration";



import {
  encrypt,
  decrypt,
  obfuscateValues,
  deobfuscateValues,
} from "./encryption";

export {
  encrypt,
  decrypt,
  hexToRgba,
  maskEmail,
  formatDate,
  handlePaste,
  userInitials,
  checkPathname,
  getStatusText,
  getOrdinalWord,
  obfuscateValues,
  backgroundColor,
  getStatusClasses,
  handleOTPKeyDown,
  deobfuscateValues,
  handleInputChange,
  generateRandomKey,
  handleEnterKeyDown,
  formatDocumentType,
  formatDateWithTime,
  extractDocumentType,
  sterilizeNumberInputs,
  capitalizeFirstLetter,
  formatNumberWithCommas,
  truncateToTwoDecimals,
  convertNumberToKFormat,
  convertDateWithTimeStamp,
  getPlanClasses,
  getPlanText,
  formatSlugName,
  createInitials,
  formatChartsNumber,
  getTokenExpiration,
  formatTokenExpiration,
  type Status,
};
