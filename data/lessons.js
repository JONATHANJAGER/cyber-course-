window.CYBER_LESSONS = {
  "weeks": {
    "1": {
      "intro": "Learn the language of computing, identify your actual hardware, and establish a safe practice environment before running security tools.",
      "outcomes": [
        "Explain bits, bytes, CPU, RAM, storage and virtualization.",
        "Document your host machine without sharing secrets.",
        "Distinguish NAT, host-only and bridged VM networking.",
        "Create a safe learning plan and complete a baseline check."
      ],
      "glossary": [
        [
          "CPU",
          "Executes instructions; performance depends on workload, cores and architecture."
        ],
        [
          "RAM",
          "Short-term working memory; disappears when powered off."
        ],
        [
          "SSD",
          "Persistent storage for the operating system, files and VM disks."
        ],
        [
          "Virtual machine",
          "Software-defined computer running its own guest operating system."
        ],
        [
          "Snapshot",
          "A restore point for a virtual machine, not a substitute for independent backups."
        ],
        [
          "NAT",
          "A virtual networking mode that usually allows outbound traffic through the host."
        ]
      ],
      "lessons": {
        "1": {
          "takeaway": "Know what the parts do before choosing a security lab.",
          "concepts": [
            {
              "heading": "Computer as a system",
              "body": "Input devices send information, the CPU processes instructions using RAM, and SSD/HDD storage keeps data after shutdown. The operating system coordinates applications and hardware. A 1 TB drive tells you storage capacity, not RAM; RAM determines how many virtual machines you can reasonably run at once."
            },
            {
              "heading": "Units without confusion",
              "body": "A bit is a 0 or 1. Eight bits form a byte. Network links are often measured in bits per second (Mb/s), while file sizes use bytes (MB or GB). The decimal unit 1 GB is 1,000,000,000 bytes; 1 GiB is 1,073,741,824 bytes."
            },
            {
              "heading": "Virtualization and ethics",
              "body": "A hypervisor allows a guest OS to run on your host. Some labs need Intel/AMD virtualization enabled and enough free RAM. Practice only in your own or explicitly authorized environments; never scan or probe a network just because it is reachable."
            }
          ],
          "steps": [
            "Draw a three-box diagram labeled CPU, RAM, and SSD, and explain their roles in one sentence each.",
            "Convert 40 megabits per second to approximately 5 megabytes per second by dividing by eight.",
            "Write down two reasons a VM might run slowly even when storage is large.",
            "Create a folder named Cyber-Upgrade with subfolders notes, labs, screenshots and submissions."
          ],
          "example": {
            "label": "Unit conversion",
            "code": "8 bits = 1 byte\n40 Mb/s ÷ 8 = 5 MB/s (before overhead)",
            "why": "Uppercase B means bytes; lowercase b means bits."
          },
          "reflection": "Explain why a laptop with 1 TB storage might still struggle to run several VMs."
        },
        "2": {
          "takeaway": "Measure the computer you own instead of guessing what it can run.",
          "concepts": [
            {
              "heading": "Host inventory",
              "body": "Record the OS version, CPU model, number of cores, installed RAM, free storage, and whether virtualization is supported. On Windows, Task Manager > Performance and System Information are useful. On macOS, use About This Mac and System Information."
            },
            {
              "heading": "Minimum safe lab practice",
              "body": "Keep the host OS updated, maintain backups, avoid downloading unknown VM images, and separate test accounts from personal accounts. A VM is convenient, but misconfigured networking can still expose services."
            },
            {
              "heading": "Evidence and documentation",
              "body": "Record the date, purpose, expected result, actual result and screenshot of every lab. That evidence becomes your portfolio and also makes troubleshooting repeatable."
            }
          ],
          "steps": [
            "Open your system-information screen and record CPU, RAM, OS and available storage (do not publish serial numbers).",
            "Check whether virtualization support is available for your CPU/OS.",
            "Make a two-column table: system capability versus what the first lab needs.",
            "Write a lab safety checklist: authorized scope, backups, network mode, snapshot, clean-up."
          ],
          "example": null,
          "reflection": "Based on your inventory, what is the biggest constraint on your first VM?"
        },
        "3": {
          "takeaway": "Understand isolated networking before installing any guest OS.",
          "concepts": [
            {
              "heading": "Virtual networks",
              "body": "NAT often lets a guest reach the internet through the host. Host-only commonly permits host-to-guest communication without direct internet access. Bridged may make a guest appear as another device on your real LAN; avoid it for initial experiments."
            },
            {
              "heading": "Snapshots and recovery",
              "body": "Take a snapshot before changing firewall, user, or network settings. A snapshot can roll back experiments, but separate backups protect against host disk failure."
            },
            {
              "heading": "Install choices",
              "body": "VirtualBox, VMware, UTM and Hyper-V each have platform restrictions. Do not install one yet unless your host and OS support it. Use a trusted vendor download and a verified Ubuntu image when you do."
            }
          ],
          "steps": [
            "Sketch a diagram showing a host and guest with NAT, then redraw it with host-only networking.",
            "Write what could go wrong if you bridge an intentionally vulnerable VM onto a home network.",
            "Draft a snapshot naming pattern such as W01-before-network-change.",
            "If your machine is compatible and a trusted hypervisor is installed, create a test VM; otherwise submit your deployment plan instead."
          ],
          "example": {
            "label": "Suggested lab naming",
            "code": "cyber-w01-ubuntu\nSnapshot: w01-clean-install\nNetwork: NAT or host-only",
            "why": "Consistent names simplify later evidence and rollback."
          },
          "reflection": "Which network mode is safest for a deliberately vulnerable practice target? Explain your choice."
        },
        "4": {
          "takeaway": "Check fundamentals and identify what to review.",
          "concepts": [
            {
              "heading": "Operational readiness",
              "body": "A safe practice environment has boundaries, written expectations, a recovery plan and a consistent evidence folder. Those habits matter as much as memorizing terminology."
            },
            {
              "heading": "The weekly review loop",
              "body": "Read explanations, perform a controlled test, document evidence, answer questions from memory and revisit missed concepts. Your first quiz is diagnostic: it establishes a baseline and does not judge your ability."
            },
            {
              "heading": "Portfolio thinking",
              "body": "A strong submission includes a concise objective, configuration or command, observed evidence, interpretation and a limitation. Do not include credentials, tokens, home IP addresses or personal identifiers."
            }
          ],
          "steps": [
            "Submit your computer inventory and lab safety agreement.",
            "Review the CPU/RAM/storage diagram and network mode diagrams.",
            "Take the 20-question Week 1 diagnostic quiz in the Assessment tab.",
            "List three topics you want to revisit and a small goal for Week 2."
          ],
          "example": null,
          "reflection": "What evidence proves you prepared a safe lab, even if you cannot install a VM yet?"
        }
      },
      "quiz": [
        {
          "prompt": "Which component typically stores data after the computer is powered off?",
          "choices": [
            "RAM",
            "SSD",
            "CPU register",
            "CPU cache"
          ],
          "answer": 1,
          "explanation": "An SSD is persistent storage; ordinary RAM is volatile."
        },
        {
          "prompt": "How many bits make one byte?",
          "choices": [
            "2",
            "4",
            "8",
            "16"
          ],
          "answer": 2,
          "explanation": "A byte is eight bits."
        },
        {
          "prompt": "Which resource is most likely a bottleneck when starting several VMs?",
          "choices": [
            "Wallpaper size",
            "Installed RAM",
            "Screen brightness",
            "Mouse polling"
          ],
          "answer": 1,
          "explanation": "Guests consume real RAM; drive capacity alone does not guarantee enough memory."
        },
        {
          "prompt": "What does a CPU primarily do?",
          "choices": [
            "Execute instructions",
            "Store backups offline",
            "Transmit Wi-Fi signals",
            "Assign IPv4 addresses"
          ],
          "answer": 0,
          "explanation": "The CPU executes program instructions."
        },
        {
          "prompt": "One terabyte on a laptop spec most commonly describes its ...",
          "choices": [
            "CPU frequency",
            "RAM speed",
            "Storage capacity",
            "Screen resolution"
          ],
          "answer": 2,
          "explanation": "TB is a unit of capacity, usually used for storage in laptop advertisements."
        },
        {
          "prompt": "Which virtual networking mode can connect a VM to a physical LAN as a peer?",
          "choices": [
            "Bridged",
            "Host-only",
            "Disconnected",
            "Snapshot"
          ],
          "answer": 0,
          "explanation": "Bridged modes can expose a guest directly on the same physical network."
        },
        {
          "prompt": "Which mode is normally suitable for initial outbound access without giving the VM a direct LAN identity?",
          "choices": [
            "Bridged",
            "NAT",
            "Raw disk",
            "Snapshot"
          ],
          "answer": 1,
          "explanation": "NAT commonly enables outward connections via the host."
        },
        {
          "prompt": "A VM snapshot should be viewed as ...",
          "choices": [
            "A complete off-device backup",
            "A restore point for a guest state",
            "A password manager",
            "A firewall"
          ],
          "answer": 1,
          "explanation": "Snapshots help rollback local VM state, but independent backups are still needed."
        },
        {
          "prompt": "Which is an example of authorized security practice?",
          "choices": [
            "Scanning random public addresses",
            "Testing your private lab VM",
            "Capturing coworkers’ traffic",
            "Brute-forcing an unknown router"
          ],
          "answer": 1,
          "explanation": "Practice needs permission and a controlled environment."
        },
        {
          "prompt": "Which plan makes a lab easier to troubleshoot?",
          "choices": [
            "Change many settings at once",
            "Avoid notes",
            "Use consistent VM names and document changes",
            "Discard screenshots"
          ],
          "answer": 2,
          "explanation": "Repeatable naming and documentation preserve evidence and context."
        },
        {
          "prompt": "Which is volatile in an ordinary PC?",
          "choices": [
            "SSD",
            "External hard disk",
            "RAM",
            "USB flash drive"
          ],
          "answer": 2,
          "explanation": "Standard RAM loses its contents without power."
        },
        {
          "prompt": "What does an operating system coordinate?",
          "choices": [
            "Only network cables",
            "Applications, memory, processes and hardware access",
            "Only monitors",
            "Only encryption keys"
          ],
          "answer": 1,
          "explanation": "The OS manages major computing resources."
        },
        {
          "prompt": "If a link is 80 Mb/s, the nominal maximum in MB/s is approximately ...",
          "choices": [
            "10",
            "80",
            "640",
            "1"
          ],
          "answer": 0,
          "explanation": "Divide bits per second by eight to convert to bytes per second, before overhead."
        },
        {
          "prompt": "Which statement about hypervisors is most accurate?",
          "choices": [
            "They enable guest operating systems",
            "They replace all physical CPUs",
            "They always require cloud services",
            "They eliminate all cybersecurity risk"
          ],
          "answer": 0,
          "explanation": "Hypervisors abstract resources to run virtual machines."
        },
        {
          "prompt": "What is the safest place to practice a risky configuration?",
          "choices": [
            "Employer production switch",
            "Family banking laptop",
            "Isolated disposable test VM",
            "Public hotspot router"
          ],
          "answer": 2,
          "explanation": "Use isolated, authorized test infrastructure."
        },
        {
          "prompt": "Which is the best lab evidence?",
          "choices": [
            "A claim that it worked",
            "Objective, steps, observed result and interpretation",
            "Just a grade",
            "A password screenshot"
          ],
          "answer": 1,
          "explanation": "Evidence should be reproducible and protect secrets."
        },
        {
          "prompt": "How should you respond if a VM image comes from an unknown website?",
          "choices": [
            "Run it immediately",
            "Trust the filename",
            "Verify a reputable official source before using it",
            "Disable host protection"
          ],
          "answer": 2,
          "explanation": "Use verified, reputable images to reduce malware risk."
        },
        {
          "prompt": "A backup differs from a snapshot because ...",
          "choices": [
            "A backup may exist independently of the host and hypervisor",
            "Snapshots cannot restore anything",
            "Backups only store passwords",
            "Backups require a bridged network"
          ],
          "answer": 0,
          "explanation": "Independent backups can survive more classes of host failure."
        },
        {
          "prompt": "Which is a network-security concern with bridged mode?",
          "choices": [
            "A guest may be visible to other LAN devices",
            "A guest cannot run an OS",
            "The CPU stops working",
            "Storage is deleted"
          ],
          "answer": 0,
          "explanation": "Bridging can extend your real LAN attack surface."
        },
        {
          "prompt": "What is the primary purpose of the Week 1 diagnostic?",
          "choices": [
            "Certify you as a professional",
            "Establish your current knowledge and guide review",
            "Replace future lessons",
            "Publish personal information"
          ],
          "answer": 1,
          "explanation": "The first assessment is a baseline for learning."
        }
      ]
    },
    "2": {
      "intro": "Follow the journey of a packet from one host to another, inspect your own traffic, and reason about subnetting and DNS.",
      "outcomes": [
        "Describe TCP/IP and OSI layers without treating them as identical.",
        "Explain the relationship between IPv4 addresses, subnets and default gateways.",
        "Run diagnostic commands in an authorized environment.",
        "Inspect a permitted sample capture and identify DNS and TCP exchanges."
      ],
      "glossary": [
        [
          "IP address",
          "Logical address used to deliver packets across networks."
        ],
        [
          "MAC address",
          "Link-layer identifier used for local network delivery."
        ],
        [
          "DNS",
          "Maps names such as example.com to network information."
        ],
        [
          "DHCP",
          "Automates assignment of network configuration."
        ],
        [
          "Subnet mask",
          "Identifies which portion of an IPv4 address is the network prefix."
        ],
        [
          "Default gateway",
          "Router a host uses to reach other networks."
        ]
      ],
      "lessons": {
        "5": {
          "takeaway": "Trace how an application uses layered networking.",
          "concepts": [
            {
              "heading": "OSI as a troubleshooting map",
              "body": "The OSI model has seven layers: physical, data link, network, transport, session, presentation and application. It helps identify where a failure might occur. TCP/IP is a practical protocol suite often grouped into link, internet, transport and application layers."
            },
            {
              "heading": "Addresses have different jobs",
              "body": "A MAC address helps local delivery, an IP address identifies a network interface for internetwork routing, and a port identifies the receiving application process. DNS answers name lookups; DHCP can supply IP, mask, gateway and DNS settings."
            },
            {
              "heading": "Subnet example",
              "body": "An address of 192.168.10.25/24 has a 24-bit network prefix. The subnet contains addresses 192.168.10.0 through 192.168.10.255; .0 is the conventional network address and .255 the broadcast address for this /24."
            }
          ],
          "steps": [
            "Write the seven OSI layers in order.",
            "Draw laptop → switch → router → internet; label MAC versus IP roles.",
            "For 192.168.10.25/24 identify the network, broadcast, and a plausible gateway.",
            "Explain why a device with no DNS could still contact a known IP address in some situations."
          ],
          "example": {
            "label": "IPv4 /24 worked example",
            "code": "Host:       192.168.10.25/24\nNetwork:    192.168.10.0\nBroadcast:  192.168.10.255\nUsable:     192.168.10.1–254",
            "why": "24 prefix bits leave 8 host bits (256 addresses), with 254 conventional usable host addresses."
          },
          "reflection": "What changes between a local Ethernet delivery and routing to a different network?"
        },
        "6": {
          "takeaway": "Use basic tools to form and test network hypotheses.",
          "concepts": [
            {
              "heading": "Test from local outward",
              "body": "Start by checking your interface and address. Ping a permitted gateway or known test endpoint; then test DNS separately. A failed ping does not prove a host is down because ICMP might be filtered."
            },
            {
              "heading": "Windows commands",
              "body": "ipconfig shows address and gateway. tracert shows intermediate hops where permitted. nslookup inspects DNS answers. Linux/macOS equivalents often include ip addr or ifconfig, traceroute and dig."
            },
            {
              "heading": "Record observations, not guesses",
              "body": "Distinguish reachability, DNS resolution and application availability. A browser can fail while ICMP succeeds; an IP can respond even when DNS fails."
            }
          ],
          "steps": [
            "On your own machine, inspect addresses using ipconfig (Windows) or ip addr / ifconfig (Linux or macOS).",
            "Identify the default gateway and DNS server without posting private addresses publicly.",
            "Run nslookup example.com; record the returned type and answer.",
            "If allowed, ping your own gateway; describe what the result does and does not prove."
          ],
          "example": {
            "label": "Windows / Linux examples",
            "code": "Windows: ipconfig /all\nWindows: nslookup example.com\nLinux: ip addr\nLinux: dig example.com",
            "why": "Observe only systems and networks you administer or have permission to test."
          },
          "reflection": "Can a DNS lookup work while a website is inaccessible? Why?"
        },
        "7": {
          "takeaway": "Read a capture from a network you control.",
          "concepts": [
            {
              "heading": "What packet analysis shows",
              "body": "Wireshark decodes packet fields for protocols such as DNS, TCP and HTTP. The presence of a protocol in a capture does not establish an attack; interpretation requires context."
            },
            {
              "heading": "Three-way handshake",
              "body": "A normal TCP connection often begins with SYN, SYN-ACK and ACK. This establishes sequence-number state before application data. Encrypted TLS payloads remain protected even when packet metadata is visible."
            },
            {
              "heading": "Capture boundaries",
              "body": "Capture only traffic you are authorized to inspect. Prefer a sample pcap or your own VM loopback connection. Avoid recording passwords, personal communications or traffic from other users."
            }
          ],
          "steps": [
            "Install Wireshark only from its official source if your system supports it, or use a pre-approved sample pcap.",
            "Filter for dns and identify a query and response; record the name and response type.",
            "Filter for tcp.flags.syn == 1 and look for handshake initiation.",
            "Annotate three packet numbers and explain the purpose of each."
          ],
          "example": {
            "label": "Wireshark display filters",
            "code": "dns\ntcp\ntcp.flags.syn == 1",
            "why": "Display filters select what is shown; they do not change captured network traffic."
          },
          "reflection": "What cannot be concluded merely from seeing a TCP SYN packet?"
        },
        "8": {
          "takeaway": "Practice subnet reasoning and distinguish failure causes.",
          "concepts": [
            {
              "heading": "Prefix arithmetic",
              "body": "An IPv4 /26 leaves 6 host bits: 2^6 = 64 total addresses per block, conventionally 62 usable in a normal LAN. Starting at 192.168.20.0, /26 ranges begin at .0, .64, .128 and .192."
            },
            {
              "heading": "Systematic troubleshooting",
              "body": "Check physical/link status, local address, gateway reachability, name resolution and service access in that order. Record what you observed at every step before changing settings."
            },
            {
              "heading": "Communication",
              "body": "A good network ticket says what failed, its scope, which checks were performed, test results and the recommended next action."
            }
          ],
          "steps": [
            "Calculate the network address for 192.168.20.70/26 (hint: blocks of 64).",
            "Create an example showing DNS broken while local IP connectivity works.",
            "Explain how to tell gateway failure from DNS failure.",
            "Take the Week 2 quiz and upload or save your annotated network map."
          ],
          "example": {
            "label": "/26 blocks",
            "code": "192.168.20.0/26     .0–.63\n192.168.20.64/26    .64–.127\n192.168.20.128/26   .128–.191\n192.168.20.192/26   .192–.255",
            "why": "The address .70 lies in the subnet beginning .64."
          },
          "reflection": "Summarize your troubleshooting process without claiming a root cause you have not verified."
        }
      },
      "quiz": [
        {
          "prompt": "Which service commonly converts names into IP addresses?",
          "choices": [
            "DHCP",
            "DNS",
            "NTP",
            "SMB"
          ],
          "answer": 1,
          "explanation": "DNS resolves names; DHCP supplies configuration."
        },
        {
          "prompt": "Which address type is used to route packets between networks?",
          "choices": [
            "IP address",
            "MAC address alone",
            "USB serial",
            "Disk ID"
          ],
          "answer": 0,
          "explanation": "IP addresses support internetwork routing."
        },
        {
          "prompt": "What does a /24 IPv4 prefix mean?",
          "choices": [
            "24 total addresses",
            "24 network-prefix bits",
            "24 ports",
            "24 routers"
          ],
          "answer": 1,
          "explanation": "A /24 has 24 network bits and 8 host bits."
        },
        {
          "prompt": "How many total IPv4 addresses are in a /26?",
          "choices": [
            "16",
            "32",
            "64",
            "128"
          ],
          "answer": 2,
          "explanation": "32 − 26 = 6 host bits; 2^6 = 64 addresses."
        },
        {
          "prompt": "Which command commonly queries DNS from Windows?",
          "choices": [
            "nslookup",
            "mkdir",
            "taskkill",
            "format"
          ],
          "answer": 0,
          "explanation": "nslookup asks DNS servers for records."
        },
        {
          "prompt": "A failed ping always proves a server is down.",
          "choices": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "ICMP may be blocked, even when other services are reachable."
        },
        {
          "prompt": "What is the purpose of a default gateway?",
          "choices": [
            "Store files",
            "Route traffic toward other networks",
            "Print documents",
            "Allocate RAM"
          ],
          "answer": 1,
          "explanation": "Hosts send off-subnet packets to a configured gateway."
        },
        {
          "prompt": "Which step starts a common TCP three-way handshake?",
          "choices": [
            "FIN",
            "ACK",
            "SYN",
            "RST"
          ],
          "answer": 2,
          "explanation": "The initiating host sends SYN."
        },
        {
          "prompt": "For 192.168.20.70/26, the network address is ...",
          "choices": [
            "192.168.20.0",
            "192.168.20.64",
            "192.168.20.70",
            "192.168.20.128"
          ],
          "answer": 1,
          "explanation": "/26 blocks begin at .0, .64, .128, .192."
        },
        {
          "prompt": "What should an analyst capture during troubleshooting?",
          "choices": [
            "Only a guess",
            "Commands, observed results and scope",
            "Passwords",
            "Everything on a shared network"
          ],
          "answer": 1,
          "explanation": "Document what was tested and what the evidence supports."
        }
      ]
    },
    "3": {
      "intro": "Move beyond individual packets and plan secure segmented connectivity for a simulated distribution center.",
      "outcomes": [
        "Distinguish routers, switches, VLANs and ACL/firewall rules.",
        "Choose TCP or UDP based on application behavior.",
        "Create and verify an allow/deny matrix.",
        "Document change control and failure recovery."
      ],
      "glossary": [
        [
          "VLAN",
          "Logical Layer 2 broadcast-domain separation on compatible switches."
        ],
        [
          "Routing",
          "Forwarding packets between IP networks."
        ],
        [
          "Firewall",
          "Enforces traffic rules based on defined policy and context."
        ],
        [
          "TCP",
          "Connection-oriented transport providing ordered reliable byte streams."
        ],
        [
          "UDP",
          "Datagram transport with minimal protocol overhead and no built-in delivery guarantees."
        ],
        [
          "VPN",
          "Protected tunnel over an untrusted network; does not replace endpoint security."
        ]
      ],
      "lessons": {
        "9": {
          "takeaway": "Design network paths and enforce boundaries intentionally.",
          "concepts": [
            {
              "heading": "Switch vs router",
              "body": "A switch forwards Ethernet frames within a broadcast domain using MAC information. A router forwards IP packets across subnets. A VLAN separates Layer 2 broadcast domains, and inter-VLAN traffic needs routing and security rules."
            },
            {
              "heading": "Ports and transport",
              "body": "HTTPS commonly uses TCP 443, DNS usually UDP 53 but may use TCP 53, and SSH commonly TCP 22. Ports are conventions rather than proof of application or safety; protocols can run on alternate ports."
            },
            {
              "heading": "Warehouse example",
              "body": "Separate scanners, office PCs, guest Wi-Fi and industrial/OT devices into distinct zones. Define business-required connections first; deny unnecessary crossings. Avoid testing production OT or PLC equipment."
            }
          ],
          "steps": [
            "Create a table of four fictional zones: Office, Warehouse scanners, Guest, and OT monitoring.",
            "For each zone, write two legitimate network needs.",
            "Draft a default-deny matrix that permits only defined cross-zone flows.",
            "Identify which paths cross a router or firewall."
          ],
          "example": {
            "label": "Example network zones",
            "code": "Office:    10.10.10.0/24\nScanners:  10.10.20.0/24\nGuest:     10.10.30.0/24\nOT-Lab:    10.10.40.0/24",
            "why": "These are private RFC 1918 example subnets for a fictional learning environment."
          },
          "reflection": "Why should guest Wi-Fi not have unrestricted access to an operations network?"
        },
        "10": {
          "takeaway": "Simulate rule decisions before touching equipment.",
          "concepts": [
            {
              "heading": "Allow/deny rule basics",
              "body": "Define source, destination, protocol, destination port and action. Evaluate order and precedence: many systems process rules top-down, but semantics vary. Confirm default action explicitly."
            },
            {
              "heading": "Lab simulation",
              "body": "You can create a paper/CSV simulation even without two VMs. If you have an isolated virtual router, use private addresses and test only your own VMs."
            },
            {
              "heading": "Change control",
              "body": "Document rationale, approval, expected effect, validation, rollback steps and a time window. A technically correct firewall change can still interrupt warehouse operations if poorly scheduled."
            }
          ],
          "steps": [
            "Write five specific firewall rules for the fictional four-zone network.",
            "Create a test case for each rule: source, destination, port, expected allow/deny.",
            "Model one incorrect overly broad rule and show the resulting exposure.",
            "Write a one-paragraph change ticket with a rollback plan."
          ],
          "example": {
            "label": "Illustrative rule decision",
            "code": "ALLOW office -> app-server TCP 443\nALLOW scanners -> api-server TCP 443\nDENY guest -> internal networks ANY\nDENY any -> OT-Lab ANY (unless explicitly approved)",
            "why": "An actual platform needs specific syntax and careful ordering; this is policy pseudocode."
          },
          "reflection": "How would you discover an accidentally blocked legitimate business connection?"
        },
        "11": {
          "takeaway": "Verify intended and unintended connectivity with evidence.",
          "concepts": [
            {
              "heading": "Positive and negative tests",
              "body": "Test a permitted connection succeeds and a prohibited connection fails. Both are needed: only testing the allow rule could miss an unintended bypass."
            },
            {
              "heading": "Service-aware testing",
              "body": "Ping tests ICMP, not TCP/443. A refused TCP port, timeout and successful TLS handshake tell different stories; document exactly which method was used."
            },
            {
              "heading": "Warehouse safety",
              "body": "Do not change live warehouse VLANs, WMS systems, scanners, industrial controls, or security devices without formal authorization. Keep this lab fictional or isolated."
            }
          ],
          "steps": [
            "Choose two allowed and two blocked flows from your rule matrix.",
            "For each flow write the expected result and a safe validation method.",
            "If lab VMs are available, test with browser/curl/nc only against your own local services.",
            "Compare observed outcomes with policy and write a corrective action if they differ."
          ],
          "example": {
            "label": "Authorized local connectivity check",
            "code": "# Test only your own lab service\ncurl -I http://127.0.0.1:8000\n# Or check your local server log",
            "why": "Loopback tests are a simple way to avoid accidentally probing other computers."
          },
          "reflection": "Why does a successful ping not guarantee that HTTPS is working?"
        },
        "12": {
          "takeaway": "Use a repeatable troubleshooting playbook and communicate changes.",
          "concepts": [
            {
              "heading": "Troubleshooting order",
              "body": "Record symptom, affected asset, last known good state, scope, path, IP settings, DNS, route, firewall and service. Change only one variable per test to preserve cause-and-effect."
            },
            {
              "heading": "Common failure patterns",
              "body": "Incorrect subnet mask can send packets to the wrong next hop. A missing route prevents inter-subnet delivery. A deny rule blocks a legitimate application even when the network is otherwise healthy."
            },
            {
              "heading": "Change closure",
              "body": "Attach your diagrams, access matrix, test evidence and rollback note. Explain the technical outcome in plain language to an operations leader."
            }
          ],
          "steps": [
            "Pick a failure: scanners cannot reach a fictional API after a firewall change.",
            "List five ordered tests and the conclusion each supports.",
            "Write a rollback decision threshold, such as a critical workflow remaining unavailable.",
            "Take the Week 3 quiz and submit your segmented network drawing."
          ],
          "example": null,
          "reflection": "Write a three-sentence, nontechnical summary of a blocked application flow."
        }
      },
      "quiz": [
        {
          "prompt": "What device routes packets between IP subnets?",
          "choices": [
            "Router",
            "Passive patch cable",
            "Monitor",
            "USB hub"
          ],
          "answer": 0,
          "explanation": "A router forwards between different IP networks."
        },
        {
          "prompt": "What does a VLAN primarily separate?",
          "choices": [
            "Layer 2 broadcast domains",
            "CPU cores",
            "Keyboard layouts",
            "Disk partitions"
          ],
          "answer": 0,
          "explanation": "VLANs provide logical Layer 2 separation."
        },
        {
          "prompt": "Which protocol is normally connection-oriented?",
          "choices": [
            "UDP",
            "TCP",
            "ICMP",
            "ARP"
          ],
          "answer": 1,
          "explanation": "TCP establishes state and provides ordered reliable byte streams."
        },
        {
          "prompt": "HTTPS most commonly uses which port and transport?",
          "choices": [
            "TCP 443",
            "UDP 22",
            "TCP 25",
            "UDP 161"
          ],
          "answer": 0,
          "explanation": "HTTPS commonly runs over TCP 443; HTTP/3 uses QUIC over UDP 443."
        },
        {
          "prompt": "Which firewall approach is usually safer?",
          "choices": [
            "Allow everything by default",
            "Permit only required flows",
            "Disable logging",
            "Use one shared admin account"
          ],
          "answer": 1,
          "explanation": "Least-privilege network policy permits justified connections."
        },
        {
          "prompt": "Why test an intentionally blocked path?",
          "choices": [
            "To find unintended access",
            "To increase RAM",
            "To stop DNS everywhere",
            "To back up servers"
          ],
          "answer": 0,
          "explanation": "Negative tests check that prohibited access truly fails."
        },
        {
          "prompt": "Why can a ping succeed while a website fails?",
          "choices": [
            "ICMP and application protocols are different",
            "Ping proves HTTPS always works",
            "IP does not use routers",
            "TCP requires DNS always"
          ],
          "answer": 0,
          "explanation": "Ping only tests one protocol; TCP/HTTPS may still fail."
        },
        {
          "prompt": "What belongs in a firewall change ticket?",
          "choices": [
            "Expected tests and rollback",
            "Only a nickname",
            "User passwords",
            "Unverified assumptions"
          ],
          "answer": 0,
          "explanation": "Change planning needs justification, testing and rollback."
        },
        {
          "prompt": "Should live industrial-control networks be used for beginner VLAN practice?",
          "choices": [
            "Yes, without permission",
            "No, use an isolated simulation",
            "Yes, if it is after hours",
            "Only on Fridays"
          ],
          "answer": 1,
          "explanation": "Production OT systems require formal safeguards and authorization."
        },
        {
          "prompt": "What is a strong management summary?",
          "choices": [
            "Observed impact, action, result and remaining risk",
            "Every raw packet line",
            "A guess with no evidence",
            "Unredacted passwords"
          ],
          "answer": 0,
          "explanation": "Leaders need a concise and evidence-grounded business explanation."
        }
      ]
    },
    "4": {
      "intro": "Learn how Windows manages identities, access, updates and event records, then demonstrate foundational administration.",
      "outcomes": [
        "Explain users, groups, least privilege and NTFS permissions.",
        "Inspect local Windows accounts and Event Viewer in a lab.",
        "Use read-only PowerShell to gather evidence.",
        "Complete the first practical checkpoint and remediation plan."
      ],
      "glossary": [
        [
          "Least privilege",
          "Give identities only access needed for approved tasks."
        ],
        [
          "NTFS ACL",
          "Access-control list specifying permissions on Windows files and folders."
        ],
        [
          "Event Viewer",
          "Windows interface for system, application and security event logs."
        ],
        [
          "UAC",
          "User Account Control asks for elevation when administrative access is needed."
        ],
        [
          "Patch",
          "A software update that can correct vulnerabilities, bugs or functionality."
        ],
        [
          "Baseline",
          "Documented approved settings against which systems are reviewed."
        ]
      ],
      "lessons": {
        "13": {
          "takeaway": "Understand identity, permissions and service boundaries.",
          "concepts": [
            {
              "heading": "Users and groups",
              "body": "A user identifies an individual or service; groups simplify assigning permissions. A standard user should not be a local administrator by default. Service accounts need narrowly defined privileges and controlled credentials."
            },
            {
              "heading": "NTFS permissions",
              "body": "Read grants access to content; Modify can write and delete; Full control includes permission management. Effective access can combine inherited and explicit rules; deny entries require careful analysis."
            },
            {
              "heading": "Baseline security",
              "body": "Keep supported systems patched, enable endpoint protections, restrict admin accounts, back up critical data and log meaningful security events. A baseline must suit the device role and risk."
            }
          ],
          "steps": [
            "Draw a role matrix for Lab Student, Lab Administrator and Auditor.",
            "Create a sample folder permissions plan for reports vs configuration backups.",
            "Explain why adding every user to Administrators is unsafe.",
            "Write five Windows baseline checks and describe evidence for each."
          ],
          "example": null,
          "reflection": "What is the difference between proving a user can read a file and proving a user cannot modify it?"
        },
        "14": {
          "takeaway": "Practice least-privilege access only in your own Windows VM.",
          "concepts": [
            {
              "heading": "Local security controls",
              "body": "Windows can use Local Users and Groups on supported editions; availability varies by edition. Permissions are set in a file or folder Security tab. The Security event log records many account and audit events when policies enable them."
            },
            {
              "heading": "Avoid breaking the host",
              "body": "Use a lab VM, a throwaway folder and non-sensitive sample files. Never delete your only administrator or alter real work files to practice permission changes."
            },
            {
              "heading": "Record both outcomes",
              "body": "Verify standard-user access is appropriately limited and an authorized administrator can complete maintenance. Record account, object, operation and result without recording passwords."
            }
          ],
          "steps": [
            "In a lab VM, create a sample folder named CyberLab and a harmless text file.",
            "If permitted, create a standard test user or reuse a nonprivileged lab account.",
            "Grant Read to that user, test reading, and test that editing is denied.",
            "Open Event Viewer and identify System, Application and Security log categories."
          ],
          "example": {
            "label": "Suggested evidence table",
            "code": "Test user | CyberLab\\report.txt | Read | Expected: allow\nTest user | CyberLab\\report.txt | Modify | Expected: deny\nAdmin     | CyberLab\\report.txt | Modify | Expected: allow",
            "why": "Use a disposable folder and preserve screenshots of the permissions and test result."
          },
          "reflection": "Why is a denied test as important as a successful test?"
        },
        "15": {
          "takeaway": "Use defensive PowerShell and logging to inspect a baseline.",
          "concepts": [
            {
              "heading": "PowerShell objects",
              "body": "PowerShell pipes rich objects between commands instead of plain text. Read-only commands such as Get-ComputerInfo, Get-Service and Get-WinEvent can inspect a system; some event logs require elevated permissions."
            },
            {
              "heading": "Evidence integrity",
              "body": "Export a small permitted log sample for analysis, note the timezone and record the command. Do not expose employee data, live access tokens or proprietary logs."
            },
            {
              "heading": "Patching method",
              "body": "Determine system update status, assess impact, verify backup or rollback, apply approved changes in a window and record validation results."
            }
          ],
          "steps": [
            "On a lab machine, run Get-ComputerInfo and record just OS name and version.",
            "List services with Get-Service and explain Running versus Stopped.",
            "Inspect the first few System events with Get-WinEvent if permitted.",
            "Create a change note for a fictional Windows update and its rollback."
          ],
          "example": {
            "label": "Read-only PowerShell examples",
            "code": "Get-ComputerInfo | Select-Object OsName, OsVersion\nGet-Service | Select-Object -First 10\nGet-WinEvent -LogName System -MaxEvents 5",
            "why": "These commands inspect metadata; run in your own authorized environment."
          },
          "reflection": "Why must you record the timezone when correlating logs?"
        },
        "16": {
          "takeaway": "Demonstrate a practical before moving to Linux.",
          "concepts": [
            {
              "heading": "Integrated test",
              "body": "A defensible practical shows a user cannot exceed assigned file permissions, that basic network tests isolate an issue, and that the operator recorded results accurately."
            },
            {
              "heading": "Remediation loop",
              "body": "A low score identifies learning gaps, not a failed career. Review which questions you missed, revisit the underlying concept, rerun the test and record the improved outcome."
            },
            {
              "heading": "Portfolio hygiene",
              "body": "Use fictional organizations, sanitized screenshots and sample IPs. A future interviewer should be able to reproduce your process without needing your passwords or employer network."
            }
          ],
          "steps": [
            "Complete an NTFS read/modify permission test in a lab, or document exact simulated decisions if no Windows VM is available.",
            "Troubleshoot a scenario: website fails by name but its permitted IP responds; explain likely next checks.",
            "Submit your Windows baseline worksheet and screenshots of your lab only.",
            "Take the Week 4 checkpoint quiz and list two subjects to review."
          ],
          "example": null,
          "reflection": "What evidence makes your Windows administration practical reproducible?"
        }
      },
      "quiz": [
        {
          "prompt": "What principle limits privileges to necessary tasks?",
          "choices": [
            "Least privilege",
            "Open access",
            "Single sign-on",
            "Availability alone"
          ],
          "answer": 0,
          "explanation": "Least privilege reduces the blast radius of mistakes and compromise."
        },
        {
          "prompt": "Which NTFS right generally allows editing a file?",
          "choices": [
            "Read",
            "Modify",
            "List folder only",
            "Read & execute"
          ],
          "answer": 1,
          "explanation": "Modify typically includes writing and deleting."
        },
        {
          "prompt": "Which Windows tool inspects system and security events?",
          "choices": [
            "Event Viewer",
            "Paint",
            "Calculator",
            "Disk Cleanup"
          ],
          "answer": 0,
          "explanation": "Event Viewer exposes multiple Windows event log channels."
        },
        {
          "prompt": "Which is a read-only PowerShell cmdlet for services?",
          "choices": [
            "Get-Service",
            "Remove-Item",
            "Stop-Computer",
            "Set-LocalUser"
          ],
          "answer": 0,
          "explanation": "Get-Service retrieves service information."
        },
        {
          "prompt": "How should a new test user normally be configured?",
          "choices": [
            "Administrator by default",
            "Standard/non-privileged",
            "Shared admin credentials",
            "No password controls"
          ],
          "answer": 1,
          "explanation": "Use the least privilege required for a task."
        },
        {
          "prompt": "What does a baseline represent?",
          "choices": [
            "Documented expected security settings",
            "A secret password",
            "An internet address",
            "An attacker tool"
          ],
          "answer": 0,
          "explanation": "A baseline defines approved configuration and checks."
        },
        {
          "prompt": "Which is appropriate before an approved patch change?",
          "choices": [
            "Verify backup/rollback and change window",
            "Delete all logs",
            "Turn off backups",
            "Skip testing"
          ],
          "answer": 0,
          "explanation": "Plan and validate changes to avoid unintended outages."
        },
        {
          "prompt": "Why note log timezone?",
          "choices": [
            "To correctly correlate timestamps",
            "To change user permissions",
            "To calculate RAM",
            "To reset DHCP"
          ],
          "answer": 0,
          "explanation": "Events from different sources must be time-normalized."
        },
        {
          "prompt": "Which is good evidence for file access control?",
          "choices": [
            "A permission screenshot plus actual allow/deny test",
            "An unsupported claim",
            "A posted password",
            "A random web search"
          ],
          "answer": 0,
          "explanation": "Policy configuration and effective behavior both matter."
        },
        {
          "prompt": "What should a practical report omit?",
          "choices": [
            "Real credentials or access tokens",
            "An objective",
            "Test results",
            "A rollback note"
          ],
          "answer": 0,
          "explanation": "Evidence should be useful without exposing secrets."
        }
      ]
    }
  }
};
