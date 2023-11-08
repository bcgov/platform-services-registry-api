export const transformCommonComponents = (originalComponents) =>
  Object.keys(originalComponents).reduce((accumulator, key) => {
    if (
      typeof originalComponents[key] === 'string' ||
      originalComponents[key] === null
    ) {
      accumulator[key] = {
        planningToUse: originalComponents[key] === 'PLANNING_TO_USE',
        implemented: false,
      };
    } else {
      // Directly copy non-string and non-null values
      accumulator[key] = originalComponents[key];
    }
    return accumulator;
  }, {});

export function revertCommonComponents(structured) {
  return Object.keys(structured).reduce((accumulator, key) => {
    const value = structured[key];
    if (
      typeof value === 'object' &&
      value !== null &&
      'planningToUse' in value
    ) {
      // Assume that if planningToUse is true, we don't care about the implemented flag.
      accumulator[key] = value.planningToUse ? 'PLANNING_TO_USE' : 'NOT_USING';
    } else {
      // Directly copy non-object values
      accumulator[key] = value;
    }
    return accumulator;
  }, {});
}
