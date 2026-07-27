/**
 * VISIT CHANGWON - FOREIGN TOURIST PORTAL APPLICATION LOGIC
 */

let currentLang = 'en';
let currentCurrency = 'USD';
let currentCategory = 'all';
let searchQuery = '';
let savedPlaces = JSON.parse(localStorage.getItem('changwon_saved_places') || '[]');
let leafletMap = null;
let mapMarkers = [];
let currentTaxiAddress = '';
let currentTaxiPhrase = '';

// Currency exchange rates relative to KRW
const CURRENCY_RATES = {
  USD: { rate: 1340, symbol: '$' },
  EUR: { rate: 1460, symbol: '€' },
  JPY: { rate: 9.0, symbol: '¥' },
  CNY: { rate: 185, symbol: '¥' }
};

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initApp();
});

function initApp() {
  // Event listeners
  document.getElementById('langSelect').addEventListener('change', (e) => setLanguage(e.target.value));
  document.getElementById('currencySelect').addEventListener('change', (e) => {
    currentCurrency = e.target.value;
    updateCurrencyConverter();
  });
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);
  document.getElementById('searchInput').addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderAttractions();
  });
  document.getElementById('krwInput').addEventListener('input', updateCurrencyConverter);
  document.getElementById('savedDrawerBtn').addEventListener('click', openSavedModal);
  document.getElementById('btnGenerateItinerary').addEventListener('click', generateItinerary);

  setupCategoryFilters();
  setupTabs();
  
  // Set initial language & render
  setLanguage('en');
  initMap();
  updateSavedBadgeCount();
  updateCurrencyConverter();
  renderTopRecommendedRoutes();
  generateItinerary(); // Initial itinerary load
}

function quickSearch(tag) {
  const cleanTag = tag.replace('#', '').toLowerCase();
  const input = document.getElementById('searchInput');
  if (input) {
    input.value = cleanTag;
    searchQuery = cleanTag;
    renderAttractions();
    document.getElementById('attractions').scrollIntoView({ behavior: 'smooth' });
  }
}

/* -------------------------------------------------------------------------- */
/* LANGUAGE TRANSLATION SYSTEM                                                */
/* -------------------------------------------------------------------------- */
function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;

  // Translate static UI elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[lang][key]) {
      el.textContent = TRANSLATIONS[lang][key];
    }
  });

  // Translate input placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (TRANSLATIONS[lang][key]) {
      el.placeholder = TRANSLATIONS[lang][key];
    }
  });

  // Re-render dynamic sections
  renderTopRecommendedRoutes();
  renderAttractions();
  renderFoodGuide();
  renderEmergencyNumbers();
  renderTaxiPhrases();
  updateMapMarkers();
}

/* -------------------------------------------------------------------------- */
/* THEME TOGGLE (LIGHT / DARK)                                               */
/* -------------------------------------------------------------------------- */
function initTheme() {
  const savedTheme = localStorage.getItem('changwon_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('changwon_theme', next);
  updateThemeIcon(next);
}

function updateThemeIcon(theme) {
  const icon = document.querySelector('#themeToggle i');
  if (icon) {
    icon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  }
}

/* -------------------------------------------------------------------------- */
/* CATEGORY FILTERS                                                           */
/* -------------------------------------------------------------------------- */
function setupCategoryFilters() {
  const buttons = document.querySelectorAll('#categoryFilterBar .gov-tab-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-cat');
      renderAttractions();
    });
  });
}

function triggerGovSearch() {
  const districtSelect = document.getElementById('districtSearchSelect');
  const selectedDistrict = districtSelect ? districtSelect.value : 'all';
  const queryInput = document.getElementById('searchInput');
  searchQuery = queryInput ? queryInput.value.toLowerCase().trim() : '';

  renderAttractions(selectedDistrict);
  document.getElementById('attractions').scrollIntoView({ behavior: 'smooth' });
}

