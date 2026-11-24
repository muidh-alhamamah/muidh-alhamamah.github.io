/* ============================================================
   كل محتوى الموقع هنا — عدّل هذا الملف فقط لإضافة مشاريع/شهادات/خبرات.
   All site content lives here. Edit ONLY this file.
   كل نص له نسختان: { en: "...", ar: "..." }
   ============================================================ */

const SITE = {
  url: "https://muidh-alhamamah.github.io/",
  email: "fahi.058153@gmail.com",
  photo: "", // الصورة الشخصية (اتركها "" لإظهار الحرف الأول)
  phone: "+966 581 534 742", // اتركه "" لإخفائه
  links: {
    linkedin: "https://www.linkedin.com/in/muidh-alhamamah",
    github: "https://github.com/muidh-alhamamah",
  },
  // ضع ملفاتك بنفس الأسماء داخل assets/cv/
  cv: {
    en: "assets/cv/Muidh-Salem-CV-EN.pdf",
    ar: "assets/cv/Muidh-Salem-CV-AR.pdf",
  },
};

const PROFILE = {
  name: { en: "Muidh Salem Al Hamamah", ar: "معيض سالم ال حمامه" },
  short: { en: "Muidh Al Hamamah", ar: "معيض ال حمامه" },
  role: { en: "Network Engineer", ar: "مهندس شبكات" },
  roles: {
    en: ["Network Engineering", "IT Infrastructure Management", "Network Security", "Technical Support"],
    ar: ["هندسة الشبكات", "إدارة البنية التحتية", "أمن الشبكات", "الدعم الفني"],
  },
  title: {
    en: "Network Engineering · Digital Infrastructure · Network Security · Technical Support",
    ar: "هندسة الشبكات · البنية التحتية الرقمية · أمن الشبكات · الدعم الفني",
  },
  location: { en: "Saudi Arabia", ar: "المملكة العربية السعودية" },
  status: { en: "Open to work", ar: "متاح للعمل" },
  summary: {
    en: "Network, infrastructure and cybersecurity engineer with hands-on experience managing local networks, analyzing system performance and resolving technical issues. CCNA-certified and licensed by the Saudi Council of Engineers.",
    ar: "مهندس شبكات وبنية تحتية وأمن سيبراني يمتلك خبرة عملية في إدارة الشبكات المحلية وتحليل أداء الأنظمة ومعالجة الأعطال التقنية. حاصل على شهادة CCNA ورخصة الهيئة السعودية للمهندسين.",
  },
  about: {
    en: [
      "I contribute to designing and configuring network devices and improving connectivity stability through effective security solutions. I enhance infrastructure efficiency by analyzing data traffic, identifying bottlenecks and optimizing overall network performance.",
      "I rely on industry-standard tools such as PRTG for continuous monitoring and Wireshark for packet and traffic analysis, closely tracking bandwidth, latency, packet loss, resource utilization and interface status to detect issues early and resolve them before they impact operations. I combine network infrastructure expertise with information-security practices to deliver stable, secure and scalable technical environments.",
    ],
    ar: [
      "أساهم في تصميم وتهيئة أجهزة الشبكات وتحسين استقرار الاتصال عبر تطبيق حلول فعّالة في أمن المعلومات، وأعزز كفاءة البنية التحتية من خلال تحليل حركة البيانات واكتشاف الاختناقات وتحسين الأداء العام للشبكات.",
      "أعتمد في عملي على أدوات احترافية مثل PRTG للمراقبة المستمرة وWireshark لتحليل الحزم وحركة البيانات، مع متابعة دقيقة لمؤشرات الأداء من عرض النطاق وزمن الاستجابة وفقدان الحزم إلى استهلاك الموارد وحالة الواجهات، بما يضمن اكتشاف المشكلات مبكرًا ومعالجتها قبل أن تؤثر على سير العمل. وأجمع بين الخبرة في البنية التحتية للشبكات وتطبيق ممارسات أمن المعلومات لتقديم بيئات تقنية مستقرة وآمنة وقابلة للتوسع.",
    ],
  },
  focus: [
    { icon: "net", t: { en: "Network Engineering", ar: "هندسة الشبكات" }, d: { en: "Routing, switching & LAN", ar: "التوجيه والتحويل والشبكات المحلية" } },
    { icon: "server", t: { en: "Infrastructure", ar: "البنية التحتية" }, d: { en: "Stable, efficient systems", ar: "أنظمة مستقرة وعالية الكفاءة" } },
    { icon: "shield", t: { en: "Cybersecurity", ar: "الأمن السيبراني" }, d: { en: "Protecting the network", ar: "حماية الشبكات والبنية" } },
    { icon: "support", t: { en: "IT Support", ar: "الدعم الفني" }, d: { en: "Troubleshooting & users", ar: "معالجة الأعطال ودعم المستخدمين" } },
  ],
};

