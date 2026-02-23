/* category.js */
const cats = {
  kadin:     { title:'Kadın', desc:'Kadın giyim, aksesuar ve daha fazlası', color:'#e91e8c', subcats:['Elbise','Bluz & Gömlek','Pantolon','Jean','Mont & Kaban','Kazak & Hırka','Sweatshirt','Etek','Tayt','Şort','Takım Elbise','Ceket'], brands:['Zara','H&M','LC Waikiki','Koton','Mango','Pull & Bear','Bershka','DeFacto'] },
  erkek:     { title:'Erkek', desc:'Erkek giyim, ayakkabı ve aksesuar', color:'#1565c0', subcats:['Gömlek','T-Shirt & Polo','Pantolon','Jean','Mont & Kaban','Kazak & Hırka','Sweatshirt','Şort','Takım Elbise','İç Giyim','Spor Giyim'], brands:['Tommy Hilfiger','Hugo Boss','U.S. Polo','Lacoste','Nike','Adidas','LC Waikiki','DeFacto'] },
  anne:      { title:'Anne & Çocuk', desc:'Bebek ve çocuk giyim, oyuncak ve aksesuar', color:'#7b1fa2', subcats:['Kız Çocuk','Erkek Çocuk','Bebek Giyim','Hamile Giyim','Oyuncak','Bebek Arabası','Ana Kucağı','Emzirme'], brands:['Chicco','Mamajoo','Zara Kids','H&M Kids','Bebebus','BabyJem'] },
  ev:        { title:'Ev & Yaşam', desc:'Mobilya, tekstil, dekorasyon ve mutfak', color:'#388e3c', subcats:['Mobilya','Ev Tekstili','Mutfak Gereçleri','Aydınlatma','Banyo','Dekorasyon','Halı & Paspas','Ev Aksesuarları'], brands:['IKEA','Madame Coco','English Home','Taç','Schafer','Karaca'] },
  super:     { title:'Süpermarket', desc:'Market ürünleri kapında', color:'#f57c00', subcats:['Meyve & Sebze','Et & Tavuk','Süt Ürünleri','Ekmek & Unlu','Donmuş Gıda','İçecek','Temizlik','Kişisel Bakım'], brands:['Migros','Pınar','Sütaş','Ülker','Eti','Nestlé','Unilever'] },
  kozmetik:  { title:'Kozmetik', desc:'Makyaj, cilt bakım ve saç bakım', color:'#e91e8c', subcats:['Makyaj','Cilt Bakım','Saç Bakım','Parfüm','Erkek Bakım','Güneş Ürünleri','Vücut Bakım','Ağız Bakım'], brands:['Maybelline','L\'Oréal','MAC','NYX','Clinique','Lancome','Koreaco','Bargello'] },
  ayakkabi:  { title:'Ayakkabı & Çanta', desc:'Kadın erkek ayakkabı ve çanta modelleri', color:'#795548', subcats:['Kadın Ayakkabı','Erkek Ayakkabı','Çocuk Ayakkabı','Omuz Çantası','Sırt Çantası','El Çantası','Cüzdan','Spor Çantası'], brands:['Nike','Adidas','Puma','New Balance','UGG','Steve Madden','Skechers'] },
  elektronik:{ title:'Elektronik', desc:'Telefon, bilgisayar ve ev elektroniği', color:'#1565c0', subcats:['Cep Telefonu','Tablet','Laptop','Televizyon','Kulaklık','Akıllı Saat','Oyun Konsolları','Küçük Ev Aletleri'], brands:['Apple','Samsung','Xiaomi','Huawei','Sony','LG','Philips','Asus'] },
  saat:      { title:'Saat & Aksesuar', desc:'Saat, takı ve aksesuar modelleri', color:'#424242', subcats:['Kadın Saat','Erkek Saat','Akıllı Saat','Kolye','Bileklik','Küpe','Yüzük','Güneş Gözlüğü'], brands:['Casio','Fossil','Daniel Wellington','Emporio Armani','Michael Kors','Tommy Hilfiger'] },
  spor:      { title:'Spor & Outdoor', desc:'Spor giyim, ayakkabı ve ekipman', color:'#2e7d32', subcats:['Spor Giyim','Koşu Ayakkabısı','Fitness','Outdoor','Bisiklet','Yüzme','Futbol','Basketbol'], brands:['Nike','Adidas','Puma','Under Armour','New Balance','Decathlon','Reebok'] },
  flash:     { title:'Flaş İndirimler', desc:'Sınırlı süre süper indirimler!', color:'#cc0000', subcats:['Bugünün Fırsatları','Saatlik İndirimler','Hızlı Tükenenler','%50 ve Üzeri İndirim'], brands:['Tüm Markalar'] },
  coksatan:  { title:'Çok Satanlar', desc:'En popüler ve en çok tercih edilen ürünler', color:'#e65100', subcats:['Kadın Çok Satanlar','Erkek Çok Satanlar','Elektronik','Kozmetik','Ev & Yaşam'], brands:['Tüm Markalar'] },
  dusen:     { title:'Bugün Fiyatı Düşenler', desc:'Bugün fiyatı düşen ürünleri kaçırma', color:'#00838f', subcats:['Giyim','Elektronik','Kozmetik','Ev & Yaşam','Ayakkabı','Aksesuar'], brands:['Tüm Markalar'] },
  yemek:     { title:'Trendyol Yemek', desc:'Favori restoranlarından kapına teslimat', color:'#e53935', subcats:['Pizza','Burger','Türk Mutfağı','Sushi','Döner','Kahvaltı','Tatlı','Vegan'], brands:['McDonald\'s','Burger King','Domino\'s','Pizza Hut','Sushi Co'] },
  plus:      { title:'Trendyol Plus', desc:'Üyelere özel ayrıcalıklar ve indirimler', color:'#7b1fa2', subcats:['Plus\'a Özel İndirimler','Ücretsiz Kargo','Erken Erişim','Özel Kuponlar'], brands:['Tüm Markalar'] },
  kitap:     { title:'Kitap, Müzik, Film, Oyun', desc:'Kitap, müzik ve oyun dünyası', color:'#5d4037', subcats:['Roman','Çocuk Kitapları','Kişisel Gelişim','CD & Plak','DVD','PC Oyun','Konsol Oyunu'], brands:['Yapı Kredi Yayınları','İş Bankası Kültür','Alfa Yayınları'] },
  oyuncak:   { title:'Oyuncak', desc:'Çocukların hayal dünyasına renk katın', color:'#f06292', subcats:['Lego & Blok','Bebek','Araç Oyuncak','Peluş','Yapboz','Eğitici Oyuncak','Oyun Seti'], brands:['LEGO','Barbie','Hot Wheels','Fisher-Price','Hasbro'] },
  otomotiv:  { title:'Otomotiv & Motosiklet', desc:'Araç bakım ve aksesuar', color:'#455a64', subcats:['Araç Bakım','Lastik & Jant','Oto Aksesuar','Araç İçi Ürünler','Motosiklet','Elektrikli Araç'], brands:['Bosch','Michelin','Shell','Castrol','3M'] },
  yapi:      { title:'Yapı Market', desc:'El aletleri, boya ve yapı malzemeleri', color:'#f57c00', subcats:['El Aletleri','Elektrik','Boya & Yapıştırıcı','Hırdavat','Boru & Tesisat','Zemin & Duvar'], brands:['Bosch','Stanley','DeWalt','Makita','Black+Decker'] },
  kirtasiye: { title:'Kırtasiye & Ofis', desc:'Okul ve ofis ihtiyaçları', color:'#1976d2', subcats:['Defter & Ajanda','Kalem','Dosya & Klasör','Ofis Mobilyası','Okul Çantası','Sanat Malzemeleri'], brands:['Faber-Castell','Staedtler','Pentel','Pilot'] },
  evcil:     { title:'Evcil Hayvan', desc:'Evcil hayvanlarınız için her şey', color:'#558b2f', subcats:['Kedi Ürünleri','Köpek Ürünleri','Kuş Ürünleri','Balık & Akvaryum','Kemirgen','Sürüngen'], brands:['Royal Canin','Hill\'s','Purina','Pedigree','Whiskas'] },
  bahce:     { title:'Bahçe & Tarım', desc:'Bahçe aletleri, bitki ve dekorasyon', color:'#33691e', subcats:['Bahçe Aletleri','Bitki & Tohum','Sulama','Bahçe Mobilyası','Dekorasyon','Gübre & Toprak'], brands:['Gardena','Wolf-Garten','Bosch','Husqvarna'] },
  bebek:     { title:'Bebek', desc:'Bebek giyim, mama ve bakım ürünleri', color:'#f06292', subcats:['Bebek Giyim','Bebek Bakım','Bebek Arabası','Mama Sandalyesi','Bebek Yatağı','Emzirme','Bebek Oyuncakları'], brands:['Chicco','Graco','Maxi-Cosi','Pampers','Bebivita'] },
  gida:      { title:'Gıda', desc:'Taze ve lezzetli gıda ürünleri', color:'#e65100', subcats:['Atıştırmalık','Çikolata & Şekerleme','Temel Gıda','Kahvaltılık','İçecek','Sağlıklı Gıda','Organik'], brands:['Ülker','Eti','Nestlé','Migros','Pınar','Sütaş'] },
};

