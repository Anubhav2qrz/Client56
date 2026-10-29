/**
 * Janani Priyanka K - Portfolio Web Application Engine
 * ES6+ JavaScript handling 28-image interactive gallery, full lightbox modal,
 * filtering, animated counters, simulated audio player, and contact actions.
 */

// ==========================================================================
// 1. COMPLETE 28-IMAGE GALLERY DATASET
// ==========================================================================
const galleryData = [
  {
    id: 1,
    img: "extracted_images/page_01.jpg",
    title: "Aval Vikatan Feature: '2K Kids' Spotlight",
    category: "press",
    categoryLabel: "Print & Press Media",
    year: "Magazine Feature",
    caption: "Full multi-column feature in leading Tamil weekly magazine Aval Vikatan spotlighting Janani Priyanka as an inspiring voice of the 2K generation and her active societal contributions.",
    tags: ["Aval Vikatan", "Print Media", "2K Kids", "Tamil Magazine"]
  },
  {
    id: 2,
    img: "extracted_images/page_02.jpg",
    title: "Live Youth Summit Emcee & Anchor",
    category: "pr",
    categoryLabel: "PR & Event Hosting",
    year: "Stage Hosting",
    caption: "Hosting and anchoring high-energy youth summits and university conferences, engaging live crowds and moderating dynamic speaker sessions.",
    tags: ["Stage Emcee", "Youth Summit", "Live Anchoring", "Audience Engagement"]
  },
  {
    id: 3,
    img: "extracted_images/page_03.jpg",
    title: "State-Level Creative Writing Cash Award",
    category: "awards",
    categoryLabel: "State Honors & Awards",
    year: "State Honor",
    caption: "Official cash award and certificate of distinction in the competitive Tamil Nadu State Creative Writing & Editorial Essay Contest.",
    tags: ["Creative Writing", "Cash Prize", "State Award", "Tamil Essay"]
  },
  {
    id: 4,
    img: "extracted_images/page_04.jpg",
    title: "Takkar Talent Fest Distinction Award",
    category: "awards",
    categoryLabel: "State Honors & Awards",
    year: "Arts & Culture",
    caption: "Distinction certificate and stage presentation at Takkar Talent Fest celebrating excellence in stage communications and creative performance.",
    tags: ["Talent Fest", "Stage Performance", "Distinction Certificate"]
  },
  {
    id: 5,
    img: "extracted_images/page_05.jpg",
    title: "Zee Tamil HD Studio Appearance",
    category: "broadcast",
    categoryLabel: "Television & Broadcast",
    year: "Television",
    caption: "Participation on the broadcast panel of Zee Tamil HD prime-time entertainment program, discussing social trends and cultural narratives.",
    tags: ["Zee Tamil", "Televised Broadcast", "Panelist", "Media Network"]
  },
  {
    id: 6,
    img: "extracted_images/page_06.jpg",
    title: "Zee Tamil Prime-Time Broadcast Feature",
    category: "broadcast",
    categoryLabel: "Television & Broadcast",
    year: "Television",
    caption: "Televised screen moment on Zee Tamil network showcasing youth opinions and vibrant public dialogue.",
    tags: ["Zee Tamil HD", "Studio Telecast", "Broadcast Media"]
  },
  {
    id: 7,
    img: "extracted_images/page_07.jpg",
    title: "ChennaiLive 104.8 FM RJ Hunt at Medai",
    category: "radio",
    categoryLabel: "Radio & Audio Stage",
    year: "RJ Hunt Finalist",
    caption: "Live RJ hunt performance and stage hosting at Medai, showcasing spontaneity, vocal modulation, and crowd entertainment for ChennaiLive 104.8 FM.",
    tags: ["ChennaiLive 104.8 FM", "RJ Hunt", "Medai Stage", "Radio Jockey"]
  },
  {
    id: 8,
    img: "extracted_images/page_08.jpg",
    title: "Live Stage Crowd Hosting & RJ Challenge",
    category: "radio",
    categoryLabel: "Radio & Audio Stage",
    year: "Audio & Stage",
    caption: "Engaging live audience with humor and impromptu dialogues during the RJ Hunt auditions and stage presentation.",
    tags: ["Live RJ", "Stage Presence", "Audience Dialogue", "104.8 FM"]
  },
  {
    id: 9,
    img: "extracted_images/page_09.jpg",
    title: "Vijay TV 'Neeya Naana' Best Speaker Award",
    category: "awards",
    categoryLabel: "State Honors & Awards",
    year: "Star Vijay",
    caption: "Awarded the prestigious Best Speaker prize by iconic host Gopinath on Vijay TV's flagship debate show 'Neeya Naana' for incisive reasoning and articulate speech.",
    tags: ["Vijay TV", "Neeya Naana", "Best Speaker", "Gopinath", "Prime Time"]
  },
  {
    id: 10,
    img: "extracted_images/page_10.jpg",
    title: "Ramya Subramanian 'STOP WEIGHTING' Book Launch PR",
    category: "pr",
    categoryLabel: "PR & Event Hosting",
    year: "Celebrity PR",
    caption: "Directing media relations, press invitations, and VIP photo opportunities for celebrity author Ramya Subramanian's fitness and wellness book launch.",
    tags: ["Ramya Subramanian", "Stop Weighting", "Celebrity PR", "Book Launch"]
  },
  {
    id: 11,
    img: "extracted_images/page_11.jpg",
    title: "VIP Press Meet & Author Coordination",
    category: "pr",
    categoryLabel: "PR & Event Hosting",
    year: "Event Media",
    caption: "Managing press photographers, video journalists, and high-profile guests at the official launch ceremony of 'STOP WEIGHTING'.",
    tags: ["Media Relations", "Press Briefing", "Celebrity Management"]
  },
  {
    id: 12,
    img: "extracted_images/page_12.jpg",
    title: "Puthiya Thalaimurai Newsroom Portrait",
    category: "broadcast",
    categoryLabel: "Television & Broadcast",
    year: "Newsroom",
    caption: "Studio portrait at Puthiya Thalaimurai TV newsroom during editorial internships, news gathering, and broadcast package editing.",
    tags: ["Puthiya Thalaimurai", "News Studio", "Editorial Newsroom", "TV Journalism"]
  },
  {
    id: 13,
    img: "extracted_images/page_13.jpg",
    title: "Ground Reporting & Citizen Field Interviews",
    category: "broadcast",
    categoryLabel: "Television & Broadcast",
    year: "Field Journalism",
    caption: "Investigative ground reporting on urban civic amenities, interviewing citizens on street conditions with professional field microphone.",
    tags: ["Field Reporting", "Microphone", "Street Interview", "Civic Journalism"]
  },
  {
    id: 14,
    img: "extracted_images/page_14.jpg",
    title: "Anand Radio 89.6 FM On-Air Studio Session",
    category: "radio",
    categoryLabel: "Radio & Audio Stage",
    year: "Community Radio",
    caption: "Broadcasting live and recording infotainment programs from the acoustics booth at Anand Radio 89.6 FM, voicing community issues.",
    tags: ["Anand Radio 89.6", "Acoustics Booth", "Voice Over", "Community Radio"]
  },
  {
    id: 15,
    img: "extracted_images/page_15.jpg",
    title: "Documentary Post-Production & Editing Suite",
    category: "broadcast",
    categoryLabel: "Television & Broadcast",
    year: "Video Production",
    caption: "Editing grassroots social documentary and short film projects on Mac workstations, cutting sequences and mastering audio-visual tracks.",
    tags: ["Post Production", "Final Cut Pro", "Film Editing", "Grassroots Docu"]
  },
  {
    id: 16,
    img: "extracted_images/page_16.jpg",
    title: "Anand Radio 89.6 FM Felicitation Ceremony",
    category: "radio",
    categoryLabel: "Radio & Audio Stage",
    year: "Broadcast Honor",
    caption: "Honored on stage by community radio leadership for impactful voice contributions and dedicated public health broadcasting.",
    tags: ["Anand Radio 89.6", "Stage Felicitation", "RJ Recognition"]
  },
  {
    id: 17,
    img: "extracted_images/page_17.jpg",
    title: "CSK & No Food Waste #ZEROFOODWASTEIPL at Chepauk",
    category: "civic",
    categoryLabel: "Climate & Civic Impact",
    year: "Chepauk Stadium",
    caption: "Leading the food rescue drive at M.A. Chidambaram Stadium during Chennai Super Kings IPL matches, diverting surplus cooked food to hungry citizens.",
    tags: ["CSK", "Chepauk Stadium", "No Food Waste", "Zero Food Waste IPL", "Sustainability"]
  },
  {
    id: 18,
    img: "extracted_images/page_18.jpg",
    title: "Dinathanthi Press Clipping: VGP Dance Award",
    category: "press",
    categoryLabel: "Print & Press Media",
    year: "Dinathanthi Press",
    caption: "Newspaper clipping from leading Tamil daily Dinathanthi reporting Janani's 3rd prize victory (₹10,000 branded audio system) at VGP Kingdom state dance contest.",
    tags: ["Dinathanthi", "Newspaper Feature", "VGP Kingdom", "Performing Arts"]
  },
  {
    id: 19,
    img: "extracted_images/page_19.jpg",
    title: "The News Minute Feature: Chepauk Food Rescue",
    category: "press",
    categoryLabel: "Print & Press Media",
    year: "The News Minute",
    caption: "National digital press coverage by The News Minute reporting the remarkable impact of the Zero Food Waste campaign spearheaded during IPL at Chepauk.",
    tags: ["The News Minute", "National Press", "IPL Food Rescue", "Media Feature"]
  },
  {
    id: 20,
    img: "extracted_images/page_20.jpg",
    title: "Canon India 'Creator Mode On with EOS R50' Host",
    category: "pr",
    categoryLabel: "PR & Event Hosting",
    year: "Canon India",
    caption: "Selected to emcee the prestigious Canon India technical workshop 'Creator Mode On with EOS R50', coordinating camera demonstrations for content creators.",
    tags: ["Canon India", "EOS R50", "Tech Event Host", "Emcee"]
  },
  {
    id: 21,
    img: "extracted_images/page_21.jpg",
    title: "Kalaignar TV 'Vaa Tamizha Vaa' Debate Panel",
    category: "broadcast",
    categoryLabel: "Television & Broadcast",
    year: "Kalaignar TV",
    caption: "Featured panelist debating key societal and environmental issues on Kalaignar TV's popular television debate show 'Vaa Tamizha Vaa'.",
    tags: ["Kalaignar TV", "Vaa Tamizha Vaa", "Debate Show", "Tamil TV"]
  },
  {
    id: 22,
    img: "extracted_images/page_22.jpg",
    title: "Vijay TV Prime-Time Debate Telecast Screen",
    category: "broadcast",
    categoryLabel: "Television & Broadcast",
    year: "Television",
    caption: "Live screen grab during prime-time broadcast on Vijay TV, highlighting Janani presenting factual arguments on screen.",
    tags: ["Vijay TV", "On-Screen", "Live Telecast", "Debate"]
  },
  {
    id: 23,
    img: "extracted_images/page_23.jpg",
    title: "TN Govt 'Kalviyai Kondaduvom' State Award Ceremony",
    category: "awards",
    categoryLabel: "State Honors & Awards",
    year: "Govt of Tamil Nadu",
    caption: "Stage felicitation receiving the state award for AI prompt creation and educational narrative in the Government of Tamil Nadu's 'Kalviyai Kondaduvom' initiative.",
    tags: ["Govt of Tamil Nadu", "Kalviyai Kondaduvom", "AI Prompting", "State Award"]
  },
  {
    id: 24,
    img: "extracted_images/page_24.jpg",
    title: "Community Forestry & Sapling Plantation Drive",
    category: "civic",
    categoryLabel: "Climate & Civic Impact",
    year: "Environmental Action",
    caption: "Hands-on participation in community tree planting initiatives in coastal Chennai, planting native saplings to enhance urban canopy and combat heat stress.",
    tags: ["Tree Plantation", "Green Chennai", "Urban Forestry", "Climate Action"]
  },
  {
    id: 25,
    img: "extracted_images/page_25.jpg",
    title: "Loyola College Executive Identity Card",
    category: "civic",
    categoryLabel: "Climate & Civic Impact",
    year: "Loyola College",
    caption: "Official student credential card at prestigious Loyola College, Chennai (Applied Journalism & Business Administration).",
    tags: ["Loyola College", "Applied Journalism", "MBA", "Academic Credentials"]
  },
  {
    id: 26,
    img: "extracted_images/page_26.jpg",
    title: "Hon'ble Minister Thiru M.P. Saminathan Awarding Janani",
    category: "awards",
    categoryLabel: "State Honors & Awards",
    year: "Ministerial Award",
    caption: "Hon'ble Minister for Information & Public Relations, Thiru M.P. Saminathan, personally presenting the state commendation certificate and award to Janani Priyanka.",
    tags: ["Minister M.P. Saminathan", "Govt of Tamil Nadu", "DIPR", "Official Felicitation"]
  },
  {
    id: 27,
    img: "extracted_images/page_27.jpg",
    title: "Sun News Broadcast Journalism & Field Reporting",
    category: "broadcast",
    categoryLabel: "Television & Broadcast",
    year: "Sun News",
    caption: "On ground news assignment equipped with Sun News mic kit and production accessories, capturing breaking news and civic developments.",
    tags: ["Sun News", "Broadcast Kit", "Field Journalist", "Television News"]
  },
  {
    id: 28,
    img: "extracted_images/page_28.jpg",
    title: "Academic Graduation & University Rank Portrait",
    category: "awards",
    categoryLabel: "State Honors & Awards",
    year: "Anna University",
    caption: "Formal academic portrait commemorating graduation and University Rank standing in M.Sc Electronic Media at Anna University.",
    tags: ["Anna University", "Rank Holder", "M.Sc Electronic Media", "Gold Standard"]
  }
];

