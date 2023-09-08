const dataPenjualanNovel = [
  {
    idProduct: 'BOOK002421',
    namaProduk: 'Pulang - Pergi',
    penulis: 'Tere Liye',
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: 'BOOK002351',
    namaProduk: 'Selamat Tinggal',
    penulis: 'Tere Liye',
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: 'BOOK002941',
    namaProduk: 'Garis Waktu',
    penulis: 'Fiersa Besari',
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: 'BOOK002941',
    namaProduk: 'Laskar Pelangi',
    penulis: 'Andrea Hirata',
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

function getInfoPenjualan(dataPenjualan) {
  // Inisialisasi variabel untuk menghitung total keuntungan dan total modal
  let totalKeuntungan = 0;
  let totalModal = 0;

  // Objek untuk menghitung total penjualan berdasarkan penulis
  const penulisSales = {};

  // Objek untuk menghitung total penjualan berdasarkan produk
  const produkSales = {};

  // Iterasi melalui dataPenjualan
  dataPenjualan.forEach((product) => {
    // Menghitung total keuntungan dan total modal
    totalKeuntungan += product.totalTerjual * (product.hargaJual - product.hargaBeli);
    totalModal += (product.totalTerjual + product.sisaStok) * product.hargaBeli;

    // Menghitung total penjualan berdasarkan penulis
    if (!penulisSales[product.penulis]) {
      penulisSales[product.penulis] = product.totalTerjual;
    } else {
      penulisSales[product.penulis] += product.totalTerjual;
    }

    // Menghitung total penjualan berdasarkan produk
    if (!produkSales[product.namaProduk]) {
      produkSales[product.namaProduk] = product.totalTerjual;
    } else {
      produkSales[product.namaProduk] += product.totalTerjual;
    }
  });

  // Mencari penulis dengan penjualan tertinggi
  let penulisTerlaris = '';
  let penjualanTerlaris = 0;
  for (const penulis in penulisSales) {
    if (penulisSales[penulis] > penjualanTerlaris) {
      penulisTerlaris = penulis;
      penjualanTerlaris = penulisSales[penulis];
    }
  }

  // Mencari produk dengan penjualan tertinggi
  let produkBukuTerlaris = '';
  let penjualanProdukTerlaris = 0;
  for (const produk in produkSales) {
    if (produkSales[produk] > penjualanProdukTerlaris) {
      produkBukuTerlaris = produk;
      penjualanProdukTerlaris = produkSales[produk];
    }
  }

  // Menghitung persentase keuntungan
  const persentaseKeuntungan = ((totalKeuntungan / totalModal) * 100).toFixed(2);

  // Format uang dalam rupiah
  const formatRupiah = (angka) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(angka);
  };

  // Membuat object data hasil
  const dataHasil = {
    totalKeuntungan: formatRupiah(totalKeuntungan),
    totalModal: formatRupiah(totalModal),
    persentaseKeuntungan: `${persentaseKeuntungan}%`,
    produkBukuTerlaris,
    penulisTerlaris,
  };

  return dataHasil;
}

console.log(getInfoPenjualan(dataPenjualanNovel));