/* ---- Product pool (reused across categories) ---- */
const pool = [
  { brand:'LCW', name:'Slim Fit Erkek Chino Pantolon', price:'399,00 TL', old:'599,00 TL', disc:'-33%', stars:4, cnt:'(12.401)', img:'https://cdn.dsmcdn.com/mnresize/280/400/ty1796/prod/QC_ENRICHMENT/20251128/01/b7fe34fe-5e44-393b-b36c-94f39f646d27/1_org_zoom.jpg' },
  { brand:'KOTON', name:'Kadın Çiçekli Elbise', price:'549,00 TL', stars:5, cnt:'(8.210)', img:'https://cdn.dsmcdn.com/mnresize/280/400/ty1630/product/media/images/prod/PIM/20250124/17/ce19fda6-2bac-42e8-9573-01e20bd89c54/1_org_zoom.jpg' },
  { brand:'SAMSUNG', name:'Galaxy A55 5G 256GB', price:'18.999,00 TL', old:'22.999,00 TL', disc:'-17%', stars:5, cnt:'(5.530)', img:'https://cdn.dsmcdn.com/mnresize/280/400/ty1000310/product/media/images/prod/PIM/20260217/06/50c98ab4-0d41-4218-a1e2-3d1ab21a5858/1_org_zoom.jpg' },
  { brand:'NIKE', name:'Air Force 1 Beyaz Unisex', price:'3.699,00 TL', stars:5, cnt:'(22.441)', img:'https://cdn.dsmcdn.com/mnresize/280/400/ty1622/prod/QC/20250108/13/eccafc00-d081-352d-83c9-43a67e62338e/1_org_zoom.jpg' },
  { brand:'APPLE', name:'AirPods 4 ANC', price:'4.199,00 TL', old:'5.999,00 TL', disc:'-30%', stars:5, cnt:'(8.001)', img:'https://cdn.dsmcdn.com/mnresize/280/400/ty1813/prod/QC_ENRICHMENT/20260118/23/bcf9c0c5-3f67-3dce-81d4-198d7e0f0b56/1_org_zoom.jpg' },
  { brand:'ADIDAS', name:'Samba OG Unisex Spor Ayakkabı', price:'2.069,00 TL', old:'4.599,00 TL', disc:'-55%', stars:5, cnt:'(15.823)', img:'https://cdn.dsmcdn.com/mnresize/280/400/ty1695/prod/QC_PREP/20250617/14/0963161d-e46f-36a5-aa6a-35221702fea4/1_org_zoom.jpg' },
  { brand:'KOREACO', name:'Retinal Shot Corrector Booster', price:'700,00 TL', old:'710,00 TL', disc:'-1%', stars:4, cnt:'(2.332)', img:'https://cdn.dsmcdn.com/mnresize/280/400/ty1820/prod/QC_ENRICHMENT/20260203/17/921d832b-2096-3c2b-aed9-b49f960601b7/1_org_zoom.jpg' },
  { brand:'MOMORDICA', name:'Coconut Mix 250 ml', price:'279,00 TL', stars:4, cnt:'(7.307)', img:'https://cdn.dsmcdn.com/mnresize/280/400/ty1000032/product/media/images/prod/PIM/20251106/14/dadfe838-2bf9-4532-8f72-cb67720fafa8/1_org_zoom.jpg' },
  { brand:'CASIO', name:'G-Shock GA-2100BCE Erkek Saat', price:'2.939,00 TL', old:'4.899,00 TL', disc:'-40%', stars:5, cnt:'(4.882)', img:'https://cdn.dsmcdn.com/mnresize/280/400/ty1000057/product/media/images/prod/PIM/20260113/15/34980db9-0873-49fa-93c1-1d53ecf41f24/1_org_zoom.jpg' },
  { brand:'EMBEAUTY', name:'Ultra Siyah Dolgunlaştırıcı Maskara', price:'380,00 TL', stars:4, cnt:'(9.278)', img:'https://cdn.dsmcdn.com/mnresize/280/400/ty1637/prod/QC/20250213/16/0f97061a-4c0a-3c19-8c14-a4d4e630337a/1_org_zoom.jpg' },
  { brand:'H&M', name:'Loose Fit Sweatshirt', price:'449,00 TL', stars:5, cnt:'(7.019)', img:'https://cdn.dsmcdn.com/mnresize/280/400/ty1000318/product/media/images/prod/PIM/20260219/21/a2ca855b-6cfb-42f4-b382-53d4abfc7b5e/1_org_zoom.jpg' },
  { brand:"L'ORÉAL", name:'Elvive Hyaluron Plump Şampuan 400ml', price:'103,99 TL', old:'129,99 TL', disc:'-20%', stars:5, cnt:'(11.230)', img:'https://cdn.dsmcdn.com/mnresize/280/400/ty1785/prod/QC_ENRICHMENT/20251108/13/65110fe4-dbaa-3c9b-bc1f-3f970801c9eb/1_org_zoom.jpg' },
];

