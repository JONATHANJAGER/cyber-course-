window.CYBER_COURSE = {
  "title": "Cyber Upgrade",
  "subtitle": "Cybersecurity & Security Leadership Academy",
  "version": "Pilot 1.0",
  "meta": {
    "weeks": 36,
    "classes": 144,
    "months": 9,
    "hoursPerWeek": 20,
    "hoursPerClass": 5,
    "days": [
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "totalHours": 720
  },
  "months": [
    {
      "id": 1,
      "name": "COMPUTER, NETWORK AND WINDOWS FOUNDATIONS"
    },
    {
      "id": 2,
      "name": "LINUX, PYTHON AND CORE SECURITY"
    },
    {
      "id": 3,
      "name": "ENTERPRISE NETWORK PROJECT AND GOVERNANCE"
    },
    {
      "id": 4,
      "name": "SECURITY OPERATIONS AND THREAT HUNTING"
    },
    {
      "id": 5,
      "name": "INCIDENT RESPONSE AND MICROSOFT SECURITY"
    },
    {
      "id": 6,
      "name": "CLOUD SECURITY AND ANALYST CERTIFICATIONS"
    },
    {
      "id": 7,
      "name": "AI SECURITY, AUTOMATION AND GOVERNANCE"
    },
    {
      "id": 8,
      "name": "CLOUD/AI PORTFOLIO AND PROJECT MANAGEMENT"
    },
    {
      "id": 9,
      "name": "CYBERSECURITY LEADERSHIP, CAREER AND GRADUATION"
    }
  ],
  "weeks": [
    {
      "id": 1,
      "month": 1,
      "title": "Orientation, computer systems and cyber careers",
      "scope": "Cyber roles; computing units; hardware and storage; virtualization; authorization and ethics",
      "classes": [
        {
          "id": "1",
          "day": "Tuesday",
          "title": "hardware/CPU/RAM/storage, bits/bytes, virtualization, responsible lab use"
        },
        {
          "id": "2",
          "day": "Wednesday",
          "title": "inventory computer specifications; create course folders and a lab safety checklist"
        },
        {
          "id": "3",
          "day": "Thursday",
          "title": "introduce VM snapshots, host-only/NAT networking, backups; build first safe test VM if compatible"
        },
        {
          "id": "4",
          "day": "Friday",
          "title": "skills baseline, 20-question diagnostic, reflection and learning log"
        }
      ],
      "deliverable": "System inventory; laboratory safety agreement; baseline score",
      "track": "Foundations",
      "published": true
    },
    {
      "id": 2,
      "month": 1,
      "title": "Networking I: how computers communicate",
      "scope": "OSI and TCP/IP; IPv4/IPv6; IP/subnet; MAC; DNS; DHCP; gateways",
      "classes": [
        {
          "id": "5",
          "day": "Tuesday",
          "title": "packets and protocols, IP addressing and subnet calculations with worked examples"
        },
        {
          "id": "6",
          "day": "Wednesday",
          "title": "ipconfig/ip, ping, tracert/traceroute, nslookup/dig in a private lab"
        },
        {
          "id": "7",
          "day": "Thursday",
          "title": "capture and interpret permitted traffic using Wireshark; explain DNS and TCP handshakes"
        },
        {
          "id": "8",
          "day": "Friday",
          "title": "subnet worksheet, short quiz and packet-trace walkthrough"
        }
      ],
      "deliverable": "Annotated packet capture and small-network map",
      "track": "Network fundamentals / Security+",
      "published": true
    },
    {
      "id": 3,
      "month": 1,
      "title": "Networking II: enterprise connectivity",
      "scope": "Ports; TCP/UDP; routing/switching; VLANs; firewalls; VPNs; wireless",
      "classes": [
        {
          "id": "9",
          "day": "Tuesday",
          "title": "routing, VLAN segmentation, protocols/ports and network service design"
        },
        {
          "id": "10",
          "day": "Wednesday",
          "title": "simulate two subnets and allow/deny rules using virtual networking"
        },
        {
          "id": "11",
          "day": "Thursday",
          "title": "test permitted versus blocked connections; draft a warehouse VLAN model"
        },
        {
          "id": "12",
          "day": "Friday",
          "title": "troubleshoot a deliberately broken network and present changes"
        }
      ],
      "deliverable": "Segmented network diagram; firewall test record; change ticket",
      "track": "Network security / Security+",
      "published": true
    },
    {
      "id": 4,
      "month": 1,
      "title": "Windows administration and first checkpoint",
      "scope": "OS functions; Windows users/groups; NTFS permissions; logs; updates; endpoint baseline",
      "classes": [
        {
          "id": "13",
          "day": "Tuesday",
          "title": "OS processes/services, accounts, least privilege, security baselines"
        },
        {
          "id": "14",
          "day": "Wednesday",
          "title": "create local users, set permissions, explore Event Viewer on a lab Windows VM"
        },
        {
          "id": "15",
          "day": "Thursday",
          "title": "practice patch review, log export and basic PowerShell commands"
        },
        {
          "id": "16",
          "day": "Friday",
          "title": "practical exam 1 - Windows permissions and network troubleshooting"
        }
      ],
      "deliverable": "Windows baseline worksheet; practical exam 1",
      "track": "Windows / Security+",
      "published": true
    },
    {
      "id": 5,
      "month": 2,
      "title": "Linux administration",
      "scope": "Linux filesystem; permissions; users; processes; services; SSH; logs",
      "classes": [
        {
          "id": "17",
          "day": "Tuesday",
          "title": "CLI navigation and filesystem; chmod/chown; package management"
        },
        {
          "id": "18",
          "day": "Wednesday",
          "title": "safe user/permission changes and SSH login in Ubuntu VM"
        },
        {
          "id": "19",
          "day": "Thursday",
          "title": "examine journalctl/auth logs; harden service configuration with rollback"
        },
        {
          "id": "20",
          "day": "Friday",
          "title": "reconstruct a Linux access problem and explain corrective action"
        }
      ],
      "deliverable": "Linux hardening checklist, before/after evidence, rollback notes",
      "track": "Linux / Security+",
      "published": false
    },
    {
      "id": 6,
      "month": 2,
      "title": "Python scripting and source control",
      "scope": "Variables; types; conditionals; loops; functions; files; CSV/JSON; Git",
      "classes": [
        {
          "id": "21",
          "day": "Tuesday",
          "title": "Python fundamentals using provided worked code examples"
        },
        {
          "id": "22",
          "day": "Wednesday",
          "title": "write a simple offline event-log parser with sample data"
        },
        {
          "id": "23",
          "day": "Thursday",
          "title": "add validation, exception handling, tests and Git commits"
        },
        {
          "id": "24",
          "day": "Friday",
          "title": "script demo, unit quiz and code review"
        }
      ],
      "deliverable": "Python log parser, sample output, README and tests",
      "track": "Scripting foundations",
      "published": false
    },
    {
      "id": 7,
      "month": 2,
      "title": "Security principles and identity",
      "scope": "CIA; threats; risks; controls; zero trust; IAM; MFA; encryption/hashing; backups",
      "classes": [
        {
          "id": "25",
          "day": "Tuesday",
          "title": "assets/threats/vulnerabilities, risk thinking and control types"
        },
        {
          "id": "26",
          "day": "Wednesday",
          "title": "demonstrate role-based access controls and MFA concepts using lab examples"
        },
        {
          "id": "27",
          "day": "Thursday",
          "title": "compare hashing versus encryption; model backup and recovery priorities"
        },
        {
          "id": "28",
          "day": "Friday",
          "title": "build a control-to-threat mapping and answer scenario quiz"
        }
      ],
      "deliverable": "Control matrix and short written risk assessment",
      "track": "Security+ domains",
      "published": false
    },
    {
      "id": 8,
      "month": 2,
      "title": "Secure-network design and Security+ checkpoint",
      "scope": "Security architecture; identity; inventory; attack surfaces; capstone planning",
      "classes": [
        {
          "id": "29",
          "day": "Tuesday",
          "title": "translate a fictional distribution center brief into security requirements"
        },
        {
          "id": "30",
          "day": "Wednesday",
          "title": "draft network plan, assets, VLANs, identity roles and rule sets"
        },
        {
          "id": "31",
          "day": "Thursday",
          "title": "threat-model design and run table-top review with failure scenarios"
        },
        {
          "id": "32",
          "day": "Friday",
          "title": "monthly exam 2 and Project 1 architecture approval"
        }
      ],
      "deliverable": "Project 1 design package and checkpoint score",
      "track": "Security+ / Project 1",
      "published": false
    },
    {
      "id": 9,
      "month": 3,
      "title": "Project 1: enterprise network security",
      "scope": "Implement segmentation, access control, validation and documentation",
      "classes": [
        {
          "id": "33",
          "day": "Tuesday",
          "title": "review design and deployment/change-control sequence"
        },
        {
          "id": "34",
          "day": "Wednesday",
          "title": "configure test virtual networks/endpoints and basic controls"
        },
        {
          "id": "35",
          "day": "Thursday",
          "title": "perform repeatable access tests, capture evidence and roll back unsafe rules"
        },
        {
          "id": "36",
          "day": "Friday",
          "title": "demo network and present 1-page executive explanation"
        }
      ],
      "deliverable": "Project 1 final: topology, configs, test results and executive summary",
      "track": "Security+ / Portfolio",
      "published": false
    },
    {
      "id": 10,
      "month": 3,
      "title": "Governance, risk and compliance I",
      "scope": "NIST CSF 2.0 functions; asset inventory; risk registers; policies; control owners",
      "classes": [
        {
          "id": "37",
          "day": "Tuesday",
          "title": "explain Govern, Identify, Protect, Detect, Respond and Recover"
        },
        {
          "id": "38",
          "day": "Wednesday",
          "title": "create risk statements, likelihood/impact ratings and treatment plans"
        },
        {
          "id": "39",
          "day": "Thursday",
          "title": "map warehouse/distribution scenarios to control owners and evidence"
        },
        {
          "id": "40",
          "day": "Friday",
          "title": "risk committee mock meeting and documentation quiz"
        }
      ],
      "deliverable": "Risk register and NIST CSF gap analysis",
      "track": "GRC / CGRC concepts",
      "published": false
    },
    {
      "id": 11,
      "month": 3,
      "title": "Governance, risk and compliance II",
      "scope": "Security policy writing; QA; audit testing; evidence; SOPs; remediation",
      "classes": [
        {
          "id": "41",
          "day": "Tuesday",
          "title": "distinguish policy, standard, procedure and guideline"
        },
        {
          "id": "42",
          "day": "Wednesday",
          "title": "draft user access review SOP and evidence collection checklist"
        },
        {
          "id": "43",
          "day": "Thursday",
          "title": "simulate an audit, record findings and plan corrective actions"
        },
        {
          "id": "44",
          "day": "Friday",
          "title": "explain audit results to an operations manager"
        }
      ],
      "deliverable": "Security SOP, audit worksheet and remediation tracker",
      "track": "GRC / Security+",
      "published": false
    },
    {
      "id": 12,
      "month": 3,
      "title": "Security+ readiness and troubleshooting",
      "scope": "Integrated defensive scenarios; networking, identity, endpoints, GRC",
      "classes": [
        {
          "id": "45",
          "day": "Tuesday",
          "title": "structured review and guided security scenario walkthroughs"
        },
        {
          "id": "46",
          "day": "Wednesday",
          "title": "technical station practice: log review, basic hardening, network access"
        },
        {
          "id": "47",
          "day": "Thursday",
          "title": "target weak exam domains and complete timed original practice questions"
        },
        {
          "id": "48",
          "day": "Friday",
          "title": "monthly exam 3, proficiency rubric and exam-readiness decision"
        }
      ],
      "deliverable": "Security+ readiness report and personal remediation plan",
      "track": "Security+ checkpoint",
      "published": false
    },
    {
      "id": 13,
      "month": 4,
      "title": "SOC operations I: people, process and telemetry",
      "scope": "SOC purpose; SIEM; endpoint/network telemetry; alerts; ticketing; triage",
      "classes": [
        {
          "id": "49",
          "day": "Tuesday",
          "title": "detection vs prevention and severity/priority classification"
        },
        {
          "id": "50",
          "day": "Wednesday",
          "title": "ingest prebuilt synthetic Windows/Linux events into a chosen local tool"
        },
        {
          "id": "51",
          "day": "Thursday",
          "title": "triage five simple alerts and document escalation reasons"
        },
        {
          "id": "52",
          "day": "Friday",
          "title": "conduct shift-handoff review and take scenario quiz"
        }
      ],
      "deliverable": "SOC triage log, ticket template and escalation playbook",
      "track": "CySA+ / SC-200",
      "published": false
    },
    {
      "id": 14,
      "month": 4,
      "title": "SOC operations II: SIEM and searches",
      "scope": "Log fields; timestamps; parsing; queries; detection fidelity; baselines",
      "classes": [
        {
          "id": "53",
          "day": "Tuesday",
          "title": "SIEM architecture and false-positive/false-negative tradeoffs"
        },
        {
          "id": "54",
          "day": "Wednesday",
          "title": "run starter queries on sample data; identify account failures and anomalies"
        },
        {
          "id": "55",
          "day": "Thursday",
          "title": "tune simple detection logic and measure alert quality"
        },
        {
          "id": "56",
          "day": "Friday",
          "title": "propose deployment plan and reporting metrics"
        }
      ],
      "deliverable": "Project 2 plan; basic search/detection rule set",
      "track": "CySA+ / SC-200",
      "published": false
    },
    {
      "id": 15,
      "month": 4,
      "title": "Threat intelligence and hunting",
      "scope": "Indicators vs behavior; MITRE ATT&CK; tactics/techniques; investigation hypotheses",
      "classes": [
        {
          "id": "57",
          "day": "Tuesday",
          "title": "ATT&CK mapping, threat intel confidence and operational use"
        },
        {
          "id": "58",
          "day": "Wednesday",
          "title": "query synthetic telemetry for an allowed attack simulation"
        },
        {
          "id": "59",
          "day": "Thursday",
          "title": "write hypothesis, expected evidence and alternate explanations"
        },
        {
          "id": "60",
          "day": "Friday",
          "title": "present findings and uncertainty in a one-page hunt brief"
        }
      ],
      "deliverable": "Hunt plan, queries, findings and limitations",
      "track": "CySA+ / Threat detection",
      "published": false
    },
    {
      "id": 16,
      "month": 4,
      "title": "Project 2: simulated security operations center",
      "scope": "Alert handling; SIEM searches; incident tickets; detection tuning; metrics",
      "classes": [
        {
          "id": "61",
          "day": "Tuesday",
          "title": "organize simulated shift using roles, targets and operating procedures"
        },
        {
          "id": "62",
          "day": "Wednesday",
          "title": "process minimum five synthetic alerts and document evidence"
        },
        {
          "id": "63",
          "day": "Thursday",
          "title": "tune two detections; build operational dashboard from provided dataset"
        },
        {
          "id": "64",
          "day": "Friday",
          "title": "monthly exam 4 and Project 2 SOC handoff presentation"
        }
      ],
      "deliverable": "Project 2 final: playbook, evidence, dashboard and shift report",
      "track": "CySA+ / SC-200",
      "published": false
    },
    {
      "id": 17,
      "month": 5,
      "title": "Incident response lifecycle",
      "scope": "Preparation; identification; containment; eradication; recovery; communication",
      "classes": [
        {
          "id": "65",
          "day": "Tuesday",
          "title": "incident severity, roles, runbooks and decision authority"
        },
        {
          "id": "66",
          "day": "Wednesday",
          "title": "triage fictional phishing/ransomware indicators from synthetic logs"
        },
        {
          "id": "67",
          "day": "Thursday",
          "title": "plan containment versus business continuity with a distribution center scenario"
        },
        {
          "id": "68",
          "day": "Friday",
          "title": "tabletop briefing to IT, legal and operations roles"
        }
      ],
      "deliverable": "Incident response plan and communications matrix",
      "track": "CySA+ / Incident response",
      "published": false
    },
    {
      "id": 18,
      "month": 5,
      "title": "Digital forensics and evidence",
      "scope": "Integrity; hashing; chain of custody; timelines; retention; reporting",
      "classes": [
        {
          "id": "69",
          "day": "Tuesday",
          "title": "legal/ethical scope, evidence types and forensic process limits"
        },
        {
          "id": "70",
          "day": "Wednesday",
          "title": "calculate file hashes and review preserved sample artifacts"
        },
        {
          "id": "71",
          "day": "Thursday",
          "title": "correlate synthetic events into defensible timeline"
        },
        {
          "id": "72",
          "day": "Friday",
          "title": "write findings and distinguish observed facts from inference"
        }
      ],
      "deliverable": "Chain-of-custody sample and annotated event timeline",
      "track": "CySA+ / Forensics",
      "published": false
    },
    {
      "id": 19,
      "month": 5,
      "title": "Project 3: incident investigation",
      "scope": "Investigation workflow; technical findings; response decisions; lessons learned",
      "classes": [
        {
          "id": "73",
          "day": "Tuesday",
          "title": "review case packet and define questions/collection plan"
        },
        {
          "id": "74",
          "day": "Wednesday",
          "title": "analyze authorized synthetic host and network evidence"
        },
        {
          "id": "75",
          "day": "Thursday",
          "title": "produce containment/recovery actions and quantify uncertainty"
        },
        {
          "id": "76",
          "day": "Friday",
          "title": "defend evidence and present executive incident briefing"
        }
      ],
      "deliverable": "Project 3 final: evidence index, timeline, report, after-action review",
      "track": "CySA+ / Portfolio",
      "published": false
    },
    {
      "id": 20,
      "month": 5,
      "title": "Microsoft security operations and KQL",
      "scope": "Defender/Sentinel concepts; workbooks; KQL; hunting queries; alert investigation",
      "classes": [
        {
          "id": "77",
          "day": "Tuesday",
          "title": "explain Microsoft security platform and security data flow"
        },
        {
          "id": "78",
          "day": "Wednesday",
          "title": "practice where/extend/summarize/project with offline KQL examples"
        },
        {
          "id": "79",
          "day": "Thursday",
          "title": "interpret and triage sample Microsoft-style alerts; define playbook"
        },
        {
          "id": "80",
          "day": "Friday",
          "title": "monthly exam 5 and SC-200 readiness gap map"
        }
      ],
      "deliverable": "KQL workbook, alert triage record and readiness map",
      "track": "SC-200",
      "published": false
    },
    {
      "id": 21,
      "month": 6,
      "title": "Cloud security foundations",
      "scope": "Shared responsibility; IaaS/PaaS/SaaS; IAM; encryption; logging; network controls",
      "classes": [
        {
          "id": "81",
          "day": "Tuesday",
          "title": "cloud responsibility boundaries and threat modeling"
        },
        {
          "id": "82",
          "day": "Wednesday",
          "title": "draw role and permission relationships from sample architecture"
        },
        {
          "id": "83",
          "day": "Thursday",
          "title": "model secure storage, secrets and monitored traffic using emulator/diagrams"
        },
        {
          "id": "84",
          "day": "Friday",
          "title": "present cost, risk and access decisions"
        }
      ],
      "deliverable": "Cloud threat model and least-privilege policy",
      "track": "Cloud / Azure security",
      "published": false
    },
    {
      "id": 22,
      "month": 6,
      "title": "Azure security engineering",
      "scope": "Azure identity; resource groups; RBAC; policy; networking; monitoring",
      "classes": [
        {
          "id": "85",
          "day": "Tuesday",
          "title": "Azure landing-zone vocabulary and management hierarchy"
        },
        {
          "id": "86",
          "day": "Wednesday",
          "title": "practice IAM/RBAC, policy and logging in approved sandbox or offline emulator"
        },
        {
          "id": "87",
          "day": "Thursday",
          "title": "test denial conditions and monitor access; document cleanup/cost limits"
        },
        {
          "id": "88",
          "day": "Friday",
          "title": "defend Azure baseline against common misconfiguration scenarios"
        }
      ],
      "deliverable": "Azure architecture map and security baseline with evidence",
      "track": "Azure security / SC-200",
      "published": false
    },
    {
      "id": 23,
      "month": 6,
      "title": "AWS security engineering",
      "scope": "AWS IAM; VPCs; security groups; CloudTrail; KMS; shared responsibility",
      "classes": [
        {
          "id": "89",
          "day": "Tuesday",
          "title": "compare AWS/Azure security models and key services"
        },
        {
          "id": "90",
          "day": "Wednesday",
          "title": "implement least privilege in approved AWS sandbox or modeled examples"
        },
        {
          "id": "91",
          "day": "Thursday",
          "title": "log-review simulation; validate access boundaries and budget alerts"
        },
        {
          "id": "92",
          "day": "Friday",
          "title": "cloud configuration comparison and incident mini-quiz"
        }
      ],
      "deliverable": "AWS access review and cloud control comparison",
      "track": "Cloud / Governance",
      "published": false
    },
    {
      "id": 24,
      "month": 6,
      "title": "Analyst certification review",
      "scope": "Vulnerability scanning reports; SIEM decisions; incident triage; KQL",
      "classes": [
        {
          "id": "93",
          "day": "Tuesday",
          "title": "consolidate incident and SOC scenario reasoning"
        },
        {
          "id": "94",
          "day": "Wednesday",
          "title": "timed hands-on stations using sample alerts and vulnerability data"
        },
        {
          "id": "95",
          "day": "Thursday",
          "title": "remediate weaker KQL, detection, cloud and response topics"
        },
        {
          "id": "96",
          "day": "Friday",
          "title": "monthly exam 6; CySA+/SC-200 readiness decisions"
        }
      ],
      "deliverable": "Analyst readiness rubric and skills-gap backlog",
      "track": "CySA+ / SC-200",
      "published": false
    },
    {
      "id": 25,
      "month": 7,
      "title": "AI foundations for security",
      "scope": "ML vs rules; LLMs; inference; prompting; evaluation; privacy; hallucinations",
      "classes": [
        {
          "id": "97",
          "day": "Tuesday",
          "title": "AI system types, error modes and useful security applications"
        },
        {
          "id": "98",
          "day": "Wednesday",
          "title": "evaluate synthetic classification outputs against ground truth"
        },
        {
          "id": "99",
          "day": "Thursday",
          "title": "use fixed prompts on non-sensitive examples; test hallucination risk"
        },
        {
          "id": "100",
          "day": "Friday",
          "title": "write acceptable task boundaries and verification checklist"
        }
      ],
      "deliverable": "AI limitations brief and evaluation worksheet",
      "track": "AI literacy",
      "published": false
    },
    {
      "id": 26,
      "month": 7,
      "title": "Python automation and data analysis",
      "scope": "Pandas basics; structured logs; parsing; APIs; secrets; reproducible tests",
      "classes": [
        {
          "id": "101",
          "day": "Tuesday",
          "title": "data cleaning/feature design and safe automation patterns"
        },
        {
          "id": "102",
          "day": "Wednesday",
          "title": "build a synthetic-alert summarizer in Python with offline data"
        },
        {
          "id": "103",
          "day": "Thursday",
          "title": "add unit tests, thresholds, logging and manual approval gate"
        },
        {
          "id": "104",
          "day": "Friday",
          "title": "code walkthrough, measurement and error analysis"
        }
      ],
      "deliverable": "Reproducible triage script and test report",
      "track": "Python / Automation",
      "published": false
    },
    {
      "id": 27,
      "month": 7,
      "title": "AI security, governance and NIST AI RMF",
      "scope": "Prompt injection; leakage; oversight; vendor risk; AI inventory; governance",
      "classes": [
        {
          "id": "105",
          "day": "Tuesday",
          "title": "AI threat models and human accountability"
        },
        {
          "id": "106",
          "day": "Wednesday",
          "title": "run safe prompt-injection and data-leakage evaluations on mock data"
        },
        {
          "id": "107",
          "day": "Thursday",
          "title": "write policy, risk register entries and procurement questions"
        },
        {
          "id": "108",
          "day": "Friday",
          "title": "conduct risk acceptance committee simulation"
        }
      ],
      "deliverable": "AI policy, risk assessment and attack-test worksheet",
      "track": "AI governance / GRC",
      "published": false
    },
    {
      "id": 28,
      "month": 7,
      "title": "Project 4: secure Azure + AWS architecture",
      "scope": "Reference architecture; IAM; logging; monitoring; encryption; cost controls",
      "classes": [
        {
          "id": "109",
          "day": "Tuesday",
          "title": "finalize cross-cloud secure-architecture requirements"
        },
        {
          "id": "110",
          "day": "Wednesday",
          "title": "document Azure/AWS control configurations from sandboxes or emulated evidence"
        },
        {
          "id": "111",
          "day": "Thursday",
          "title": "test role access, log coverage, rollback and budget guardrails"
        },
        {
          "id": "112",
          "day": "Friday",
          "title": "monthly exam 7 and Project 4 architecture review"
        }
      ],
      "deliverable": "Project 4 final: diagrams, access matrix, tests, cost and risk record",
      "track": "Azure / Cloud portfolio",
      "published": false
    },
    {
      "id": 29,
      "month": 8,
      "title": "Project 5: AI-assisted security operations",
      "scope": "Human-in-loop alert triage; safety controls; traceability; evaluation",
      "classes": [
        {
          "id": "113",
          "day": "Tuesday",
          "title": "define business case and success metrics for AI triage"
        },
        {
          "id": "114",
          "day": "Wednesday",
          "title": "implement small synthetic-data triage prototype in Python"
        },
        {
          "id": "115",
          "day": "Thursday",
          "title": "test incorrect classification, prompt injection, privacy and override workflows"
        },
        {
          "id": "116",
          "day": "Friday",
          "title": "demo Project 5 and present limitations to simulated management"
        }
      ],
      "deliverable": "Project 5 final: prototype, tests, model-risk register and approval flow",
      "track": "AI + SOC portfolio",
      "published": false
    },
    {
      "id": 30,
      "month": 8,
      "title": "Security project management",
      "scope": "Scope; schedules; WBS; stakeholders; dependencies; change control; agile/hybrid",
      "classes": [
        {
          "id": "117",
          "day": "Tuesday",
          "title": "project charter and baseline estimation; CAPM concepts"
        },
        {
          "id": "118",
          "day": "Wednesday",
          "title": "create work breakdown and critical path for SOC rollout"
        },
        {
          "id": "119",
          "day": "Thursday",
          "title": "manage change request, schedule delay and risk escalation simulation"
        },
        {
          "id": "120",
          "day": "Friday",
          "title": "steering committee update and quiz"
        }
      ],
      "deliverable": "Security project charter, WBS, timeline and status report",
      "track": "CAPM / Management",
      "published": false
    },
    {
      "id": 31,
      "month": 8,
      "title": "Cyber budgeting, vendors and ROI",
      "scope": "Labor/tooling costs; licensing; procurement; risk-based prioritization; TCO",
      "classes": [
        {
          "id": "121",
          "day": "Tuesday",
          "title": "distinguish capital vs operational expenses and tool tradeoffs"
        },
        {
          "id": "122",
          "day": "Wednesday",
          "title": "build 12-month starter budget from fictional line items"
        },
        {
          "id": "123",
          "day": "Thursday",
          "title": "evaluate vendors for security, privacy, support and cost"
        },
        {
          "id": "124",
          "day": "Friday",
          "title": "defend purchasing decision using risk and assumptions"
        }
      ],
      "deliverable": "Budget workbook specification and vendor scorecard",
      "track": "Cyber management / GRC",
      "published": false
    },
    {
      "id": 32,
      "month": 8,
      "title": "Security leadership and management systems",
      "scope": "RACI; hiring; coaching; incident leadership; KPIs/KRIs; board reporting",
      "classes": [
        {
          "id": "125",
          "day": "Tuesday",
          "title": "design reporting lines and operating procedures"
        },
        {
          "id": "126",
          "day": "Wednesday",
          "title": "create staffing plan, duties, escalation ladder and onboarding"
        },
        {
          "id": "127",
          "day": "Thursday",
          "title": "facilitate cybersecurity tabletop and resolve conflicting priorities"
        },
        {
          "id": "128",
          "day": "Friday",
          "title": "monthly exam 8 and leadership review panel"
        }
      ],
      "deliverable": "RACI, staffing plan, team KPIs and tabletop minutes",
      "track": "Management / CGRC/CISM concepts",
      "published": false
    },
    {
      "id": 33,
      "month": 9,
      "title": "Project 6: build a cybersecurity department",
      "scope": "Program governance; policy library; risk register; org design; roadmaps",
      "classes": [
        {
          "id": "129",
          "day": "Tuesday",
          "title": "select fictional warehouse/distribution company and business objectives"
        },
        {
          "id": "130",
          "day": "Wednesday",
          "title": "build operating charter, policies, staffing and risk governance cycle"
        },
        {
          "id": "131",
          "day": "Thursday",
          "title": "create phased 12-month improvement roadmap and metrics"
        },
        {
          "id": "132",
          "day": "Friday",
          "title": "peer-style operating review and draft management presentation"
        }
      ],
      "deliverable": "Project 6: operating model, department charter, risk register and roadmap",
      "track": "Management capstone",
      "published": false
    },
    {
      "id": 34,
      "month": 9,
      "title": "Project 6: executive board presentation",
      "scope": "Budget decisions; risk tradeoffs; executive storytelling; metrics; portfolio defense",
      "classes": [
        {
          "id": "133",
          "day": "Tuesday",
          "title": "turn technical evidence into 10-minute management presentation"
        },
        {
          "id": "134",
          "day": "Wednesday",
          "title": "justify program investment and response to incident scenario"
        },
        {
          "id": "135",
          "day": "Thursday",
          "title": "refine portfolio and answer tough audit/board questions"
        },
        {
          "id": "136",
          "day": "Friday",
          "title": "project defense, monthly exam 9 and board memo"
        }
      ],
      "deliverable": "Project 6 final: board brief, budget, 12-month roadmap, leadership artifacts",
      "track": "Management capstone",
      "published": false
    },
    {
      "id": 35,
      "month": 9,
      "title": "Career launch and interview portfolio",
      "scope": "Job-role mapping; ethical resume; STAR stories; interview drills; applications",
      "classes": [
        {
          "id": "137",
          "day": "Tuesday",
          "title": "map qualifications to cybersecurity analyst, GRC, project roles"
        },
        {
          "id": "138",
          "day": "Wednesday",
          "title": "create technical and GRC/project resume versions from true experience"
        },
        {
          "id": "139",
          "day": "Thursday",
          "title": "run mock scenario interview; refine project case studies"
        },
        {
          "id": "140",
          "day": "Friday",
          "title": "prioritize job applications and document next-skill gaps"
        }
      ],
      "deliverable": "Two resumes, interview story bank and application tracker",
      "track": "Career / All certs",
      "published": false
    },
    {
      "id": 36,
      "month": 9,
      "title": "Final exam, six-project defense and next 90 days",
      "scope": "Integrated technical problem solving; program strategy; job-readiness evaluation",
      "classes": [
        {
          "id": "141",
          "day": "Tuesday",
          "title": "review all domain objectives and finish portfolio index"
        },
        {
          "id": "142",
          "day": "Wednesday",
          "title": "timed technical practical with logs, network and risk evidence"
        },
        {
          "id": "143",
          "day": "Thursday",
          "title": "executive management case and 90-day leadership plan"
        },
        {
          "id": "144",
          "day": "Friday",
          "title": "cumulative exam, portfolio defense and individual next-step plan"
        }
      ],
      "deliverable": "Final scorecard, six-project index, career/credential roadmap",
      "track": "Graduation decision",
      "published": false
    }
  ],
  "projects": [
    {
      "id": 1,
      "title": "Enterprise Network Security",
      "weeks": "8–9",
      "result": "Topology, asset inventory, VLAN and firewall model, validation tests, leadership summary"
    },
    {
      "id": 2,
      "title": "Simulated Security Operations Center",
      "weeks": "14–16",
      "result": "Synthetic event triage, detections, tickets, SOC metrics and handoff"
    },
    {
      "id": 3,
      "title": "Incident Response & Forensics",
      "weeks": "17–19",
      "result": "Case evidence, timeline, report, recovery plan and after-action review"
    },
    {
      "id": 4,
      "title": "Azure + AWS Security Architecture",
      "weeks": "21–23, 28",
      "result": "Secure cloud reference architecture, IAM, telemetry, cost controls and tests"
    },
    {
      "id": 5,
      "title": "AI-Assisted Security Operations",
      "weeks": "25–27, 29",
      "result": "Human-approved Python triage prototype using synthetic data and evaluation tests"
    },
    {
      "id": 6,
      "title": "Cybersecurity Department Build-Out",
      "weeks": "30–34",
      "result": "Charter, risk register, staffing, budget, roadmap and board presentation"
    }
  ]
};
