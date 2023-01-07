const angka: number = 121;
console.log(angka);

type nama = {
  nama: string;
  umur: number;
};

const orang: nama = {
  nama: "selee",
  umur: 20,
};

console.log(orang.nama);

type fumgsi1 = (nama: string, umur: number) => number;

const fungsi1: fumgsi1 = (nama: string, umur: number): any => {
  return nama + umur;
};

console.log(fungsi1("sde", 4));

// function fungsi1 : fumgsi1 (nama: number, umur: number):number {
//     return nama + umur

// }