function makeCard(p, i) {
  const disc = p.disc ? `<div class="p-card__disc">${p.disc}</div>` : '';
  const old = p.old ? `<span class="p-card__old">${p.old}</span>` : '';
  const stars = '★'.repeat(p.stars) + '☆'.repeat(5-p.stars);
  return `<div class="p-card" id="cp-${i}">
    <a href="#" class="p-card__link">
      <div class="p-card__img-wrap">
        <img src="${p.img}" class="p-card__img" alt="${p.name}" loading="lazy" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22280%22><rect fill=%22%23f3f3f3%22 width=%22200%22 height=%22280%22/></svg>'"/>
        ${disc}
        <button class="p-card__fav" aria-label="Favori"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg></button>
      </div>
      <div class="p-card__info">
        <span class="p-card__brand">${p.brand}</span>
        <p class="p-card__name">${p.name}</p>
        <div class="p-card__rating"><span class="p-card__stars">${stars}</span><span class="p-card__cnt">${p.cnt}</span></div>
        <div class="p-card__prices">${old}<span class="p-card__price">${p.price}</span></div>
      </div>
    </a>
    <button class="p-card__add" data-name="${p.name}">Sepete Ekle</button>
  </div>`;
}

/* ---- INIT ---- */
const params = new URLSearchParams(location.search);
const catKey = params.get('cat') || 'kadin';
const cat = cats[catKey] || cats.kadin;

