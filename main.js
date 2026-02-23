/* === TRENDYOL STATIC — main.js === */

/* ---- MEGA MENU DATA (all categories + sub-links) ---- */
const catData = {
  kadin: {
    title: 'Kadın',
    cols: [
      { head: 'Giyim', links: ['Elbise','Bluz & Gömlek','Tunik','Etek','Pantolon','Jean','Eşofman','Mont & Kaban','Trench Coat','Kazak & Hırka','Sweatshirt','Takım Elbise','Şort','Ceket'] },
      { head: 'İç Giyim & Pijama', links: ['Sütyen','Külot','Pijama Takımı','Gecelik','Atlet & Fanila','Tayt','Çorap','Boxer'] },
      { head: 'Aksesuar', links: ['Çanta','Cüzdan','Saat','Güneş Gözlüğü','Kemer','Şapka & Bere','Atkı & Eşarp','Eldiven'] },
    ]
  },
  erkek: {
    title: 'Erkek',
    cols: [
      { head: 'Giyim', links: ['Gömlek','T-Shirt & Polo','Pantolon','Jean','Şort','Mont & Kaban','Trench Coat','Kazak & Hırka','Sweatshirt','Takım Elbise','Blazer Ceket','Yelek','Eşofman Takımı'] },
      { head: 'İç Giyim', links: ['Boxer','Atlet','İç Çamaşır Seti','Pijama','Çorap','Termal İçlik'] },
      { head: 'Aksesuar', links: ['Saat','Güneş Gözlüğü','Kemer','Cüzdan','Çanta','Şapka','Kravat & Papyon','Manşet'] },
    ]
  },
  anne: {
    title: 'Anne & Çocuk',
    cols: [
      { head: 'Kız Çocuk', links: ['Elbise','Bluz & Gömlek','Etek','Pantolon','Tayt','Sweatshirt','Mont','Pijama'] },
      { head: 'Erkek Çocuk', links: ['T-Shirt','Gömlek','Pantolon','Şort','Sweatshirt','Mont','Pijama','İç Giyim'] },
      { head: 'Anne Giyim', links: ['Hamile Giyim','Emzirme Ürünleri','Hamile İç Giyim','Post Partum'] },
    ]
  },
  ev: {
    title: 'Ev & Yaşam',
    cols: [
      { head: 'Mobilya', links: ['Koltuk & Köşe Takımları','Yatak','Gardırop & Dolap','Masa & Sandalye','Kitaplık','TV Ünitesi','Çalışma Masası'] },
      { head: 'Ev Tekstili', links: ['Nevresim Takımı','Yorgan','Yastık','Halı','Perde','Havlu','Çarşaf'] },
      { head: 'Ev Dekorasyon', links: ['Aydınlatma','Tablo & Çerçeve','Saksı & Vazo','Mum & Mumluk','Saat','Ayna'] },
    ]
  },
  super: {
    title: 'Süpermarket',
    cols: [
      { head: 'Gıda', links: ['Meyve & Sebze','Et & Tavuk','Süt & Süt Ürünleri','Ekmek & Unlu Mamüller','Donmuş Gıda','Bakliyat & Tahıl','Hazır Gıda'] },
      { head: 'İçecek', links: ['Su','Meyve Suyu','Gazlı İçecek','Çay & Kahve','Enerji İçeceği','Süt & Bitkisel İçecek'] },
      { head: 'Temizlik & Kişisel Bakım', links: ['Deterjan','Bulaşık Deterjanı','Tuvalet Kağıdı','Şampuan','Diş Macunu','Deodorant'] },
    ]
  },
  kozmetik: {
    title: 'Kozmetik',
    cols: [
      { head: 'Makyaj', links: ['Fondöten','Ruj & Lipgloss','Maskara','Göz Kalemi','Allık','Kaş Kalemi','Bronzer & Aydınlatıcı','Oje'] },
      { head: 'Cilt Bakım', links: ['Nemlendirici','Serum','Güneş Kremi','Temizleyici','Göz Kremi','Maske','Tonik'] },
      { head: 'Saç Bakım', links: ['Şampuan','Saç Kremi','Saç Maskesi','Saç Yağı','Saç Spreyi','Saç Boyası'] },
    ]
  },
  ayakkabi: {
    title: 'Ayakkabı & Çanta',
    cols: [
      { head: 'Kadın Ayakkabı', links: ['Sneaker','Topuklu Ayakkabı','Sandalet','Bot & Çizme','Babet & Meri Jane','Loafer','Terlik'] },
      { head: 'Erkek Ayakkabı', links: ['Sneaker','Oxford & Klasik','Bot & Çizme','Loafer','Sandalet','Terlik'] },
      { head: 'Çanta', links: ['Omuz Çantası','Sırt Çantası','El Çantası','Spor Çantası','Evrak Çantası','Cüzdan','Makyaj Çantası'] },
    ]
  },
  elektronik: {
    title: 'Elektronik',
    cols: [
      { head: 'Telefon & Tablet', links: ['Cep Telefonu','Tablet','Akıllı Saat','Kulaklık & Hoparlör','Telefon Kılıfı','Şarj Cihazı'] },
      { head: 'Bilgisayar', links: ['Laptop','Masaüstü Bilgisayar','Monitör','Klavye & Mouse','Yazıcı','Harici Disk','RAM & SSD'] },
      { head: 'Ev Elektroniği', links: ['Televizyon','Klima','Çamaşır Makinesi','Bulaşık Makinesi','Buzdolabı','Fırın','Elektrikli Süpürge'] },
    ]
  },
  saat: {
    title: 'Saat & Aksesuar',
    cols: [
      { head: 'Saat', links: ['Kadın Saat','Erkek Saat','Akıllı Saat','Çocuk Saat','Duvar Saati','Masa Saati'] },
      { head: 'Takı & Bijuteri', links: ['Kolye','Bileklik','Küpe','Yüzük','Broş','Set'] },
      { head: 'Aksesuar', links: ['Güneş Gözlüğü','Gözlük Çerçevesi','Kemer','Kravat','Şapka','Eldiven','Atkı'] },
    ]
  },
  spor: {
    title: 'Spor & Outdoor',
    cols: [
      { head: 'Spor Giyim', links: ['Tayt','Şort','Tişört','Sweatshirt','Mont','Atlet','Çorap','İç Giyim'] },
      { head: 'Spor Ayakkabı', links: ['Koşu Ayakkabısı','Antrenman','Yürüyüş','Basketbol','Futbol','Outdoor'] },
      { head: 'Spor Ekipmanı', links: ['Fitness & Pilates','Koşu Bandı','Bisiklet','Kampçılık','Dağcılık','Yüzme','Futbol'] },
    ]
  },
  kitap: {
    title: 'Kitap, Müzik, Film, Oyun',
    cols: [
      { head: 'Kitap', links: ['Roman','Çocuk Kitapları','Kişisel Gelişim','Tarih','Bilim','Edebiyat','Akademik'] },
      { head: 'Müzik & Film', links: ['CD & Plak','DVD & Blu-ray','Müzik Aletleri'] },
      { head: 'Oyun', links: ['PC Oyun','Konsol Oyunu','Playstation','Xbox','Nintendo Switch'] },
    ]
  },
  oyuncak: {
    title: 'Oyuncak',
    cols: [
      { head: 'Oyuncak Türleri', links: ['Yapboz','Lego & Blok','Bebek','Oyun Seti','Araba & Araçlar','Peluş','Tahta Oyuncak'] },
      { head: 'Yaşa Göre', links: ['0-2 Yaş','3-5 Yaş','6-9 Yaş','10-12 Yaş','13+ Yaş'] },
      { head: 'Eğitici', links: ['Eğitici Oyuncak','Deney Seti','Sanat Seti','Müzikli Oyuncak'] },
    ]
  },
  otomotiv: {
    title: 'Otomotiv & Motosiklet',
    cols: [
      { head: 'Araç Bakım', links: ['Motor Yağı','Araç Yıkama','Lastik & Jant','Akü','Cam Suyu'] },
      { head: 'Araç Aksesuarları', links: ['Oto Koltuk Kılıfı','Araç Navigasyon','Dashcam','Oto Etek','Oto Koku'] },
      { head: 'Motosiklet', links: ['Motosiklet Giyim','Kask','Motosiklet Aksesuarı','Yedek Parça'] },
    ]
  },
  yapi: {
    title: 'Yapı Market',
    cols: [
      { head: 'El Aletleri', links: ['Tornavida','Matkap','Çekiç','Testere','Pense','Mengene'] },
      { head: 'Elektrik', links: ['Priz & Anahtar','Kablo','Ampul','Sigorta','Elektrik Tesisatı'] },
      { head: 'Boya & Yapıştırıcı', links: ['İç Cephe Boyası','Dış Cephe Boyası','Zemin Boyası','Silikon','Yapıştırıcı'] },
    ]
  },
  kirtasiye: {
    title: 'Kırtasiye & Ofis',
    cols: [
      { head: 'Kırtasiye', links: ['Defter','Kalem','Dosya & Klasör','Bant & Tutkal','Makas','Zımba'] },
      { head: 'Ofis', links: ['Ofis Sandalyesi','Masa Düzenleyici','Yazıcı Kartuşu','Projeksiyon'] },
      { head: 'Okul', links: ['Okul Çantası','Kalemlik','Boyama','Resim Malzemeleri'] },
    ]
  },
  evcil: {
    title: 'Evcil Hayvan',
    cols: [
      { head: 'Köpek', links: ['Köpek Maması','Köpek Tasması','Köpek Yatağı','Köpek Oyuncağı'] },
      { head: 'Kedi', links: ['Kedi Maması','Kedi Kumu','Kedi Yatağı','Kedi Oyuncağı','Kedi Tırmalama'] },
      { head: 'Diğer', links: ['Kuş Maması','Balık & Akvaryum','Kemirgen Bakım','Sürüngen Bakım'] },
    ]
  },
  bahce: {
    title: 'Bahçe & Tarım',
    cols: [
      { head: 'Bahçe Aletleri', links: ['Bahçe Makası','Kürek','Sulama','Çapa','Tırmık'] },
      { head: 'Bitki & Toprak', links: ['Çiçek Tohumu','Sebze Tohumu','Toprak','Gübre','Saksı'] },
      { head: 'Bahçe Mobilyası', links: ['Bahçe Masası','Bahçe Sandalyesi','Şezlong','Bank','Hamak'] },
    ]
  },
  bebek: {
    title: 'Bebek',
    cols: [
      { head: 'Bebek Giyim', links: ['Tulum','Pijama','Body','Bebek Seti','Şapka & Eldiven','Bebek Çorabı'] },
      { head: 'Bebek Bakım', links: ['Bebek Bezi','Islak Mendil','Bebek Şampuanı','Pişik Kremi','Emzik'] },
      { head: 'Bebek Mobilyası', links: ['Bebek Yatağı','Bebek Arabası','Ana Kucağı','Mama Sandalyesi','Bebek Salıncağı'] },
    ]
  },
  gida: {
    title: 'Gıda',
    cols: [
      { head: 'Atıştırmalık', links: ['Kuruyemiş','Çikolata','Cips','Bisküvi & Kraker','Gofret'] },
      { head: 'Temel Gıda', links: ['Makarna & Pirinç','Konserve','Salça','Yağ & Zeytinyağı','Un & Şeker'] },
      { head: 'İçecek', links: ['Çay','Kahve','Filtre Kahve','Kakao','Bitkisel Çay','Şifalı Bitki'] },
    ]
  },
};