const SKILLS = [
  {
    icon: "net",
    group: { en: "Network Infrastructure", ar: "إدارة البنية التحتية للشبكات" },
    items: [
      { en: "LAN Management", ar: "إدارة الشبكات المحلية" },
      { en: "Router & Switch Configuration", ar: "تهيئة الموجهات والمحولات" },
      { en: "Network Performance Monitoring", ar: "مراقبة أداء الشبكات" },
      { en: "Connectivity Stability Optimization", ar: "تحسين استقرار الاتصال" },
    ],
  },
  {
    icon: "shield",
    group: { en: "Network Security", ar: "أمن الشبكات والحماية" },
    items: [
      { en: "Network Security Implementation", ar: "تطبيق أمن الشبكات" },
      { en: "Firewall Management", ar: "إدارة جدران الحماية" },
      { en: "Threat Analysis", ar: "تحليل التهديدات" },
      { en: "Infrastructure Protection", ar: "حماية البنية التحتية" },
    ],
  },
  {
    icon: "chart",
    group: { en: "Analysis & Optimization", ar: "التحليل والتحسين التقني" },
    items: [
      { en: "Network Traffic Analysis", ar: "تحليل حركة البيانات" },
      { en: "Performance Optimization", ar: "تحسين الأداء" },
      { en: "Problem Solving", ar: "حل المشكلات" },
      { en: "Technical Reporting", ar: "إعداد التقارير التقنية" },
    ],
  },
  {
    icon: "support",
    group: { en: "Technical Support & Systems", ar: "الدعم الفني والأنظمة" },
    items: [
      { en: "Computer Maintenance", ar: "صيانة الحواسيب" },
      { en: "OS Administration", ar: "إدارة أنظمة التشغيل" },
      { en: "Technical Troubleshooting", ar: "تشخيص الأعطال التقنية" },
      { en: "User Support Services", ar: "خدمات دعم المستخدمين" },
    ],
  },
];

// الأدوات (تظهر كشريط أسفل المهارات)
const TOOLS = ["Cisco", "Wireshark", "PRTG", "Routers", "Switches", "Firewalls", "LAN / VLAN", "TCP/IP"];

const LANGS = [
  { t: { en: "Arabic", ar: "العربية" }, l: { en: "Native", ar: "اللغة الأم" } },
  { t: { en: "English", ar: "الإنجليزية" }, l: { en: "Professional working proficiency", ar: "كفاءة مهنية في العمل" } },
];

