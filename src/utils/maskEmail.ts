export const MaskEmail = (email: string | undefined): string => {
  if (email) {
    const [localPart, domainPart] = email.split("@");

    if (!localPart || !domainPart) return "";

    const localPartLength = localPart.length;

    if (localPartLength <= 5) {
      // If the local part is 5 characters or fewer, mask everything except the first character
      return `${localPart.charAt(0)}${"*".repeat(
        localPartLength - 1
      )}@${domainPart}`;
    }

    // Get the first 3 characters of the local part
    const firstThree = localPart.slice(0, 3);

    // Get the last 2 characters before the "@" symbol
    const lastTwo = localPart.slice(-2);

    // Replace characters between the first 3 and last 2 characters with asterisks
    const maskedLocalPart = `${firstThree}${"*".repeat(
      localPartLength - 5
    )}${lastTwo}`;

    return `${maskedLocalPart}@${domainPart}`;
  } else {
    return "INVALID-EMAIL-ADDRESS";
  }
};
