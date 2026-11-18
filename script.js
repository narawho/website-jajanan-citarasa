const beranda = document.getElementById('beranda');

const images = [
  'img/BACKG1.jpg',
  'img/BACKG2.jpg',
  'img/BACKG3.jpg',
];

let currentIndex = 0;

const layerA = document.createElement('div');
const layerB = document.createElement('div');

layerA.classList.add('bg-layer', 'active');
layerB.classList.add('bg-layer');

if (beranda) {
  beranda.prepend(layerB);
  beranda.prepend(layerA);
}

let isAActive = true;

function changeBackground() {
  if (!beranda || images.length === 0) return;

  currentIndex = (currentIndex + 1) % images.length;

  const nextLayer = isAActive ? layerB : layerA;
  const currentLayer = isAActive ? layerA : layerB;

  nextLayer.style.backgroundImage = `url('${images[currentIndex]}')`;
  nextLayer.classList.add('active');
  currentLayer.classList.remove('active');

  isAActive = !isAActive;
}

layerA.style.backgroundImage = `url('${images[0]}')`;
setInterval(changeBackground, 4000);

function showToast(message) {
  let toast = document.getElementById("toast");
  if (toast) {
    toast.textContent = message;
    toast.className = "show";
    setTimeout(() => {
      toast.className = toast.className.replace("show", "");
    }, 3000);
  }
}

window.onload = () => {
  console.log("Website Jajanan Cita Rasa Siap!");
};

function initPemesanan() {
  const NOMOR_WA = "6287715188829";

  const params = new URLSearchParams(window.location.search);
  const nama   = params.get('nama')   || 'Produk Jajanan Cita Rasa';
  const harga  = params.get('harga')  || '';
  const gambar = params.get('gambar') || '';
  const desc   = params.get('desc')   || '';
  const kat    = params.get('kat')    || 'Produk';

  document.getElementById('produk-nama').textContent  = nama;
  document.getElementById('produk-harga').textContent = harga;
  document.getElementById('produk-desc').textContent  = desc;
  document.getElementById('produk-kat').textContent   = kat;
  document.title = `${nama} - Jajanan Cita Rasa`;

  if (gambar) {
    document.getElementById('mainImage').src = gambar;
  }

  const pesan = `Halo Jajanan Cita Rasa, saya ingin memesan produk berikut:%0A%0A🛒 *${encodeURIComponent(nama)}*%0A💰 Harga: ${encodeURIComponent(harga)}%0A%0AApakah masih ready? Terima kasih!`;
  document.getElementById('btn-wa').href = `https://wa.me/${NOMOR_WA}?text=${pesan}`;
}

