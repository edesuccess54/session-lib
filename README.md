# Candour Utilities Library

A utility library with functions for string manipulation, date formatting, number conversion, and more.

---

## Installation

Install the library using npm or yarn:

```bash
npm install @candour-utils/react
```

```bash
yarn add @candour-utils/react
```

# Examples of How to Use Functions from the Candour Utilities Library

---

## 1. `CapitalizeFirstLetter`

**Description**: Capitalizes the first letter of a string.

### Example Usage:

```typescript
import { CapitalizeFirstLetter } from "@candour-utils/react";

const text = "hello world";
const capitalized = CapitalizeFirstLetter(text);

console.log(capitalized); // Output: "Hello world"
```

## 2. `FormatDate`

**Description**: Formats a date string into the format DD-MMM-YYYY.

### Example Usage:

```typescript
import { FormatDate } from "@candour-utils/react";

const date = "2025-01-21";
const formattedDate = FormatDate(date);

console.log(formattedDate); // Output: "21-Jan-2025"
```

## 3. `FormatDateWithTime`

**Description**: Formats a date string into the format DD-MMM-YYYY, HH:MM AM/PM.

### Example Usage:

```typescript
import { FormatDateWithTime } from "@candour-utils/react";

const date = "2025-01-21T14:30:00";
const formattedDateWithTime = FormatDateWithTime(date);

console.log(formattedDateWithTime); // Output: "21-Jan-2025, 02:30 PM"
```

---

# Conversion Functions

**Conversion** utility functions:

1. **CapitalizeFirstLetter**  
   Capitalizes the first letter of a given string.

2. **ConvertDateWithTimeStamp**  
   Converts a timestamp into a formatted date string.

3. **ConvertNumberToKFormat**  
   Converts large numbers to a shortened "K" format (e.g., `1200` → `1.2K`).

4. **FormatDate**  
   Formats a date object or string into a human-readable date.

5. **FormatDateWithTime**  
   Formats a date object or string, including the time.

6. **FormatDocumentType**  
   Converts a document type code to a human-readable string.

7. **FormatNumberWithCommas**  
   Adds commas to a number for better readability (e.g., `1000` → `1,000`).

8. **GetOrdinalWord**  
   Converts a number into its ordinal word form (e.g., `1` → `First`).

9. **HexToRgba**  
   Converts a hexadecimal color code to an RGBA format.

10. **MaskEmail**  
    Masks an email address, hiding part of it (e.g., `user@example.com` → `u***@example.com`).

11. **SterilizeNumberInputs**  
    Removes invalid characters from number inputs.

12. **UserInitials**  
    Extracts the initials from a user's full name.

13. **truncateToTwoDecimals**
   formats a floating point number to two decimal places

# Helpers Functions

**Helpers** utility functions:

1. **BackgroundColor**  
   Provides utility for determining or managing background colors.

2. **CheckPathname**  
   Checks if a given pathname matches specific patterns or criteria.

3. **Encrypt**  
   Encrypts sensitive data for secure storage or transfer.

4. **Decrypt**  
   Decrypts previously encrypted data.

5. **ObfuscateValues**  
   Obfuscates sensitive values to prevent unauthorized access.

6. **DeobfuscateValues**  
   Reverses the obfuscation process to retrieve the original values.

7. **ExtractDocumentType**  
   Extracts the document type from a given input.

8. **FormatSessionData**  
   Formats session-related data into a structured object.

9. **GenerateRandomKey**  
   Generates a random key for various use cases.

10. **HandleEnterKeyDown**  
    Handles the `Enter` key press for specific user input scenarios.

11. **HandleOTPKeyDown**  
    Manages key events for one-time password (OTP) inputs.

12. **HandleInputChange**  
    Handles changes in input fields, especially for OTP-like input systems.

13. **HandlePaste**  
    Handles paste events for input fields, ensuring proper formatting and data.

14. **GetStatusClasses**  
    Provides utility for retrieving status-specific CSS classes.

15. **GetStatusText**  
    Retrieves the text representation of a specific status.

16. **Status**  
    A type definition for status labels.

17. **UserDataProps**  
    A type definition for user data properties.

18. **formatSlugName**
   formats slug name and replace whitespace with -