// ==========================================================================
// 2. DOM INITIALIZATION & GALLERY RENDERING
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  renderGalleryGrid(galleryData);
  initGalleryFiltering();
  initLightbox();
  initCurvedReelsCarousel();
  initMetricsCounter();
  initAudioPlayer();
  initResumeModal();
  initContactForm();
  initScrollFeatures();
  initMobileMenu();
});

/**
 * Render all 28 items into the gallery grid
 */
function renderGalleryGrid(items) {
  const grid = document.getElementById("gallery-grid");
  if (!grid) return;

  grid.innerHTML = "";

  items.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "gallery-card";
    card.setAttribute("data-category", item.category);
    card.setAttribute("data-index", index);
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `View photograph ${item.id}: ${item.title}`);

    card.innerHTML = `
      <div class="gallery-thumb-wrap">
        <img src="${item.img}" alt="${item.title}" class="gallery-thumb" loading="lazy">
        <div class="gallery-thumb-overlay">
          <span class="photo-num-badge">#${item.id < 10 ? '0' + item.id : item.id} / 28</span>
          <span class="click-to-view-hint"><i class="fa-solid fa-expand"></i> Inspect</span>
        </div>
      </div>
      <div class="gallery-info">
        <div>
          <div class="gallery-cat-row">
            <span class="gallery-cat-pill cat-${item.category}">${item.categoryLabel}</span>
            <span class="gallery-year">${item.year}</span>
          </div>
          <h3 class="gallery-card-title">${item.title}</h3>
        </div>
        <p class="gallery-card-desc">${item.caption}</p>
      </div>
    `;

    // Click & Keyboard Enter event
    card.addEventListener("click", () => openLightbox(index));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightbox(index);
      }
    });

    grid.appendChild(card);
  });
}