// أضف مشروعًا بنسخ كتلة { ... }. link/repo اختياريان.
const PROJECTS = [
  {
    kind: { en: "Personal Project · Full-Stack Platform", ar: "مشروع شخصي · منصة متكاملة" },
    title: { en: "ZYRTHEN — Multi-Tenant Network Monitoring & Incident Platform", ar: "ZYRTHEN — منصة متعددة المؤسسات لمراقبة الشبكات وإدارة الحوادث" },
    points: {
      en: [
        "Replaces spreadsheet inventories and manual ping checks: each organization gets an access-controlled inventory of its branches and network devices, continuous ICMP reachability monitoring and an incident workflow. Built as a modular monolith with FastAPI, React and PostgreSQL.",
        "A separate monitoring worker pings devices concurrently (no shell) and stores latency, packet loss and history. An incident opens only after 3 consecutive failed checks and resolves itself after 2 successful ones, so a single lost packet never raises an alarm; engineers acknowledge incidents and close them with a resolution note.",
        "Dashboard with uptime, average latency and loss per device and mean time to resolve (MTTR) over 24 hours or 7 days, with CSV export, plus an append-only audit log of every security-relevant action with the real client IP.",
        "Tenant isolation enforced inside PostgreSQL with Row-Level Security (enabled and forced on every tenant table) and least-privilege database roles; hashed opaque sessions, CSRF protection, role-based permissions on every API route, login lockout and rate limiting.",
        "One-command Docker Compose demo (Nginx, API, worker, PostgreSQL), 250+ automated tests against a real PostgreSQL database and GitHub Actions CI. Demo devices use reserved documentation IP addresses (RFC 5737), not real equipment.",
      ],
      ar: [
        "تحل محل جداول الجرد اليدوية وفحوص ping اليدوية: لكل مؤسسة مخزون محمي بالصلاحيات لفروعها وأجهزة الشبكة، ومراقبة مستمرة للوصول عبر ICMP، وسير عمل لإدارة الحوادث. مبنية بمعمارية Modular Monolith باستخدام FastAPI وReact وPostgreSQL.",
        "عامل مراقبة مستقل يفحص الأجهزة بالتوازي (دون Shell) ويحفظ زمن الاستجابة وفقدان الحزم والسجل التاريخي. لا يُفتح الحادث إلا بعد 3 فحوص فاشلة متتالية، ويُغلق تلقائيًا بعد فحصين ناجحين، فلا يطلق فقدان حزمة واحدة إنذارًا؛ ويقرّ المهندسون بالحادث ويغلقونه مع ملاحظة الحل.",
        "لوحة متابعة تعرض نسبة التوفر (Uptime) ومتوسط زمن الاستجابة وفقدان الحزم لكل جهاز، ومتوسط زمن الحل (MTTR) خلال 24 ساعة أو 7 أيام مع تصدير CSV، إضافة إلى سجل تدقيق غير قابل للتعديل لكل إجراء أمني مع عنوان IP الحقيقي للمستخدم.",
        "عزل بيانات المؤسسات داخل PostgreSQL عبر Row-Level Security (مفعّل ومفروض على كل جداول المؤسسات) مع أدوار قاعدة بيانات بأقل الصلاحيات؛ وجلسات مشفّرة التجزئة، وحماية CSRF، وصلاحيات قائمة على الأدوار لكل مسار API، وقفل الحساب وتحديد معدل محاولات الدخول.",
        "تشغيل تجريبي بأمر واحد عبر Docker Compose (Nginx وAPI وعامل المراقبة وPostgreSQL)، وأكثر من 250 اختبارًا تلقائيًا على قاعدة PostgreSQL حقيقية، وفحوص مستمرة عبر GitHub Actions. أجهزة العرض التجريبي تستخدم عناوين IP مخصصة للتوثيق (RFC 5737) وليست أجهزة حقيقية.",
      ],
    },
    tags: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "Row-Level Security", "SQLAlchemy", "Alembic", "ICMP", "Docker", "Nginx", "GitHub Actions"],
    diagram: "zyrthen",
    archCap: { en: "System architecture", ar: "معمارية النظام" },
    // Screenshots are 800×500 (audit 800×506): crop = [x, y, width, height]
    shot: { src: "assets/projects/zyrthen/dashboard.jpg", w: 800, crop: [0, 0, 800, 500], cap: { en: "Dashboard — click to enlarge", ar: "لوحة المتابعة — اضغط للتكبير" } },
    gallery: [
      { src: "assets/projects/zyrthen/incidents.jpg", w: 800, crop: [0, 0, 800, 500], cap: { en: "Incidents", ar: "الحوادث" } },
      { src: "assets/projects/zyrthen/devices.jpg", w: 800, crop: [0, 0, 800, 500], cap: { en: "Devices", ar: "الأجهزة" } },
      { src: "assets/projects/zyrthen/device-monitoring.jpg", w: 800, crop: [0, 0, 800, 500], cap: { en: "ICMP history", ar: "سجل فحوص ICMP" } },
      { src: "assets/projects/zyrthen/audit.jpg", w: 800, crop: [0, 0, 800, 500], cap: { en: "Audit log", ar: "سجل التدقيق" } },
    ],
    files: [
      { name: { en: "Project profile (PDF)", ar: "ملف تعريف المشروع (PDF - إنجليزي)" }, href: "assets/projects/zyrthen/ZYRTHEN_Project_Profile.pdf" },
    ],
    link: "", repo: "", privateRepo: true, // repository is private: shown as a label, not a link
  },
  {
    kind: { en: "Personal Project · Command-Line Tool", ar: "مشروع شخصي · أداة سطر أوامر" },
    title: { en: "NetProbe — Network Diagnostic CLI", ar: "NetProbe — أداة سطر أوامر لتشخيص الشبكات" },
    points: {
      en: [
        "Standalone command-line tool for network troubleshooting, written in Python using only the standard library, and supporting Windows and Linux.",
        "Runs Ping, Traceroute, DNS lookup, TCP port connectivity and network-interface checks, and turns raw tool output into structured results: packet loss and latency, route hops, resolved addresses, and each interface's status, MAC and IPv4/IPv6 addresses.",
        "Diagnostic reports combine several checks in one run, as readable text or JSON, with a pass/fail summary; one failing check never stops the others.",
        "Calls the operating system's own tools safely (no shell, validated input, clear exit codes) and is covered by an automated test suite built on saved Windows and Linux tool output.",
      ],
      ar: [
        "أداة سطر أوامر مستقلة لتشخيص مشكلات الشبكات، مكتوبة بلغة Python باستخدام المكتبة القياسية فقط، وتدعم Windows وLinux.",
        "تنفّذ فحوص Ping وTraceroute واستعلام DNS واتصال منافذ TCP ومعلومات واجهات الشبكة، وتحوّل مخرجات أدوات النظام إلى نتائج منظمة: فقدان الحزم وزمن الاستجابة، وقفزات المسار، والعناوين المحلولة، وحالة كل واجهة وعنوان MAC وعناوين IPv4/IPv6.",
        "تقارير تشخيصية تجمع عدة فحوص في تشغيل واحد، بصيغة نصية مقروءة أو JSON، مع ملخص للفحوص الناجحة والفاشلة؛ وفشل أحد الفحوص لا يوقف بقيتها.",
        "تستدعي أدوات نظام التشغيل بطريقة آمنة (دون Shell، مع التحقق من المدخلات ورموز خروج واضحة)، ومغطاة بمجموعة اختبارات تلقائية مبنية على مخرجات محفوظة من Windows وLinux.",
      ],
    },
    tags: ["Python", "CLI", "Windows", "Linux", "ICMP", "Traceroute", "DNS", "TCP", "JSON", "unittest"],
    diagram: "netprobe",
    link: "", repo: "https://github.com/muidh-alhamamah/NetProbe",
  },
  {
    kind: { en: "Personal Project · Security Audit Tool", ar: "مشروع شخصي · أداة تدقيق أمني" },
    title: { en: "NetConfig Auditor — Cisco Configuration Security Audit", ar: "NetConfig Auditor — تدقيق أمان إعدادات أجهزة Cisco" },
    points: {
      en: [
        "Standalone Python command-line tool that audits saved Cisco IOS and IOS XE configuration files offline and read-only, without connecting to any device.",
        "23 audit rules detect insecure management access (Telnet, HTTP, SSH version 1, unrestricted VTY lines), cleartext and weakly hashed passwords, default and read-write SNMP communities, overly permissive ACLs, and common mistakes such as duplicate IP addresses and references to undefined ACLs.",
        "Each finding reports the rule, severity, line number, reason and recommended fix, as a readable text report or JSON with clear exit codes for scripting; passwords, hashes and community strings are always masked.",
        "Modular design that keeps the parser, the rule set and reporting separate so new rules are easy to add; tested on 8 real-world, publicly available Cisco IOS configuration files, alongside an automated test suite run on Windows and Linux.",
      ],
      ar: [
        "أداة سطر أوامر مستقلة بلغة Python تدقق ملفات إعدادات أجهزة Cisco IOS وIOS XE المحفوظة، دون اتصال بالشبكة وبوضع القراءة فقط، ولا تتصل بأي جهاز.",
        "23 قاعدة تدقيق تكتشف الوصول الإداري غير الآمن (Telnet وHTTP وSSH الإصدار الأول وخطوط VTY غير المقيدة)، وكلمات المرور النصية أو ضعيفة التشفير، ومجتمعات SNMP الافتراضية أو ذات صلاحية الكتابة، وقوائم ACL المتساهلة، وأخطاء شائعة مثل تكرار عناوين IP والإشارة إلى قوائم ACL غير معرّفة.",
        "كل نتيجة تتضمن القاعدة ومستوى الخطورة ورقم السطر والسبب والتوصية بالإصلاح، في تقرير نصي مقروء أو بصيغة JSON مع رموز خروج واضحة للاستخدام في السكربتات؛ وتُخفى كلمات المرور والتجزئات ونصوص SNMP دائمًا.",
        "تصميم معياري يفصل المحلل عن قواعد التدقيق وعن التقارير لتسهيل إضافة قواعد جديدة؛ اختُبرت على 8 ملفات إعدادات Cisco IOS واقعية منشورة للعامة، إلى جانب مجموعة اختبارات تلقائية على Windows وLinux.",
      ],
    },
    tags: ["Python", "CLI", "Cisco IOS", "IOS XE", "Network Security", "Configuration Audit", "JSON", "unittest"],
    diagram: "ncaudit",
    link: "", repo: "https://github.com/muidh-alhamamah/NetConfigAuditor",
  },
  {
    kind: { en: "Graduation Project · Team of 4", ar: "مشروع التخرج · فريق من 4 متدربين" },
    title: { en: "Establish & Secure the Network Infrastructure of King Khalid Hospital, Najran", ar: "إنشاء وتأمين البنية التحتية لشبكة مستشفى الملك خالد بنجران" },
    points: {
      en: [
        "Designed a secure, high-performance network connecting three hospital buildings (Main, Clinics & Emergency, Medical Labs) over high-speed fiber, with redundancy and failover.",
        "Configured network services: IP telephony (VoIP), wireless access, IoT device integration and access switches for voice and data.",
        "Deployed and configured Web, Email, File-storage and DNS servers for hospital operations.",
        "Secured the network with firewall rules, SSH access, data encryption and Layer 2 protection; built and validated the full simulation in Cisco Packet Tracer.",
      ],
      ar: [
        "تصميم شبكة آمنة وعالية الأداء تربط ثلاثة مبانٍ للمستشفى (المبنى الرئيسي، العيادات والطوارئ، المختبرات الطبية) عبر الألياف الضوئية مع التكرار والتحويل التلقائي عند الأعطال.",
        "تهيئة خدمات الشبكة: الاتصال الصوتي عبر IP، والشبكة اللاسلكية، ودمج أجهزة إنترنت الأشياء، ومحولات الوصول للصوت والبيانات.",
        "إعداد وتهيئة خوادم الويب والبريد الإلكتروني وتخزين الملفات وDNS لدعم عمليات المستشفى.",
        "تأمين الشبكة بجدار الحماية وSSH وتشفير البيانات وحماية الطبقة الثانية، وبناء المحاكاة كاملة واختبارها على Cisco Packet Tracer.",
      ],
    },
    tags: ["Cisco Packet Tracer", "VLAN", "Redundancy", "VoIP", "Wireless", "IoT", "Servers", "Firewall", "SSH"],
    diagram: "hospital",
    // لقطة المخطط: w = عرض الصورة الأصلية، crop = [x, y, العرض, الارتفاع] للجزء المعروض
    shot: { src: "assets/projects/graduation/image.png?v=2", w: 1355, crop: [215, 38, 802, 794] },
    link: "", repo: "",
    files: [
      { name: { en: "Research report (PDF)", ar: "بحث المشروع (PDF - إنجليزي)" }, href: "assets/projects/graduation/graduation-research-en.pdf" },
      { name: { en: "Research — Arabic (Word)", ar: "بحث المشروع (Word - عربي)" }, href: "assets/projects/graduation/graduation-research-ar.docx" },
      { name: { en: "Packet Tracer simulation (.pkt)", ar: "ملف المحاكاة Packet Tracer" }, href: "assets/projects/graduation/hospital-network-simulation.pkt" },
    ],
  },
];

