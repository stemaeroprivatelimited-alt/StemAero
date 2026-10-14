/**
 * STEM AERO - Core Interactive JavaScript
 * Brand: "Where Curiosity Takes Flight"
 * 
 * ==========================================================================
 * CONFIGURATION BLOCK (Easily editable settings)
 * ==========================================================================
 */
const CONFIG = {
  companyName: "STEM AERO",
  tagline: "Where Curiosity Takes Flight",
  whatsappNumber: "918171695355", // India country code 91 + 10-digit number
  whatsappDisplay: "+91 81716 95355",
  email: "info@stemaero.online",
  defaultWhatsAppMessage: "Hello STEM AERO, I would like to know more about your STEM, Robotics and AI programs for schools.",
  serviceArea: "Delhi NCR, Uttar Pradesh & Expanding Pan-India"
};

document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initNavbar();
  initMobileMenu();
  initFloatingWhatsApp();
  initScrollAnimations();
  initRatioBar();
  initCounterAnimations();
  initSyllabusPage();
  initContactForm();
});

/**
 * --------------------------------------------------------------------------
 * PRELOADER INTRO ANIMATION (Simple Rocket Launch with STEM AERO Logo)
 * Rocket hovers on launchpad, engine ignites, blasts off diagonally up-right
 * --------------------------------------------------------------------------
 */
function initPreloader() {
  const preloader = document.getElementById('page-preloader');
  if (!preloader) return;

  // If user prefers reduced motion, hide immediately
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    preloader.style.display = 'none';
    return;
  }

  // Phase 1: Rocket hovers at launchpad (750ms)
  // Phase 2: Engine ignites and blasts off diagonally up-right
  setTimeout(() => {
    preloader.classList.add('launching');
  }, 750);

  // Phase 3: Smooth dissolve as rocket exits the screen
  setTimeout(() => {
    preloader.classList.add('fade-out');

    setTimeout(() => {
      preloader.style.display = 'none';
    }, 450);
  }, 1450);
}

/**
 * --------------------------------------------------------------------------
 * 1. NAVBAR & SCROLL BEHAVIOR
 * --------------------------------------------------------------------------
 */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Highlight active link based on current page
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-item');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/**
 * --------------------------------------------------------------------------
 * 2. MOBILE MENU DRAWER
 * --------------------------------------------------------------------------
 */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const drawer = document.querySelector('.mobile-menu-drawer');
  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
      drawer.classList.remove('open');
      toggleBtn.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    } else {
      drawer.classList.add('open');
      toggleBtn.classList.add('active');
      toggleBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
  });

  // Close when clicking any menu link
  const drawerLinks = drawer.querySelectorAll('a');
  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
      toggleBtn.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

/**
 * --------------------------------------------------------------------------
 * 3. FLOATING WHATSAPP BUTTON LINK
 * --------------------------------------------------------------------------
 */
