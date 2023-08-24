const data = [
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "role": "owner"}, {"email": "oamar.kanji@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"test","openshift.io/display-name":"test (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"a0fe57","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"HLTH","name":"a0fe57","profile_id":"64268bddf4709bc9e99c88da","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"a0fe57-dev"}}\n',
      "openshift.io/description": "test",
      "openshift.io/display-name": "test (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c61,c20",
      "openshift.io/sa.scc.supplemental-groups": "1003700000/10000",
      "openshift.io/sa.scc.uid-range": "1003700000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-30T17:48:48Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "a0fe57",
      environment: "dev",
      "kubernetes.io/metadata.name": "a0fe57-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "HLTH",
      name: "a0fe57",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "64268bddf4709bc9e99c88da",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "a0fe57-dev",
    resourceVersion: "1847878771",
    uid: "c05e0d67-46db-4a47-a271-0e77a5f628ea"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "role": "owner"}, {"email": "oamar.kanji@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"test","openshift.io/display-name":"test (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"a0fe57","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"HLTH","name":"a0fe57","profile_id":"64268bddf4709bc9e99c88da","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"a0fe57-prod"}}\n',
      "openshift.io/description": "test",
      "openshift.io/display-name": "test (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c61,c15",
      "openshift.io/sa.scc.supplemental-groups": "1003690000/10000",
      "openshift.io/sa.scc.uid-range": "1003690000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-30T17:48:48Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "a0fe57",
      environment: "prod",
      "kubernetes.io/metadata.name": "a0fe57-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "HLTH",
      name: "a0fe57",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "64268bddf4709bc9e99c88da",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "a0fe57-prod",
    resourceVersion: "1847878770",
    uid: "342582f1-8cd2-4173-b242-d6491f0b926b"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "role": "owner"}, {"email": "oamar.kanji@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"test","openshift.io/display-name":"test (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"a0fe57","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"HLTH","name":"a0fe57","profile_id":"64268bddf4709bc9e99c88da","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"a0fe57-test"}}\n',
      "openshift.io/description": "test",
      "openshift.io/display-name": "test (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c61,c25",
      "openshift.io/sa.scc.supplemental-groups": "1003710000/10000",
      "openshift.io/sa.scc.uid-range": "1003710000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-30T17:48:48Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "a0fe57",
      environment: "test",
      "kubernetes.io/metadata.name": "a0fe57-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "HLTH",
      name: "a0fe57",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "64268bddf4709bc9e99c88da",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "a0fe57-test",
    resourceVersion: "1847878769",
    uid: "88eee24c-1b7d-4c8a-ada0-42f388cc4c5a"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "role": "owner"}, {"email": "oamar.kanji@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"test","openshift.io/display-name":"test (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"a0fe57","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"HLTH","name":"a0fe57","profile_id":"64268bddf4709bc9e99c88da","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"a0fe57-tools"}}\n',
      "openshift.io/description": "test",
      "openshift.io/display-name": "test (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c61,c30",
      "openshift.io/sa.scc.supplemental-groups": "1003720000/10000",
      "openshift.io/sa.scc.uid-range": "1003720000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-30T17:48:48Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "a0fe57",
      environment: "tools",
      "kubernetes.io/metadata.name": "a0fe57-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "HLTH",
      name: "a0fe57",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "64268bddf4709bc9e99c88da",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "a0fe57-tools",
    resourceVersion: "1847878772",
    uid: "c4ca87c5-183b-45cd-905d-74da4c221245"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "okanji"}, {"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "okanji"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"okanji\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"okanji\\"}]","openshift.io/description":"test","openshift.io/display-name":"test (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"a1a76f","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"PSA","name":"a1a76f","profile_id":"63a1030b2d79123031dfd6ed","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"a1a76f-dev"}}\n',
      "openshift.io/description": "test",
      "openshift.io/display-name": "test (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c38,c32",
      "openshift.io/sa.scc.supplemental-groups": "1001470000/10000",
      "openshift.io/sa.scc.uid-range": "1001470000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-12-20T00:38:45Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "a1a76f",
      environment: "dev",
      "kubernetes.io/metadata.name": "a1a76f-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "PSA",
      name: "a1a76f",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63a1030b2d79123031dfd6ed",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "a1a76f-dev",
    resourceVersion: "1809646145",
    uid: "16c7febe-eb6c-4126-85b2-64964934275f"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "okanji"}, {"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "okanji"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"okanji\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"okanji\\"}]","openshift.io/description":"test","openshift.io/display-name":"test (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"a1a76f","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"PSA","name":"a1a76f","profile_id":"63a1030b2d79123031dfd6ed","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"a1a76f-prod"}}\n',
      "openshift.io/description": "test",
      "openshift.io/display-name": "test (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c40,c15",
      "openshift.io/sa.scc.supplemental-groups": "1001590000/10000",
      "openshift.io/sa.scc.uid-range": "1001590000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-12-20T00:38:45Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "a1a76f",
      environment: "prod",
      "kubernetes.io/metadata.name": "a1a76f-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "PSA",
      name: "a1a76f",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63a1030b2d79123031dfd6ed",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "a1a76f-prod",
    resourceVersion: "1809646164",
    uid: "e260fe52-dadf-4e09-b440-52c1c3075f36"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "okanji"}, {"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "okanji"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"okanji\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"okanji\\"}]","openshift.io/description":"test","openshift.io/display-name":"test (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"a1a76f","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"PSA","name":"a1a76f","profile_id":"63a1030b2d79123031dfd6ed","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"a1a76f-test"}}\n',
      "openshift.io/description": "test",
      "openshift.io/display-name": "test (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c40,c35",
      "openshift.io/sa.scc.supplemental-groups": "1001630000/10000",
      "openshift.io/sa.scc.uid-range": "1001630000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-12-20T00:38:45Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "a1a76f",
      environment: "test",
      "kubernetes.io/metadata.name": "a1a76f-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "PSA",
      name: "a1a76f",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63a1030b2d79123031dfd6ed",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "a1a76f-test",
    resourceVersion: "1809646181",
    uid: "c2d787b6-af93-4efa-b307-4f31cf0470eb"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "okanji"}, {"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "okanji"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"okanji\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"okanji\\"}]","openshift.io/description":"test","openshift.io/display-name":"test (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"a1a76f","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"PSA","name":"a1a76f","profile_id":"63a1030b2d79123031dfd6ed","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"a1a76f-tools"}}\n',
      "openshift.io/description": "test",
      "openshift.io/display-name": "test (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c40,c20",
      "openshift.io/sa.scc.supplemental-groups": "1001600000/10000",
      "openshift.io/sa.scc.uid-range": "1001600000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-12-20T00:38:45Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "a1a76f",
      environment: "tools",
      "kubernetes.io/metadata.name": "a1a76f-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "PSA",
      name: "a1a76f",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63a1030b2d79123031dfd6ed",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "a1a76f-tools",
    resourceVersion: "1809646198",
    uid: "b57f48f2-6b63-4418-9b10-098451d74b9a"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.bluemel@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "bluemel-gov"}, {"email": "Wade.Sharples@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "WadeSharples"}, {"email": "nick.corcoran@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "nickcorcoran"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ryan.bluemel@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"bluemel-gov\\"}, {\\"email\\": \\"Wade.Sharples@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"WadeSharples\\"}, {\\"email\\": \\"nick.corcoran@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"nickcorcoran\\"}]","openshift.io/description":"For testing out ACS policies before we break things in Silver. Nick and Ryan fun","openshift.io/display-name":"ACS Policy Testing (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"a2d0b0","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"AG","name":"a2d0b0","profile_id":"624","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"a2d0b0-dev"}}\n',
      "openshift.io/description":
        "For testing out ACS policies before we break things in Silver. Nick and Ryan fun",
      "openshift.io/display-name": "ACS Policy Testing (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c39,c29",
      "openshift.io/sa.scc.supplemental-groups": "1001540000/10000",
      "openshift.io/sa.scc.uid-range": "1001540000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-02-04T01:30:11Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "a2d0b0",
      environment: "dev",
      "kubernetes.io/metadata.name": "a2d0b0-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "AG",
      name: "a2d0b0",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "624",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "a2d0b0-dev",
    resourceVersion: "1809646216",
    uid: "f75e3dfd-0e58-40f2-8fdc-af694683baea"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.bluemel@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "bluemel-gov"}, {"email": "Wade.Sharples@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "WadeSharples"}, {"email": "nick.corcoran@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "nickcorcoran"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ryan.bluemel@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"bluemel-gov\\"}, {\\"email\\": \\"Wade.Sharples@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"WadeSharples\\"}, {\\"email\\": \\"nick.corcoran@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"nickcorcoran\\"}]","openshift.io/description":"For testing out ACS policies before we break things in Silver. Nick and Ryan fun","openshift.io/display-name":"ACS Policy Testing (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"a2d0b0","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"AG","name":"a2d0b0","profile_id":"624","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"a2d0b0-prod"}}\n',
      "openshift.io/description":
        "For testing out ACS policies before we break things in Silver. Nick and Ryan fun",
      "openshift.io/display-name": "ACS Policy Testing (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c39,c14",
      "openshift.io/sa.scc.supplemental-groups": "1001510000/10000",
      "openshift.io/sa.scc.uid-range": "1001510000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-02-04T01:30:11Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "a2d0b0",
      environment: "prod",
      "kubernetes.io/metadata.name": "a2d0b0-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "AG",
      name: "a2d0b0",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "624",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "a2d0b0-prod",
    resourceVersion: "1809646235",
    uid: "201e2fc8-0c03-4368-9fdb-1eda2c5caea1"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.bluemel@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "bluemel-gov"}, {"email": "Wade.Sharples@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "WadeSharples"}, {"email": "nick.corcoran@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "nickcorcoran"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ryan.bluemel@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"bluemel-gov\\"}, {\\"email\\": \\"Wade.Sharples@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"WadeSharples\\"}, {\\"email\\": \\"nick.corcoran@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"nickcorcoran\\"}]","openshift.io/description":"For testing out ACS policies before we break things in Silver. Nick and Ryan fun","openshift.io/display-name":"ACS Policy Testing (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"a2d0b0","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"AG","name":"a2d0b0","profile_id":"624","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"a2d0b0-test"}}\n',
      "openshift.io/description":
        "For testing out ACS policies before we break things in Silver. Nick and Ryan fun",
      "openshift.io/display-name": "ACS Policy Testing (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c39,c34",
      "openshift.io/sa.scc.supplemental-groups": "1001550000/10000",
      "openshift.io/sa.scc.uid-range": "1001550000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-02-04T01:30:11Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "a2d0b0",
      environment: "test",
      "kubernetes.io/metadata.name": "a2d0b0-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "AG",
      name: "a2d0b0",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "624",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "a2d0b0-test",
    resourceVersion: "1809646252",
    uid: "c8787df4-0cfb-4c2a-b8cf-74764b53105e"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ryan.bluemel@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "bluemel-gov"}, {"email": "Wade.Sharples@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "WadeSharples"}, {"email": "nick.corcoran@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "nickcorcoran"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ryan.bluemel@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"bluemel-gov\\"}, {\\"email\\": \\"Wade.Sharples@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"WadeSharples\\"}, {\\"email\\": \\"nick.corcoran@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"nickcorcoran\\"}]","openshift.io/description":"For testing out ACS policies before we break things in Silver. Nick and Ryan fun","openshift.io/display-name":"ACS Policy Testing (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"a2d0b0","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"AG","name":"a2d0b0","profile_id":"624","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"a2d0b0-tools"}}\n',
      "openshift.io/description":
        "For testing out ACS policies before we break things in Silver. Nick and Ryan fun",
      "openshift.io/display-name": "ACS Policy Testing (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c39,c24",
      "openshift.io/sa.scc.supplemental-groups": "1001530000/10000",
      "openshift.io/sa.scc.uid-range": "1001530000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-02-04T01:30:11Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "a2d0b0",
      environment: "tools",
      "kubernetes.io/metadata.name": "a2d0b0-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "AG",
      name: "a2d0b0",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "624",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "a2d0b0-tools",
    resourceVersion: "1809646271",
    uid: "8a35d6f1-5d57-4e60-b07b-c28e7a720da9"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}, {"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"test edit","openshift.io/display-name":"test (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"a34ef4","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"AG","name":"a34ef4","profile_id":"63fd4675b782ae6e5f722c90","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"a34ef4-dev"}}\n',
      "openshift.io/description": "test edit",
      "openshift.io/display-name": "test (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c51,c10",
      "openshift.io/sa.scc.supplemental-groups": "1002570000/10000",
      "openshift.io/sa.scc.uid-range": "1002570000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-15T23:11:21Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "a34ef4",
      environment: "dev",
      "kubernetes.io/metadata.name": "a34ef4-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "AG",
      name: "a34ef4",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63fd4675b782ae6e5f722c90",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "a34ef4-dev",
    resourceVersion: "1809646293",
    uid: "35d20774-00f2-4d00-a5a8-c76bcdcce38b"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}, {"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"test edit","openshift.io/display-name":"test (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"a34ef4","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"AG","name":"a34ef4","profile_id":"63fd4675b782ae6e5f722c90","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"a34ef4-prod"}}\n',
      "openshift.io/description": "test edit",
      "openshift.io/display-name": "test (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c51,c5",
      "openshift.io/sa.scc.supplemental-groups": "1002560000/10000",
      "openshift.io/sa.scc.uid-range": "1002560000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-15T23:11:21Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "a34ef4",
      environment: "prod",
      "kubernetes.io/metadata.name": "a34ef4-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "AG",
      name: "a34ef4",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63fd4675b782ae6e5f722c90",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "a34ef4-prod",
    resourceVersion: "1809646308",
    uid: "7639e220-f242-488d-8db4-b5784a44197e"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}, {"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"test edit","openshift.io/display-name":"test (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"a34ef4","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"AG","name":"a34ef4","profile_id":"63fd4675b782ae6e5f722c90","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"a34ef4-test"}}\n',
      "openshift.io/description": "test edit",
      "openshift.io/display-name": "test (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c51,c15",
      "openshift.io/sa.scc.supplemental-groups": "1002580000/10000",
      "openshift.io/sa.scc.uid-range": "1002580000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-15T23:11:21Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "a34ef4",
      environment: "test",
      "kubernetes.io/metadata.name": "a34ef4-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "AG",
      name: "a34ef4",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63fd4675b782ae6e5f722c90",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "a34ef4-test",
    resourceVersion: "1809646324",
    uid: "ae522a15-8349-48c9-80b8-49fa1ec3ed51"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}, {"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"test edit","openshift.io/display-name":"test (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"a34ef4","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"AG","name":"a34ef4","profile_id":"63fd4675b782ae6e5f722c90","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"a34ef4-tools"}}\n',
      "openshift.io/description": "test edit",
      "openshift.io/display-name": "test (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c50,c10",
      "openshift.io/sa.scc.supplemental-groups": "1002470000/10000",
      "openshift.io/sa.scc.uid-range": "1002470000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-15T23:11:21Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "a34ef4",
      environment: "tools",
      "kubernetes.io/metadata.name": "a34ef4-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "AG",
      name: "a34ef4",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63fd4675b782ae6e5f722c90",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "a34ef4-tools",
    resourceVersion: "1809646340",
    uid: "4926284e-642e-43cb-9d7b-74da6aa813ee"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "okanji"}, {"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "okanji"}, {"email": "oamarkanji@gmail.com", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "okanji"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"okanji\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"okanji\\"}, {\\"email\\": \\"oamarkanji@gmail.com\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"okanji\\"}]","openshift.io/description":"This project has been edited","openshift.io/display-name":"Oamar New test provisioner edit request (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"a59936","environment":"dev","memory_quota":"memory-request-4-limit-8","ministry_id":"PSA","name":"a59936","profile_id":"63cdca67990baeb2e97cbabd","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-2"},"name":"a59936-dev"}}\n',
      "openshift.io/description": "This project has been edited",
      "openshift.io/display-name":
        "Oamar New test provisioner edit request (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c45,c35",
      "openshift.io/sa.scc.supplemental-groups": "1002050000/10000",
      "openshift.io/sa.scc.uid-range": "1002050000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-22T23:39:56Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "a59936",
      environment: "dev",
      "kubernetes.io/metadata.name": "a59936-dev",
      memory_quota: "memory-request-4-limit-8",
      ministry_id: "PSA",
      name: "a59936",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63cdca67990baeb2e97cbabd",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-2"
    },
    name: "a59936-dev",
    resourceVersion: "1809646364",
    uid: "17065c50-d3e6-4ee4-83de-3c7636e11975"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "okanji"}, {"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "okanji"}, {"email": "oamarkanji@gmail.com", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "okanji"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"okanji\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"okanji\\"}, {\\"email\\": \\"oamarkanji@gmail.com\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"okanji\\"}]","openshift.io/description":"This project has been edited","openshift.io/display-name":"Oamar New test provisioner edit request (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"a59936","environment":"prod","memory_quota":"memory-request-4-limit-8","ministry_id":"PSA","name":"a59936","profile_id":"63cdca67990baeb2e97cbabd","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-2"},"name":"a59936-prod"}}\n',
      "openshift.io/description": "This project has been edited",
      "openshift.io/display-name":
        "Oamar New test provisioner edit request (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c45,c40",
      "openshift.io/sa.scc.supplemental-groups": "1002060000/10000",
      "openshift.io/sa.scc.uid-range": "1002060000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-22T23:39:56Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "a59936",
      environment: "prod",
      "kubernetes.io/metadata.name": "a59936-prod",
      memory_quota: "memory-request-4-limit-8",
      ministry_id: "PSA",
      name: "a59936",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63cdca67990baeb2e97cbabd",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-2"
    },
    name: "a59936-prod",
    resourceVersion: "1809646380",
    uid: "ca5980e8-ebfc-4bcf-a37d-776345e6a00f"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "okanji"}, {"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "okanji"}, {"email": "oamarkanji@gmail.com", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "okanji"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"okanji\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"okanji\\"}, {\\"email\\": \\"oamarkanji@gmail.com\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"okanji\\"}]","openshift.io/description":"This project has been edited","openshift.io/display-name":"Oamar New test provisioner edit request (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"a59936","environment":"test","memory_quota":"memory-request-4-limit-8","ministry_id":"PSA","name":"a59936","profile_id":"63cdca67990baeb2e97cbabd","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-2"},"name":"a59936-test"}}\n',
      "openshift.io/description": "This project has been edited",
      "openshift.io/display-name":
        "Oamar New test provisioner edit request (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c45,c30",
      "openshift.io/sa.scc.supplemental-groups": "1002040000/10000",
      "openshift.io/sa.scc.uid-range": "1002040000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-22T23:39:56Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "a59936",
      environment: "test",
      "kubernetes.io/metadata.name": "a59936-test",
      memory_quota: "memory-request-4-limit-8",
      ministry_id: "PSA",
      name: "a59936",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63cdca67990baeb2e97cbabd",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-2"
    },
    name: "a59936-test",
    resourceVersion: "1809646401",
    uid: "ac447350-06af-4a52-92f1-8cc70f763714"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "okanji"}, {"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "okanji"}, {"email": "oamarkanji@gmail.com", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "okanji"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"okanji\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"okanji\\"}, {\\"email\\": \\"oamarkanji@gmail.com\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"okanji\\"}]","openshift.io/description":"This project has been edited","openshift.io/display-name":"Oamar New test provisioner edit request (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"a59936","environment":"tools","memory_quota":"memory-request-4-limit-8","ministry_id":"PSA","name":"a59936","profile_id":"63cdca67990baeb2e97cbabd","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-2"},"name":"a59936-tools"}}\n',
      "openshift.io/description": "This project has been edited",
      "openshift.io/display-name":
        "Oamar New test provisioner edit request (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c45,c10",
      "openshift.io/sa.scc.supplemental-groups": "1002000000/10000",
      "openshift.io/sa.scc.uid-range": "1002000000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-22T23:39:56Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "a59936",
      environment: "tools",
      "kubernetes.io/metadata.name": "a59936-tools",
      memory_quota: "memory-request-4-limit-8",
      ministry_id: "PSA",
      name: "a59936",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63cdca67990baeb2e97cbabd",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-2"
    },
    name: "a59936-tools",
    resourceVersion: "1809646418",
    uid: "535e5fd7-10e4-462e-aad7-3dfc2c9e08c8"
  },
  {
    annotations: {
      contacts:
        '[{"email": "david.1.agahchen@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "agahchen"}, {"email": "jennifer.dowd@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "jennifer-dowd"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"david.1.agahchen@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"agahchen\\"}, {\\"email\\": \\"jennifer.dowd@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"jennifer-dowd\\"}]","openshift.io/description":"A test project created for the AG Integration Team to test out RedHat Integration Suite products in the LAB environment.","openshift.io/display-name":"RedHat Integration Suite Test (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"ac13ae","environment":"dev","memory_quota":"memory-request-16-limit-32","ministry_id":"AG","name":"ac13ae","profile_id":"592","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"ac13ae-dev"}}\n',
      "openshift.io/description":
        "A test project created for the AG Integration Team to test out RedHat Integration Suite products in the LAB environment.",
      "openshift.io/display-name": "RedHat Integration Suite Test (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c36,c0",
      "openshift.io/sa.scc.supplemental-groups": "1001260000/10000",
      "openshift.io/sa.scc.uid-range": "1001260000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-11-04T21:58:48Z",
    labels: {
      "argocd.argoproj.io/managed-by": "ac13ae-tools",
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "ac13ae",
      environment: "dev",
      "kubernetes.io/metadata.name": "ac13ae-dev",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "AG",
      name: "ac13ae",
      "olm.operatorgroup.uid/306c1ec0-6578-4f85-b9fd-be1e58251330": "",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "openshift.io/cluster-monitoring": "true",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "592",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "ac13ae-dev",
    resourceVersion: "1809646429",
    uid: "041634bd-e606-4fa4-80de-be462af90527"
  },
  {
    annotations: {
      contacts:
        '[{"email": "david.1.agahchen@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "agahchen"}, {"email": "jennifer.dowd@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "jennifer-dowd"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"david.1.agahchen@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"agahchen\\"}, {\\"email\\": \\"jennifer.dowd@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"jennifer-dowd\\"}]","openshift.io/description":"A test project created for the AG Integration Team to test out RedHat Integration Suite products in the LAB environment.","openshift.io/display-name":"RedHat Integration Suite Test (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"ac13ae","environment":"prod","memory_quota":"memory-request-16-limit-32","ministry_id":"AG","name":"ac13ae","profile_id":"592","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"ac13ae-prod"}}\n',
      "openshift.io/description":
        "A test project created for the AG Integration Team to test out RedHat Integration Suite products in the LAB environment.",
      "openshift.io/display-name": "RedHat Integration Suite Test (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c36,c10",
      "openshift.io/sa.scc.supplemental-groups": "1001280000/10000",
      "openshift.io/sa.scc.uid-range": "1001280000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-11-04T21:58:48Z",
    labels: {
      "argocd.argoproj.io/managed-by": "ac13ae-tools",
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "ac13ae",
      environment: "prod",
      "kubernetes.io/metadata.name": "ac13ae-prod",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "AG",
      name: "ac13ae",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "592",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "ac13ae-prod",
    resourceVersion: "1809646449",
    uid: "8d6737f4-3d21-4fb5-a0b9-b37b042004a3"
  },
  {
    annotations: {
      contacts:
        '[{"email": "david.1.agahchen@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "agahchen"}, {"email": "jennifer.dowd@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "jennifer-dowd"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"david.1.agahchen@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"agahchen\\"}, {\\"email\\": \\"jennifer.dowd@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"jennifer-dowd\\"}]","openshift.io/description":"A test project created for the AG Integration Team to test out RedHat Integration Suite products in the LAB environment.","openshift.io/display-name":"RedHat Integration Suite Test (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"ac13ae","environment":"test","memory_quota":"memory-request-16-limit-32","ministry_id":"AG","name":"ac13ae","profile_id":"592","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"ac13ae-test"}}\n',
      "openshift.io/description":
        "A test project created for the AG Integration Team to test out RedHat Integration Suite products in the LAB environment.",
      "openshift.io/display-name": "RedHat Integration Suite Test (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c36,c15",
      "openshift.io/sa.scc.supplemental-groups": "1001290000/10000",
      "openshift.io/sa.scc.uid-range": "1001290000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-11-04T21:58:48Z",
    labels: {
      "argocd.argoproj.io/managed-by": "ac13ae-tools",
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "ac13ae",
      environment: "test",
      "kubernetes.io/metadata.name": "ac13ae-test",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "AG",
      name: "ac13ae",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "592",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "ac13ae-test",
    resourceVersion: "1809646463",
    uid: "6a9d16da-ae8d-411c-b98b-24c78a6276f1"
  },
  {
    annotations: {
      contacts:
        '[{"email": "david.1.agahchen@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "agahchen"}, {"email": "jennifer.dowd@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "jennifer-dowd"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"david.1.agahchen@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"agahchen\\"}, {\\"email\\": \\"jennifer.dowd@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"jennifer-dowd\\"}]","openshift.io/description":"A test project created for the AG Integration Team to test out RedHat Integration Suite products in the LAB environment.","openshift.io/display-name":"RedHat Integration Suite Test (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"ac13ae","environment":"tools","memory_quota":"memory-request-16-limit-32","ministry_id":"AG","name":"ac13ae","profile_id":"592","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"ac13ae-tools"}}\n',
      "openshift.io/description":
        "A test project created for the AG Integration Team to test out RedHat Integration Suite products in the LAB environment.",
      "openshift.io/display-name": "RedHat Integration Suite Test (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c36,c5",
      "openshift.io/sa.scc.supplemental-groups": "1001270000/10000",
      "openshift.io/sa.scc.uid-range": "1001270000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-11-04T21:58:48Z",
    labels: {
      "argocd.argoproj.io/managed-by": "ac13ae-tools",
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "ac13ae",
      environment: "tools",
      "kubernetes.io/metadata.name": "ac13ae-tools",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "AG",
      name: "ac13ae",
      "olm.operatorgroup.uid/117d2848-9b2d-42af-88c6-594f1e811bfb": "",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "592",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "ac13ae-tools",
    resourceVersion: "1809646483",
    uid: "4b013b91-f870-4350-9c7a-3c5c0dd2b8dc"
  },
  {
    annotations: {
      contacts:
        '[{"email": "alexandra.lloyd@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "alexandralloyd"}, {"email": "alexandra.lloyd@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "alexandralloyd"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"alexandra.lloyd@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"alexandralloyd\\"}, {\\"email\\": \\"alexandra.lloyd@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"alexandralloyd\\"}]","openshift.io/description":"3rd test with alexandra.lloyd@gov.bc.ca email","openshift.io/display-name":"Alex Test 3 (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"add23f","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"add23f","profile_id":"63cf224b184344042105f8d4","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"add23f-dev"}}\n',
      "openshift.io/description":
        "3rd test with alexandra.lloyd@gov.bc.ca email",
      "openshift.io/display-name": "Alex Test 3 (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c45,c0",
      "openshift.io/sa.scc.supplemental-groups": "1001980000/10000",
      "openshift.io/sa.scc.uid-range": "1001980000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-24T18:15:56Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "add23f",
      environment: "dev",
      "kubernetes.io/metadata.name": "add23f-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "add23f",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63cf224b184344042105f8d4",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "add23f-dev",
    resourceVersion: "1809646507",
    uid: "5b840783-70e3-4a04-a5ba-9fffd2f22cb9"
  },
  {
    annotations: {
      contacts:
        '[{"email": "alexandra.lloyd@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "alexandralloyd"}, {"email": "alexandra.lloyd@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "alexandralloyd"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"alexandra.lloyd@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"alexandralloyd\\"}, {\\"email\\": \\"alexandra.lloyd@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"alexandralloyd\\"}]","openshift.io/description":"3rd test with alexandra.lloyd@gov.bc.ca email","openshift.io/display-name":"Alex Test 3 (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"add23f","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"add23f","profile_id":"63cf224b184344042105f8d4","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"add23f-prod"}}\n',
      "openshift.io/description":
        "3rd test with alexandra.lloyd@gov.bc.ca email",
      "openshift.io/display-name": "Alex Test 3 (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c46,c45",
      "openshift.io/sa.scc.supplemental-groups": "1002160000/10000",
      "openshift.io/sa.scc.uid-range": "1002160000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-24T18:15:56Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "add23f",
      environment: "prod",
      "kubernetes.io/metadata.name": "add23f-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "add23f",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63cf224b184344042105f8d4",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "add23f-prod",
    resourceVersion: "1809646529",
    uid: "01b1da7c-720f-422b-bab6-282c5d0de71f"
  },
  {
    annotations: {
      contacts:
        '[{"email": "alexandra.lloyd@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "alexandralloyd"}, {"email": "alexandra.lloyd@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "alexandralloyd"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"alexandra.lloyd@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"alexandralloyd\\"}, {\\"email\\": \\"alexandra.lloyd@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"alexandralloyd\\"}]","openshift.io/description":"3rd test with alexandra.lloyd@gov.bc.ca email","openshift.io/display-name":"Alex Test 3 (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"add23f","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"add23f","profile_id":"63cf224b184344042105f8d4","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"add23f-test"}}\n',
      "openshift.io/description":
        "3rd test with alexandra.lloyd@gov.bc.ca email",
      "openshift.io/display-name": "Alex Test 3 (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c46,c40",
      "openshift.io/sa.scc.supplemental-groups": "1002150000/10000",
      "openshift.io/sa.scc.uid-range": "1002150000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-24T18:15:56Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "add23f",
      environment: "test",
      "kubernetes.io/metadata.name": "add23f-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "add23f",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63cf224b184344042105f8d4",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "add23f-test",
    resourceVersion: "1809646562",
    uid: "5ed37a6d-6caf-4538-a7e8-5b7e56388f78"
  },
  {
    annotations: {
      contacts:
        '[{"email": "alexandra.lloyd@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "alexandralloyd"}, {"email": "alexandra.lloyd@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "alexandralloyd"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"alexandra.lloyd@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"alexandralloyd\\"}, {\\"email\\": \\"alexandra.lloyd@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"alexandralloyd\\"}]","openshift.io/description":"3rd test with alexandra.lloyd@gov.bc.ca email","openshift.io/display-name":"Alex Test 3 (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"add23f","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"add23f","profile_id":"63cf224b184344042105f8d4","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"add23f-tools"}}\n',
      "openshift.io/description":
        "3rd test with alexandra.lloyd@gov.bc.ca email",
      "openshift.io/display-name": "Alex Test 3 (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c47,c4",
      "openshift.io/sa.scc.supplemental-groups": "1002170000/10000",
      "openshift.io/sa.scc.uid-range": "1002170000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-24T18:15:56Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "add23f",
      environment: "tools",
      "kubernetes.io/metadata.name": "add23f-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "add23f",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63cf224b184344042105f8d4",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "add23f-tools",
    resourceVersion: "1809646582",
    uid: "6c773aa7-bfe0-4782-aae6-3f76a021daac"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "okanji"}, {"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "okanji"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"okanji\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"okanji\\"}]","openshift.io/description":"test","openshift.io/display-name":"Provisioner test new (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"ae93f2","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"PSA","name":"ae93f2","profile_id":"63a106762d79123031dfd6ef","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"ae93f2-dev"}}\n',
      "openshift.io/description": "test",
      "openshift.io/display-name": "Provisioner test new (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c41,c10",
      "openshift.io/sa.scc.supplemental-groups": "1001660000/10000",
      "openshift.io/sa.scc.uid-range": "1001660000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-12-20T00:56:46Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "ae93f2",
      environment: "dev",
      "kubernetes.io/metadata.name": "ae93f2-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "PSA",
      name: "ae93f2",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63a106762d79123031dfd6ef",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "ae93f2-dev",
    resourceVersion: "1809646601",
    uid: "ce89c039-4932-4037-9448-d3f0ac5d35fa"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "okanji"}, {"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "okanji"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"okanji\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"okanji\\"}]","openshift.io/description":"test","openshift.io/display-name":"Provisioner test new (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"ae93f2","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"PSA","name":"ae93f2","profile_id":"63a106762d79123031dfd6ef","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"ae93f2-prod"}}\n',
      "openshift.io/description": "test",
      "openshift.io/display-name": "Provisioner test new (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c41,c5",
      "openshift.io/sa.scc.supplemental-groups": "1001650000/10000",
      "openshift.io/sa.scc.uid-range": "1001650000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-12-20T00:56:46Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "ae93f2",
      environment: "prod",
      "kubernetes.io/metadata.name": "ae93f2-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "PSA",
      name: "ae93f2",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63a106762d79123031dfd6ef",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "ae93f2-prod",
    resourceVersion: "1809646621",
    uid: "f4d81856-5c20-42ca-a315-dd7f47eed634"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "okanji"}, {"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "okanji"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"okanji\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"okanji\\"}]","openshift.io/description":"test","openshift.io/display-name":"Provisioner test new (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"ae93f2","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"PSA","name":"ae93f2","profile_id":"63a106762d79123031dfd6ef","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"ae93f2-test"}}\n',
      "openshift.io/description": "test",
      "openshift.io/display-name": "Provisioner test new (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c41,c15",
      "openshift.io/sa.scc.supplemental-groups": "1001670000/10000",
      "openshift.io/sa.scc.uid-range": "1001670000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-12-20T00:56:46Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "ae93f2",
      environment: "test",
      "kubernetes.io/metadata.name": "ae93f2-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "PSA",
      name: "ae93f2",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63a106762d79123031dfd6ef",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "ae93f2-test",
    resourceVersion: "1809646638",
    uid: "360349d8-76ae-4e00-a408-22f8de4efb93"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "okanji"}, {"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "okanji"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"okanji\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"okanji\\"}]","openshift.io/description":"test","openshift.io/display-name":"Provisioner test new (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"ae93f2","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"PSA","name":"ae93f2","profile_id":"63a106762d79123031dfd6ef","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"ae93f2-tools"}}\n',
      "openshift.io/description": "test",
      "openshift.io/display-name": "Provisioner test new (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c41,c0",
      "openshift.io/sa.scc.supplemental-groups": "1001640000/10000",
      "openshift.io/sa.scc.uid-range": "1001640000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-12-20T00:56:46Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "ae93f2",
      environment: "tools",
      "kubernetes.io/metadata.name": "ae93f2-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "PSA",
      name: "ae93f2",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63a106762d79123031dfd6ef",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "ae93f2-tools",
    resourceVersion: "1809646656",
    uid: "14516f48-b0c4-48e4-ac51-a3d9b611c3b0"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"test","openshift.io/display-name":"Oamar test edit (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"b19b25","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"FIN","name":"b19b25","profile_id":"63efc3bb5ef597568925c06e","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"b19b25-dev"}}\n',
      "openshift.io/description": "test",
      "openshift.io/display-name": "Oamar test edit (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c51,c30",
      "openshift.io/sa.scc.supplemental-groups": "1002610000/10000",
      "openshift.io/sa.scc.uid-range": "1002610000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-17T07:53:24Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "b19b25",
      environment: "dev",
      "kubernetes.io/metadata.name": "b19b25-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "FIN",
      name: "b19b25",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63efc3bb5ef597568925c06e",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "b19b25-dev",
    resourceVersion: "1809646711",
    uid: "5ae45ba7-ecff-41de-9558-b027f502471d"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"test","openshift.io/display-name":"Oamar test edit (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-1-limit-2","devops.gov.bc.ca/gitops-app":"b19b25","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"FIN","name":"b19b25","profile_id":"63efc3bb5ef597568925c06e","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"b19b25-prod"}}\n',
      "openshift.io/description": "test",
      "openshift.io/display-name": "Oamar test edit (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c51,c40",
      "openshift.io/sa.scc.supplemental-groups": "1002630000/10000",
      "openshift.io/sa.scc.uid-range": "1002630000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-17T07:53:24Z",
    labels: {
      cpu_quota: "cpu-request-1-limit-2",
      "devops.gov.bc.ca/gitops-app": "b19b25",
      environment: "prod",
      "kubernetes.io/metadata.name": "b19b25-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "FIN",
      name: "b19b25",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63efc3bb5ef597568925c06e",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "b19b25-prod",
    resourceVersion: "1809646730",
    uid: "55701e0d-6d8f-4e6c-9e52-e3fdf9970d6b"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"test","openshift.io/display-name":"Oamar test edit (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"b19b25","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"FIN","name":"b19b25","profile_id":"63efc3bb5ef597568925c06e","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"b19b25-test"}}\n',
      "openshift.io/description": "test",
      "openshift.io/display-name": "Oamar test edit (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c51,c35",
      "openshift.io/sa.scc.supplemental-groups": "1002620000/10000",
      "openshift.io/sa.scc.uid-range": "1002620000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-17T07:53:24Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "b19b25",
      environment: "test",
      "kubernetes.io/metadata.name": "b19b25-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "FIN",
      name: "b19b25",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63efc3bb5ef597568925c06e",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "b19b25-test",
    resourceVersion: "1809646752",
    uid: "09445b79-d3b6-4504-b9b6-7f4246599148"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"test","openshift.io/display-name":"Oamar test edit (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"b19b25","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"FIN","name":"b19b25","profile_id":"63efc3bb5ef597568925c06e","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"b19b25-tools"}}\n',
      "openshift.io/description": "test",
      "openshift.io/display-name": "Oamar test edit (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c51,c45",
      "openshift.io/sa.scc.supplemental-groups": "1002640000/10000",
      "openshift.io/sa.scc.uid-range": "1002640000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-17T07:53:24Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "b19b25",
      environment: "tools",
      "kubernetes.io/metadata.name": "b19b25-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "FIN",
      name: "b19b25",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63efc3bb5ef597568925c06e",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "b19b25-tools",
    resourceVersion: "1809646774",
    uid: "dbc48a4e-7920-4285-8a72-1bd2187ac73c"
  },
  {
    annotations: {
      contacts:
        '[{"email": "nick.corcoran@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "NickCorcoran"}, {"email": "alexandra.lloyd@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "alexandralloyd"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"nick.corcoran@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"NickCorcoran\\"}, {\\"email\\": \\"alexandra.lloyd@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"alexandralloyd\\"}]","openshift.io/description":"Logged in w/ Azure ID","openshift.io/display-name":"TestProject_Nick (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"b5f574","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"b5f574","profile_id":"63d0757c184344042105f8df","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"b5f574-dev"}}\n',
      "openshift.io/description": "Logged in w/ Azure ID",
      "openshift.io/display-name": "TestProject_Nick (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c48,c17",
      "openshift.io/sa.scc.supplemental-groups": "1002290000/10000",
      "openshift.io/sa.scc.uid-range": "1002290000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-25T00:26:03Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "b5f574",
      environment: "dev",
      "kubernetes.io/metadata.name": "b5f574-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "b5f574",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63d0757c184344042105f8df",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "b5f574-dev",
    resourceVersion: "1809646794",
    uid: "a40bd560-a76a-44fe-b939-1abfc0864e04"
  },
  {
    annotations: {
      contacts:
        '[{"email": "nick.corcoran@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "NickCorcoran"}, {"email": "alexandra.lloyd@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "alexandralloyd"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"nick.corcoran@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"NickCorcoran\\"}, {\\"email\\": \\"alexandra.lloyd@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"alexandralloyd\\"}]","openshift.io/description":"Logged in w/ Azure ID","openshift.io/display-name":"TestProject_Nick (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"b5f574","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"b5f574","profile_id":"63d0757c184344042105f8df","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"b5f574-prod"}}\n',
      "openshift.io/description": "Logged in w/ Azure ID",
      "openshift.io/display-name": "TestProject_Nick (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c48,c22",
      "openshift.io/sa.scc.supplemental-groups": "1002300000/10000",
      "openshift.io/sa.scc.uid-range": "1002300000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-25T00:26:03Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "b5f574",
      environment: "prod",
      "kubernetes.io/metadata.name": "b5f574-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "b5f574",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63d0757c184344042105f8df",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "b5f574-prod",
    resourceVersion: "1809646809",
    uid: "c61985d8-386e-4036-b82f-e17b48355f6e"
  },
  {
    annotations: {
      contacts:
        '[{"email": "nick.corcoran@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "NickCorcoran"}, {"email": "alexandra.lloyd@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "alexandralloyd"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"nick.corcoran@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"NickCorcoran\\"}, {\\"email\\": \\"alexandra.lloyd@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"alexandralloyd\\"}]","openshift.io/description":"Logged in w/ Azure ID","openshift.io/display-name":"TestProject_Nick (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"b5f574","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"b5f574","profile_id":"63d0757c184344042105f8df","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"b5f574-test"}}\n',
      "openshift.io/description": "Logged in w/ Azure ID",
      "openshift.io/display-name": "TestProject_Nick (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c48,c32",
      "openshift.io/sa.scc.supplemental-groups": "1002320000/10000",
      "openshift.io/sa.scc.uid-range": "1002320000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-25T00:26:03Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "b5f574",
      environment: "test",
      "kubernetes.io/metadata.name": "b5f574-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "b5f574",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63d0757c184344042105f8df",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "b5f574-test",
    resourceVersion: "1809646828",
    uid: "3e2debb5-bd10-400a-9724-b05cc092d540"
  },
  {
    annotations: {
      contacts:
        '[{"email": "nick.corcoran@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "NickCorcoran"}, {"email": "alexandra.lloyd@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "alexandralloyd"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"nick.corcoran@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"NickCorcoran\\"}, {\\"email\\": \\"alexandra.lloyd@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"alexandralloyd\\"}]","openshift.io/description":"Logged in w/ Azure ID","openshift.io/display-name":"TestProject_Nick (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"b5f574","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"b5f574","profile_id":"63d0757c184344042105f8df","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"b5f574-tools"}}\n',
      "openshift.io/description": "Logged in w/ Azure ID",
      "openshift.io/display-name": "TestProject_Nick (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c48,c27",
      "openshift.io/sa.scc.supplemental-groups": "1002310000/10000",
      "openshift.io/sa.scc.uid-range": "1002310000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-25T00:26:03Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "b5f574",
      environment: "tools",
      "kubernetes.io/metadata.name": "b5f574-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "b5f574",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63d0757c184344042105f8df",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "b5f574-tools",
    resourceVersion: "1809646842",
    uid: "ab724fcc-c9a2-460e-ba82-4db44109a3f0"
  },
  {
    annotations: {
      contacts:
        '[{"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "artem.kravchenko@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test Feb 24.4 Changed name, description, ministry","openshift.io/display-name":"Artem Test Feb 24.4 Changed name, description, ministry and again (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"b7f275","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"FIN","name":"b7f275","profile_id":"63f95b1870b61a324d498ebe","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"b7f275-dev"}}\n',
      "openshift.io/description":
        "Artem Test Feb 24.4 Changed name, description, ministry",
      "openshift.io/display-name":
        "Artem Test Feb 24.4 Changed name, description, ministry and again (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c54,c14",
      "openshift.io/sa.scc.supplemental-groups": "1002890000/10000",
      "openshift.io/sa.scc.uid-range": "1002890000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-24T23:40:55Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "b7f275",
      environment: "dev",
      "kubernetes.io/metadata.name": "b7f275-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "FIN",
      name: "b7f275",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63f95b1870b61a324d498ebe",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "b7f275-dev",
    resourceVersion: "1809646862",
    uid: "462991a5-9b9c-4daa-9f29-6e311cd0a793"
  },
  {
    annotations: {
      contacts:
        '[{"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "artem.kravchenko@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test Feb 24.4 Changed name, description, ministry","openshift.io/display-name":"Artem Test Feb 24.4 Changed name, description, ministry and again (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"b7f275","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"FIN","name":"b7f275","profile_id":"63f95b1870b61a324d498ebe","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"b7f275-prod"}}\n',
      "openshift.io/description":
        "Artem Test Feb 24.4 Changed name, description, ministry",
      "openshift.io/display-name":
        "Artem Test Feb 24.4 Changed name, description, ministry and again (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c54,c44",
      "openshift.io/sa.scc.supplemental-groups": "1002950000/10000",
      "openshift.io/sa.scc.uid-range": "1002950000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-24T23:40:55Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "b7f275",
      environment: "prod",
      "kubernetes.io/metadata.name": "b7f275-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "FIN",
      name: "b7f275",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63f95b1870b61a324d498ebe",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "b7f275-prod",
    resourceVersion: "1809646883",
    uid: "b94e470c-bcaf-4b3e-b9bf-debdc9ecabc8"
  },
  {
    annotations: {
      contacts:
        '[{"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "artem.kravchenko@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test Feb 24.4 Changed name, description, ministry","openshift.io/display-name":"Artem Test Feb 24.4 Changed name, description, ministry and again (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"b7f275","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"FIN","name":"b7f275","profile_id":"63f95b1870b61a324d498ebe","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"b7f275-test"}}\n',
      "openshift.io/description":
        "Artem Test Feb 24.4 Changed name, description, ministry",
      "openshift.io/display-name":
        "Artem Test Feb 24.4 Changed name, description, ministry and again (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c54,c34",
      "openshift.io/sa.scc.supplemental-groups": "1002930000/10000",
      "openshift.io/sa.scc.uid-range": "1002930000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-24T23:40:55Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "b7f275",
      environment: "test",
      "kubernetes.io/metadata.name": "b7f275-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "FIN",
      name: "b7f275",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63f95b1870b61a324d498ebe",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "b7f275-test",
    resourceVersion: "1809646903",
    uid: "18c16d2f-1ead-4156-98c6-61802de1485f"
  },
  {
    annotations: {
      contacts:
        '[{"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "artem.kravchenko@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test Feb 24.4 Changed name, description, ministry","openshift.io/display-name":"Artem Test Feb 24.4 Changed name, description, ministry and again (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"b7f275","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"FIN","name":"b7f275","profile_id":"63f95b1870b61a324d498ebe","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"b7f275-tools"}}\n',
      "openshift.io/description":
        "Artem Test Feb 24.4 Changed name, description, ministry",
      "openshift.io/display-name":
        "Artem Test Feb 24.4 Changed name, description, ministry and again (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c54,c9",
      "openshift.io/sa.scc.supplemental-groups": "1002880000/10000",
      "openshift.io/sa.scc.uid-range": "1002880000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-24T23:40:55Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "b7f275",
      environment: "tools",
      "kubernetes.io/metadata.name": "b7f275-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "FIN",
      name: "b7f275",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63f95b1870b61a324d498ebe",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "b7f275-tools",
    resourceVersion: "1809646918",
    uid: "500f369f-5e59-4958-aefc-e930263fe6d3"
  },
  {
    annotations: {
      contacts:
        '[{"email": "billy.li@gov.bc.ca", "role": "owner"}, {"email": "ian.1.watts@gov.bc.ca", "role": "lead"}, {"email": "ian.1.watts@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"billy.li@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"ian.1.watts@gov.bc.ca\\", \\"role\\": \\"lead\\"}, {\\"email\\": \\"ian.1.watts@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"A test project for platform developers","openshift.io/display-name":"Argo Tools Test (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-2-limit-4","devops.gov.bc.ca/gitops-app":"bcb254","environment":"dev","memory_quota":"memory-request-8-limit-16","ministry_id":"CITZ","name":"bcb254","profile_id":"64399d26f660fc4f3b92d42a","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"bcb254-dev"}}\n',
      "openshift.io/description": "A test project for platform developers",
      "openshift.io/display-name": "Argo Tools Test (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c34,c4",
      "openshift.io/sa.scc.supplemental-groups": "1001130000/10000",
      "openshift.io/sa.scc.uid-range": "1001130000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-26T20:32:22Z",
    labels: {
      cpu_quota: "cpu-request-2-limit-4",
      "devops.gov.bc.ca/gitops-app": "bcb254",
      environment: "dev",
      "kubernetes.io/metadata.name": "bcb254-dev",
      memory_quota: "memory-request-8-limit-16",
      ministry_id: "CITZ",
      name: "bcb254",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "64399d26f660fc4f3b92d42a",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "bcb254-dev",
    resourceVersion: "1891919510",
    uid: "5bca585f-a687-492f-8023-16185f16f0c8"
  },
  {
    annotations: {
      contacts:
        '[{"email": "billy.li@gov.bc.ca", "role": "owner"}, {"email": "ian.1.watts@gov.bc.ca", "role": "lead"}, {"email": "ian.1.watts@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"billy.li@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"ian.1.watts@gov.bc.ca\\", \\"role\\": \\"lead\\"}, {\\"email\\": \\"ian.1.watts@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"A test project for platform developers","openshift.io/display-name":"Argo Tools Test (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"bcb254","environment":"prod","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"bcb254","profile_id":"64399d26f660fc4f3b92d42a","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"bcb254-prod"}}\n',
      "openshift.io/description": "A test project for platform developers",
      "openshift.io/display-name": "Argo Tools Test (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c34,c14",
      "openshift.io/sa.scc.supplemental-groups": "1001150000/10000",
      "openshift.io/sa.scc.uid-range": "1001150000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-26T20:32:22Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "bcb254",
      environment: "prod",
      "kubernetes.io/metadata.name": "bcb254-prod",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "bcb254",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "64399d26f660fc4f3b92d42a",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "bcb254-prod",
    resourceVersion: "1891919511",
    uid: "f42920f8-03af-4efa-b070-19068a7a5fbb"
  },
  {
    annotations: {
      contacts:
        '[{"email": "billy.li@gov.bc.ca", "role": "owner"}, {"email": "ian.1.watts@gov.bc.ca", "role": "lead"}, {"email": "ian.1.watts@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"billy.li@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"ian.1.watts@gov.bc.ca\\", \\"role\\": \\"lead\\"}, {\\"email\\": \\"ian.1.watts@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"A test project for platform developers","openshift.io/display-name":"Argo Tools Test (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"bcb254","environment":"test","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"bcb254","profile_id":"64399d26f660fc4f3b92d42a","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"bcb254-test"}}\n',
      "openshift.io/description": "A test project for platform developers",
      "openshift.io/display-name": "Argo Tools Test (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c34,c9",
      "openshift.io/sa.scc.supplemental-groups": "1001140000/10000",
      "openshift.io/sa.scc.uid-range": "1001140000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-26T20:32:22Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "bcb254",
      environment: "test",
      "kubernetes.io/metadata.name": "bcb254-test",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "bcb254",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "64399d26f660fc4f3b92d42a",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "bcb254-test",
    resourceVersion: "1891919512",
    uid: "264bd0d2-d421-4f3a-b05c-e89f5cf52d38"
  },
  {
    annotations: {
      contacts:
        '[{"email": "billy.li@gov.bc.ca", "role": "owner"}, {"email": "ian.1.watts@gov.bc.ca", "role": "lead"}, {"email": "ian.1.watts@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"billy.li@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"ian.1.watts@gov.bc.ca\\", \\"role\\": \\"lead\\"}, {\\"email\\": \\"ian.1.watts@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"A test project for platform developers","openshift.io/display-name":"Argo Tools Test (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-2-limit-4","devops.gov.bc.ca/gitops-app":"bcb254","environment":"tools","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"bcb254","profile_id":"64399d26f660fc4f3b92d42a","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"bcb254-tools"}}\n',
      "openshift.io/description": "A test project for platform developers",
      "openshift.io/display-name": "Argo Tools Test (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c34,c19",
      "openshift.io/sa.scc.supplemental-groups": "1001160000/10000",
      "openshift.io/sa.scc.uid-range": "1001160000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-10-26T20:32:22Z",
    labels: {
      cpu_quota: "cpu-request-2-limit-4",
      "devops.gov.bc.ca/gitops-app": "bcb254",
      environment: "tools",
      "kubernetes.io/metadata.name": "bcb254-tools",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "bcb254",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "64399d26f660fc4f3b92d42a",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "bcb254-tools",
    resourceVersion: "1891919513",
    uid: "6cc4bc8f-5d37-4382-8e60-bbbb3c22fc3b"
  },
  {
    annotations: {
      contacts:
        '[{"email": "steven.barre@dxcas.com", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "advsol-mcs-test"}, {"email": "steven.barre@dxcas.com", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "advsol-mcs-test"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"steven.barre@dxcas.com\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"advsol-mcs-test\\"}, {\\"email\\": \\"steven.barre@dxcas.com\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"advsol-mcs-test\\"}]","openshift.io/description":"AdvSol MCS Test","openshift.io/display-name":"AdvSol MCS Test (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"be1c6b","environment":"dev","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"be1c6b","profile_id":"589","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"be1c6b-dev"}}\n',
      "openshift.io/description": "AdvSol MCS Test",
      "openshift.io/display-name": "AdvSol MCS Test (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c36,c25",
      "openshift.io/sa.scc.supplemental-groups": "1001310000/10000",
      "openshift.io/sa.scc.uid-range": "1001310000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-11-01T22:55:05Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "be1c6b",
      environment: "dev",
      "kubernetes.io/metadata.name": "be1c6b-dev",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "be1c6b",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "589",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "be1c6b-dev",
    resourceVersion: "1809647026",
    uid: "c8cf505a-950f-4c3a-a955-6880c377e02a"
  },
  {
    annotations: {
      contacts:
        '[{"email": "steven.barre@dxcas.com", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "advsol-mcs-test"}, {"email": "steven.barre@dxcas.com", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "advsol-mcs-test"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"steven.barre@dxcas.com\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"advsol-mcs-test\\"}, {\\"email\\": \\"steven.barre@dxcas.com\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"advsol-mcs-test\\"}]","openshift.io/description":"AdvSol MCS Test","openshift.io/display-name":"AdvSol MCS Test (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"be1c6b","environment":"prod","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"be1c6b","profile_id":"589","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"be1c6b-prod"}}\n',
      "openshift.io/description": "AdvSol MCS Test",
      "openshift.io/display-name": "AdvSol MCS Test (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c36,c35",
      "openshift.io/sa.scc.supplemental-groups": "1001330000/10000",
      "openshift.io/sa.scc.uid-range": "1001330000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-11-01T22:55:05Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "be1c6b",
      environment: "prod",
      "kubernetes.io/metadata.name": "be1c6b-prod",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "be1c6b",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "589",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "be1c6b-prod",
    resourceVersion: "1809647042",
    uid: "56845ee8-63af-481b-8209-ea631f64e945"
  },
  {
    annotations: {
      contacts:
        '[{"email": "steven.barre@dxcas.com", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "advsol-mcs-test"}, {"email": "steven.barre@dxcas.com", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "advsol-mcs-test"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"steven.barre@dxcas.com\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"advsol-mcs-test\\"}, {\\"email\\": \\"steven.barre@dxcas.com\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"advsol-mcs-test\\"}]","openshift.io/description":"AdvSol MCS Test","openshift.io/display-name":"AdvSol MCS Test (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"be1c6b","environment":"test","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"be1c6b","profile_id":"589","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"be1c6b-test"}}\n',
      "openshift.io/description": "AdvSol MCS Test",
      "openshift.io/display-name": "AdvSol MCS Test (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c36,c20",
      "openshift.io/sa.scc.supplemental-groups": "1001300000/10000",
      "openshift.io/sa.scc.uid-range": "1001300000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-11-01T22:55:05Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "be1c6b",
      environment: "test",
      "kubernetes.io/metadata.name": "be1c6b-test",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "be1c6b",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "589",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "be1c6b-test",
    resourceVersion: "1809647058",
    uid: "58ff462f-24df-445c-9488-6fbc93ba2563"
  },
  {
    annotations: {
      contacts:
        '[{"email": "steven.barre@dxcas.com", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "advsol-mcs-test"}, {"email": "steven.barre@dxcas.com", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "advsol-mcs-test"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"steven.barre@dxcas.com\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"advsol-mcs-test\\"}, {\\"email\\": \\"steven.barre@dxcas.com\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"advsol-mcs-test\\"}]","openshift.io/description":"AdvSol MCS Test","openshift.io/display-name":"AdvSol MCS Test (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"be1c6b","environment":"tools","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"be1c6b","profile_id":"589","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"be1c6b-tools"}}\n',
      "openshift.io/description": "AdvSol MCS Test",
      "openshift.io/display-name": "AdvSol MCS Test (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c36,c30",
      "openshift.io/sa.scc.supplemental-groups": "1001320000/10000",
      "openshift.io/sa.scc.uid-range": "1001320000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-11-01T22:55:05Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "be1c6b",
      environment: "tools",
      "kubernetes.io/metadata.name": "be1c6b-tools",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "be1c6b",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "589",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "be1c6b-tools",
    resourceVersion: "1809647074",
    uid: "4897b03f-be3c-4eb1-8b46-0e81c345b84d"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "role": "owner"}, {"email": "billy.li@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"billy.li@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"test","openshift.io/display-name":"test (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"c34cd8","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"c34cd8","profile_id":"64123af77b70ee62f139b12f","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"c34cd8-dev"}}\n',
      "openshift.io/description": "test",
      "openshift.io/display-name": "test (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c32,c4",
      "openshift.io/sa.scc.supplemental-groups": "1001000000/10000",
      "openshift.io/sa.scc.uid-range": "1001000000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-21T18:59:36Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "c34cd8",
      environment: "dev",
      "kubernetes.io/metadata.name": "c34cd8-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "c34cd8",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "64123af77b70ee62f139b12f",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "c34cd8-dev",
    resourceVersion: "1818639335",
    uid: "66e2f26b-885c-4202-9a85-55f04b60b611"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "role": "owner"}, {"email": "billy.li@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"billy.li@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"test","openshift.io/display-name":"test (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"c34cd8","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"c34cd8","profile_id":"64123af77b70ee62f139b12f","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"c34cd8-prod"}}\n',
      "openshift.io/description": "test",
      "openshift.io/display-name": "test (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c49,c39",
      "openshift.io/sa.scc.supplemental-groups": "1002430000/10000",
      "openshift.io/sa.scc.uid-range": "1002430000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-21T18:59:36Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "c34cd8",
      environment: "prod",
      "kubernetes.io/metadata.name": "c34cd8-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "c34cd8",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "64123af77b70ee62f139b12f",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "c34cd8-prod",
    resourceVersion: "1818639337",
    uid: "d4811557-03ae-4334-9f3a-9fbbce28b792"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "role": "owner"}, {"email": "billy.li@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"billy.li@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"test","openshift.io/display-name":"test (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"c34cd8","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"c34cd8","profile_id":"64123af77b70ee62f139b12f","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"c34cd8-test"}}\n',
      "openshift.io/description": "test",
      "openshift.io/display-name": "test (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c49,c29",
      "openshift.io/sa.scc.supplemental-groups": "1002410000/10000",
      "openshift.io/sa.scc.uid-range": "1002410000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-21T18:59:36Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "c34cd8",
      environment: "test",
      "kubernetes.io/metadata.name": "c34cd8-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "c34cd8",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "64123af77b70ee62f139b12f",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "c34cd8-test",
    resourceVersion: "1818639338",
    uid: "903af9a8-df5c-4563-84a2-fa51dbcff449"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "role": "owner"}, {"email": "billy.li@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"billy.li@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"test","openshift.io/display-name":"test (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"c34cd8","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"c34cd8","profile_id":"64123af77b70ee62f139b12f","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"c34cd8-tools"}}\n',
      "openshift.io/description": "test",
      "openshift.io/display-name": "test (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c49,c44",
      "openshift.io/sa.scc.supplemental-groups": "1002440000/10000",
      "openshift.io/sa.scc.uid-range": "1002440000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-21T18:59:36Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "c34cd8",
      environment: "tools",
      "kubernetes.io/metadata.name": "c34cd8-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "c34cd8",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "64123af77b70ee62f139b12f",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "c34cd8-tools",
    resourceVersion: "1818639339",
    uid: "94d1146c-fdb1-4e65-a810-8eb078ad2204"
  },
  {
    annotations: {
      contacts:
        '[{"email": "artem.kravchenko@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}, {"email": "alex.lloyd@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"alex.lloyd@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test Feb 24.4 Should be visible in Artem Account After Provisioning","openshift.io/display-name":"Artem Test Feb 24.4 Should be visible in Artem Account After Provisioning (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"c40f4f","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"DBC","name":"c40f4f","profile_id":"63fd4b76b782ae6e5f722c92","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"c40f4f-dev"}}\n',
      "openshift.io/description":
        "Artem Test Feb 24.4 Should be visible in Artem Account After Provisioning",
      "openshift.io/display-name":
        "Artem Test Feb 24.4 Should be visible in Artem Account After Provisioning (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c56,c10",
      "openshift.io/sa.scc.supplemental-groups": "1003100000/10000",
      "openshift.io/sa.scc.uid-range": "1003100000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-28T00:41:26Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "c40f4f",
      environment: "dev",
      "kubernetes.io/metadata.name": "c40f4f-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "DBC",
      name: "c40f4f",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63fd4b76b782ae6e5f722c92",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "c40f4f-dev",
    resourceVersion: "1809647088",
    uid: "8194c103-784d-4ebf-8738-589a8ec9a440"
  },
  {
    annotations: {
      contacts:
        '[{"email": "artem.kravchenko@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}, {"email": "alex.lloyd@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"alex.lloyd@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test Feb 24.4 Should be visible in Artem Account After Provisioning","openshift.io/display-name":"Artem Test Feb 24.4 Should be visible in Artem Account After Provisioning (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"c40f4f","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"DBC","name":"c40f4f","profile_id":"63fd4b76b782ae6e5f722c92","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"c40f4f-prod"}}\n',
      "openshift.io/description":
        "Artem Test Feb 24.4 Should be visible in Artem Account After Provisioning",
      "openshift.io/display-name":
        "Artem Test Feb 24.4 Should be visible in Artem Account After Provisioning (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c52,c24",
      "openshift.io/sa.scc.supplemental-groups": "1002700000/10000",
      "openshift.io/sa.scc.uid-range": "1002700000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-28T00:41:26Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "c40f4f",
      environment: "prod",
      "kubernetes.io/metadata.name": "c40f4f-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "DBC",
      name: "c40f4f",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63fd4b76b782ae6e5f722c92",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "c40f4f-prod",
    resourceVersion: "1809647106",
    uid: "1a270642-8ee2-4993-9f06-961b6144bbc5"
  },
  {
    annotations: {
      contacts:
        '[{"email": "artem.kravchenko@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}, {"email": "alex.lloyd@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"alex.lloyd@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test Feb 24.4 Should be visible in Artem Account After Provisioning","openshift.io/display-name":"Artem Test Feb 24.4 Should be visible in Artem Account After Provisioning (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"c40f4f","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"DBC","name":"c40f4f","profile_id":"63fd4b76b782ae6e5f722c92","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"c40f4f-test"}}\n',
      "openshift.io/description":
        "Artem Test Feb 24.4 Should be visible in Artem Account After Provisioning",
      "openshift.io/display-name":
        "Artem Test Feb 24.4 Should be visible in Artem Account After Provisioning (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c56,c15",
      "openshift.io/sa.scc.supplemental-groups": "1003110000/10000",
      "openshift.io/sa.scc.uid-range": "1003110000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-28T00:41:26Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "c40f4f",
      environment: "test",
      "kubernetes.io/metadata.name": "c40f4f-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "DBC",
      name: "c40f4f",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63fd4b76b782ae6e5f722c92",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "c40f4f-test",
    resourceVersion: "1809647130",
    uid: "03a0b6b6-8028-424a-9d12-f501db483163"
  },
  {
    annotations: {
      contacts:
        '[{"email": "artem.kravchenko@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}, {"email": "alex.lloyd@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"alex.lloyd@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test Feb 24.4 Should be visible in Artem Account After Provisioning","openshift.io/display-name":"Artem Test Feb 24.4 Should be visible in Artem Account After Provisioning (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"c40f4f","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"DBC","name":"c40f4f","profile_id":"63fd4b76b782ae6e5f722c92","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"c40f4f-tools"}}\n',
      "openshift.io/description":
        "Artem Test Feb 24.4 Should be visible in Artem Account After Provisioning",
      "openshift.io/display-name":
        "Artem Test Feb 24.4 Should be visible in Artem Account After Provisioning (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c54,c49",
      "openshift.io/sa.scc.supplemental-groups": "1002960000/10000",
      "openshift.io/sa.scc.uid-range": "1002960000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-28T00:41:26Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "c40f4f",
      environment: "tools",
      "kubernetes.io/metadata.name": "c40f4f-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "DBC",
      name: "c40f4f",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63fd4b76b782ae6e5f722c92",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "c40f4f-tools",
    resourceVersion: "1809647155",
    uid: "625c3306-0b92-4365-b0b2-84c81d754e0e"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "okanji"}, {"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "okanji"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"okanji\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"okanji\\"}]","openshift.io/description":"Test","openshift.io/display-name":"Test (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"c6911a","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"PSA","name":"c6911a","profile_id":"63a33f8cb2659dab6133eba3","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"c6911a-dev"}}\n',
      "openshift.io/description": "Test",
      "openshift.io/display-name": "Test (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c41,c25",
      "openshift.io/sa.scc.supplemental-groups": "1001690000/10000",
      "openshift.io/sa.scc.uid-range": "1001690000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-12-21T17:25:31Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "c6911a",
      environment: "dev",
      "kubernetes.io/metadata.name": "c6911a-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "PSA",
      name: "c6911a",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63a33f8cb2659dab6133eba3",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "c6911a-dev",
    resourceVersion: "1809647180",
    uid: "a2250d61-3de6-430a-86b6-b7d70aea9e31"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "okanji"}, {"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "okanji"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"okanji\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"okanji\\"}]","openshift.io/description":"Test","openshift.io/display-name":"Test (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"c6911a","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"PSA","name":"c6911a","profile_id":"63a33f8cb2659dab6133eba3","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"c6911a-prod"}}\n',
      "openshift.io/description": "Test",
      "openshift.io/display-name": "Test (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c41,c35",
      "openshift.io/sa.scc.supplemental-groups": "1001710000/10000",
      "openshift.io/sa.scc.uid-range": "1001710000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-12-21T17:25:31Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "c6911a",
      environment: "prod",
      "kubernetes.io/metadata.name": "c6911a-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "PSA",
      name: "c6911a",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63a33f8cb2659dab6133eba3",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "c6911a-prod",
    resourceVersion: "1809647198",
    uid: "7b832078-a531-4a67-a9ae-62307035736b"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "okanji"}, {"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "okanji"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"okanji\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"okanji\\"}]","openshift.io/description":"Test","openshift.io/display-name":"Test (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"c6911a","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"PSA","name":"c6911a","profile_id":"63a33f8cb2659dab6133eba3","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"c6911a-test"}}\n',
      "openshift.io/description": "Test",
      "openshift.io/display-name": "Test (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c41,c30",
      "openshift.io/sa.scc.supplemental-groups": "1001700000/10000",
      "openshift.io/sa.scc.uid-range": "1001700000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-12-21T17:25:31Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "c6911a",
      environment: "test",
      "kubernetes.io/metadata.name": "c6911a-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "PSA",
      name: "c6911a",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63a33f8cb2659dab6133eba3",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "c6911a-test",
    resourceVersion: "1809647214",
    uid: "68fee370-3ed2-48b4-9cbb-abf3b54b7cb0"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "okanji"}, {"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "okanji"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"okanji\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"okanji\\"}]","openshift.io/description":"Test","openshift.io/display-name":"Test (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"c6911a","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"PSA","name":"c6911a","profile_id":"63a33f8cb2659dab6133eba3","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"c6911a-tools"}}\n',
      "openshift.io/description": "Test",
      "openshift.io/display-name": "Test (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c41,c40",
      "openshift.io/sa.scc.supplemental-groups": "1001720000/10000",
      "openshift.io/sa.scc.uid-range": "1001720000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-12-21T17:25:31Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "c6911a",
      environment: "tools",
      "kubernetes.io/metadata.name": "c6911a-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "PSA",
      name: "c6911a",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63a33f8cb2659dab6133eba3",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "c6911a-tools",
    resourceVersion: "1809647228",
    uid: "fae77fb8-e6f6-47f9-b215-f750976e26b2"
  },
  {
    annotations: {
      contacts:
        '[{"email": "billy.li@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "billy.li@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"billy.li@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"billy.li@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"clab test","openshift.io/display-name":"clab billy test (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"c99913","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"LDB","name":"c99913","profile_id":"640146e07bad7879c716303c","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"c99913-dev"}}\n',
      "openshift.io/description": "clab test",
      "openshift.io/display-name": "clab billy test (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c57,c49",
      "openshift.io/sa.scc.supplemental-groups": "1003290000/10000",
      "openshift.io/sa.scc.uid-range": "1003290000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-03T01:05:28Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "c99913",
      environment: "dev",
      "kubernetes.io/metadata.name": "c99913-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "LDB",
      name: "c99913",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "640146e07bad7879c716303c",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "c99913-dev",
    resourceVersion: "1809647251",
    uid: "6df33472-524f-4831-8090-5bba5c576277"
  },
  {
    annotations: {
      contacts:
        '[{"email": "billy.li@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "billy.li@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"billy.li@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"billy.li@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"clab test","openshift.io/display-name":"clab billy test (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"c99913","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"LDB","name":"c99913","profile_id":"640146e07bad7879c716303c","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"c99913-prod"}}\n',
      "openshift.io/description": "clab test",
      "openshift.io/display-name": "clab billy test (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c57,c54",
      "openshift.io/sa.scc.supplemental-groups": "1003300000/10000",
      "openshift.io/sa.scc.uid-range": "1003300000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-03T01:05:28Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "c99913",
      environment: "prod",
      "kubernetes.io/metadata.name": "c99913-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "LDB",
      name: "c99913",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "640146e07bad7879c716303c",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "c99913-prod",
    resourceVersion: "1809647265",
    uid: "59c748a1-1b08-4b10-9bc5-d0f585bb34c2"
  },
  {
    annotations: {
      contacts:
        '[{"email": "billy.li@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "billy.li@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"billy.li@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"billy.li@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"clab test","openshift.io/display-name":"clab billy test (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"c99913","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"LDB","name":"c99913","profile_id":"640146e07bad7879c716303c","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"c99913-test"}}\n',
      "openshift.io/description": "clab test",
      "openshift.io/display-name": "clab billy test (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c57,c29",
      "openshift.io/sa.scc.supplemental-groups": "1003250000/10000",
      "openshift.io/sa.scc.uid-range": "1003250000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-03T01:05:28Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "c99913",
      environment: "test",
      "kubernetes.io/metadata.name": "c99913-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "LDB",
      name: "c99913",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "640146e07bad7879c716303c",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "c99913-test",
    resourceVersion: "1809647280",
    uid: "a3f2cd65-6a5d-4f6e-8f4d-162b54ac46db"
  },
  {
    annotations: {
      contacts:
        '[{"email": "billy.li@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "billy.li@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"billy.li@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"billy.li@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"clab test","openshift.io/display-name":"clab billy test (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"c99913","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"LDB","name":"c99913","profile_id":"640146e07bad7879c716303c","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"c99913-tools"}}\n',
      "openshift.io/description": "clab test",
      "openshift.io/display-name": "clab billy test (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c57,c44",
      "openshift.io/sa.scc.supplemental-groups": "1003280000/10000",
      "openshift.io/sa.scc.uid-range": "1003280000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-03T01:05:28Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "c99913",
      environment: "tools",
      "kubernetes.io/metadata.name": "c99913-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "LDB",
      name: "c99913",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "640146e07bad7879c716303c",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "c99913-tools",
    resourceVersion: "1809647296",
    uid: "c872e762-f2c4-416d-8d44-edfeeb943fe5"
  },
  {
    annotations: {
      contacts:
        '[{"email": "artem.kravchenko@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test Mar 2.1","openshift.io/display-name":"Artem Test Mar 2.1 (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"ce3930","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"IRR","name":"ce3930","profile_id":"6401478460f3afc7ba0c70c2","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"ce3930-dev"}}\n',
      "openshift.io/description": "Artem Test Mar 2.1",
      "openshift.io/display-name": "Artem Test Mar 2.1 (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c58,c7",
      "openshift.io/sa.scc.supplemental-groups": "1003320000/10000",
      "openshift.io/sa.scc.uid-range": "1003320000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-03T01:11:27Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "ce3930",
      environment: "dev",
      "kubernetes.io/metadata.name": "ce3930-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "IRR",
      name: "ce3930",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "6401478460f3afc7ba0c70c2",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "ce3930-dev",
    resourceVersion: "1809647312",
    uid: "2f7be7a1-b4c8-4362-85ed-54ad2ad06e25"
  },
  {
    annotations: {
      contacts:
        '[{"email": "artem.kravchenko@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test Mar 2.1","openshift.io/display-name":"Artem Test Mar 2.1 (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"ce3930","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"IRR","name":"ce3930","profile_id":"6401478460f3afc7ba0c70c2","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"ce3930-prod"}}\n',
      "openshift.io/description": "Artem Test Mar 2.1",
      "openshift.io/display-name": "Artem Test Mar 2.1 (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c58,c17",
      "openshift.io/sa.scc.supplemental-groups": "1003340000/10000",
      "openshift.io/sa.scc.uid-range": "1003340000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-03T01:11:27Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "ce3930",
      environment: "prod",
      "kubernetes.io/metadata.name": "ce3930-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "IRR",
      name: "ce3930",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "6401478460f3afc7ba0c70c2",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "ce3930-prod",
    resourceVersion: "1809647330",
    uid: "4b363423-d9c6-4b7f-b943-c3640b7cab31"
  },
  {
    annotations: {
      contacts:
        '[{"email": "artem.kravchenko@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test Mar 2.1","openshift.io/display-name":"Artem Test Mar 2.1 (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"ce3930","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"IRR","name":"ce3930","profile_id":"6401478460f3afc7ba0c70c2","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"ce3930-test"}}\n',
      "openshift.io/description": "Artem Test Mar 2.1",
      "openshift.io/display-name": "Artem Test Mar 2.1 (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c58,c12",
      "openshift.io/sa.scc.supplemental-groups": "1003330000/10000",
      "openshift.io/sa.scc.uid-range": "1003330000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-03T01:11:27Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "ce3930",
      environment: "test",
      "kubernetes.io/metadata.name": "ce3930-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "IRR",
      name: "ce3930",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "6401478460f3afc7ba0c70c2",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "ce3930-test",
    resourceVersion: "1809647362",
    uid: "852bd380-9760-4a46-b34b-841e242cd4ac"
  },
  {
    annotations: {
      contacts:
        '[{"email": "artem.kravchenko@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test Mar 2.1","openshift.io/display-name":"Artem Test Mar 2.1 (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"ce3930","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"IRR","name":"ce3930","profile_id":"6401478460f3afc7ba0c70c2","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"ce3930-tools"}}\n',
      "openshift.io/description": "Artem Test Mar 2.1",
      "openshift.io/display-name": "Artem Test Mar 2.1 (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c58,c2",
      "openshift.io/sa.scc.supplemental-groups": "1003310000/10000",
      "openshift.io/sa.scc.uid-range": "1003310000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-03T01:11:27Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "ce3930",
      environment: "tools",
      "kubernetes.io/metadata.name": "ce3930-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "IRR",
      name: "ce3930",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "6401478460f3afc7ba0c70c2",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "ce3930-tools",
    resourceVersion: "1809647376",
    uid: "618aeabf-6582-4c01-92dc-4289c9ca38de"
  },
  {
    annotations: {
      contacts:
        '[{"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "artem.kravchenko@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test Feb 24.1","openshift.io/display-name":"Artem Test Feb 24.1 (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-32-limit-64","devops.gov.bc.ca/gitops-app":"d08c9f","environment":"dev","memory_quota":"memory-request-64-limit-128","ministry_id":"ENV","name":"d08c9f","profile_id":"63f94e3470b61a324d498eba","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-512"},"name":"d08c9f-dev"}}\n',
      "openshift.io/description": "Artem Test Feb 24.1",
      "openshift.io/display-name": "Artem Test Feb 24.1 (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c53,c17",
      "openshift.io/sa.scc.supplemental-groups": "1002790000/10000",
      "openshift.io/sa.scc.uid-range": "1002790000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-24T16:53:57Z",
    labels: {
      cpu_quota: "cpu-request-32-limit-64",
      "devops.gov.bc.ca/gitops-app": "d08c9f",
      environment: "dev",
      "kubernetes.io/metadata.name": "d08c9f-dev",
      memory_quota: "memory-request-64-limit-128",
      ministry_id: "ENV",
      name: "d08c9f",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63f94e3470b61a324d498eba",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-512"
    },
    name: "d08c9f-dev",
    resourceVersion: "1809647478",
    uid: "481432bb-27d2-44d2-bb4c-527d53def8f6"
  },
  {
    annotations: {
      contacts:
        '[{"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "artem.kravchenko@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test Feb 24.1","openshift.io/display-name":"Artem Test Feb 24.1 (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"d08c9f","environment":"prod","memory_quota":"memory-request-8-limit-16","ministry_id":"ENV","name":"d08c9f","profile_id":"63f94e3470b61a324d498eba","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"d08c9f-prod"}}\n',
      "openshift.io/description": "Artem Test Feb 24.1",
      "openshift.io/display-name": "Artem Test Feb 24.1 (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c53,c52",
      "openshift.io/sa.scc.supplemental-groups": "1002860000/10000",
      "openshift.io/sa.scc.uid-range": "1002860000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-24T16:53:57Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "d08c9f",
      environment: "prod",
      "kubernetes.io/metadata.name": "d08c9f-prod",
      memory_quota: "memory-request-8-limit-16",
      ministry_id: "ENV",
      name: "d08c9f",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63f94e3470b61a324d498eba",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "d08c9f-prod",
    resourceVersion: "1809647495",
    uid: "03894783-fa3f-44fb-98c0-d334773e9d76"
  },
  {
    annotations: {
      contacts:
        '[{"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "artem.kravchenko@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test Feb 24.1","openshift.io/display-name":"Artem Test Feb 24.1 (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-8-limit-16","devops.gov.bc.ca/gitops-app":"d08c9f","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"ENV","name":"d08c9f","profile_id":"63f94e3470b61a324d498eba","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"d08c9f-test"}}\n',
      "openshift.io/description": "Artem Test Feb 24.1",
      "openshift.io/display-name": "Artem Test Feb 24.1 (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c53,c27",
      "openshift.io/sa.scc.supplemental-groups": "1002810000/10000",
      "openshift.io/sa.scc.uid-range": "1002810000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-24T16:53:57Z",
    labels: {
      cpu_quota: "cpu-request-8-limit-16",
      "devops.gov.bc.ca/gitops-app": "d08c9f",
      environment: "test",
      "kubernetes.io/metadata.name": "d08c9f-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "ENV",
      name: "d08c9f",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63f94e3470b61a324d498eba",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "d08c9f-test",
    resourceVersion: "1809647509",
    uid: "2afdff22-f3d3-4e7f-940b-588fd975cef9"
  },
  {
    annotations: {
      contacts:
        '[{"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "artem.kravchenko@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test Feb 24.1","openshift.io/display-name":"Artem Test Feb 24.1 (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"d08c9f","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"ENV","name":"d08c9f","profile_id":"63f94e3470b61a324d498eba","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"d08c9f-tools"}}\n',
      "openshift.io/description": "Artem Test Feb 24.1",
      "openshift.io/display-name": "Artem Test Feb 24.1 (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c53,c22",
      "openshift.io/sa.scc.supplemental-groups": "1002800000/10000",
      "openshift.io/sa.scc.uid-range": "1002800000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-24T16:53:57Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "d08c9f",
      environment: "tools",
      "kubernetes.io/metadata.name": "d08c9f-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "ENV",
      name: "d08c9f",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63f94e3470b61a324d498eba",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "d08c9f-tools",
    resourceVersion: "1809647525",
    uid: "a64d1dcd-7804-4e02-8718-f9c31c62085e"
  },
  {
    annotations: {
      contacts:
        '[{"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"With platform services test email","openshift.io/display-name":"Alex L Test Jan 31 (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"d3b1aa","environment":"dev","memory_quota":"memory-request-4-limit-8","ministry_id":"CITZ","name":"d3b1aa","profile_id":"63dae64d4cccf9d3283f6484","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"d3b1aa-dev"}}\n',
      "openshift.io/description": "With platform services test email",
      "openshift.io/display-name": "Alex L Test Jan 31 (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c48,c7",
      "openshift.io/sa.scc.supplemental-groups": "1002270000/10000",
      "openshift.io/sa.scc.uid-range": "1002270000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-01T21:59:08Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "d3b1aa",
      environment: "dev",
      "kubernetes.io/metadata.name": "d3b1aa-dev",
      memory_quota: "memory-request-4-limit-8",
      ministry_id: "CITZ",
      name: "d3b1aa",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63dae64d4cccf9d3283f6484",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "d3b1aa-dev",
    resourceVersion: "1809647545",
    uid: "ab31c675-2301-40ff-9bee-fcadd43e62ca"
  },
  {
    annotations: {
      contacts:
        '[{"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"With platform services test email","openshift.io/display-name":"Alex L Test Jan 31 (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-1-limit-2","devops.gov.bc.ca/gitops-app":"d3b1aa","environment":"prod","memory_quota":"memory-request-4-limit-8","ministry_id":"CITZ","name":"d3b1aa","profile_id":"63dae64d4cccf9d3283f6484","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"d3b1aa-prod"}}\n',
      "openshift.io/description": "With platform services test email",
      "openshift.io/display-name": "Alex L Test Jan 31 (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c48,c12",
      "openshift.io/sa.scc.supplemental-groups": "1002280000/10000",
      "openshift.io/sa.scc.uid-range": "1002280000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-01T21:59:08Z",
    labels: {
      cpu_quota: "cpu-request-1-limit-2",
      "devops.gov.bc.ca/gitops-app": "d3b1aa",
      environment: "prod",
      "kubernetes.io/metadata.name": "d3b1aa-prod",
      memory_quota: "memory-request-4-limit-8",
      ministry_id: "CITZ",
      name: "d3b1aa",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63dae64d4cccf9d3283f6484",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "d3b1aa-prod",
    resourceVersion: "1809647562",
    uid: "36fb1650-19c0-4754-89dc-df50694d82be"
  },
  {
    annotations: {
      contacts:
        '[{"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"With platform services test email","openshift.io/display-name":"Alex L Test Jan 31 (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"d3b1aa","environment":"test","memory_quota":"memory-request-4-limit-8","ministry_id":"CITZ","name":"d3b1aa","profile_id":"63dae64d4cccf9d3283f6484","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"d3b1aa-test"}}\n',
      "openshift.io/description": "With platform services test email",
      "openshift.io/display-name": "Alex L Test Jan 31 (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c41,c20",
      "openshift.io/sa.scc.supplemental-groups": "1001680000/10000",
      "openshift.io/sa.scc.uid-range": "1001680000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-01T21:59:08Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "d3b1aa",
      environment: "test",
      "kubernetes.io/metadata.name": "d3b1aa-test",
      memory_quota: "memory-request-4-limit-8",
      ministry_id: "CITZ",
      name: "d3b1aa",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63dae64d4cccf9d3283f6484",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "d3b1aa-test",
    resourceVersion: "1809647577",
    uid: "f00630b8-bb0a-4513-a9f3-89c7baf97d55"
  },
  {
    annotations: {
      contacts:
        '[{"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"With platform services test email","openshift.io/display-name":"Alex L Test Jan 31 (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"d3b1aa","environment":"tools","memory_quota":"memory-request-4-limit-8","ministry_id":"CITZ","name":"d3b1aa","profile_id":"63dae64d4cccf9d3283f6484","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"d3b1aa-tools"}}\n',
      "openshift.io/description": "With platform services test email",
      "openshift.io/display-name": "Alex L Test Jan 31 (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c48,c37",
      "openshift.io/sa.scc.supplemental-groups": "1002330000/10000",
      "openshift.io/sa.scc.uid-range": "1002330000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-01T21:59:08Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "d3b1aa",
      environment: "tools",
      "kubernetes.io/metadata.name": "d3b1aa-tools",
      memory_quota: "memory-request-4-limit-8",
      ministry_id: "CITZ",
      name: "d3b1aa",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63dae64d4cccf9d3283f6484",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "d3b1aa-tools",
    resourceVersion: "1809647597",
    uid: "cc99073e-df2b-424b-a3b5-425646e89e46"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "okanji"}, {"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "okanji"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"okanji\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"okanji\\"}]","openshift.io/description":"test","openshift.io/display-name":"test (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"d49b6c","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"d49b6c","profile_id":"63de329800a110626ee0aee5","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"d49b6c-dev"}}\n',
      "openshift.io/description": "test",
      "openshift.io/display-name": "test (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c49,c24",
      "openshift.io/sa.scc.supplemental-groups": "1002400000/10000",
      "openshift.io/sa.scc.uid-range": "1002400000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-04T10:35:13Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "d49b6c",
      environment: "dev",
      "kubernetes.io/metadata.name": "d49b6c-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "d49b6c",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63de329800a110626ee0aee5",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "d49b6c-dev",
    resourceVersion: "1809647624",
    uid: "55cafca7-6255-49da-abc8-a110821a0781"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "okanji"}, {"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "okanji"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"okanji\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"okanji\\"}]","openshift.io/description":"test","openshift.io/display-name":"test (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"d49b6c","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"d49b6c","profile_id":"63de329800a110626ee0aee5","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"d49b6c-prod"}}\n',
      "openshift.io/description": "test",
      "openshift.io/display-name": "test (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c47,c29",
      "openshift.io/sa.scc.supplemental-groups": "1002220000/10000",
      "openshift.io/sa.scc.uid-range": "1002220000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-04T10:35:13Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "d49b6c",
      environment: "prod",
      "kubernetes.io/metadata.name": "d49b6c-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "d49b6c",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63de329800a110626ee0aee5",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "d49b6c-prod",
    resourceVersion: "1809647637",
    uid: "d1118e99-dba7-4292-b593-50c155f43d12"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "okanji"}, {"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "okanji"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"okanji\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"okanji\\"}]","openshift.io/description":"test","openshift.io/display-name":"test (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"d49b6c","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"d49b6c","profile_id":"63de329800a110626ee0aee5","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"d49b6c-test"}}\n',
      "openshift.io/description": "test",
      "openshift.io/display-name": "test (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c49,c19",
      "openshift.io/sa.scc.supplemental-groups": "1002390000/10000",
      "openshift.io/sa.scc.uid-range": "1002390000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-04T10:35:13Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "d49b6c",
      environment: "test",
      "kubernetes.io/metadata.name": "d49b6c-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "d49b6c",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63de329800a110626ee0aee5",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "d49b6c-test",
    resourceVersion: "1809647653",
    uid: "6137b377-bf1c-417c-86ac-3e8b8df9e47b"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "okanji"}, {"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "okanji"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"okanji\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"okanji\\"}]","openshift.io/description":"test","openshift.io/display-name":"test (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"d49b6c","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"d49b6c","profile_id":"63de329800a110626ee0aee5","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"d49b6c-tools"}}\n',
      "openshift.io/description": "test",
      "openshift.io/display-name": "test (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c50,c0",
      "openshift.io/sa.scc.supplemental-groups": "1002450000/10000",
      "openshift.io/sa.scc.uid-range": "1002450000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-04T10:35:13Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "d49b6c",
      environment: "tools",
      "kubernetes.io/metadata.name": "d49b6c-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "d49b6c",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63de329800a110626ee0aee5",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "d49b6c-tools",
    resourceVersion: "1809647671",
    uid: "f89cbcc1-eaea-4b7e-a311-4b2936eeb3d1"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "alexandra.lloyd@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}, {"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"alexandra.lloyd@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test Feb 28.1 Not showing on admin side after provisioning","openshift.io/display-name":"Artem Test Feb 28.1 Not showing on admin side after provisioning (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"d74b4e","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"EAO","name":"d74b4e","profile_id":"63fe2e7fb782ae6e5f722c97","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"d74b4e-dev"}}\n',
      "openshift.io/description":
        "Artem Test Feb 28.1 Not showing on admin side after provisioning",
      "openshift.io/display-name":
        "Artem Test Feb 28.1 Not showing on admin side after provisioning (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c56,c20",
      "openshift.io/sa.scc.supplemental-groups": "1003120000/10000",
      "openshift.io/sa.scc.uid-range": "1003120000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-28T16:47:25Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "d74b4e",
      environment: "dev",
      "kubernetes.io/metadata.name": "d74b4e-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "EAO",
      name: "d74b4e",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63fe2e7fb782ae6e5f722c97",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "d74b4e-dev",
    resourceVersion: "1809647691",
    uid: "2f907616-d98b-4d88-9b33-8482755fca6c"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "alexandra.lloyd@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}, {"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"alexandra.lloyd@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test Feb 28.1 Not showing on admin side after provisioning","openshift.io/display-name":"Artem Test Feb 28.1 Not showing on admin side after provisioning (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"d74b4e","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"EAO","name":"d74b4e","profile_id":"63fe2e7fb782ae6e5f722c97","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"d74b4e-prod"}}\n',
      "openshift.io/description":
        "Artem Test Feb 28.1 Not showing on admin side after provisioning",
      "openshift.io/display-name":
        "Artem Test Feb 28.1 Not showing on admin side after provisioning (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c56,c30",
      "openshift.io/sa.scc.supplemental-groups": "1003140000/10000",
      "openshift.io/sa.scc.uid-range": "1003140000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-28T16:47:25Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "d74b4e",
      environment: "prod",
      "kubernetes.io/metadata.name": "d74b4e-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "EAO",
      name: "d74b4e",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63fe2e7fb782ae6e5f722c97",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "d74b4e-prod",
    resourceVersion: "1809647717",
    uid: "f6427a3f-c26e-483a-8e87-8c0d0641c998"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "alexandra.lloyd@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}, {"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"alexandra.lloyd@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test Feb 28.1 Not showing on admin side after provisioning","openshift.io/display-name":"Artem Test Feb 28.1 Not showing on admin side after provisioning (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"d74b4e","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"EAO","name":"d74b4e","profile_id":"63fe2e7fb782ae6e5f722c97","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"d74b4e-test"}}\n',
      "openshift.io/description":
        "Artem Test Feb 28.1 Not showing on admin side after provisioning",
      "openshift.io/display-name":
        "Artem Test Feb 28.1 Not showing on admin side after provisioning (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c56,c5",
      "openshift.io/sa.scc.supplemental-groups": "1003090000/10000",
      "openshift.io/sa.scc.uid-range": "1003090000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-28T16:47:25Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "d74b4e",
      environment: "test",
      "kubernetes.io/metadata.name": "d74b4e-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "EAO",
      name: "d74b4e",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63fe2e7fb782ae6e5f722c97",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "d74b4e-test",
    resourceVersion: "1809647752",
    uid: "8f54744a-8511-44dc-a931-b3fb9842526d"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "alexandra.lloyd@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}, {"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"alexandra.lloyd@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test Feb 28.1 Not showing on admin side after provisioning","openshift.io/display-name":"Artem Test Feb 28.1 Not showing on admin side after provisioning (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"d74b4e","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"EAO","name":"d74b4e","profile_id":"63fe2e7fb782ae6e5f722c97","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"d74b4e-tools"}}\n',
      "openshift.io/description":
        "Artem Test Feb 28.1 Not showing on admin side after provisioning",
      "openshift.io/display-name":
        "Artem Test Feb 28.1 Not showing on admin side after provisioning (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c56,c35",
      "openshift.io/sa.scc.supplemental-groups": "1003150000/10000",
      "openshift.io/sa.scc.uid-range": "1003150000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-28T16:47:25Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "d74b4e",
      environment: "tools",
      "kubernetes.io/metadata.name": "d74b4e-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "EAO",
      name: "d74b4e",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63fe2e7fb782ae6e5f722c97",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "d74b4e-tools",
    resourceVersion: "1809647791",
    uid: "6d94a983-ce30-409e-897b-84a45f1ffd07"
  },
  {
    annotations: {
      contacts:
        '[{"email": "test@abc.com", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "okanji"}, {"email": "oamarkanji@gmail.com", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "okanji"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"test@abc.com\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"okanji\\"}, {\\"email\\": \\"oamarkanji@gmail.com\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"okanji\\"}]","openshift.io/description":"test descirption new","openshift.io/display-name":"A provisioned project that is edited (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"d9a24b","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"AEST","name":"d9a24b","profile_id":"63cea16d184344042105f8ca","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"d9a24b-dev"}}\n',
      "openshift.io/description": "test descirption new",
      "openshift.io/display-name": "A provisioned project that is edited (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c46,c15",
      "openshift.io/sa.scc.supplemental-groups": "1002100000/10000",
      "openshift.io/sa.scc.uid-range": "1002100000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-23T14:57:58Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "d9a24b",
      environment: "dev",
      "kubernetes.io/metadata.name": "d9a24b-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "AEST",
      name: "d9a24b",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63cea16d184344042105f8ca",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "d9a24b-dev",
    resourceVersion: "1809647810",
    uid: "b6ad1af2-5bda-4f4f-9edb-1711f5779185"
  },
  {
    annotations: {
      contacts:
        '[{"email": "test@abc.com", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "okanji"}, {"email": "oamarkanji@gmail.com", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "okanji"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"test@abc.com\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"okanji\\"}, {\\"email\\": \\"oamarkanji@gmail.com\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"okanji\\"}]","openshift.io/description":"test descirption new","openshift.io/display-name":"A provisioned project that is edited (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-8-limit-16","devops.gov.bc.ca/gitops-app":"d9a24b","environment":"prod","memory_quota":"memory-request-8-limit-16","ministry_id":"AEST","name":"d9a24b","profile_id":"63cea16d184344042105f8ca","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-16"},"name":"d9a24b-prod"}}\n',
      "openshift.io/description": "test descirption new",
      "openshift.io/display-name":
        "A provisioned project that is edited (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c46,c0",
      "openshift.io/sa.scc.supplemental-groups": "1002070000/10000",
      "openshift.io/sa.scc.uid-range": "1002070000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-23T14:57:58Z",
    labels: {
      cpu_quota: "cpu-request-8-limit-16",
      "devops.gov.bc.ca/gitops-app": "d9a24b",
      environment: "prod",
      "kubernetes.io/metadata.name": "d9a24b-prod",
      memory_quota: "memory-request-8-limit-16",
      ministry_id: "AEST",
      name: "d9a24b",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63cea16d184344042105f8ca",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-16"
    },
    name: "d9a24b-prod",
    resourceVersion: "1809647824",
    uid: "c1a08be3-64d3-4b50-ad21-2d0a61454cc3"
  },
  {
    annotations: {
      contacts:
        '[{"email": "test@abc.com", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "okanji"}, {"email": "oamarkanji@gmail.com", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "okanji"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"test@abc.com\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"okanji\\"}, {\\"email\\": \\"oamarkanji@gmail.com\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"okanji\\"}]","openshift.io/description":"test descirption new","openshift.io/display-name":"A provisioned project that is edited (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"d9a24b","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"AEST","name":"d9a24b","profile_id":"63cea16d184344042105f8ca","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"d9a24b-test"}}\n',
      "openshift.io/description": "test descirption new",
      "openshift.io/display-name":
        "A provisioned project that is edited (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c46,c10",
      "openshift.io/sa.scc.supplemental-groups": "1002090000/10000",
      "openshift.io/sa.scc.uid-range": "1002090000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-23T14:57:58Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "d9a24b",
      environment: "test",
      "kubernetes.io/metadata.name": "d9a24b-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "AEST",
      name: "d9a24b",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63cea16d184344042105f8ca",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "d9a24b-test",
    resourceVersion: "1809647842",
    uid: "7bbb6f5a-b4fd-429d-be6a-9830d2e9c174"
  },
  {
    annotations: {
      contacts:
        '[{"email": "test@abc.com", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "okanji"}, {"email": "oamarkanji@gmail.com", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "okanji"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"test@abc.com\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"okanji\\"}, {\\"email\\": \\"oamarkanji@gmail.com\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"okanji\\"}]","openshift.io/description":"test descirption new","openshift.io/display-name":"A provisioned project that is edited (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"d9a24b","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"AEST","name":"d9a24b","profile_id":"63cea16d184344042105f8ca","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"d9a24b-tools"}}\n',
      "openshift.io/description": "test descirption new",
      "openshift.io/display-name":
        "A provisioned project that is edited (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c46,c5",
      "openshift.io/sa.scc.supplemental-groups": "1002080000/10000",
      "openshift.io/sa.scc.uid-range": "1002080000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-23T14:57:58Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "d9a24b",
      environment: "tools",
      "kubernetes.io/metadata.name": "d9a24b-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "AEST",
      name: "d9a24b",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63cea16d184344042105f8ca",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "d9a24b-tools",
    resourceVersion: "1809647864",
    uid: "6d861034-4684-4a83-929d-ad7e111b619c"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "okanji"}, {"email": "billy.li@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "w8896699"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"okanji\\"}, {\\"email\\": \\"billy.li@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"w8896699\\"}]","openshift.io/description":"asdf","openshift.io/display-name":"Oamar test (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"dad3d6","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"AGRI","name":"dad3d6","profile_id":"6","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"dad3d6-dev"}}\n',
      "openshift.io/description": "asdf",
      "openshift.io/display-name": "Oamar test (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c44,c4",
      "openshift.io/sa.scc.supplemental-groups": "1001900000/10000",
      "openshift.io/sa.scc.uid-range": "1001900000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-21T10:38:36Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "dad3d6",
      environment: "dev",
      "kubernetes.io/metadata.name": "dad3d6-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "AGRI",
      name: "dad3d6",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "6",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "dad3d6-dev",
    resourceVersion: "1809647886",
    uid: "efcdfdc7-04a6-465e-952e-27caa48cbd3d"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "okanji"}, {"email": "billy.li@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "w8896699"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"okanji\\"}, {\\"email\\": \\"billy.li@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"w8896699\\"}]","openshift.io/description":"asdf","openshift.io/display-name":"Oamar test (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"dad3d6","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"AGRI","name":"dad3d6","profile_id":"6","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"dad3d6-prod"}}\n',
      "openshift.io/description": "asdf",
      "openshift.io/display-name": "Oamar test (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c44,c29",
      "openshift.io/sa.scc.supplemental-groups": "1001950000/10000",
      "openshift.io/sa.scc.uid-range": "1001950000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-21T10:38:36Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "dad3d6",
      environment: "prod",
      "kubernetes.io/metadata.name": "dad3d6-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "AGRI",
      name: "dad3d6",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "6",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "dad3d6-prod",
    resourceVersion: "1809647908",
    uid: "de9fb482-26e7-4647-8bee-98cdb7f84920"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "okanji"}, {"email": "billy.li@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "w8896699"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"okanji\\"}, {\\"email\\": \\"billy.li@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"w8896699\\"}]","openshift.io/description":"asdf","openshift.io/display-name":"Oamar test (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"dad3d6","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"AGRI","name":"dad3d6","profile_id":"6","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"dad3d6-test"}}\n',
      "openshift.io/description": "asdf",
      "openshift.io/display-name": "Oamar test (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c38,c37",
      "openshift.io/sa.scc.supplemental-groups": "1001480000/10000",
      "openshift.io/sa.scc.uid-range": "1001480000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-21T10:38:36Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "dad3d6",
      environment: "test",
      "kubernetes.io/metadata.name": "dad3d6-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "AGRI",
      name: "dad3d6",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "6",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "dad3d6-test",
    resourceVersion: "1809647932",
    uid: "f1a01694-b297-421b-9002-3281376bc712"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "okanji"}, {"email": "billy.li@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "w8896699"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"okanji\\"}, {\\"email\\": \\"billy.li@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"w8896699\\"}]","openshift.io/description":"asdf","openshift.io/display-name":"Oamar test (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"dad3d6","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"AGRI","name":"dad3d6","profile_id":"6","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"dad3d6-tools"}}\n',
      "openshift.io/description": "asdf",
      "openshift.io/display-name": "Oamar test (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c44,c34",
      "openshift.io/sa.scc.supplemental-groups": "1001960000/10000",
      "openshift.io/sa.scc.uid-range": "1001960000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-21T10:38:36Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "dad3d6",
      environment: "tools",
      "kubernetes.io/metadata.name": "dad3d6-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "AGRI",
      name: "dad3d6",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "6",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "dad3d6-tools",
    resourceVersion: "1809647955",
    uid: "e7efcac4-031d-42db-9f04-ec7a3b432042"
  },
  {
    annotations: {
      contacts:
        '[{"email": "shelly.han@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "shellyxuehan"}, {"email": "ian.1.watts@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "iankwatts"}, {"email": "olena.mitovska@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "mitovskaol"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"shelly.han@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"shellyxuehan\\"}, {\\"email\\": \\"ian.1.watts@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"iankwatts\\"}, {\\"email\\": \\"olena.mitovska@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"mitovskaol\\"}]","openshift.io/description":"A test project set created to test Vault service.","openshift.io/display-name":"Vault Test project (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"dbfa0f","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"dbfa0f","profile_id":"718","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"dbfa0f-dev"}}\n',
      "openshift.io/description":
        "A test project set created to test Vault service.",
      "openshift.io/display-name": "Vault Test project (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c35,c0",
      "openshift.io/sa.scc.supplemental-groups": "1001190000/10000",
      "openshift.io/sa.scc.uid-range": "1001190000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-04-27T18:46:13Z",
    labels: {
      "argocd.argoproj.io/managed-by": "openshift-bcgov-gitops-shared",
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "dbfa0f",
      environment: "dev",
      "kubernetes.io/metadata.name": "dbfa0f-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "dbfa0f",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "718",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "dbfa0f-dev",
    resourceVersion: "1809647978",
    uid: "f163ed10-431a-4910-b7c2-d435748ca0aa"
  },
  {
    annotations: {
      contacts:
        '[{"email": "shelly.han@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "shellyxuehan"}, {"email": "ian.1.watts@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "iankwatts"}, {"email": "olena.mitovska@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "mitovskaol"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"shelly.han@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"shellyxuehan\\"}, {\\"email\\": \\"ian.1.watts@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"iankwatts\\"}, {\\"email\\": \\"olena.mitovska@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"mitovskaol\\"}]","openshift.io/description":"A test project set created to test Vault service.","openshift.io/display-name":"Vault Test project (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"dbfa0f","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"dbfa0f","profile_id":"718","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"dbfa0f-prod"}}\n',
      "openshift.io/description":
        "A test project set created to test Vault service.",
      "openshift.io/display-name": "Vault Test project (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c34,c29",
      "openshift.io/sa.scc.supplemental-groups": "1001180000/10000",
      "openshift.io/sa.scc.uid-range": "1001180000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-04-27T18:46:13Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "dbfa0f",
      environment: "prod",
      "kubernetes.io/metadata.name": "dbfa0f-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "dbfa0f",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "718",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "dbfa0f-prod",
    resourceVersion: "1809648014",
    uid: "88d84d6d-6326-47b4-9681-71f14fae487f"
  },
  {
    annotations: {
      contacts:
        '[{"email": "shelly.han@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "shellyxuehan"}, {"email": "ian.1.watts@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "iankwatts"}, {"email": "olena.mitovska@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "mitovskaol"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"shelly.han@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"shellyxuehan\\"}, {\\"email\\": \\"ian.1.watts@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"iankwatts\\"}, {\\"email\\": \\"olena.mitovska@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"mitovskaol\\"}]","openshift.io/description":"A test project set created to test Vault service.","openshift.io/display-name":"Vault Test project (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"dbfa0f","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"dbfa0f","profile_id":"718","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"dbfa0f-test"}}\n',
      "openshift.io/description":
        "A test project set created to test Vault service.",
      "openshift.io/display-name": "Vault Test project (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c25,c20",
      "openshift.io/sa.scc.supplemental-groups": "1000640000/10000",
      "openshift.io/sa.scc.uid-range": "1000640000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-04-27T18:46:13Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "dbfa0f",
      environment: "test",
      "kubernetes.io/metadata.name": "dbfa0f-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "dbfa0f",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "718",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "dbfa0f-test",
    resourceVersion: "1809648046",
    uid: "bacc3b6a-9564-43c5-81ed-48ef111c2b01"
  },
  {
    annotations: {
      contacts:
        '[{"email": "shelly.han@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "shellyxuehan"}, {"email": "ian.1.watts@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "iankwatts"}, {"email": "olena.mitovska@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "mitovskaol"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"shelly.han@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"shellyxuehan\\"}, {\\"email\\": \\"ian.1.watts@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"iankwatts\\"}, {\\"email\\": \\"olena.mitovska@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"mitovskaol\\"}]","openshift.io/description":"A test project set created to test Vault service.","openshift.io/display-name":"Vault Test project (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"dbfa0f","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"dbfa0f","profile_id":"718","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"dbfa0f-tools"}}\n',
      "openshift.io/description":
        "A test project set created to test Vault service.",
      "openshift.io/display-name": "Vault Test project (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c35,c5",
      "openshift.io/sa.scc.supplemental-groups": "1001200000/10000",
      "openshift.io/sa.scc.uid-range": "1001200000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2022-04-27T18:46:13Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "dbfa0f",
      environment: "tools",
      "kubernetes.io/metadata.name": "dbfa0f-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "dbfa0f",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "718",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "dbfa0f-tools",
    resourceVersion: "1809648064",
    uid: "0c7f3af8-eecf-4609-be29-658aff444729"
  },
  {
    annotations: {
      contacts:
        '[{"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "artem.kravchenko@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test Feb 21.4","openshift.io/display-name":"Artem Test Feb 21.4 (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"def321","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"MMHA","name":"def321","profile_id":"63f50f67aa3dd94f05ff2193","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"def321-dev"}}\n',
      "openshift.io/description": "Artem Test Feb 21.4",
      "openshift.io/display-name": "Artem Test Feb 21.4 (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c52,c34",
      "openshift.io/sa.scc.supplemental-groups": "1002720000/10000",
      "openshift.io/sa.scc.uid-range": "1002720000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-21T18:47:43Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "def321",
      environment: "dev",
      "kubernetes.io/metadata.name": "def321-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "MMHA",
      name: "def321",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63f50f67aa3dd94f05ff2193",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "def321-dev",
    resourceVersion: "1809648100",
    uid: "96cd0629-b7f0-4c3f-a6c0-30a64bbfd3a9"
  },
  {
    annotations: {
      contacts:
        '[{"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "artem.kravchenko@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test Feb 21.4","openshift.io/display-name":"Artem Test Feb 21.4 (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"def321","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"MMHA","name":"def321","profile_id":"63f50f67aa3dd94f05ff2193","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"def321-prod"}}\n',
      "openshift.io/description": "Artem Test Feb 21.4",
      "openshift.io/display-name": "Artem Test Feb 21.4 (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c52,c29",
      "openshift.io/sa.scc.supplemental-groups": "1002710000/10000",
      "openshift.io/sa.scc.uid-range": "1002710000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-21T18:47:43Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "def321",
      environment: "prod",
      "kubernetes.io/metadata.name": "def321-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "MMHA",
      name: "def321",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63f50f67aa3dd94f05ff2193",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "def321-prod",
    resourceVersion: "1809648123",
    uid: "85947a1d-369b-475d-b260-66af3f0ce6ae"
  },
  {
    annotations: {
      contacts:
        '[{"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "artem.kravchenko@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test Feb 21.4","openshift.io/display-name":"Artem Test Feb 21.4 (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"def321","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"MMHA","name":"def321","profile_id":"63f50f67aa3dd94f05ff2193","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"def321-test"}}\n',
      "openshift.io/description": "Artem Test Feb 21.4",
      "openshift.io/display-name": "Artem Test Feb 21.4 (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c52,c44",
      "openshift.io/sa.scc.supplemental-groups": "1002740000/10000",
      "openshift.io/sa.scc.uid-range": "1002740000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-21T18:47:43Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "def321",
      environment: "test",
      "kubernetes.io/metadata.name": "def321-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "MMHA",
      name: "def321",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63f50f67aa3dd94f05ff2193",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "def321-test",
    resourceVersion: "1809648143",
    uid: "ba6a9584-1a5c-48ca-b570-2f8f34765567"
  },
  {
    annotations: {
      contacts:
        '[{"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "artem.kravchenko@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test Feb 21.4","openshift.io/display-name":"Artem Test Feb 21.4 (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"def321","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"MMHA","name":"def321","profile_id":"63f50f67aa3dd94f05ff2193","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"def321-tools"}}\n',
      "openshift.io/description": "Artem Test Feb 21.4",
      "openshift.io/display-name": "Artem Test Feb 21.4 (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c52,c39",
      "openshift.io/sa.scc.supplemental-groups": "1002730000/10000",
      "openshift.io/sa.scc.uid-range": "1002730000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-21T18:47:43Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "def321",
      environment: "tools",
      "kubernetes.io/metadata.name": "def321-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "MMHA",
      name: "def321",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63f50f67aa3dd94f05ff2193",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "def321-tools",
    resourceVersion: "1809648164",
    uid: "d83b7c84-977c-42b5-8d8e-bceede476162"
  },
  {
    annotations: {
      contacts:
        '[{"email": "yossi.tamari@quartech.com", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "ytqsl"}, {"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "graeme.godfrey@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"yossi.tamari@quartech.com\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"ytqsl\\"}, {\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rloisell\\"}, {\\"email\\": \\"graeme.godfrey@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ag-pssg-isb-sa\\"}]","openshift.io/description":"Test out HTTP2 Ingress Connectivity in OpenShift","openshift.io/display-name":"HTTP2 Test Project (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"e07c51","environment":"dev","memory_quota":"memory-request-16-limit-32","ministry_id":"EMBC","name":"e07c51","profile_id":"598","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"e07c51-dev"}}\n',
      "openshift.io/description":
        "Test out HTTP2 Ingress Connectivity in OpenShift",
      "openshift.io/display-name": "HTTP2 Test Project (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c37,c29",
      "openshift.io/sa.scc.supplemental-groups": "1001390000/10000",
      "openshift.io/sa.scc.uid-range": "1001390000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-11-23T17:35:07Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "e07c51",
      environment: "dev",
      "kubernetes.io/metadata.name": "e07c51-dev",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "EMBC",
      name: "e07c51",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "598",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "e07c51-dev",
    resourceVersion: "1809648324",
    uid: "c5a355b5-33e5-44c4-9e60-e77ad66fdb9d"
  },
  {
    annotations: {
      contacts:
        '[{"email": "yossi.tamari@quartech.com", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "ytqsl"}, {"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "graeme.godfrey@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"yossi.tamari@quartech.com\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"ytqsl\\"}, {\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rloisell\\"}, {\\"email\\": \\"graeme.godfrey@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ag-pssg-isb-sa\\"}]","openshift.io/description":"Test out HTTP2 Ingress Connectivity in OpenShift","openshift.io/display-name":"HTTP2 Test Project (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"e07c51","environment":"prod","memory_quota":"memory-request-16-limit-32","ministry_id":"EMBC","name":"e07c51","profile_id":"598","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"e07c51-prod"}}\n',
      "openshift.io/description":
        "Test out HTTP2 Ingress Connectivity in OpenShift",
      "openshift.io/display-name": "HTTP2 Test Project (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c38,c27",
      "openshift.io/sa.scc.supplemental-groups": "1001460000/10000",
      "openshift.io/sa.scc.uid-range": "1001460000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-11-23T17:35:07Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "e07c51",
      environment: "prod",
      "kubernetes.io/metadata.name": "e07c51-prod",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "EMBC",
      name: "e07c51",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "598",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "e07c51-prod",
    resourceVersion: "1809648345",
    uid: "2dac58a1-fba2-4a10-843a-848ba6f069c1"
  },
  {
    annotations: {
      contacts:
        '[{"email": "yossi.tamari@quartech.com", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "ytqsl"}, {"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "graeme.godfrey@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"yossi.tamari@quartech.com\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"ytqsl\\"}, {\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rloisell\\"}, {\\"email\\": \\"graeme.godfrey@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ag-pssg-isb-sa\\"}]","openshift.io/description":"Test out HTTP2 Ingress Connectivity in OpenShift","openshift.io/display-name":"HTTP2 Test Project (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"e07c51","environment":"test","memory_quota":"memory-request-16-limit-32","ministry_id":"EMBC","name":"e07c51","profile_id":"598","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"e07c51-test"}}\n',
      "openshift.io/description":
        "Test out HTTP2 Ingress Connectivity in OpenShift",
      "openshift.io/display-name": "HTTP2 Test Project (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c38,c22",
      "openshift.io/sa.scc.supplemental-groups": "1001450000/10000",
      "openshift.io/sa.scc.uid-range": "1001450000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-11-23T17:35:07Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "e07c51",
      environment: "test",
      "kubernetes.io/metadata.name": "e07c51-test",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "EMBC",
      name: "e07c51",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "598",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "e07c51-test",
    resourceVersion: "1809648367",
    uid: "69023f85-3ec5-4e96-8605-f95f55b864cc"
  },
  {
    annotations: {
      contacts:
        '[{"email": "yossi.tamari@quartech.com", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "ytqsl"}, {"email": "ryan.loiselle@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rloisell"}, {"email": "graeme.godfrey@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ag-pssg-isb-sa"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"yossi.tamari@quartech.com\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"ytqsl\\"}, {\\"email\\": \\"ryan.loiselle@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rloisell\\"}, {\\"email\\": \\"graeme.godfrey@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ag-pssg-isb-sa\\"}]","openshift.io/description":"Test out HTTP2 Ingress Connectivity in OpenShift","openshift.io/display-name":"HTTP2 Test Project (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"e07c51","environment":"tools","memory_quota":"memory-request-16-limit-32","ministry_id":"EMBC","name":"e07c51","profile_id":"598","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"e07c51-tools"}}\n',
      "openshift.io/description":
        "Test out HTTP2 Ingress Connectivity in OpenShift",
      "openshift.io/display-name": "HTTP2 Test Project (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c38,c7",
      "openshift.io/sa.scc.supplemental-groups": "1001420000/10000",
      "openshift.io/sa.scc.uid-range": "1001420000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-11-23T17:35:07Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "e07c51",
      environment: "tools",
      "kubernetes.io/metadata.name": "e07c51-tools",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "EMBC",
      name: "e07c51",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "598",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "e07c51-tools",
    resourceVersion: "1809648392",
    uid: "f1b93a80-3711-4f43-b3f0-ffb8afd47cf5"
  },
  {
    annotations: {
      contacts:
        '[{"email": "alexandra.lloyd@gov.bc.ca", "role": "owner"}, {"email": "alexandra.lloyd@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"alexandra.lloyd@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"alexandra.lloyd@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"Just a control for the old registry ","openshift.io/display-name":"alex Test (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"e22aaa","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"AEST","name":"e22aaa","profile_id":"64134d808df2bbb33e540364","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-2"},"name":"e22aaa-dev"}}\n',
      "openshift.io/description": "Just a control for the old registry ",
      "openshift.io/display-name": "alex Test (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c47,c24",
      "openshift.io/sa.scc.supplemental-groups": "1002210000/10000",
      "openshift.io/sa.scc.uid-range": "1002210000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-24T22:48:58Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "e22aaa",
      environment: "dev",
      "kubernetes.io/metadata.name": "e22aaa-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "AEST",
      name: "e22aaa",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "64134d808df2bbb33e540364",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-2"
    },
    name: "e22aaa-dev",
    resourceVersion: "1809648427",
    uid: "a861cc29-ea3f-4497-ae85-30662280370a"
  },
  {
    annotations: {
      contacts:
        '[{"email": "alexandra.lloyd@gov.bc.ca", "role": "owner"}, {"email": "alexandra.lloyd@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"alexandra.lloyd@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"alexandra.lloyd@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"Just a control for the old registry ","openshift.io/display-name":"alex Test (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"e22aaa","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"AEST","name":"e22aaa","profile_id":"64134d808df2bbb33e540364","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"e22aaa-prod"}}\n',
      "openshift.io/description": "Just a control for the old registry ",
      "openshift.io/display-name": "alex Test (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c47,c9",
      "openshift.io/sa.scc.supplemental-groups": "1002180000/10000",
      "openshift.io/sa.scc.uid-range": "1002180000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-24T22:48:58Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "e22aaa",
      environment: "prod",
      "kubernetes.io/metadata.name": "e22aaa-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "AEST",
      name: "e22aaa",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "64134d808df2bbb33e540364",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "e22aaa-prod",
    resourceVersion: "1809648445",
    uid: "8967ce39-69be-486c-b03b-1da1978573f5"
  },
  {
    annotations: {
      contacts:
        '[{"email": "alexandra.lloyd@gov.bc.ca", "role": "owner"}, {"email": "alexandra.lloyd@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"alexandra.lloyd@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"alexandra.lloyd@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"Just a control for the old registry ","openshift.io/display-name":"alex Test (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-2-limit-4","devops.gov.bc.ca/gitops-app":"e22aaa","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"AEST","name":"e22aaa","profile_id":"64134d808df2bbb33e540364","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"e22aaa-test"}}\n',
      "openshift.io/description": "Just a control for the old registry ",
      "openshift.io/display-name": "alex Test (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c47,c14",
      "openshift.io/sa.scc.supplemental-groups": "1002190000/10000",
      "openshift.io/sa.scc.uid-range": "1002190000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-24T22:48:58Z",
    labels: {
      cpu_quota: "cpu-request-2-limit-4",
      "devops.gov.bc.ca/gitops-app": "e22aaa",
      environment: "test",
      "kubernetes.io/metadata.name": "e22aaa-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "AEST",
      name: "e22aaa",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "64134d808df2bbb33e540364",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "e22aaa-test",
    resourceVersion: "1809648461",
    uid: "baefb56f-0ea3-4943-8b09-8080a6fb6dc6"
  },
  {
    annotations: {
      contacts:
        '[{"email": "alexandra.lloyd@gov.bc.ca", "role": "owner"}, {"email": "alexandra.lloyd@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"alexandra.lloyd@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"alexandra.lloyd@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"Just a control for the old registry ","openshift.io/display-name":"alex Test (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"e22aaa","environment":"tools","memory_quota":"memory-request-16-limit-32","ministry_id":"AEST","name":"e22aaa","profile_id":"64134d808df2bbb33e540364","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"e22aaa-tools"}}\n',
      "openshift.io/description": "Just a control for the old registry ",
      "openshift.io/display-name": "alex Test (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c47,c19",
      "openshift.io/sa.scc.supplemental-groups": "1002200000/10000",
      "openshift.io/sa.scc.uid-range": "1002200000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-24T22:48:58Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "e22aaa",
      environment: "tools",
      "kubernetes.io/metadata.name": "e22aaa-tools",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "AEST",
      name: "e22aaa",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "64134d808df2bbb33e540364",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "e22aaa-tools",
    resourceVersion: "1809648497",
    uid: "2ce4fd88-e150-4a10-9a26-3b522bcde985"
  },
  {
    annotations: {
      contacts:
        '[{"email": "faisal.hamood@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "faisal-hamood"}, {"email": "roland.stens@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rstens"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"faisal.hamood@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"faisal-hamood\\"}, {\\"email\\": \\"roland.stens@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rstens\\"}]","openshift.io/description":"A technical space that allows for the tools, check and tests to be run after an OpenShift Platform update (software/hardware). This is part of this CWU: https://marketplace.digital.gov.bc.ca/opportunities/code-with-us/4bf245cb-8800-4535-8ea1-7d1324c39a55","openshift.io/display-name":"Post Update Testing (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-8-limit-16","devops.gov.bc.ca/gitops-app":"e31b6b","environment":"dev","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"e31b6b","profile_id":"1096","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"e31b6b-dev"}}\n',
      "openshift.io/description":
        "A technical space that allows for the tools, check and tests to be run after an OpenShift Platform update (software/hardware). This is part of this CWU: https://marketplace.digital.gov.bc.ca/opportunities/code-with-us/4bf245cb-8800-4535-8ea1-7d1324c39a55",
      "openshift.io/display-name": "Post Update Testing (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c50,c30",
      "openshift.io/sa.scc.supplemental-groups": "1002510000/10000",
      "openshift.io/sa.scc.uid-range": "1002510000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-10T23:38:48Z",
    labels: {
      cpu_quota: "cpu-request-8-limit-16",
      "devops.gov.bc.ca/gitops-app": "e31b6b",
      environment: "dev",
      "kubernetes.io/metadata.name": "e31b6b-dev",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "e31b6b",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "1096",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "e31b6b-dev",
    resourceVersion: "1809648527",
    uid: "c30bedb1-1d0a-4021-94ad-1528962ecb0a"
  },
  {
    annotations: {
      contacts:
        '[{"email": "faisal.hamood@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "faisal-hamood"}, {"email": "roland.stens@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rstens"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"faisal.hamood@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"faisal-hamood\\"}, {\\"email\\": \\"roland.stens@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rstens\\"}]","openshift.io/description":"A technical space that allows for the tools, check and tests to be run after an OpenShift Platform update (software/hardware). This is part of this CWU: https://marketplace.digital.gov.bc.ca/opportunities/code-with-us/4bf245cb-8800-4535-8ea1-7d1324c39a55","openshift.io/display-name":"Post Update Testing (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"e31b6b","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"e31b6b","profile_id":"1096","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"e31b6b-prod"}}\n',
      "openshift.io/description":
        "A technical space that allows for the tools, check and tests to be run after an OpenShift Platform update (software/hardware). This is part of this CWU: https://marketplace.digital.gov.bc.ca/opportunities/code-with-us/4bf245cb-8800-4535-8ea1-7d1324c39a55",
      "openshift.io/display-name": "Post Update Testing (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c50,c45",
      "openshift.io/sa.scc.supplemental-groups": "1002540000/10000",
      "openshift.io/sa.scc.uid-range": "1002540000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-10T23:38:48Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "e31b6b",
      environment: "prod",
      "kubernetes.io/metadata.name": "e31b6b-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "e31b6b",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "1096",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "e31b6b-prod",
    resourceVersion: "1809648546",
    uid: "07effa11-c578-41f1-968e-f89130bcaa42"
  },
  {
    annotations: {
      contacts:
        '[{"email": "faisal.hamood@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "faisal-hamood"}, {"email": "roland.stens@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rstens"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"faisal.hamood@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"faisal-hamood\\"}, {\\"email\\": \\"roland.stens@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rstens\\"}]","openshift.io/description":"A technical space that allows for the tools, check and tests to be run after an OpenShift Platform update (software/hardware). This is part of this CWU: https://marketplace.digital.gov.bc.ca/opportunities/code-with-us/4bf245cb-8800-4535-8ea1-7d1324c39a55","openshift.io/display-name":"Post Update Testing (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"e31b6b","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"e31b6b","profile_id":"1096","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"e31b6b-test"}}\n',
      "openshift.io/description":
        "A technical space that allows for the tools, check and tests to be run after an OpenShift Platform update (software/hardware). This is part of this CWU: https://marketplace.digital.gov.bc.ca/opportunities/code-with-us/4bf245cb-8800-4535-8ea1-7d1324c39a55",
      "openshift.io/display-name": "Post Update Testing (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c50,c40",
      "openshift.io/sa.scc.supplemental-groups": "1002530000/10000",
      "openshift.io/sa.scc.uid-range": "1002530000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-10T23:38:48Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "e31b6b",
      environment: "test",
      "kubernetes.io/metadata.name": "e31b6b-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "e31b6b",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "1096",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "e31b6b-test",
    resourceVersion: "1809648570",
    uid: "78c78985-466b-4c98-a8af-ac8684a2a46c"
  },
  {
    annotations: {
      contacts:
        '[{"email": "faisal.hamood@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "faisal-hamood"}, {"email": "roland.stens@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "rstens"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"faisal.hamood@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"faisal-hamood\\"}, {\\"email\\": \\"roland.stens@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"rstens\\"}]","openshift.io/description":"A technical space that allows for the tools, check and tests to be run after an OpenShift Platform update (software/hardware). This is part of this CWU: https://marketplace.digital.gov.bc.ca/opportunities/code-with-us/4bf245cb-8800-4535-8ea1-7d1324c39a55","openshift.io/display-name":"Post Update Testing (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"e31b6b","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"e31b6b","profile_id":"1096","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"e31b6b-tools"}}\n',
      "openshift.io/description":
        "A technical space that allows for the tools, check and tests to be run after an OpenShift Platform update (software/hardware). This is part of this CWU: https://marketplace.digital.gov.bc.ca/opportunities/code-with-us/4bf245cb-8800-4535-8ea1-7d1324c39a55",
      "openshift.io/display-name": "Post Update Testing (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c51,c0",
      "openshift.io/sa.scc.supplemental-groups": "1002550000/10000",
      "openshift.io/sa.scc.uid-range": "1002550000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-10T23:38:48Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "e31b6b",
      environment: "tools",
      "kubernetes.io/metadata.name": "e31b6b-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "e31b6b",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "1096",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "e31b6b-tools",
    resourceVersion: "1809648595",
    uid: "8a900c0a-0ea1-4382-8b36-d937f252645b"
  },
  {
    annotations: {
      contacts:
        '[{"email": "michael.shire@arctiq.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "michaelshire"}, {"email": "justin@justinpye.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "j-pye"}, {"email": "olena.mitovska@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "mitovskaol"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"michael.shire@arctiq.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"michaelshire\\"}, {\\"email\\": \\"justin@justinpye.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"j-pye\\"}, {\\"email\\": \\"olena.mitovska@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"mitovskaol\\"}]","openshift.io/description":"A sandbox project set for Arctiq Team","openshift.io/display-name":"arctiq Sandbox (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"e595b8","environment":"dev","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"e595b8","profile_id":"514","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"e595b8-dev"}}\n',
      "openshift.io/description": "A sandbox project set for Arctiq Team",
      "openshift.io/display-name": "arctiq Sandbox (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c33,c7",
      "openshift.io/sa.scc.supplemental-groups": "1001070000/10000",
      "openshift.io/sa.scc.uid-range": "1001070000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-09-01T19:51:21Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "e595b8",
      environment: "dev",
      "kubernetes.io/metadata.name": "e595b8-dev",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "e595b8",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "514",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "e595b8-dev",
    resourceVersion: "1809648616",
    uid: "219370ba-62f5-4406-a7a7-eb134e2cbaec"
  },
  {
    annotations: {
      contacts:
        '[{"email": "michael.shire@arctiq.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "michaelshire"}, {"email": "justin@justinpye.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "j-pye"}, {"email": "olena.mitovska@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "mitovskaol"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"michael.shire@arctiq.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"michaelshire\\"}, {\\"email\\": \\"justin@justinpye.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"j-pye\\"}, {\\"email\\": \\"olena.mitovska@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"mitovskaol\\"}]","openshift.io/description":"A sandbox project set for Arctiq Team","openshift.io/display-name":"arctiq Sandbox (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"e595b8","environment":"prod","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"e595b8","profile_id":"514","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"e595b8-prod"}}\n',
      "openshift.io/description": "A sandbox project set for Arctiq Team",
      "openshift.io/display-name": "arctiq Sandbox (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c33,c2",
      "openshift.io/sa.scc.supplemental-groups": "1001060000/10000",
      "openshift.io/sa.scc.uid-range": "1001060000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-09-01T19:51:21Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "e595b8",
      environment: "prod",
      "kubernetes.io/metadata.name": "e595b8-prod",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "e595b8",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "514",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "e595b8-prod",
    resourceVersion: "1809648641",
    uid: "a93b2cc7-f426-4ea4-a3f9-6c5799c1db7d"
  },
  {
    annotations: {
      contacts:
        '[{"email": "michael.shire@arctiq.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "michaelshire"}, {"email": "justin@justinpye.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "j-pye"}, {"email": "olena.mitovska@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "mitovskaol"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"michael.shire@arctiq.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"michaelshire\\"}, {\\"email\\": \\"justin@justinpye.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"j-pye\\"}, {\\"email\\": \\"olena.mitovska@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"mitovskaol\\"}]","openshift.io/description":"A sandbox project set for Arctiq Team","openshift.io/display-name":"arctiq Sandbox (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"e595b8","environment":"test","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"e595b8","profile_id":"514","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"e595b8-test"}}\n',
      "openshift.io/description": "A sandbox project set for Arctiq Team",
      "openshift.io/display-name": "arctiq Sandbox (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c32,c24",
      "openshift.io/sa.scc.supplemental-groups": "1001040000/10000",
      "openshift.io/sa.scc.uid-range": "1001040000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-09-01T19:51:21Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "e595b8",
      environment: "test",
      "kubernetes.io/metadata.name": "e595b8-test",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "e595b8",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "514",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "e595b8-test",
    resourceVersion: "1809648674",
    uid: "84fa2a6e-eede-450f-8623-e23ddfc19261"
  },
  {
    annotations: {
      contacts:
        '[{"email": "michael.shire@arctiq.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "michaelshire"}, {"email": "justin@justinpye.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "j-pye"}, {"email": "olena.mitovska@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "mitovskaol"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"michael.shire@arctiq.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"michaelshire\\"}, {\\"email\\": \\"justin@justinpye.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"j-pye\\"}, {\\"email\\": \\"olena.mitovska@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"mitovskaol\\"}]","openshift.io/description":"A sandbox project set for Arctiq Team","openshift.io/display-name":"arctiq Sandbox (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-2-limit-4","devops.gov.bc.ca/gitops-app":"e595b8","environment":"tools","memory_quota":"memory-request-8-limit-16","ministry_id":"CITZ","name":"e595b8","profile_id":"514","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"e595b8-tools"}}\n',
      "openshift.io/description": "A sandbox project set for Arctiq Team",
      "openshift.io/display-name": "arctiq Sandbox (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c32,c19",
      "openshift.io/sa.scc.supplemental-groups": "1001030000/10000",
      "openshift.io/sa.scc.uid-range": "1001030000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-09-01T19:51:21Z",
    labels: {
      cpu_quota: "cpu-request-2-limit-4",
      "devops.gov.bc.ca/gitops-app": "e595b8",
      environment: "tools",
      "kubernetes.io/metadata.name": "e595b8-tools",
      memory_quota: "memory-request-8-limit-16",
      ministry_id: "CITZ",
      name: "e595b8",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "514",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "e595b8-tools",
    resourceVersion: "1809648698",
    uid: "912846b5-5c63-4f39-8172-46054654b02a"
  },
  {
    annotations: {
      contacts:
        '[{"email": "leo.lou@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "ll911"}, {"email": "leo.lou@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ll911"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"leo.lou@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"ll911\\"}, {\\"email\\": \\"leo.lou@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ll911\\"}]","openshift.io/description":"Test Namespace For Leo Lou","openshift.io/display-name":"Test Namespace For Leo Lou (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"e7c518","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"e7c518","profile_id":"1018","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"e7c518-dev"}}\n',
      "openshift.io/description": "Test Namespace For Leo Lou",
      "openshift.io/display-name": "Test Namespace For Leo Lou (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c43,c37",
      "openshift.io/sa.scc.supplemental-groups": "1001880000/10000",
      "openshift.io/sa.scc.uid-range": "1001880000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-19T23:49:38Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "e7c518",
      environment: "dev",
      "kubernetes.io/metadata.name": "e7c518-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "e7c518",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "1018",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "e7c518-dev",
    resourceVersion: "1809648717",
    uid: "d2dc9390-d418-4cb3-bbda-608fea02d994"
  },
  {
    annotations: {
      contacts:
        '[{"email": "leo.lou@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "ll911"}, {"email": "leo.lou@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ll911"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"leo.lou@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"ll911\\"}, {\\"email\\": \\"leo.lou@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ll911\\"}]","openshift.io/description":"Test Namespace For Leo Lou","openshift.io/display-name":"Test Namespace For Leo Lou (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"e7c518","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"e7c518","profile_id":"1018","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"e7c518-prod"}}\n',
      "openshift.io/description": "Test Namespace For Leo Lou",
      "openshift.io/display-name": "Test Namespace For Leo Lou (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c43,c27",
      "openshift.io/sa.scc.supplemental-groups": "1001860000/10000",
      "openshift.io/sa.scc.uid-range": "1001860000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-19T23:49:38Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "e7c518",
      environment: "prod",
      "kubernetes.io/metadata.name": "e7c518-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "e7c518",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "1018",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "e7c518-prod",
    resourceVersion: "1809648733",
    uid: "9f7f679f-7c69-4522-b57a-94a48f9cb65f"
  },
  {
    annotations: {
      contacts:
        '[{"email": "leo.lou@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "ll911"}, {"email": "leo.lou@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ll911"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"leo.lou@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"ll911\\"}, {\\"email\\": \\"leo.lou@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ll911\\"}]","openshift.io/description":"Test Namespace For Leo Lou","openshift.io/display-name":"Test Namespace For Leo Lou (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"e7c518","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"e7c518","profile_id":"1018","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"e7c518-test"}}\n',
      "openshift.io/description": "Test Namespace For Leo Lou",
      "openshift.io/display-name": "Test Namespace For Leo Lou (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c43,c42",
      "openshift.io/sa.scc.supplemental-groups": "1001890000/10000",
      "openshift.io/sa.scc.uid-range": "1001890000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-19T23:49:38Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "e7c518",
      environment: "test",
      "kubernetes.io/metadata.name": "e7c518-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "e7c518",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "1018",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "e7c518-test",
    resourceVersion: "1809648757",
    uid: "bcfea592-d2de-4513-a1e6-6a34568ddd8a"
  },
  {
    annotations: {
      contacts:
        '[{"email": "leo.lou@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "ll911"}, {"email": "leo.lou@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "ll911"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"leo.lou@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"ll911\\"}, {\\"email\\": \\"leo.lou@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"ll911\\"}]","openshift.io/description":"Test Namespace For Leo Lou","openshift.io/display-name":"Test Namespace For Leo Lou (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"e7c518","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"e7c518","profile_id":"1018","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"e7c518-tools"}}\n',
      "openshift.io/description": "Test Namespace For Leo Lou",
      "openshift.io/display-name": "Test Namespace For Leo Lou (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c43,c32",
      "openshift.io/sa.scc.supplemental-groups": "1001870000/10000",
      "openshift.io/sa.scc.uid-range": "1001870000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-19T23:49:38Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "e7c518",
      environment: "tools",
      "kubernetes.io/metadata.name": "e7c518-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "e7c518",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "1018",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "e7c518-tools",
    resourceVersion: "1809648779",
    uid: "c8fc25c4-b187-40e1-9dae-5c2e0a33c289"
  },
  {
    annotations: {
      contacts:
        '[{"email": "zhanna.kolesnyk@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}, {"email": "artem.kravchenko@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"zhanna.kolesnyk@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test 27.1","openshift.io/display-name":"Artem Test 27.1 (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"eab8db","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"ENV","name":"eab8db","profile_id":"63fd2b2078428def7df286b3","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"eab8db-dev"}}\n',
      "openshift.io/description": "Artem Test 27.1",
      "openshift.io/display-name": "Artem Test 27.1 (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c55,c30",
      "openshift.io/sa.scc.supplemental-groups": "1003030000/10000",
      "openshift.io/sa.scc.uid-range": "1003030000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-27T22:26:24Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "eab8db",
      environment: "dev",
      "kubernetes.io/metadata.name": "eab8db-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "ENV",
      name: "eab8db",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63fd2b2078428def7df286b3",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "eab8db-dev",
    resourceVersion: "1809648799",
    uid: "a025a5f4-3b96-4842-b0b0-664607248304"
  },
  {
    annotations: {
      contacts:
        '[{"email": "zhanna.kolesnyk@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}, {"email": "artem.kravchenko@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"zhanna.kolesnyk@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test 27.1","openshift.io/display-name":"Artem Test 27.1 (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"eab8db","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"ENV","name":"eab8db","profile_id":"63fd2b2078428def7df286b3","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"eab8db-prod"}}\n',
      "openshift.io/description": "Artem Test 27.1",
      "openshift.io/display-name": "Artem Test 27.1 (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c55,c35",
      "openshift.io/sa.scc.supplemental-groups": "1003040000/10000",
      "openshift.io/sa.scc.uid-range": "1003040000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-27T22:26:24Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "eab8db",
      environment: "prod",
      "kubernetes.io/metadata.name": "eab8db-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "ENV",
      name: "eab8db",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63fd2b2078428def7df286b3",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "eab8db-prod",
    resourceVersion: "1809648815",
    uid: "4d0699b0-9ac8-4d9b-9640-eb4a4383b5df"
  },
  {
    annotations: {
      contacts:
        '[{"email": "zhanna.kolesnyk@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}, {"email": "artem.kravchenko@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"zhanna.kolesnyk@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test 27.1","openshift.io/display-name":"Artem Test 27.1 (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"eab8db","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"ENV","name":"eab8db","profile_id":"63fd2b2078428def7df286b3","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"eab8db-test"}}\n',
      "openshift.io/description": "Artem Test 27.1",
      "openshift.io/display-name": "Artem Test 27.1 (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c55,c20",
      "openshift.io/sa.scc.supplemental-groups": "1003010000/10000",
      "openshift.io/sa.scc.uid-range": "1003010000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-27T22:26:24Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "eab8db",
      environment: "test",
      "kubernetes.io/metadata.name": "eab8db-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "ENV",
      name: "eab8db",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63fd2b2078428def7df286b3",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "eab8db-test",
    resourceVersion: "1809648832",
    uid: "55413fa7-e1ed-416c-916f-51e1d58ba576"
  },
  {
    annotations: {
      contacts:
        '[{"email": "zhanna.kolesnyk@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}, {"email": "artem.kravchenko@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"zhanna.kolesnyk@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test 27.1","openshift.io/display-name":"Artem Test 27.1 (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"eab8db","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"ENV","name":"eab8db","profile_id":"63fd2b2078428def7df286b3","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"eab8db-tools"}}\n',
      "openshift.io/description": "Artem Test 27.1",
      "openshift.io/display-name": "Artem Test 27.1 (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c55,c25",
      "openshift.io/sa.scc.supplemental-groups": "1003020000/10000",
      "openshift.io/sa.scc.uid-range": "1003020000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-27T22:26:24Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "eab8db",
      environment: "tools",
      "kubernetes.io/metadata.name": "eab8db-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "ENV",
      name: "eab8db",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63fd2b2078428def7df286b3",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "eab8db-tools",
    resourceVersion: "1809648847",
    uid: "7aad541c-e6d2-4ef9-adff-9114aaf34ace"
  },
  {
    annotations: {
      contacts:
        '[{"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "Luke.gonis@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "lukegonis"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"Luke.gonis@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"lukegonis\\"}]","openshift.io/description":"Test","openshift.io/display-name":"Alex L Test Feb 1 (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"ebf156","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"ebf156","profile_id":"63daf3ef4cccf9d3283f648e","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"ebf156-dev"}}\n',
      "openshift.io/description": "Test",
      "openshift.io/display-name": "Alex L Test Feb 1 (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c48,c47",
      "openshift.io/sa.scc.supplemental-groups": "1002350000/10000",
      "openshift.io/sa.scc.uid-range": "1002350000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-01T23:11:11Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "ebf156",
      environment: "dev",
      "kubernetes.io/metadata.name": "ebf156-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "ebf156",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63daf3ef4cccf9d3283f648e",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "ebf156-dev",
    resourceVersion: "1809648864",
    uid: "64286ffc-ecfd-4249-ad6b-719649bdf7d6"
  },
  {
    annotations: {
      contacts:
        '[{"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "Luke.gonis@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "lukegonis"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"Luke.gonis@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"lukegonis\\"}]","openshift.io/description":"Test","openshift.io/display-name":"Alex L Test Feb 1 (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"ebf156","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"ebf156","profile_id":"63daf3ef4cccf9d3283f648e","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"ebf156-prod"}}\n',
      "openshift.io/description": "Test",
      "openshift.io/display-name": "Alex L Test Feb 1 (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c49,c9",
      "openshift.io/sa.scc.supplemental-groups": "1002370000/10000",
      "openshift.io/sa.scc.uid-range": "1002370000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-01T23:11:11Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "ebf156",
      environment: "prod",
      "kubernetes.io/metadata.name": "ebf156-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "ebf156",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63daf3ef4cccf9d3283f648e",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "ebf156-prod",
    resourceVersion: "1809648878",
    uid: "d5ec2cdc-385e-4aa6-8657-a8cdffe1938b"
  },
  {
    annotations: {
      contacts:
        '[{"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "Luke.gonis@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "lukegonis"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"Luke.gonis@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"lukegonis\\"}]","openshift.io/description":"Test","openshift.io/display-name":"Alex L Test Feb 1 (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"ebf156","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"ebf156","profile_id":"63daf3ef4cccf9d3283f648e","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"ebf156-test"}}\n',
      "openshift.io/description": "Test",
      "openshift.io/display-name": "Alex L Test Feb 1 (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c48,c42",
      "openshift.io/sa.scc.supplemental-groups": "1002340000/10000",
      "openshift.io/sa.scc.uid-range": "1002340000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-01T23:11:11Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "ebf156",
      environment: "test",
      "kubernetes.io/metadata.name": "ebf156-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "ebf156",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63daf3ef4cccf9d3283f648e",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "ebf156-test",
    resourceVersion: "1809648900",
    uid: "ee0db6e7-4609-4de5-a36b-69747a2ee065"
  },
  {
    annotations: {
      contacts:
        '[{"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "Luke.gonis@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "lukegonis"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"Luke.gonis@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"lukegonis\\"}]","openshift.io/description":"Test","openshift.io/display-name":"Alex L Test Feb 1 (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"ebf156","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"ebf156","profile_id":"63daf3ef4cccf9d3283f648e","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"ebf156-tools"}}\n',
      "openshift.io/description": "Test",
      "openshift.io/display-name": "Alex L Test Feb 1 (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c49,c4",
      "openshift.io/sa.scc.supplemental-groups": "1002360000/10000",
      "openshift.io/sa.scc.uid-range": "1002360000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-01T23:11:11Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "ebf156",
      environment: "tools",
      "kubernetes.io/metadata.name": "ebf156-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "ebf156",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63daf3ef4cccf9d3283f648e",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "ebf156-tools",
    resourceVersion: "1809648917",
    uid: "2f34d744-e41e-44ea-9f27-f456bde6910b"
  },
  {
    annotations: {
      contacts:
        '[{"email": "alexandra.lloyd@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "alexandralloyd"}, {"email": "alexandra.lloyd@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "alexandralloyd"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"alexandra.lloyd@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"alexandralloyd\\"}, {\\"email\\": \\"alexandra.lloyd@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"alexandralloyd\\"}]","openshift.io/description":"First PO test using my own GitHub ID ","openshift.io/display-name":"Alex Test 1  (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"ed6e0e","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"ed6e0e","profile_id":"63cf1425184344042105f8d0","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"ed6e0e-dev"}}\n',
      "openshift.io/description": "First PO test using my own GitHub ID ",
      "openshift.io/display-name": "Alex Test 1  (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c46,c30",
      "openshift.io/sa.scc.supplemental-groups": "1002130000/10000",
      "openshift.io/sa.scc.uid-range": "1002130000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-24T00:30:58Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "ed6e0e",
      environment: "dev",
      "kubernetes.io/metadata.name": "ed6e0e-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "ed6e0e",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63cf1425184344042105f8d0",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "ed6e0e-dev",
    resourceVersion: "1809648936",
    uid: "cd172346-457d-4304-8316-2417c083de49"
  },
  {
    annotations: {
      contacts:
        '[{"email": "alexandra.lloyd@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "alexandralloyd"}, {"email": "alexandra.lloyd@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "alexandralloyd"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"alexandra.lloyd@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"alexandralloyd\\"}, {\\"email\\": \\"alexandra.lloyd@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"alexandralloyd\\"}]","openshift.io/description":"First PO test using my own GitHub ID ","openshift.io/display-name":"Alex Test 1  (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"ed6e0e","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"ed6e0e","profile_id":"63cf1425184344042105f8d0","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"ed6e0e-prod"}}\n',
      "openshift.io/description": "First PO test using my own GitHub ID ",
      "openshift.io/display-name": "Alex Test 1  (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c46,c25",
      "openshift.io/sa.scc.supplemental-groups": "1002120000/10000",
      "openshift.io/sa.scc.uid-range": "1002120000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-24T00:30:58Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "ed6e0e",
      environment: "prod",
      "kubernetes.io/metadata.name": "ed6e0e-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "ed6e0e",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63cf1425184344042105f8d0",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "ed6e0e-prod",
    resourceVersion: "1809648952",
    uid: "c4881dd5-924c-4ab7-b36b-6362111359e2"
  },
  {
    annotations: {
      contacts:
        '[{"email": "alexandra.lloyd@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "alexandralloyd"}, {"email": "alexandra.lloyd@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "alexandralloyd"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"alexandra.lloyd@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"alexandralloyd\\"}, {\\"email\\": \\"alexandra.lloyd@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"alexandralloyd\\"}]","openshift.io/description":"First PO test using my own GitHub ID ","openshift.io/display-name":"Alex Test 1  (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"ed6e0e","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"ed6e0e","profile_id":"63cf1425184344042105f8d0","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"ed6e0e-test"}}\n',
      "openshift.io/description": "First PO test using my own GitHub ID ",
      "openshift.io/display-name": "Alex Test 1  (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c46,c20",
      "openshift.io/sa.scc.supplemental-groups": "1002110000/10000",
      "openshift.io/sa.scc.uid-range": "1002110000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-24T00:30:58Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "ed6e0e",
      environment: "test",
      "kubernetes.io/metadata.name": "ed6e0e-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "ed6e0e",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63cf1425184344042105f8d0",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "ed6e0e-test",
    resourceVersion: "1809648970",
    uid: "a90571d6-21c3-4057-ae9e-d2f2a4ac47cc"
  },
  {
    annotations: {
      contacts:
        '[{"email": "alexandra.lloyd@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "alexandralloyd"}, {"email": "alexandra.lloyd@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "alexandralloyd"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"alexandra.lloyd@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"alexandralloyd\\"}, {\\"email\\": \\"alexandra.lloyd@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"alexandralloyd\\"}]","openshift.io/description":"First PO test using my own GitHub ID ","openshift.io/display-name":"Alex Test 1  (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"ed6e0e","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"ed6e0e","profile_id":"63cf1425184344042105f8d0","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"ed6e0e-tools"}}\n',
      "openshift.io/description": "First PO test using my own GitHub ID ",
      "openshift.io/display-name": "Alex Test 1  (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c46,c35",
      "openshift.io/sa.scc.supplemental-groups": "1002140000/10000",
      "openshift.io/sa.scc.uid-range": "1002140000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-24T00:30:58Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "ed6e0e",
      environment: "tools",
      "kubernetes.io/metadata.name": "ed6e0e-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "ed6e0e",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63cf1425184344042105f8d0",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "ed6e0e-tools",
    resourceVersion: "1809648991",
    uid: "bf427fb7-1a5f-47e1-85f1-2b5f88614fcc"
  },
  {
    annotations: {
      contacts:
        '[{"email": "tyler.krys@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "ty2k"}, {"email": "zhanna.kolesnyk@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "kolezhanchik"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"tyler.krys@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"ty2k\\"}, {\\"email\\": \\"zhanna.kolesnyk@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"kolezhanchik\\"}]","openshift.io/description":"AIOps application to predict and recommend resource tuning to project teams to optimize the usage of Private Cloud.","openshift.io/display-name":"Resource Tuning App (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"ee74a4","environment":"dev","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"ee74a4","profile_id":"508","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"ee74a4-dev"}}\n',
      "openshift.io/description":
        "AIOps application to predict and recommend resource tuning to project teams to optimize the usage of Private Cloud.",
      "openshift.io/display-name": "Resource Tuning App (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c31,c15",
      "openshift.io/sa.scc.supplemental-groups": "1000960000/10000",
      "openshift.io/sa.scc.uid-range": "1000960000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-08-24T23:12:16Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "ee74a4",
      environment: "dev",
      "kubernetes.io/metadata.name": "ee74a4-dev",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "ee74a4",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "508",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "ee74a4-dev",
    resourceVersion: "1809649036",
    uid: "1af0de4d-00ef-41fb-9c3d-4981dfd89283"
  },
  {
    annotations: {
      contacts:
        '[{"email": "tyler.krys@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "ty2k"}, {"email": "zhanna.kolesnyk@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "kolezhanchik"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"tyler.krys@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"ty2k\\"}, {\\"email\\": \\"zhanna.kolesnyk@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"kolezhanchik\\"}]","openshift.io/description":"AIOps application to predict and recommend resource tuning to project teams to optimize the usage of Private Cloud.","openshift.io/display-name":"Resource Tuning App (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"ee74a4","environment":"prod","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"ee74a4","profile_id":"508","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"ee74a4-prod"}}\n',
      "openshift.io/description":
        "AIOps application to predict and recommend resource tuning to project teams to optimize the usage of Private Cloud.",
      "openshift.io/display-name": "Resource Tuning App (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c31,c30",
      "openshift.io/sa.scc.supplemental-groups": "1000990000/10000",
      "openshift.io/sa.scc.uid-range": "1000990000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-08-24T23:12:16Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "ee74a4",
      environment: "prod",
      "kubernetes.io/metadata.name": "ee74a4-prod",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "ee74a4",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "508",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "ee74a4-prod",
    resourceVersion: "1809649048",
    uid: "5c633bd1-f6df-4792-98d8-978cc6630a1b"
  },
  {
    annotations: {
      contacts:
        '[{"email": "tyler.krys@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "ty2k"}, {"email": "zhanna.kolesnyk@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "kolezhanchik"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"tyler.krys@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"ty2k\\"}, {\\"email\\": \\"zhanna.kolesnyk@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"kolezhanchik\\"}]","openshift.io/description":"AIOps application to predict and recommend resource tuning to project teams to optimize the usage of Private Cloud.","openshift.io/display-name":"Resource Tuning App (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"ee74a4","environment":"test","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"ee74a4","profile_id":"508","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"ee74a4-test"}}\n',
      "openshift.io/description":
        "AIOps application to predict and recommend resource tuning to project teams to optimize the usage of Private Cloud.",
      "openshift.io/display-name": "Resource Tuning App (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c31,c20",
      "openshift.io/sa.scc.supplemental-groups": "1000970000/10000",
      "openshift.io/sa.scc.uid-range": "1000970000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-08-24T23:12:16Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "ee74a4",
      environment: "test",
      "kubernetes.io/metadata.name": "ee74a4-test",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "ee74a4",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "508",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "ee74a4-test",
    resourceVersion: "1809649065",
    uid: "589ffe2e-1bf9-4433-b042-76c7a05a699a"
  },
  {
    annotations: {
      contacts:
        '[{"email": "tyler.krys@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "ty2k"}, {"email": "zhanna.kolesnyk@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "kolezhanchik"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"tyler.krys@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"ty2k\\"}, {\\"email\\": \\"zhanna.kolesnyk@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"kolezhanchik\\"}]","openshift.io/description":"AIOps application to predict and recommend resource tuning to project teams to optimize the usage of Private Cloud.","openshift.io/display-name":"Resource Tuning App (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-2-limit-4","devops.gov.bc.ca/gitops-app":"ee74a4","environment":"tools","memory_quota":"memory-request-8-limit-16","ministry_id":"CITZ","name":"ee74a4","profile_id":"508","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-64"},"name":"ee74a4-tools"}}\n',
      "openshift.io/description":
        "AIOps application to predict and recommend resource tuning to project teams to optimize the usage of Private Cloud.",
      "openshift.io/display-name": "Resource Tuning App (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c31,c25",
      "openshift.io/sa.scc.supplemental-groups": "1000980000/10000",
      "openshift.io/sa.scc.uid-range": "1000980000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2021-08-24T23:12:16Z",
    labels: {
      cpu_quota: "cpu-request-2-limit-4",
      "devops.gov.bc.ca/gitops-app": "ee74a4",
      environment: "tools",
      "kubernetes.io/metadata.name": "ee74a4-tools",
      memory_quota: "memory-request-8-limit-16",
      ministry_id: "CITZ",
      name: "ee74a4",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "508",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-64"
    },
    name: "ee74a4-tools",
    resourceVersion: "1809649080",
    uid: "6223ef83-d4bd-41a2-9072-088741f03729"
  },
  {
    annotations: {
      contacts:
        '[{"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "artem.kravchenko@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}, {"email": "alex.lloyd@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"alex.lloyd@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test Mar 1.2","openshift.io/display-name":"Artem Test Mar 1.2 (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"f1dc85","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"BCPC","name":"f1dc85","profile_id":"63ffee8d60f3afc7ba0c70bd","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"f1dc85-dev"}}\n',
      "openshift.io/description": "Artem Test Mar 1.2",
      "openshift.io/display-name": "Artem Test Mar 1.2 (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c57,c39",
      "openshift.io/sa.scc.supplemental-groups": "1003270000/10000",
      "openshift.io/sa.scc.uid-range": "1003270000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-02T00:38:26Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "f1dc85",
      environment: "dev",
      "kubernetes.io/metadata.name": "f1dc85-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "BCPC",
      name: "f1dc85",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63ffee8d60f3afc7ba0c70bd",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "f1dc85-dev",
    resourceVersion: "1809649094",
    uid: "871b7975-13e6-420d-af0e-bdcbd6511aa8"
  },
  {
    annotations: {
      contacts:
        '[{"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "artem.kravchenko@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}, {"email": "alex.lloyd@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"alex.lloyd@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test Mar 1.2","openshift.io/display-name":"Artem Test Mar 1.2 (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"f1dc85","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"BCPC","name":"f1dc85","profile_id":"63ffee8d60f3afc7ba0c70bd","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"f1dc85-prod"}}\n',
      "openshift.io/description": "Artem Test Mar 1.2",
      "openshift.io/display-name": "Artem Test Mar 1.2 (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c57,c34",
      "openshift.io/sa.scc.supplemental-groups": "1003260000/10000",
      "openshift.io/sa.scc.uid-range": "1003260000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-02T00:38:26Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "f1dc85",
      environment: "prod",
      "kubernetes.io/metadata.name": "f1dc85-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "BCPC",
      name: "f1dc85",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63ffee8d60f3afc7ba0c70bd",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "f1dc85-prod",
    resourceVersion: "1809649127",
    uid: "4b80e7d8-20e1-4725-8e83-61c008e72078"
  },
  {
    annotations: {
      contacts:
        '[{"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "artem.kravchenko@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}, {"email": "alex.lloyd@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"alex.lloyd@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test Mar 1.2","openshift.io/display-name":"Artem Test Mar 1.2 (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"f1dc85","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"BCPC","name":"f1dc85","profile_id":"63ffee8d60f3afc7ba0c70bd","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"f1dc85-test"}}\n',
      "openshift.io/description": "Artem Test Mar 1.2",
      "openshift.io/display-name": "Artem Test Mar 1.2 (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c56,c40",
      "openshift.io/sa.scc.supplemental-groups": "1003160000/10000",
      "openshift.io/sa.scc.uid-range": "1003160000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-02T00:38:26Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "f1dc85",
      environment: "test",
      "kubernetes.io/metadata.name": "f1dc85-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "BCPC",
      name: "f1dc85",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63ffee8d60f3afc7ba0c70bd",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "f1dc85-test",
    resourceVersion: "1809649156",
    uid: "e2e1da27-facc-4654-bf48-a4dd5a00bf11"
  },
  {
    annotations: {
      contacts:
        '[{"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "artem.kravchenko@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}, {"email": "alex.lloyd@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"alex.lloyd@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test Mar 1.2","openshift.io/display-name":"Artem Test Mar 1.2 (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"f1dc85","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"BCPC","name":"f1dc85","profile_id":"63ffee8d60f3afc7ba0c70bd","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"f1dc85-tools"}}\n',
      "openshift.io/description": "Artem Test Mar 1.2",
      "openshift.io/display-name": "Artem Test Mar 1.2 (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c57,c24",
      "openshift.io/sa.scc.supplemental-groups": "1003240000/10000",
      "openshift.io/sa.scc.uid-range": "1003240000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-02T00:38:26Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "f1dc85",
      environment: "tools",
      "kubernetes.io/metadata.name": "f1dc85-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "BCPC",
      name: "f1dc85",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63ffee8d60f3afc7ba0c70bd",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "f1dc85-tools",
    resourceVersion: "1809649186",
    uid: "29dcb34b-86ab-48d4-9844-464fb619386c"
  },
  {
    annotations: {
      contacts:
        '[{"email": "leo.lou@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "ll911"}, {"email": "steven.barre@dxcas.com", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "stevenbarre"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"leo.lou@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"ll911\\"}, {\\"email\\": \\"steven.barre@dxcas.com\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"stevenbarre\\"}]","openshift.io/description":"To allow Leo to do some testing for https://app.zenhub.com/workspaces/platform-experience-5bb7c5ab4b5806bc2beb9d15/issues/gh/bcdevops/developer-experience/1766","openshift.io/display-name":"HTTP2 Testing for Leo Lou (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"f225b6","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"f225b6","profile_id":"1022","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"f225b6-dev"}}\n',
      "openshift.io/description":
        "To allow Leo to do some testing for https://app.zenhub.com/workspaces/platform-experience-5bb7c5ab4b5806bc2beb9d15/issues/gh/bcdevops/developer-experience/1766",
      "openshift.io/display-name": "HTTP2 Testing for Leo Lou (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c44,c19",
      "openshift.io/sa.scc.supplemental-groups": "1001930000/10000",
      "openshift.io/sa.scc.uid-range": "1001930000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-21T00:07:38Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "f225b6",
      environment: "dev",
      "kubernetes.io/metadata.name": "f225b6-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "f225b6",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "1022",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "f225b6-dev",
    resourceVersion: "1809649219",
    uid: "52097e16-565b-44fc-af22-8cf4255d371d"
  },
  {
    annotations: {
      contacts:
        '[{"email": "leo.lou@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "ll911"}, {"email": "steven.barre@dxcas.com", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "stevenbarre"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"leo.lou@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"ll911\\"}, {\\"email\\": \\"steven.barre@dxcas.com\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"stevenbarre\\"}]","openshift.io/description":"To allow Leo to do some testing for https://app.zenhub.com/workspaces/platform-experience-5bb7c5ab4b5806bc2beb9d15/issues/gh/bcdevops/developer-experience/1766","openshift.io/display-name":"HTTP2 Testing for Leo Lou (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"f225b6","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"f225b6","profile_id":"1022","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"f225b6-prod"}}\n',
      "openshift.io/description":
        "To allow Leo to do some testing for https://app.zenhub.com/workspaces/platform-experience-5bb7c5ab4b5806bc2beb9d15/issues/gh/bcdevops/developer-experience/1766",
      "openshift.io/display-name": "HTTP2 Testing for Leo Lou (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c44,c9",
      "openshift.io/sa.scc.supplemental-groups": "1001910000/10000",
      "openshift.io/sa.scc.uid-range": "1001910000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-21T00:07:38Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "f225b6",
      environment: "prod",
      "kubernetes.io/metadata.name": "f225b6-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "f225b6",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "1022",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "f225b6-prod",
    resourceVersion: "1809649239",
    uid: "1fdf057b-5ccc-45cb-aed8-f846a2f11ab7"
  },
  {
    annotations: {
      contacts:
        '[{"email": "leo.lou@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "ll911"}, {"email": "steven.barre@dxcas.com", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "stevenbarre"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"leo.lou@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"ll911\\"}, {\\"email\\": \\"steven.barre@dxcas.com\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"stevenbarre\\"}]","openshift.io/description":"To allow Leo to do some testing for https://app.zenhub.com/workspaces/platform-experience-5bb7c5ab4b5806bc2beb9d15/issues/gh/bcdevops/developer-experience/1766","openshift.io/display-name":"HTTP2 Testing for Leo Lou (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"f225b6","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"f225b6","profile_id":"1022","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"f225b6-test"}}\n',
      "openshift.io/description":
        "To allow Leo to do some testing for https://app.zenhub.com/workspaces/platform-experience-5bb7c5ab4b5806bc2beb9d15/issues/gh/bcdevops/developer-experience/1766",
      "openshift.io/display-name": "HTTP2 Testing for Leo Lou (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c44,c14",
      "openshift.io/sa.scc.supplemental-groups": "1001920000/10000",
      "openshift.io/sa.scc.uid-range": "1001920000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-21T00:07:38Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "f225b6",
      environment: "test",
      "kubernetes.io/metadata.name": "f225b6-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "f225b6",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "1022",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "f225b6-test",
    resourceVersion: "1809649280",
    uid: "5fa3d4ad-05c5-4a80-bd61-714b4c538dbd"
  },
  {
    annotations: {
      contacts:
        '[{"email": "leo.lou@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "ll911"}, {"email": "steven.barre@dxcas.com", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "stevenbarre"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"leo.lou@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"ll911\\"}, {\\"email\\": \\"steven.barre@dxcas.com\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"stevenbarre\\"}]","openshift.io/description":"To allow Leo to do some testing for https://app.zenhub.com/workspaces/platform-experience-5bb7c5ab4b5806bc2beb9d15/issues/gh/bcdevops/developer-experience/1766","openshift.io/display-name":"HTTP2 Testing for Leo Lou (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"f225b6","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"f225b6","profile_id":"1022","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"f225b6-tools"}}\n',
      "openshift.io/description":
        "To allow Leo to do some testing for https://app.zenhub.com/workspaces/platform-experience-5bb7c5ab4b5806bc2beb9d15/issues/gh/bcdevops/developer-experience/1766",
      "openshift.io/display-name": "HTTP2 Testing for Leo Lou (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c44,c24",
      "openshift.io/sa.scc.supplemental-groups": "1001940000/10000",
      "openshift.io/sa.scc.uid-range": "1001940000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-21T00:07:38Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "f225b6",
      environment: "tools",
      "kubernetes.io/metadata.name": "f225b6-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "f225b6",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "1022",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "f225b6-tools",
    resourceVersion: "1809649310",
    uid: "174a2f61-f61b-4109-b852-061df14399b2"
  },
  {
    annotations: {
      contacts:
        '[{"email": "platform.services.test.account@gov.bc.ca", "role": "owner"}, {"email": "platform.services.test.account@gov.bc.ca", "role": "lead"}, {"email": "alexandra.lloyd@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"role\\": \\"lead\\"}, {\\"email\\": \\"alexandra.lloyd@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"EDIT DESCRIPTION","openshift.io/display-name":"Alex L Feb 23.1 (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-1-limit-2","devops.gov.bc.ca/gitops-app":"f32bc8","environment":"dev","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"f32bc8","profile_id":"64090dc0f4a563c645c35665","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-256"},"name":"f32bc8-dev"}}\n',
      "openshift.io/description": "EDIT DESCRIPTION",
      "openshift.io/display-name": "Alex L Feb 23.1 (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c53,c32",
      "openshift.io/sa.scc.supplemental-groups": "1002820000/10000",
      "openshift.io/sa.scc.uid-range": "1002820000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-24T01:05:58Z",
    labels: {
      cpu_quota: "cpu-request-1-limit-2",
      "devops.gov.bc.ca/gitops-app": "f32bc8",
      environment: "dev",
      "kubernetes.io/metadata.name": "f32bc8-dev",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "f32bc8",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "64090dc0f4a563c645c35665",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-256"
    },
    name: "f32bc8-dev",
    resourceVersion: "1821214839",
    uid: "779cd551-739a-4fd6-994b-c7778bc4bea7"
  },
  {
    annotations: {
      contacts:
        '[{"email": "platform.services.test.account@gov.bc.ca", "role": "owner"}, {"email": "platform.services.test.account@gov.bc.ca", "role": "lead"}, {"email": "alexandra.lloyd@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"role\\": \\"lead\\"}, {\\"email\\": \\"alexandra.lloyd@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"EDIT DESCRIPTION","openshift.io/display-name":"Alex L Feb 23.1 (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"f32bc8","environment":"prod","memory_quota":"memory-request-4-limit-8","ministry_id":"CITZ","name":"f32bc8","profile_id":"64090dc0f4a563c645c35665","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-2"},"name":"f32bc8-prod"}}\n',
      "openshift.io/description": "EDIT DESCRIPTION",
      "openshift.io/display-name": "Alex L Feb 23.1 (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c53,c42",
      "openshift.io/sa.scc.supplemental-groups": "1002840000/10000",
      "openshift.io/sa.scc.uid-range": "1002840000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-24T01:05:58Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "f32bc8",
      environment: "prod",
      "kubernetes.io/metadata.name": "f32bc8-prod",
      memory_quota: "memory-request-4-limit-8",
      ministry_id: "CITZ",
      name: "f32bc8",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "64090dc0f4a563c645c35665",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-2"
    },
    name: "f32bc8-prod",
    resourceVersion: "1821214840",
    uid: "582604af-bc92-421d-9486-28460a0be7a7"
  },
  {
    annotations: {
      contacts:
        '[{"email": "platform.services.test.account@gov.bc.ca", "role": "owner"}, {"email": "platform.services.test.account@gov.bc.ca", "role": "lead"}, {"email": "alexandra.lloyd@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"role\\": \\"lead\\"}, {\\"email\\": \\"alexandra.lloyd@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"EDIT DESCRIPTION","openshift.io/display-name":"Alex L Feb 23.1 (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"f32bc8","environment":"test","memory_quota":"memory-request-16-limit-32","ministry_id":"CITZ","name":"f32bc8","profile_id":"64090dc0f4a563c645c35665","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"f32bc8-test"}}\n',
      "openshift.io/description": "EDIT DESCRIPTION",
      "openshift.io/display-name": "Alex L Feb 23.1 (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c53,c47",
      "openshift.io/sa.scc.supplemental-groups": "1002850000/10000",
      "openshift.io/sa.scc.uid-range": "1002850000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-24T01:05:58Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "f32bc8",
      environment: "test",
      "kubernetes.io/metadata.name": "f32bc8-test",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "CITZ",
      name: "f32bc8",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "64090dc0f4a563c645c35665",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "f32bc8-test",
    resourceVersion: "1821214841",
    uid: "d8931177-6639-4c38-9555-27017aec1959"
  },
  {
    annotations: {
      contacts:
        '[{"email": "platform.services.test.account@gov.bc.ca", "role": "owner"}, {"email": "platform.services.test.account@gov.bc.ca", "role": "lead"}, {"email": "alexandra.lloyd@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"role\\": \\"lead\\"}, {\\"email\\": \\"alexandra.lloyd@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"EDIT DESCRIPTION","openshift.io/display-name":"Alex L Feb 23.1 (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"f32bc8","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"f32bc8","profile_id":"64090dc0f4a563c645c35665","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-256"},"name":"f32bc8-tools"}}\n',
      "openshift.io/description": "EDIT DESCRIPTION",
      "openshift.io/display-name": "Alex L Feb 23.1 (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c53,c37",
      "openshift.io/sa.scc.supplemental-groups": "1002830000/10000",
      "openshift.io/sa.scc.uid-range": "1002830000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-24T01:05:58Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "f32bc8",
      environment: "tools",
      "kubernetes.io/metadata.name": "f32bc8-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "f32bc8",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "64090dc0f4a563c645c35665",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-256"
    },
    name: "f32bc8-tools",
    resourceVersion: "1821214838",
    uid: "98c06e0e-a4fe-413b-9a7b-d490d3bd666d"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "okanji"}, {"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "okanji"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"okanji\\"}, {\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"okanji\\"}]","openshift.io/description":"test","openshift.io/display-name":"test (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"f3f17e","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"EMPR","name":"f3f17e","profile_id":"63e37aa3eef9561ad62f823d","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"f3f17e-dev"}}\n',
      "openshift.io/description": "test",
      "openshift.io/display-name": "test (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c50,c5",
      "openshift.io/sa.scc.supplemental-groups": "1002460000/10000",
      "openshift.io/sa.scc.uid-range": "1002460000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-08T10:32:48Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "f3f17e",
      environment: "dev",
      "kubernetes.io/metadata.name": "f3f17e-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "EMPR",
      name: "f3f17e",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63e37aa3eef9561ad62f823d",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "f3f17e-dev",
    resourceVersion: "1809650102",
    uid: "8d538b91-fe53-4315-b7be-aa60339de5a5"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "okanji"}, {"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "okanji"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"okanji\\"}, {\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"okanji\\"}]","openshift.io/description":"test","openshift.io/display-name":"test (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"f3f17e","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"EMPR","name":"f3f17e","profile_id":"63e37aa3eef9561ad62f823d","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"f3f17e-prod"}}\n',
      "openshift.io/description": "test",
      "openshift.io/display-name": "test (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c50,c15",
      "openshift.io/sa.scc.supplemental-groups": "1002480000/10000",
      "openshift.io/sa.scc.uid-range": "1002480000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-08T10:32:48Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "f3f17e",
      environment: "prod",
      "kubernetes.io/metadata.name": "f3f17e-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "EMPR",
      name: "f3f17e",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63e37aa3eef9561ad62f823d",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "f3f17e-prod",
    resourceVersion: "1809650152",
    uid: "050c8cb3-f93e-4c00-b03e-34ad216ab0b6"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "okanji"}, {"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "okanji"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"okanji\\"}, {\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"okanji\\"}]","openshift.io/description":"test","openshift.io/display-name":"test (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"f3f17e","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"EMPR","name":"f3f17e","profile_id":"63e37aa3eef9561ad62f823d","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"f3f17e-test"}}\n',
      "openshift.io/description": "test",
      "openshift.io/display-name": "test (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c50,c25",
      "openshift.io/sa.scc.supplemental-groups": "1002500000/10000",
      "openshift.io/sa.scc.uid-range": "1002500000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-08T10:32:48Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "f3f17e",
      environment: "test",
      "kubernetes.io/metadata.name": "f3f17e-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "EMPR",
      name: "f3f17e",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63e37aa3eef9561ad62f823d",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "f3f17e-test",
    resourceVersion: "1809650212",
    uid: "005a82f7-c84b-41fa-a8fe-3992989d5474"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "okanji"}, {"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "okanji"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"okanji\\"}, {\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"okanji\\"}]","openshift.io/description":"test","openshift.io/display-name":"test (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"f3f17e","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"EMPR","name":"f3f17e","profile_id":"63e37aa3eef9561ad62f823d","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"f3f17e-tools"}}\n',
      "openshift.io/description": "test",
      "openshift.io/display-name": "test (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c50,c20",
      "openshift.io/sa.scc.supplemental-groups": "1002490000/10000",
      "openshift.io/sa.scc.uid-range": "1002490000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-08T10:32:48Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "f3f17e",
      environment: "tools",
      "kubernetes.io/metadata.name": "f3f17e-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "EMPR",
      name: "f3f17e",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63e37aa3eef9561ad62f823d",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "f3f17e-tools",
    resourceVersion: "1809650256",
    uid: "6ae330fa-63cd-4ee5-9af2-cc710df8ab40"
  },
  {
    annotations: {
      contacts:
        '[{"email": "artem.kravchenko@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}, {"email": "zhanna.kolesnyk@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"zhanna.kolesnyk@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test Mar 1.1","openshift.io/display-name":"Artem Test Mar 1.1 (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"f4db92","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"AGRI","name":"f4db92","profile_id":"63ff9ba7ec6d89b0f50e2c19","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"f4db92-dev"}}\n',
      "openshift.io/description": "Artem Test Mar 1.1",
      "openshift.io/display-name": "Artem Test Mar 1.1 (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c57,c14",
      "openshift.io/sa.scc.supplemental-groups": "1003220000/10000",
      "openshift.io/sa.scc.uid-range": "1003220000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-01T18:44:26Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "f4db92",
      environment: "dev",
      "kubernetes.io/metadata.name": "f4db92-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "AGRI",
      name: "f4db92",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63ff9ba7ec6d89b0f50e2c19",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "f4db92-dev",
    resourceVersion: "1809650338",
    uid: "91d67559-5916-4e24-9d81-bb32b5f51115"
  },
  {
    annotations: {
      contacts:
        '[{"email": "artem.kravchenko@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}, {"email": "zhanna.kolesnyk@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"zhanna.kolesnyk@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test Mar 1.1","openshift.io/display-name":"Artem Test Mar 1.1 (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"f4db92","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"AGRI","name":"f4db92","profile_id":"63ff9ba7ec6d89b0f50e2c19","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"f4db92-prod"}}\n',
      "openshift.io/description": "Artem Test Mar 1.1",
      "openshift.io/display-name": "Artem Test Mar 1.1 (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c57,c9",
      "openshift.io/sa.scc.supplemental-groups": "1003210000/10000",
      "openshift.io/sa.scc.uid-range": "1003210000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-01T18:44:26Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "f4db92",
      environment: "prod",
      "kubernetes.io/metadata.name": "f4db92-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "AGRI",
      name: "f4db92",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63ff9ba7ec6d89b0f50e2c19",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "f4db92-prod",
    resourceVersion: "1809650382",
    uid: "359f8414-166b-4ba1-9b85-572fdbe322f2"
  },
  {
    annotations: {
      contacts:
        '[{"email": "artem.kravchenko@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}, {"email": "zhanna.kolesnyk@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"zhanna.kolesnyk@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test Mar 1.1","openshift.io/display-name":"Artem Test Mar 1.1 (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"f4db92","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"AGRI","name":"f4db92","profile_id":"63ff9ba7ec6d89b0f50e2c19","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"f4db92-test"}}\n',
      "openshift.io/description": "Artem Test Mar 1.1",
      "openshift.io/display-name": "Artem Test Mar 1.1 (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c57,c19",
      "openshift.io/sa.scc.supplemental-groups": "1003230000/10000",
      "openshift.io/sa.scc.uid-range": "1003230000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-01T18:44:26Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "f4db92",
      environment: "test",
      "kubernetes.io/metadata.name": "f4db92-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "AGRI",
      name: "f4db92",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63ff9ba7ec6d89b0f50e2c19",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "f4db92-test",
    resourceVersion: "1809650414",
    uid: "69a6e4f7-13bb-41c7-bc21-e576e8ddf9e1"
  },
  {
    annotations: {
      contacts:
        '[{"email": "artem.kravchenko@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}, {"email": "zhanna.kolesnyk@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"zhanna.kolesnyk@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test Mar 1.1","openshift.io/display-name":"Artem Test Mar 1.1 (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"f4db92","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"AGRI","name":"f4db92","profile_id":"63ff9ba7ec6d89b0f50e2c19","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"f4db92-tools"}}\n',
      "openshift.io/description": "Artem Test Mar 1.1",
      "openshift.io/display-name": "Artem Test Mar 1.1 (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c57,c4",
      "openshift.io/sa.scc.supplemental-groups": "1003200000/10000",
      "openshift.io/sa.scc.uid-range": "1003200000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-01T18:44:26Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "f4db92",
      environment: "tools",
      "kubernetes.io/metadata.name": "f4db92-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "AGRI",
      name: "f4db92",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63ff9ba7ec6d89b0f50e2c19",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "f4db92-tools",
    resourceVersion: "1809650437",
    uid: "891f72d6-780e-426b-8e60-0f5bd58a1040"
  },
  {
    annotations: {
      contacts:
        '[{"email": "artem.kravchenko@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test Feb 22.1 Changing the description","openshift.io/display-name":"Artem Test Feb 22.1 (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-32-limit-64","devops.gov.bc.ca/gitops-app":"f5139b","environment":"dev","memory_quota":"memory-request-64-limit-128","ministry_id":"PSSG","name":"f5139b","profile_id":"63f6be1d00b08a440ce15731","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-512"},"name":"f5139b-dev"}}\n',
      "openshift.io/description":
        "Artem Test Feb 22.1 Changing the description",
      "openshift.io/display-name": "Artem Test Feb 22.1 (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c53,c2",
      "openshift.io/sa.scc.supplemental-groups": "1002760000/10000",
      "openshift.io/sa.scc.uid-range": "1002760000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-23T00:02:43Z",
    labels: {
      cpu_quota: "cpu-request-32-limit-64",
      "devops.gov.bc.ca/gitops-app": "f5139b",
      environment: "dev",
      "kubernetes.io/metadata.name": "f5139b-dev",
      memory_quota: "memory-request-64-limit-128",
      ministry_id: "PSSG",
      name: "f5139b",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63f6be1d00b08a440ce15731",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-512"
    },
    name: "f5139b-dev",
    resourceVersion: "1809650466",
    uid: "4c77ca31-a190-4956-90da-c4c3a7322fc3"
  },
  {
    annotations: {
      contacts:
        '[{"email": "artem.kravchenko@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test Feb 22.1 Changing the description","openshift.io/display-name":"Artem Test Feb 22.1 (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-4-limit-8","devops.gov.bc.ca/gitops-app":"f5139b","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"PSSG","name":"f5139b","profile_id":"63f6be1d00b08a440ce15731","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"f5139b-prod"}}\n',
      "openshift.io/description":
        "Artem Test Feb 22.1 Changing the description",
      "openshift.io/display-name": "Artem Test Feb 22.1 (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c53,c7",
      "openshift.io/sa.scc.supplemental-groups": "1002770000/10000",
      "openshift.io/sa.scc.uid-range": "1002770000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-23T00:02:43Z",
    labels: {
      cpu_quota: "cpu-request-4-limit-8",
      "devops.gov.bc.ca/gitops-app": "f5139b",
      environment: "prod",
      "kubernetes.io/metadata.name": "f5139b-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "PSSG",
      name: "f5139b",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63f6be1d00b08a440ce15731",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "f5139b-prod",
    resourceVersion: "1809650485",
    uid: "86008338-58a1-4b2f-b476-1f643462f3b0"
  },
  {
    annotations: {
      contacts:
        '[{"email": "artem.kravchenko@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test Feb 22.1 Changing the description","openshift.io/display-name":"Artem Test Feb 22.1 (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"f5139b","environment":"test","memory_quota":"memory-request-16-limit-32","ministry_id":"PSSG","name":"f5139b","profile_id":"63f6be1d00b08a440ce15731","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"f5139b-test"}}\n',
      "openshift.io/description":
        "Artem Test Feb 22.1 Changing the description",
      "openshift.io/display-name": "Artem Test Feb 22.1 (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c53,c12",
      "openshift.io/sa.scc.supplemental-groups": "1002780000/10000",
      "openshift.io/sa.scc.uid-range": "1002780000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-23T00:02:43Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "f5139b",
      environment: "test",
      "kubernetes.io/metadata.name": "f5139b-test",
      memory_quota: "memory-request-16-limit-32",
      ministry_id: "PSSG",
      name: "f5139b",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63f6be1d00b08a440ce15731",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "f5139b-test",
    resourceVersion: "1809650511",
    uid: "2e4f3842-e937-4971-b0b2-3358e9b9600d"
  },
  {
    annotations: {
      contacts:
        '[{"email": "artem.kravchenko@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test Feb 22.1 Changing the description","openshift.io/display-name":"Artem Test Feb 22.1 (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"f5139b","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"PSSG","name":"f5139b","profile_id":"63f6be1d00b08a440ce15731","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-256"},"name":"f5139b-tools"}}\n',
      "openshift.io/description":
        "Artem Test Feb 22.1 Changing the description",
      "openshift.io/display-name": "Artem Test Feb 22.1 (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c52,c49",
      "openshift.io/sa.scc.supplemental-groups": "1002750000/10000",
      "openshift.io/sa.scc.uid-range": "1002750000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-23T00:02:43Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "f5139b",
      environment: "tools",
      "kubernetes.io/metadata.name": "f5139b-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "PSSG",
      name: "f5139b",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63f6be1d00b08a440ce15731",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-256"
    },
    name: "f5139b-tools",
    resourceVersion: "1809650533",
    uid: "3e66caf0-2430-484e-873b-344b706a5f27"
  },
  {
    annotations: {
      contacts:
        '[{"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "artem.kravchenko@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}, {"email": "zhanna.kolesnyk@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"zhanna.kolesnyk@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test Feb 27.2","openshift.io/display-name":"Artem Test Feb 27.2 (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"f97237","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"PSA","name":"f97237","profile_id":"63fd2e0e78428def7df286b6","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"f97237-dev"}}\n',
      "openshift.io/description": "Artem Test Feb 27.2",
      "openshift.io/display-name": "Artem Test Feb 27.2 (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c55,c40",
      "openshift.io/sa.scc.supplemental-groups": "1003050000/10000",
      "openshift.io/sa.scc.uid-range": "1003050000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-27T22:32:23Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "f97237",
      environment: "dev",
      "kubernetes.io/metadata.name": "f97237-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "PSA",
      name: "f97237",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63fd2e0e78428def7df286b6",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "f97237-dev",
    resourceVersion: "1809650562",
    uid: "a7905de6-e130-4af9-9fbb-1c7d568e2de4"
  },
  {
    annotations: {
      contacts:
        '[{"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "artem.kravchenko@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}, {"email": "zhanna.kolesnyk@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"zhanna.kolesnyk@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test Feb 27.2","openshift.io/display-name":"Artem Test Feb 27.2 (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"f97237","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"PSA","name":"f97237","profile_id":"63fd2e0e78428def7df286b6","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"f97237-prod"}}\n',
      "openshift.io/description": "Artem Test Feb 27.2",
      "openshift.io/display-name": "Artem Test Feb 27.2 (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c55,c45",
      "openshift.io/sa.scc.supplemental-groups": "1003060000/10000",
      "openshift.io/sa.scc.uid-range": "1003060000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-27T22:32:23Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "f97237",
      environment: "prod",
      "kubernetes.io/metadata.name": "f97237-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "PSA",
      name: "f97237",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63fd2e0e78428def7df286b6",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "f97237-prod",
    resourceVersion: "1809650590",
    uid: "e91b530e-20b2-4b8f-b15d-2c09d3397849"
  },
  {
    annotations: {
      contacts:
        '[{"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "artem.kravchenko@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}, {"email": "zhanna.kolesnyk@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"zhanna.kolesnyk@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test Feb 27.2","openshift.io/display-name":"Artem Test Feb 27.2 (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"f97237","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"PSA","name":"f97237","profile_id":"63fd2e0e78428def7df286b6","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"f97237-test"}}\n',
      "openshift.io/description": "Artem Test Feb 27.2",
      "openshift.io/display-name": "Artem Test Feb 27.2 (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c56,c0",
      "openshift.io/sa.scc.supplemental-groups": "1003080000/10000",
      "openshift.io/sa.scc.uid-range": "1003080000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-27T22:32:23Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "f97237",
      environment: "test",
      "kubernetes.io/metadata.name": "f97237-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "PSA",
      name: "f97237",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63fd2e0e78428def7df286b6",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "f97237-test",
    resourceVersion: "1809650622",
    uid: "ea8c8f77-9d3a-4805-b4b2-86837cb9d635"
  },
  {
    annotations: {
      contacts:
        '[{"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "artem.kravchenko@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}, {"email": "zhanna.kolesnyk@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"zhanna.kolesnyk@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test Feb 27.2","openshift.io/display-name":"Artem Test Feb 27.2 (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"f97237","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"PSA","name":"f97237","profile_id":"63fd2e0e78428def7df286b6","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"f97237-tools"}}\n',
      "openshift.io/description": "Artem Test Feb 27.2",
      "openshift.io/display-name": "Artem Test Feb 27.2 (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c55,c50",
      "openshift.io/sa.scc.supplemental-groups": "1003070000/10000",
      "openshift.io/sa.scc.uid-range": "1003070000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-27T22:32:23Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "f97237",
      environment: "tools",
      "kubernetes.io/metadata.name": "f97237-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "PSA",
      name: "f97237",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63fd2e0e78428def7df286b6",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "f97237-tools",
    resourceVersion: "1809650643",
    uid: "ef0d433e-9157-45eb-a678-968415d83ad2"
  },
  {
    annotations: {
      contacts:
        '[{"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Platform Services Test Account IDIR","openshift.io/display-name":"Test Jan 26 (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-1-limit-2","devops.gov.bc.ca/gitops-app":"fb0b00","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"fb0b00","profile_id":"63d458f784b2cb37ebc6ee28","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"fb0b00-dev"}}\n',
      "openshift.io/description": "Platform Services Test Account IDIR",
      "openshift.io/display-name": "Test Jan 26 (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c47,c44",
      "openshift.io/sa.scc.supplemental-groups": "1002250000/10000",
      "openshift.io/sa.scc.uid-range": "1002250000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-26T23:53:04Z",
    labels: {
      cpu_quota: "cpu-request-1-limit-2",
      "devops.gov.bc.ca/gitops-app": "fb0b00",
      environment: "dev",
      "kubernetes.io/metadata.name": "fb0b00-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "fb0b00",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63d458f784b2cb37ebc6ee28",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "fb0b00-dev",
    resourceVersion: "1809650661",
    uid: "c38ec550-b550-4468-9d84-7fea486beb5b"
  },
  {
    annotations: {
      contacts:
        '[{"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Platform Services Test Account IDIR","openshift.io/display-name":"Test Jan 26 (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"fb0b00","environment":"prod","memory_quota":"memory-request-4-limit-8","ministry_id":"CITZ","name":"fb0b00","profile_id":"63d458f784b2cb37ebc6ee28","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"fb0b00-prod"}}\n',
      "openshift.io/description": "Platform Services Test Account IDIR",
      "openshift.io/display-name": "Test Jan 26 (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c47,c39",
      "openshift.io/sa.scc.supplemental-groups": "1002240000/10000",
      "openshift.io/sa.scc.uid-range": "1002240000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-26T23:53:04Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "fb0b00",
      environment: "prod",
      "kubernetes.io/metadata.name": "fb0b00-prod",
      memory_quota: "memory-request-4-limit-8",
      ministry_id: "CITZ",
      name: "fb0b00",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63d458f784b2cb37ebc6ee28",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "fb0b00-prod",
    resourceVersion: "1809650679",
    uid: "e3717ef5-5fc1-44c6-88bb-94b5bb2b533f"
  },
  {
    annotations: {
      contacts:
        '[{"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Platform Services Test Account IDIR","openshift.io/display-name":"Test Jan 26 (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-1-limit-2","devops.gov.bc.ca/gitops-app":"fb0b00","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"fb0b00","profile_id":"63d458f784b2cb37ebc6ee28","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"fb0b00-test"}}\n',
      "openshift.io/description": "Platform Services Test Account IDIR",
      "openshift.io/display-name": "Test Jan 26 (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c47,c34",
      "openshift.io/sa.scc.supplemental-groups": "1002230000/10000",
      "openshift.io/sa.scc.uid-range": "1002230000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-26T23:53:04Z",
    labels: {
      cpu_quota: "cpu-request-1-limit-2",
      "devops.gov.bc.ca/gitops-app": "fb0b00",
      environment: "test",
      "kubernetes.io/metadata.name": "fb0b00-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "fb0b00",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63d458f784b2cb37ebc6ee28",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "fb0b00-test",
    resourceVersion: "1809650695",
    uid: "a06fdac4-d384-4518-ae41-efe6270b9660"
  },
  {
    annotations: {
      contacts:
        '[{"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Platform Services Test Account IDIR","openshift.io/display-name":"Test Jan 26 (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-1-limit-2","devops.gov.bc.ca/gitops-app":"fb0b00","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"fb0b00","profile_id":"63d458f784b2cb37ebc6ee28","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"fb0b00-tools"}}\n',
      "openshift.io/description": "Platform Services Test Account IDIR",
      "openshift.io/display-name": "Test Jan 26 (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c48,c2",
      "openshift.io/sa.scc.supplemental-groups": "1002260000/10000",
      "openshift.io/sa.scc.uid-range": "1002260000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-26T23:53:04Z",
    labels: {
      cpu_quota: "cpu-request-1-limit-2",
      "devops.gov.bc.ca/gitops-app": "fb0b00",
      environment: "tools",
      "kubernetes.io/metadata.name": "fb0b00-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "fb0b00",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63d458f784b2cb37ebc6ee28",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "fb0b00-tools",
    resourceVersion: "1809650708",
    uid: "bcaf6b8b-5459-4f4c-8c28-a02a95996843"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "zhanna.kolesnyk@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"zhanna.kolesnyk@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"test","openshift.io/display-name":"oamar test new  (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"fb918b","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"LBR","name":"fb918b","profile_id":"63efc5855ef597568925c071","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"fb918b-dev"}}\n',
      "openshift.io/description": "test",
      "openshift.io/display-name": "oamar test new  (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c52,c4",
      "openshift.io/sa.scc.supplemental-groups": "1002660000/10000",
      "openshift.io/sa.scc.uid-range": "1002660000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-17T18:26:51Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "fb918b",
      environment: "dev",
      "kubernetes.io/metadata.name": "fb918b-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "LBR",
      name: "fb918b",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63efc5855ef597568925c071",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "fb918b-dev",
    resourceVersion: "1809650725",
    uid: "fe4b063c-423e-49dd-9e5b-42ff64007e3b"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "zhanna.kolesnyk@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"zhanna.kolesnyk@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"test","openshift.io/display-name":"oamar test new  (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"fb918b","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"LBR","name":"fb918b","profile_id":"63efc5855ef597568925c071","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"fb918b-prod"}}\n',
      "openshift.io/description": "test",
      "openshift.io/display-name": "oamar test new  (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c50,c35",
      "openshift.io/sa.scc.supplemental-groups": "1002520000/10000",
      "openshift.io/sa.scc.uid-range": "1002520000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-17T18:26:51Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "fb918b",
      environment: "prod",
      "kubernetes.io/metadata.name": "fb918b-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "LBR",
      name: "fb918b",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63efc5855ef597568925c071",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "fb918b-prod",
    resourceVersion: "1809650746",
    uid: "2693a37e-216c-4919-9d90-27a131fcec16"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "zhanna.kolesnyk@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"zhanna.kolesnyk@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"test","openshift.io/display-name":"oamar test new  (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"fb918b","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"LBR","name":"fb918b","profile_id":"63efc5855ef597568925c071","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"fb918b-test"}}\n',
      "openshift.io/description": "test",
      "openshift.io/display-name": "oamar test new  (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c51,c20",
      "openshift.io/sa.scc.supplemental-groups": "1002590000/10000",
      "openshift.io/sa.scc.uid-range": "1002590000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-17T18:26:51Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "fb918b",
      environment: "test",
      "kubernetes.io/metadata.name": "fb918b-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "LBR",
      name: "fb918b",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63efc5855ef597568925c071",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "fb918b-test",
    resourceVersion: "1809650767",
    uid: "774005e9-6c3b-47e0-af80-278ccdafeb37"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "zhanna.kolesnyk@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"zhanna.kolesnyk@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"test","openshift.io/display-name":"oamar test new  (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"fb918b","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"LBR","name":"fb918b","profile_id":"63efc5855ef597568925c071","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"fb918b-tools"}}\n',
      "openshift.io/description": "test",
      "openshift.io/display-name": "oamar test new  (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c51,c25",
      "openshift.io/sa.scc.supplemental-groups": "1002600000/10000",
      "openshift.io/sa.scc.uid-range": "1002600000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-17T18:26:51Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "fb918b",
      environment: "tools",
      "kubernetes.io/metadata.name": "fb918b-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "LBR",
      name: "fb918b",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63efc5855ef597568925c071",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "fb918b-tools",
    resourceVersion: "1809650788",
    uid: "5f6e16c9-2750-4405-8ca8-8bea73a1ea2c"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "zhanna.kolesnyk@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"zhanna.kolesnyk@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"test","openshift.io/display-name":"test (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"fcdb9c","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"fcdb9c","profile_id":"6402782422450fcc0d3341c1","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"fcdb9c-dev"}}\n',
      "openshift.io/description": "test",
      "openshift.io/display-name": "test (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c58,c42",
      "openshift.io/sa.scc.supplemental-groups": "1003390000/10000",
      "openshift.io/sa.scc.uid-range": "1003390000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-03T22:51:40Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "fcdb9c",
      environment: "dev",
      "kubernetes.io/metadata.name": "fcdb9c-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "fcdb9c",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "6402782422450fcc0d3341c1",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "fcdb9c-dev",
    resourceVersion: "1809650814",
    uid: "d0d172e5-16d1-4d0d-aff6-d258cdb90b78"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "zhanna.kolesnyk@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"zhanna.kolesnyk@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"test","openshift.io/display-name":"test (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"fcdb9c","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"fcdb9c","profile_id":"6402782422450fcc0d3341c1","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"fcdb9c-prod"}}\n',
      "openshift.io/description": "test",
      "openshift.io/display-name": "test (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c58,c52",
      "openshift.io/sa.scc.supplemental-groups": "1003410000/10000",
      "openshift.io/sa.scc.uid-range": "1003410000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-03T22:51:40Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "fcdb9c",
      environment: "prod",
      "kubernetes.io/metadata.name": "fcdb9c-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "fcdb9c",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "6402782422450fcc0d3341c1",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "fcdb9c-prod",
    resourceVersion: "1809650843",
    uid: "a442d972-dbe2-49c4-96e7-fd166f69bcd1"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "zhanna.kolesnyk@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"zhanna.kolesnyk@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"test","openshift.io/display-name":"test (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"fcdb9c","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"fcdb9c","profile_id":"6402782422450fcc0d3341c1","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"fcdb9c-test"}}\n',
      "openshift.io/description": "test",
      "openshift.io/display-name": "test (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c58,c57",
      "openshift.io/sa.scc.supplemental-groups": "1003420000/10000",
      "openshift.io/sa.scc.uid-range": "1003420000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-03T22:51:40Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "fcdb9c",
      environment: "test",
      "kubernetes.io/metadata.name": "fcdb9c-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "fcdb9c",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "6402782422450fcc0d3341c1",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "fcdb9c-test",
    resourceVersion: "1809650865",
    uid: "06530294-665b-4921-a4f2-59a14b2859c3"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "zhanna.kolesnyk@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"zhanna.kolesnyk@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"test","openshift.io/display-name":"test (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"fcdb9c","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"fcdb9c","profile_id":"6402782422450fcc0d3341c1","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"fcdb9c-tools"}}\n',
      "openshift.io/description": "test",
      "openshift.io/display-name": "test (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c58,c47",
      "openshift.io/sa.scc.supplemental-groups": "1003400000/10000",
      "openshift.io/sa.scc.uid-range": "1003400000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-03T22:51:40Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "fcdb9c",
      environment: "tools",
      "kubernetes.io/metadata.name": "fcdb9c-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "fcdb9c",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "6402782422450fcc0d3341c1",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "fcdb9c-tools",
    resourceVersion: "1809650888",
    uid: "cfedb151-47b3-4606-b8b7-f403535b8285"
  },
  {
    annotations: {
      contacts:
        '[{"email": "zhanna.kolesnyk@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"zhanna.kolesnyk@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test Feb 24.2","openshift.io/display-name":"Artem Test Feb 24.2 (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"fe2247","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"EMBC","name":"fe2247","profile_id":"63f90acc00b08a440ce15743","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"fe2247-dev"}}\n',
      "openshift.io/description": "Artem Test Feb 24.2",
      "openshift.io/display-name": "Artem Test Feb 24.2 (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c54,c39",
      "openshift.io/sa.scc.supplemental-groups": "1002940000/10000",
      "openshift.io/sa.scc.uid-range": "1002940000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-24T19:15:08Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "fe2247",
      environment: "dev",
      "kubernetes.io/metadata.name": "fe2247-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "EMBC",
      name: "fe2247",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63f90acc00b08a440ce15743",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "fe2247-dev",
    resourceVersion: "1809650909",
    uid: "c0b0f014-870f-4a07-8dc7-c0004b183692"
  },
  {
    annotations: {
      contacts:
        '[{"email": "zhanna.kolesnyk@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"zhanna.kolesnyk@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test Feb 24.2","openshift.io/display-name":"Artem Test Feb 24.2 (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"fe2247","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"EMBC","name":"fe2247","profile_id":"63f90acc00b08a440ce15743","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"fe2247-prod"}}\n',
      "openshift.io/description": "Artem Test Feb 24.2",
      "openshift.io/display-name": "Artem Test Feb 24.2 (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c54,c29",
      "openshift.io/sa.scc.supplemental-groups": "1002920000/10000",
      "openshift.io/sa.scc.uid-range": "1002920000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-24T19:15:08Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "fe2247",
      environment: "prod",
      "kubernetes.io/metadata.name": "fe2247-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "EMBC",
      name: "fe2247",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63f90acc00b08a440ce15743",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "fe2247-prod",
    resourceVersion: "1809650931",
    uid: "a174eb2e-b23d-4266-9ffb-95a2159537be"
  },
  {
    annotations: {
      contacts:
        '[{"email": "zhanna.kolesnyk@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"zhanna.kolesnyk@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test Feb 24.2","openshift.io/display-name":"Artem Test Feb 24.2 (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"fe2247","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"EMBC","name":"fe2247","profile_id":"63f90acc00b08a440ce15743","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"fe2247-test"}}\n',
      "openshift.io/description": "Artem Test Feb 24.2",
      "openshift.io/display-name": "Artem Test Feb 24.2 (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c54,c19",
      "openshift.io/sa.scc.supplemental-groups": "1002900000/10000",
      "openshift.io/sa.scc.uid-range": "1002900000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-24T19:15:08Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "fe2247",
      environment: "test",
      "kubernetes.io/metadata.name": "fe2247-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "EMBC",
      name: "fe2247",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63f90acc00b08a440ce15743",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "fe2247-test",
    resourceVersion: "1809650955",
    uid: "8de87920-1bdf-4cc9-a75c-72bd2561afed"
  },
  {
    annotations: {
      contacts:
        '[{"email": "zhanna.kolesnyk@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"zhanna.kolesnyk@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test Feb 24.2","openshift.io/display-name":"Artem Test Feb 24.2 (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"fe2247","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"EMBC","name":"fe2247","profile_id":"63f90acc00b08a440ce15743","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"fe2247-tools"}}\n',
      "openshift.io/description": "Artem Test Feb 24.2",
      "openshift.io/display-name": "Artem Test Feb 24.2 (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c54,c24",
      "openshift.io/sa.scc.supplemental-groups": "1002910000/10000",
      "openshift.io/sa.scc.uid-range": "1002910000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-24T19:15:08Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "fe2247",
      environment: "tools",
      "kubernetes.io/metadata.name": "fe2247-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "EMBC",
      name: "fe2247",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63f90acc00b08a440ce15743",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "fe2247-tools",
    resourceVersion: "1809650971",
    uid: "ddb38d87-2679-4ae8-b05f-794a7a7ec597"
  },
  {
    annotations: {
      contacts:
        '[{"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "artem.kravchenko@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}, {"email": "alexandra.lloyd@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"alexandra.lloyd@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test 21.3","openshift.io/display-name":"Artem Test 21.3 (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"fe805a","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"FLNR","name":"fe805a","profile_id":"63f50ab6aa3dd94f05ff2191","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"fe805a-dev"}}\n',
      "openshift.io/description": "Artem Test 21.3",
      "openshift.io/display-name": "Artem Test 21.3 (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c51,c50",
      "openshift.io/sa.scc.supplemental-groups": "1002650000/10000",
      "openshift.io/sa.scc.uid-range": "1002650000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-21T18:41:45Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "fe805a",
      environment: "dev",
      "kubernetes.io/metadata.name": "fe805a-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "FLNR",
      name: "fe805a",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63f50ab6aa3dd94f05ff2191",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "fe805a-dev",
    resourceVersion: "1809650990",
    uid: "ca125b59-7257-4bde-b00b-788880b2b333"
  },
  {
    annotations: {
      contacts:
        '[{"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "artem.kravchenko@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}, {"email": "alexandra.lloyd@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"alexandra.lloyd@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test 21.3","openshift.io/display-name":"Artem Test 21.3 (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"fe805a","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"FLNR","name":"fe805a","profile_id":"63f50ab6aa3dd94f05ff2191","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"fe805a-prod"}}\n',
      "openshift.io/description": "Artem Test 21.3",
      "openshift.io/display-name": "Artem Test 21.3 (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c52,c14",
      "openshift.io/sa.scc.supplemental-groups": "1002680000/10000",
      "openshift.io/sa.scc.uid-range": "1002680000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-21T18:41:45Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "fe805a",
      environment: "prod",
      "kubernetes.io/metadata.name": "fe805a-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "FLNR",
      name: "fe805a",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63f50ab6aa3dd94f05ff2191",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "fe805a-prod",
    resourceVersion: "1809651015",
    uid: "e43b64ba-3d44-48dc-8f07-b3ffb19add75"
  },
  {
    annotations: {
      contacts:
        '[{"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "artem.kravchenko@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}, {"email": "alexandra.lloyd@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"alexandra.lloyd@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test 21.3","openshift.io/display-name":"Artem Test 21.3 (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"fe805a","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"FLNR","name":"fe805a","profile_id":"63f50ab6aa3dd94f05ff2191","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"fe805a-test"}}\n',
      "openshift.io/description": "Artem Test 21.3",
      "openshift.io/display-name": "Artem Test 21.3 (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c52,c9",
      "openshift.io/sa.scc.supplemental-groups": "1002670000/10000",
      "openshift.io/sa.scc.uid-range": "1002670000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-21T18:41:45Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "fe805a",
      environment: "test",
      "kubernetes.io/metadata.name": "fe805a-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "FLNR",
      name: "fe805a",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63f50ab6aa3dd94f05ff2191",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "fe805a-test",
    resourceVersion: "1809651048",
    uid: "ac507704-76e9-4ccc-8f8a-dd4de4394759"
  },
  {
    annotations: {
      contacts:
        '[{"email": "platform.services.test.account@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "artem.kravchenko@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}, {"email": "alexandra.lloyd@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"alexandra.lloyd@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test 21.3","openshift.io/display-name":"Artem Test 21.3 (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"fe805a","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"FLNR","name":"fe805a","profile_id":"63f50ab6aa3dd94f05ff2191","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"fe805a-tools"}}\n',
      "openshift.io/description": "Artem Test 21.3",
      "openshift.io/display-name": "Artem Test 21.3 (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c52,c19",
      "openshift.io/sa.scc.supplemental-groups": "1002690000/10000",
      "openshift.io/sa.scc.uid-range": "1002690000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-21T18:41:45Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "fe805a",
      environment: "tools",
      "kubernetes.io/metadata.name": "fe805a-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "FLNR",
      name: "fe805a",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63f50ab6aa3dd94f05ff2191",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "fe805a-tools",
    resourceVersion: "1809651066",
    uid: "50ff5ae0-03d2-427e-a88b-4ca1e56af3b0"
  },
  {
    annotations: {
      contacts:
        '[{"email": "alex.lloyd@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}, {"email": "artem.kravchenko@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"alex.lloyd@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"test","openshift.io/display-name":"test (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"ff3116","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"LDB","name":"ff3116","profile_id":"63fce57c78428def7df286ae","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"ff3116-dev"}}\n',
      "openshift.io/description": "test",
      "openshift.io/display-name": "test (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c55,c0",
      "openshift.io/sa.scc.supplemental-groups": "1002970000/10000",
      "openshift.io/sa.scc.uid-range": "1002970000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-27T17:25:42Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "ff3116",
      environment: "dev",
      "kubernetes.io/metadata.name": "ff3116-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "LDB",
      name: "ff3116",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63fce57c78428def7df286ae",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "ff3116-dev",
    resourceVersion: "1809651083",
    uid: "ca75c2c7-27b8-487c-9d1a-1ce448913879"
  },
  {
    annotations: {
      contacts:
        '[{"email": "alex.lloyd@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}, {"email": "artem.kravchenko@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"alex.lloyd@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"test","openshift.io/display-name":"test (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"ff3116","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"LDB","name":"ff3116","profile_id":"63fce57c78428def7df286ae","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"ff3116-prod"}}\n',
      "openshift.io/description": "test",
      "openshift.io/display-name": "test (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c55,c5",
      "openshift.io/sa.scc.supplemental-groups": "1002980000/10000",
      "openshift.io/sa.scc.uid-range": "1002980000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-27T17:25:42Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "ff3116",
      environment: "prod",
      "kubernetes.io/metadata.name": "ff3116-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "LDB",
      name: "ff3116",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63fce57c78428def7df286ae",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "ff3116-prod",
    resourceVersion: "1809651104",
    uid: "473a3878-fac3-4990-b524-2d71b923d296"
  },
  {
    annotations: {
      contacts:
        '[{"email": "alex.lloyd@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}, {"email": "artem.kravchenko@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"alex.lloyd@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"test","openshift.io/display-name":"test (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"ff3116","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"LDB","name":"ff3116","profile_id":"63fce57c78428def7df286ae","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"ff3116-test"}}\n',
      "openshift.io/description": "test",
      "openshift.io/display-name": "test (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c55,c15",
      "openshift.io/sa.scc.supplemental-groups": "1003000000/10000",
      "openshift.io/sa.scc.uid-range": "1003000000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-27T17:25:42Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "ff3116",
      environment: "test",
      "kubernetes.io/metadata.name": "ff3116-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "LDB",
      name: "ff3116",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63fce57c78428def7df286ae",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "ff3116-test",
    resourceVersion: "1809651128",
    uid: "57fa84a7-09a5-45d9-b7c4-f1f44032e376"
  },
  {
    annotations: {
      contacts:
        '[{"email": "alex.lloyd@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}, {"email": "artem.kravchenko@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"alex.lloyd@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"test","openshift.io/display-name":"test (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"ff3116","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"LDB","name":"ff3116","profile_id":"63fce57c78428def7df286ae","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"ff3116-tools"}}\n',
      "openshift.io/description": "test",
      "openshift.io/display-name": "test (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c55,c10",
      "openshift.io/sa.scc.supplemental-groups": "1002990000/10000",
      "openshift.io/sa.scc.uid-range": "1002990000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-02-27T17:25:42Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "ff3116",
      environment: "tools",
      "kubernetes.io/metadata.name": "ff3116-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "LDB",
      name: "ff3116",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63fce57c78428def7df286ae",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "ff3116-tools",
    resourceVersion: "1809651145",
    uid: "b6e0ff63-6ad7-424b-9a15-1c8fdaf44292"
  },
  {
    annotations: {
      contacts:
        '[{"email": "billy.li@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "billy.li@gov.bc.ca"}, {"email": "alexander.carmichael@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "alexander.carmichael@gov.bc.ca"}, {"email": "alexander.carmichael@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "alexander.carmichael@gov.bc.ca"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"billy.li@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"billy.li@gov.bc.ca\\"}, {\\"email\\": \\"alexander.carmichael@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"alexander.carmichael@gov.bc.ca\\"}, {\\"email\\": \\"alexander.carmichael@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"alexander.carmichael@gov.bc.ca\\"}]","openshift.io/description":"With Billy as TL","openshift.io/display-name":"AlexC Idir Test for aCS (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"t1c9a2e","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"ALC","name":"t1c9a2e","profile_id":"1018","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"t1c9a2e-dev"}}\n',
      "openshift.io/description": "With Billy as TL",
      "openshift.io/display-name": "AlexC Idir Test for aCS (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c43,c17",
      "openshift.io/sa.scc.supplemental-groups": "1001840000/10000",
      "openshift.io/sa.scc.uid-range": "1001840000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-19T23:28:37Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "t1c9a2e",
      environment: "dev",
      "kubernetes.io/metadata.name": "t1c9a2e-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "ALC",
      name: "t1c9a2e",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "1018",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "t1c9a2e-dev",
    resourceVersion: "1809651550",
    uid: "c8a01da9-5070-444a-b6ca-e188694289e6"
  },
  {
    annotations: {
      contacts:
        '[{"email": "billy.li@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "billy.li@gov.bc.ca"}, {"email": "alexander.carmichael@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "alexander.carmichael@gov.bc.ca"}, {"email": "alexander.carmichael@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "alexander.carmichael@gov.bc.ca"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"billy.li@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"billy.li@gov.bc.ca\\"}, {\\"email\\": \\"alexander.carmichael@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"alexander.carmichael@gov.bc.ca\\"}, {\\"email\\": \\"alexander.carmichael@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"alexander.carmichael@gov.bc.ca\\"}]","openshift.io/description":"With Billy as TL","openshift.io/display-name":"AlexC Idir Test for aCS (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"t1c9a2e","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"ALC","name":"t1c9a2e","profile_id":"1018","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"t1c9a2e-prod"}}\n',
      "openshift.io/description": "With Billy as TL",
      "openshift.io/display-name": "AlexC Idir Test for aCS (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c43,c7",
      "openshift.io/sa.scc.supplemental-groups": "1001820000/10000",
      "openshift.io/sa.scc.uid-range": "1001820000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-19T23:28:37Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "t1c9a2e",
      environment: "prod",
      "kubernetes.io/metadata.name": "t1c9a2e-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "ALC",
      name: "t1c9a2e",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "1018",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "t1c9a2e-prod",
    resourceVersion: "1809651568",
    uid: "fa6bd66d-54cf-4a20-af9e-3dc246e7ca47"
  },
  {
    annotations: {
      contacts:
        '[{"email": "billy.li@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "billy.li@gov.bc.ca"}, {"email": "alexander.carmichael@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "alexander.carmichael@gov.bc.ca"}, {"email": "alexander.carmichael@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "alexander.carmichael@gov.bc.ca"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"billy.li@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"billy.li@gov.bc.ca\\"}, {\\"email\\": \\"alexander.carmichael@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"alexander.carmichael@gov.bc.ca\\"}, {\\"email\\": \\"alexander.carmichael@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"alexander.carmichael@gov.bc.ca\\"}]","openshift.io/description":"With Billy as TL","openshift.io/display-name":"AlexC Idir Test for aCS (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"t1c9a2e","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"ALC","name":"t1c9a2e","profile_id":"1018","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"t1c9a2e-test"}}\n',
      "openshift.io/description": "With Billy as TL",
      "openshift.io/display-name": "AlexC Idir Test for aCS (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c43,c22",
      "openshift.io/sa.scc.supplemental-groups": "1001850000/10000",
      "openshift.io/sa.scc.uid-range": "1001850000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-19T23:28:37Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "t1c9a2e",
      environment: "test",
      "kubernetes.io/metadata.name": "t1c9a2e-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "ALC",
      name: "t1c9a2e",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "1018",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "t1c9a2e-test",
    resourceVersion: "1809651586",
    uid: "21838baa-8026-41e7-b76c-4f7b81a225c3"
  },
  {
    annotations: {
      contacts:
        '[{"email": "billy.li@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "billy.li@gov.bc.ca"}, {"email": "alexander.carmichael@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "alexander.carmichael@gov.bc.ca"}, {"email": "alexander.carmichael@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "alexander.carmichael@gov.bc.ca"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"billy.li@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"billy.li@gov.bc.ca\\"}, {\\"email\\": \\"alexander.carmichael@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"alexander.carmichael@gov.bc.ca\\"}, {\\"email\\": \\"alexander.carmichael@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"alexander.carmichael@gov.bc.ca\\"}]","openshift.io/description":"With Billy as TL","openshift.io/display-name":"AlexC Idir Test for aCS (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"t1c9a2e","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"ALC","name":"t1c9a2e","profile_id":"1018","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"t1c9a2e-tools"}}\n',
      "openshift.io/description": "With Billy as TL",
      "openshift.io/display-name": "AlexC Idir Test for aCS (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c43,c12",
      "openshift.io/sa.scc.supplemental-groups": "1001830000/10000",
      "openshift.io/sa.scc.uid-range": "1001830000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-19T23:28:37Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "t1c9a2e",
      environment: "tools",
      "kubernetes.io/metadata.name": "t1c9a2e-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "ALC",
      name: "t1c9a2e",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "1018",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "t1c9a2e-tools",
    resourceVersion: "1809651606",
    uid: "d8aa90bb-4f9e-4275-9819-849089180ac7"
  },
  {
    annotations: {
      contacts:
        '[{"email": "alexander.carmichael@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "alexander.carmichael@gov.bc.ca"}, {"email": "alexander.carmichael@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "alexander.carmichael@gov.bc.ca"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"alexander.carmichael@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"alexander.carmichael@gov.bc.ca\\"}, {\\"email\\": \\"alexander.carmichael@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"alexander.carmichael@gov.bc.ca\\"}]","openshift.io/description":"with AlexC as TL","openshift.io/display-name":"AlexC Idir test (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"t48a834","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"AGRI","name":"t48a834","profile_id":"1017","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"t48a834-dev"}}\n',
      "openshift.io/description": "with AlexC as TL",
      "openshift.io/display-name": "AlexC Idir test (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c42,c29",
      "openshift.io/sa.scc.supplemental-groups": "1001780000/10000",
      "openshift.io/sa.scc.uid-range": "1001780000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-19T19:25:41Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "t48a834",
      environment: "dev",
      "kubernetes.io/metadata.name": "t48a834-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "AGRI",
      name: "t48a834",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "1017",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "t48a834-dev",
    resourceVersion: "1809651622",
    uid: "be1e1976-ae14-4720-86ee-567e76df16a5"
  },
  {
    annotations: {
      contacts:
        '[{"email": "alexander.carmichael@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "alexander.carmichael@gov.bc.ca"}, {"email": "alexander.carmichael@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "alexander.carmichael@gov.bc.ca"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"alexander.carmichael@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"alexander.carmichael@gov.bc.ca\\"}, {\\"email\\": \\"alexander.carmichael@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"alexander.carmichael@gov.bc.ca\\"}]","openshift.io/description":"with AlexC as TL","openshift.io/display-name":"AlexC Idir test (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"t48a834","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"AGRI","name":"t48a834","profile_id":"1017","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"t48a834-prod"}}\n',
      "openshift.io/description": "with AlexC as TL",
      "openshift.io/display-name": "AlexC Idir test (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c43,c2",
      "openshift.io/sa.scc.supplemental-groups": "1001810000/10000",
      "openshift.io/sa.scc.uid-range": "1001810000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-19T19:25:41Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "t48a834",
      environment: "prod",
      "kubernetes.io/metadata.name": "t48a834-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "AGRI",
      name: "t48a834",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "1017",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "t48a834-prod",
    resourceVersion: "1809651647",
    uid: "f4ff337b-e338-41f2-9ce2-4e719d4e2d3e"
  },
  {
    annotations: {
      contacts:
        '[{"email": "alexander.carmichael@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "alexander.carmichael@gov.bc.ca"}, {"email": "alexander.carmichael@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "alexander.carmichael@gov.bc.ca"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"alexander.carmichael@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"alexander.carmichael@gov.bc.ca\\"}, {\\"email\\": \\"alexander.carmichael@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"alexander.carmichael@gov.bc.ca\\"}]","openshift.io/description":"with AlexC as TL","openshift.io/display-name":"AlexC Idir test (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"t48a834","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"AGRI","name":"t48a834","profile_id":"1017","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"t48a834-test"}}\n',
      "openshift.io/description": "with AlexC as TL",
      "openshift.io/display-name": "AlexC Idir test (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c42,c34",
      "openshift.io/sa.scc.supplemental-groups": "1001790000/10000",
      "openshift.io/sa.scc.uid-range": "1001790000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-19T19:25:41Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "t48a834",
      environment: "test",
      "kubernetes.io/metadata.name": "t48a834-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "AGRI",
      name: "t48a834",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "1017",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "t48a834-test",
    resourceVersion: "1809651686",
    uid: "6285dd0e-22db-46aa-9366-4555ec9c3fbe"
  },
  {
    annotations: {
      contacts:
        '[{"email": "alexander.carmichael@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "alexander.carmichael@gov.bc.ca"}, {"email": "alexander.carmichael@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "alexander.carmichael@gov.bc.ca"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"alexander.carmichael@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"alexander.carmichael@gov.bc.ca\\"}, {\\"email\\": \\"alexander.carmichael@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"alexander.carmichael@gov.bc.ca\\"}]","openshift.io/description":"with AlexC as TL","openshift.io/display-name":"AlexC Idir test (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"t48a834","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"AGRI","name":"t48a834","profile_id":"1017","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"t48a834-tools"}}\n',
      "openshift.io/description": "with AlexC as TL",
      "openshift.io/display-name": "AlexC Idir test (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c42,c39",
      "openshift.io/sa.scc.supplemental-groups": "1001800000/10000",
      "openshift.io/sa.scc.uid-range": "1001800000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-19T19:25:41Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "t48a834",
      environment: "tools",
      "kubernetes.io/metadata.name": "t48a834-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "AGRI",
      name: "t48a834",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "1017",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "t48a834-tools",
    resourceVersion: "1809651702",
    uid: "bb112057-76fc-4e8c-95c1-3a2eb4b8233c"
  },
  {
    annotations: {
      contacts:
        '[{"email": "artem.kravchenko@gov.bc.ca", "role": "owner"}, {"email": "oamar.kanji@gov.bc.ca", "role": "lead"}, {"email": "alexandra.lloyd@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"role\\": \\"lead\\"}, {\\"email\\": \\"alexandra.lloyd@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"Artem Test Mar 7.1","openshift.io/display-name":"Artem Test Mar 7.1 (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"t5924b7","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"TRAN","name":"t5924b7","profile_id":"6407d3085f617059f5492fa7","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"t5924b7-dev"}}\n',
      "openshift.io/description": "Artem Test Mar 7.1",
      "openshift.io/display-name": "Artem Test Mar 7.1 (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c59,c34",
      "openshift.io/sa.scc.supplemental-groups": "1003490000/10000",
      "openshift.io/sa.scc.uid-range": "1003490000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-08T00:20:27Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "t5924b7",
      environment: "dev",
      "kubernetes.io/metadata.name": "t5924b7-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "TRAN",
      name: "t5924b7",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "6407d3085f617059f5492fa7",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "t5924b7-dev",
    resourceVersion: "1821210477",
    uid: "fdd5fff1-10ca-496b-9414-da55ad2f359d"
  },
  {
    annotations: {
      contacts:
        '[{"email": "artem.kravchenko@gov.bc.ca", "role": "owner"}, {"email": "oamar.kanji@gov.bc.ca", "role": "lead"}, {"email": "alexandra.lloyd@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"role\\": \\"lead\\"}, {\\"email\\": \\"alexandra.lloyd@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"Artem Test Mar 7.1","openshift.io/display-name":"Artem Test Mar 7.1 (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"t5924b7","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"TRAN","name":"t5924b7","profile_id":"6407d3085f617059f5492fa7","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"t5924b7-prod"}}\n',
      "openshift.io/description": "Artem Test Mar 7.1",
      "openshift.io/display-name": "Artem Test Mar 7.1 (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c59,c19",
      "openshift.io/sa.scc.supplemental-groups": "1003460000/10000",
      "openshift.io/sa.scc.uid-range": "1003460000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-08T00:20:27Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "t5924b7",
      environment: "prod",
      "kubernetes.io/metadata.name": "t5924b7-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "TRAN",
      name: "t5924b7",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "6407d3085f617059f5492fa7",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "t5924b7-prod",
    resourceVersion: "1821210479",
    uid: "16483ef1-105c-49a8-9dd7-2da9ba7b85e4"
  },
  {
    annotations: {
      contacts:
        '[{"email": "artem.kravchenko@gov.bc.ca", "role": "owner"}, {"email": "oamar.kanji@gov.bc.ca", "role": "lead"}, {"email": "alexandra.lloyd@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"role\\": \\"lead\\"}, {\\"email\\": \\"alexandra.lloyd@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"Artem Test Mar 7.1","openshift.io/display-name":"Artem Test Mar 7.1 (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"t5924b7","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"TRAN","name":"t5924b7","profile_id":"6407d3085f617059f5492fa7","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"t5924b7-test"}}\n',
      "openshift.io/description": "Artem Test Mar 7.1",
      "openshift.io/display-name": "Artem Test Mar 7.1 (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c59,c24",
      "openshift.io/sa.scc.supplemental-groups": "1003470000/10000",
      "openshift.io/sa.scc.uid-range": "1003470000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-08T00:20:27Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "t5924b7",
      environment: "test",
      "kubernetes.io/metadata.name": "t5924b7-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "TRAN",
      name: "t5924b7",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "6407d3085f617059f5492fa7",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "t5924b7-test",
    resourceVersion: "1821210475",
    uid: "a77536a1-26e1-4a2b-83a3-4bd29eb32816"
  },
  {
    annotations: {
      contacts:
        '[{"email": "artem.kravchenko@gov.bc.ca", "role": "owner"}, {"email": "oamar.kanji@gov.bc.ca", "role": "lead"}, {"email": "alexandra.lloyd@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"role\\": \\"lead\\"}, {\\"email\\": \\"alexandra.lloyd@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"Artem Test Mar 7.1","openshift.io/display-name":"Artem Test Mar 7.1 (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"t5924b7","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"TRAN","name":"t5924b7","profile_id":"6407d3085f617059f5492fa7","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"t5924b7-tools"}}\n',
      "openshift.io/description": "Artem Test Mar 7.1",
      "openshift.io/display-name": "Artem Test Mar 7.1 (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c59,c29",
      "openshift.io/sa.scc.supplemental-groups": "1003480000/10000",
      "openshift.io/sa.scc.uid-range": "1003480000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-08T00:20:27Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "t5924b7",
      environment: "tools",
      "kubernetes.io/metadata.name": "t5924b7-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "TRAN",
      name: "t5924b7",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "6407d3085f617059f5492fa7",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "t5924b7-tools",
    resourceVersion: "1821210478",
    uid: "62ae74b7-1d2e-4543-906a-bf41eed4fe74"
  },
  {
    annotations: {
      contacts:
        '[{"email": "artem.kravchenko@gov.bc.ca", "role": "owner"}, {"email": "zhanna.kolesnyk@gov.bc.ca", "role": "lead"}, {"email": "alexandra.lloyd@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"zhanna.kolesnyk@gov.bc.ca\\", \\"role\\": \\"lead\\"}, {\\"email\\": \\"alexandra.lloyd@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"Artem Test Mar 7.2","openshift.io/display-name":"Artem Test Mar 7.2 (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"t7c971e","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"EMPR","name":"t7c971e","profile_id":"6407db865f617059f5492fa9","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"t7c971e-dev"}}\n',
      "openshift.io/description": "Artem Test Mar 7.2",
      "openshift.io/display-name": "Artem Test Mar 7.2 (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c59,c44",
      "openshift.io/sa.scc.supplemental-groups": "1003510000/10000",
      "openshift.io/sa.scc.uid-range": "1003510000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-08T00:56:23Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "t7c971e",
      environment: "dev",
      "kubernetes.io/metadata.name": "t7c971e-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "EMPR",
      name: "t7c971e",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "6407db865f617059f5492fa9",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "t7c971e-dev",
    resourceVersion: "1821214885",
    uid: "33e903f0-e96d-469f-b04c-d011587dd0f9"
  },
  {
    annotations: {
      contacts:
        '[{"email": "artem.kravchenko@gov.bc.ca", "role": "owner"}, {"email": "zhanna.kolesnyk@gov.bc.ca", "role": "lead"}, {"email": "alexandra.lloyd@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"zhanna.kolesnyk@gov.bc.ca\\", \\"role\\": \\"lead\\"}, {\\"email\\": \\"alexandra.lloyd@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"Artem Test Mar 7.2","openshift.io/display-name":"Artem Test Mar 7.2 (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"t7c971e","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"EMPR","name":"t7c971e","profile_id":"6407db865f617059f5492fa9","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"t7c971e-prod"}}\n',
      "openshift.io/description": "Artem Test Mar 7.2",
      "openshift.io/display-name": "Artem Test Mar 7.2 (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c59,c49",
      "openshift.io/sa.scc.supplemental-groups": "1003520000/10000",
      "openshift.io/sa.scc.uid-range": "1003520000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-08T00:56:23Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "t7c971e",
      environment: "prod",
      "kubernetes.io/metadata.name": "t7c971e-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "EMPR",
      name: "t7c971e",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "6407db865f617059f5492fa9",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "t7c971e-prod",
    resourceVersion: "1821214886",
    uid: "f88bf987-0e17-4816-a69a-f18ec0af11a1"
  },
  {
    annotations: {
      contacts:
        '[{"email": "artem.kravchenko@gov.bc.ca", "role": "owner"}, {"email": "zhanna.kolesnyk@gov.bc.ca", "role": "lead"}, {"email": "alexandra.lloyd@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"zhanna.kolesnyk@gov.bc.ca\\", \\"role\\": \\"lead\\"}, {\\"email\\": \\"alexandra.lloyd@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"Artem Test Mar 7.2","openshift.io/display-name":"Artem Test Mar 7.2 (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"t7c971e","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"EMPR","name":"t7c971e","profile_id":"6407db865f617059f5492fa9","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"t7c971e-test"}}\n',
      "openshift.io/description": "Artem Test Mar 7.2",
      "openshift.io/display-name": "Artem Test Mar 7.2 (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c59,c54",
      "openshift.io/sa.scc.supplemental-groups": "1003530000/10000",
      "openshift.io/sa.scc.uid-range": "1003530000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-08T00:56:23Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "t7c971e",
      environment: "test",
      "kubernetes.io/metadata.name": "t7c971e-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "EMPR",
      name: "t7c971e",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "6407db865f617059f5492fa9",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "t7c971e-test",
    resourceVersion: "1821214887",
    uid: "5c421e12-f112-437d-916e-5eba51e4f939"
  },
  {
    annotations: {
      contacts:
        '[{"email": "artem.kravchenko@gov.bc.ca", "role": "owner"}, {"email": "zhanna.kolesnyk@gov.bc.ca", "role": "lead"}, {"email": "alexandra.lloyd@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"zhanna.kolesnyk@gov.bc.ca\\", \\"role\\": \\"lead\\"}, {\\"email\\": \\"alexandra.lloyd@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"Artem Test Mar 7.2","openshift.io/display-name":"Artem Test Mar 7.2 (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"t7c971e","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"EMPR","name":"t7c971e","profile_id":"6407db865f617059f5492fa9","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"t7c971e-tools"}}\n',
      "openshift.io/description": "Artem Test Mar 7.2",
      "openshift.io/display-name": "Artem Test Mar 7.2 (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c59,c39",
      "openshift.io/sa.scc.supplemental-groups": "1003500000/10000",
      "openshift.io/sa.scc.uid-range": "1003500000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-08T00:56:23Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "t7c971e",
      environment: "tools",
      "kubernetes.io/metadata.name": "t7c971e-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "EMPR",
      name: "t7c971e",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "6407db865f617059f5492fa9",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "t7c971e-tools",
    resourceVersion: "1821214884",
    uid: "14ae3212-0edf-4564-9f86-59a0d73adee4"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ian.1.watts@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "ian.1.watts@gov.bc.ca"}, {"email": "shelly.han@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "shelly.han@gov.bc.ca"}, {"email": "alexander.carmichael@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "alexander.carmichael@gov.bc.ca"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ian.1.watts@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"ian.1.watts@gov.bc.ca\\"}, {\\"email\\": \\"shelly.han@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"shelly.han@gov.bc.ca\\"}, {\\"email\\": \\"alexander.carmichael@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"alexander.carmichael@gov.bc.ca\\"}]","openshift.io/description":"Testing provisioning a project request with IDIR contact management.","openshift.io/display-name":"AlexC test Project Request in CLab (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"t89a938","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"t89a938","profile_id":"1016","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"t89a938-dev"}}\n',
      "openshift.io/description":
        "Testing provisioning a project request with IDIR contact management.",
      "openshift.io/display-name": "AlexC test Project Request in CLab (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c42,c14",
      "openshift.io/sa.scc.supplemental-groups": "1001750000/10000",
      "openshift.io/sa.scc.uid-range": "1001750000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-18T01:14:16Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "t89a938",
      environment: "dev",
      "kubernetes.io/metadata.name": "t89a938-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "t89a938",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "1016",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "t89a938-dev",
    resourceVersion: "1809651871",
    uid: "6a4b2d9d-795a-4b25-8c62-2db127f9883f"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ian.1.watts@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "ian.1.watts@gov.bc.ca"}, {"email": "shelly.han@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "shelly.han@gov.bc.ca"}, {"email": "alexander.carmichael@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "alexander.carmichael@gov.bc.ca"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ian.1.watts@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"ian.1.watts@gov.bc.ca\\"}, {\\"email\\": \\"shelly.han@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"shelly.han@gov.bc.ca\\"}, {\\"email\\": \\"alexander.carmichael@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"alexander.carmichael@gov.bc.ca\\"}]","openshift.io/description":"Testing provisioning a project request with IDIR contact management.","openshift.io/display-name":"AlexC test Project Request in CLab (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"t89a938","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"t89a938","profile_id":"1016","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"t89a938-prod"}}\n',
      "openshift.io/description":
        "Testing provisioning a project request with IDIR contact management.",
      "openshift.io/display-name": "AlexC test Project Request in CLab (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c42,c19",
      "openshift.io/sa.scc.supplemental-groups": "1001760000/10000",
      "openshift.io/sa.scc.uid-range": "1001760000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-18T01:14:16Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "t89a938",
      environment: "prod",
      "kubernetes.io/metadata.name": "t89a938-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "t89a938",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "1016",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "t89a938-prod",
    resourceVersion: "1809651890",
    uid: "cfebc41d-d7a2-435b-aab3-966b311d0e7d"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ian.1.watts@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "ian.1.watts@gov.bc.ca"}, {"email": "shelly.han@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "shelly.han@gov.bc.ca"}, {"email": "alexander.carmichael@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "alexander.carmichael@gov.bc.ca"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ian.1.watts@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"ian.1.watts@gov.bc.ca\\"}, {\\"email\\": \\"shelly.han@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"shelly.han@gov.bc.ca\\"}, {\\"email\\": \\"alexander.carmichael@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"alexander.carmichael@gov.bc.ca\\"}]","openshift.io/description":"Testing provisioning a project request with IDIR contact management.","openshift.io/display-name":"AlexC test Project Request in CLab (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"t89a938","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"t89a938","profile_id":"1016","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"t89a938-test"}}\n',
      "openshift.io/description":
        "Testing provisioning a project request with IDIR contact management.",
      "openshift.io/display-name": "AlexC test Project Request in CLab (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c38,c12",
      "openshift.io/sa.scc.supplemental-groups": "1001430000/10000",
      "openshift.io/sa.scc.uid-range": "1001430000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-18T01:14:16Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "t89a938",
      environment: "test",
      "kubernetes.io/metadata.name": "t89a938-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "t89a938",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "1016",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "t89a938-test",
    resourceVersion: "1809651907",
    uid: "ac9f0718-05c7-4789-ac66-0c892f8ce942"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ian.1.watts@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "ian.1.watts@gov.bc.ca"}, {"email": "shelly.han@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "shelly.han@gov.bc.ca"}, {"email": "alexander.carmichael@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "alexander.carmichael@gov.bc.ca"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ian.1.watts@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"ian.1.watts@gov.bc.ca\\"}, {\\"email\\": \\"shelly.han@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"shelly.han@gov.bc.ca\\"}, {\\"email\\": \\"alexander.carmichael@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"alexander.carmichael@gov.bc.ca\\"}]","openshift.io/description":"Testing provisioning a project request with IDIR contact management.","openshift.io/display-name":"AlexC test Project Request in CLab (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"t89a938","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"t89a938","profile_id":"1016","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"t89a938-tools"}}\n',
      "openshift.io/description":
        "Testing provisioning a project request with IDIR contact management.",
      "openshift.io/display-name": "AlexC test Project Request in CLab (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c42,c4",
      "openshift.io/sa.scc.supplemental-groups": "1001730000/10000",
      "openshift.io/sa.scc.uid-range": "1001730000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-18T01:14:16Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "t89a938",
      environment: "tools",
      "kubernetes.io/metadata.name": "t89a938-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "t89a938",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "1016",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "t89a938-tools",
    resourceVersion: "1809651937",
    uid: "d6915eb8-46ba-44ea-b2d1-8f23d345d2ae"
  },
  {
    annotations: {
      contacts:
        '[{"email": "billy.li@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "billy.li@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"billy.li@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"billy.li@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"sadf","openshift.io/display-name":"Clab Billy Test (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"tcbd1de","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"LBR","name":"tcbd1de","profile_id":"640631ced009e79c03dbd572","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"tcbd1de-dev"}}\n',
      "openshift.io/description": "sadf",
      "openshift.io/display-name": "Clab Billy Test (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c58,c22",
      "openshift.io/sa.scc.supplemental-groups": "1003350000/10000",
      "openshift.io/sa.scc.uid-range": "1003350000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-06T18:41:21Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "tcbd1de",
      environment: "dev",
      "kubernetes.io/metadata.name": "tcbd1de-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "LBR",
      name: "tcbd1de",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "640631ced009e79c03dbd572",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "tcbd1de-dev",
    resourceVersion: "1809651987",
    uid: "a159ca69-8d55-4be8-a1b4-8abf88bf4855"
  },
  {
    annotations: {
      contacts:
        '[{"email": "billy.li@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "billy.li@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"billy.li@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"billy.li@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"sadf","openshift.io/display-name":"Clab Billy Test (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"tcbd1de","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"LBR","name":"tcbd1de","profile_id":"640631ced009e79c03dbd572","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"tcbd1de-prod"}}\n',
      "openshift.io/description": "sadf",
      "openshift.io/display-name": "Clab Billy Test (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c59,c4",
      "openshift.io/sa.scc.supplemental-groups": "1003430000/10000",
      "openshift.io/sa.scc.uid-range": "1003430000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-06T18:41:21Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "tcbd1de",
      environment: "prod",
      "kubernetes.io/metadata.name": "tcbd1de-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "LBR",
      name: "tcbd1de",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "640631ced009e79c03dbd572",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "tcbd1de-prod",
    resourceVersion: "1809652010",
    uid: "7a428405-618a-4e77-a8af-7790b78d4f4c"
  },
  {
    annotations: {
      contacts:
        '[{"email": "billy.li@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "billy.li@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"billy.li@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"billy.li@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"sadf","openshift.io/display-name":"Clab Billy Test (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"tcbd1de","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"LBR","name":"tcbd1de","profile_id":"640631ced009e79c03dbd572","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"tcbd1de-test"}}\n',
      "openshift.io/description": "sadf",
      "openshift.io/display-name": "Clab Billy Test (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c58,c37",
      "openshift.io/sa.scc.supplemental-groups": "1003380000/10000",
      "openshift.io/sa.scc.uid-range": "1003380000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-06T18:41:21Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "tcbd1de",
      environment: "test",
      "kubernetes.io/metadata.name": "tcbd1de-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "LBR",
      name: "tcbd1de",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "640631ced009e79c03dbd572",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "tcbd1de-test",
    resourceVersion: "1809652027",
    uid: "88aff589-4fd0-4ae0-b445-d81fbeeea03e"
  },
  {
    annotations: {
      contacts:
        '[{"email": "billy.li@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "billy.li@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"billy.li@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"billy.li@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"sadf","openshift.io/display-name":"Clab Billy Test (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"tcbd1de","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"LBR","name":"tcbd1de","profile_id":"640631ced009e79c03dbd572","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"tcbd1de-tools"}}\n',
      "openshift.io/description": "sadf",
      "openshift.io/display-name": "Clab Billy Test (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c59,c9",
      "openshift.io/sa.scc.supplemental-groups": "1003440000/10000",
      "openshift.io/sa.scc.uid-range": "1003440000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-06T18:41:21Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "tcbd1de",
      environment: "tools",
      "kubernetes.io/metadata.name": "tcbd1de-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "LBR",
      name: "tcbd1de",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "640631ced009e79c03dbd572",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "tcbd1de-tools",
    resourceVersion: "1809652048",
    uid: "c29d4a2b-610b-4fff-9f14-99659efa6b0a"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "okanji"}, {"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "okanji"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"okanji\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"okanji\\"}]","openshift.io/description":"edit desciption","openshift.io/display-name":"new name  (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"tcfbfa3","environment":"dev","memory_quota":"memory-request-64-limit-128","ministry_id":"AEST","name":"tcfbfa3","profile_id":"63cd7ab767552473a97b29f8","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"tcfbfa3-dev"}}\n',
      "openshift.io/description": "edit desciption",
      "openshift.io/display-name": "new name  (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c45,c15",
      "openshift.io/sa.scc.supplemental-groups": "1002010000/10000",
      "openshift.io/sa.scc.uid-range": "1002010000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-22T23:39:56Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "tcfbfa3",
      environment: "dev",
      "kubernetes.io/metadata.name": "tcfbfa3-dev",
      memory_quota: "memory-request-64-limit-128",
      ministry_id: "AEST",
      name: "tcfbfa3",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63cd7ab767552473a97b29f8",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "tcfbfa3-dev",
    resourceVersion: "1809652066",
    uid: "ae1dfe36-c03a-4153-9b4a-53c8fc610c2e"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "okanji"}, {"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "okanji"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"okanji\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"okanji\\"}]","openshift.io/description":"edit desciption","openshift.io/display-name":"new name  (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"tcfbfa3","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"AEST","name":"tcfbfa3","profile_id":"63cd7ab767552473a97b29f8","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"tcfbfa3-prod"}}\n',
      "openshift.io/description": "edit desciption",
      "openshift.io/display-name": "new name  (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c45,c20",
      "openshift.io/sa.scc.supplemental-groups": "1002020000/10000",
      "openshift.io/sa.scc.uid-range": "1002020000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-22T23:39:56Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "tcfbfa3",
      environment: "prod",
      "kubernetes.io/metadata.name": "tcfbfa3-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "AEST",
      name: "tcfbfa3",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63cd7ab767552473a97b29f8",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "tcfbfa3-prod",
    resourceVersion: "1809652094",
    uid: "3e0a6c91-5d3b-4e67-9f0f-5d0c0e394f77"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "okanji"}, {"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "okanji"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"okanji\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"okanji\\"}]","openshift.io/description":"edit desciption","openshift.io/display-name":"new name  (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-8-limit-16","devops.gov.bc.ca/gitops-app":"tcfbfa3","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"AEST","name":"tcfbfa3","profile_id":"63cd7ab767552473a97b29f8","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"tcfbfa3-test"}}\n',
      "openshift.io/description": "edit desciption",
      "openshift.io/display-name": "new name  (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c45,c25",
      "openshift.io/sa.scc.supplemental-groups": "1002030000/10000",
      "openshift.io/sa.scc.uid-range": "1002030000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-22T23:39:56Z",
    labels: {
      cpu_quota: "cpu-request-8-limit-16",
      "devops.gov.bc.ca/gitops-app": "tcfbfa3",
      environment: "test",
      "kubernetes.io/metadata.name": "tcfbfa3-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "AEST",
      name: "tcfbfa3",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63cd7ab767552473a97b29f8",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "tcfbfa3-test",
    resourceVersion: "1809652118",
    uid: "35cb9060-985f-4616-8a5b-bacfde7f5b38"
  },
  {
    annotations: {
      contacts:
        '[{"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "okanji"}, {"email": "oamar.kanji@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "okanji"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"okanji\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"okanji\\"}]","openshift.io/description":"edit desciption","openshift.io/display-name":"new name  (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"tcfbfa3","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"AEST","name":"tcfbfa3","profile_id":"63cd7ab767552473a97b29f8","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"tcfbfa3-tools"}}\n',
      "openshift.io/description": "edit desciption",
      "openshift.io/display-name": "new name  (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c45,c5",
      "openshift.io/sa.scc.supplemental-groups": "1001990000/10000",
      "openshift.io/sa.scc.uid-range": "1001990000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-01-22T23:39:56Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "tcfbfa3",
      environment: "tools",
      "kubernetes.io/metadata.name": "tcfbfa3-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "AEST",
      name: "tcfbfa3",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "63cd7ab767552473a97b29f8",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "tcfbfa3-tools",
    resourceVersion: "1809652134",
    uid: "505f9379-03bf-4215-bdc2-7aae6d5cff85"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ian.1.watts@gov.bc.ca", "role": "owner"}, {"email": "oamar.kanji@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ian.1.watts@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"test","openshift.io/display-name":"Test Auth (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"td8a165","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"td8a165","profile_id":"6423770667edbf15887e5dea","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"td8a165-dev"}}\n',
      "openshift.io/description": "test",
      "openshift.io/display-name": "Test Auth (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c56,c45",
      "openshift.io/sa.scc.supplemental-groups": "1003170000/10000",
      "openshift.io/sa.scc.uid-range": "1003170000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-28T23:30:23Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "td8a165",
      environment: "dev",
      "kubernetes.io/metadata.name": "td8a165-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "td8a165",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "6423770667edbf15887e5dea",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "td8a165-dev",
    resourceVersion: "1839764087",
    uid: "7e931cf3-f633-4f68-ace0-0a17a19daffd"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ian.1.watts@gov.bc.ca", "role": "owner"}, {"email": "oamar.kanji@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ian.1.watts@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"test","openshift.io/display-name":"Test Auth (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"td8a165","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"td8a165","profile_id":"6423770667edbf15887e5dea","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"td8a165-prod"}}\n',
      "openshift.io/description": "test",
      "openshift.io/display-name": "Test Auth (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c56,c55",
      "openshift.io/sa.scc.supplemental-groups": "1003190000/10000",
      "openshift.io/sa.scc.uid-range": "1003190000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-28T23:30:23Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "td8a165",
      environment: "prod",
      "kubernetes.io/metadata.name": "td8a165-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "td8a165",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "6423770667edbf15887e5dea",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "td8a165-prod",
    resourceVersion: "1839764089",
    uid: "ff2a2996-3c50-4876-aba5-6cb33ada7b49"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ian.1.watts@gov.bc.ca", "role": "owner"}, {"email": "oamar.kanji@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ian.1.watts@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"test","openshift.io/display-name":"Test Auth (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"td8a165","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"td8a165","profile_id":"6423770667edbf15887e5dea","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"td8a165-test"}}\n',
      "openshift.io/description": "test",
      "openshift.io/display-name": "Test Auth (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c56,c50",
      "openshift.io/sa.scc.supplemental-groups": "1003180000/10000",
      "openshift.io/sa.scc.uid-range": "1003180000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-28T23:30:23Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "td8a165",
      environment: "test",
      "kubernetes.io/metadata.name": "td8a165-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "td8a165",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "6423770667edbf15887e5dea",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "td8a165-test",
    resourceVersion: "1839764096",
    uid: "bc058bf7-4d58-4f3e-b4b5-8148e4e41b10"
  },
  {
    annotations: {
      contacts:
        '[{"email": "ian.1.watts@gov.bc.ca", "role": "owner"}, {"email": "oamar.kanji@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"ian.1.watts@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"oamar.kanji@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"test","openshift.io/display-name":"Test Auth (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"td8a165","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"CITZ","name":"td8a165","profile_id":"6423770667edbf15887e5dea","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"td8a165-tools"}}\n',
      "openshift.io/description": "test",
      "openshift.io/display-name": "Test Auth (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c49,c34",
      "openshift.io/sa.scc.supplemental-groups": "1002420000/10000",
      "openshift.io/sa.scc.uid-range": "1002420000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-28T23:30:23Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "td8a165",
      environment: "tools",
      "kubernetes.io/metadata.name": "td8a165-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "CITZ",
      name: "td8a165",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "6423770667edbf15887e5dea",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "td8a165-tools",
    resourceVersion: "1839764098",
    uid: "9d7ea79f-d7b7-4498-bf0a-b660e6dfc5c5"
  },
  {
    annotations: {
      contacts:
        '[{"email": "artem.kravchenko@gov.bc.ca", "role": "owner"}, {"email": "platform.services.test.account@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"Artem Test Mar 13.1","openshift.io/display-name":"Artem Test Mar 13.1 (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"te1690b","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"TCA","name":"te1690b","profile_id":"640f526c8c46370ac15d638f","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"te1690b-dev"}}\n',
      "openshift.io/description": "Artem Test Mar 13.1",
      "openshift.io/display-name": "Artem Test Mar 13.1 (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c60,c30",
      "openshift.io/sa.scc.supplemental-groups": "1003600000/10000",
      "openshift.io/sa.scc.uid-range": "1003600000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-13T16:50:02Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "te1690b",
      environment: "dev",
      "kubernetes.io/metadata.name": "te1690b-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "TCA",
      name: "te1690b",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "640f526c8c46370ac15d638f",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "te1690b-dev",
    resourceVersion: "1821214837",
    uid: "f9b6e6ff-c3c2-4994-8c79-4a7030be1fce"
  },
  {
    annotations: {
      contacts:
        '[{"email": "artem.kravchenko@gov.bc.ca", "role": "owner"}, {"email": "platform.services.test.account@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"Artem Test Mar 13.1","openshift.io/display-name":"Artem Test Mar 13.1 (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"te1690b","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"TCA","name":"te1690b","profile_id":"640f526c8c46370ac15d638f","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"te1690b-prod"}}\n',
      "openshift.io/description": "Artem Test Mar 13.1",
      "openshift.io/display-name": "Artem Test Mar 13.1 (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c60,c20",
      "openshift.io/sa.scc.supplemental-groups": "1003580000/10000",
      "openshift.io/sa.scc.uid-range": "1003580000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-13T16:50:02Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "te1690b",
      environment: "prod",
      "kubernetes.io/metadata.name": "te1690b-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "TCA",
      name: "te1690b",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "640f526c8c46370ac15d638f",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "te1690b-prod",
    resourceVersion: "1821214835",
    uid: "0f8ecc67-d66e-48b2-aa2e-47dd0ad57e08"
  },
  {
    annotations: {
      contacts:
        '[{"email": "artem.kravchenko@gov.bc.ca", "role": "owner"}, {"email": "platform.services.test.account@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"Artem Test Mar 13.1","openshift.io/display-name":"Artem Test Mar 13.1 (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"te1690b","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"TCA","name":"te1690b","profile_id":"640f526c8c46370ac15d638f","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"te1690b-test"}}\n',
      "openshift.io/description": "Artem Test Mar 13.1",
      "openshift.io/display-name": "Artem Test Mar 13.1 (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c60,c25",
      "openshift.io/sa.scc.supplemental-groups": "1003590000/10000",
      "openshift.io/sa.scc.uid-range": "1003590000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-13T16:50:02Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "te1690b",
      environment: "test",
      "kubernetes.io/metadata.name": "te1690b-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "TCA",
      name: "te1690b",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "640f526c8c46370ac15d638f",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "te1690b-test",
    resourceVersion: "1821214836",
    uid: "61d799ac-428a-4008-969f-aa101307a64e"
  },
  {
    annotations: {
      contacts:
        '[{"email": "artem.kravchenko@gov.bc.ca", "role": "owner"}, {"email": "platform.services.test.account@gov.bc.ca", "role": "lead"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"role\\": \\"owner\\"}, {\\"email\\": \\"platform.services.test.account@gov.bc.ca\\", \\"role\\": \\"lead\\"}]","openshift.io/description":"Artem Test Mar 13.1","openshift.io/display-name":"Artem Test Mar 13.1 (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"te1690b","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"TCA","name":"te1690b","profile_id":"640f526c8c46370ac15d638f","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"te1690b-tools"}}\n',
      "openshift.io/description": "Artem Test Mar 13.1",
      "openshift.io/display-name": "Artem Test Mar 13.1 (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c60,c35",
      "openshift.io/sa.scc.supplemental-groups": "1003610000/10000",
      "openshift.io/sa.scc.uid-range": "1003610000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-13T16:50:02Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "te1690b",
      environment: "tools",
      "kubernetes.io/metadata.name": "te1690b-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "TCA",
      name: "te1690b",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "640f526c8c46370ac15d638f",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "te1690b-tools",
    resourceVersion: "1821214834",
    uid: "ee15cb64-e6a3-49b6-bd47-3b5099da3e5a"
  },
  {
    annotations: {
      contacts:
        '[{"email": "artem.kravchenko@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "zhanna.kolesnyk@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"zhanna.kolesnyk@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test Mar 8.1","openshift.io/display-name":"Artem Test Mar 8.1 (dev)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"ted2517","environment":"dev","memory_quota":"memory-request-2-limit-4","ministry_id":"FIN","name":"ted2517","profile_id":"64090831f4a563c645c3565d","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"ted2517-dev"}}\n',
      "openshift.io/description": "Artem Test Mar 8.1",
      "openshift.io/display-name": "Artem Test Mar 8.1 (dev)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c58,c32",
      "openshift.io/sa.scc.supplemental-groups": "1003370000/10000",
      "openshift.io/sa.scc.uid-range": "1003370000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-08T22:23:26Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "ted2517",
      environment: "dev",
      "kubernetes.io/metadata.name": "ted2517-dev",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "FIN",
      name: "ted2517",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "64090831f4a563c645c3565d",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "ted2517-dev",
    resourceVersion: "1809652240",
    uid: "2c19bca9-53c5-43a9-9597-b23598796c18"
  },
  {
    annotations: {
      contacts:
        '[{"email": "artem.kravchenko@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "zhanna.kolesnyk@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"zhanna.kolesnyk@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test Mar 8.1","openshift.io/display-name":"Artem Test Mar 8.1 (prod)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"ted2517","environment":"prod","memory_quota":"memory-request-2-limit-4","ministry_id":"FIN","name":"ted2517","profile_id":"64090831f4a563c645c3565d","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"ted2517-prod"}}\n',
      "openshift.io/description": "Artem Test Mar 8.1",
      "openshift.io/display-name": "Artem Test Mar 8.1 (prod)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c60,c10",
      "openshift.io/sa.scc.supplemental-groups": "1003560000/10000",
      "openshift.io/sa.scc.uid-range": "1003560000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-08T22:23:26Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "ted2517",
      environment: "prod",
      "kubernetes.io/metadata.name": "ted2517-prod",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "FIN",
      name: "ted2517",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "64090831f4a563c645c3565d",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "ted2517-prod",
    resourceVersion: "1809652260",
    uid: "1b25b1ca-3f14-45a6-baa4-69e9f3c1594f"
  },
  {
    annotations: {
      contacts:
        '[{"email": "artem.kravchenko@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "zhanna.kolesnyk@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"zhanna.kolesnyk@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test Mar 8.1","openshift.io/display-name":"Artem Test Mar 8.1 (test)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"ted2517","environment":"test","memory_quota":"memory-request-2-limit-4","ministry_id":"FIN","name":"ted2517","profile_id":"64090831f4a563c645c3565d","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"ted2517-test"}}\n',
      "openshift.io/description": "Artem Test Mar 8.1",
      "openshift.io/display-name": "Artem Test Mar 8.1 (test)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c60,c0",
      "openshift.io/sa.scc.supplemental-groups": "1003540000/10000",
      "openshift.io/sa.scc.uid-range": "1003540000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-08T22:23:26Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "ted2517",
      environment: "test",
      "kubernetes.io/metadata.name": "ted2517-test",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "FIN",
      name: "ted2517",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "64090831f4a563c645c3565d",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "ted2517-test",
    resourceVersion: "1809652288",
    uid: "aacdd0e8-64fc-4424-a319-a8b58429614c"
  },
  {
    annotations: {
      contacts:
        '[{"email": "artem.kravchenko@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "owner", "user_id": "PlatformServicesTest"}, {"email": "zhanna.kolesnyk@gov.bc.ca", "provider": "github", "rocketchat_username": null, "role": "lead", "user_id": "PlatformServicesTest"}]',
      "kubectl.kubernetes.io/last-applied-configuration":
        '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{"contacts":"[{\\"email\\": \\"artem.kravchenko@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"owner\\", \\"user_id\\": \\"PlatformServicesTest\\"}, {\\"email\\": \\"zhanna.kolesnyk@gov.bc.ca\\", \\"provider\\": \\"github\\", \\"rocketchat_username\\": null, \\"role\\": \\"lead\\", \\"user_id\\": \\"PlatformServicesTest\\"}]","openshift.io/description":"Artem Test Mar 8.1","openshift.io/display-name":"Artem Test Mar 8.1 (tools)","openshift.io/requester":"application-registry"},"labels":{"cpu_quota":"cpu-request-0.5-limit-1.5","devops.gov.bc.ca/gitops-app":"ted2517","environment":"tools","memory_quota":"memory-request-2-limit-4","ministry_id":"FIN","name":"ted2517","profile_id":"64090831f4a563c645c3565d","project_type":"user","provisioned-by":"argocd","snapshot_quota":"snapshot-5","storage_quota":"storage-1"},"name":"ted2517-tools"}}\n',
      "openshift.io/description": "Artem Test Mar 8.1",
      "openshift.io/display-name": "Artem Test Mar 8.1 (tools)",
      "openshift.io/requester": "application-registry",
      "openshift.io/sa.scc.mcs": "s0:c60,c5",
      "openshift.io/sa.scc.supplemental-groups": "1003550000/10000",
      "openshift.io/sa.scc.uid-range": "1003550000/10000",
      "operator.tekton.dev/prune.hash":
        "5f41c069903cdde686ef463b8955323e7462414d1aebc4418198c4fda910fc2c"
    },
    creationTimestamp: "2023-03-08T22:23:26Z",
    labels: {
      cpu_quota: "cpu-request-0.5-limit-1.5",
      "devops.gov.bc.ca/gitops-app": "ted2517",
      environment: "tools",
      "kubernetes.io/metadata.name": "ted2517-tools",
      memory_quota: "memory-request-2-limit-4",
      ministry_id: "FIN",
      name: "ted2517",
      "openshift-pipelines.tekton.dev/namespace-reconcile-version": "1.9.2",
      "pod-security.kubernetes.io/audit": "baseline",
      "pod-security.kubernetes.io/audit-version": "v1.24",
      "pod-security.kubernetes.io/warn": "baseline",
      "pod-security.kubernetes.io/warn-version": "v1.24",
      profile_id: "64090831f4a563c645c3565d",
      project_type: "user",
      "provisioned-by": "argocd",
      snapshot_quota: "snapshot-5",
      storage_quota: "storage-1"
    },
    name: "ted2517-tools",
    resourceVersion: "1809652322",
    uid: "3b5ba532-cd39-488c-a0be-82fd6fb87676"
  }
];

module.exports = {
  data
};
