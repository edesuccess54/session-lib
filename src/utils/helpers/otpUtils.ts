export const HandleOTPKeyDown = (
  index: number,
  otpInputs: Array<string>,
  setOtpInputs: React.Dispatch<React.SetStateAction<Array<string>>>,
  inputRefs: React.RefObject<Array<HTMLInputElement | null>>,
  e: React.KeyboardEvent<HTMLInputElement>
) => {
  if (e.key === "Backspace") {
    if (otpInputs[index] === "") {
      e.preventDefault();

      if (inputRefs.current && index > 0) {
        const previousInput = inputRefs.current[index - 1];

        if (previousInput) {
          previousInput.focus();
          const newInputs = [...otpInputs];
          newInputs[index - 1] = "";
          setOtpInputs(newInputs);
        }
      }
    } else {
      const newInputs = [...otpInputs];
      newInputs[index] = "";
      setOtpInputs(newInputs);
    }
  }
};

export const handleInputChange = (
  index: number,
  value: string,
  otpInputs: Array<string>,
  setOtpInputs: React.Dispatch<React.SetStateAction<Array<string>>>,
  inputRefs: React.RefObject<Array<HTMLInputElement | null>>
) => {
  if (/^\d*$/.test(value) && value.length <= 1) {
    const newInputs = [...otpInputs];
    newInputs[index] = value;
    setOtpInputs(newInputs);

    if (value.length === 0 && index > 0) {
      newInputs[index - 1] = "";
      if (inputRefs.current) {
        const previousInput = inputRefs.current[index - 1];
        if (previousInput) previousInput.focus();
      }
      setOtpInputs(newInputs);
    } else if (index < otpInputs.length - 1 && value.length === 1) {
      if (inputRefs.current) {
        const nextInput = inputRefs.current[index + 1];
        if (nextInput) nextInput.focus();
      }
    }
  }
};

export const handlePaste = (
  e: React.ClipboardEvent<HTMLInputElement>,
  setOtpInputs: React.Dispatch<React.SetStateAction<Array<string>>>,
  inputRefs: React.RefObject<Array<HTMLInputElement | null>>
) => {
  e.preventDefault();
  const pastedData = e.clipboardData.getData("text").slice(0, 6); // Limit to 6 characters
  if (/^\d+$/.test(pastedData)) {
    // Ensure only digits are pasted
    const newInputs = pastedData.split("");
    setOtpInputs((prevInputs) => {
      const updatedInputs = [...prevInputs];
      newInputs.forEach((digit, idx) => {
        updatedInputs[idx] = digit;
      });
      return updatedInputs;
    });
    if (inputRefs.current) {
      const nextInputIndex = newInputs.length - 1;
      const nextInput = inputRefs.current[nextInputIndex];
      if (nextInput) nextInput.focus();
    }
  }
};

// export const handlePaste = (
//   e: React.ClipboardEvent<HTMLInputElement>,
//   setOtpInputs: React.Dispatch<React.SetStateAction<Array<string>>>,
//   inputRefs: React.RefObject<Array<HTMLInputElement | null>>,
// ) => {
//   e.preventDefault();

//   const pastedData = e.clipboardData.getData('text');

//   if (/^\d{6}$/.test(pastedData)) {
//     const newInputs = pastedData.split('').slice(0, 6);
//     setOtpInputs(newInputs);
//     if (inputRefs.current) {
//       const lastInput = inputRefs.current[5];
//       if (lastInput) lastInput.focus();
//     }
//   }
// };
