export const isValidQuotaString = (dataString) => {
  try {
    const splitstring = dataString.split("-");

    switch (splitstring[0]) {
      case "cpu":
        const cpuRequest = parseFloat(splitstring[2]);
        const cpuLimit = parseFloat(splitstring[4]);
        if (isNaN(cpuRequest) || isNaN(cpuLimit)) {
          throw new Error("The CPU Request or Limit is not a valid number");
        }
        if (cpuRequest === 0.5 && cpuLimit !== 1.5) {
          throw new Error(
            "A CPU Request of 0.5 should have a CPU Limit of 1.5"
          );
        } else if (cpuLimit !== cpuRequest * 2) {
          throw new Error(
            `Typically, the CPU Limit should be double the CPU Request. Request: ${cpuRequest}, Limit: ${cpuLimit}`
          );
        }
        break;
      case "memory":
        const memoryRequest = parseInt(splitstring[2]);
        const memoryLimit = parseInt(splitstring[4]);
        if (isNaN(memoryRequest) || isNaN(memoryLimit)) {
          throw new Error("The Memory Request or Limit is not a valid number");
        }
        if (memoryLimit !== memoryRequest * 2) {
          throw new Error(
            `The Memory Limit should be double the Memory Request. Request: ${memoryRequest}, Limit: ${memoryLimit}`
          );
        }
        break;
      case "storage":
        const storage = parseInt(splitstring[1]);
        if (isNaN(storage)) {
          throw new Error("The requested storage space is not a valid number");
        }
        break;
      case "snapshot":
        if (dataString !== "snapshot-5") {
          throw new Error("currently only snapshot-5 is supported");
        }
        break;
      default:
        throw new Error(
          `Quota request string: \"${dataString}\" doesn't appear to be a valid quota parameter`
        );
        break;
    }
  } catch (err) {
    console.error(err);
    return false;
  }

  return true;
};

export default isValidQuotaString;