// ==========================================================================
// 3. REAL-TIME GALLERY FILTERING
// ==========================================================================
let currentFilter = "all";

function initGalleryFiltering() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".gallery-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");

      const filterVal = btn.getAttribute("data-filter");
      currentFilter = filterVal;

      cards.forEach(card => {
        const cat = card.getAttribute("data-category");
        if (filterVal === "all" || cat === filterVal) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });
}

// ==========================================================================
// 4. FULLSCREEN INTERACTIVE LIGHTBOX (28 PHOTOS)
// ==========================================================================
let currentLightboxIndex = 0;
let isZoomed = false;

function initLightbox() {
  const modal = document.getElementById("lightbox-modal");
  const backdrop = document.getElementById("lightbox-backdrop");
  const closeBtn = document.getElementById("lightbox-close-btn");
  const prevBtn = document.getElementById("lightbox-prev");
  const nextBtn = document.getElementById("lightbox-next");
  const zoomBtn = document.getElementById("lightbox-zoom-btn");

  if (!modal) return;

  // Backdrop click to close
  backdrop.addEventListener("click", closeLightbox);
  closeBtn.addEventListener("click", closeLightbox);

  // Prev / Next Buttons
  prevBtn.addEventListener("click", () => navigateLightbox(-1));
  nextBtn.addEventListener("click", () => navigateLightbox(1));

  // Zoom button toggle
  zoomBtn.addEventListener("click", toggleZoom);

  // Image click to toggle zoom
  const lightboxImg = document.getElementById("lightbox-image");
  lightboxImg.addEventListener("click", toggleZoom);

  // Keyboard Navigation for Lightbox & Resume Modal
  window.addEventListener("keydown", (e) => {
    if (modal.classList.contains("active")) {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigateLightbox(-1);
      if (e.key === "ArrowRight") navigateLightbox(1);
    }
    const resumeModal = document.getElementById("resume-modal");
    if (resumeModal && resumeModal.classList.contains("active")) {
      if (e.key === "Escape") {
        resumeModal.classList.remove("active");
        resumeModal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
      }
    }
  });

  // Touch Swipe for mobile
  let touchStartX = 0;
  let touchEndX = 0;

  modal.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  modal.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
      navigateLightbox(1); // Swipe left -> Next
    } else if (touchEndX > touchStartX + swipeThreshold) {
      navigateLightbox(-1); // Swipe right -> Prev
    }
  }
}

