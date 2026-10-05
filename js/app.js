/**
 * DẤU NHỚ - Core Application Engine
 * Quản lý: State, Leaflet Map, Quiz, Audio & Mock Firestore Storage
 */

// 1. DỮ LIỆU ĐỊA ĐIỂM (MOCK DATA CỦA SÀI GÒN - TP.HCM)
const PLACES_DATA = [
  {
    id: "dia-dao-cu-chi",
    name: "Địa đạo Củ Chi",
    nameEn: "Cu Chi Tunnels",
    category: "Chiến tranh",
    area: "Củ Chi",
    address: "Củ Chi, TP.HCM",
    distance: "Cách bạn ~35 km",
    coords: [11.1436, 106.4632],
    heroImg: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80",
    sideImg: "https://images.unsplash.com/photo-1578922746465-3a80a228f223?auto=format&fit=crop&w=800&q=80",
    audioDuration: "2:42",
    period: "1940s – 1975",
    figure: "Chiến sĩ & Nhân dân Củ Chi đất thép",
    summary: "Một câu chuyện về cuộc sống, sự sáng tạo và chiến đấu kiên cường dưới lòng đất.",
    fullStory: `Địa đạo Củ Chi là hệ thống đường hầm bí mật với tổng chiều dài hơn 250 km, len lỏi sâu trong lòng đất như một tổ mối khổng lồ. Nơi đây không chỉ là chiến lũy phòng ngự mà còn là cả một thành phố ngầm thu nhỏ: có trạm xá, bếp Hoàng Cầm giấu khói, phòng chỉ huy và trường học.<br><br>Sống và chiến đấu hàng tháng trời trong bóng tối, thiếu ánh sáng và dưỡng khí, người dân Củ Chi vẫn bền gan kiến tạo nên kỳ tích lịch sử khiến thế giới phải ngả mũ khâm phục.`,
    whyWeRemember: "Địa đạo Củ Chi là minh chứng sống động cho tinh thần bất khuất, khả năng thích nghi phi thường và ý chí độc lập trường tồn của con người Việt Nam."
  },
  {
    id: "dinh-doc-lap",
    name: "Dinh Độc Lập",
    nameEn: "Independence Palace",
    category: "Di tích",
    area: "Quận 1",
    address: "135 Nam Kỳ Khởi Nghĩa, Quận 1, TP.HCM",
    distance: "Cách bạn ~2.1 km",
    coords: [10.7770, 106.6954],
    heroImg: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1200&q=80",
    sideImg: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    audioDuration: "3:15",
    period: "1966 – 1975",
    figure: "Kiến trúc sư Ngô Viết Thụ",
    summary: "Dấu mốc ghi dấu thời khắc thống nhất non sông ngày 30 tháng 4 năm 1975.",
    fullStory: `Dinh Độc Lập là tuyệt tác kết hợp giữa nghệ thuật kiến trúc hiện đại phương Tây và triết lý phong thủy phương Đông cổ truyền do KTS Ngô Viết Thụ quy hoạch. Mặt bằng tổng thể được kiến tạo theo chữ CÁT (吉) mang lại bình an.<br><br>Khoảnh khắc trưa ngày 30/4/1975, khi chiếc xe tăng húc đổ cánh cổng sắt tiến vào Dinh, nơi đây đã chính thức trở thành chứng nhân kết thúc cuộc chiến tranh kéo dài hơn 20 năm, mở ra kỷ nguyên hòa bình trọn vẹn.`,
    whyWeRemember: "Nơi biểu trưng cho khát vọng hòa bình, thống nhất trọn vẹn lãnh thổ và giá trị vô giá của sự tự do dân tộc."
  },
  {
    id: "bao-tang-chung-tich",
    name: "Bảo tàng Chứng tích Chiến tranh",
    nameEn: "War Remnants Museum",
    category: "Tưởng niệm",
    area: "Quận 3",
    address: "28 Võ Văn Tần, Quận 3, TP.HCM",
    distance: "Cách bạn ~3.0 km",
    coords: [10.7794, 106.6922],
    heroImg: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    sideImg: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    audioDuration: "4:01",
    period: "1975 – Nay",
    figure: "Phóng viên chiến trường quốc tế",
    summary: "Tiếng chuông thức tỉnh về nỗi đau chiến tranh và thông điệp hàn gắn hòa bình.",
    fullStory: `Bảo tàng lưu giữ hàng ngàn hiện vật, hình ảnh chân thực về sự tàn khốc của chiến tranh tại Việt Nam. Từng bức ảnh bom đạn, từng câu chuyện về nạn nhân chất độc da cam không phải để đào sâu hận thù, mà là lời cảnh tỉnh nhân loại về cái giá quá đắt của xung đột.<br><br>Nơi đây là điểm đến chạm tới trái tim của hàng triệu du khách quốc tế mỗi năm, minh chứng cho sự hồi sinh diệu kỳ từ tro tàn đổ nát.`,
    whyWeRemember: "Nhắc nhở thế hệ hôm nay trân quý nền hòa bình đang có và lan tỏa thông điệp hữu nghị giữa các quốc gia."
  }
];

