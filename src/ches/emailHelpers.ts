import {
    clusterNames,
    ministriesNames,
} from "./emailConstants.js";
import {
    DefaultCpuOptions,
    DefaultMemoryOptions,
    DefaultStorageOptions,
} from "../natsPubSub/privateCloud/constants.js";

export const isObjectChanged = (projectQuota, requestedQuota) =>
    JSON.stringify(projectQuota) !== JSON.stringify(requestedQuota);

export const quotaChanged = (project, requestedProject) => {
    return !(
        JSON.stringify(project.productionQuota) ===
        JSON.stringify(requestedProject.productionQuota) &&
        JSON.stringify(project.developmentQuota) ===
        JSON.stringify(requestedProject.developmentQuota) &&
        JSON.stringify(project.testQuota) ===
        JSON.stringify(requestedProject.testQuota) &&
        JSON.stringify(project.toolsQuota) ===
        JSON.stringify(requestedProject.toolsQuota)
    );
};

export const contactChanged = (project, requestedProject) => {
    return !(
        requestedProject.projectOwner.email === project.projectOwner.email &&
        requestedProject.primaryTechnicalLead.email ===
        project.primaryTechnicalLead.email &&
        requestedProject.secondaryTechnicalLead?.email ===
        project.secondaryTechnicalLead?.email
    );
};