const EXPERIENCE = [
  {
    role: { en: "Network Analyst", ar: "محلل شبكات" },
    org: { en: "Services Excellence for Operations and Maintenance", ar: "خدمات متميزة للتشغيل والصيانة" },
    date: { en: "Nov 2025 – May 2026", ar: "نوفمبر 2025 – مايو 2026" },
    achievements: {
      en: [
        "Improved network stability through proactive monitoring and rapid connectivity issue resolution.",
        "Reduced operational downtime by resolving hardware, printer, camera and network failures efficiently.",
        "Enhanced infrastructure efficiency by analyzing traffic and identifying technical bottlenecks early.",
        "Configured network devices to improve connectivity stability and daily operational performance.",
      ],
      ar: [
        "تحسين استقرار الشبكات عبر المراقبة الاستباقية ومعالجة مشاكل الاتصال بسرعة.",
        "تقليل التوقفات التشغيلية بمعالجة أعطال الأجهزة والطابعات والكاميرات والشبكات بكفاءة عالية.",
        "تعزيز كفاءة البنية التحتية بتحليل حركة البيانات واكتشاف الاختناقات التقنية مبكرًا.",
        "تهيئة أجهزة الشبكات لتعزيز استقرار الاتصال ورفع كفاءة العمليات اليومية.",
      ],
    },
    duties: {
      en: [
        "Monitored network performance and resolved connectivity disruptions to ensure operational continuity.",
        "Configured routers and switches supporting the infrastructure and internal communication.",
        "Analyzed network traffic (PRTG, Wireshark) and identified issues affecting performance and stability.",
        "Maintained computers, printers and cameras and resolved technical faults.",
      ],
      ar: [
        "مراقبة أداء الشبكات ومعالجة انقطاعات الاتصال لضمان استمرارية العمليات اليومية.",
        "إعداد الموجهات والمحولات لدعم البنية التحتية وتحسين كفاءة الاتصال الداخلي.",
        "تحليل حركة البيانات (PRTG وWireshark) واكتشاف الاختناقات المؤثرة على أداء الأنظمة.",
        "صيانة الحواسيب والطابعات والكاميرات ومعالجة الأعطال التقنية لضمان استمرارية العمل.",
      ],
    },
  },
  {
    role: { en: "Technical Support Trainee", ar: "متدرب دعم فني" },
    org: { en: "Najran Municipality", ar: "أمانة منطقة نجران" },
    date: { en: "Jan 2022 – Mar 2022", ar: "يناير 2022 – مارس 2022" },
    achievements: {
      en: [
        "Supported technical operations by performing maintenance and resolving technical issues efficiently.",
        "Improved device performance through troubleshooting hardware and software issues.",
        "Assisted users to ensure business continuity across technical working environments.",
        "Supported local network setup improving internal communication stability.",
      ],
      ar: [
        "دعم العمليات التقنية بتنفيذ أعمال الصيانة ومعالجة الأعطال التقنية بكفاءة عالية.",
        "تحسين أداء الأجهزة عبر تشخيص المشكلات البرمجية ومعالجة الأعطال الفنية بسرعة.",
        "مساعدة المستخدمين لضمان استمرارية الأعمال داخل بيئات العمل التقنية المختلفة.",
        "إعداد الشبكات المحلية لدعم استقرار الاتصال وتحسين كفاءة العمل الإداري.",
      ],
    },
    duties: {
      en: [
        "Maintained computers and peripherals ensuring operational efficiency across departments.",
        "Diagnosed software issues and repaired hardware problems following technical procedures.",
        "Configured local networks ensuring stable communication between systems and devices.",
        "Provided technical support to users ensuring continuous workflow.",
      ],
      ar: [
        "صيانة الحواسيب والملحقات لضمان الكفاءة التشغيلية في مختلف الإدارات.",
        "تشخيص مشكلات البرمجيات وإصلاح أعطال العتاد وفق الإجراءات الفنية.",
        "تهيئة الشبكات المحلية لضمان اتصال مستقر بين الأنظمة والأجهزة.",
        "تقديم الدعم الفني للمستخدمين لضمان استمرارية سير العمل.",
      ],
    },
  },
];

