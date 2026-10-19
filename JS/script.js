(() => {
  "use strict";

  window.handleImgError = (img) => {
    if (!img) return;
    img.onerror = null;
    img.src = "images/kund-malir-beach.jpg";
  };

  window.handleContactSubmit = () => {
    const name = document.getElementById("contactName")?.value.trim() || "";
    const status = document.getElementById("contactFormStatus");
    const form = document.getElementById("contactInquiryForm");
    if (!status || !form) return;

    status.textContent = `Thank you, ${name}! Your inquiry has been sent to our VIP concierge.`;
    form.reset();
    setTimeout(() => {
      status.textContent = "";
    }, 6000);
  };

  const initContactRating = () => {
    const stars = document.querySelectorAll("#ratingStars i");
    const label = document.getElementById("ratingLabel");
    const ratings = [
      "",
      "1 Star (Poor)",
      "2 Stars (Fair)",
      "3 Stars (Good)",
      "4 Stars (Very Good)",
      "5 Stars (Excellent)",
    ];

    stars.forEach((star) => {
      star.addEventListener("click", () => {
        const rating = Number(star.dataset.rating);
        stars.forEach((item) => {
          item.className =
            Number(item.dataset.rating) <= rating
              ? "fa-solid fa-star"
              : "fa-regular fa-star";
        });
        if (label) label.textContent = ratings[rating] || "";
      });
    });
  };

  const PACKAGE_CATALOG = {
    kund_malir: {
      name: "Kund Malir & Hingol 2-Day Camping Safari",
      destination: "Kund Malir Beach, Balochistan",
      category: "pakistan",
      price: 18500,
      pricingType: "person",
      nights: "2 Days / 1 Night",
      img: "images/kund-malir-beach.jpg",
      badge: "Pakistan's Crown Jewel",
      tags: ["Makran Coast", "Desert Shore", "Camping"],
      waterTemp: "25°C",
      bestSeason: "Oct – Mar",
      crowdLevel: "Low / Tranquil",
      desc: "Where the rugged golden desert of the Makran Highway meets the pristine turquoise waters of the Arabian Sea. Enjoy stargazing camps and coastal tranquility.",
      tips: "Drive during daylight along the Makran Coastal Highway. Bring stargazing cameras for pitch-black, crystal night skies.",
    },
    hawkesbay_hut: {
      name: "Hawkesbay Luxury Private Beach Hut (Full Day)",
      destination: "Hawkesbay Beach, Karachi",
      category: "pakistan",
      price: 28000,
      pricingType: "group",
      nights: "Full Day (12 Hours)",
      img: "images/hawkesbay-beach.jpg",
      badge: "Private VIP Chalet",
      tags: ["Karachi Coast", "Chalet", "Sunset"],
      waterTemp: "26°C",
      bestSeason: "Year Round",
      crowdLevel: "Exclusive",
      desc: "Double-story beachfront chalet on Hawkesbay shore with generator power, furnished lounge, private terrace, and freshwater amenities.",
      tips: "Afternoon sea breezes offer optimal swimming conditions from 3 PM onwards.",
    },
    gwadar_tour: {
      name: "Gwadar & Hammerhead 3-Day Coastal Tour",
      destination: "Gwadar Peninsula, Balochistan",
      category: "pakistan",
      price: 42000,
      pricingType: "person",
      nights: "3 Days / 2 Nights",
      img: "images/photo-1507525428034-b723cf961d3e.jpg",
      badge: "Peninsular Marvel",
      tags: ["Hammerhead", "Marine Drive", "Speedboat"],
      waterTemp: "26°C",
      bestSeason: "Nov – Feb",
      crowdLevel: "Moderate",
      desc: "Dramatic oceanic peninsula defined by Koh-e-Batil cliffs, luxury beachfront promenades along Marine Drive, and exhilarating sunset dolphin boat tours.",
      tips: "Book sunset speedboats around Koh-e-Batil to spot pods of Arabian Sea dolphins.",
    },
    astola_island: {
      name: "Astola Island Scuba Diving & Eco Tour (3 Days)",
      destination: "Astola Island (Haft Talar), Balochistan",
      category: "pakistan",
      price: 35000,
      pricingType: "person",
      nights: "3 Days / 2 Nights",
      img: "images/gallery-coast-08.jpg",
      badge: "Eco Marine Reserve",
      tags: ["Astola Island", "Scuba Diving", "Coral Reef"],
      waterTemp: "24°C",
      bestSeason: "Nov – Mar",
      crowdLevel: "Restricted / Very Low",
      desc: "Pakistan's largest offshore island and Marine Protected Area. Crystal turquoise waters with coral reefs, green turtle nesting sites, and deep-sea diving.",
      tips: "Permits are strictly regulated. Ensure all diving gear is checked with our PADI-certified team in Pasni.",
    },
    french_beach: {
      name: "French Beach Karachi Private Chalet (Full Day)",
      destination: "French Beach (Haji Ismail Goth), Karachi",
      category: "pakistan",
      price: 35000,
      pricingType: "group",
      nights: "Full Day (12 Hours)",
      img: "images/gallery-coast-07.jpg",
      badge: "Exclusive Private Cove",
      tags: ["Rocky Shore", "Snorkeling", "Private Club"],
      waterTemp: "25°C",
      bestSeason: "Oct – Apr",
      crowdLevel: "Gated / Exclusive",
      desc: "Karachi’s most exclusive gated coastal enclave. Rocky pools, crystal waters, and private stone huts away from urban hustle.",
      tips: "Access is restricted to authorized vehicles. Gate passes are verified 24h prior.",
    },
    clifton_evening: {
      name: "Clifton Seaview Sunset & Dinner Tour",
      destination: "Clifton Beach, Karachi",
      category: "pakistan",
      price: 4500,
      pricingType: "person",
      nights: "Evening Tour (5 Hours)",
      img: "images/clifton-beach.jpg",
      badge: "Metropolitan Seaside",
      tags: ["Seaview", "Camel Ride", "Evening Stroll"],
      waterTemp: "26°C",
      bestSeason: "Oct – Mar",
      crowdLevel: "High / Vibrant",
      desc: "The beating pulse of Karachi’s coastline. Enjoy horse and camel rides across wide sandbanks, refreshing seaside breezes, and street tea by sunset.",
      tips: "The best atmosphere is between 4:30 PM and 7:00 PM when the sea breeze picks up.",
    },
    ormara_beach: {
      name: "Ormara Beach Bioluminescent Escape (2 Days)",
      destination: "Ormara Beach, Balochistan",
      category: "pakistan",
      price: 22000,
      pricingType: "person",
      nights: "2 Days / 1 Night",
      img: "images/gallery-coast-01.jpg",
      badge: "Untouched Haven",
      tags: ["Bioluminescence", "White Sand", "Quiet Cove"],
      waterTemp: "26°C",
      bestSeason: "Nov – Feb",
      crowdLevel: "Very Low / Exclusive",
      desc: "Famous for quiet crescent-shaped bays, pure white sandbars, and nighttime bioluminescent waves that glow like stars along the shoreline.",
      tips: "Visit during a new moon night to witness the magical neon-blue glow of bioluminescent phytoplankton in the surf.",
    },
    maldives_resort: {
      name: "Maldives Luxury Overwater Villa (5 Days)",
      destination: "North Malé Atoll, Maldives",
      category: "international",
      price: 380000,
      pricingType: "couple",
      nights: "5 Days / 4 Nights",
      img: "images/photo-1514282401047-d79a71a590e8.jpg",
      badge: "Ultimate Luxury Lagoon",
      tags: ["Overwater Villa", "Manta Reef", "VIP Spa"],
      waterTemp: "29°C",
      bestSeason: "Dec – Apr",
      crowdLevel: "Secluded / VIP",
      desc: "World-renowned private atolls offering overwater bungalows suspended over crystal lagoons. Snorkel alongside majestic manta rays and sea turtles.",
      tips: "Complimentary seaplane transfer is included with this reservation.",
    },
    thailand_phiphi: {
      name: "Thailand Phi Phi & Railay Island-Hopping (6 Days)",
      destination: "Phi Phi Islands & Krabi, Thailand",
      category: "international",
      price: 215000,
      pricingType: "person",
      nights: "6 Days / 5 Nights",
      img: "images/photo-1500375592092-40eb2168fd21.jpg",
      badge: "Tropical Island Odyssey",
      tags: ["Maya Bay", "Longtail Boat", "Limestone Cliffs"],
      waterTemp: "29°C",
      bestSeason: "Nov – Apr",
      crowdLevel: "Moderate",
      desc: "Limestone cliffs rising out of turquoise Andaman waters, iconic longtail boat tours into Maya Bay, and vibrant sunset snorkeling.",
      tips: "Early morning speedboat slots bypass day-tripper boats at Maya Bay.",
    },
    borabora_lagoon: {
      name: "Bora Bora Polynesian Romantic Lagoon (7 Days)",
      destination: "Bora Bora, French Polynesia",
      category: "international",
      price: 490000,
      pricingType: "person",
      nights: "7 Days / 6 Nights",
      img: "images/photo-1540202404-a2f29016b523.jpg",
      badge: "South Pacific Jewel",
      tags: ["Mount Otemanu", "Lagoon Safari", "Ultra-Luxury"],
      waterTemp: "28°C",
      bestSeason: "May – Oct",
      crowdLevel: "Intimate / Luxury",
      desc: "The epitome of Polynesian luxury with iconic Mount Otemanu rising above multicolored turquoise waters and reef lagoons.",
      tips: "Includes breakfast served via outrigger canoe to your villa sundeck.",
    },
    santorini_caldera: {
      name: "Santorini Caldera & Oia Sunset Odyssey (6 Days)",
      destination: "Santorini, Cyclades, Greece",
      category: "international",
      price: 350000,
      pricingType: "person",
      nights: "6 Days / 5 Nights",
      img: "images/gallery-coast-04.jpg",
      badge: "Volcanic Aegean Splendor",
      tags: ["Aegean Sea", "Red Beach", "Oia Sunset"],
      waterTemp: "24°C",
      bestSeason: "May – Oct",
      crowdLevel: "Moderate to High",
      desc: "Breathtaking volcanic cliffs adorned with iconic whitewashed villas, deep blue domes, Red Beach geological wonders, and legendary caldera sunset cruises.",
      tips: "Take a private catamaran cruise at sunset to view the Red Beach and White Beach cliffs.",
    },
    bali_uluwatu: {
      name: "Bali Uluwatu Cliff & Reef Surf Expedition (5 Days)",
      destination: "Uluwatu, Bali, Indonesia",
      category: "international",
      price: 185000,
      pricingType: "person",
      nights: "5 Days / 4 Nights",
      img: "images/gallery-coast-05.jpg",
      badge: "Tropical Surf Sanctuary",
      tags: ["Reef Surf", "Uluwatu Cliffs", "Beach Clubs"],
      waterTemp: "28°C",
      bestSeason: "Apr – Oct",
      crowdLevel: "Moderate",
      desc: "Stunning limestone sea cliffs, world-class coral reef breaks, tranquil spiritual retreats, and vibrant oceanfront day clubs overlooking the Indian Ocean.",
      tips: "Head down the cliff steps to Thomas Beach for secluded rock caverns.",
    },
    whitehaven_cruise: {
      name: "Whitehaven Beach & Great Barrier Reef (6 Days)",
      destination: "Whitsunday Islands, Australia",
      category: "international",
      price: 410000,
      pricingType: "person",
      nights: "6 Days / 5 Nights",
      img: "images/whitehaven-beach.jpg",
      badge: "Pure Silica Sands",
      tags: ["Great Barrier Reef", "Silica Sand", "Catamaran"],
      waterTemp: "26°C",
      bestSeason: "Sep – Nov",
      crowdLevel: "Low",
      desc: "98% pure white silica sands that remain cool underfoot, paired with seaplane scenic flights over the world-famous Heart Reef.",
      tips: "Hill Inlet lookout at mid-tide offers swirling turquoise sand patterns.",
    },
  };

  const findPackageKey = (beachName) => {
    if (!beachName) return "kund_malir";
    const lower = beachName.toLowerCase();
    for (const [key, pkg] of Object.entries(PACKAGE_CATALOG)) {
      if (
        pkg.name.toLowerCase().includes(lower) ||
        pkg.destination.toLowerCase().includes(lower)
      ) {
        return key;
      }
    }
    if (lower.includes("kund") || lower.includes("malir")) return "kund_malir";
    if (lower.includes("hawke")) return "hawkesbay_hut";
    if (lower.includes("gwadar")) return "gwadar_tour";
    if (lower.includes("astola")) return "astola_island";
    if (lower.includes("french")) return "french_beach";
    if (lower.includes("clifton")) return "clifton_evening";
    if (lower.includes("ormara")) return "ormara_beach";
    if (lower.includes("maldives")) return "maldives_resort";
    if (lower.includes("phiphi") || lower.includes("thailand"))
      return "thailand_phiphi";
    if (lower.includes("bora")) return "borabora_lagoon";
    if (lower.includes("santorini")) return "santorini_caldera";
    if (lower.includes("bali")) return "bali_uluwatu";
    if (lower.includes("whitehaven")) return "whitehaven_cruise";
    return "kund_malir";
  };

  let surfingLottieAnim = null;

  const initSurfingPreloader = () => {
    const container = document.getElementById("surfingLottieContainer");
    const wrapper = container
      ? container.closest(".surfing-lottie-wrapper")
      : null;
    if (!container) return;

    if (window.lottie) {
      try {
        const animConfig = {
          container: container,
          renderer: "svg",
          loop: true,
          autoplay: true,
        };

        if (window.SURFING_LOTTIE_DATA) {
          animConfig.animationData = window.SURFING_LOTTIE_DATA;
          surfingLottieAnim = window.lottie.loadAnimation(animConfig);
        } else {
          animConfig.path = "animations/surfing.json";
          surfingLottieAnim = window.lottie.loadAnimation(animConfig);
        }
      } catch (err) {
        console.warn("Lottie player note:", err);
        if (wrapper) wrapper.classList.add("is-fallback");
      }
    } else {
      if (wrapper) wrapper.classList.add("is-fallback");
    }

    const statusPhrase = document.querySelector(".preloader-status-phrase");
    if (statusPhrase) {
      const phrases = [
        "Catching the perfect wave...",
        "Scouting turquoise waters...",
        "Preparing VIP beach chalets...",
        "Paradise is ready.",
      ];
      let pIdx = 0;
      window._preloaderInterval = setInterval(() => {
        pIdx = (pIdx + 1) % phrases.length;
        statusPhrase.textContent = phrases[pIdx];
      }, 700);
    }
  };

  const handlePreloader = () => {
    const preloader = document.getElementById("preloader");
    if (preloader && !preloader.classList.contains("fade-out")) {
      setTimeout(() => {
        if (window._preloaderInterval) clearInterval(window._preloaderInterval);
        preloader.classList.add("fade-out");
        setTimeout(() => {
          if (surfingLottieAnim) {
            try {
              surfingLottieAnim.destroy();
            } catch (e) {}
          }
          preloader.remove();
        }, 600);
      }, 950);
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSurfingPreloader);
  } else {
    initSurfingPreloader();
  }

  if (document.readyState === "complete") {
    handlePreloader();
  } else {
    window.addEventListener("load", handlePreloader);
    setTimeout(handlePreloader, 3200);
  }

  const initVideoAutoplay = () => {
    const videos = document.querySelectorAll(
      "#heroBgVideo, .page-header-banner-video",
    );
    if (!videos.length) return;

    videos.forEach((video) => {
      video.muted = true;
      video.defaultMuted = true;
      video.loop = true;
      video.autoplay = true;
      video.setAttribute("muted", "");
      video.setAttribute("autoplay", "");
      video.setAttribute("loop", "");
      video.setAttribute("playsinline", "");
      video.setAttribute("webkit-playsinline", "");

      const playVideo = () => {
        video.muted = true;
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch((err) => {
            console.debug("Autoplay waiting for first touch/interaction:", err);
          });
        }
      };

      playVideo();

      video.addEventListener("loadeddata", playVideo);
      video.addEventListener("canplay", playVideo);
      video.addEventListener("canplaythrough", playVideo);

      video.addEventListener("ended", () => {
        video.currentTime = 0;
        playVideo();
      });

      const startOnFirstInteraction = () => {
        if (video.paused) {
          playVideo();
        }
      };
      ["click", "touchstart", "scroll", "keydown", "pointerdown"].forEach(
        (evt) => {
          window.addEventListener(evt, startOnFirstInteraction, {
            once: true,
            passive: true,
          });
        },
      );

      document.addEventListener("visibilitychange", () => {
        if (!document.hidden && video.paused) {
          playVideo();
        }
      });
    });

    const toggleBtn = document.getElementById("videoToggleBtn");
    if (toggleBtn) {
      toggleBtn.remove();
    }
  };

  const initVideoToggle = initVideoAutoplay;

  const initScrollAnimations = () => {
    const fadeEls = document.querySelectorAll(".fade-up-init");
    if (!fadeEls.length) return;

    if (!("IntersectionObserver" in window)) {
      fadeEls.forEach((el) => el.classList.add("in-view"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    fadeEls.forEach((el) => observer.observe(el));
  };

  const initStatsCounters = () => {
    const counters = document.querySelectorAll(".stat-number");
    if (!counters.length) return;

    let hasRun = false;
    const statsStrip = document.getElementById("statsStrip");
    if (!statsStrip) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasRun) {
          hasRun = true;
          counters.forEach((counter) => {
            const target = parseFloat(counter.getAttribute("data-target"));
            const isDecimal = counter.getAttribute("data-decimal") === "true";
            const duration = 1600;
            const startTime = performance.now();

            const updateCount = (currentTime) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const easeOut = 1 - Math.pow(1 - progress, 3);
              const currentVal = target * easeOut;

              if (isDecimal) {
                counter.textContent = currentVal.toFixed(2);
              } else {
                counter.textContent =
                  Math.floor(currentVal).toLocaleString("en-US") + "+";
              }

              if (progress < 1) {
                requestAnimationFrame(updateCount);
              } else {
                counter.textContent = isDecimal
                  ? target.toFixed(2)
                  : target.toLocaleString("en-US") + "+";
              }
            };

            requestAnimationFrame(updateCount);
          });
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(statsStrip);
  };

  const WISHLIST_KEY = "beauty_of_beaches_wishlist";

  const getWishlist = () => {
    try {
      return JSON.parse(localStorage.getItem(WISHLIST_KEY)) || [];
    } catch {
      return [];
    }
  };

  const saveWishlist = (list) => {
    try {
      localStorage.setItem(WISHLIST_KEY, JSON.stringify(list));
    } catch (e) {
      console.warn("Storage quota exceeded", e);
    }
    updateWishlistUI();
  };

  window.toggleWishlist = (beachName) => {
    let list = getWishlist();
    const index = list.indexOf(beachName);
    if (index > -1) {
      list.splice(index, 1);
    } else {
      list.push(beachName);
    }
    saveWishlist(list);
  };

  const updateWishlistUI = () => {
    const list = getWishlist();
    const savedCountEl = document.getElementById("savedCount");
    if (savedCountEl) savedCountEl.textContent = list.length;

    document.querySelectorAll(".dest-item").forEach((item) => {
      const name = item.getAttribute("data-name");
      const btn = item.querySelector(".btn-wishlist");
      if (btn) {
        if (list.includes(name)) {
          btn.classList.add("active");
          btn.innerHTML = '<i class="fa-solid fa-heart"></i>';
        } else {
          btn.classList.remove("active");
          btn.innerHTML = '<i class="fa-regular fa-heart"></i>';
        }
      }
    });

    const container = document.getElementById("wishlistContainer");
    if (!container) return;

    if (list.length === 0) {
      container.innerHTML = `
        <div class="wishlist-empty-state text-center py-5">
          <i class="fa-regular fa-heart display-4 text-muted mb-3 d-block opacity-50"></i>
          <h6 class="fw-bold">Your Wishlist is Empty</h6>
          <p class="small text-muted">Click the heart icon on any beach destination to save it for later.</p>
        </div>
      `;
      return;
    }

    let html = "";
    list.forEach((name) => {
      const key = findPackageKey(name);
      const meta = PACKAGE_CATALOG[key] || {
        destination: "Coastal Destination",
        price: 25000,
        img: "images/kund-malir-beach.jpg",
      };
      html += `
        <div class="wishlist-item d-flex align-items-center gap-3 py-2 border-bottom">
          <img src="${meta.img}" alt="${name}" class="rounded-3" style="width: 60px; height: 50px; object-fit: cover;" onerror="handleImgError(this)" />
          <div class="flex-grow-1 overflow-hidden">
            <h6 class="mb-0 text-dark fw-bold text-truncate" style="font-size: 14px;">${name}</h6>
            <small class="text-muted d-block text-truncate">${meta.destination}</small>
            <span class="text-primary fw-bold" style="font-size: 13px;">Rs. ${meta.price.toLocaleString("en-US")}</span>
          </div>
          <button type="button" class="btn btn-sm btn-outline-danger border-0 rounded-circle" onclick="toggleWishlist('${name}')" title="Remove" aria-label="Remove item">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      `;
    });
    container.innerHTML = html;
  };

  // 6. Quick View Modal Engine
  window.openQuickView = (beachName) => {
    const key = findPackageKey(beachName);
    const meta = PACKAGE_CATALOG[key];
    if (!meta) return;

    const modalTitle = document.getElementById("modalBeachTitle");
    const modalLocation = document.getElementById("modalBeachLocation");
    const modalImg = document.getElementById("modalBeachImg");
    const modalBadge = document.getElementById("modalBeachBadge");
    const modalPrice = document.getElementById("modalBeachPrice");
    const modalRating = document.getElementById("modalBeachRating");
    const modalDesc = document.getElementById("modalBeachDesc");
    const modalWaterTemp = document.getElementById("modalWaterTemp");
    const modalBestSeason = document.getElementById("modalBestSeason");
    const modalCrowdLevel = document.getElementById("modalCrowdLevel");
    const modalTipText = document.getElementById("modalTipText");
    const modalBookBtn = document.getElementById("modalBookNowBtn");

    if (modalTitle) modalTitle.textContent = meta.name;
    if (modalLocation)
      modalLocation.innerHTML = `<i class="fa-solid fa-location-dot me-1 text-primary"></i> ${meta.destination}`;
    if (modalImg) {
      modalImg.src = meta.img;
      modalImg.alt = meta.name;
    }
    if (modalBadge) modalBadge.textContent = meta.badge || "VIP Coastal Pick";
    if (modalPrice)
      modalPrice.textContent = `Rs. ${meta.price.toLocaleString("en-US")}`;
    if (modalRating)
      modalRating.innerHTML = `<i class="fa-solid fa-star text-warning"></i> 4.9 (Verified Reviews)`;
    if (modalDesc) modalDesc.textContent = meta.desc;
    if (modalWaterTemp) modalWaterTemp.textContent = meta.waterTemp || "26°C";
    if (modalBestSeason)
      modalBestSeason.textContent = meta.bestSeason || "Nov – Mar";
    if (modalCrowdLevel)
      modalCrowdLevel.textContent = meta.crowdLevel || "Low / Tranquil";
    if (modalTipText)
      modalTipText.textContent = meta.tips || "Book early for peak season.";
    if (modalBookBtn) {
      modalBookBtn.href = `payment.html?pkg=${encodeURIComponent(key)}`;
    }

    const modalEl = document.getElementById("quickViewModal");
    if (modalEl && window.bootstrap) {
      const modalInstance = bootstrap.Modal.getOrCreateInstance(modalEl);
      modalInstance.show();
    }
  };

  window.viewDetails = window.openQuickView;

  const DRONE_REELS = [
    {
      id: 0,
      title: "Makran Coastal Highway",
      location: "Balochistan, Pakistan • Desert meets turquoise sea",
      duration: "0:11",
      videoSrc: "videos/coastal-drone-1.mp4",
      fallbackSrc: "videos/beach-waves.mp4",
      poster: "images/kund-malir-beach.jpg",
      description:
        "Cinematic ultra-wide sweep above the Makran Coastal Highway where dramatic golden desert formations plunge into the turquoise Arabian Sea.",
      bookingUrl: "payment.html?beach=Kund%20Malir%20Beach",
    },
    {
      id: 1,
      title: "Gwadar Hammerhead Rock",
      location: "Balochistan, Pakistan • Oceanic cliff formations",
      duration: "0:15",
      videoSrc: "videos/beach-waves.mp4",
      fallbackSrc: "videos/coastal-drone-1.mp4",
      poster: "images/photo-1507525428034-b723cf961d3e.jpg",
      description:
        "Aerial tracking flight over the iconic Hammerhead Peninsula in Gwadar, capturing the deep cobalt ocean swell breaking against sheer sea cliffs.",
      bookingUrl: "payment.html?beach=Gwadar%20%26%20Hammerhead",
    },
    {
      id: 2,
      title: "Maldives Coral Lagoon",
      location: "Indian Ocean • Overwater villas and stingrays",
      duration: "0:15",
      videoSrc: "videos/beach-waves.mp4",
      fallbackSrc: "videos/coastal-drone-1.mp4",
      poster: "images/photo-1514282401047-d79a71a590e8.jpg",
      description:
        "Hovering above emerald atoll lagoons and luxury overwater boardwalks surrounded by vibrant coral reefs and manta ray migrations.",
      bookingUrl: "payment.html?beach=Maldives",
    },
    {
      id: 3,
      title: "Astola Island Marine Reserve",
      location: "Balochistan, Pakistan • Deep sea coral scuba diving",
      duration: "0:11",
      videoSrc: "videos/coastal-drone-4.mp4",
      fallbackSrc: "videos/beach-waves.mp4",
      poster: "images/gallery-coast-08.jpg",
      description:
        "High-altitude 360-degree drone survey of Astola ('Island of the Seven Hills'), Pakistan's premier marine protected sanctuary with secluded white sandy coves.",
      bookingUrl: "payment.html?beach=Astola%20Island",
    },
  ];

  let currentDroneReelIdx = 0;

  window.openDroneReel = (index) => {
    if (typeof index !== "number" || index < 0 || index >= DRONE_REELS.length) {
      index = 0;
    }
    currentDroneReelIdx = index;
    const reel = DRONE_REELS[index];
    if (!reel) return;

    const modalTitle = document.getElementById("droneReelModalTitle");
    const modalLocation = document.getElementById("droneReelModalLocation");
    const modalCounter = document.getElementById("droneReelCounter");
    const modalDesc = document.getElementById("droneReelModalDesc");
    const modalDuration = document.getElementById("droneReelModalDuration");
    const modalBookBtn = document.getElementById("droneReelBookBtn");
    const videoPlayer = document.getElementById("droneReelVideoPlayer");
    const videoSource = document.getElementById("droneReelSource");

    if (modalTitle) modalTitle.textContent = reel.title;
    if (modalLocation) modalLocation.textContent = reel.location;
    if (modalCounter)
      modalCounter.textContent = `Reel ${index + 1} of ${DRONE_REELS.length}`;
    if (modalDesc) modalDesc.textContent = reel.description;
    if (modalDuration)
      modalDuration.innerHTML = `<i class="fa-solid fa-clock me-1 text-info"></i> ${reel.duration}`;
    if (modalBookBtn) modalBookBtn.href = reel.bookingUrl;

    if (videoPlayer) {
      videoPlayer.poster = reel.poster;
      videoPlayer.loop = true;

      // Dynamically sync duration badge if metadata loads (mention exact played video time)
      videoPlayer.onloadedmetadata = () => {
        if (videoPlayer.duration && !isNaN(videoPlayer.duration) && videoPlayer.duration > 0) {
          const m = Math.floor(videoPlayer.duration / 60);
          const s = Math.floor(videoPlayer.duration % 60);
          const timeStr = `${m}:${s < 10 ? "0" : ""}${s}`;
          if (modalDuration) {
            modalDuration.innerHTML = `<i class="fa-solid fa-clock me-1 text-info"></i> ${timeStr}`;
          }
        }
      };

      if (videoSource) {
        videoSource.src = reel.videoSrc;
        videoSource.type = reel.videoSrc.endsWith(".webm") ? "video/webm" : "video/mp4";
      }
      videoPlayer.src = reel.videoSrc;
      videoPlayer.load();

      videoPlayer.onerror = () => {
        if (reel.fallbackSrc && videoPlayer.src !== reel.fallbackSrc) {
          videoPlayer.src = reel.fallbackSrc;
          videoPlayer.load();
          videoPlayer.play().catch(() => {});
        }
      };

      const playPromise = videoPlayer.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          videoPlayer.muted = true;
          videoPlayer.play().catch(() => {});
        });
      }
    }

    const modalEl = document.getElementById("droneReelModal");
    if (modalEl && window.bootstrap) {
      const modalInstance = bootstrap.Modal.getOrCreateInstance(modalEl);
      modalInstance.show();
    }
  };

  window.changeDroneReel = (delta) => {
    const newIdx =
      (currentDroneReelIdx + delta + DRONE_REELS.length) % DRONE_REELS.length;
    window.openDroneReel(newIdx);
  };

  window.closeDroneReel = () => {
    const videoPlayer = document.getElementById("droneReelVideoPlayer");
    if (videoPlayer) {
      videoPlayer.pause();
      videoPlayer.currentTime = 0;
    }
    const modalEl = document.getElementById("droneReelModal");
    if (modalEl && window.bootstrap) {
      const modalInstance = bootstrap.Modal.getInstance(modalEl);
      if (modalInstance) modalInstance.hide();
    }
  };

  const initDroneReelsInteractivity = () => {
    const cards = document.querySelectorAll(".reel-card");
    cards.forEach((card, idx) => {
      const vid = card.querySelector(".reel-card-video");
      const durationBadge = card.querySelector(".reel-duration-badge") || document.getElementById(`reelDuration${idx}`);
      if (vid) {
        const updateCardDuration = () => {
          if (vid.duration && !isNaN(vid.duration) && vid.duration > 0) {
            const m = Math.floor(vid.duration / 60);
            const s = Math.floor(vid.duration % 60);
            const formatted = `${m}:${s < 10 ? "0" : ""}${s}`;
            if (durationBadge) {
              durationBadge.innerHTML = `<i class="fa-solid fa-play me-1 small"></i> ${formatted}`;
            }
          }
        };

        if (vid.readyState >= 1) {
          updateCardDuration();
        } else {
          vid.addEventListener("loadedmetadata", updateCardDuration);
        }

        card.addEventListener("mouseenter", () => {
          vid.play().catch(() => {});
        });
        card.addEventListener("mouseleave", () => {
          vid.pause();
          vid.currentTime = 0;
        });
      }
    });

    const modalEl = document.getElementById("droneReelModal");
    if (modalEl) {
      modalEl.addEventListener("hide.bs.modal", () => {
        const videoPlayer = document.getElementById("droneReelVideoPlayer");
        if (videoPlayer) {
          videoPlayer.pause();
          videoPlayer.currentTime = 0;
        }
      });
    }
  };

  const initQuickFilters = () => {
    const chips = document.querySelectorAll(".quick-chip");
    const items = document.querySelectorAll(".dest-item");
    const badge = document.getElementById("destCountBadge");

    chips.forEach((chip) => {
      chip.addEventListener("click", () => {
        chips.forEach((c) => c.classList.remove("active"));
        chip.classList.add("active");

        const filter = chip.getAttribute("data-filter");
        let visibleCount = 0;

        items.forEach((item) => {
          const category = item.getAttribute("data-category") || "";
          if (filter === "all" || category.includes(filter)) {
            item.style.display = "";
            visibleCount++;
          } else {
            item.style.display = "none";
          }
        });

        if (badge) {
          badge.textContent = `${visibleCount} Selected VIP Destination${visibleCount !== 1 ? "s" : ""}`;
        }
      });
    });
  };

  window.handleHeroSearch = () => {
    const input = document.getElementById("heroSearchDestination");
    const term = input ? input.value.trim().toLowerCase() : "";
    const items = document.querySelectorAll(".dest-item");
    const badge = document.getElementById("destCountBadge");
    let visibleCount = 0;

    items.forEach((item) => {
      const name = (item.getAttribute("data-name") || "").toLowerCase();
      const cat = (item.getAttribute("data-category") || "").toLowerCase();
      if (!term || name.includes(term) || cat.includes(term)) {
        item.style.display = "";
        visibleCount++;
      } else {
        item.style.display = "none";
      }
    });

    if (badge) {
      badge.textContent = `${visibleCount} Match${visibleCount !== 1 ? "es" : ""} Found`;
    }

    const featuredSection = document.getElementById("featuredZones");
    if (featuredSection) {
      featuredSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const initPktClock = () => {
    const el = document.getElementById("currentDateTime");
    if (!el) return;

    const updateClock = () => {
      const now = new Date();
      try {
        const options = {
          timeZone: "Asia/Karachi",
          weekday: "short",
          month: "short",
          day: "numeric",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        };
        const pktStr = new Intl.DateTimeFormat("en-US", options).format(now);
        el.textContent = `PKT: ${pktStr}`;
      } catch {
        el.textContent = `PKT: ${now.toLocaleTimeString()}`;
      }
    };

    updateClock();
    setInterval(updateClock, 1000);
  };

  let lightboxVisibleItems = [];
  let currentLightboxIdx = 0;
  let lastActiveFocusEl = null;
  let touchStartX = 0;
  let touchEndX = 0;

  const updateLightboxContent = () => {
    if (!lightboxVisibleItems.length) return;
    const item = lightboxVisibleItems[currentLightboxIdx];
    if (!item) return;

    const mainImg = document.getElementById("lightboxMainImg");
    const titleEl = document.getElementById("lightboxTitle");
    const locEl = document.getElementById("lightboxLocation");
    const countPill = document.getElementById("lightboxCountPill");

    if (mainImg) {
      mainImg.style.opacity = "0";
      mainImg.style.transform = "scale(0.97)";
      setTimeout(() => {
        mainImg.src = item.src;
        mainImg.alt = item.title || "Coastal preview";
        mainImg.style.opacity = "1";
        mainImg.style.transform = "scale(1)";
      }, 100);
    }
    if (titleEl)
      titleEl.textContent = item.title || "4K Coastal Photographic Reserve";
    if (locEl) locEl.textContent = item.location || "BeautyOfBeaches Pakistan";
    if (countPill)
      countPill.textContent = `Image ${currentLightboxIdx + 1} of ${lightboxVisibleItems.length}`;
  };

  window.openLuxuryLightbox = (trigger, title, loc) => {
    const modal = document.getElementById("luxuryLightbox");
    if (!modal) return;

    lastActiveFocusEl = document.activeElement;

    const rawItems = document.querySelectorAll(
      '#photoGalleryGrid .gallery-item-wrapper:not(.d-none), #galleryGrid .gallery-item:not([style*="display: none"])',
    );
    lightboxVisibleItems = [];

    rawItems.forEach((el) => {
      const img = el.querySelector("img");
      const itemSrc =
        el.getAttribute("data-src") || (img ? img.getAttribute("src") : "");
      const itemTitle =
        el.getAttribute("data-title") ||
        (img ? img.getAttribute("alt") : "Coastal View");
      const itemLoc =
        el.getAttribute("data-location") || "Pakistan & Celebrated Shores";
      if (itemSrc) {
        lightboxVisibleItems.push({
          src: itemSrc,
          title: itemTitle,
          location: itemLoc,
          el: el,
        });
      }
    });

    if (lightboxVisibleItems.length === 0) {
      const src =
        typeof trigger === "string"
          ? trigger
          : trigger?.src || "images/kund-malir-beach.jpg";
      lightboxVisibleItems.push({
        src: src,
        title: title || "4K Coastal View",
        location: loc || "BeautyOfBeaches Reserve",
      });
      currentLightboxIdx = 0;
    } else {
      let matchIdx = -1;
      if (typeof trigger === "string") {
        matchIdx = lightboxVisibleItems.findIndex(
          (i) => i.src === trigger || trigger.includes(i.src),
        );
      } else if (trigger instanceof HTMLElement) {
        const triggerSrc =
          trigger.getAttribute("data-src") ||
          trigger.querySelector("img")?.src ||
          trigger.src;
        matchIdx = lightboxVisibleItems.findIndex(
          (i) => i.el === trigger || i.src === triggerSrc,
        );
      }
      currentLightboxIdx = matchIdx >= 0 ? matchIdx : 0;
    }

    modal.classList.add("active");
    document.body.classList.add("lightbox-open");
    updateLightboxContent();

    const closeBtn = document.getElementById("lightboxCloseBtn");
    if (closeBtn) closeBtn.focus();
  };

  window.openLightbox = (arg1, arg2, arg3) => {
    if (arg1 instanceof HTMLElement) {
      const src = arg1.getAttribute("data-src") || arg1.src;
      const title = arg1.getAttribute("data-title") || arg1.alt;
      const loc =
        arg1.getAttribute("data-location") || "Pakistan Coastal Authority";
      window.openLuxuryLightbox(arg1, title, loc);
    } else {
      window.openLuxuryLightbox(arg1, arg2, arg3);
    }
  };

  window.closeLuxuryLightbox = () => {
    const modal = document.getElementById("luxuryLightbox");
    if (!modal) return;
    modal.classList.remove("active");
    document.body.classList.remove("lightbox-open");
    if (lastActiveFocusEl && typeof lastActiveFocusEl.focus === "function") {
      lastActiveFocusEl.focus();
    }
  };

  window.nextLightboxImage = () => {
    if (!lightboxVisibleItems.length) return;
    currentLightboxIdx = (currentLightboxIdx + 1) % lightboxVisibleItems.length;
    updateLightboxContent();
  };

  window.prevLightboxImage = () => {
    if (!lightboxVisibleItems.length) return;
    currentLightboxIdx =
      (currentLightboxIdx - 1 + lightboxVisibleItems.length) %
      lightboxVisibleItems.length;
    updateLightboxContent();
  };

  const initLightboxEvents = () => {
    const modal = document.getElementById("luxuryLightbox");
    if (!modal) return;

    const closeBtn = document.getElementById("lightboxCloseBtn");
    const prevBtn = document.getElementById("lightboxPrevBtn");
    const nextBtn = document.getElementById("lightboxNextBtn");

    if (closeBtn)
      closeBtn.addEventListener("click", window.closeLuxuryLightbox);
    if (prevBtn) prevBtn.addEventListener("click", window.prevLightboxImage);
    if (nextBtn) nextBtn.addEventListener("click", window.nextLightboxImage);

    modal.addEventListener("click", (e) => {
      if (e.target === modal || e.target.classList.contains("lightbox-stage")) {
        window.closeLuxuryLightbox();
      }
    });

    window.addEventListener("keydown", (e) => {
      if (!modal.classList.contains("active")) return;
      if (e.key === "Escape") {
        window.closeLuxuryLightbox();
      } else if (e.key === "ArrowRight") {
        window.nextLightboxImage();
      } else if (e.key === "ArrowLeft") {
        window.prevLightboxImage();
      }
    });

    modal.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.changedTouches[0].screenX;
      },
      { passive: true },
    );

    modal.addEventListener(
      "touchend",
      (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const delta = touchEndX - touchStartX;
        if (Math.abs(delta) > 40) {
          if (delta < 0) {
            window.nextLightboxImage();
          } else {
            window.prevLightboxImage();
          }
        }
      },
      { passive: true },
    );
  };

  const initGalleryFilters = () => {
    const tabs = document.querySelectorAll(".gallery-tab");
    const indexItems = document.querySelectorAll("#galleryGrid .gallery-item");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");

        const filter = tab.getAttribute("data-gallery-filter");
        let visibleCount = 0;

        indexItems.forEach((item) => {
          const zone = item.getAttribute("data-zone") || "";
          if (filter === "all" || zone.includes(filter)) {
            item.style.display = "";
            visibleCount++;
          } else {
            item.style.display = "none";
          }
        });
      });
    });

    const filterBtns = document.querySelectorAll(".gallery-filter-btn");
    const photoWrappers = document.querySelectorAll(
      "#photoGalleryGrid .gallery-item-wrapper",
    );
    const emptyState = document.getElementById("galleryEmptyState");

    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const cat = btn.getAttribute("data-category");
        let visibleCount = 0;

        photoWrappers.forEach((item) => {
          const itemCat = item.getAttribute("data-category") || "";
          if (cat === "all" || itemCat.includes(cat)) {
            item.classList.remove("d-none");
            visibleCount++;
          } else {
            item.classList.add("d-none");
          }
        });

        if (emptyState) {
          if (visibleCount === 0) {
            emptyState.classList.remove("d-none");
          } else {
            emptyState.classList.add("d-none");
          }
        }
      });
    });
  };

  const BOOKING_KEY = "beauty_active_booking";

  window.getActiveBooking = () => {
    try {
      return JSON.parse(localStorage.getItem(BOOKING_KEY));
    } catch {
      return null;
    }
  };

  window.saveActiveBooking = (bookingData) => {
    try {
      localStorage.setItem(BOOKING_KEY, JSON.stringify(bookingData));
    } catch (e) {
      console.warn("Could not save booking to storage", e);
    }
  };

  window.recalculateIndexPrice = () => {
    const destSelect = document.getElementById("bookDestination");
    const guestsSelect = document.getElementById("bookGuests");
    if (!destSelect || !guestsSelect) return;

    const baseRate = parseInt(destSelect.value, 10) || 18500;
    const guests = parseInt(guestsSelect.value, 10) || 1;
    const selectedOption = destSelect.options[destSelect.selectedIndex];
    const destName = selectedOption.getAttribute("data-name") || "Beach Tour";

    const baseTotal = baseRate * guests;
    const levy = Math.round(baseTotal * 0.05);
    const grandTotal = baseTotal + levy;

    const summaryDest = document.getElementById("summaryDestName");
    const summaryBase = document.getElementById("summaryBaseRate");
    const summaryGuests = document.getElementById("summaryGuestsCount");
    const summaryTotal = document.getElementById("summaryTotalPkr");
    const payBtnAmount = document.getElementById("payBtnAmount");

    if (summaryDest) summaryDest.textContent = destName;
    if (summaryBase)
      summaryBase.textContent = `Rs. ${baseRate.toLocaleString("en-US")}`;
    if (summaryGuests) summaryGuests.textContent = guests;
    if (summaryTotal)
      summaryTotal.textContent = `Rs. ${grandTotal.toLocaleString("en-US")}`;
    if (payBtnAmount)
      payBtnAmount.textContent = `Rs. ${grandTotal.toLocaleString("en-US")}`;
  };

  window.recalculatePrice = window.recalculateIndexPrice;

  let indexSelectedRail = "JazzCash";
  window.selectPaymentOpt = (el, railName) => {
    document
      .querySelectorAll(".payment-card-opt")
      .forEach((opt) => opt.classList.remove("active"));
    el.classList.add("active");
    indexSelectedRail = railName;
    const summaryRail = document.getElementById("summaryRail");
    if (summaryRail) summaryRail.textContent = railName;
  };

  window.submitBooking = () => {
    const name =
      document.getElementById("bookGuestName")?.value.trim() || "Valued Guest";
    const phone =
      document.getElementById("bookGuestPhone")?.value.trim() ||
      "+92 327 243 9753";
    const destSelect = document.getElementById("bookDestination");
    const baseRate = parseInt(destSelect?.value, 10) || 18500;
    const selectedOption = destSelect?.options[destSelect.selectedIndex];
    const destName =
      selectedOption?.getAttribute("data-name") || "Kund Malir Beach";
    const date = document.getElementById("bookDate")?.value || "";
    const guests =
      parseInt(document.getElementById("bookGuests")?.value, 10) || 2;
    const pkgKey = findPackageKey(destName);
    const catalogItem = PACKAGE_CATALOG[pkgKey] || PACKAGE_CATALOG.kund_malir;

    const baseFareTotal = baseRate * guests;
    const levy = Math.round(baseFareTotal * 0.05);
    const grandTotal = baseFareTotal + levy;

    const bookingRef = "BOB-PK-" + Math.floor(100000 + Math.random() * 900000);

    const bookingRecord = {
      reference: bookingRef,
      createdAt: new Date().toISOString(),
      packageId: pkgKey,
      packageName: catalogItem.name,
      destination: catalogItem.destination,
      image: catalogItem.img,
      departureDate:
        date || new Date(Date.now() + 7 * 86400000).toISOString().split("T")[0],
      nights: catalogItem.nights,
      guests: guests,
      baseRate: baseRate,
      baseFareTotal: baseFareTotal,
      tourismLevy: levy,
      discount: 0,
      promoCode: "",
      grandTotal: grandTotal,
      customer: {
        fullName: name,
        cnic: "",
        phone: phone,
        email: "",
        city: "Karachi",
        specialRequests: "",
      },
      payment: {
        method: indexSelectedRail,
        status: "Pending verification",
        transactionRef: "",
        receiptName: "",
        receiptSize: 0,
      },
    };

    window.saveActiveBooking(bookingRecord);
    window.location.href = `payment.html?ref=${bookingRef}`;
  };

  let activePaymentMethod = "jazzcash";
  let appliedPromoDiscount = 0;
  let currentPromoCode = "";
  let uploadedReceiptFile = null;

  const METHOD_INSTRUCTIONS = {
    jazzcash: {
      name: "JazzCash",
      brandColor: "#d90429",
      badgeClass: "badge-jazzcash",
      icon: "fa-solid fa-mobile-screen",
      guide: `
        <div class="alert alert-light border mt-3 mb-0 p-3 rounded-3">
          <div class="d-flex align-items-center gap-2 mb-2 text-danger fw-bold">
            <i class="fa-solid fa-circle-info"></i> Official JazzCash Settlement Instructions
          </div>
          <p class="small text-muted mb-2">
            Automated direct merchant wallet debit is currently in sandbox verification with JazzCash / 1Link.
            Please complete your payment via JazzCash App or Retailer to our corporate clearing desk, then provide your transaction TID below:
          </p>
          <div class="p-2 bg-white rounded border border-danger border-opacity-25 small mb-2">
            <div><strong>Corporate Merchant Account:</strong> Verified BeautyOfBeaches Portal Concierge</div>
            <div><strong>Helpline Verification Line:</strong> +92 327 243 9753</div>
            <div class="text-danger small fst-italic">Note: Official merchant account details are provided upon concierge check-in call. We never request your MPIN or SMS OTP.</div>
          </div>
        </div>
      `,
    },
    easypaisa: {
      name: "EasyPaisa",
      brandColor: "#00a859",
      badgeClass: "badge-easypaisa",
      icon: "fa-solid fa-wallet",
      guide: `
        <div class="alert alert-light border mt-3 mb-0 p-3 rounded-3">
          <div class="d-flex align-items-center gap-2 mb-2 text-success fw-bold">
            <i class="fa-solid fa-circle-info"></i> EasyPaisa Wallet Settlement
          </div>
          <p class="small text-muted mb-2">
            EasyPaisa Merchant API onboarding is active. Transfer using your EasyPaisa app and enter the 11-digit Transaction ID (TID) below with optional receipt screenshot:
          </p>
          <div class="p-2 bg-white rounded border border-success border-opacity-25 small mb-2">
            <div><strong>Recipient:</strong> BeautyOfBeaches Pakistan Escrow</div>
            <div><strong>Support:</strong> +92 327 243 9753</div>
            <div class="text-success small fst-italic">Security notice: EasyPaisa PIN is confidential and must NEVER be shared.</div>
          </div>
        </div>
      `,
    },
    raast: {
      name: "Raast (State Bank of Pakistan)",
      brandColor: "#f77f00",
      badgeClass: "badge-raast",
      icon: "fa-solid fa-bolt",
      guide: `
        <div class="alert alert-light border mt-3 mb-0 p-3 rounded-3">
          <div class="d-flex align-items-center gap-2 mb-2 text-warning fw-bold">
            <i class="fa-solid fa-building-columns"></i> Raast Instant SBP Settlement (0% Fee)
          </div>
          <p class="small text-muted mb-2">
            Pay from ANY Pakistani bank app (HBL, Meezan, Alfalah, UBL, MCB) with ZERO transaction fees via Raast Instant Payment:
          </p>
          <div class="p-2 bg-white rounded border border-warning border-opacity-25 small mb-2">
            <div><strong>Clearing Scheme:</strong> State Bank of Pakistan ISO-20022 Raast</div>
            <div><strong>Concierge Verification:</strong> +92 327 243 9753</div>
            <div class="text-warning small fst-italic">Enter your Bank Transfer Reference / Raast End-to-End ID below.</div>
          </div>
        </div>
      `,
    },
    bank: {
      name: "Bank Transfer (IBFT / RTGS)",
      brandColor: "#087f8c",
      badgeClass: "badge-bank",
      icon: "fa-solid fa-building-columns",
      guide: `
        <div class="alert alert-light border mt-3 mb-0 p-3 rounded-3">
          <div class="d-flex align-items-center gap-2 mb-2 text-primary fw-bold">
            <i class="fa-solid fa-shield-halved"></i> Corporate IBFT Escrow Account
          </div>
          <p class="small text-muted mb-2">
            Direct Inter-Bank Fund Transfer via Meezan Bank or Habib Bank Limited (HBL). Submit your IBFT confirmation slip or reference number for instant matching.
          </p>
        </div>
      `,
    },
    card: {
      name: "Debit / Credit Card (3D Secure)",
      brandColor: "#0c2331",
      badgeClass: "badge-card",
      icon: "fa-solid fa-credit-card",
      guide: `
        <div class="alert alert-light border mt-3 mb-0 p-3 rounded-3">
          <div class="d-flex align-items-center gap-2 mb-2 text-dark fw-bold">
            <i class="fa-solid fa-lock"></i> 3D-Secure 256-Bit Encrypted Card Processing
          </div>
          <p class="small text-muted mb-2">
            Visa, MasterCard, and PayPak accepted. For card transactions, an encrypted 3D-Secure SBP-compliant payment link will be sent to your verified WhatsApp/Email upon reservation submission.
          </p>
        </div>
      `,
    },
  };

  const updatePaymentCalculations = () => {
    const pkgSelect = document.getElementById("payPackageSelect");
    const guestsInput = document.getElementById("payGuests");
    if (!pkgSelect || !guestsInput) return;

    const pkgKey = pkgSelect.value;
    const item = PACKAGE_CATALOG[pkgKey] || PACKAGE_CATALOG.kund_malir;
    const guests = Math.max(1, parseInt(guestsInput.value, 10) || 1);

    let baseRate = item.price;
    let baseFareTotal = 0;
    if (item.pricingType === "group" || item.pricingType === "couple") {
      baseFareTotal = baseRate;
    } else {
      baseFareTotal = baseRate * guests;
    }

    const levy = Math.round(baseFareTotal * 0.05);
    const discount = appliedPromoDiscount;
    const grandTotal = Math.max(0, baseFareTotal + levy - discount);

    const grandTotalEl = document.getElementById("payGrandTotal");
    const mobileTotalEl = document.getElementById("payGrandTotalMobile");
    const mobileBarTotalEl = document.getElementById("mobileBarTotal");
    const baseFareEl = document.getElementById("payBaseFare");
    const taxEl = document.getElementById("payTax");
    const discountEl = document.getElementById("payDiscount");
    const destImgEl = document.getElementById("paySummaryImg");
    const destTitleEl = document.getElementById("paySummaryTitle");
    const destLocEl = document.getElementById("paySummaryLocation");
    const destNightsEl = document.getElementById("paySummaryNights");
    const destGuestsEl = document.getElementById("paySummaryGuests");

    if (grandTotalEl)
      grandTotalEl.textContent = `Rs. ${grandTotal.toLocaleString("en-US")}`;
    if (mobileTotalEl)
      mobileTotalEl.textContent = `Rs. ${grandTotal.toLocaleString("en-US")}`;
    if (mobileBarTotalEl)
      mobileBarTotalEl.textContent = `Rs. ${grandTotal.toLocaleString("en-US")}`;
    if (baseFareEl)
      baseFareEl.textContent = `Rs. ${baseFareTotal.toLocaleString("en-US")}`;
    if (taxEl) taxEl.textContent = `Rs. ${levy.toLocaleString("en-US")}`;
    if (discountEl)
      discountEl.textContent = `- Rs. ${discount.toLocaleString("en-US")}`;

    if (destImgEl) {
      destImgEl.src = item.img;
      destImgEl.alt = item.name;
    }
    if (destTitleEl) destTitleEl.textContent = item.name;
    if (destLocEl) destLocEl.textContent = item.destination;
    if (destNightsEl) destNightsEl.textContent = item.nights;
    if (destGuestsEl)
      destGuestsEl.textContent = `${guests} Guest${guests !== 1 ? "s" : ""}`;

    const existing = window.getActiveBooking() || {};
    const updated = {
      ...existing,
      reference:
        existing.reference ||
        "BOB-PK-" + Math.floor(100000 + Math.random() * 900000),
      packageId: pkgKey,
      packageName: item.name,
      destination: item.destination,
      image: item.img,
      departureDate:
        document.getElementById("payDate")?.value ||
        existing.departureDate ||
        new Date().toISOString().split("T")[0],
      nights: item.nights,
      guests: guests,
      baseRate: baseRate,
      baseFareTotal: baseFareTotal,
      tourismLevy: levy,
      discount: discount,
      promoCode: currentPromoCode,
      grandTotal: grandTotal,
      payment: {
        ...(existing.payment || {}),
        method: METHOD_INSTRUCTIONS[activePaymentMethod]?.name || "JazzCash",
        status: "Pending verification",
      },
    };
    window.saveActiveBooking(updated);
  };

  const initPaymentPage = () => {
    const checkoutForm = document.getElementById("checkoutForm");
    if (!checkoutForm) return;

    const params = new URLSearchParams(window.location.search);
    const paramBeach = params.get("beach");
    const paramPkg = params.get("pkg");
    let saved = window.getActiveBooking();

    if (paramPkg && PACKAGE_CATALOG[paramPkg]) {
      const item = PACKAGE_CATALOG[paramPkg];
      saved = {
        reference: "BOB-PK-" + Math.floor(100000 + Math.random() * 900000),
        packageId: paramPkg,
        packageName: item.name,
        destination: item.destination,
        image: item.img,
        departureDate: new Date(Date.now() + 7 * 86400000)
          .toISOString()
          .split("T")[0],
        nights: item.nights,
        guests: 1,
        baseRate: item.price,
        baseFareTotal: item.price,
        tourismLevy: Math.round(item.price * 0.05),
        discount: 0,
        promoCode: "",
        grandTotal: Math.round(item.price * 1.05),
        customer: {
          fullName: "",
          cnic: "",
          phone: "",
          email: "",
          city: "Karachi",
          specialRequests: "",
        },
        payment: {
          method: "JazzCash",
          status: "Pending verification",
          transactionRef: "",
          receiptName: "",
          receiptSize: 0,
        },
      };
      window.saveActiveBooking(saved);
    } else if (paramBeach) {
      const key = findPackageKey(paramBeach);
      const item = PACKAGE_CATALOG[key] || PACKAGE_CATALOG.kund_malir;
      saved = {
        reference: "BOB-PK-" + Math.floor(100000 + Math.random() * 900000),
        packageId: key,
        packageName: item.name,
        destination: item.destination,
        image: item.img,
        departureDate: new Date(Date.now() + 7 * 86400000)
          .toISOString()
          .split("T")[0],
        nights: item.nights,
        guests: 1,
        baseRate: item.price,
        baseFareTotal: item.price,
        tourismLevy: Math.round(item.price * 0.05),
        discount: 0,
        promoCode: "",
        grandTotal: Math.round(item.price * 1.05),
        customer: {
          fullName: "",
          cnic: "",
          phone: "",
          email: "",
          city: "Karachi",
          specialRequests: "",
        },
        payment: {
          method: "JazzCash",
          status: "Pending verification",
          transactionRef: "",
          receiptName: "",
          receiptSize: 0,
        },
      };
      window.saveActiveBooking(saved);
    }

    const emptyNotice = document.getElementById("emptyBookingNotice");
    if (!saved && !paramPkg && !paramBeach) {
      if (emptyNotice) emptyNotice.classList.remove("d-none");
      saved = {
        reference: "BOB-PK-" + Math.floor(100000 + Math.random() * 900000),
        packageId: "kund_malir",
        packageName: PACKAGE_CATALOG.kund_malir.name,
        destination: PACKAGE_CATALOG.kund_malir.destination,
        image: PACKAGE_CATALOG.kund_malir.img,
        departureDate: new Date(Date.now() + 7 * 86400000)
          .toISOString()
          .split("T")[0],
        nights: PACKAGE_CATALOG.kund_malir.nights,
        guests: 2,
        baseRate: 18500,
        baseFareTotal: 37000,
        tourismLevy: 1850,
        discount: 0,
        promoCode: "",
        grandTotal: 38850,
        customer: {
          fullName: "",
          cnic: "",
          phone: "",
          email: "",
          city: "Karachi",
          specialRequests: "",
        },
        payment: {
          method: "JazzCash",
          status: "Pending verification",
          transactionRef: "",
          receiptName: "",
          receiptSize: 0,
        },
      };
      window.saveActiveBooking(saved);
    } else if (emptyNotice) {
      emptyNotice.classList.add("d-none");
    }

    const pkgSelect = document.getElementById("payPackageSelect");
    const dateInput = document.getElementById("payDate");
    const guestsInput = document.getElementById("payGuests");
    const nameInput = document.getElementById("payFullName");
    const cnicInput = document.getElementById("payCnic");
    const phoneInput = document.getElementById("payPhone");
    const emailInput = document.getElementById("payEmail");
    const cityInput = document.getElementById("payCity");
    const specialInput = document.getElementById("paySpecial");

    if (pkgSelect && saved.packageId) pkgSelect.value = saved.packageId;
    if (dateInput) {
      dateInput.value =
        saved.departureDate ||
        new Date(Date.now() + 7 * 86400000).toISOString().split("T")[0];
    }
    if (guestsInput && saved.guests) guestsInput.value = saved.guests;
    if (nameInput && saved.customer?.fullName)
      nameInput.value = saved.customer.fullName;
    if (cnicInput && saved.customer?.cnic)
      cnicInput.value = saved.customer.cnic;
    if (phoneInput && saved.customer?.phone)
      phoneInput.value = saved.customer.phone;
    if (emailInput && saved.customer?.email)
      emailInput.value = saved.customer.email;
    if (cityInput && saved.customer?.city)
      cityInput.value = saved.customer.city;
    if (specialInput && saved.customer?.specialRequests)
      specialInput.value = saved.customer.specialRequests;

    if (pkgSelect)
      pkgSelect.addEventListener("change", updatePaymentCalculations);
    if (guestsInput)
      guestsInput.addEventListener("input", updatePaymentCalculations);
    if (dateInput)
      dateInput.addEventListener("change", updatePaymentCalculations);

    const methodOptions = document.querySelectorAll(".payment-method-option");
    const dynamicDetailsContainer = document.getElementById(
      "dynamicMethodDetails",
    );

    const renderMethodDetails = (methodKey) => {
      activePaymentMethod = methodKey;
      const methodInfo =
        METHOD_INSTRUCTIONS[methodKey] || METHOD_INSTRUCTIONS.jazzcash;
      if (dynamicDetailsContainer) {
        dynamicDetailsContainer.innerHTML = methodInfo.guide;
      }
      updatePaymentCalculations();
    };

    methodOptions.forEach((opt) => {
      opt.addEventListener("click", () => {
        methodOptions.forEach((o) => o.classList.remove("selected"));
        opt.classList.add("selected");
        const method = opt.getAttribute("data-method");
        renderMethodDetails(method);
      });
    });

    renderMethodDetails("jazzcash");

    const applyPromoBtn = document.getElementById("applyPromoBtn");
    const promoInput = document.getElementById("payPromoCode");
    const promoFeedback = document.getElementById("promoFeedback");

    if (applyPromoBtn && promoInput) {
      applyPromoBtn.addEventListener("click", () => {
        const code = promoInput.value.trim().toUpperCase();
        const currentSaved = window.getActiveBooking();
        const baseFare = currentSaved ? currentSaved.baseFareTotal : 18500;

        if (code === "BEACH2026") {
          appliedPromoDiscount = Math.round(baseFare * 0.1);
          currentPromoCode = "BEACH2026";
          if (promoFeedback) {
            promoFeedback.innerHTML = `<span class="text-success small fw-bold"><i class="fa-solid fa-check me-1"></i> Promo applied! 10% (Rs. ${appliedPromoDiscount.toLocaleString("en-US")}) deducted.</span>`;
          }
          updatePaymentCalculations();
        } else if (!code) {
          appliedPromoDiscount = 0;
          currentPromoCode = "";
          if (promoFeedback) promoFeedback.innerHTML = "";
          updatePaymentCalculations();
        } else {
          appliedPromoDiscount = 0;
          currentPromoCode = "";
          if (promoFeedback) {
            promoFeedback.innerHTML = `<span class="text-danger small"><i class="fa-solid fa-triangle-exclamation me-1"></i> Invalid coupon code. Try BEACH2026</span>`;
          }
          updatePaymentCalculations();
        }
      });
    }

    const receiptInput = document.getElementById("payReceiptFile");
    const receiptDropZone = document.getElementById("receiptDropZone");
    const receiptFeedback = document.getElementById("receiptFeedback");

    const handleReceiptFile = (file) => {
      if (!file) return;
      const allowedTypes = [
        "image/png",
        "image/jpeg",
        "image/jpg",
        "application/pdf",
      ];
      const maxSize = 5 * 1024 * 1024;

      if (!allowedTypes.includes(file.type)) {
        uploadedReceiptFile = null;
        if (receiptFeedback) {
          receiptFeedback.innerHTML = `<span class="text-danger small fw-bold"><i class="fa-solid fa-circle-xmark me-1"></i> Invalid file type. Only PNG, JPG, JPEG, and PDF are permitted.</span>`;
        }
        return;
      }

      if (file.size > maxSize) {
        uploadedReceiptFile = null;
        if (receiptFeedback) {
          receiptFeedback.innerHTML = `<span class="text-danger small fw-bold"><i class="fa-solid fa-circle-xmark me-1"></i> File size exceeds 5MB limit (${(file.size / (1024 * 1024)).toFixed(2)} MB). Please upload a smaller receipt.</span>`;
        }
        return;
      }

      uploadedReceiptFile = file;
      const sizeKb = (file.size / 1024).toFixed(1);
      if (receiptFeedback) {
        receiptFeedback.innerHTML = `
          <div class="alert alert-success py-2 px-3 mb-0 rounded-3 d-flex align-items-center justify-content-between small">
            <div><i class="fa-solid fa-file-circle-check me-2"></i><strong>${file.name}</strong> (${sizeKb} KB)</div>
            <button type="button" class="btn btn-sm btn-outline-danger border-0" id="removeReceiptBtn" aria-label="Remove receipt">&times;</button>
          </div>
        `;
        document
          .getElementById("removeReceiptBtn")
          ?.addEventListener("click", () => {
            uploadedReceiptFile = null;
            if (receiptInput) receiptInput.value = "";
            receiptFeedback.innerHTML = "";
          });
      }
    };

    if (receiptInput) {
      receiptInput.addEventListener("change", (e) => {
        if (e.target.files && e.target.files[0]) {
          handleReceiptFile(e.target.files[0]);
        }
      });
    }

    if (receiptDropZone) {
      ["dragenter", "dragover"].forEach((eventName) => {
        receiptDropZone.addEventListener(
          eventName,
          (e) => {
            e.preventDefault();
            receiptDropZone.classList.add(
              "border-primary",
              "bg-primary",
              "bg-opacity-10",
            );
          },
          false,
        );
      });

      ["dragleave", "drop"].forEach((eventName) => {
        receiptDropZone.addEventListener(
          eventName,
          (e) => {
            e.preventDefault();
            receiptDropZone.classList.remove(
              "border-primary",
              "bg-primary",
              "bg-opacity-10",
            );
          },
          false,
        );
      });

      receiptDropZone.addEventListener(
        "drop",
        (e) => {
          const dt = e.dataTransfer;
          if (dt && dt.files && dt.files[0]) {
            handleReceiptFile(dt.files[0]);
          }
        },
        false,
      );
    }

    checkoutForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const fullName = document.getElementById("payFullName")?.value.trim();
      const cnic = document.getElementById("payCnic")?.value.trim();
      const phone = document.getElementById("payPhone")?.value.trim();
      const email = document.getElementById("payEmail")?.value.trim();
      const city = document.getElementById("payCity")?.value || "Karachi";
      const special =
        document.getElementById("paySpecial")?.value.trim() || "Not provided";
      const txnRef = document.getElementById("payTxnRef")?.value.trim() || "";

      if (!fullName || !phone || !email) {
        alert("Please fill out all required passenger contact details.");
        return;
      }

      const submitBtn = document.getElementById("paySubmitBtn");
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML =
          '<i class="fa-solid fa-spinner fa-spin me-2"></i> Transmitting Reservation & Booking...';
      }

      setTimeout(() => {
        const currentSaved = window.getActiveBooking() || {};
        const bookingRef =
          currentSaved.reference ||
          "BOB-PK-" + Math.floor(100000 + Math.random() * 900000);

        const finalRecord = {
          ...currentSaved,
          reference: bookingRef,
          updatedAt: new Date().toISOString(),
          customer: {
            fullName: fullName,
            cnic: cnic || "Not provided",
            phone: phone,
            email: email,
            city: city,
            specialRequests: special,
          },
          payment: {
            method:
              METHOD_INSTRUCTIONS[activePaymentMethod]?.name || "JazzCash",
            status: "Pending verification",
            transactionRef: txnRef || "Pending Concierge Verification",
            receiptName: uploadedReceiptFile
              ? uploadedReceiptFile.name
              : "Not attached",
          },
        };

        window.saveActiveBooking(finalRecord);

        const refEl = document.getElementById("receiptTxnId");
        const nameEl = document.getElementById("receiptCustomerName");
        const pkgEl = document.getElementById("receiptPackage");
        const dateEl = document.getElementById("receiptDate");
        const methodEl = document.getElementById("receiptMethod");
        const totalEl = document.getElementById("receiptTotal");
        const statusEl = document.getElementById("receiptStatusBadge");
        const txnRefDisplay = document.getElementById("receiptTxnRefDisplay");

        if (refEl) refEl.textContent = bookingRef;
        if (nameEl) nameEl.textContent = fullName;
        if (pkgEl) pkgEl.textContent = finalRecord.packageName;
        if (dateEl) dateEl.textContent = finalRecord.departureDate;
        if (methodEl) methodEl.textContent = finalRecord.payment.method;
        if (totalEl)
          totalEl.textContent = `Rs. ${finalRecord.grandTotal.toLocaleString("en-US")}`;
        if (statusEl) {
          statusEl.className =
            "badge bg-warning text-dark px-3 py-1 rounded-pill fw-bold";
          statusEl.innerHTML =
            '<i class="fa-solid fa-clock-rotate-left me-1"></i> Pending Verification';
        }
        if (txnRefDisplay) {
          txnRefDisplay.textContent = txnRef || "Pending Concierge Matching";
        }

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML =
            '<i class="fa-solid fa-lock me-2"></i> Pay &amp; Confirm Booking';
        }

        const successModalEl = document.getElementById("paymentSuccessModal");
        if (successModalEl && window.bootstrap) {
          const successModal =
            bootstrap.Modal.getOrCreateInstance(successModalEl);
          successModal.show();
        }
      }, 700);
    });

    const mobileSummaryToggle = document.getElementById("mobileSummaryToggle");
    const mobileSummaryCollapse = document.getElementById(
      "mobileSummaryCollapse",
    );
    const mobileChevron = document.getElementById("mobileSummaryChevron");

    if (mobileSummaryToggle && mobileSummaryCollapse) {
      mobileSummaryToggle.addEventListener("click", () => {
        mobileSummaryCollapse.classList.toggle("mobile-collapsed");
        if (mobileChevron) {
          mobileChevron.classList.toggle("fa-chevron-down");
          mobileChevron.classList.toggle("fa-chevron-up");
        }
      });
    }

    updatePaymentCalculations();
  };

  window.downloadBookingPDF = () => {
    const booking = window.getActiveBooking();
    if (!booking) {
      alert(
        "No active booking record found to generate voucher. Please make a selection first.",
      );
      return;
    }

    if (!window.jspdf || !window.jspdf.jsPDF) {
      alert("PDF generation engine is loading. Please retry in a moment.");
      return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: "a4",
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 40;
    let y = margin;

    doc.setFillColor(8, 127, 140);
    doc.rect(0, 0, pageWidth, 75, "F");

    doc.setFillColor(212, 163, 115);
    doc.rect(0, 75, pageWidth, 4, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("BeautyOfBeaches", margin, 42);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(220, 240, 245);
    doc.text("PAKISTAN LUXURY COASTAL TRAVEL AUTHORITY", margin, 58);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(255, 255, 255);
    doc.text(
      `BOOKING REF: ${booking.reference || "BOB-PK-000000"}`,
      pageWidth - margin,
      38,
      { align: "right" },
    );

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(220, 240, 245);
    const dateFormatted = new Date().toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    doc.text(`ISSUED: ${dateFormatted} | PKT`, pageWidth - margin, 54, {
      align: "right",
    });

    y = 100;

    doc.setFillColor(254, 243, 199);
    doc.roundedRect(margin, y, pageWidth - margin * 2, 34, 4, 4, "F");
    doc.setDrawColor(245, 158, 11);
    doc.setLineWidth(0.8);
    doc.roundedRect(margin, y, pageWidth - margin * 2, 34, 4, 4, "D");

    doc.setTextColor(146, 64, 14);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10.5);
    doc.text("RESERVATION STATUS: PENDING VERIFICATION", margin + 14, y + 21);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.text(
      "Reconciled with Banking Desk within 30 mins",
      pageWidth - margin - 14,
      y + 21,
      { align: "right" },
    );

    y += 50;

    const boxWidth = (pageWidth - margin * 2 - 16) / 2;
    const boxHeight = 120;

    doc.setFillColor(248, 250, 252);
    doc.roundedRect(margin, y, boxWidth, boxHeight, 5, 5, "F");
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(1);
    doc.roundedRect(margin, y, boxWidth, boxHeight, 5, 5, "D");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10.5);
    doc.setTextColor(12, 35, 49);
    doc.text("LEAD TRAVELER DETAILS", margin + 14, y + 20);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(71, 85, 105);

    const cust = booking.customer || {};
    const safeName = cust.fullName || "Valued Guest";
    const safeCnic =
      cust.cnic && cust.cnic.trim() !== "" ? cust.cnic : "Not provided";
    const safePhone = cust.phone || "+92 327 243 9753";
    const safeEmail = cust.email || "Not provided";
    const safeCity = cust.city || "Karachi";

    doc.text(`Full Name:`, margin + 14, y + 40);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(15, 23, 42);
    doc.text(doc.splitTextToSize(safeName, boxWidth - 85), margin + 75, y + 40);

    doc.setFont("helvetica", "normal");
    doc.setTextColor(71, 85, 105);
    doc.text(`CNIC / ID:`, margin + 14, y + 58);
    doc.setTextColor(15, 23, 42);
    doc.text(safeCnic, margin + 75, y + 58);

    doc.setTextColor(71, 85, 105);
    doc.text(`WhatsApp:`, margin + 14, y + 76);
    doc.setTextColor(15, 23, 42);
    doc.text(safePhone, margin + 75, y + 76);

    doc.setTextColor(71, 85, 105);
    doc.text(`Email:`, margin + 14, y + 94);
    doc.setTextColor(15, 23, 42);
    doc.text(
      doc.splitTextToSize(safeEmail, boxWidth - 85),
      margin + 75,
      y + 94,
    );

    doc.setTextColor(71, 85, 105);
    doc.text(`Departure:`, margin + 14, y + 110);
    doc.setTextColor(15, 23, 42);
    doc.text(`${safeCity}, Pakistan`, margin + 75, y + 110);

    const boxBx = margin + boxWidth + 16;
    doc.setFillColor(248, 250, 252);
    doc.roundedRect(boxBx, y, boxWidth, boxHeight, 5, 5, "F");
    doc.setDrawColor(226, 232, 240);
    doc.roundedRect(boxBx, y, boxWidth, boxHeight, 5, 5, "D");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10.5);
    doc.setTextColor(12, 35, 49);
    doc.text("COASTAL EXPEDITION DETAILS", boxBx + 14, y + 20);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(71, 85, 105);

    const safePackage = booking.packageName || "Coastal Beach Tour";
    const safeDest = booking.destination || "Pakistan Coast";
    const safeDate = booking.departureDate || "As confirmed";
    const safeNights = booking.nights || "2 Days / 1 Night";
    const safeGuests = `${booking.guests || 1} Person(s)`;

    doc.text(`Package:`, boxBx + 14, y + 40);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(15, 23, 42);
    doc.text(
      doc.splitTextToSize(safePackage, boxWidth - 75),
      boxBx + 68,
      y + 40,
    );

    doc.setFont("helvetica", "normal");
    doc.setTextColor(71, 85, 105);
    doc.text(`Destination:`, boxBx + 14, y + 66);
    doc.setTextColor(15, 23, 42);
    doc.text(doc.splitTextToSize(safeDest, boxWidth - 75), boxBx + 68, y + 66);

    doc.setTextColor(71, 85, 105);
    doc.text(`Check-in:`, boxBx + 14, y + 84);
    doc.setTextColor(15, 23, 42);
    doc.text(safeDate, boxBx + 68, y + 84);

    doc.setTextColor(71, 85, 105);
    doc.text(`Duration:`, boxBx + 14, y + 98);
    doc.setTextColor(15, 23, 42);
    doc.text(safeNights, boxBx + 68, y + 98);

    doc.setTextColor(71, 85, 105);
    doc.text(`Travelers:`, boxBx + 14, y + 112);
    doc.setTextColor(15, 23, 42);
    doc.text(safeGuests, boxBx + 68, y + 112);

    y += boxHeight + 24;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(12, 35, 49);
    doc.text("ITEMIZED FINANCIAL BREAKDOWN (PKR)", margin, y);
    y += 8;

    const baseFareTotal = booking.baseFareTotal || 18500;
    const levy = booking.tourismLevy || Math.round(baseFareTotal * 0.05);
    const discount = booking.discount || 0;
    const grandTotal = booking.grandTotal || baseFareTotal + levy - discount;

    const tableRows = [
      [
        booking.packageName || "Beach Expedition Fare",
        `Rs. ${(booking.baseRate || 18500).toLocaleString("en-US")}`,
        `${booking.guests || 1} Guest(s)`,
        `Rs. ${baseFareTotal.toLocaleString("en-US")}`,
      ],
      [
        "Sindh / Balochistan Tourism Development Levy",
        "5.0% Standard",
        "Mandatory SBP/Govt Tax",
        `Rs. ${levy.toLocaleString("en-US")}`,
      ],
    ];

    if (discount > 0) {
      tableRows.push([
        `Promotional Voucher (${booking.promoCode || "BEACH2026"})`,
        "Voucher Promo",
        "Applied Discount",
        `- Rs. ${discount.toLocaleString("en-US")}`,
      ]);
    }

    tableRows.push([
      "TOTAL AMOUNT PAYABLE",
      "Pakistani Rupees",
      "All Taxes & Charges Inclusive",
      `Rs. ${grandTotal.toLocaleString("en-US")}`,
    ]);

    doc.autoTable({
      startY: y,
      margin: { left: margin, right: margin },
      head: [["Line Item / Description", "Unit Rate", "Basis", "Total (PKR)"]],
      body: tableRows,
      theme: "grid",
      headStyles: {
        fillColor: [12, 35, 49],
        textColor: [255, 255, 255],
        fontStyle: "bold",
        fontSize: 9,
      },
      styles: {
        font: "helvetica",
        fontSize: 8.5,
        cellPadding: 6,
        lineColor: [226, 232, 240],
        lineWidth: 0.5,
      },
      columnStyles: {
        0: { cellWidth: 240 },
        1: { cellWidth: 90, halign: "right" },
        2: { cellWidth: 90, halign: "center" },
        3: { cellWidth: 95, halign: "right", fontStyle: "bold" },
      },
      didParseCell: (data) => {
        // Highlight total row
        if (data.row.index === tableRows.length - 1) {
          data.cell.styles.fillColor = [8, 127, 140];
          data.cell.styles.textColor = [255, 255, 255];
          data.cell.styles.fontStyle = "bold";
          data.cell.styles.fontSize = 10;
        }
      },
    });

    y = doc.lastAutoTable.finalY + 20;

    doc.setFillColor(248, 250, 252);
    doc.roundedRect(margin, y, pageWidth - margin * 2, 65, 4, 4, "F");
    doc.setDrawColor(226, 232, 240);
    doc.roundedRect(margin, y, pageWidth - margin * 2, 65, 4, 4, "D");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    doc.setTextColor(12, 35, 49);
    doc.text("PAYMENT CHANNEL & TRANSACTION AUDIT", margin + 12, y + 16);

    const safeMethod = booking.payment?.method || "JazzCash Mobile Account";
    const safeTxn =
      booking.payment?.transactionRef || "Pending Concierge Matching";

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(71, 85, 105);
    doc.text(`Payment Gateway / Rail:`, margin + 12, y + 32);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(15, 23, 42);
    doc.text(safeMethod, margin + 125, y + 32);

    doc.setFont("helvetica", "normal");
    doc.setTextColor(71, 85, 105);
    doc.text(`Transaction Reference (TID):`, margin + 12, y + 48);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(15, 23, 42);
    doc.text(safeTxn, margin + 125, y + 48);

    doc.setFont("helvetica", "normal");
    doc.setTextColor(100, 116, 139);
    doc.setFontSize(7.5);
    doc.text(
      "Audit Notice: Manual payment submissions undergo reconciliation against bank settlement feeds prior to departure voucher release.",
      margin + 12,
      y + 60,
    );

    y += 80;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(12, 35, 49);
    doc.text("DEPARTURE TERMS & TRAVEL CONDITIONS:", margin, y);
    y += 12;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(100, 116, 139);

    const terms = [
      "1. Presentation of original CNIC or valid Passport is required for all passengers at the time of departure.",
      "2. Reporting time is 30 minutes prior to scheduled departure. Departure slots cannot be delayed for late arrivals.",
      "3. Coastal itineraries along Makran Highway are subject to Coast Guard and Pakistan Maritime Security safety clearances.",
      "4. Cancellations up to 48 hours prior to departure are eligible for 100% refund. Cancellations under 24 hours incur 25% charge.",
      "5. 24/7 VIP Concierge Helpline: +92 327 243 9753 | Email: concierge@beautyofbeaches.pk",
    ];

    terms.forEach((t) => {
      doc.text(t, margin, y);
      y += 10.5;
    });

    const footerY = pageHeight - 30;
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.5);
    doc.line(margin, footerY - 10, pageWidth - margin, footerY - 10);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(148, 163, 184);
    doc.text(
      "BeautyOfBeaches Pakistan | SECP & Sindh Tourism Development Corporation Registered",
      margin,
      footerY,
    );
    doc.text("Page 1 of 1", pageWidth - margin, footerY, { align: "right" });

    const safeRef = (booking.reference || "BOB-PK-000000").replace(
      /[^a-zA-Z0-9_-]/g,
      "",
    );
    doc.save(`BeautyOfBeaches-Booking-${safeRef}.pdf`);
  };

  window.downloadBookingTicket = window.downloadBookingPDF;

  const initNavActive = () => {
    const currentPath =
      window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (
        href === currentPath ||
        (currentPath === "" && href === "index.html")
      ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }

      link.addEventListener("click", function () {
        navLinks.forEach((l) => l.classList.remove("active"));
        this.classList.add("active");
      });
    });
  };

  const initBackToTop = () => {
    const btn = document.getElementById("backToTopBtn");
    if (!btn) return;

    window.addEventListener("scroll", () => {
      if (window.scrollY > 380) {
        btn.classList.add("visible");
      } else {
        btn.classList.remove("visible");
      }
    });

    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  };

  const initVisitorCounter = () => {
    const elements = document.querySelectorAll(
      "#visitorCount, #visitorCountMobile",
    );
    if (!elements.length) return;
    let base = 1428;
    setInterval(() => {
      base += Math.floor(Math.random() * 3) - 1;
      elements.forEach((el) => {
        el.textContent = base.toLocaleString("en-US");
      });
    }, 9000);
  };

  const initContinuousBottomTicker = () => {
    const dateEl = document.getElementById("tickerDate");
    const timeEl = document.getElementById("tickerTime");
    const locEl = document.getElementById("tickerLocation");

    const updateTickerDateTime = () => {
      const now = new Date();
      if (dateEl) {
        dateEl.textContent = now.toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
          year: "numeric",
        });
      }
      if (timeEl) {
        try {
          timeEl.textContent =
            now.toLocaleTimeString("en-US", {
              timeZone: "Asia/Karachi",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: true,
            }) + " PKT";
        } catch {
          timeEl.textContent = now.toLocaleTimeString() + " PKT";
        }
      }
    };

    updateTickerDateTime();
    setInterval(updateTickerDateTime, 1000);

    if (locEl) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const lat = position.coords.latitude.toFixed(4);
            const lon = position.coords.longitude.toFixed(4);
            locEl.innerHTML = `<span class="text-success"><i class="fa-solid fa-location-crosshairs"></i> GPS: ${lat}° N, ${lon}° E (Viewer Active)</span>`;
          },
          (err) => {
            locEl.innerHTML = `<span class="text-light"><i class="fa-solid fa-location-dot text-primary"></i> HQ: Karachi &amp; Hyderabad, Pakistan (24.86° N, 67.01° E)</span>`;
          },
          { timeout: 8000, maximumAge: 60000 },
        );
      } else {
        locEl.innerHTML = `<span class="text-light"><i class="fa-solid fa-location-dot text-primary"></i> HQ: Karachi &amp; Hyderabad, Pakistan</span>`;
      }
    }
  };

  window.downloadBeachGuidePdf = () => {
    const title =
      document.getElementById("modalBeachTitle")?.textContent?.trim() ||
      "Beach Destination";
    const location =
      document.getElementById("modalBeachLocation")?.textContent?.trim() ||
      "Coastal Zone";
    const price =
      document.getElementById("modalBeachPrice")?.textContent?.trim() ||
      "Rs. 25,000";
    const rating =
      document.getElementById("modalBeachRating")?.textContent?.trim() ||
      "4.9 Verified";
    const desc =
      document.getElementById("modalBeachDesc")?.textContent?.trim() ||
      "Explore breathtaking pristine sands, azure waters, and luxury coastal stays.";
    const waterTemp =
      document.getElementById("modalWaterTemp")?.textContent?.trim() || "26°C";
    const season =
      document.getElementById("modalBestSeason")?.textContent?.trim() ||
      "Oct – Mar";
    const crowd =
      document.getElementById("modalCrowdLevel")?.textContent?.trim() ||
      "Moderate";
    const tip =
      document.getElementById("modalTipText")?.textContent?.trim() ||
      "Book early for peak season coastal chalets.";

    if (!window.jspdf || !window.jspdf.jsPDF) {
      alert("PDF generator is initializing. Please try again in a moment.");
      return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    doc.setFillColor(6, 23, 34);
    doc.rect(0, 0, 210, 42, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("BeautyOfBeaches", 15, 18);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(212, 163, 115);
    doc.text("Official Destination & Expedition Dossier", 15, 26);
    doc.setTextColor(220, 240, 248);
    doc.text(
      `Generated: ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}`,
      15,
      33,
    );

    doc.setTextColor(8, 127, 140);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text(title, 15, 54);

    doc.setTextColor(100, 116, 139);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.text(`Location: ${location}  |  Rating: ${rating}`, 15, 62);

    doc.setFillColor(248, 249, 250);
    doc.roundedRect(15, 68, 180, 34, 3, 3, "F");
    doc.setTextColor(30, 41, 59);
    doc.setFontSize(10.5);
    const splitDesc = doc.splitTextToSize(desc, 170);
    doc.text(splitDesc, 20, 78);

    if (doc.autoTable) {
      doc.autoTable({
        startY: 110,
        head: [["Specification Metric", "Traveler Advisory Details"]],
        body: [
          ["Standard Package Rate", `${price} (Inclusive of STA Permits)`],
          ["Optimal Season Window", season],
          ["Average Water Temperature", waterTemp],
          ["Crowd Density / Privacy", crowd],
          ["Insider Concierge Advice", tip],
          [
            "Emergency Marine Safety",
            "24/7 Lifeguard & Marine Patrol coverage provided by BeautyOfBeaches",
          ],
        ],
        theme: "grid",
        headStyles: {
          fillColor: [8, 127, 140],
          textColor: [255, 255, 255],
          fontStyle: "bold",
        },
        styles: { fontSize: 10, cellPadding: 4, textColor: [30, 41, 59] },
        columnStyles: { 0: { fontStyle: "bold", cellWidth: 55 } },
      });
    }

    const finalY = doc.lastAutoTable ? doc.lastAutoTable.finalY + 15 : 180;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(6, 23, 34);
    doc.text("Important Visitor Guidelines & Conservation Terms:", 15, finalY);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(100, 116, 139);
    const terms = [
      "1. Eco-Conservation: Respect nesting marine turtles and fragile coral reefs. Plastic disposal is strictly prohibited.",
      "2. Escrow Protection: All bookings are protected by 256-bit SSL escrow settlement in Pakistani Rupees (PKR).",
      "3. 24/7 Concierge Hotline: +92 327 243 9753  |  Email: concierge@beautyofbeaches.pk",
      "4. Headquarters: Hyderabad & Karachi, Sindh, Pakistan (SECP & STA Registered).",
    ];
    doc.text(terms, 15, finalY + 8);

    doc.setFillColor(6, 23, 34);
    doc.rect(0, 282, 210, 15, "F");
    doc.setFontSize(8.5);
    doc.setTextColor(255, 255, 255);
    doc.text(
      "© 2026 BeautyOfBeaches • All Rights Reserved • Aptech eProject Learning Environment",
      105,
      290,
      { align: "center" },
    );

    const safeFilename = `BeautyOfBeaches-${title.replace(/[^a-zA-Z0-9]/g, "_")}-Guide.pdf`;
    doc.save(safeFilename);
  };

  window.downloadBeachGuideDoc = () => {
    const title =
      document.getElementById("modalBeachTitle")?.textContent?.trim() ||
      "Beach Destination";
    const location =
      document.getElementById("modalBeachLocation")?.textContent?.trim() ||
      "Coastal Zone";
    const price =
      document.getElementById("modalBeachPrice")?.textContent?.trim() ||
      "Rs. 25,000";
    const rating =
      document.getElementById("modalBeachRating")?.textContent?.trim() ||
      "4.9 Verified";
    const desc =
      document.getElementById("modalBeachDesc")?.textContent?.trim() ||
      "Explore breathtaking pristine sands, azure waters, and luxury coastal stays.";
    const waterTemp =
      document.getElementById("modalWaterTemp")?.textContent?.trim() || "26°C";
    const season =
      document.getElementById("modalBestSeason")?.textContent?.trim() ||
      "Oct – Mar";
    const crowd =
      document.getElementById("modalCrowdLevel")?.textContent?.trim() ||
      "Moderate";
    const tip =
      document.getElementById("modalTipText")?.textContent?.trim() ||
      "Book early for peak season coastal chalets.";

    const docContent = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head>
        <meta charset='utf-8'>
        <title>${title} - BeautyOfBeaches Travel Dossier</title>
        <style>
          body { font-family: 'Calibri', 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #1e293b; margin: 40px; }
          .header { background: #061722; color: #ffffff; padding: 25px; border-radius: 6px; }
          .header h1 { margin: 0; color: #ffffff; font-size: 26px; }
          .header p { margin: 5px 0 0; color: #d4a373; font-size: 14px; }
          h2 { color: #087f8c; border-bottom: 2px solid #087f8c; padding-bottom: 6px; margin-top: 25px; }
          table { width: 100%; border-collapse: collapse; margin-top: 15px; }
          th, td { border: 1px solid #cbd5e1; padding: 10px; text-align: left; }
          th { background: #087f8c; color: #ffffff; }
          .tip-box { background: #f8fafc; border-left: 4px solid #d4a373; padding: 12px 18px; margin: 20px 0; }
          .footer { margin-top: 40px; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; padding-top: 15px; }
        </style>
      </head>
      <body>
        <div class='header'>
          <h1>BeautyOfBeaches • Destination Guide</h1>
          <p>Official Traveler Expedition Dossier & Coastal Advisory</p>
        </div>

        <h2>${title}</h2>
        <p><strong>Geographical Zone / Location:</strong> ${location}</p>
        <p><strong>Visitor Rating:</strong> ${rating}</p>
        <p><strong>Package Rate (PKR):</strong> ${price}</p>

        <h2>Overview &amp; Natural Attractions</h2>
        <p>${desc}</p>

        <h2>Destination Metrics</h2>
        <table>
          <tr><th>Metric</th><th>Details</th></tr>
          <tr><td>Optimal Travel Window</td><td>${season}</td></tr>
          <tr><td>Water Temperature</td><td>${waterTemp}</td></tr>
          <tr><td>Crowd Density / Privacy</td><td>${crowd}</td></tr>
          <tr><td>Transportation Access</td><td>Highway Coaches, Private Coastal 4WD &amp; Island Flights Available</td></tr>
          <tr><td>Emergency Lifeguard Protection</td><td>24/7 Verified Coastal Concierge &amp; Marine Patrol Coverage</td></tr>
        </table>

        <div class='tip-box'>
          <strong>Insider Travel Tip:</strong> ${tip}
        </div>

        <h2>Visitor Terms &amp; Marine Conservation</h2>
        <ul>
          <li>Strict anti-littering and marine wildlife conservation policies apply at all coastal zones.</li>
          <li>All payments and bookings are processed under 256-bit SSL encrypted escrow settlement in PKR.</li>
          <li>For bespoke inquiries and assistance: Call +92 327 243 9753 or email concierge@beautyofbeaches.pk.</li>
        </ul>

        <div class='footer'>
          <p>&copy; 2026 BeautyOfBeaches. All Rights Reserved. Curated by Shaman Ali Piraro (Lead), Mahrukh Khan Pathan, Aatish Aakash, and Muhammad Umair.</p>
          <p>Organization: Aptech Computer Education • Head Office: Hyderabad &amp; Karachi, Sindh, Pakistan.</p>
        </div>
      </body>
      </html>
    `;

    const blob = new Blob(["\ufeff", docContent], {
      type: "application/msword",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `BeautyOfBeaches-${title.replace(/[^a-zA-Z0-9]/g, "_")}-Guide.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  window.handleFeedbackSubmit = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const name = document.getElementById("fbName")?.value?.trim();
    const email = document.getElementById("fbEmail")?.value?.trim();
    const beach =
      document.getElementById("fbBeach")?.value || "General Experience";
    const rating =
      document.querySelector('input[name="fbRating"]:checked')?.value || "5";
    const comments = document.getElementById("fbComments")?.value?.trim();

    if (!name || !email || !comments) {
      alert("Please fill in your name, email, and feedback comments.");
      return;
    }

    const feedbackRecord = {
      id: "FB-" + Date.now(),
      name,
      email,
      beach,
      rating,
      comments,
      date: new Date().toISOString(),
    };

    try {
      const existing = JSON.parse(
        localStorage.getItem("beautyOfBeaches_feedbacks") || "[]",
      );
      existing.unshift(feedbackRecord);
      localStorage.setItem(
        "beautyOfBeaches_feedbacks",
        JSON.stringify(existing),
      );
    } catch (err) {}

    const form = document.getElementById("feedbackForm");
    const successMsg = document.getElementById("feedbackSuccessAlert");
    if (form) form.reset();
    if (successMsg) {
      successMsg.classList.remove("d-none");
      setTimeout(() => successMsg.classList.add("d-none"), 5000);
    } else {
      alert(
        `Thank you, ${name}! Your ${rating}-star feedback for ${beach} has been recorded.`,
      );
    }
  };

  window.handleQuerySubmit = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const name = document.getElementById("queryName")?.value?.trim();
    const contact = document.getElementById("queryContact")?.value?.trim();
    const topic =
      document.getElementById("queryTopic")?.value || "General Inquiry";
    const question = document.getElementById("queryQuestion")?.value?.trim();

    if (!name || !contact || !question) {
      alert("Please complete all required query fields.");
      return;
    }

    const queryRecord = {
      id: "QRY-" + Date.now(),
      name,
      contact,
      topic,
      question,
      timestamp: new Date().toISOString(),
    };

    try {
      const queries = JSON.parse(
        localStorage.getItem("beautyOfBeaches_queries") || "[]",
      );
      queries.unshift(queryRecord);
      localStorage.setItem("beautyOfBeaches_queries", JSON.stringify(queries));
    } catch (err) {}

    const form = document.getElementById("queriesForm");
    const successAlert = document.getElementById("querySuccessAlert");
    if (form) form.reset();
    if (successAlert) {
      successAlert.classList.remove("d-none");
      setTimeout(() => successAlert.classList.add("d-none"), 5000);
    } else {
      alert(
        `Thank you, ${name}! Your query regarding "${topic}" has been logged. Our coastal concierge will reach out via ${contact}.`,
      );
    }
  };

  const initMobileNavAutoClose = () => {
    const navCollapse = document.getElementById("mainNav");
    if (!navCollapse) return;

    const actionItems = navCollapse.querySelectorAll(
      '[data-bs-toggle="modal"], [data-bs-toggle="offcanvas"], .dropdown-item-pay',
    );
    actionItems.forEach((item) => {
      item.addEventListener("click", () => {
        if (window.innerWidth < 992 && window.bootstrap) {
          const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
          if (bsCollapse) {
            bsCollapse.hide();
          }
        }
      });
    });
  };

  const initZoneFilters = () => {
    const filterBtns = document.querySelectorAll(".zone-filter-btn");
    const cards = document.querySelectorAll(".beach-card");
    const countEl = document.getElementById("resultCount");
    if (!filterBtns.length || !cards.length) return;

    const filterToZone = (zone) => {
      let count = 0;
      cards.forEach((card) => {
        if (zone === "all" || card.getAttribute("data-zone") === zone) {
          card.classList.remove("d-none");
          count++;
        } else {
          card.classList.add("d-none");
        }
      });

      filterBtns.forEach((btn) => {
        btn.classList.toggle("active", btn.getAttribute("data-zone") === zone);
      });

      if (countEl) {
        countEl.textContent = `Showing ${count} destination${count !== 1 ? "s" : ""} in ${zone === "all" ? "All Zones" : zone + " Zone"}`;
      }
    };

    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () =>
        filterToZone(btn.getAttribute("data-zone")),
      );
    });

    const queryZone = new URLSearchParams(window.location.search).get("zone");
    if (queryZone && ["West", "North", "East", "South"].includes(queryZone)) {
      filterToZone(queryZone);
    }
  };

  document.addEventListener("DOMContentLoaded", () => {
    initVideoToggle();
    initScrollAnimations();
    initStatsCounters();
    initQuickFilters();
    initPktClock();
    initLightboxEvents();
    initGalleryFilters();
    initBackToTop();
    initVisitorCounter();
    initNavActive();
    initContinuousBottomTicker();
    updateWishlistUI();
    recalculateIndexPrice();
    initPaymentPage();
    initDroneReelsInteractivity();
    initMobileNavAutoClose();
    initContactRating();
    initZoneFilters();
  });
})();