export const generateEmailTemplatePrivateData = (
    incomingProject,
    incomingRequest,
    other = {}
) => {
    const project = incomingProject
        ? { ...incomingProject }
        : { ...incomingRequest };
    const requestedProject = incomingRequest
        ? { ...incomingRequest }
        : { ...incomingProject };

    const secondaryTechnicalLead =
        (!!project.secondaryTechnicalLead || !!requestedProject.secondaryTechnicalLead) && requestedProject.secondaryTechnicalLead.id !== project.secondaryTechnicalLead.id
            ? project.secondaryTechnicalLead : !!requestedProject.secondaryTechnicalLead ? requestedProject.secondaryTechnicalLead : null;
    const primaryTechnicalLead = project.primaryTechnicalLead;
    const projectOwner = project.projectOwner;

    project.testQuota = {
        cpu: DefaultCpuOptions[project.testQuota.cpu],
        memory: DefaultMemoryOptions[project.testQuota.memory],
        storage: DefaultStorageOptions[project.testQuota.storage],
    };

    project.productionQuota = {
        cpu: DefaultCpuOptions[project.productionQuota.cpu],
        memory: DefaultMemoryOptions[project.productionQuota.memory],
        storage: DefaultStorageOptions[project.productionQuota.storage],
    };

    project.developmentQuota = {
        cpu: DefaultCpuOptions[project.developmentQuota.cpu],
        memory: DefaultMemoryOptions[project.developmentQuota.memory],
        storage: DefaultStorageOptions[project.developmentQuota.storage],
    };

    project.toolsQuota = {
        cpu: DefaultCpuOptions[project.toolsQuota.cpu],
        memory: DefaultMemoryOptions[project.toolsQuota.memory],
        storage: DefaultStorageOptions[project.toolsQuota.storage],
    };

    requestedProject.testQuota = {
        cpu: DefaultCpuOptions[requestedProject.testQuota.cpu],
        memory: DefaultMemoryOptions[requestedProject.testQuota.memory],
        storage: DefaultStorageOptions[requestedProject.testQuota.storage],
    };

    requestedProject.productionQuota = {
        cpu: DefaultCpuOptions[requestedProject.productionQuota.cpu],
        memory: DefaultMemoryOptions[requestedProject.productionQuota.memory],
        storage: DefaultStorageOptions[requestedProject.productionQuota.storage],
    };

    requestedProject.developmentQuota = {
        cpu: DefaultCpuOptions[requestedProject.developmentQuota.cpu],
        memory: DefaultMemoryOptions[requestedProject.developmentQuota.memory],
        storage: DefaultStorageOptions[requestedProject.developmentQuota.storage],
    };

    requestedProject.toolsQuota = {
        cpu: DefaultCpuOptions[requestedProject.toolsQuota.cpu],
        memory: DefaultMemoryOptions[requestedProject.toolsQuota.memory],
        storage: DefaultStorageOptions[requestedProject.toolsQuota.storage],
    };

    return {
        consoleURLProdNameSpace: `https://console.apps.${requestedProject.cluster}.devops.gov.bc.ca/topology/ns/${requestedProject.licencePlate}-prod`,
        consoleURLDevNameSpace: `https://console.apps.${requestedProject.cluster}.devops.gov.bc.ca/topology/ns/${requestedProject.licencePlate}-dev`,
        consoleURLTestNameSpace: `https://console.apps.${requestedProject.cluster}.devops.gov.bc.ca/topology/ns/${requestedProject.licencePlate}-test`,
        consoleURLToolNameSpace: `https://console.apps.${requestedProject.cluster}.devops.gov.bc.ca/topology/ns/${requestedProject.licencePlate}-tool`,
        isProductionQuotaChanged: isObjectChanged(
            project.productionQuota,
            requestedProject.productionQuota
        ),
        productionQuotaCPURequested:
            requestedProject.productionQuota.cpu.cpuRequests !==
                project.productionQuota.cpu.cpuRequests
                ? requestedProject.productionQuota.cpu.cpuRequests
                : null,
        productionQuotaMemoryRequested:
            requestedProject.productionQuota.memory.memoryRequests !==
                project.productionQuota.memory.memoryRequests
                ? requestedProject.productionQuota.memory.memoryRequests
                : null,
        productionQuotaStorageRequested:
            requestedProject.productionQuota.storage.storageFile !==
                project.productionQuota.storage.storageFile
                ? requestedProject.productionQuota.storage.storageFile
                : null,
        isDevelopmentQuotaChanged: isObjectChanged(
            project.developmentQuota,
            requestedProject.developmentQuota
        ),
        developmentQuotaCPURequested:
            requestedProject.developmentQuota.cpu.cpuRequests !==
                project.developmentQuota.cpu.cpuRequests
                ? requestedProject.developmentQuota.cpu.cpuRequests
                : null,
        developmentQuotaMemoryRequested:
            requestedProject.developmentQuota.memory.memoryRequests !==
                project.developmentQuota.memory.memoryRequests
                ? requestedProject.developmentQuota.memory.memoryRequests
                : null,
        developmentQuotaStorageRequested:
            requestedProject.developmentQuota.storage.storageFile !==
                project.developmentQuota.storage.storageFile
                ? requestedProject.developmentQuota.storage.storageFile
                : null,
        isTestQuotaChanged: isObjectChanged(
            project.testQuota,
            requestedProject.testQuota
        ),
        testQuotaCPURequested:
            requestedProject.testQuota.cpu.cpuRequests !==
                project.testQuota.cpu.cpuRequests
                ? requestedProject.testQuota.cpu.cpuRequests
                : null,
        testQuotaMemoryRequested:
            requestedProject.testQuota.memoryRequests !==
                project.testQuota.memory.memoryRequests
                ? requestedProject.testQuota.memory.memoryRequests
                : null,
        testQuotaStorageRequested:
            requestedProject.testQuota.storage.storageFile !==
                project.testQuota.storage.storageFile
                ? requestedProject.testQuota.storage.storageFile
                : null,
        isToolsQuotaChanged: isObjectChanged(
            project.toolsQuota,
            requestedProject.toolsQuota
        ),
        toolsQuotaCPURequested:
            requestedProject.toolsQuota.cpu.cpuRequests !==
                project.toolsQuota.cpu.cpuRequests
                ? requestedProject.toolsQuota.cpu.cpuRequests
                : null,
        toolsQuotaMemoryRequested:
            requestedProject.toolsQuota.memory.memoryRequests !==
                project.toolsQuota.memory.memoryRequests
                ? requestedProject.toolsQuota.memory.memoryRequests
                : null,
        toolsQuotaStorageRequested:
            requestedProject.toolsQuota.storage.storageFile !==
                project.toolsQuota.storage.storageFile
                ? requestedProject.toolsQuota.storage.storageFile
                : null,
        productionQuotaCPUCurrent:
            project?.productionQuota?.cpu.cpuRequests || null,
        productionQuotaMemoryCurrent:
            project?.productionQuota?.memory.memoryRequests || null,
        productionQuotaStorageCurrent:
            project?.productionQuota?.storage.storageFile || null,
        developmentQuotaCPUCurrent:
            project?.developmentQuota?.cpu.cpuRequests || null,
        developmentQuotaMemoryCurrent:
            project?.developmentQuota?.memory.memoryRequests || null,
        developmentQuotaStorageCurrent:
            project?.developmentQuota?.storage.storageFile || null,
        testQuotaCPUCurrent: project?.testQuota?.cpu.cpuRequests || null,
        testQuotaMemoryCurrent: project?.testQuota?.memory.memoryRequests || null,
        testQuotaStorageCurrent: project?.testQuota?.storage.storageFile || null,
        toolsQuotaCPUCurrent: project?.toolsQuota?.cpu.cpuRequests || null,
        toolsQuotaMemoryCurrent: project?.toolsQuota?.memory.memoryRequests || null,
        toolsQuotaStorageCurrent: project?.toolsQuota?.storage.storageFile || null,
        licencePlate: requestedProject.licencePlate,
        projectName: requestedProject.name,
        productDescription: requestedProject.description,
        productMinistry: ministriesNames.filter(
            (item) =>
                item.name.toLowerCase() === requestedProject?.ministry.toLowerCase()
        )[0]?.humanFriendlyName,
        POName: `${projectOwner.firstName} ${projectOwner.lastName}`,
        POEmail: projectOwner.email,
        POGitHubOrIDIR: projectOwner?.POIDIR,
        PriTLName: `${primaryTechnicalLead?.firstName} ${primaryTechnicalLead?.lastName}`,
        PriTLEmail: primaryTechnicalLead?.email,
        PriTLGitHubOrIDIR: primaryTechnicalLead?.POIDIR,
        SecTLName: secondaryTechnicalLead
            ? `${secondaryTechnicalLead?.firstName} ${secondaryTechnicalLead.lastName}`
            : null,
        SecTLEmail: secondaryTechnicalLead ? secondaryTechnicalLead?.email : null,
        SecTLGitHubOrIDIR: secondaryTechnicalLead
            ? secondaryTechnicalLead?.POIDIR
            : null,
        setCluster: clusterNames.filter(
            (item) =>
                item.name.toLowerCase() === requestedProject?.cluster.toLowerCase()
        )[0]?.humanFriendlyName,
        ...other,
    };
};