/* ---- RENDER MEGA MENU CONTENT ---- */
function renderMegaRight(catKey) {
  const data = catData[catKey];
  if (!data) return;
  const right = document.getElementById('mega-menu-right');
  let html = `<div class="mm-title">${data.title}</div><div class="mm-cols">`;
  data.cols.forEach(col => {
    html += `<div class="mm-group"><div class="mm-group__head">${col.head}</div>`;
    col.links.forEach(lnk => { html += `<a href="#">${lnk}</a>`; });
    html += `</div>`;
  });
  html += `</div>`;
  right.innerHTML = html;
}

/* Initial render */
renderMegaRight('kadin');

/* Hover switch */
document.querySelectorAll('.mega-menu__cat').forEach(item => {
  item.addEventListener('mouseenter', () => {
    document.querySelectorAll('.mega-menu__cat').forEach(c => c.classList.remove('active'));
    item.classList.add('active');
    renderMegaRight(item.dataset.cat);
  });
});

/* ---- HERO SLIDER ---- */
const heroSlides = document.querySelectorAll('.hero-slide');
const heroDots   = document.querySelectorAll('.hero-dot');
let heroIdx = 0, heroTimer;

function heroGoTo(n) {
  heroSlides[heroIdx].classList.remove('active');
  heroDots[heroIdx].classList.remove('active');
  heroIdx = (n + heroSlides.length) % heroSlides.length;
  heroSlides[heroIdx].classList.add('active');
  heroDots[heroIdx].classList.add('active');
}
function heroStart() { clearInterval(heroTimer); heroTimer = setInterval(() => heroGoTo(heroIdx + 1), 4500); }

