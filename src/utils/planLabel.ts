export const getPlanClasses = (plan: string = '-'): string => {
    const planClasses: { [key: string]: string } = {
      'accounting free': 'text-text-secondary bg-surface-subdued',
      'accounting start': 'text-text-success bg-green-shade100',
      'accounting standard': 'text-text-warning bg-yellow-shade100',
      'accounting plus': 'text-text-highlight bg-teal-shade100',
    };
  
    return planClasses[plan?.toLowerCase()] || '';
  };
  
  export const getPlanText = (plan: string = '-'): string => {
    const planTexts: { [key: string]: string } = {
      'accounting free': 'Free',
      'accounting start': 'Start',
      'accounting standard': 'Standard',
      'accounting plus': 'Plus',
    };
  
    return planTexts[plan?.toLowerCase()] || 'Unknown plan';
  };
  