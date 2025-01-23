export const createInitials = (businessName: string): string => {
    const formattedName = businessName?.trim().toUpperCase();
  
    if (formattedName?.length === 0) {
      return '';
    }
  
    const words = formattedName?.split(/\s+/);
  
    if (words?.length === 1) {
      return formattedName.substring(0, 2);
    } else if (words?.length >= 2) {
      const firstInitial = words[0][0];
      const secondInitial = words[1][0];
      return `${firstInitial}${secondInitial}`;
    }
  
    return '';
  };
  