document.getElementById('hero-prev').addEventListener('click', () => { heroGoTo(heroIdx - 1); heroStart(); });
document.getElementById('hero-next').addEventListener('click', () => { heroGoTo(heroIdx + 1); heroStart(); });
heroDots.forEach((d, i) => d.addEventListener('click', () => { heroGoTo(i); heroStart(); }));
heroStart();

/* ---- PRODUCT DATA ---- */
const products = [
  { brand:'MOMORDICA', name:'Coconut Mix - 250 ml', price:'279,00 TL', rating:'4.0', count:'(7.307)', img:'https://cdn.dsmcdn.com/mnresize/280/400/ty1000032/product/media/images/prod/PIM/20251106/14/dadfe838-2bf9-4532-8f72-cb67720fafa8/1_org_zoom.jpg', badge:'ship', badgeText:'Ücretsiz Kargo' },
  { brand:'KOREACO', name:'Retinal (%0,1) Shot Corrector Booster Krem 20 ml', price:'700,00 TL', old:'710,00 TL', disc:'-1%', rating:'4.4', count:'(2.332)', img:'https://cdn.dsmcdn.com/mnresize/280/400/ty1820/prod/QC_ENRICHMENT/20260203/17/921d832b-2096-3c2b-aed9-b49f960601b7/1_org_zoom.jpg', badge:'coupon', badgeText:'İndirim Kuponu' },
  { brand:'JEОNJU', name:'Pirinç Mayası Beyazlatıcı Aydınlatıcı Tonik', price:'268,49 TL', old:'299,43 TL', disc:'-10%', rating:'4.3', count:'(44.672)', img:'https://cdn.dsmcdn.com/mnresize/280/400/ty1630/product/media/images/prod/PIM/20250124/17/ce19fda6-2bac-42e8-9573-01e20bd89c54/1_org_zoom.jpg', badge:'ship', badgeText:'Ücretsiz Kargo' },
  { brand:'EMBEAUTY', name:'Kolajen Keratin Saç Dökülmesine Karşı Şampuan', price:'334,24 TL', rating:'4.2', count:'(69.339)', img:'https://cdn.dsmcdn.com/mnresize/280/400/ty1695/prod/QC_PREP/20250617/14/0963161d-e46f-36a5-aa6a-35221702fea4/1_org_zoom.jpg', badge:'ship', badgeText:'Ücretsiz Kargo' },
  { brand:'THE BATH FACTORY', name:'Liberty Vücut Spreyi 200 ML', price:'401,59 TL', rating:'4.2', count:'(6.551)', img:'https://cdn.dsmcdn.com/mnresize/280/400/ty1796/prod/QC_ENRICHMENT/20251128/01/b7fe34fe-5e44-393b-b36c-94f39f646d27/1_org_zoom.jpg', badge:'ship', badgeText:'Ücretsiz Kargo' },
  { brand:'SAMSUNG', name:'Galaxy S25 Ultra 512GB Titanium', price:'59.999,00 TL', old:'69.999,00 TL', disc:'-14%', rating:'4.9', count:'(3.245)', img:'https://cdn.dsmcdn.com/mnresize/280/400/ty1000310/product/media/images/prod/PIM/20260217/06/50c98ab4-0d41-4218-a1e2-3d1ab21a5858/1_org_zoom.jpg', badge:'ticket', badgeText:'%5 Kupon Var' },
];