// 2. DỮ LIỆU QUIZ HỌC LỊCH SỬ
const QUIZ_DATA = {
  id: "dia-dao-cu-chi",
  title: "Quiz — Thử thách Địa đạo Củ Chi",
  time: "3 phút",
  rewardPoints: 40,
  questions: [
    {
      q: "Hệ thống Địa đạo Củ Chi có tổng chiều dài các nhánh đường hầm ước tính khoảng bao nhiêu?",
      options: ["Khoảng 50 km", "Hơn 250 km", "Khoảng 500 km", "Khoảng 100 km"],
      correct: 1
    },
    {
      q: "Loại bếp dã chiến nào được sáng tạo để nấu ăn dưới lòng đất mà không để lộ khói lên bề mặt?",
      options: ["Bếp ga mini", "Bếp than bùn", "Bếp Hoàng Cầm", "Bếp dã chiến số 1"],
      correct: 2
    },
    {
      q: "Địa đạo Củ Chi thuộc địa phận nào của Thành phố Hồ Chí Minh ngày nay?",
      options: ["Huyện Cần Giờ", "Huyện Củ Chi", "Huyện Hóc Môn", "Quận 12"],
      correct: 1
    }
  ]
};

// 3. KHỞI TẠO ỨNG DỤNG
class DauNhoApp {
  constructor() {
    this.map = null;
    this.markers = [];
    this.currentStory = PLACES_DATA[0];
    this.user = {
      isLoggedIn: true,
      name: "Nguyễn Minh Anh",
      email: "minhanh@email.com",
      points: 120,
      savedIds: ["dia-dao-cu-chi"],
      exploredIds: ["dia-dao-cu-chi", "dinh-doc-lap"]
    };
    this.quizState = {
      currentQuestionIndex: 0,
      score: 0,
      isFinished: false
    };
    this.isPlayingAudio = false;

    this.init();
  }

  init() {
    this.loadStateFromStorage();
    this.renderHomeCards();
    this.renderSidebarPlaces(PLACES_DATA);
    this.renderStoryView(this.currentStory);
    this.renderQuizStart();
    this.renderJourney();
    this.updatePointsUI();
  }

  // Quản lý LocalStorage
  loadStateFromStorage() {
    const saved = localStorage.getItem("daunho_user");
    if (saved) {
      try {
        this.user = JSON.parse(saved);
      } catch (e) {
        console.error("Lỗi đọc dữ liệu người dùng", e);
      }
    }
  }

  saveStateToStorage() {
    localStorage.setItem("daunho_user", JSON.stringify(this.user));
    this.updatePointsUI();
  }