// لإضافة شهادة: انسخ كتلة. featured:true = بطاقة مميزة. link = رابط التحقق (اختياري)
const CERTS = [
  {
    featured: true, icon: "cisco",
    name: { en: "Cisco Certified Network Associate (CCNA)", ar: "Cisco Certified Network Associate (CCNA)" },
    issuer: { en: "Cisco", ar: "Cisco" },
    date: { en: "Mar 2026 · Valid to Mar 2029", ar: "مارس 2026 · صالحة حتى مارس 2029" },
    link: "",
  },
  {
    featured: true, icon: "license",
    name: { en: "Engineering License", ar: "رخصة مزاولة المهنة الهندسية" },
    issuer: { en: "Saudi Council of Engineers", ar: "الهيئة السعودية للمهندسين" },
    date: { en: "Licensed engineer", ar: "مهندس مرخّص" },
    link: "",
  },
  {
    icon: "course",
    name: { en: "Spark Infrastructure & Networking Track – Elevate", ar: "مسار سبارك للبنية التحتية والشبكات – Elevate" },
    issuer: { en: "King Khalid University", ar: "جامعة الملك خالد" },
    date: { en: "Sep 2025", ar: "سبتمبر 2025" },
    link: "",
  },
  {
    icon: "course",
    name: { en: "Spark Program", ar: "برنامج سبارك" },
    issuer: { en: "King Khalid University", ar: "جامعة الملك خالد" },
    date: { en: "Apr 2025", ar: "أبريل 2025" },
    link: "",
  },
];