function initProduk() {
  const semuaProduk = [
    {
      nama: "Basreng Balado Daun Jeruk",
      deskripsi: "Camilan bakso goreng renyah dengan bumbu gurih yang bikin waktu santai makin seru. Tersedia dalam tiga pilihan rasa: Pedas Daun Jeruk, Balado Daun Jeruk, dan Original Daun Jeruk. Pilih sensasi pedas favoritmu atau nikmati rasa original dengan aroma khas daun jeruk. Pas untuk teman bekerja, menonton, atau berbagi bersama keluarga.",
      harga: "Rp 17.000",
      gambar: "img/basreng_balado.png",
      kat: "Balado",
      netto: "250 gr"
    },

    {
      nama: "Basreng Cah Ngapak Original Daun Jeruk",
      deskripsi: "Camilan bakso goreng renyah dengan bumbu gurih yang bikin waktu santai makin seru. Tersedia dalam tiga pilihan rasa: Pedas Daun Jeruk, Balado Daun Jeruk, dan Original Daun Jeruk. Pilih sensasi pedas favoritmu atau nikmati rasa original dengan aroma khas daun jeruk. Pas untuk teman bekerja, menonton, atau berbagi bersama keluarga.",
      harga: "Rp 17.000",
      gambar: "img/basreng_ori.png",
      kat: "Original",
      netto: "250 gr"
    },

    {
      nama: "Basreng Cah Ngapak Pedas Daun Jeruk",
      deskripsi: "Camilan bakso goreng renyah dengan bumbu gurih yang bikin waktu santai makin seru. Tersedia dalam tiga pilihan rasa: Pedas Daun Jeruk, Balado Daun Jeruk, dan Original Daun Jeruk. Pilih sensasi pedas favoritmu atau nikmati rasa original dengan aroma khas daun jeruk. Pas untuk teman bekerja, menonton, atau berbagi bersama keluarga.",
      harga: "Rp 17.000",
      gambar: "img/basreng_pedas.png",
      kat: "Pedas",
      netto: "250 gr"
    },

    {
      nama: "Mie Gulung",
      deskripsi: "Nikmati kelezatan Mie Gulung, camilan renyah dengan bentuk unik dan cita rasa gurih yang bikin ketagihan! Dibuat dari mie pilihan dengan bumbu khas yang meresap di setiap gigitan. Tersedia dalam berbagai varian rasa yang lezat, cocok untuk menemani waktu santai, belajar, bekerja, maupun berkumpul bersama keluarga dan teman. Sekali coba, dijamin ingin lagi!",
      harga: "Rp 15.000",
      gambar: "img/milung.png",
      kat: "Camilan"
    },

    {
      nama: "Sambal Uenak",
      deskripsi: "Nikmati sensasi pedas dan gurih dari Sambal Uenak yang siap menggugah selera di setiap hidangan! Dibuat dengan perpaduan cabai, bawang, dan bumbu pilihan yang menghasilkan cita rasa pedas, gurih, serta aroma yang menggoda. Cocok dijadikan pelengkap berbagai makanan favorit, mulai dari nasi hangat, lauk-pauk, hingga camilan. Praktis dinikmati kapan saja untuk menambah kenikmatan setiap suapan!",
      harga: "Rp 28.000",
      gambar: "img/sambal.png",
      kat: "Sambal"
    },

    {
      nama: "Basreng Cah Ngapak Original Daun Jeruk",
      deskripsi: "Camilan bakso goreng renyah dengan bumbu gurih yang bikin waktu santai makin seru. Tersedia dalam tiga pilihan rasa: Pedas Daun Jeruk, Balado Daun Jeruk, dan Original Daun Jeruk. Pilih sensasi pedas favoritmu atau nikmati rasa original dengan aroma khas daun jeruk. Pas untuk teman bekerja, menonton, atau berbagi bersama keluarga.",
      harga: "Rp 13.000",
      gambar: "img/ori_100gr.png",
      kat: "Original",
      netto: "100 gr"
    },

    {
      nama: "Basreng Cah Ngapak Pedas Daun Jeruk",
      deskripsi: "Camilan bakso goreng renyah dengan bumbu gurih yang bikin waktu santai makin seru. Tersedia dalam tiga pilihan rasa: Pedas Daun Jeruk, Balado Daun Jeruk, dan Original Daun Jeruk. Pilih sensasi pedas favoritmu atau nikmati rasa original dengan aroma khas daun jeruk. Pas untuk teman bekerja, menonton, atau berbagi bersama keluarga.",
      harga: "Rp 13.000",
      gambar: "img/pedas_100gr.png",
      kat: "Pedas",
      netto: "100 gr"
    },
  ];

  function buatLinkPesan(p) {
    const nama   = encodeURIComponent(p.nama);
    const harga  = encodeURIComponent(p.harga);
    const gambar = encodeURIComponent(p.gambar);
    const desc   = encodeURIComponent(p.deskripsi);
    const kat    = encodeURIComponent(p.kat || '');
    return `pemesanan.html?nama=${nama}&harga=${harga}&gambar=${gambar}&desc=${desc}&kat=${kat}`;
  }

  const grid = document.getElementById('produk-grid');
  grid.innerHTML = semuaProduk.map(p => {
    const label = [p.kat, p.netto ? 'Netto ' + p.netto : ''].filter(Boolean).join(' · ');
    return `
      <div class="produk-item">
        <div class="produk-foto">
          <img src="${p.gambar}" alt="${p.nama}">
        </div>
        <div class="produk-detail">
          ${label ? `<span class="produk-tag">${label}</span>` : ''}
          <h3>${p.nama}</h3>
          <p>${p.deskripsi}</p>
          <div class="produk-harga">${p.harga}</div>
          <a href="${buatLinkPesan(p)}" class="btn">Pesan Sekarang</a>
        </div>
      </div>
    `;
  }).join('');
}

if (document.body.classList.contains('page-pemesanan')) initPemesanan();
if (document.body.classList.contains('page-produk')) initProduk();