// Title
document.getElementById('page-title').textContent = `${cat.title} - Trendyol`;
document.getElementById('bc-current').textContent = cat.title;
document.getElementById('cat-title').textContent = cat.title;
document.getElementById('cat-desc').textContent = cat.desc;
document.getElementById('cat-hero').style.background = `linear-gradient(120deg, ${cat.color} 0%, ${cat.color}bb 100%)`;
document.getElementById('prod-result-info').textContent = `${cat.title} kategorisinde ${pool.length * 8}+ ürün bulundu`;

// Subcat chips
const chips = document.getElementById('subcat-chips');
cat.subcats.forEach(s => {
  const el = document.createElement('span');
  el.className = 'subcat-chip';
  el.textContent = s;
  el.addEventListener('click', () => {
    document.querySelectorAll('.subcat-chip').forEach(c => c.style.borderColor = '');
    el.style.borderColor = '#FF6000';
    el.style.color = '#FF6000';
  });
  chips.appendChild(el);
});

// Sidebar links
const sl = document.getElementById('sidebar-links');
cat.subcats.forEach(s => {
  const a = document.createElement('a');
  a.href = '#'; a.textContent = s;
  a.addEventListener('click', e => { e.preventDefault(); });
  sl.appendChild(a);
});

// Sidebar brands
const sb = document.getElementById('sidebar-brands');
cat.brands.forEach(b => {
  const a = document.createElement('a');
  a.href = '#'; a.textContent = b;
  sb.appendChild(a);
});

