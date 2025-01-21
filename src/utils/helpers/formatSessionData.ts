export interface UserDataProps {
  uuid: string;
  role: string;
  email: string;
  adminId: number;
  loggedIn: number;
  lastname: string;
  devToken: string;
  firstname: string;
  authenticator: boolean;
  authenticatorBackup: boolean;
  Business: {
    name: string;
    logo: string;
    font: string;
    bgColor: string;
    address: string;
    country: string;
    bankName: string;
    currency: string;
    location: string;
    sortCode: string;
    businessNumber: string;
    bankAccountName: string;
    bankAccountNumber: string;
  };
}

export const FormatSessionData = (userData: UserDataProps) => {
  const {
    uuid,
    role,
    email,
    adminId,
    loggedIn,
    authenticator,
    lastname: lastName,
    authenticatorBackup,
    firstname: firstName,
    Business: {
      logo,
      font,
      bgColor,
      address,
      country,
      location,
      bankName,
      currency,
      sortCode,
      businessNumber,
      bankAccountName,
      bankAccountNumber,
      name: businessName,
    },
  } = userData;

  const userDataForRedis: Record<string, string | number | boolean> = {
    uuid,
    role,
    email,
    lastName,
    firstName,
    authenticator,
    logo: logo || "",
    font: font || "",
    authenticatorBackup,
    isAuthenticated: true,
    adminId: adminId || 0,
    address: address || "",
    bgColor: bgColor || "",
    country: country || "",
    sortCode: sortCode || "",
    location: location || "",
    bankName: bankName || "",
    currency: currency || "",
    showGetStarted: loggedIn === 1,
    showOnboarding: loggedIn === 1,
    businessName: businessName || "",
    businessNumber: businessNumber || "",
    bankAccountName: bankAccountName || "",
    bankAccountNumber: bankAccountNumber || "",
  };

  const filteredUserData = Object.fromEntries(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Object.entries(userDataForRedis).filter(([_, value]) => value != null)
  );

  return filteredUserData;
};
