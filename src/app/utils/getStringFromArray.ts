export const getStringFromArray = (array: (string | null)[] | null | undefined, separator: string): string => {
  if (!array) {
    return '';
  }
  return (array.filter(item => !!item) ?? []).join(separator);
};
