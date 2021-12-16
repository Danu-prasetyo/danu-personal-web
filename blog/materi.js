let nama1 = "danu";
let nama2 = "fraz";
let nama3 = "supri";
let nama4 = "selena";

let alamat1 = "bogor";

//cara membuat array(membuat variabel untuk menyimpen data diatas)
//index array dimulai dari 0
let names = ["danu", "fraz", "supri", "selena"];
let alamat = ["bogor", "jakarta", "bekasi", "depok"];

console.log(names);
//menampilkan data array tertentu berdasarkan indeks array
console.log(names[0]);
console.log(names[1], alamat1);

//object
//memanggil data dengan objek
//key: value (nama:"danu")
//property name (nama)
let dataOrang1 = {
  nama: "danu",
  address: alamat1, //cara lain pengambilan data dri variable
  email: "danu@gmail.com",
  "golongan darah": "O",
};
let dataOrang2 = {
  nama: "selena",
  address: "bekasi",
  email: "selena@gmail.com",
};

console.log(dataOrang1);
console.log(dataOrang2);
//cara mengambil data obejek tertentu (variabel.propertyname)
console.log(dataOrang1.address);
console.log(dataOrang2.email);
console.log(dataOrang1["email"]); //cara lain
console.log(dataOrang1["golongan darah"]);

//array of object(menyisipkan objek di array)
let allDatas = [
  {
    namaorang: "Kagura",
    alamatnya: "land of dawn",
  },
  {
    namaorang: "Angela",
    alamatnya: "land of dawn",
  },
  dataOrang1,
];
console.log(allDatas);
