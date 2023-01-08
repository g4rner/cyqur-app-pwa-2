// token api
const BACKEND_URL_PREFIX = 'https://api.cyqur.io/';
// set version number
document.getElementById("version").innerHTML = "v1.23.1.8";
// check date
var todayDate = new Date().toISOString().slice(0, 10);
console.log(todayDate);
// crx public key generated as (stored in manifest.json)
//MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsVvG+4c6bSwOHZXdip3P866TgGp6kF4qeG/WikVxxsHXK2Tgf8mjptgDgoQmvNydo11tU/Z9EDeTwpZc1XNfoDcmyPFLAEUgsA70tfvSQQCjQ8ozhrj4k1SGNEk7Wyo1hjcNojQMENXGKsMGj/5pWxiAFshaHoCiFi3S2cMN2aKsqah7bAi1VsGuVJy9p/YHGkVXy5+j6YMC5oCNhQtbwnFwJa3Agdtm3AIEUwXcN/PKYgMj8xCKsWdq01A5zPw/QIUTUDdbk9TefIY/tuODcwWgEHEvJs9PVIEcR3i2nlmNC17MyNzkhZ+9TqV2lqcCboUtsHIUfFqG4mYr/HfPDwIDAQAB 
// from https://itero.plasmo.com/tools/generate-keypairs 
// gives this crx id
// hfehlkhcmaopnokgpkhmjmhcjfakgofa

// Add expand link if crx else no show
var ctt = document.head.querySelector("[property~=thisis][content]").content;;
if(ctt==="crx"){
    document.getElementById("fillwindow").innerHTML = "<a href='chrome-extension://hfehlkhcmaopnokgpkhmjmhcjfakgofa/crx.html' target='_blank'><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"#000000\" height=\"12\" width=\"12\" viewBox=\"0 0 490.8 490.8\" xmlns:v=\"https://vecta.io/nano\"><path d=\"M487.68 237.827l-74.667-74.667c-4.267-4.053-10.987-3.947-15.04.213-3.947 4.16-3.947 10.667 0 14.827l56.427 56.427H256.107V11.053c0-5.333-3.84-10.133-9.067-10.88-6.613-.96-12.267 4.16-12.267 10.56v224H33.92l48.853-57.067c3.733-4.587 2.987-11.307-1.6-15.04C76.8 159 70.293 159.533 66.56 163.8l-64 74.667c-3.413 3.947-3.413 9.92 0 13.867l64 74.667c3.947 4.373 10.667 4.693 15.04.747 4.267-3.84 4.693-10.24 1.173-14.613L33.92 256.067h200.853v223.68c0 5.333 3.84 10.133 9.067 10.88 6.613.96 12.267-4.16 12.267-10.56v-224H454.4l-56.427 56.427c-4.267 4.053-4.373 10.88-.213 15.04 4.053 4.267 10.88 4.373 15.04.213l.213-.213 74.667-74.667c4.16-4.054 4.16-10.88 0-15.04z\"/></svg></a>";
}else{
    document.getElementById("fillwindow").innerHTML = "";
}
