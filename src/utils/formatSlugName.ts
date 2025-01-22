export const formatSlugName = (name: string | undefined) => {
    if (!name) return '';
  
    return name.toLowerCase().replace(/\s+/g, '-');
  };
  