const EDUCATION = [
  {
    title: { en: "Bachelor's Degree in Applied Network Systems Engineering", ar: "بكالوريوس هندسة نظم الشبكات التطبيقية" },
    place: { en: "Technical College — TVTC", ar: "الكلية التقنية — المؤسسة العامة للتدريب التقني والمهني" },
    date: { en: "2023 – 2025", ar: "2023 – 2025" },
  },
  {
    title: { en: "Diploma in Computer Technical Support", ar: "دبلوم الدعم الفني للحاسب" },
    place: { en: "Technical College — TVTC", ar: "الكلية التقنية — المؤسسة العامة للتدريب التقني والمهني" },
    date: { en: "2019 – 2022", ar: "2019 – 2022" },
  },
];

const UI = {
  en: {
    docTitle: "Muidh Salem Al Hamamah — Network Engineer | Infrastructure | Cybersecurity",
    docDesc: "Portfolio of Muidh Salem Al Hamamah, a CCNA-certified network engineer licensed by the Saudi Council of Engineers, specializing in network infrastructure, network security and IT support. Open to work.",
    nav: { about: "About", skills: "Skills", experience: "Experience", projects: "Projects", certs: "Certifications", education: "Education", contact: "Contact" },
    hello: "Hello, I'm",
    iam: "Specialized in",
    cv: "Download CV", cvOther: "السيرة بالعربية", cvEn: "English CV", cvAr: "Arabic CV",
    contactBtn: "Let's talk",
    stats: [["CCNA", "Cisco certified"], ["SCE", "Licensed engineer"], ["2", "Professional roles"], ["B.Eng", "Network Systems Eng."]],
    aboutT: "About me", skillsT: "Skills & expertise", toolsT: "Tools & technologies", langsT: "Languages",
    experienceT: "Experience", achievements: "Key achievements", duties: "Core responsibilities",
    projectsT: "Projects", arch: "Logical network architecture", zoom: "Network topology in Cisco Packet Tracer — click to enlarge", viewProject: "View project", viewRepo: "Source code", privateRepo: "Private repository",
    certsT: "Certifications & licenses", verify: "Verify",
    educationT: "Education",
    contactT: "Let's build reliable networks together",
    contactP: "Open to Network Engineer, Infrastructure, Cybersecurity and IT Support roles. Reach out directly — I respond quickly.",
    email: "Email", phone: "Phone", linkedin: "LinkedIn", github: "GitHub",
    rights: "All rights reserved.", built: "Designed & built for GitHub Pages",
    langBtn: "ع", langLabel: "التبديل إلى العربية", theme: "Toggle theme", menu: "Menu", top: "Back to top",
    card: { t: "Credentials", latest: "Latest role", edu: "Degree", verified: "Verified profile" },
  },
  ar: {
    docTitle: "معيض سالم ال حمامه — مهندس شبكات | بنية تحتية | أمن سيبراني",
    docDesc: "الملف المهني لمعيض سالم ال حمامه، مهندس شبكات حاصل على CCNA ومرخّص من الهيئة السعودية للمهندسين، متخصص في البنية التحتية للشبكات وأمن الشبكات والدعم الفني. متاح للعمل.",
    nav: { about: "نبذة", skills: "المهارات", experience: "الخبرة", projects: "المشاريع", certs: "الشهادات", education: "التعليم", contact: "التواصل" },
    hello: "مرحبًا، أنا",
    iam: "متخصص في",
    cv: "تحميل السيرة الذاتية", cvOther: "English CV", cvEn: "السيرة بالإنجليزية", cvAr: "السيرة بالعربية",
    contactBtn: "تواصل معي",
    stats: [["CCNA", "شهادة Cisco"], ["SCE", "مهندس مرخّص"], ["2", "خبرات مهنية"], ["بكالوريوس", "هندسة نظم الشبكات"]],
    aboutT: "نبذة عني", skillsT: "المهارات والخبرات", toolsT: "الأدوات والتقنيات", langsT: "اللغات",
    experienceT: "الخبرة العملية", achievements: "الإنجازات الرئيسية", duties: "المسؤوليات الأساسية",
    projectsT: "المشاريع", arch: "البنية المنطقية للشبكة", zoom: "مخطط الشبكة في Cisco Packet Tracer — اضغط للتكبير", viewProject: "عرض المشروع", viewRepo: "الشيفرة المصدرية", privateRepo: "مستودع خاص",
    certsT: "الشهادات والتراخيص", verify: "تحقق",
    educationT: "التعليم",
    contactT: "لنبنِ معًا شبكات موثوقة",
    contactP: "متاح لوظائف مهندس شبكات والبنية التحتية والأمن السيبراني والدعم الفني. تواصل معي مباشرة وسأرد بسرعة.",
    email: "البريد الإلكتروني", phone: "الجوال", linkedin: "لينكدإن", github: "GitHub",
    rights: "جميع الحقوق محفوظة.", built: "صُمّم وبُني للنشر على GitHub Pages",
    langBtn: "EN", langLabel: "Switch to English", theme: "تبديل المظهر", menu: "القائمة", top: "العودة للأعلى",
    card: { t: "المؤهلات", latest: "آخر خبرة", edu: "المؤهل العلمي", verified: "ملف موثّق" },
  },
};