/* -------------------------------------------------------------------------- */
/* RENDER ATTRACTIONS CARDS (.GO.KR STYLE)                                    */
/* -------------------------------------------------------------------------- */
function renderAttractions(selectedDistrictFilter = 'all') {
  const container = document.getElementById('attractionsGrid');
  if (!container) return;

  let list = ATTRACTIONS;

  // Filter by category
  if (currentCategory !== 'all') {
    list = list.filter(item => item.category === currentCategory);
  }

  // Filter by district select dropdown
  if (selectedDistrictFilter && selectedDistrictFilter !== 'all') {
    list = list.filter(item => item.district.toLowerCase().includes(selectedDistrictFilter.toLowerCase()));
  }

  // Filter by search query
  if (searchQuery) {
    list = list.filter(item => {
      const nameStr = (item.name[currentLang] || item.name.en).toLowerCase();
      const sumStr = (item.summary[currentLang] || item.summary.en).toLowerCase();
      const distStr = item.district.toLowerCase();
      const addrStr = item.koreanAddress.toLowerCase();
      return nameStr.includes(searchQuery) || sumStr.includes(searchQuery) || distStr.includes(searchQuery) || addrStr.includes(searchQuery);
    });
  }

  if (list.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--gov-text-muted);">
        <i class="fa-solid fa-magnifying-glass" style="font-size: 2.5rem; margin-bottom: 1rem; color: var(--gov-blue);"></i>
        <h3 style="font-size:1.1rem; font-weight:800;">검색 결과가 없습니다 (No matching destinations found).</h3>
        <p style="font-size:0.9rem;">'진해', '감천리', '한옥' 등의 키워드로 검색해 보세요.</p>
      </div>
    `;
    return;
  }

  const t = TRANSLATIONS[currentLang];

  container.innerHTML = list.map(item => {
    const isSaved = savedPlaces.includes(item.id);
    const name = item.name[currentLang] || item.name.en;
    const summary = item.summary[currentLang] || item.summary.en;

    return `
      <div class="gov-card">
        <div class="gov-card-img">
          <img src="${item.image}" alt="${name}" loading="lazy">
          <span class="gov-cert-badge">${item.isMustVisit ? '창원시 대표명소' : '창원시 추천명소'}</span>
          <button class="card-save-btn ${isSaved ? 'active' : ''}" onclick="toggleSavePlace('${item.id}')" title="Save">
            <i class="fa-solid fa-bookmark"></i>
          </button>
        </div>
        <div class="gov-card-body">
          <div class="gov-card-district"><i class="fa-solid fa-location-dot"></i> ${item.district}</div>
          <h3 class="gov-card-title">${name}</h3>
          <p style="font-size:0.86rem; color:var(--gov-text-muted); margin-bottom:0.6rem;">${summary}</p>
          
          <table class="gov-info-table">
            <tr>
              <td class="label">📍 주소</td>
              <td>${item.koreanAddress}</td>
            </tr>
            <tr>
              <td class="label">⏰ 운영시간</td>
              <td>${item.hours}</td>
            </tr>
            <tr>
              <td class="label">🎫 입장료</td>
              <td>${item.admission}</td>
            </tr>
          </table>

          <div class="gov-card-actions">
            <button class="gov-btn-main" onclick="openAttractionModal('${item.id}')">
              ${t.btn_details || '상세보기'}
            </button>
            <button class="gov-btn-sub" onclick="openTaxiModal('${item.id}')">
              <i class="fa-solid fa-taxi"></i> ${t.btn_taxi_card || '택시 안내'}
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

/* -------------------------------------------------------------------------- */
/* INTERACTIVE LEAFLET MAP                                                    */
/* -------------------------------------------------------------------------- */
function initMap() {
  const mapEl = document.getElementById('leaflet-map');
  if (!mapEl) return;

  // Center on Changwon City
  leafletMap = L.map('leaflet-map').setView([35.18, 128.62], 11);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(leafletMap);

  updateMapMarkers();
}

function updateMapMarkers() {
  if (!leafletMap) return;

  // Clear existing markers
  mapMarkers.forEach(m => leafletMap.removeLayer(m));
  mapMarkers = [];

  ATTRACTIONS.forEach(item => {
    const name = item.name[currentLang] || item.name.en;
    const marker = L.marker(item.coordinates).addTo(leafletMap);
    
    marker.bindPopup(`
      <div style="font-family: sans-serif; padding: 4px;">
        <h4 style="margin:0 0 4px 0; color:#0066FF;">${name}</h4>
        <p style="margin:0 0 8px 0; font-size:0.82rem; color:#555;">${item.district}</p>
        <button onclick="openAttractionModal('${item.id}')" style="background:#FF5E8E; color:white; border:none; padding:4px 8px; border-radius:6px; font-weight:bold; cursor:pointer; font-size:0.75rem;">
          View Details
        </button>
      </div>
    `);

    mapMarkers.push(marker);
  });
}

/* -------------------------------------------------------------------------- */
/* ATTRACTION DETAIL MODAL                                                    */
/* -------------------------------------------------------------------------- */
function openAttractionModal(id) {
  const item = ATTRACTIONS.find(a => a.id === id);
  if (!item) return;

  const t = TRANSLATIONS[currentLang];
  const name = item.name[currentLang] || item.name.en;
  const description = item.description[currentLang] || item.description.en;
  const transport = item.transport[currentLang] || item.transport.en;

  const contentHtml = `
    <div style="border-radius: 16px; overflow: hidden; height: 260px; margin-bottom: 1.5rem;">
      <img src="${item.image}" alt="${name}" style="width:100%; height:100%; object-fit:cover;">
    </div>
    
    <span class="card-district">${item.district}</span>
    <h2 style="font-size: 1.8rem; font-weight: 800; margin-bottom: 0.8rem;">${name}</h2>

    <p style="font-size: 1rem; color: var(--text-muted); margin-bottom: 1.5rem;">${description}</p>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem; background: var(--bg-main); padding: 1.2rem; border-radius: 16px;">
      <div>
        <div style="font-size:0.8rem; font-weight:700; color:var(--text-muted);">${t.label_hours}</div>
        <div style="font-weight:700;">${item.hours}</div>
      </div>
      <div>
        <div style="font-size:0.8rem; font-weight:700; color:var(--text-muted);">${t.label_admission}</div>
        <div style="font-weight:700; color:var(--green-eco);">${item.admission}</div>
      </div>
    </div>

    <!-- How to get there -->
    <div style="margin-bottom: 1.5rem;">
      <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 0.4rem;">
        <i class="fa-solid fa-bus" style="color:var(--blue-primary);"></i> ${t.label_transport}
      </h4>
      <p style="font-size: 0.92rem; color: var(--text-muted);">${transport}</p>
    </div>

    <!-- Taxi Card Action -->
    <div style="display:flex; gap:1rem;">
      <button class="btn-primary" onclick="closeModal('attractionModal'); openTaxiModal('${item.id}')">
        <i class="fa-solid fa-taxi"></i> ${t.btn_taxi_card}
      </button>
      <a href="https://map.kakao.com/link/map/${encodeURIComponent(item.koreanAddress)},${item.coordinates[0]},${item.coordinates[1]}" target="_blank" class="btn-secondary" style="text-decoration:none;">
        <i class="fa-solid fa-map-location-dot"></i> ${t.btn_view_map}
      </a>
    </div>
  `;

  document.getElementById('attractionModalContent').innerHTML = contentHtml;
  openModal('attractionModal');
}

/* -------------------------------------------------------------------------- */
/* TAXI DRIVER CARD MODAL & AUDIO TTS                                        */
/* -------------------------------------------------------------------------- */
function openTaxiModal(id) {
  const item = ATTRACTIONS.find(a => a.id === id);
  if (!item) return;

  currentTaxiAddress = item.koreanAddress;
  currentTaxiPhrase = item.taxiPhrase;

  document.getElementById('taxiModalPhrase').textContent = item.taxiPhrase;
  document.getElementById('taxiModalAddress').textContent = item.koreanAddress;

  openModal('taxiModal');
}

function copyTaxiAddress() {
  if (!currentTaxiAddress) return;
  navigator.clipboard.writeText(currentTaxiAddress).then(() => {
    showToast('Taxi address copied to clipboard!');
  });
}

function speakTaxiPhrase() {
  if (!currentTaxiPhrase) return;
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(currentTaxiPhrase);
    utterance.lang = 'ko-KR';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
    showToast('Playing Korean audio...');
  } else {
    showToast('Audio synthesis not supported on this browser.');
  }
}