// Products (repeat pool to fill page)
const grid = document.getElementById('cat-prod-grid');
const all = [...pool, ...pool, ...pool].slice(0, 24);
grid.innerHTML = all.map((p, i) => makeCard(p, i)).join('');

// Bottom nav active state
document.querySelectorAll('.bn-item').forEach(el => {
  if (el.href && el.href.includes('cat=' + catKey)) el.style.color = '#FF6000';
});

// Filter chips toggle
document.querySelectorAll('.filter-chip').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-chip').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Pagination
document.querySelectorAll('.pg-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.pg-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// Cart & fav
let basket = 0;
const badge = document.getElementById('basket-badge');
const toast = document.getElementById('toast');
const toastMsg = document.getElementById('toast-msg');
let tt;
function showToast(m) { toastMsg.textContent = m; toast.classList.add('show'); clearTimeout(tt); tt = setTimeout(() => toast.classList.remove('show'), 2500); }

document.addEventListener('click', e => {
  const addBtn = e.target.closest('.p-card__add');
  if (addBtn) { basket++; badge.textContent = basket; badge.style.display = 'flex'; showToast(`"${addBtn.dataset.name.slice(0,30)}…" sepete eklendi!`); addBtn.textContent = '✓ Eklendi'; addBtn.style.cssText = 'background:#2e7d32;color:#fff'; setTimeout(() => { addBtn.textContent = 'Sepete Ekle'; addBtn.style.cssText = ''; }, 1800); }
  const favBtn = e.target.closest('.p-card__fav');
  if (favBtn) { e.preventDefault(); favBtn.classList.toggle('active'); showToast(favBtn.classList.contains('active') ? '❤️ Favorilere eklendi!' : 'Favorilerden çıkarıldı.'); }
});

// Search
document.getElementById('search-btn').addEventListener('click', () => { const v = document.getElementById('search-input').value.trim(); if(v) showToast(`"${v}" aranıyor…`); });
document.getElementById('search-input').addEventListener('keydown', e => { if(e.key==='Enter') document.getElementById('search-btn').click(); });