  updatePointsUI() {
    document.getElementById("navMemoryPoints").textContent = this.user.points;
    const journeyPts = document.getElementById("journeyPoints");
    const statPts = document.getElementById("statMemoryPoints");
    if (journeyPts) journeyPts.textContent = this.user.points;
    if (statPts) statPts.textContent = this.user.points;
  }

  // Điều hướng Page View
  navigate(pageId) {
    document.querySelectorAll(".page-view").forEach(el => el.classList.remove("active"));
    const target = document.getElementById(`page-${pageId}`);
    if (target) target.classList.add("active");

    // Active Tab trên Desktop Nav
    document.querySelectorAll(".nav-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.page === pageId);
    });

    // Active Tab trên Mobile Bottom Nav
    document.querySelectorAll(".bottom-nav-item").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.page === pageId);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Khởi tạo bản đồ nếu chọn Khám phá
    if (pageId === 'explore') {
      setTimeout(() => this.initLeafletMap(), 200);
    }
  }

  // Render Trang chủ Cards
  renderHomeCards() {
    const container = document.getElementById("homePlacesList");
    if (!container) return;

    container.innerHTML = PLACES_DATA.map(place => `
      <div class="card-item">
        <div class="card-img-wrap">
          <img src="${place.heroImg}" alt="${place.name}" class="card-img">
          <span class="card-tag">${place.category}</span>
        </div>
        <div class="card-body">
          <div class="card-meta">
            <span>📍 ${place.address}</span>
            <span>${place.distance}</span>
          </div>
          <h3 class="card-title">${place.name}</h3>
          <p class="card-desc">${place.summary}</p>
          <button class="btn btn-primary" onclick="app.openStory('${place.id}')">
            Xem câu chuyện →
          </button>
        </div>
      </div>
    `).join("");
  }

  // Khởi tạo bản đồ Leaflet
  initLeafletMap() {
    if (this.map) {
      this.map.invalidateSize();
      return;
    }

    // Tâm Sài Gòn
    this.map = L.map('map').setView([10.7770, 106.6954], 11);

    // Bản đồ nền tối giản, làm nổi bật di tích
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap &copy; CARTO',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(this.map);

    this.renderMarkers(PLACES_DATA);
  }

  renderMarkers(places) {
    // Xóa marker cũ
    this.markers.forEach(m => this.map.removeLayer(m));
    this.markers = [];

    places.forEach(place => {
      const marker = L.marker(place.coords).addTo(this.map);
      const popupHtml = `
        <div class="map-popup-card">
          <h4>${place.name}</h4>
          <p class="loc">📍 ${place.address}</p>
          <p class="quote">“${place.summary}”</p>
          <button class="btn btn-outline-sm btn-block" onclick="app.openStory('${place.id}')">
            Xem câu chuyện →
          </button>
        </div>
      `;
      marker.bindPopup(popupHtml);
      this.markers.push(marker);
    });
  }

  // Lọc tại trang Khám phá
  handleCategoryCheck(checkbox) {
    const checkboxes = document.querySelectorAll('.checkbox-item input');
    if (checkbox.value === 'Tất cả' && checkbox.checked) {
      checkboxes.forEach(cb => { if (cb.value !== 'Tất cả') cb.checked = false; });
    } else if (checkbox.checked) {
      checkboxes[0].checked = false;
    }
    this.applyFilters();
  }

  applyFilters() {
    const area = document.getElementById("areaFilter").value;
    const checkedCats = Array.from(document.querySelectorAll('.checkbox-item input:checked')).map(c => c.value);

    const filtered = PLACES_DATA.filter(place => {
      const matchArea = (area === 'all') || place.area.includes(area);
      const matchCat = checkedCats.includes('Tất cả') || checkedCats.includes(place.category);
      return matchArea && matchCat;
    });

    this.renderSidebarPlaces(filtered);
    if (this.map) {
      this.renderMarkers(filtered);
    }
  }

  renderSidebarPlaces(places) {
    const list = document.getElementById("sidebarPlaces");
    const countEl = document.getElementById("placeCount");
    if (!list) return;

    countEl.textContent = places.length;
    list.innerHTML = places.map(p => `
      <div class="mini-card" onclick="app.focusMapLocation(${p.coords[0]}, ${p.coords[1]}, '${p.id}')">
        <h4>${p.name}</h4>
        <p>📍 ${p.address} • <b>${p.category}</b></p>
      </div>
    `).join("");
  }

  focusMapLocation(lat, lng, placeId) {
    if (!this.map) return;
    this.map.flyTo([lat, lng], 14, { duration: 1.2 });
    const targetMarker = this.markers.find(m => {
      const p = m.getLatLng();
      return Math.abs(p.lat - lat) < 0.001 && Math.abs(p.lng - lng) < 0.001;
    });
    if (targetMarker) {
      setTimeout(() => targetMarker.openPopup(), 1200);
    }
  }

  // Xem chi tiết câu chuyện
  openStory(placeId) {
    const found = PLACES_DATA.find(p => p.id === placeId);
    if (found) {
      this.currentStory = found;
      this.renderStoryView(found);
      this.navigate('story');

      // Tự động ghi nhận đã đọc câu chuyện
      if (!this.user.exploredIds.includes(found.id)) {
        this.user.exploredIds.push(found.id);
        this.saveStateToStorage();
        this.renderJourney();
      }
    }
  }

  openDefaultStory() {
    this.openStory(this.currentStory.id || "dia-dao-cu-chi");
  }

  renderStoryView(place) {
    const container = document.getElementById("storyContainer");
    if (!container) return;

    const isSaved = this.user.savedIds.includes(place.id);

    container.innerHTML = `
      <div class="story-header" style="background-image: url('${place.heroImg}');">
        <div class="story-header-overlay"></div>
        <div class="story-header-inner">
          <span class="story-cat-badge">${place.category.toUpperCase()}</span>
          <h1 class="story-title">${place.name}</h1>
          <p class="story-subtitle">${place.nameEn} • 📍 ${place.address}</p>
          
          <div class="audio-player-bar">
            <button class="play-btn" onclick="app.toggleAudio(this)">▶</button>
            <span id="audioStatusText">Nghe câu chuyện <b>(${place.audioDuration})</b></span>
          </div>
        </div>
      </div>

      <nav class="story-nav-bar">
        <div class="story-nav-inner">
          <span onclick="window.scrollTo({top: 400, behavior:'smooth'})"><b>Tổng quan</b></span>
          <span>Con người</span>
          <span>Dòng thời gian</span>
          <span>Hình ảnh</span>
          <span onclick="window.scrollTo({top: 800, behavior:'smooth'})">Vì sao chúng ta nhớ?</span>
          <span onclick="app.toggleSavePlace('${place.id}')" style="margin-left: auto; color: var(--color-primary); font-weight:700;">
            ${isSaved ? '✓ Đã lưu địa điểm' : '🔖 Lưu địa điểm này'}
          </span>
        </div>
      </nav>

      <div class="story-body-container">
        <div class="story-prose-row">
          <div class="story-prose">
            <h2 class="font-serif" style="font-size: 1.8rem; margin-bottom: 16px; color: var(--color-primary);">Câu chuyện</h2>
            <p>${place.fullStory}</p>
          </div>
          <div class="story-side-img">
            <img src="${place.sideImg}" alt="${place.name}">
          </div>
        </div>

        <div class="quick-info-grid">
          <div class="info-card">
            <div class="info-card-header">👥 Nhân vật tiêu biểu</div>
            <div class="info-card-val">${place.figure}</div>
          </div>
          <div class="info-card">
            <div class="info-card-header">◷ Thời gian</div>
            <div class="info-card-val">${place.period}</div>
          </div>
          <div class="info-card">
            <div class="info-card-header">📍 Vị trí</div>
            <div class="info-card-val">${place.address}</div>
          </div>
        </div>

        <div class="remember-box">
          <h3>Vì sao chúng ta nhớ?</h3>
          <p>“${place.whyWeRemember}”</p>
        </div>

        <div style="text-align: center; margin-bottom: 60px;">
          <button class="btn btn-primary" onclick="app.navigate('learn')">
            🎒 Tham gia thử thách Quiz nhận Memory Points →
          </button>
        </div>
      </div>
    `;
  }

  toggleAudio(btn) {
    this.isPlayingAudio = !this.isPlayingAudio;
    btn.textContent = this.isPlayingAudio ? "⏸" : "▶";
    document.getElementById("audioStatusText").innerHTML = this.isPlayingAudio
      ? "<span style='color: #B89B5E;'>Đang phát audio giọng đọc truyền cảm...</span>"
      : `Nghe câu chuyện <b>(${this.currentStory.audioDuration})</b>`;
  }

  toggleSavePlace(placeId) {
    const idx = this.user.savedIds.indexOf(placeId);
    if (idx > -1) {
      this.user.savedIds.splice(idx, 1);
      alert("Đã xóa khỏi danh sách lưu.");
    } else {
      this.user.savedIds.push(placeId);
      alert("Đã lưu vào Hành trình của bạn!");
    }
    this.saveStateToStorage();
    this.renderStoryView(this.currentStory);
    this.renderJourney();
  }

  // Quiz Engine
  renderQuizStart() {
    const box = document.getElementById("quizBox");
    if (!box) return;

    box.innerHTML = `
      <div style="text-align: center;">
        <span style="font-size: 2rem;">🏆</span>
        <h3 class="font-serif" style="font-size: 1.6rem; color: var(--color-primary); margin: 8px 0;">
          ${QUIZ_DATA.title}
        </h3>
        <p style="color: var(--color-muted); margin-bottom: 24px;">
          ${QUIZ_DATA.questions.length} câu hỏi • ${QUIZ_DATA.time} • Nhận +${QUIZ_DATA.rewardPoints} Memory Points
        </p>
        <button class="btn btn-primary" onclick="app.startQuiz()">
          Bắt đầu thử thách →
        </button>
      </div>
    `;
  }

  startQuiz() {
    this.quizState.currentQuestionIndex = 0;
    this.quizState.score = 0;
    this.quizState.isFinished = false;
    this.renderQuestion();
  }

  renderQuestion() {
    const box = document.getElementById("quizBox");
    const qIndex = this.quizState.currentQuestionIndex;
    const q = QUIZ_DATA.questions[qIndex];

    box.innerHTML = `
      <div>
        <div style="display:flex; justify-content:space-between; font-size:0.85rem; color:var(--color-muted); margin-bottom:12px;">
          <span>Câu hỏi ${qIndex + 1} / ${QUIZ_DATA.questions.length}</span>
          <span>Điểm hiện tại: ${this.quizState.score}</span>
        </div>
        <h3 style="font-size: 1.15rem; color: var(--color-primary); margin-bottom: 20px;">${q.q}</h3>
        <div>
          ${q.options.map((opt, i) => `
            <button class="quiz-opt-btn" onclick="app.submitAnswer(${i}, this)">
              ${String.fromCharCode(65 + i)}.${opt}
            </button>
          `).join("")}
        </div>
      </div>
    `;
  }

  submitAnswer(selectedIdx, btnElement) {
    const qIndex = this.quizState.currentQuestionIndex;
    const q = QUIZ_DATA.questions[qIndex];
    const allBtns = document.querySelectorAll(".quiz-opt-btn");
    allBtns.forEach(b => b.disabled = true);

    if (selectedIdx === q.correct) {
      btnElement.classList.add("correct");
      this.quizState.score++;
    } else {
      btnElement.classList.add("wrong");
      allBtns[q.correct].classList.add("correct");
    }

    setTimeout(() => {
      if (this.quizState.currentQuestionIndex < QUIZ_DATA.questions.length - 1) {
        this.quizState.currentQuestionIndex++;
        this.renderQuestion();
      } else {
        this.finishQuiz();
      }
    }, 1200);
  }

  finishQuiz() {
    const box = document.getElementById("quizBox");
    const pointsGained = this.quizState.score > 1 ? QUIZ_DATA.rewardPoints : 10;
    this.user.points += pointsGained;
    this.saveStateToStorage();

    box.innerHTML = `
      <div style="text-align: center;">
        <span style="font-size: 3rem;">🎉</span>
        <h3 class="font-serif" style="font-size: 1.8rem; color: var(--color-primary); margin: 12px 0;">
          Bạn trả lời đúng ${this.quizState.score}/${QUIZ_DATA.questions.length} câu!
        </h3>
        <p style="font-size: 1.2rem; font-weight: 700; color: var(--color-accent); margin-bottom: 20px;">
          +${pointsGained} Memory Points
        </p>
        <p style="color: var(--color-muted); margin-bottom: 28px;">
          Điểm đã được cộng trực tiếp vào ví di sản cá nhân của bạn.
        </p>
        <div style="display:flex; justify-content:center; gap: 14px;">
          <button class="btn btn-secondary" onclick="app.renderQuizStart()">Làm lại quiz</button>
          <button class="btn btn-primary" onclick="app.navigate('journey')">Xem Hành trình của tôi</button>
        </div>
      </div>
    `;
  }

  // Hành trình của tôi
  renderJourney() {
    document.getElementById("statExplored").textContent = this.user.exploredIds.length;
    document.getElementById("statRead").textContent = this.user.exploredIds.length + 1;
    document.getElementById("statAudio").textContent = 1;

    // Render Saved Places
    const savedContainer = document.getElementById("savedPlacesList");
    const savedPlaces = PLACES_DATA.filter(p => this.user.savedIds.includes(p.id));

    if (savedPlaces.length === 0) {
      savedContainer.innerHTML = `<p style="color: var(--color-muted); font-size: 0.9rem;">Chưa có địa điểm nào được lưu.</p>`;
    } else {
      savedContainer.innerHTML = savedPlaces.map(p => `
        <div class="mini-card" style="margin-bottom: 10px;" onclick="app.openStory('${p.id}')">
          <h4>${p.name}</h4>
          <p>📍 ${p.address}</p>
        </div>
      `).join("");
    }

    // Render Timeline
    const timeline = document.getElementById("timelineList");
    timeline.innerHTML = this.user.exploredIds.map(id => {
      const p = PLACES_DATA.find(x => x.id === id);
      return `
        <div class="timeline-item">
          <div style="font-weight: 600; color: var(--color-primary);">${p ? p.name : 'Địa điểm lịch sử'}</div>
          <div style="font-size: 0.8rem; color: #28A745;">✓ Đã khám phá</div>
          <div style="font-size: 0.75rem; color: var(--color-muted);">Hôm nay, 2026</div>
        </div>
      `;
    }).join("");
  }

  // Authentication Mock
  openLoginModal() {
    document.getElementById("loginModal").classList.add("open");
  }
  closeLoginModal() {
    document.getElementById("loginModal").classList.remove("open");
  }
  handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    this.user.email = email;
    this.user.name = email.split('@')[0];
    this.saveStateToStorage();
    this.closeLoginModal();
    document.getElementById("userNameDisplay").textContent = this.user.name;
    document.getElementById("userEmailDisplay").textContent = this.user.email;
    alert(`Chào mừng ${this.user.name} đã quay trở lại với Dấu Nhớ!`);
  }
  handleGoogleLogin() {
    this.user.name = "Nguyễn Minh Anh (Google)";
    this.user.email = "minhanh.vn@gmail.com";
    this.saveStateToStorage();
    this.closeLoginModal();
    document.getElementById("userNameDisplay").textContent = this.user.name;
    document.getElementById("userEmailDisplay").textContent = this.user.email;
    alert("Đăng nhập thành công qua tài khoản Google!");
  }
}

// Khởi chạy App toàn cục
window.app = new DauNhoApp();