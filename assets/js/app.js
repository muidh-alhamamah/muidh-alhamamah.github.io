(function () {
  "use strict";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
  };
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var lang = "ar";
  var sections = ["about", "skills", "experience", "projects", "certs", "education", "contact"];

  function pickLang() {
    var q = new URLSearchParams(location.search).get("lang");
    var l = q || store.get("lang") || (navigator.language || "ar").slice(0, 2);
    return l === "en" ? "en" : "ar";
  }
  function t(o) { return o[lang]; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  /* ---------- icons ---------- */
  var P = {
    net: '<circle cx="12" cy="5" r="2.2"/><circle cx="5" cy="19" r="2.2"/><circle cx="19" cy="19" r="2.2"/><path d="M12 7.2v4.3M12 11.5 6.4 17.4M12 11.5l5.6 5.9"/>',
    server: '<rect x="4" y="4" width="16" height="6" rx="1.5"/><rect x="4" y="14" width="16" height="6" rx="1.5"/><path d="M8 7h.01M8 17h.01M12 7h5M12 17h5"/>',
    shield: '<path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.2 7.5 9.5 4.3-1.3 7.5-4.9 7.5-9.5V6z"/><path d="m9 12 2.2 2.2L15.5 10"/>',
    support: '<path d="M4 13v-1a8 8 0 0 1 16 0v1"/><rect x="3" y="13" width="4" height="6" rx="1.5"/><rect x="17" y="13" width="4" height="6" rx="1.5"/><path d="M19 19c0 1.5-2 2.5-5 2.5"/>',
    chart: '<path d="M4 20h16M7 16v-4M12 16V8M17 16v-6"/>',
    cisco: '<path d="M4 10v4M8 8v8M12 6v12M16 8v8M20 10v4"/>',
    license: '<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="11" r="2.2"/><path d="M6 16c.6-1.4 1.8-2 3-2s2.4.6 3 2M14.5 10h4M14.5 13h3"/>',
    course: '<path d="m2.5 9 9.5-4.5L21.5 9 12 13.5z"/><path d="M6.5 11v4.5c1.5 1.3 3.5 2 5.5 2s4-.7 5.5-2V11M21.5 9v5"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 6.5 8.5 6.5 8.5-6.5"/>',
    phone: '<path d="M6 3h3.5l2 5-2.5 1.5a11 11 0 0 0 5.5 5.5L16 12.5l5 2V18a2 2 0 0 1-2 2A16 16 0 0 1 4 5a2 2 0 0 1 2-2z"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2.5 2.5 0 0 1 5 0v4M12 10v7"/>',
    github: '<path d="M9 19c-4 1.3-4-2-6-2.5m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>',
    dl: '<path d="M12 4v11M7 10.5l5 5 5-5M5 20h14"/>',
    file: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 13h6M9 17h4"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    pin: '<path d="M12 21s7-6.2 7-11.5a7 7 0 0 0-14 0C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
    ext: '<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
  };
  function ic(n, cls) { return '<svg class="ic ' + (cls || "") + '" viewBox="0 0 24 24" aria-hidden="true">' + P[n] + "</svg>"; }

  /* project mini topology diagrams */
  var DIAG = {
    hospital: '<svg viewBox="0 0 320 260" class="diag" aria-hidden="true"><g class="ln"><path d="M160 46v40M160 120 60 190M160 120v70M160 120l100 70M60 214v20M160 214v20M260 214v20M210 103h60"/></g><g class="nd"><rect x="136" y="16" width="48" height="30" rx="8" class="sec"/><rect x="138" y="86" width="44" height="34" rx="8"/><rect x="270" y="88" width="34" height="30" rx="6"/><rect x="36" y="190" width="48" height="24" rx="6"/><rect x="136" y="190" width="48" height="24" rx="6"/><rect x="236" y="190" width="48" height="24" rx="6"/><circle cx="60" cy="242" r="7"/><circle cx="160" cy="242" r="7"/><circle cx="260" cy="242" r="7"/></g><path d="M155 26v-4a5 5 0 0 1 10 0v4" class="lk"/><text x="215" y="34">Firewall</text><text x="110" y="106">Core</text><text x="287" y="138">Servers</text><text x="60" y="182">Main</text><text x="160" y="182">Clinics/ER</text><text x="260" y="182">Labs</text></svg>',
    secure: '<svg viewBox="0 0 320 120" class="diag" aria-hidden="true"><g class="ln"><path d="M40 60h60M140 60h50M210 60l50-30M210 60l50 30M210 60h50"/></g><g class="nd"><circle cx="30" cy="60" r="12"/><rect x="100" y="44" width="40" height="32" rx="7" class="sec"/><rect x="186" y="46" width="28" height="28" rx="6"/><circle cx="272" cy="28" r="10"/><circle cx="272" cy="60" r="10"/><circle cx="272" cy="92" r="10"/></g><path d="M120 52v-4a5 5 0 0 1 10 0v4" class="lk"/><text x="30" y="108">WAN</text><text x="120" y="108">FW</text><text x="200" y="108">SW</text></svg>',
    lan: '<svg viewBox="0 0 320 120" class="diag" aria-hidden="true"><g class="ln"><path d="M160 30v30M160 60 70 92M160 60l-30 32M160 60l30 32M160 60l90 32"/></g><g class="nd"><rect x="140" y="12" width="40" height="26" rx="7" class="sec"/><rect x="146" y="50" width="28" height="20" rx="5"/><circle cx="70" cy="94" r="10"/><circle cx="130" cy="94" r="10"/><circle cx="190" cy="94" r="10"/><circle cx="250" cy="94" r="10"/></g><text x="215" y="30">Router</text><text x="200" y="64">Switch</text></svg>',
  };

  /* ---------- render ---------- */
  function render() {
    var u = UI[lang], d = document.documentElement;
    d.lang = lang; d.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = u.docTitle;
    $('meta[name="description"]').content = u.docDesc;
    $('meta[property="og:title"]').content = u.docTitle;
    $('meta[property="og:description"]').content = u.docDesc;
    $('meta[property="og:locale"]').content = lang === "ar" ? "ar_SA" : "en_US";

    $("#nav-links").innerHTML = sections.map(function (s) { return '<a href="#' + s + '" data-s="' + s + '">' + u.nav[s] + "</a>"; }).join("");
    $("#lang-btn").textContent = u.langBtn;
    $("#lang-btn").setAttribute("aria-label", u.langLabel);
    $("#theme-btn").setAttribute("aria-label", u.theme);
    $("#menu-btn").setAttribute("aria-label", u.menu);
    $("#to-top").setAttribute("aria-label", u.top);
    $("#brand-name").textContent = t(PROFILE.short);

    var other = lang === "ar" ? "en" : "ar";
    var socials = socialLinks("soc");
    $("#hero-text").innerHTML =
      '<p class="status"><span class="pulse"></span>' + t(PROFILE.status) + "</p>" +
      '<p class="hello">' + u.hello + "</p>" +
      '<h1 class="name">' + t(PROFILE.name) + "</h1>" +
      '<p class="typed">' + u.iam + ' <span id="typed" class="grad"></span><span class="caret"></span></p>' +
      '<p class="lead">' + t(PROFILE.summary) + "</p>" +
      '<div class="cta"><a class="btn primary" href="' + SITE.cv[lang] + '" download>' + ic("dl") + u.cv + "</a>" +
      '<a class="btn ghost" href="#contact">' + u.contactBtn + ic("arrow", "flip") + "</a></div>" +
      '<div class="hero-meta"><a class="mini" href="' + SITE.cv[other] + '" download>' + ic("file") + u.cvOther + "</a>" + socials +
      '<span class="mini">' + ic("pin") + t(PROFILE.location) + "</span></div>";

    // credentials card
    var c0 = CERTS.filter(function (c) { return c.featured; }), ex = EXPERIENCE[0], ed = EDUCATION[0];
    var row = function (icon, k, v, s) { return '<li>' + ic(icon, "big") + '<div><small>' + k + '</small><b>' + v + '</b>' + (s ? '<span>' + s + '</span>' : '') + '</div></li>'; };
    $("#id-card").innerHTML =
      '<div class="idc-top"><div class="avatar">' + (SITE.photo ? '<img src="' + SITE.photo + '" alt="' + t(PROFILE.name) + '" width="88" height="88">' : '<span>' + t(PROFILE.name).charAt(0) + '</span>') + '</div><div class="idc-n"><b>' + t(PROFILE.name) + '</b><span>' + t(PROFILE.roles)[0] + '</span></div>' +
      '<span class="ver" title="' + u.card.verified + '">' + ic("check", "sm") + '</span></div>' +
      '<p class="idc-k">' + u.card.t + '</p><ul class="creds">' +
      c0.map(function (c) { return row(c.icon, t(c.issuer), t(c.name).replace(/ \(CCNA\)$/, "").replace("Cisco Certified Network Associate", "CCNA"), t(c.date)); }).join("") +
      row("course", u.card.edu, t(ed.title), t(ed.date)) +
      row("net", u.card.latest, t(ex.role), t(ex.org)) + '</ul>' +
      '<div class="idc-foot"><span class="pulse"></span>' + t(PROFILE.status) + '</div>';

    $("#stats").innerHTML = u.stats.map(function (s) {
      return '<div class="stat rv"><b>' + s[0] + "</b><span>" + s[1] + "</span></div>";
    }).join("");

    // about
    $("#about-t").innerHTML = head("01", u.aboutT);
    $("#about-body").innerHTML = t(PROFILE.about).map(function (p) { return "<p>" + p + "</p>"; }).join("");
    $("#focus").innerHTML = PROFILE.focus.map(function (f) {
      return '<div class="focus rv glow">' + ic(f.icon, "big") + "<h3>" + t(f.t) + "</h3><p>" + t(f.d) + "</p></div>";
    }).join("");

    // skills
    $("#skills-t").innerHTML = head("02", u.skillsT);
    $("#skills-grid").innerHTML = SKILLS.map(function (g) {
      return '<div class="card skill rv glow"><div class="card-h">' + ic(g.icon, "big") + "<h3>" + t(g.group) + "</h3></div><ul>" +
        g.items.map(function (i) { return "<li>" + ic("check", "sm") + t(i) + "</li>"; }).join("") + "</ul></div>";
    }).join("");
    $("#tools").innerHTML = '<h3 class="sub">' + u.toolsT + '</h3><div class="marquee"><div class="track">' +
      TOOLS.concat(TOOLS).map(function (x) { return "<span>" + x + "</span>"; }).join("") + "</div></div>" +
      '<h3 class="sub">' + u.langsT + '</h3><div class="langs">' +
      LANGS.map(function (l) { return '<div class="lng rv"><b>' + t(l.t) + "</b><span>" + t(l.l) + "</span></div>"; }).join("") + "</div>";

    // experience
    $("#experience-t").innerHTML = head("03", u.experienceT);
    $("#experience-list").innerHTML = EXPERIENCE.map(function (e, i) {
      return '<article class="job rv"><div class="job-h"><div><h3>' + t(e.role) + '</h3><p class="org">' + t(e.org) + '</p></div><span class="date">' + t(e.date) + "</span></div>" +
        '<h4>' + u.achievements + "</h4><ul class=\"ach\">" + e.achievements[lang].map(function (x) { return "<li>" + ic("check", "sm") + x + "</li>"; }).join("") + "</ul>" +
        "<details" + (i === 0 ? " open" : "") + "><summary>" + u.duties + "</summary><ul>" + e.duties[lang].map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul></details></article>";
    }).join("");

    // projects
    $("#projects-t").innerHTML = head("04", u.projectsT);
    $("#projects-grid").innerHTML = PROJECTS.map(function (p) {
      var links = (p.link ? '<a href="' + esc(p.link) + '" target="_blank" rel="noopener">' + u.viewProject + ic("ext", "sm") + "</a>" : "") +
        (p.repo ? '<a href="' + esc(p.repo) + '" target="_blank" rel="noopener">' + u.viewRepo + ic("ext", "sm") + "</a>" : "");
      return '<article class="card project rv glow' + (p.shot ? ' has-shot' : '') + '"><div class="viz">' + (p.shot ? '<div class="arch">' + (DIAG[p.diagram] || DIAG.lan) + '<span class="shot-cap">' + u.arch + '</span></div>' + shot(p, u) : (DIAG[p.diagram] || DIAG.lan)) + '</div><div class="pbody"><p class="kind">' + t(p.kind) + "</p><h3>" + t(p.title) + "</h3><ul>" +
        p.points[lang].map(function (x) { return "<li>" + x + "</li>"; }).join("") + '</ul><div class="tags">' +
        p.tags.map(function (g) { return "<span>" + g + "</span>"; }).join("") + "</div>" + (p.files && p.files.length ? '<div class="pfiles">' + p.files.map(function (f) { return '<a class="pfile" href="' + esc(f.href) + '"' + (/\.pdf$/i.test(f.href) ? ' target="_blank" rel="noopener"' : ' download') + '>' + ic("file") + t(f.name) + ic("ext", "sm") + "</a>"; }).join("") + "</div>" : "") + (links ? '<div class="plinks">' + links + "</div>" : "") + "</div></article>";
    }).join("");

    // certs
    $("#certs-t").innerHTML = head("05", u.certsT);
    $("#certs-grid").innerHTML = CERTS.map(function (c) {
      return '<div class="card cert rv glow' + (c.featured ? " feat" : "") + '"><div class="badge-ic">' + ic(c.icon || "course", "big") + "</div><div><h3>" + t(c.name) + '</h3><p class="org">' + t(c.issuer) + '</p><p class="date">' + t(c.date) + "</p>" +
        (c.link ? '<a class="verify" href="' + esc(c.link) + '" target="_blank" rel="noopener">' + u.verify + ic("ext", "sm") + "</a>" : "") + "</div></div>";
    }).join("");

    // education
    $("#education-t").innerHTML = head("06", u.educationT);
    $("#education-list").innerHTML = EDUCATION.map(function (e) {
      return '<div class="card edu rv glow">' + ic("course", "big") + '<div><span class="date">' + t(e.date) + "</span><h3>" + t(e.title) + '</h3><p class="org">' + t(e.place) + "</p></div></div>";
    }).join("");

    // contact
    $("#contact-k").innerHTML = '<span class="num">07</span>' + u.nav.contact;
    $("#contact-t").textContent = u.contactT;
    $("#contact-p").textContent = u.contactP;
    var cards = ['<a class="cc" href="mailto:' + SITE.email + '">' + ic("mail", "big") + "<span><small>" + u.email + '</small><bdi dir="ltr">' + SITE.email + "</bdi></span></a>"];
    if (SITE.phone) cards.push('<a class="cc" href="tel:' + SITE.phone.replace(/\s/g, "") + '">' + ic("phone", "big") + "<span><small>" + u.phone + '</small><bdi dir="ltr">' + SITE.phone + "</bdi></span></a>");
    if (SITE.links.linkedin) cards.push('<a class="cc" href="' + esc(SITE.links.linkedin) + '" target="_blank" rel="noopener">' + ic("linkedin", "big") + "<span><small>" + u.linkedin + '</small><bdi dir="ltr">muidh-alhamamah</bdi></span></a>');
    if (SITE.links.github) cards.push('<a class="cc" href="' + esc(SITE.links.github) + '" target="_blank" rel="noopener">' + ic("github", "big") + "<span><small>GitHub</small>GitHub</span></a>");
    $("#contact-grid").innerHTML = cards.join("");
    $("#contact-cv").innerHTML = '<a class="btn primary" href="' + SITE.cv.ar + '" download>' + ic("dl") + u.cvAr + '</a><a class="btn ghost" href="' + SITE.cv.en + '" download>' + ic("dl") + u.cvEn + "</a>";

    $("#footer-text").innerHTML = "© " + new Date().getFullYear() + " " + t(PROFILE.name) + ". " + u.rights + '<span class="sep">·</span>' + u.built;

    startTyping();
    observe();
    spy();
  }

  function cropHTML(s, alt) { var c = s.crop; return '<span class="crop" style="aspect-ratio:' + c[2] + '/' + c[3] + '"><img src="' + esc(s.src) + '" alt="' + esc(alt) + '" loading="lazy" style="width:' + (s.w / c[2] * 100) + '%;margin-left:' + (-c[0] / c[2] * 100) + '%;margin-top:' + (-c[1] / c[2] * 100) + '%"></span>'; }
  function shot(p, u) { return '<button class="shot" type="button" data-shot="' + PROJECTS.indexOf(p) + '" aria-label="' + esc(u.zoom) + '">' + cropHTML(p.shot, t(p.title)) + '<span class="shot-cap">' + ic("ext", "sm") + u.zoom + '</span></button>'; }
  function head(n, txt) { return '<span class="num">' + n + "</span>" + txt; }
  function socialLinks(cls) {
    var h = "";
    if (SITE.links.linkedin) h += '<a class="' + cls + '" href="' + esc(SITE.links.linkedin) + '" target="_blank" rel="noopener" aria-label="LinkedIn">' + ic("linkedin") + "</a>";
    if (SITE.links.github) h += '<a class="' + cls + '" href="' + esc(SITE.links.github) + '" target="_blank" rel="noopener" aria-label="GitHub">' + ic("github") + "</a>";
    return h;
  }

  /* ---------- typing roles ---------- */
  var typeTimer;
  function startTyping() {
    clearTimeout(typeTimer);
    var el = $("#typed"), roles = t(PROFILE.roles), ri = 0, ci = 0, del = false;
    if (reduce) { el.textContent = roles[0]; return; }
    (function step() {
      var w = roles[ri];
      el.textContent = w.slice(0, ci);
      if (!del && ci < w.length) { ci++; typeTimer = setTimeout(step, 70); }
      else if (!del) { del = true; typeTimer = setTimeout(step, 1800); }
      else if (ci > 0) { ci--; typeTimer = setTimeout(step, 35); }
      else { del = false; ri = (ri + 1) % roles.length; typeTimer = setTimeout(step, 300); }
    })();
  }

  /* ---------- reveal ---------- */
  var io;
  function observe() {
    var els = $$(".rv");
    if (reduce || !("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("in"); }); return; }
    if (!io) io = new IntersectionObserver(function (en) {
      en.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); } });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
    els.forEach(function (e, i) { e.style.transitionDelay = (i % 4) * 70 + "ms"; io.observe(e); });
  }

  /* ---------- active nav ---------- */
  var spyIO;
  function spy() {
    if (!("IntersectionObserver" in window)) return;
    if (spyIO) spyIO.disconnect();
    spyIO = new IntersectionObserver(function (en) {
      en.forEach(function (x) {
        if (x.isIntersecting) $$("#nav-links a").forEach(function (a) { a.classList.toggle("act", a.getAttribute("data-s") === x.target.id); });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { spyIO.observe(document.getElementById(s)); });
  }

  /* ---------- network canvas ---------- */
  function netCanvas() {
    var cv = $("#net"); if (!cv || !cv.getContext) return;
    var ctx = cv.getContext("2d"), W, H, pts = [], mouse = { x: -999, y: -999 }, run = true, dpr = Math.min(window.devicePixelRatio || 1, 2), col;
    function colors() {
      var s = getComputedStyle(document.documentElement);
      col = { a: s.getPropertyValue("--accent").trim(), b: s.getPropertyValue("--accent2").trim() };
    }
    function size() {
      var r = cv.parentElement.getBoundingClientRect();
      W = r.width; H = r.height; cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var n = Math.min(80, Math.round(W * H / 16000));
      pts = [];
      for (var i = 0; i < n; i++) pts.push({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35, r: Math.random() * 1.6 + 1, hub: Math.random() < .12 });
    }
    function draw() {
      ctx.clearRect(0, 0, W, H);
      var L = 130;
      for (var i = 0; i < pts.length; i++) {
        var p = pts[i];
        if (!reduce) { p.x += p.vx; p.y += p.vy; if (p.x < 0 || p.x > W) p.vx *= -1; if (p.y < 0 || p.y > H) p.vy *= -1; }
        for (var j = i + 1; j < pts.length; j++) {
          var q = pts[j], dx = p.x - q.x, dy = p.y - q.y, d = dx * dx + dy * dy;
          if (d < L * L) { ctx.globalAlpha = (1 - Math.sqrt(d) / L) * .35; ctx.strokeStyle = col.b; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke(); }
        }
        var mx = p.x - mouse.x, my = p.y - mouse.y, md = Math.sqrt(mx * mx + my * my);
        if (md < 170) { ctx.globalAlpha = (1 - md / 170) * .7; ctx.strokeStyle = col.a; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke(); }
        ctx.globalAlpha = p.hub ? .95 : .6; ctx.fillStyle = p.hub ? col.a : col.b;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.hub ? p.r + 1.6 : p.r, 0, 6.283); ctx.fill();
      }
      ctx.globalAlpha = 1;
      if (run && !reduce) requestAnimationFrame(draw);
    }
    colors(); size(); draw();
    addEventListener("resize", function () { size(); if (reduce) draw(); });
    cv.parentElement.addEventListener("pointermove", function (e) { var r = cv.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; });
    cv.parentElement.addEventListener("pointerleave", function () { mouse.x = mouse.y = -999; });
    if ("IntersectionObserver" in window) new IntersectionObserver(function (en) {
      var vis = en[0].isIntersecting; if (vis && !run) { run = true; draw(); } else if (!vis) run = false;
    }).observe(cv);
    document.addEventListener("themechange", function () { colors(); if (reduce) draw(); });
  }

  /* ---------- theme / ui ---------- */
  function setTheme(th) {
    document.documentElement.setAttribute("data-theme", th);
    var m = $('meta[name="theme-color"]'); if (m) m.content = th === "light" ? "#f4f7fc" : "#050a14";
    document.dispatchEvent(new Event("themechange"));
  }

  document.addEventListener("DOMContentLoaded", function () {
    lang = pickLang();
    setTheme(store.get("theme") || "dark");
    render();
    netCanvas();

    $("#lang-btn").addEventListener("click", function () { lang = lang === "ar" ? "en" : "ar"; store.set("lang", lang); render(); });
    $("#theme-btn").addEventListener("click", function () {
      var n = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light"; store.set("theme", n); setTheme(n);
    });
    $("#menu-btn").addEventListener("click", function () { var o = $("#nav").classList.toggle("open"); this.setAttribute("aria-expanded", o); });
    $("#nav-links").addEventListener("click", function () { $("#nav").classList.remove("open"); $("#menu-btn").setAttribute("aria-expanded", "false"); });
    $("#to-top").addEventListener("click", function () { scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" }); });

    document.addEventListener("click", function (e) {
      var lb = $("#lightbox"), b = e.target.closest && e.target.closest(".shot");
      if (!lb) { lb = document.createElement("div"); lb.id = "lightbox"; lb.className = "lightbox"; document.body.appendChild(lb); }
      if (b) { var p = PROJECTS[+b.getAttribute("data-shot")], c = p.shot.crop; lb.innerHTML = '<div class="lb-in" style="width:min(96vw,' + (92 * c[2] / c[3]) + 'vh)">' + cropHTML(p.shot, t(p.title)) + '</div>'; lb.classList.add("open"); }
      else lb.classList.remove("open");
    });
    document.addEventListener("keydown", function (e) { var lb = $("#lightbox"); if (e.key === "Escape" && lb) lb.classList.remove("open"); });

    var bar = $("#progress"), nav = $("#nav"), top = $("#to-top"), ticking = false;
    addEventListener("scroll", function () {
      if (ticking) return; ticking = true;
      requestAnimationFrame(function () {
        var h = document.documentElement, y = h.scrollTop;
        bar.style.transform = "scaleX(" + (y / Math.max(1, h.scrollHeight - h.clientHeight)) + ")";
        nav.classList.toggle("scrolled", y > 20); top.classList.toggle("show", y > 600); ticking = false;
      });
    }, { passive: true });

    // cursor glow on cards
    document.addEventListener("pointermove", function (e) {
      var c = e.target.closest && e.target.closest(".glow"); if (!c) return;
      var r = c.getBoundingClientRect(); c.style.setProperty("--mx", e.clientX - r.left + "px"); c.style.setProperty("--my", e.clientY - r.top + "px");
    }, { passive: true });
  });
})();
