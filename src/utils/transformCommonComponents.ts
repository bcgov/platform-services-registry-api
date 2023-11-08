import { CommonComponents } from '@prisma/client';

function tranformCommonComponentOption(original) {
  if (original === undefined || original === null) {
    return {
      planningToUse: false,
      implemented: false,
    };
  } else if (original === 'PLANNING_TO_USE') {
    return {
      planningToUse: true,
      implemented: false,
    };
  } else if (original === 'IMPLEMENTED') {
    return {
      planningToUse: false,
      implemented: true,
    };
  } else {
    return {
      planningToUse: false,
      implemented: false,
    };
  }
}

export const transformCommonComponents = (originalComponents: any) => {
  const commonComponentKeys = [
    'addressAndGeolocation',
    'workflowManagement',
    'formDesignAndSubmission',
    'identityManagement',
    'paymentServices',
    'documentManagement',
    'endUserNotificationAndSubscription',
    'publishing',
    'businessIntelligence',
  ];

  const commonComponetsOptions = Object.fromEntries(
    commonComponentKeys.map((key) => [
      key,
      tranformCommonComponentOption(originalComponents[key]),
    ])
  );

  const isCommonComponentsUsed = !Object.values(commonComponetsOptions).some(
    (value) => value.planningToUse || value.implemented
  );

  const newComponents = {
    ...commonComponetsOptions,
    other: originalComponents.other || '',
    noServices: isCommonComponentsUsed,
  } as CommonComponents;

  return newComponents;
};

function reverseTransformCommonComponentOption(option) {
  if (option.planningToUse) {
    return 'PLANNING_TO_USE';
  } else if (option.implemented) {
    return 'IMPLEMENTED';
  } else {
    // If both are false, return null to signify neither option is selected
    return null;
  }
}

export const revertCommonComponents = (transformedComponents) => {
  return Object.fromEntries(
    Object.entries(transformedComponents).map(([key, value]) => {
      // Handle the 'other' and 'noServices' keys separately if needed
      if (key === 'other') {
        return [key, value || null]; // Convert empty string back to null
      } else if (key === 'noServices') {
        return [key, value !== undefined ? value : false]; // Preserve boolean or default to false
      }
      // Reverse transform the common component options
      return [key, reverseTransformCommonComponentOption(value)];
    })
  );
};