function openLightbox(index) {
  const modal = document.getElementById("lightbox-modal");
  if (!modal) return;

  currentLightboxIndex = index;
  updateLightboxContent(galleryData[index]);

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden"; // Prevent background scroll
}

function closeLightbox() {
  const modal = document.getElementById("lightbox-modal");
  if (!modal) return;

  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  // Reset zoom
  resetZoom();
}

function navigateLightbox(direction) {
  currentLightboxIndex += direction;
  if (currentLightboxIndex < 0) {
    currentLightboxIndex = galleryData.length - 1;
  } else if (currentLightboxIndex >= galleryData.length) {
    currentLightboxIndex = 0;
  }

  resetZoom();
  updateLightboxContent(galleryData[currentLightboxIndex]);
}

function updateLightboxContent(item) {
  const imgEl = document.getElementById("lightbox-image");
  const titleEl = document.getElementById("lightbox-title");
  const captionEl = document.getElementById("lightbox-caption");
  const counterEl = document.getElementById("lightbox-counter");
  const catBadgeEl = document.getElementById("lightbox-cat-badge");
  const downloadBtn = document.getElementById("lightbox-download-btn");
  const tagsContainer = document.getElementById("lightbox-tags");

  imgEl.src = item.img;
  imgEl.alt = item.title;
  titleEl.textContent = item.title;
  captionEl.textContent = item.caption;
  counterEl.textContent = `Photo ${item.id} of ${galleryData.length}`;
  catBadgeEl.textContent = item.categoryLabel;
  catBadgeEl.className = `lightbox-cat-badge cat-${item.category}`;

  downloadBtn.href = item.img;
  downloadBtn.download = `Janani_Priyanka_Archive_${item.id}.jpg`;

  // Render tags
  tagsContainer.innerHTML = "";
  item.tags.forEach(tag => {
    const tagEl = document.createElement("span");
    tagEl.className = "lightbox-tag";
    tagEl.textContent = `#${tag}`;
    tagsContainer.appendChild(tagEl);
  });
}

