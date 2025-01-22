export interface AdminUserDataProps {
    uuid: string;
    role: string;
    email: string;
    adminId: number;
    devToken: string;
    lastname: string;
    firstname: string;
    authenticator: boolean;
    authenticatorBackup: boolean;
    isTemporaryPassword: boolean;
    Business: {
      logo: string;
    };
  }
  
  export const formatAadminSessionData = (userData: AdminUserDataProps) => {
    const {
      uuid,
      role,
      email,
      adminId,
      authenticator,
      lastname: lastName,
      authenticatorBackup,
      isTemporaryPassword,
      firstname: firstName,
      Business: { logo },
    } = userData;
  
    const userDataForRedis: Record<string, string | number | boolean> = {
      uuid,
      role,
      email,
      lastName,
      firstName,
      authenticator,
      logo: logo || '',
      authenticatorBackup,
      isTemporaryPassword,
      isAuthenticated: true,
      adminId: adminId || '',
    };
  
    const filteredAdminData = Object.fromEntries(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      Object.entries(userDataForRedis).filter(([_, value]) => value != null),
    );
  
    return filteredAdminData;
  };
  