/* -------------------------------------------------------------------------- */
/* SAVED PLACES (LOCALSTORAGE)                                               */
/* -------------------------------------------------------------------------- */
function toggleSavePlace(id) {
  const index = savedPlaces.indexOf(id);
  if (index > -1) {
    savedPlaces.splice(index, 1);
    showToast('Removed from saved places.');
  } else {
    savedPlaces.push(id);
    showToast('Saved to your bucket list!');
  }

  localStorage.setItem('changwon_saved_places', JSON.stringify(savedPlaces));
  updateSavedBadgeCount();
  renderAttractions();
}

function updateSavedBadgeCount() {
  const badge = document.getElementById('savedCountBadge');
  if (badge) {
    badge.textContent = savedPlaces.length;
  }
}

function openSavedModal() {
  const container = document.getElementById('savedListContainer');
  if (!container) return;

  if (savedPlaces.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:2rem; color:var(--text-muted);">
        <i class="fa-regular fa-heart" style="font-size:2.5rem; color:var(--pink-primary); margin-bottom:0.5rem;"></i>
        <p>You haven't saved any places yet.</p>
      </div>
    `;
  } else {
    const list = ATTRACTIONS.filter(a => savedPlaces.includes(a.id));
    container.innerHTML = list.map(item => {
      const name = item.name[currentLang] || item.name.en;
      return `
        <div style="display:flex; align-items:center; gap:1rem; background:var(--bg-main); padding:0.8rem; border-radius:14px;">
          <img src="${item.image}" style="width:60px; height:60px; border-radius:10px; object-fit:cover;">
          <div style="flex-grow:1;">
            <h4 style="font-size:1rem; font-weight:700;">${name}</h4>
            <span style="font-size:0.8rem; color:var(--text-muted);">${item.district}</span>
          </div>
          <button class="btn-secondary" onclick="openTaxiModal('${item.id}')" style="padding:0.4rem 0.8rem;">
            <i class="fa-solid fa-taxi"></i>
          </button>
          <button style="background:none; border:none; color:#EF4444; font-size:1.2rem; cursor:pointer;" onclick="toggleSavePlace('${item.id}'); openSavedModal();">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      `;
    }).join('');
  }

  openModal('savedModal');
}

/* -------------------------------------------------------------------------- */
/* SMART ITINERARY GENERATOR                                                  */
/* -------------------------------------------------------------------------- */
function generateItinerary() {
  const duration = parseInt(document.getElementById('itinDurationSelect').value || '1');
  const style = document.getElementById('itinStyleSelect').value || 'nature';
  const container = document.getElementById('itineraryDisplayContainer');
  if (!container) return;

  const t = TRANSLATIONS[currentLang];
  const preset = PRESET_ITINERARIES.find(p => p.duration === duration) || PRESET_ITINERARIES[0];

  const title = preset.title[currentLang] || preset.title.en;
  const desc = preset.desc[currentLang] || preset.desc.en;

  let timelineHtml = preset.steps.map(step => `
    <div class="timeline-step">
      <div style="font-size:0.82rem; font-weight:800; color:var(--gov-blue);">${step.time}</div>
      <h4 style="font-size:1.05rem; font-weight:800; margin: 2px 0;">${step.place}</h4>
      <p style="font-size:0.88rem; color:var(--gov-text-muted);">${step.note}</p>
    </div>
  `).join('');

  container.innerHTML = `
    <div style="background:var(--gov-gray-bg); border-radius:6px; padding:1.4rem; border:1px solid var(--gov-border);">
      <h3 style="font-size: 1.3rem; font-weight: 800; color: var(--gov-navy); margin-bottom: 0.3rem;">${title}</h3>
      <p style="color: var(--gov-text-muted); font-size: 0.9rem;">${desc}</p>
      
      <div class="itin-timeline">
        ${timelineHtml}
      </div>
    </div>
  `;
}

/* -------------------------------------------------------------------------- */
/* FOOD & SURVIVAL KIT RENDERING                                              */
/* -------------------------------------------------------------------------- */
function renderFoodGuide() {
  const container = document.getElementById('foodGrid');
  if (!container) return;

  container.innerHTML = FOOD_GUIDE.map(item => {
    const name = item.name[currentLang] || item.name.en;
    const desc = item.desc[currentLang] || item.desc.en;

    return `
      <div class="gov-card" style="padding:1.4rem;">
        <span class="gov-cert-badge" style="position:static; display:inline-block; margin-bottom:0.6rem;">창원 우수미식</span>
        <h3 style="font-size: 1.2rem; font-weight: 800; color:var(--gov-navy);">${name}</h3>
        <p style="font-size: 0.88rem; color: var(--gov-text-muted); flex-grow: 1; margin:0.6rem 0;">${desc}</p>
        <div style="font-size: 0.82rem; font-weight: 700; color: var(--gov-blue); background: var(--gov-blue-light); padding: 0.5rem 0.8rem; border-radius: 4px;">
          📍 추천 위치: ${item.recommendedLoc}
        </div>
      </div>
    `;
  }).join('');
}

function renderEmergencyNumbers() {
  const container = document.getElementById('emergencyList');
  if (!container) return;

  container.innerHTML = SURVIVAL_HELP.emergencyNumbers.map(item => `
    <div class="emergency-card">
      <h4>${item.title}</h4>
      <p style="font-size: 0.88rem; color: var(--text-muted);">${item.desc}</p>
      <a href="tel:${item.phone.replace(/[^0-9]/g, '')}" class="phone-btn">
        <i class="fa-solid fa-phone"></i> Call ${item.phone}
      </a>
    </div>
  `).join('');
}

function renderTaxiPhrases() {
  const container = document.getElementById('taxiPhrasesList');
  if (!container) return;

  container.innerHTML = SURVIVAL_HELP.taxiPhrases.map(item => `
    <div style="background: var(--bg-card); padding: 1rem; border-radius: 14px; border: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center;">
      <div>
        <div style="font-size: 1.1rem; font-weight: 800; color: var(--pink-primary);">${item.phrase}</div>
        <div style="font-size: 0.85rem; color: var(--text-muted);">${item.en} (${item.pinyin})</div>
      </div>
      <button class="btn-secondary" onclick="speakText('${item.phrase}')" style="padding: 0.5rem 0.8rem;">
        <i class="fa-solid fa-volume-high"></i>
      </button>
    </div>
  `).join('');
}

function speakText(text) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ko-KR';
    window.speechSynthesis.speak(utterance);
  }
}

/* -------------------------------------------------------------------------- */
/* CURRENCY CONVERTER                                                         */
/* -------------------------------------------------------------------------- */
function updateCurrencyConverter() {
  const krw = parseFloat(document.getElementById('krwInput').value || '0');
  const info = CURRENCY_RATES[currentCurrency] || CURRENCY_RATES.USD;
  const converted = (krw / info.rate).toFixed(2);
  document.getElementById('convertedResult').textContent = `${info.symbol}${converted} ${currentCurrency}`;
}

/* -------------------------------------------------------------------------- */
/* TAB & MODAL HELPERS                                                        */
/* -------------------------------------------------------------------------- */
function setupTabs() {
  const tabLinks = document.querySelectorAll('.tab-link');
  tabLinks.forEach(link => {
    link.addEventListener('click', () => {
      tabLinks.forEach(l => l.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

      link.classList.add('active');
      const tabId = link.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
    });
  });
}

function openModal(id) {
  document.getElementById(id).classList.add('active');
}

function closeModal(id) {
  document.getElementById(id).classList.remove('active');
}

function showToast(msg) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color:var(--pink-primary);"></i> ${msg}`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

/* -------------------------------------------------------------------------- */
/* TOP RECOMMENDED ROUTES RENDERING                                           */
/* -------------------------------------------------------------------------- */
function renderTopRecommendedRoutes() {
  const container = document.getElementById('topRoutesGrid');
  if (!container) return;

  container.innerHTML = RECOMMENDED_ROUTES.map(route => {
    const title = route.title[currentLang] || route.title.en || route.title.ko;
    
    // Construct Visual Route Flowchart Nodes
    const flowNodesHtml = route.stops.map((stop, idx) => {
      const isLast = idx === route.stops.length - 1;
      const numStr = (idx + 1).toString().padStart(2, '0');

      return `
        <div class="route-node">
          <span class="route-node-num">${numStr}</span>
          <span style="font-size:0.9rem;">${stop.icon || '📍'}</span>
          <span class="route-node-title">${stop.name}</span>
        </div>
        ${!isLast ? `
          <div class="route-arrow-connector">
            <span>${stop.travelTimeNext || '➔'}</span>
            <i class="fa-solid fa-angle-right"></i>
          </div>
        ` : ''}
      `;
    }).join('');

    return `
      <div class="gov-card" style="padding: 1.4rem;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.6rem;">
          <span class="gov-cert-badge" style="position:static; display:inline-block;">${route.badge}</span>
          <span style="font-size:0.8rem; font-weight:800; color:var(--gov-navy); background:var(--gov-gray-bg); padding:0.2rem 0.6rem; border-radius:4px;">${route.type}</span>
        </div>

        <h3 style="font-size: 1.18rem; font-weight: 800; color: var(--gov-navy); margin-bottom: 0.6rem;">${title}</h3>

        <div style="font-size: 0.82rem; font-weight:700; color:var(--gov-text-muted); margin-bottom: 0.3rem;">
          <i class="fa-solid fa-clock"></i> 소요시간: ${route.duration}
        </div>
        
        <div style="font-size: 0.82rem; font-weight:700; color:var(--gov-blue); margin-bottom: 0.8rem;">
          <i class="fa-solid fa-bus"></i> 대표 교통편: ${route.transit}
        </div>

        <!-- VISUAL ROUTE FLOWCHART (한 눈에 들어오는 그래픽 이동경로) -->
        <div style="margin-bottom:0.4rem; font-size:0.75rem; font-weight:800; color:var(--gov-navy); letter-spacing:0.5px;">
          🗺️ 한 눈에 보는 순서별 이동경로 (VISUAL ROUTE MAP):
        </div>
        <div class="route-flow-container">
          ${flowNodesHtml}
        </div>

        <div style="display:flex; gap:8px; margin-top:auto; padding-top:0.6rem;">
          <button class="gov-btn-main" onclick="openRouteDetailModal('${route.id}')">
            <i class="fa-solid fa-route"></i> 코스 상세 타임라인
          </button>
          <button class="gov-btn-sub" onclick="scrollToMap()">
            <i class="fa-solid fa-map-location-dot"></i> 지도 위치
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function openRouteDetailModal(routeId) {
  const route = RECOMMENDED_ROUTES.find(r => r.id === routeId);
  if (!route) return;

  const title = route.title[currentLang] || route.title.en || route.title.ko;
  let stepsHtml = route.steps.map(step => `
    <div style="display:flex; gap:1rem; padding:0.8rem; background:var(--gov-gray-bg); border-radius:6px; margin-bottom:0.6rem; align-items:flex-start;">
      <div style="font-weight:800; color:var(--gov-blue); font-size:0.85rem; width:120px; flex-shrink:0;">${step.time}</div>
      <div>
        <h4 style="font-size:0.98rem; font-weight:800; color:var(--gov-navy);">${step.place}</h4>
        <p style="font-size:0.85rem; color:var(--gov-text-muted);">${step.desc}</p>
      </div>
    </div>
  `).join('');

  const modalHtml = `
    <div style="border-bottom:2px solid var(--gov-navy); padding-bottom:0.8rem; margin-bottom:1rem;">
      <span class="gov-cert-badge" style="position:static;">${route.badge}</span>
      <h2 style="font-size:1.35rem; font-weight:800; color:var(--gov-navy); margin-top:0.4rem;">${title}</h2>
      <p style="font-size:0.88rem; color:var(--gov-text-muted); margin-top:0.3rem;"><strong>교통편:</strong> ${route.transit} | <strong>소요시간:</strong> ${route.duration}</p>
    </div>

    <h4 style="font-size:1rem; font-weight:800; margin-bottom:0.6rem;">📍 타임라인 상세 코스</h4>
    ${stepsHtml}

    <div style="margin-top:1.2rem; display:flex; gap:0.8rem;">
      <button class="gov-btn-main" onclick="closeModal('attractionModal'); scrollToMap();">
        <i class="fa-solid fa-map-location-dot"></i> 전체 지도 위치 보기
      </button>
      <button class="gov-btn-sub" onclick="closeModal('attractionModal')">
        닫기
      </button>
    </div>
  `;

  document.getElementById('attractionModalContent').innerHTML = modalHtml;
  openModal('attractionModal');
}

function scrollToMap() {
  const mapEl = document.getElementById('map');
  if (mapEl) {
    mapEl.scrollIntoView({ behavior: 'smooth' });
  }
}