function toggleZoom() {
  const imgEl = document.getElementById("lightbox-image");
  const zoomIcon = document.getElementById("zoom-icon");

  isZoomed = !isZoomed;
  if (isZoomed) {
    imgEl.classList.add("zoomed");
    zoomIcon.className = "fa-solid fa-magnifying-glass-minus";
  } else {
    imgEl.classList.remove("zoomed");
    zoomIcon.className = "fa-solid fa-magnifying-glass-plus";
  }
}

function resetZoom() {
  isZoomed = false;
  const imgEl = document.getElementById("lightbox-image");
  const zoomIcon = document.getElementById("zoom-icon");
  if (imgEl) imgEl.classList.remove("zoomed");
  if (zoomIcon) zoomIcon.className = "fa-solid fa-magnifying-glass-plus";
}

// ==========================================================================
// 5. ANIMATED METRICS COUNTER
// ==========================================================================
function initMetricsCounter() {
  const counterElements = document.querySelectorAll(".metric-number");
  if (!counterElements.length) return;

  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        counterElements.forEach(el => animateSingleCounter(el));
      }
    });
  }, { threshold: 0.3 });

  const metricsSection = document.querySelector(".metrics-container");
  if (metricsSection) {
    observer.observe(metricsSection);
  }
}

function animateSingleCounter(el) {
  const target = parseInt(el.getAttribute("data-target"), 10) || 0;
  const duration = 1800; // 1.8 seconds
  const stepTime = 25;
  const steps = duration / stepTime;
  const increment = target / steps;
  let current = 0;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      el.textContent = target;
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(current);
    }
  }, stepTime);
}

// ==========================================================================
// 6. SIMULATED AUDIO & RADIO EQUALIZER
// ==========================================================================
function initAudioPlayer() {
  const toggle1 = document.getElementById("audio-play-toggle-1");
  const toggle2 = document.getElementById("audio-play-toggle-2");

  if (toggle1) {
    toggle1.addEventListener("click", () => {
      const card = toggle1.closest(".audio-player-card");
      const icon = document.getElementById("play-icon-1");
      const isPlaying = card.classList.toggle("is-playing");

      if (isPlaying) {
        icon.className = "fa-solid fa-pause";
      } else {
        icon.className = "fa-solid fa-play";
      }
    });
  }

  if (toggle2) {
    toggle2.addEventListener("click", () => {
      const card = toggle2.closest(".audio-player-card");
      const icon = document.getElementById("play-icon-2");
      const isPlaying = card.classList.toggle("is-playing");

      if (isPlaying) {
        icon.className = "fa-solid fa-pause";
      } else {
        icon.className = "fa-solid fa-play";
      }
    });
  }
}

// ==========================================================================
// 7. RESUME MODAL & PAGE TOGGLE
// ==========================================================================
function initResumeModal() {
  const resumeBtn = document.getElementById("resume-btn");
  const quickResumeBtn = document.getElementById("quick-resume-btn");
  const resumeModal = document.getElementById("resume-modal");
  const backdrop = document.getElementById("resume-backdrop");
  const closeBtn = document.getElementById("resume-close-btn");
  const tabBtns = document.querySelectorAll(".resume-tab-btn");
  const viewImg = document.getElementById("resume-view-img");

  if (!resumeModal) return;

  function openResume() {
    resumeModal.classList.add("active");
    resumeModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeResume() {
    resumeModal.classList.remove("active");
    resumeModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  if (resumeBtn) resumeBtn.addEventListener("click", openResume);
  if (quickResumeBtn) quickResumeBtn.addEventListener("click", openResume);
  if (backdrop) backdrop.addEventListener("click", closeResume);
  if (closeBtn) closeBtn.addEventListener("click", closeResume);

  // Tab switching between Page 1 and Page 2
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const page = btn.getAttribute("data-page");
      if (page === "1") {
        viewImg.src = "extracted_images/resume_p1.jpg";
      } else {
        viewImg.src = "extracted_images/resume_p2.jpg";
      }
    });
  });
}