const liked = [
  { brand:'NIKE', name:'Air Force 1 \'07 Beyaz Kadın Spor Ayakkabı', price:'3.699,00 TL', rating:'4.8', count:'(22.441)', img:'https://cdn.dsmcdn.com/mnresize/280/400/ty1622/prod/QC/20250108/13/eccafc00-d081-352d-83c9-43a67e62338e/1_org_zoom.jpg', badge:'ship', badgeText:'Ücretsiz Kargo' },
  { brand:'APPLE', name:'AirPods 4 - Gürültü Önleme Özellikli', price:'4.199,00 TL', old:'5.999,00 TL', disc:'-30%', rating:'4.8', count:'(8.001)', img:'https://cdn.dsmcdn.com/mnresize/280/400/ty1813/prod/QC_ENRICHMENT/20260118/23/bcf9c0c5-3f67-3dce-81d4-198d7e0f0b56/1_org_zoom.jpg', badge:'ship', badgeText:'Ücretsiz Kargo' },
  { brand:'ADIDAS', name:'Samba OG Unisex Spor Ayakkabı', price:'2.069,55 TL', old:'4.599,00 TL', disc:'-55%', rating:'4.9', count:'(15.823)', img:'https://cdn.dsmcdn.com/mnresize/280/400/ty1695/prod/QC_PREP/20250617/14/0963161d-e46f-36a5-aa6a-35221702fea4/1_org_zoom.jpg', badge:'flash', badgeText:'Flaş İndirim' },
  { brand:'ZARA', name:'Saten Blazer Ceket Kadın', price:'1.299,00 TL', rating:'4.5', count:'(3.102)', img:'https://cdn.dsmcdn.com/mnresize/280/400/ty1000318/product/media/images/prod/PIM/20260219/21/a2ca855b-6cfb-42f4-b382-53d4abfc7b5e/1_org_zoom.jpg', badge:'ship', badgeText:'Ücretsiz Kargo' },
  { brand:"L'ORÉAL", name:'Elvive Hyaluron Plump Şampuan 400ml', price:'103,99 TL', old:'129,99 TL', disc:'-20%', rating:'4.6', count:'(11.230)', img:'https://cdn.dsmcdn.com/mnresize/280/400/ty1785/prod/QC_ENRICHMENT/20251108/13/65110fe4-dbaa-3c9b-bc1f-3f970801c9eb/1_org_zoom.jpg', badge:'coupon', badgeText:'Kupon Var' },
  { brand:'CASIO', name:'G-Shock GA-2100BCE-3ADR Erkek Saat', price:'2.939,40 TL', old:'4.899,00 TL', disc:'-40%', rating:'4.8', count:'(4.882)', img:'https://cdn.dsmcdn.com/mnresize/280/400/ty1000057/product/media/images/prod/PIM/20260113/15/34980db9-0873-49fa-93c1-1d53ecf41f24/1_org_zoom.jpg', badge:'flash', badgeText:'Flaş İndirim' },
];