export const generateEmailTemplatePublicData = (
    incomingProject,
    incomingRequest,
    other = {}
) => {
    const project = incomingProject
        ? { ...incomingProject }
        : { ...incomingRequest };
    const requestedProject = incomingRequest
        ? { ...incomingRequest }
        : { ...incomingProject };


    const secondaryTechnicalLead =
        (!!project.secondaryTechnicalLead || !!requestedProject.secondaryTechnicalLead) && requestedProject.secondaryTechnicalLead.id !== project.secondaryTechnicalLead.id
            ? project.secondaryTechnicalLead : !!requestedProject.secondaryTechnicalLead ? requestedProject.secondaryTechnicalLead : null;
    const primaryTechnicalLead = project.primaryTechnicalLead;
    const projectOwner = project.projectOwner;


    return {
        licencePlate: requestedProject.licencePlate,
        projectName: requestedProject.name,
        productDescription: requestedProject.description,
        productMinistry: ministriesNames.filter(
            (item) =>
                item.name.toLowerCase() === requestedProject?.ministry.toLowerCase()
        )[0]?.humanFriendlyName,
        POName: `${projectOwner.firstName} ${projectOwner.lastName}`,
        POEmail: projectOwner.email,
        POGitHubOrIDIR: projectOwner?.POIDIR,
        PriTLName: `${primaryTechnicalLead?.firstName} ${primaryTechnicalLead?.lastName}`,
        PriTLEmail: primaryTechnicalLead?.email,
        PriTLGitHubOrIDIR: primaryTechnicalLead?.POIDIR,
        SecTLName: secondaryTechnicalLead
            ? `${secondaryTechnicalLead?.firstName} ${secondaryTechnicalLead.lastName}`
            : null,
        SecTLEmail: secondaryTechnicalLead ? secondaryTechnicalLead?.email : null,
        SecTLGitHubOrIDIR: secondaryTechnicalLead
            ? secondaryTechnicalLead?.POIDIR
            : null,
        isBudgetChanged: isObjectChanged(requestedProject.budget, project.budget),
        isAccountCodingChanged: requestedProject.accountCoding !== project.accountCoding,
        BudgetDev: requestedProject.budget.dev,
        BudgetTest: requestedProject.budget.test,
        BudgetProd: requestedProject.budget.prod,
        BudgetTools: requestedProject.budget.tools,
        AccountCoding: requestedProject.accountCoding.replace(/(.{3})(.{5})(.{5})(.{4})(.{7})/g, "$1 $2 $3 $4 $5"),
        BudgetDevReq: project.budget.dev,
        BudgetTestReq: project.budget.test,
        BudgetProdReq: project.budget.prod,
        BudgetToolsReq: project.budget.tools,
        AccountCodingReq: project.accountCoding.replace(/(.{3})(.{5})(.{5})(.{4})(.{7})/g, "$1 $2 $3 $4 $5"),
        ...other,
    };
};