// ==========================================================================
// 8. CONTACT FORM → WHATSAPP DEEP-LINK COMPOSER
// ==========================================================================
function initContactForm() {
  const form = document.getElementById("portfolio-contact-form");
  const feedback = document.getElementById("form-feedback");
  const submitBtn = document.getElementById("form-submit-btn");

  const WA_NUMBER = "919600379504"; // Janani's WhatsApp number (country code + number)

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name    = document.getElementById("contact-name").value.trim();
      const contact = document.getElementById("contact-email").value.trim();
      const subject = document.getElementById("contact-subject").value;
      const message = document.getElementById("contact-message").value.trim();

      // Validate required fields
      if (!name || !subject || !message) {
        showFeedback("Please fill in your name, topic, and message.", false);
        return;
      }

      // Compose a natural WhatsApp message from the form fields
      const lines = [
        `Hi Janani! 👋 I came across your portfolio and would like to connect.`,
        ``,
        `*Name:* ${name}`,
        contact ? `*Contact:* ${contact}` : null,
        `*Topic:* ${subject}`,
        ``,
        `*Message:*`,
        message,
        ``,
        `Looking forward to hearing from you!`
      ].filter(l => l !== null).join("\n");

      const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines)}`;

      // Show spinning state briefly for tactile feedback
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> <span>Opening WhatsApp…</span>';

      setTimeout(() => {
        // Open WhatsApp link
        const popup = window.open(waUrl, "_blank", "noopener,noreferrer");

        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fa-brands fa-whatsapp"></i> <span>Send on WhatsApp</span> <i class="fa-solid fa-arrow-up-right-from-square" style="font-size:0.82em;opacity:0.7;"></i>';

        if (popup) {
          // Successfully opened — show a friendly confirmation
          showFeedback(
            `✅ WhatsApp opened with your message, ${name}! If it didn't open, <a href="${waUrl}" target="_blank" rel="noopener" style="color:#25d366;font-weight:700;">click here</a>.`,
            true
          );
        } else {
          // Popup blocked — give user a direct link
          showFeedback(
            `Your browser blocked the popup. <a href="${waUrl}" target="_blank" rel="noopener" style="color:#25d366;font-weight:700;">Tap here to open WhatsApp</a> with your pre-filled message.`,
            true
          );
        }

        form.reset();
      }, 600);
    });
  }

  function showFeedback(msg, isSuccess) {
    if (!feedback) return;
    feedback.innerHTML = msg;
    feedback.className = `form-feedback ${isSuccess ? 'success' : 'error'}`;
    feedback.style.display = "block";
    feedback.scrollIntoView({ behavior: "smooth", block: "nearest" });

    setTimeout(() => {
      feedback.style.display = "none";
    }, 12000);
  }

  // Copy-to-clipboard buttons
  const copyButtons = document.querySelectorAll(".copy-btn");
  copyButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const textToCopy = btn.getAttribute("data-copy");
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        const originalIcon = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-check" style="color: var(--saffron-400);"></i>';
        btn.setAttribute("title", "Copied to clipboard!");

        setTimeout(() => {
          btn.innerHTML = originalIcon;
          btn.removeAttribute("title");
        }, 2000);
      }).catch(err => {
        console.error("Failed to copy:", err);
      });
    });
  });
}


// ==========================================================================
// 9. SCROLL PROGRESS, ACTIVE NAV & BACK TO TOP
// ==========================================================================
function initScrollFeatures() {
  const progressBar = document.getElementById("scroll-progress");
  const navbar = document.getElementById("navbar");
  const backToTopBtn = document.getElementById("back-to-top");
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollY / scrollHeight) * 100;

    // Update progress bar
    if (progressBar) {
      progressBar.style.width = `${progress}%`;
    }

    // Header shadow on scroll
    if (navbar) {
      if (scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }

    // Active nav link highlight
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }, { passive: true });

  // Back to top button
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
}

// ==========================================================================
// 10. MOBILE MENU TOGGLE
// ==========================================================================
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobile-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    toggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      toggleBtn.setAttribute("aria-expanded", "false");
    });
  });
}