function makeCard(p, idx, prefix) {
  const id = `${prefix}-${idx}`;
  const disc = p.disc ? `<div class="p-card__disc">${p.disc}</div>` : '';
  const old = p.old ? `<span class="p-card__old">${p.old}</span>` : '';
  const badge = p.badge ? `<div class="p-card__badges"><span class="pbadge pbadge--${p.badge}">${p.badgeText}</span></div>` : '';
  return `
  <div class="p-card" id="${id}">
    <a href="#" class="p-card__link">
      <div class="p-card__img-wrap">
        <img src="${p.img}" class="p-card__img" alt="${p.name}" loading="lazy" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22280%22><rect fill=%22%23f3f3f3%22 width=%22200%22 height=%22280%22/></svg>'"/>
        ${disc}
        <button class="p-card__fav" aria-label="Favorilere ekle" data-id="${id}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
        </button>
      </div>
      <div class="p-card__info">
        <span class="p-card__brand">${p.brand}</span>
        <p class="p-card__name">${p.name}</p>
        <div class="p-card__rating"><span class="p-card__stars">${'★'.repeat(Math.round(parseFloat(p.rating)))}</span><span class="p-card__cnt">${p.count}</span></div>
        <div class="p-card__prices">${old}<span class="p-card__price">${p.price}</span></div>
        ${badge}
      </div>
    </a>
    <button class="p-card__add" data-name="${p.name}">Sepete Ekle</button>
  </div>`;
}

