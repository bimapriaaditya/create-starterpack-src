/* 
  JANGAN GUNAKAN FILE EXTENSI PADA NAMA KEY
  ===========================================================
  ❌ 'path/filename.js' : 'path/to/resources/filename.js'
  ✅ 'path/filename' : 'path/to/resources/filename.js'
  ===========================================================
  Key      : Menjadi path setelah data di bundle oleh webpack
  Value    : Arah path terkait kode js yang ingin dieksekusi
  ===========================================================
  Nama key tidak diberi ekstensi karena file hasil build
  antara development dan production akan dibedakan
*/  

const SRC_PATH = '../src';
const apps_js = {
  /*
    Isikan terkait kode js yang akan dieksekusi pada suatu halaman 
  */
  "Products/List": `${SRC_PATH}/pages/Products/List.js`,
  "Products/Detail": `${SRC_PATH}/pages/Products/Detail.js`
}

const general_js = {
  /*
    Isikan terkait kode js yang akan dieksekusi secara general pada 
    semua app tanpa terkecuali, biasanya untuk load helpers, atau
    tools dari library luar yang langsung dipakai.
  */
  'general/index': `${SRC_PATH}/index.js`,
}

const styles_scss = {
  /*
    Isikan terkait penggunaan library css pada aplikasi
  */
  "styles/main": `${SRC_PATH}/styles/scss/main.scss`,
  "styles/primitive_tokens": `${SRC_PATH}/styles/postcss/output.css`,
}

module.exports = [apps_js, general_js, styles_scss]