function initFloatingWhatsApp() {
  const floatingBtn = document.querySelector('.floating-whatsapp');
  if (!floatingBtn) return;

  const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(CONFIG.defaultWhatsAppMessage)}`;
  floatingBtn.setAttribute('href', url);
  floatingBtn.setAttribute('target', '_blank');
  floatingBtn.setAttribute('rel', 'noopener noreferrer');
}

/**
 * --------------------------------------------------------------------------
 * 4. SCROLL REVEAL ANIMATIONS (IntersectionObserver)
 * --------------------------------------------------------------------------
 */
function initScrollAnimations() {
  if (!('IntersectionObserver' in window)) return;

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const targets = document.querySelectorAll('.reveal-on-scroll, .trio-card, .journey-step, .why-card, .process-step-card');
  targets.forEach(el => observer.observe(el));
}

/**
 * --------------------------------------------------------------------------
 * 5. ANIMATED 30/50/20 RATIO BAR
 * --------------------------------------------------------------------------
 */
function initRatioBar() {
  const ratioBar = document.querySelector('.ratio-bar-container');
  if (!ratioBar) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const theory = ratioBar.querySelector('.segment-theory');
        const handsOn = ratioBar.querySelector('.segment-hands-on');
        const project = ratioBar.querySelector('.segment-project');

        if (theory) theory.style.width = '30%';
        if (handsOn) handsOn.style.width = '50%';
        if (project) project.style.width = '20%';

        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(ratioBar);
}

/**
 * --------------------------------------------------------------------------
 * 6. ANIMATED NUMBER COUNTERS
 * --------------------------------------------------------------------------
 */
function initCounterAnimations() {
  const counters = document.querySelectorAll('.counter-val');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.getAttribute('data-target') || '0', 10);
        const duration = 1600; // ms
        const startTime = performance.now();

        const updateCounter = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out expo
          const currentCount = Math.floor(progress * target);
          counter.textContent = currentCount.toLocaleString();

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target.toLocaleString();
          }
        };

        requestAnimationFrame(updateCounter);
        obs.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

/**
 * --------------------------------------------------------------------------
 * 7. SYLLABUS INTERACTIVE EXPLORER & JS-BASE CLIENT AUTHENTICATION
 * 
 * Single Partner Credentials:
 * ID: stemaero123
 * Password: StemAero1407.
 * --------------------------------------------------------------------------
 */
const SYLLABUS_AUTH = {
  validId: "stemaero123",
  validPass: "StemAero1407.",
  validPassAlt: "StemAero1407", // Tolerant to trailing dot omitted
  storageKey: "stemaero_syllabus_auth",
  sessionDurationMs: 30 * 60 * 1000 // 30 minutes in milliseconds
};

function isSyllabusUnlocked() {
  try {
    const raw = sessionStorage.getItem(SYLLABUS_AUTH.storageKey) ||
                localStorage.getItem(SYLLABUS_AUTH.storageKey);
    if (!raw) return false;

    let session = null;
    try {
      session = JSON.parse(raw);
    } catch (e) {
      // Legacy string migration
      if (raw === 'unlocked') {
        setSyllabusUnlockedState();
        return true;
      }
      return false;
    }

    if (session && session.unlocked) {
      if (session.expiresAt && Date.now() > session.expiresAt) {
        // Expired after 30 minutes!
        lockSyllabusState();
        return false;
      }
      return true;
    }
    return false;
  } catch (e) {
    return false;
  }
}

function getSessionRemainingMs() {
  try {
    const raw = sessionStorage.getItem(SYLLABUS_AUTH.storageKey) ||
                localStorage.getItem(SYLLABUS_AUTH.storageKey);
    if (!raw) return 0;
    const session = JSON.parse(raw);
    if (session && session.expiresAt) {
      return Math.max(0, session.expiresAt - Date.now());
    }
  } catch (e) {}
  return 0;
}

function setSyllabusUnlockedState(remember = true) {
  try {
    const sessionData = JSON.stringify({
      unlocked: true,
      loginTime: Date.now(),
      expiresAt: Date.now() + SYLLABUS_AUTH.sessionDurationMs
    });
    sessionStorage.setItem(SYLLABUS_AUTH.storageKey, sessionData);
    if (remember) {
      localStorage.setItem(SYLLABUS_AUTH.storageKey, sessionData);
    }
  } catch (e) {}
}

function lockSyllabusState() {
  try {
    sessionStorage.removeItem(SYLLABUS_AUTH.storageKey);
    localStorage.removeItem(SYLLABUS_AUTH.storageKey);
  } catch (e) {}
}

function verifySyllabusCredentials(idInput, passInput) {
  const cleanId = (idInput || '').trim().toLowerCase();
  const cleanPass = (passInput || '').trim();
  return cleanId === SYLLABUS_AUTH.validId && 
         (cleanPass === SYLLABUS_AUTH.validPass || cleanPass === SYLLABUS_AUTH.validPassAlt);
}

function initSyllabusPage() {
  const pillsContainer = document.querySelector('.class-pills-scroll');
  const chaptersGrid = document.querySelector('.chapters-grid');
  const classHeaderCard = document.querySelector('.class-header-card');
  const modalOverlay = document.querySelector('.modal-overlay');

  if (!pillsContainer || !chaptersGrid || typeof STEM_AERO_SYLLABUS === 'undefined') {
    return;
  }

  const syllabusData = STEM_AERO_SYLLABUS;

  // Determine initial class from URL hash (e.g. #class-6) or default to Class 3
  let activeClassId = "class-3";
  if (window.location.hash) {
    const hashId = window.location.hash.replace('#', '');
    const found = syllabusData.classes.find(c => c.id === hashId || `class-${c.classNumber}` === hashId);
    if (found) activeClassId = found.id;
  }

  // Setup Portal Auth Listeners & UI State
  initSyllabusAuthPortal();

  // Render Pill Buttons
  pillsContainer.innerHTML = '';
  syllabusData.classes.forEach(cls => {
    const btn = document.createElement('button');
    btn.className = `syllabus-pill-btn ${cls.id === activeClassId ? 'active' : ''}`;
    btn.textContent = cls.className;
    btn.setAttribute('data-class-id', cls.id);
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-selected', cls.id === activeClassId ? 'true' : 'false');
    btn.addEventListener('click', () => {
      selectClass(cls.id);
    });
    pillsContainer.appendChild(btn);
  });

  // Render active class details
  renderClassContent(activeClassId);

  // Function to switch active class
  function selectClass(classId) {
    activeClassId = classId;
    window.location.hash = classId;

    // Update pill states
    const allPills = pillsContainer.querySelectorAll('.syllabus-pill-btn');
    allPills.forEach(pill => {
      const match = pill.getAttribute('data-class-id') === classId;
      pill.classList.toggle('active', match);
      pill.setAttribute('aria-selected', match ? 'true' : 'false');
    });

    renderClassContent(classId);
  }

  // Function to render class header & 12 chapter cards
  function renderClassContent(classId) {
    const cls = syllabusData.classes.find(c => c.id === classId) || syllabusData.classes[0];
    const unlocked = isSyllabusUnlocked();

    // Update Class Header Card
    if (classHeaderCard) {
      classHeaderCard.innerHTML = `
        <div class="class-header-info">
          <div class="class-header-meta">
            <h2>${cls.className} Curriculum</h2>
            <span class="class-level-tag">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              Level: ${cls.level}
            </span>
          </div>
          <p class="class-focus-text">${cls.focus}</p>
        </div>
        <div class="class-coding-box">
          <div class="class-coding-label">Primary Coding Platform</div>
          <div class="class-coding-val">${cls.coding}</div>
        </div>
      `;
    }

    // Render 12 Chapter Cards
    chaptersGrid.innerHTML = '';
    cls.chapters.forEach(ch => {
      const card = document.createElement('article');
      card.className = `chapter-card ${unlocked ? 'unlocked' : ''}`;
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', `Chapter ${ch.number}: ${ch.name}. ${unlocked ? 'Full access available.' : 'Click to unlock.'}`);

      if (unlocked) {
        // UNLOCKED CARD VIEW
        card.innerHTML = `
          <div class="chapter-top-bar">
            <span class="chapter-num-badge">Chapter ${ch.number}</span>
            <div class="chapter-lock-indicator unlocked" title="Curriculum Unlocked">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
              </svg>
              <span>Full Access</span>
            </div>
          </div>
          <h3 class="chapter-title">${ch.name}</h3>
          <p class="chapter-teaser">${ch.teaser}</p>
          <div class="chapter-click-hint unlocked">
            <span>View Chapter Blueprint</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
        `;
      } else {
        // LOCKED CARD VIEW
        card.innerHTML = `
          <div class="chapter-frosted-overlay"></div>
          <div class="chapter-top-bar">
            <span class="chapter-num-badge">Chapter ${ch.number}</span>
            <div class="chapter-lock-indicator" title="Curriculum Protected">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <span>Locked</span>
            </div>
          </div>
          <h3 class="chapter-title">${ch.name}</h3>
          <p class="chapter-teaser">${ch.teaser}</p>
          <div class="chapter-click-hint">
            <span>Enter ID &amp; password to unlock</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
        `;
      }

      // Open Modal on click or Enter key
      const openModalHandler = () => {
        openChapterModal(cls.className, ch.number, ch.name, ch.teaser, cls.coding, cls.level);
      };

      card.addEventListener('click', openModalHandler);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModalHandler();
        }
      });

      chaptersGrid.appendChild(card);
    });
  }

  // Handle Modal Interactions
  initChapterModal(modalOverlay);

  // Hook for re-rendering from auth changes
  window.__refreshSyllabusView = function() {
    renderClassContent(activeClassId);
  };
}

/**
 * --------------------------------------------------------------------------
 * 7B. SYLLABUS AUTHENTICATION PORTAL CONTROLLER
 * --------------------------------------------------------------------------
 */
function initSyllabusAuthPortal() {
  const lockedCard = document.getElementById('syllabus-locked-card');
  const unlockedCard = document.getElementById('syllabus-unlocked-card');
  const onlineViewer = document.getElementById('online-syllabus-viewer');
  const noticeText = document.getElementById('syllabus-protection-text');

  const authForm = document.getElementById('syllabus-auth-form');
  const idInput = document.getElementById('auth-id-input');
  const passInput = document.getElementById('auth-pass-input');
  const togglePassBtn = document.getElementById('auth-toggle-pass-btn');
  const errorBanner = document.getElementById('auth-error-banner');
  const errorText = document.getElementById('auth-error-text');
  const expiredBanner = document.getElementById('auth-expired-banner');
  const lockBtn = document.getElementById('btn-lock-syllabus');
  const jumpToViewerBtn = document.getElementById('btn-jump-to-viewer');
  const timerCountdown = document.getElementById('session-timer-countdown');

  function updatePortalUI(isUnlocked) {
    if (isUnlocked) {
      if (lockedCard) lockedCard.style.display = 'none';
      if (unlockedCard) unlockedCard.style.display = 'flex';
      if (onlineViewer) onlineViewer.style.display = 'block';

      if (noticeText) {
        noticeText.innerHTML = `
          <svg style="display: inline-block; vertical-align: middle; margin-right: 6px; width: 16px; height: 16px; color: #10B981;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <strong style="color: #065F46;">Partner Session Active (ID: stemaero123):</strong> You have full verified access to the 10-year progressive robotics &amp; AI syllabus and the official curriculum documentation embedded below.
        `;
        if (noticeText.parentElement) {
          noticeText.parentElement.style.background = '#ECFDF5';
          noticeText.parentElement.style.borderColor = 'rgba(16, 185, 129, 0.4)';
        }
      }
    } else {
      if (lockedCard) lockedCard.style.display = 'block';
      if (unlockedCard) unlockedCard.style.display = 'none';
      if (onlineViewer) onlineViewer.style.display = 'none';

      if (noticeText) {
        noticeText.innerHTML = `
          <svg style="display: inline-block; vertical-align: middle; margin-right: 6px; width: 16px; height: 16px; color: var(--royal-blue);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          <strong>Curriculum Protection Notice:</strong> In accordance with STEM AERO policies, complete project details and lesson plans are secured for authorized partner schools. Enter ID <code>stemaero123</code> &amp; password <code>StemAero1407.</code> above to unlock the complete syllabus online.
        `;
        if (noticeText.parentElement) {
          noticeText.parentElement.style.background = 'var(--bg-subtle)';
          noticeText.parentElement.style.borderColor = 'var(--border-color)';
        }
      }
    }

    // Refresh chapter cards to show unlocked/locked indicators
    if (typeof window.__refreshSyllabusView === 'function') {
      window.__refreshSyllabusView();
    }
  }

  // Initial Sync from Storage
  updatePortalUI(isSyllabusUnlocked());

  // Password visibility toggle
  if (togglePassBtn && passInput) {
    const eyeOpen = togglePassBtn.querySelector('.eye-open-icon');
    const eyeClosed = togglePassBtn.querySelector('.eye-closed-icon');

    togglePassBtn.addEventListener('click', () => {
      const isPassword = passInput.getAttribute('type') === 'password';
      passInput.setAttribute('type', isPassword ? 'text' : 'password');
      if (eyeOpen) eyeOpen.style.display = isPassword ? 'none' : 'block';
      if (eyeClosed) eyeClosed.style.display = isPassword ? 'block' : 'none';
    });
  }

  // Active Session Ticker (Counts down 30 minutes and auto-locks on expiry)
  function tickSession() {
    if (isSyllabusUnlocked()) {
      const remainingMs = getSessionRemainingMs();
      if (remainingMs <= 0) {
        // 30-minute session expired!
        lockSyllabusState();
        updatePortalUI(false);
        showExpiredAlert();
      } else {
        const mins = Math.floor(remainingMs / 60000);
        const secs = Math.floor((remainingMs % 60000) / 1000);
        if (timerCountdown) {
          timerCountdown.textContent = `Session: ${mins}m ${secs < 10 ? '0' : ''}${secs}s remaining`;
        }
      }
    } else {
      // If UI is showing unlocked but session is expired/missing
      if (unlockedCard && unlockedCard.style.display === 'flex') {
        updatePortalUI(false);
        showExpiredAlert();
      }
    }
  }

  // Run ticker every second
  const sessionInterval = setInterval(tickSession, 1000);
  tickSession();

  // Instant re-check on tab focus / visibility
  window.addEventListener('focus', tickSession);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) tickSession();
  });

  // Authentication Submission
  function handleAuthSubmit() {
    if (!idInput || !passInput) return;

    const enteredId = idInput.value;
    const enteredPass = passInput.value;

    if (!enteredId.trim() || !enteredPass.trim()) {
      showError("Please enter both ID and Password.");
      return;
    }

    if (verifySyllabusCredentials(enteredId, enteredPass)) {
      // Success!
      hideError();
      setSyllabusUnlockedState(true);
      updatePortalUI(true);
      tickSession();

      // Smooth scroll to unlocked area
      if (unlockedCard) {
        unlockedCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    } else {
      showError("Invalid ID or Password. Please check credentials and try again.");
    }
  }

  function showError(msg) {
    if (errorBanner && errorText) {
      errorText.textContent = msg;
      errorBanner.style.display = 'flex';
      errorBanner.classList.remove('auth-shake');
      void errorBanner.offsetWidth; // Trigger reflow
      errorBanner.classList.add('auth-shake');
    }
    if (expiredBanner) expiredBanner.style.display = 'none';
    if (idInput) idInput.classList.add('has-error');
    if (passInput) passInput.classList.add('has-error');
  }

  function showExpiredAlert() {
    if (expiredBanner) {
      expiredBanner.style.display = 'flex';
    }
    if (errorBanner) errorBanner.style.display = 'none';
    if (lockedCard) {
      lockedCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    if (idInput) {
      idInput.focus();
    }
  }

  function hideError() {
    if (errorBanner) errorBanner.style.display = 'none';
    if (expiredBanner) expiredBanner.style.display = 'none';
    if (idInput) idInput.classList.remove('has-error');
    if (passInput) passInput.classList.remove('has-error');
  }

  // Form event listeners
  if (authForm) {
    authForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handleAuthSubmit();
    });
  }

  const submitBtn = document.getElementById('auth-submit-btn');
  if (submitBtn) {
    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      handleAuthSubmit();
    });
  }

  // Enter key in inputs
  [idInput, passInput].forEach(inp => {
    if (!inp) return;
    inp.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleAuthSubmit();
      }
    });
    inp.addEventListener('input', () => {
      hideError();
    });
  });

  // Re-lock Session Button
  if (lockBtn) {
    lockBtn.addEventListener('click', () => {
      lockSyllabusState();
      updatePortalUI(false);
      if (passInput) passInput.value = '';
      if (lockedCard) {
        lockedCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  }

  // Jump to viewer button
  if (jumpToViewerBtn && onlineViewer) {
    jumpToViewerBtn.addEventListener('click', (e) => {
      e.preventDefault();
      onlineViewer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  // Expose global unlock method for modal form integration
  window.__unlockSyllabusGlobally = function(idVal, passVal) {
    if (verifySyllabusCredentials(idVal, passVal)) {
      setSyllabusUnlockedState(true);
      updatePortalUI(true);
      tickSession();
      return true;
    }
    return false;
  };
}

/**
 * --------------------------------------------------------------------------
 * 8. SYLLABUS MODAL SETUP & ACTIONS
 * --------------------------------------------------------------------------
 */
let currentModalContext = { className: '', chapterNum: '', chapterName: '', teaser: '', coding: '', level: '' };

function openChapterModal(className, chapterNum, chapterName, teaser = '', coding = '', level = '') {
  currentModalContext = { className, chapterNum, chapterName, teaser, coding, level };
  const modalOverlay = document.querySelector('.modal-overlay');
  if (!modalOverlay) return;

  const unlocked = isSyllabusUnlocked();

  const targetBadge = modalOverlay.querySelector('.modal-target-chapter');
  if (targetBadge) {
    targetBadge.textContent = `${className} • Chapter ${chapterNum}: ${chapterName}`;
  }

  const modalTitle = document.getElementById('modal-title-text');
  const modalBody = document.getElementById('modal-body-text');
  const modalShield = document.getElementById('modal-icon-shield');
  const modalAuthBox = document.getElementById('modal-auth-container');
  const viewPdfBtn = document.getElementById('modal-btn-view-pdf');

  if (unlocked) {
    // UNLOCKED MODAL STATE
    if (modalTitle) modalTitle.textContent = "🔓 Chapter Curriculum Blueprint";
    if (modalBody) {
      modalBody.innerHTML = `
        <strong>${chapterName}</strong> is part of the <strong>${className}</strong> hands-on progression (${level || 'Standard'}). 
        <br><br>
        <strong>Focus Concept:</strong> ${teaser || 'Core engineering principles and robotics integration.'}
        <br>
        <strong>Coding Platform:</strong> ${coding || 'Scratch / Microcontrollers / Python'}
        <br><br>
        Full schematics, component lists, and lesson plans are available in the official document below.
      `;
    }
    if (modalShield) {
      modalShield.style.background = 'rgba(16, 185, 129, 0.15)';
      modalShield.style.color = '#10B981';
      modalShield.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
        </svg>
      `;
    }
    if (modalAuthBox) modalAuthBox.style.display = 'none';
    if (viewPdfBtn) viewPdfBtn.style.display = 'inline-flex';
  } else {
    // LOCKED MODAL STATE
    if (modalTitle) modalTitle.textContent = "Detailed Chapter Content Protected";
    if (modalBody) {
      modalBody.textContent = "This chapter's full content is available to enrolled schools and authorized partners. Unlock instant online access below with your single ID & password, or connect with our academic team.";
    }
    if (modalShield) {
      modalShield.style.background = 'rgba(255, 122, 47, 0.12)';
      modalShield.style.color = 'var(--orange)';
      modalShield.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      `;
    }
    if (modalAuthBox) modalAuthBox.style.display = 'block';
    if (viewPdfBtn) viewPdfBtn.style.display = 'none';
  }

  // Update WhatsApp Button URL
  const waBtn = modalOverlay.querySelector('.modal-btn-wa');
  if (waBtn) {
    const msg = `Hello STEM AERO, I would like to enquire about the complete syllabus details for ${className} (Chapter ${chapterNum}: ${chapterName}). Please share the project scope and component list.`;
    waBtn.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  }

  // Update Email Button URL
  const emailBtn = modalOverlay.querySelector('.modal-btn-email');
  if (emailBtn) {
    const subject = `Curriculum Enquiry: ${className} - Chapter ${chapterNum} (${chapterName})`;
    const body = `Hello STEM AERO Academic Team,\n\nI would like to receive the comprehensive syllabus, lesson plan, and component breakdown for:\n\nClass: ${className}\nChapter ${chapterNum}: ${chapterName}\n\nPlease share the details.\n\nThank you.`;
    emailBtn.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  modalOverlay.classList.add('active');
  modalOverlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  // Focus close button
  const closeBtn = modalOverlay.querySelector('.modal-close-btn');
  if (closeBtn) closeBtn.focus();
}

function closeChapterModal() {
  const modalOverlay = document.querySelector('.modal-overlay');
  if (!modalOverlay) return;

  modalOverlay.classList.remove('active');
  modalOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function initChapterModal(modalOverlay) {
  if (!modalOverlay) return;

  const closeBtn = modalOverlay.querySelector('.modal-close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeChapterModal);
  }

  // Close when clicking backdrop
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeChapterModal();
    }
  });

  // Close on Esc key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeChapterModal();
    }
  });

  // Modal inline quick unlock form
  const modalAuthBtn = document.getElementById('modal-auth-btn');
  const modalIdInput = document.getElementById('modal-auth-id');
  const modalPassInput = document.getElementById('modal-auth-pass');
  const modalError = document.getElementById('modal-auth-error');
  const viewPdfBtn = document.getElementById('modal-btn-view-pdf');

  function handleModalUnlock() {
    if (!modalIdInput || !modalPassInput) return;
    const idVal = modalIdInput.value;
    const passVal = modalPassInput.value;

    if (window.__unlockSyllabusGlobally && window.__unlockSyllabusGlobally(idVal, passVal)) {
      if (modalError) modalError.style.display = 'none';
      modalPassInput.value = '';
      // Re-open current modal in unlocked mode!
      openChapterModal(
        currentModalContext.className,
        currentModalContext.chapterNum,
        currentModalContext.chapterName,
        currentModalContext.teaser,
        currentModalContext.coding,
        currentModalContext.level
      );
    } else {
      if (modalError) {
        modalError.style.display = 'flex';
      }
    }
  }

  if (modalAuthBtn) {
    modalAuthBtn.addEventListener('click', handleModalUnlock);
  }

  [modalIdInput, modalPassInput].forEach(inp => {
    if (!inp) return;
    inp.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleModalUnlock();
      }
    });
    inp.addEventListener('input', () => {
      if (modalError) modalError.style.display = 'none';
    });
  });

  // Jump to viewer from inside modal
  if (viewPdfBtn) {
    viewPdfBtn.addEventListener('click', (e) => {
      e.preventDefault();
      closeChapterModal();
      const onlineViewer = document.getElementById('online-syllabus-viewer');
      if (onlineViewer) {
        onlineViewer.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
}

/**
 * --------------------------------------------------------------------------
 * 9. CONTACT FORM LOGIC (WhatsApp & Mailto Generation)
 * --------------------------------------------------------------------------
 */
function initContactForm() {
  const form = document.getElementById('stem-contact-form');
  if (!form) return;

  const btnWa = document.getElementById('btn-submit-whatsapp');
  const btnEmail = document.getElementById('btn-submit-email');
  const statusMsg = document.getElementById('form-status');

  function validateForm() {
    const name = (document.getElementById('contact-name')?.value || '').trim();
    const school = (document.getElementById('contact-school')?.value || '').trim();
    const phone = (document.getElementById('contact-phone')?.value || '').trim();
    const interest = document.getElementById('contact-interest')?.value || 'General Enquiry';
    const message = (document.getElementById('contact-message')?.value || '').trim();

    if (!name || !school || !phone || !message) {
      if (statusMsg) {
        statusMsg.className = 'form-status-msg error';
        statusMsg.textContent = 'Please fill in all required fields (Name, School, Phone, and Message).';
      }
      return null;
    }

    if (statusMsg) {
      statusMsg.className = 'form-status-msg';
      statusMsg.textContent = '';
    }

    return { name, school, phone, interest, message };
  }

  if (btnWa) {
    btnWa.addEventListener('click', (e) => {
      e.preventDefault();
      const data = validateForm();
      if (!data) return;

      const formattedText = 
`*New School Enquiry - STEM AERO*
• *Name:* ${data.name}
• *School/Organisation:* ${data.school}
• *Phone:* ${data.phone}
• *Interested In:* ${data.interest}
• *Message:* ${data.message}`;

      const waUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(formattedText)}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');

      if (statusMsg) {
        statusMsg.className = 'form-status-msg success';
        statusMsg.textContent = 'Opening WhatsApp with your enquiry details...';
      }
    });
  }

  if (btnEmail) {
    btnEmail.addEventListener('click', (e) => {
      e.preventDefault();
      const data = validateForm();
      if (!data) return;

      const subject = `STEM AERO Enquiry: ${data.school} (${data.interest})`;
      const body = 
`Hello STEM AERO Team,

I am submitting an enquiry from your website.

Contact Details:
- Name: ${data.name}
- School/Organisation: ${data.school}
- Phone: ${data.phone}
- Primary Interest: ${data.interest}

Message:
${data.message}

Looking forward to hearing from you.`;

      const mailtoUrl = `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;

      if (statusMsg) {
        statusMsg.className = 'form-status-msg success';
        statusMsg.textContent = 'Opening your email client with prefilled enquiry...';
      }
    });
  }
}