// ==========================================================================
// 11. CURVED DRAGGABLE VIDEO REELS CAROUSEL (CYLINDRICAL ARCH MATHEMATICS)
// ==========================================================================
const broadcastReelsData = [
  {
    id: 27,
    galleryIndex: 26,
    title: "Sun News Live Ground Journalism",
    role: "Broadcast Reporter",
    channel: "Sun News",
    img: "extracted_images/page_27.jpg"
  },
  {
    id: 9,
    galleryIndex: 8,
    title: "Vijay TV 'Neeya Naana' Best Speaker",
    role: "Best Speaker Awardee",
    channel: "Star Vijay",
    img: "extracted_images/page_09.jpg"
  },
  {
    id: 21,
    galleryIndex: 20,
    title: "Kalaignar TV 'Vaa Tamizha Vaa'",
    role: "Debate Panelist",
    channel: "Kalaignar TV",
    img: "extracted_images/page_21.jpg"
  },
  {
    id: 5,
    galleryIndex: 4,
    title: "Zee Tamil HD Prime-Time Panel",
    role: "Televised Panelist",
    channel: "Zee Tamil",
    img: "extracted_images/page_05.jpg"
  },
  {
    id: 12,
    galleryIndex: 11,
    title: "Puthiya Thalaimurai Studios",
    role: "Journalism Production",
    channel: "PT News",
    img: "extracted_images/page_12.jpg"
  },
  {
    id: 14,
    galleryIndex: 13,
    title: "Anand Radio 89.6 FM Booth",
    role: "Radio Jockey & Voice",
    channel: "Anand Radio",
    img: "extracted_images/page_14.jpg"
  },
  {
    id: 7,
    galleryIndex: 6,
    title: "ChennaiLive 104.8 FM RJ Hunt",
    role: "Stage Emcee Finalist",
    channel: "104.8 FM",
    img: "extracted_images/page_07.jpg"
  },
  {
    id: 17,
    galleryIndex: 16,
    title: "CSK Chepauk #ZeroFoodWasteIPL",
    role: "Stadium Campaign Lead",
    channel: "Chepauk IPL",
    img: "extracted_images/page_17.jpg"
  },
  {
    id: 20,
    galleryIndex: 19,
    title: "Canon India EOS R50 Creator Summit",
    role: "Official Emcee & Host",
    channel: "Canon India",
    img: "extracted_images/page_20.jpg"
  },
  {
    id: 26,
    galleryIndex: 25,
    title: "Hon'ble Minister M.P. Saminathan Award",
    role: "State Awardee",
    channel: "Govt of TN",
    img: "extracted_images/page_26.jpg"
  }
];

