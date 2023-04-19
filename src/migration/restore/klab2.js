const data = [
  {
    annotations: {
      contacts:
        '[{"email": "ian.1.watts@gov.bc.ca", "role": "owner"}, {"email": "billy.li@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ian.1.watts@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"billy.li@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"This is a test","openshift.io/display-name":"Ian KLAB2 Test (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"ad5014","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"ad5014","profile_id":"643ddd6903c86fa32af60c18","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"ad5014-dev"}}\n',
      "ls_id-0": "27827911-21ee-4502-9622-843108d53c84",
      "ncp/subnet-0": "10.90.122.0/24",
      "openshift.io/description": "This is a test",
      "openshift.io/display-name": "Ian KLAB2 Test (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c35,c20",
      "openshift.io/sa.scc.supplemental-groups": "1001230000/10000",
      "openshift.io/sa.scc.uid-range": "1001230000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-09-19T18:23:42Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "ad5014",
      environment: "dev",
      "kubernetes.io/metadata.name": "ad5014-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "ad5014",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.8.2",
      profile_id: "643ddd6903c86fa32af60c18",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "ad5014-dev",
    resourceVersion: "438284623",
    uid: "379339fe-4573-4c57-a320-09f82f188c34"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ian.1.watts@gov.bc.ca", "role": "owner"}, {"email": "billy.li@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ian.1.watts@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"billy.li@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"This is a test","openshift.io/display-name":"Ian KLAB2 Test (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"ad5014","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"ad5014","profile_id":"643ddd6903c86fa32af60c18","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"ad5014-prod"}}\n',
      "ls_id-0": "77fc5511-d1fb-42cc-afbf-6ec4b122e8e7",
      "ncp/subnet-0": "10.90.125.0/24",
      "openshift.io/description": "This is a test",
      "openshift.io/display-name": "Ian KLAB2 Test (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c36,c0",
      "openshift.io/sa.scc.supplemental-groups": "1001260000/10000",
      "openshift.io/sa.scc.uid-range": "1001260000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-09-19T18:23:42Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "ad5014",
      environment: "prod",
      "kubernetes.io/metadata.name": "ad5014-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "ad5014",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.8.2",
      profile_id: "643ddd6903c86fa32af60c18",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "ad5014-prod",
    resourceVersion: "438284624",
    uid: "b9428636-023f-4e0c-b269-55fc5bf5c87d"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ian.1.watts@gov.bc.ca", "role": "owner"}, {"email": "billy.li@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ian.1.watts@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"billy.li@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"This is a test","openshift.io/display-name":"Ian KLAB2 Test (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"ad5014","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"ad5014","profile_id":"643ddd6903c86fa32af60c18","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"ad5014-test"}}\n',
      "ls_id-0": "423ef425-fe13-4a69-abb4-73805799842f",
      "ncp/subnet-0": "10.90.126.0/24",
      "openshift.io/description": "This is a test",
      "openshift.io/display-name": "Ian KLAB2 Test (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c35,c30",
      "openshift.io/sa.scc.supplemental-groups": "1001250000/10000",
      "openshift.io/sa.scc.uid-range": "1001250000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-09-19T18:23:42Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "ad5014",
      environment: "test",
      "kubernetes.io/metadata.name": "ad5014-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "ad5014",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.8.2",
      profile_id: "643ddd6903c86fa32af60c18",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "ad5014-test",
    resourceVersion: "438284626",
    uid: "4b353641-c1b1-4c87-a10e-944ea03832c8"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ian.1.watts@gov.bc.ca", "role": "owner"}, {"email": "billy.li@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ian.1.watts@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"billy.li@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"This is a test","openshift.io/display-name":"Ian KLAB2 Test (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"ad5014","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"ad5014","profile_id":"643ddd6903c86fa32af60c18","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"ad5014-tools"}}\n',
      "ls_id-0": "7409fd26-5263-40cc-b500-f40f9480130a",
      "ncp/snat_ip_status": "IP_ALLOCATED_SUCCESSFULLY",
      "ncp/subnet-0": "10.90.124.0/24",
      "openshift.io/description": "This is a test",
      "openshift.io/display-name": "Ian KLAB2 Test (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c35,c25",
      "openshift.io/sa.scc.supplemental-groups": "1001240000/10000",
      "openshift.io/sa.scc.uid-range": "1001240000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-09-19T18:23:42Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "ad5014",
      environment: "tools",
      "kubernetes.io/metadata.name": "ad5014-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "ad5014",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.8.2",
      profile_id: "643ddd6903c86fa32af60c18",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "ad5014-tools",
    resourceVersion: "438284625",
    uid: "03e38cc1-3766-4a82-ad01-1f830bcec118"
  },
  {
    annotations: {
      contacts:
        '[{"email": "olena.mitovska@gov.bc.ca", "role": "owner"}, {"email": "shelly.han@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"olena.mitovska@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"shelly.han@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"A test project set created to test Vault service.","openshift.io/display-name":"Vault Test project (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"c4b9c2","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"c4b9c2","profile_id":"643ddbac03c86fa32af60c16","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"c4b9c2-dev"}}\n',
      "ls_id-0": "97ab156a-a03b-4c7b-b896-6e59b952a46e",
      "ncp/subnet-0": "10.90.115.0/24",
      "openshift.io/description":
        "A test project set created to test Vault service.",
      "openshift.io/display-name": "Vault Test project (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c34,c14",
      "openshift.io/sa.scc.supplemental-groups": "1001150000/10000",
      "openshift.io/sa.scc.uid-range": "1001150000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-10-29T00:05:02Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "c4b9c2",
      environment: "dev",
      "kubernetes.io/metadata.name": "c4b9c2-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "c4b9c2",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.8.2",
      profile_id: "643ddbac03c86fa32af60c16",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "c4b9c2-dev",
    resourceVersion: "438276138",
    uid: "8adf78af-0448-4497-9f4b-7c409ad0c52d"
  },
  {
    annotations: {
      contacts:
        '[{"email": "olena.mitovska@gov.bc.ca", "role": "owner"}, {"email": "shelly.han@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"olena.mitovska@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"shelly.han@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"A test project set created to test Vault service.","openshift.io/display-name":"Vault Test project (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"c4b9c2","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"c4b9c2","profile_id":"643ddbac03c86fa32af60c16","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"c4b9c2-prod"}}\n',
      "ls_id-0": "96fe9bdc-528e-4334-8528-944eb6e2697b",
      "ncp/subnet-0": "10.90.116.0/24",
      "openshift.io/description":
        "A test project set created to test Vault service.",
      "openshift.io/display-name": "Vault Test project (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c34,c4",
      "openshift.io/sa.scc.supplemental-groups": "1001130000/10000",
      "openshift.io/sa.scc.uid-range": "1001130000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-10-29T00:05:02Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "c4b9c2",
      environment: "prod",
      "kubernetes.io/metadata.name": "c4b9c2-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "c4b9c2",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.8.2",
      profile_id: "643ddbac03c86fa32af60c16",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "c4b9c2-prod",
    resourceVersion: "438276139",
    uid: "3f92ca87-8056-4d3b-b301-e6534531599b"
  },
  {
    annotations: {
      contacts:
        '[{"email": "olena.mitovska@gov.bc.ca", "role": "owner"}, {"email": "shelly.han@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"olena.mitovska@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"shelly.han@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"A test project set created to test Vault service.","openshift.io/display-name":"Vault Test project (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"c4b9c2","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"c4b9c2","profile_id":"643ddbac03c86fa32af60c16","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"c4b9c2-test"}}\n',
      "ls_id-0": "0f14aa6a-3c64-40a8-858a-577178fc8d77",
      "ncp/subnet-0": "10.90.117.0/24",
      "openshift.io/description":
        "A test project set created to test Vault service.",
      "openshift.io/display-name": "Vault Test project (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c34,c19",
      "openshift.io/sa.scc.supplemental-groups": "1001160000/10000",
      "openshift.io/sa.scc.uid-range": "1001160000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-10-29T00:05:02Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "c4b9c2",
      environment: "test",
      "kubernetes.io/metadata.name": "c4b9c2-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "c4b9c2",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.8.2",
      profile_id: "643ddbac03c86fa32af60c16",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "c4b9c2-test",
    resourceVersion: "438276140",
    uid: "ab4a66fc-5a4b-45d9-b647-0a1b10199995"
  },
  {
    annotations: {
      contacts:
        '[{"email": "olena.mitovska@gov.bc.ca", "role": "owner"}, {"email": "shelly.han@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"olena.mitovska@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"shelly.han@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"A test project set created to test Vault service.","openshift.io/display-name":"Vault Test project (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"c4b9c2","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"c4b9c2","profile_id":"643ddbac03c86fa32af60c16","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"c4b9c2-tools"}}\n',
      "ls_id-0": "34ee2824-2838-4895-877e-93c5aae3114b",
      "ncp/subnet-0": "10.90.114.0/24",
      "openshift.io/description":
        "A test project set created to test Vault service.",
      "openshift.io/display-name": "Vault Test project (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c34,c24",
      "openshift.io/sa.scc.supplemental-groups": "1001170000/10000",
      "openshift.io/sa.scc.uid-range": "1001170000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-10-29T00:05:02Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "c4b9c2",
      environment: "tools",
      "kubernetes.io/metadata.name": "c4b9c2-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "c4b9c2",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.8.2",
      profile_id: "643ddbac03c86fa32af60c16",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "c4b9c2-tools",
    resourceVersion: "438276137",
    uid: "d10cddcf-b7f4-4f70-a0a1-3cdee210e409"
  },
  {
    annotations: {
      contacts:
        '[{"email": "steven.barre@dxcas.com", "role": "owner"}, {"email": "william.hutchison@dxcas.com", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"steven.barre@dxcas.com\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"william.hutchison@dxcas.com\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"Test project for AdvSol in KLAB2","openshift.io/display-name":"AdvSol Testing (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-32-limit-64","devops.gov.bc.ca/gitops-app":"ce9012","environment":"dev","memory_quota":"memory-request-64-limit-128","ministry_id":"CITZ","name":"ce9012","profile_id":"643ddd7828b59683a045bb4b","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-512"},"name":"ce9012-dev"}}\n',
      "ls_id-0": "20f0c8c7-42a6-43f8-8d88-86bd0860629e",
      "ncp/subnet-0": "10.90.129.0/24",
      "openshift.io/description": "Test project for AdvSol in KLAB2",
      "openshift.io/display-name": "AdvSol Testing (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c36,c10",
      "openshift.io/sa.scc.supplemental-groups": "1001280000/10000",
      "openshift.io/sa.scc.uid-range": "1001280000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-11-10T23:46:48Z",
    labels: {
      cpu_quota: "cpu-request-32-limit-64",
      "devops.gov.bc.ca/gitops-app": "ce9012",
      environment: "dev",
      "kubernetes.io/metadata.name": "ce9012-dev",
      memory_quota: "memory-request-64-limit-128",
      ministry_id: "CITZ",
      name: "ce9012",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.8.2",
      profile_id: "643ddd7828b59683a045bb4b",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-512"
    },
    name: "ce9012-dev",
    resourceVersion: "438286880",
    uid: "3e9cb798-ee37-4753-bf94-ac3dc6557387"
  },
  {
    annotations: {
      contacts:
        '[{"email": "steven.barre@dxcas.com", "role": "owner"}, {"email": "william.hutchison@dxcas.com", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"steven.barre@dxcas.com\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"william.hutchison@dxcas.com\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"Test project for AdvSol in KLAB2","openshift.io/display-name":"AdvSol Testing (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-32-limit-64","devops.gov.bc.ca/gitops-app":"ce9012","environment":"prod","memory_quota":"memory-request-64-limit-128","ministry_id":"CITZ","name":"ce9012","profile_id":"643ddd7828b59683a045bb4b","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-512"},"name":"ce9012-prod"}}\n',
      "ls_id-0": "f7b46041-8665-4be7-a7c0-cce22ed4139a",
      "ncp/subnet-0": "10.90.128.0/24",
      "openshift.io/description": "Test project for AdvSol in KLAB2",
      "openshift.io/display-name": "AdvSol Testing (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c37,c9",
      "openshift.io/sa.scc.supplemental-groups": "1001350000/10000",
      "openshift.io/sa.scc.uid-range": "1001350000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-11-10T23:46:48Z",
    labels: {
      cpu_quota: "cpu-request-32-limit-64",
      "devops.gov.bc.ca/gitops-app": "ce9012",
      environment: "prod",
      "kubernetes.io/metadata.name": "ce9012-prod",
      memory_quota: "memory-request-64-limit-128",
      ministry_id: "CITZ",
      name: "ce9012",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.8.2",
      profile_id: "643ddd7828b59683a045bb4b",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-512"
    },
    name: "ce9012-prod",
    resourceVersion: "438286881",
    uid: "f75e3b25-f917-4728-b099-b31ed781abc7"
  },
  {
    annotations: {
      contacts:
        '[{"email": "steven.barre@dxcas.com", "role": "owner"}, {"email": "william.hutchison@dxcas.com", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"steven.barre@dxcas.com\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"william.hutchison@dxcas.com\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"Test project for AdvSol in KLAB2","openshift.io/display-name":"AdvSol Testing (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-32-limit-64","devops.gov.bc.ca/gitops-app":"ce9012","environment":"test","memory_quota":"memory-request-64-limit-128","ministry_id":"CITZ","name":"ce9012","profile_id":"643ddd7828b59683a045bb4b","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-512"},"name":"ce9012-test"}}\n',
      "ls_id-0": "fdb89c16-a9be-4d6e-b7fe-425aba350197",
      "ncp/subnet-0": "10.90.135.0/24",
      "openshift.io/description": "Test project for AdvSol in KLAB2",
      "openshift.io/display-name": "AdvSol Testing (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c36,c20",
      "openshift.io/sa.scc.supplemental-groups": "1001300000/10000",
      "openshift.io/sa.scc.uid-range": "1001300000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-11-10T23:46:48Z",
    labels: {
      cpu_quota: "cpu-request-32-limit-64",
      "devops.gov.bc.ca/gitops-app": "ce9012",
      environment: "test",
      "kubernetes.io/metadata.name": "ce9012-test",
      memory_quota: "memory-request-64-limit-128",
      ministry_id: "CITZ",
      name: "ce9012",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.8.2",
      profile_id: "643ddd7828b59683a045bb4b",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-512"
    },
    name: "ce9012-test",
    resourceVersion: "438286882",
    uid: "db21751b-5f42-481b-a3a6-2e4f751cb03e"
  },
  {
    annotations: {
      contacts:
        '[{"email": "steven.barre@dxcas.com", "role": "owner"}, {"email": "william.hutchison@dxcas.com", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"steven.barre@dxcas.com\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"william.hutchison@dxcas.com\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"Test project for AdvSol in KLAB2","openshift.io/display-name":"AdvSol Testing (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-32-limit-64","devops.gov.bc.ca/gitops-app":"ce9012","environment":"tools","memory_quota":"memory-request-64-limit-128","ministry_id":"CITZ","name":"ce9012","profile_id":"643ddd7828b59683a045bb4b","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-512"},"name":"ce9012-tools"}}\n',
      "ls_id-0": "2d37713c-d16f-42a7-a166-e715836888a0",
      "ncp/subnet-0": "10.90.130.0/24",
      "openshift.io/description": "Test project for AdvSol in KLAB2",
      "openshift.io/display-name": "AdvSol Testing (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c36,c15",
      "openshift.io/sa.scc.supplemental-groups": "1001290000/10000",
      "openshift.io/sa.scc.uid-range": "1001290000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-11-10T23:46:48Z",
    labels: {
      cpu_quota: "cpu-request-32-limit-64",
      "devops.gov.bc.ca/gitops-app": "ce9012",
      environment: "tools",
      "kubernetes.io/metadata.name": "ce9012-tools",
      memory_quota: "memory-request-64-limit-128",
      ministry_id: "CITZ",
      name: "ce9012",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.8.2",
      profile_id: "643ddd7828b59683a045bb4b",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-512"
    },
    name: "ce9012-tools",
    resourceVersion: "438286883",
    uid: "37f34120-7a05-44c7-ab38-a1cdea3e0fc0"
  },
  {
    annotations: {
      contacts:
        '[{"email": "nick.corcoran@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "nickcorcoran"}, {"email": "nick.corcoran@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "nickcorcoran"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"nick.corcoran@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"nickcorcoran\\"}, {\\"email\\": \\"nick.corcoran@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"nickcorcoran\\"}]","openshift.io/description":"Namespaces for pen tester access Feb 27 - Mar 14 2023","openshift.io/display-name":"Pen Test 2023 (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"d72c9c","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"d72c9c","profile_id":"1099","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"d72c9c-dev"}}\n',
      "ls_id-0": "025a12ad-b7b8-49ef-ae15-2ca89e3bbc91",
      "ncp/subnet-0": "10.90.102.0/24",
      "openshift.io/description":
        "Namespaces for pen tester access Feb 27 - Mar 14 2023",
      "openshift.io/display-name": "Pen Test 2023 (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c20,c5",
      "openshift.io/sa.scc.supplemental-groups": "1000390000/10000",
      "openshift.io/sa.scc.uid-range": "1000390000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-21T21:06:25Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "d72c9c",
      environment: "dev",
      "kubernetes.io/metadata.name": "d72c9c-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "d72c9c",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.8.2",
      profile_id: "1099",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "d72c9c-dev",
    resourceVersion: "432938161",
    uid: "42be40f6-2be8-497b-b1f6-8859db5d79cf"
  },
  {
    annotations: {
      contacts:
        '[{"email": "nick.corcoran@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "nickcorcoran"}, {"email": "nick.corcoran@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "nickcorcoran"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"nick.corcoran@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"nickcorcoran\\"}, {\\"email\\": \\"nick.corcoran@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"nickcorcoran\\"}]","openshift.io/description":"Namespaces for pen tester access Feb 27 - Mar 14 2023","openshift.io/display-name":"Pen Test 2023 (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"d72c9c","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"d72c9c","profile_id":"1099","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"d72c9c-prod"}}\n',
      "ls_id-0": "4f85c64b-d007-4da3-8742-7c601abab591",
      "ncp/subnet-0": "10.90.141.0/24",
      "openshift.io/description":
        "Namespaces for pen tester access Feb 27 - Mar 14 2023",
      "openshift.io/display-name": "Pen Test 2023 (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c37,c29",
      "openshift.io/sa.scc.supplemental-groups": "1001390000/10000",
      "openshift.io/sa.scc.uid-range": "1001390000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-21T21:06:25Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "d72c9c",
      environment: "prod",
      "kubernetes.io/metadata.name": "d72c9c-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "d72c9c",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.8.2",
      profile_id: "1099",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "d72c9c-prod",
    resourceVersion: "432938195",
    uid: "fe1c1bed-2d2d-4893-a90f-1ab6e2ebd914"
  },
  {
    annotations: {
      contacts:
        '[{"email": "nick.corcoran@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "nickcorcoran"}, {"email": "nick.corcoran@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "nickcorcoran"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"nick.corcoran@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"nickcorcoran\\"}, {\\"email\\": \\"nick.corcoran@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"nickcorcoran\\"}]","openshift.io/description":"Namespaces for pen tester access Feb 27 - Mar 14 2023","openshift.io/display-name":"Pen Test 2023 (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"d72c9c","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"d72c9c","profile_id":"1099","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"d72c9c-test"}}\n',
      "ls_id-0": "82c2a802-7d54-437b-8af9-47f2fb6eb27e",
      "ncp/subnet-0": "10.90.143.0/24",
      "openshift.io/description":
        "Namespaces for pen tester access Feb 27 - Mar 14 2023",
      "openshift.io/display-name": "Pen Test 2023 (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c32,c19",
      "openshift.io/sa.scc.supplemental-groups": "1001030000/10000",
      "openshift.io/sa.scc.uid-range": "1001030000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-21T21:06:25Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "d72c9c",
      environment: "test",
      "kubernetes.io/metadata.name": "d72c9c-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "d72c9c",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.8.2",
      profile_id: "1099",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "d72c9c-test",
    resourceVersion: "432938225",
    uid: "f4666c43-49a3-48f4-a4a1-a0e13bc8c54d"
  },
  {
    annotations: {
      contacts:
        '[{"email": "nick.corcoran@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "nickcorcoran"}, {"email": "nick.corcoran@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "nickcorcoran"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"nick.corcoran@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"nickcorcoran\\"}, {\\"email\\": \\"nick.corcoran@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"nickcorcoran\\"}]","openshift.io/description":"Namespaces for pen tester access Feb 27 - Mar 14 2023","openshift.io/display-name":"Pen Test 2023 (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"d72c9c","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"d72c9c","profile_id":"1099","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"d72c9c-tools"}}\n',
      "ls_id-0": "a7f6b687-23e2-4ba3-9007-b814dd547c14",
      "ncp/subnet-0": "10.90.142.0/24",
      "openshift.io/description":
        "Namespaces for pen tester access Feb 27 - Mar 14 2023",
      "openshift.io/display-name": "Pen Test 2023 (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c38,c7",
      "openshift.io/sa.scc.supplemental-groups": "1001420000/10000",
      "openshift.io/sa.scc.uid-range": "1001420000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-21T21:06:25Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "d72c9c",
      environment: "tools",
      "kubernetes.io/metadata.name": "d72c9c-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "d72c9c",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.8.2",
      profile_id: "1099",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "d72c9c-tools",
    resourceVersion: "432938252",
    uid: "2796d466-3390-456d-9849-3ae124357b62"
  },
  {
    annotations: {
      contacts:
        '[{"email": "michael.shire@arctiq.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "michaelshire"}, {"email": "justin@justinpye.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "j-pye"}, {"email": "olena.mitovska@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "mitovskaol"}]',
      "ls_id-0": "27ff84a1-282c-4690-8d59-d084e116c7c1",
      "ncp/subnet-0": "10.90.92.0/24",
      "openshift.io/description": "A sandbox project set for Arctiq Team",
      "openshift.io/display-name": "arctiq Sandbox (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c31,c0",
      "openshift.io/sa.scc.supplemental-groups": "1000930000/10000",
      "openshift.io/sa.scc.uid-range": "1000930000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-09-14T20:40:02Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      environment: "dev",
      "kubernetes.io/metadata.name": "e595b8-dev",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "e595b8",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.8.2",
      profile_id: "514",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "e595b8-dev",
    resourceVersion: "432938476",
    uid: "d7b2cc0f-cebe-4702-85d6-ace6fe3bfaf7"
  },
  {
    annotations: {
      contacts:
        '[{"email": "michael.shire@arctiq.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "michaelshire"}, {"email": "justin@justinpye.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "j-pye"}, {"email": "olena.mitovska@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "mitovskaol"}]',
      "ls_id-0": "6b84efa6-531a-430c-a0e3-02a3a3211916",
      "ncp/subnet-0": "10.90.94.0/24",
      "openshift.io/description": "A sandbox project set for Arctiq Team",
      "openshift.io/display-name": "arctiq Sandbox (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c31,c10",
      "openshift.io/sa.scc.supplemental-groups": "1000950000/10000",
      "openshift.io/sa.scc.uid-range": "1000950000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-09-14T20:40:02Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      environment: "prod",
      "kubernetes.io/metadata.name": "e595b8-prod",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "e595b8",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.8.2",
      profile_id: "514",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "e595b8-prod",
    resourceVersion: "432938515",
    uid: "41bdd149-2276-4d11-9fa9-5dd9538ae6f8"
  },
  {
    annotations: {
      contacts:
        '[{"email": "michael.shire@arctiq.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "michaelshire"}, {"email": "justin@justinpye.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "j-pye"}, {"email": "olena.mitovska@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "mitovskaol"}]',
      "ls_id-0": "33f71d70-c041-44a3-bc73-4af019a50424",
      "ncp/subnet-0": "10.90.95.0/24",
      "openshift.io/description": "A sandbox project set for Arctiq Team",
      "openshift.io/display-name": "arctiq Sandbox (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c30,c25",
      "openshift.io/sa.scc.supplemental-groups": "1000920000/10000",
      "openshift.io/sa.scc.uid-range": "1000920000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-09-14T20:40:02Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      environment: "test",
      "kubernetes.io/metadata.name": "e595b8-test",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "e595b8",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.8.2",
      profile_id: "514",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "e595b8-test",
    resourceVersion: "432938551",
    uid: "ddae0a62-be6f-4767-863b-7f49afa4f95a"
  },
  {
    annotations: {
      contacts:
        '[{"email": "michael.shire@arctiq.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "michaelshire"}, {"email": "justin@justinpye.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "j-pye"}, {"email": "olena.mitovska@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "mitovskaol"}]',
      "ls_id-0": "4908baf8-4189-460c-b620-3961f1b1bb59",
      "ncp/extpoolid": "OCP-SNAT-Pool",
      "ncp/no_snat": "False",
      "ncp/snat_ip": "142.34.215.168",
      "ncp/snat_ip_status": "IP_ALLOCATED_SUCCESSFULLY",
      "ncp/snat_pool": "OCP-SNAT-Pool",
      "ncp/subnet-0": "10.90.93.0/24",
      "openshift.io/description": "A sandbox project set for Arctiq Team",
      "openshift.io/display-name": "arctiq Sandbox (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c31,c5",
      "openshift.io/sa.scc.supplemental-groups": "1000940000/10000",
      "openshift.io/sa.scc.uid-range": "1000940000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-09-14T20:40:02Z",
    labels: {
      cpu_quota: "cpu-request-2-limit-4",
      environment: "tools",
      "kubernetes.io/metadata.name": "e595b8-tools",
      memory_quota: "memory-request-8-limit-16",
      ministry_id: "CITZ",
      name: "e595b8",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.8.2",
      profile_id: "514",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "e595b8-tools",
    resourceVersion: "432938598",
    uid: "69cb63ff-e019-4774-ba6c-b67eddbd66c6"
  },
  {
    annotations: {
      contacts:
        '[{"email": "alexander.carmichael@gov.bc.ca", "role": "owner"}, {"email": "ian.1.watts@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"alexander.carmichael@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"ian.1.watts@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"This is a test of provisioner updates for KLAB2. Edited for testing editing","openshift.io/display-name":"KLAB2 Test (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"f35ba8","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"AEST","name":"f35ba8","profile_id":"643ddd6128b59683a045bb47","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"f35ba8-dev"}}\n',
      "ls_id-0": "0e6b3094-b000-44d4-bece-a2dacbf196a2",
      "ncp/subnet-0": "10.90.121.0/24",
      "openshift.io/description":
        "This is a test of provisioner updates for KLAB2. Edited for testing editing",
      "openshift.io/display-name": "KLAB2 Test (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c35,c10",
      "openshift.io/sa.scc.supplemental-groups": "1001210000/10000",
      "openshift.io/sa.scc.uid-range": "1001210000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-09-19T18:23:42Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "f35ba8",
      environment: "dev",
      "kubernetes.io/metadata.name": "f35ba8-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "AEST",
      name: "f35ba8",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.8.2",
      profile_id: "643ddd6128b59683a045bb47",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "f35ba8-dev",
    resourceVersion: "438286910",
    uid: "db48e9b4-17c3-48a1-abdf-ae50a985f0dd"
  },
  {
    annotations: {
      contacts:
        '[{"email": "alexander.carmichael@gov.bc.ca", "role": "owner"}, {"email": "ian.1.watts@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"alexander.carmichael@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"ian.1.watts@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"This is a test of provisioner updates for KLAB2. Edited for testing editing","openshift.io/display-name":"KLAB2 Test (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"f35ba8","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"AEST","name":"f35ba8","profile_id":"643ddd6128b59683a045bb47","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"f35ba8-prod"}}\n',
      "ls_id-0": "a528114e-1c88-4449-9bd3-593292f32f61",
      "ncp/subnet-0": "10.90.118.0/24",
      "openshift.io/description":
        "This is a test of provisioner updates for KLAB2. Edited for testing editing",
      "openshift.io/display-name": "KLAB2 Test (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c34,c29",
      "openshift.io/sa.scc.supplemental-groups": "1001180000/10000",
      "openshift.io/sa.scc.uid-range": "1001180000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-09-19T18:23:42Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "f35ba8",
      environment: "prod",
      "kubernetes.io/metadata.name": "f35ba8-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "AEST",
      name: "f35ba8",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.8.2",
      profile_id: "643ddd6128b59683a045bb47",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "f35ba8-prod",
    resourceVersion: "438286912",
    uid: "bf6b583b-e3ce-4a18-b2b4-88c197d624f3"
  },
  {
    annotations: {
      contacts:
        '[{"email": "alexander.carmichael@gov.bc.ca", "role": "owner"}, {"email": "ian.1.watts@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"alexander.carmichael@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"ian.1.watts@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"This is a test of provisioner updates for KLAB2. Edited for testing editing","openshift.io/display-name":"KLAB2 Test (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"f35ba8","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"AEST","name":"f35ba8","profile_id":"643ddd6128b59683a045bb47","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"f35ba8-test"}}\n',
      "ls_id-0": "c6a8078e-fd4b-4683-a0b7-f9f823d65f95",
      "ncp/subnet-0": "10.90.123.0/24",
      "openshift.io/description":
        "This is a test of provisioner updates for KLAB2. Edited for testing editing",
      "openshift.io/display-name": "KLAB2 Test (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c35,c15",
      "openshift.io/sa.scc.supplemental-groups": "1001220000/10000",
      "openshift.io/sa.scc.uid-range": "1001220000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-09-19T18:23:42Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "f35ba8",
      environment: "test",
      "kubernetes.io/metadata.name": "f35ba8-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "AEST",
      name: "f35ba8",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.8.2",
      profile_id: "643ddd6128b59683a045bb47",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "f35ba8-test",
    resourceVersion: "438286913",
    uid: "695ea93b-4588-4748-a943-397c0a90b670"
  },
  {
    annotations: {
      contacts:
        '[{"email": "alexander.carmichael@gov.bc.ca", "role": "owner"}, {"email": "ian.1.watts@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"alexander.carmichael@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"ian.1.watts@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"This is a test of provisioner updates for KLAB2. Edited for testing editing","openshift.io/display-name":"KLAB2 Test (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"f35ba8","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"AEST","name":"f35ba8","profile_id":"643ddd6128b59683a045bb47","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"f35ba8-tools"}}\n',
      "ls_id-0": "886f980e-5ffc-4a87-bd87-74dcb0d494ea",
      "ncp/snat_ip_status": "IP_ALLOCATED_SUCCESSFULLY",
      "ncp/subnet-0": "10.90.120.0/24",
      "openshift.io/description":
        "This is a test of provisioner updates for KLAB2. Edited for testing editing",
      "openshift.io/display-name": "KLAB2 Test (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c35,c5",
      "openshift.io/sa.scc.supplemental-groups": "1001200000/10000",
      "openshift.io/sa.scc.uid-range": "1001200000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-09-19T18:23:42Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "f35ba8",
      environment: "tools",
      "kubernetes.io/metadata.name": "f35ba8-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "AEST",
      name: "f35ba8",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.8.2",
      profile_id: "643ddd6128b59683a045bb47",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "f35ba8-tools",
    resourceVersion: "438286974",
    uid: "3ed32876-eaae-4269-bce8-a1f21fe75add"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "kevin.batke@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}]',
      "ls_id-0": "052166f5-578c-4700-9275-c8e364c28e32",
      "ncp/subnet-0": "10.90.98.0/24",
      "openshift.io/description": "To be updated",
      "openshift.io/display-name": "JBOSS OpenShift Operator POC (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c31,c20",
      "openshift.io/sa.scc.supplemental-groups": "1000970000/10000",
      "openshift.io/sa.scc.uid-range": "1000970000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-09-14T20:40:11Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      environment: "dev",
      "kubernetes.io/metadata.name": "fbca9a-dev",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "AG",
      name: "fbca9a",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.8.2",
      profile_id: "510",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "fbca9a-dev",
    resourceVersion: "432939075",
    uid: "ddf96a56-18ba-4c6b-b684-b9c5706abd90"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "kevin.batke@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}]',
      "ls_id-0": "0cd8ac5b-5cb7-4655-8c33-dbafac5e66fb",
      "ncp/subnet-0": "10.90.96.0/24",
      "openshift.io/description": "To be updated",
      "openshift.io/display-name": "JBOSS OpenShift Operator POC (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c31,c25",
      "openshift.io/sa.scc.supplemental-groups": "1000980000/10000",
      "openshift.io/sa.scc.uid-range": "1000980000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-09-14T20:40:11Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      environment: "prod",
      "kubernetes.io/metadata.name": "fbca9a-prod",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "AG",
      name: "fbca9a",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.8.2",
      profile_id: "510",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "fbca9a-prod",
    resourceVersion: "432939116",
    uid: "b774382d-9701-4e96-b4e8-258b820e6cfa"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "kevin.batke@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}]',
      "ls_id-0": "69900048-0424-48e8-9ca9-ad5589376392",
      "ncp/subnet-0": "10.90.99.0/24",
      "openshift.io/description": "To be updated",
      "openshift.io/display-name": "JBOSS OpenShift Operator POC (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c31,c30",
      "openshift.io/sa.scc.supplemental-groups": "1000990000/10000",
      "openshift.io/sa.scc.uid-range": "1000990000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-09-14T20:40:12Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      environment: "test",
      "kubernetes.io/metadata.name": "fbca9a-test",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "AG",
      name: "fbca9a",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.8.2",
      profile_id: "510",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "fbca9a-test",
    resourceVersion: "432939153",
    uid: "5b483b54-2a0f-4c12-8929-a2ea9b18a61b"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "kevin.batke@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}]',
      "ls_id-0": "129380db-c3ca-484c-868a-902695553778",
      "ncp/subnet-0": "10.90.97.0/24",
      "openshift.io/description": "To be updated",
      "openshift.io/display-name": "JBOSS OpenShift Operator POC (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c33,c27",
      "openshift.io/sa.scc.supplemental-groups": "1001110000/10000",
      "openshift.io/sa.scc.uid-range": "1001110000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-09-16T17:25:28Z",
    labels: {
      cpu_quota: "cpu-request-2-limit-4",
      environment: "tools",
      "kubernetes.io/metadata.name": "fbca9a-tools",
      memory_quota: "memory-request-8-limit-16",
      ministry_id: "AG",
      name: "fbca9a",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.8.2",
      profile_id: "510",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "fbca9a-tools",
    resourceVersion: "432939194",
    uid: "59874947-0c48-4d18-ba3f-de5fad39f54b"
  }
];

module.exports = { data };