document.getElementById('popular-grid').innerHTML = products.map((p,i) => makeCard(p,i,'pop')).join('');
document.getElementById('liked-grid').innerHTML = liked.map((p,i) => makeCard(p,i,'lkd')).join('');

/* ---- BASKET ---- */
let basketCount = 0;
const basketBadge = document.getElementById('basket-badge');

function addOne() {
  basketCount++;
  basketBadge.textContent = basketCount;
  basketBadge.style.display = 'flex';
}

/* ---- TOAST ---- */
const toast = document.getElementById('toast');
const toastMsg = document.getElementById('toast-msg');
let toastT;
function showToast(msg) {
  toastMsg.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastT);
  toastT = setTimeout(() => toast.classList.remove('show'), 2500);
}

/* Add to cart */
document.addEventListener('click', e => {
  const btn = e.target.closest('.p-card__add');
  if (!btn) return;
  addOne();
  const name = btn.dataset.name || 'Ürün';
  showToast(`"${name.slice(0,30)}…" sepete eklendi!`);
  btn.textContent = '✓ Eklendi';
  btn.style.background = '#2e7d32';
  btn.style.color = '#fff';
  setTimeout(() => { btn.textContent = 'Sepete Ekle'; btn.style.background = ''; btn.style.color = ''; }, 1800);
});

/* Favorites */
document.addEventListener('click', e => {
  const btn = e.target.closest('.p-card__fav');
  if (!btn) return;
  e.preventDefault();
  btn.classList.toggle('active');
  showToast(btn.classList.contains('active') ? '❤️ Favorilere eklendi!' : 'Favorilerden çıkarıldı.');
});

/* ---- SEARCH ---- */
function doSearch() {
  const val = document.getElementById('search-input').value.trim();
  if (val) showToast(`"${val}" aranıyor…`);
}
document.getElementById('search-btn').addEventListener('click', doSearch);
document.getElementById('search-input').addEventListener('keydown', e => { if (e.key === 'Enter') doSearch(); });

/* ---- STICKY SHADOW ---- */
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 4 ? '0 3px 10px rgba(0,0,0,.12)' : '0 1px 4px rgba(0,0,0,.08)';
}, { passive: true });