function initCurvedReelsCarousel() {
  const carouselStage = document.getElementById("reels-carousel-stage");
  const track = document.getElementById("reels-cards-track");
  if (!carouselStage || !track) return;

  const NUM_CARDS = broadcastReelsData.length;
  const PITCH = 196;
  const TOTAL_LOOP_WIDTH = NUM_CARDS * PITCH;

  let u = 1;
  let scrollOffset = 0;
  let autoSpeed = 38; // right-to-left auto-scroll speed
  let isDragging = false;
  let startX = 0;
  let dragStartOffset = 0;
  let lastDragX = 0;
  let lastDragTime = 0;
  let velocity = 0;
  let dragDistance = 0;

  function updateScale() {
    const stageWidth = carouselStage.offsetWidth || 1200;
    u = Math.min(stageWidth / 1440, 1.0);
    if (u < 0.65) u = 0.65;
  }
  updateScale();
  window.addEventListener("resize", updateScale);

  // Render cards
  track.innerHTML = "";
  const cardElements = [];

  broadcastReelsData.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "reels-card-item";
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `Watch ${item.title}`);

    card.innerHTML = `
      <div class="reels-card-media-wrap">
        <img src="${item.img}" alt="${item.title}" class="reels-card-img" loading="lazy">
        <div class="reels-card-overlay">
          <span class="reels-channel-tag">${item.channel}</span>
          <div class="reels-card-info">
            <h4 class="reels-card-title">${item.title}</h4>
            <span class="reels-card-role">${item.role}</span>
          </div>
          <div class="reels-play-badge"><i class="fa-solid fa-play"></i></div>
        </div>
      </div>
    `;

    // Click handler to open verified Lightbox
    card.addEventListener("click", () => {
      if (Math.abs(dragDistance) < 6) {
        openLightbox(item.galleryIndex);
      }
    });

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightbox(item.galleryIndex);
      }
    });

    track.appendChild(card);
    cardElements.push({ el: card, index });
  });

  // Cylindrical Curve Mathematical Projection
  function updateCardGeometry(cardObj) {
    const i = cardObj.index;
    const stageWidth = carouselStage.offsetWidth || 1200;
    const centerX = stageWidth / 2;

    const rawPos = (i * PITCH * u - scrollOffset);
    const loopWidthPx = TOTAL_LOOP_WIDTH * u;
    const halfLoopPx = loopWidthPx / 2;

    let t = ((rawPos % loopWidthPx) + loopWidthPx) % loopWidthPx;
    if (t > halfLoopPx) t -= loopWidthPx;

    const denom = 706 * u;
    const d = Math.abs(t) / denom;

    // Outward pushed center: x = center + t * (1 + 0.083 * (t / 706)^2)
    const pushedX = centerX + t * (1 + 0.083 * Math.pow(d, 2));

    // Width: (170 + 48 * d^2) * u
    const cardWidthPx = (170 + 48 * Math.pow(d, 2)) * u;
    const leftPx = pushedX - cardWidthPx / 2;
    const rightPx = pushedX + cardWidthPx / 2;

    const qL = Math.abs(leftPx - centerX) / denom;
    const qR = Math.abs(rightPx - centerX) / denom;

    // Edge heights: (280 + 92 * q^2.6) * u
    const hLeftPx = (280 + 92 * Math.pow(qL, 2.6)) * u;
    const hRightPx = (280 + 92 * Math.pow(qR, 2.6)) * u;

    const hMaxPx = Math.max(hLeftPx, hRightPx);
    // Vertical center: (687 - 12 * d^2) * u scaled to container
    const yCenterPx = (carouselStage.offsetHeight / 2) - (12 * Math.pow(d, 2)) * u;
    const topPx = yCenterPx - hMaxPx / 2;

    cardObj.el.style.transform = `translate3d(${leftPx}px, ${topPx}px, 0)`;
    cardObj.el.style.width = `${cardWidthPx}px`;
    cardObj.el.style.height = `${hMaxPx}px`;

    // 15u rounded corners on cylindrical sloped quad (clip-path: path())
    const rPx = 15 * u;
    const wP = cardWidthPx;
    const yTL = ((hMaxPx - hLeftPx) / 2);
    const yBL = (hMaxPx - (hMaxPx - hLeftPx) / 2);
    const yTR = ((hMaxPx - hRightPx) / 2);
    const yBR = (hMaxPx - (hMaxPx - hRightPx) / 2);

    const pathStr = `path('M ${rPx} ${yTL} L ${wP - rPx} ${yTR} Q ${wP} ${yTR} ${wP} ${yTR + rPx} L ${wP} ${yBR - rPx} Q ${wP} ${yBR} ${wP - rPx} ${yBR} L ${rPx} ${yBL} Q 0 ${yBL} 0 ${yBL - rPx} L 0 ${yTL + rPx} Q 0 ${yTL} ${rPx} ${yTL} Z')`;
    cardObj.el.style.clipPath = pathStr;
  }

  // Animation Loop with Inertia Decay
  let lastTime = performance.now();

  function animateLoop(now) {
    requestAnimationFrame(animateLoop);
    const dt = Math.min((now - lastTime) / 1000, 0.1);
    lastTime = now;

    if (!isDragging) {
      if (Math.abs(velocity) > 0.5) {
        scrollOffset += velocity * dt;
        velocity *= Math.pow(0.05, dt); // ~95% decay per second
      } else {
        scrollOffset += autoSpeed * dt;
      }
    }

    const loopWidthPx = TOTAL_LOOP_WIDTH * u;
    scrollOffset = ((scrollOffset % loopWidthPx) + loopWidthPx) % loopWidthPx;

    cardElements.forEach(cardObj => updateCardGeometry(cardObj));
  }
  requestAnimationFrame(animateLoop);

  // Pointer & Touch Drag Handlers
  function onPointerDown(e) {
    isDragging = true;
    dragDistance = 0;
    startX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    dragStartOffset = scrollOffset;
    lastDragX = startX;
    lastDragTime = performance.now();
    velocity = 0;
    carouselStage.classList.add("is-dragging");
  }

  function onPointerMove(e) {
    if (!isDragging) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const delta = clientX - startX;
    dragDistance = delta;
    scrollOffset = dragStartOffset - delta;

    const now = performance.now();
    const dt = (now - lastDragTime) / 1000;
    if (dt > 0.01) {
      velocity = -((clientX - lastDragX)) / dt;
      lastDragX = clientX;
      lastDragTime = now;
    }
  }

  function onPointerUp() {
    if (!isDragging) return;
    isDragging = false;
    carouselStage.classList.remove("is-dragging");
  }

  carouselStage.addEventListener("mousedown", onPointerDown);
  window.addEventListener("mousemove", onPointerMove);
  window.addEventListener("mouseup", onPointerUp);

  carouselStage.addEventListener("touchstart", onPointerDown, { passive: true });
  window.addEventListener("touchmove", onPointerMove, { passive: true });
  window.addEventListener("touchend", onPointerUp, { passive: true });
}

