// TODO: import module bila dibutuhkan di sini
const { default: file } = require("@babel/core/lib/transformation/file/file");
const fs = require("fs");

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3

const bacaData = (fnCallback) => {
  
  fs.readFile(file1, "utf8", (err, data1) => {
    if (err) {
      return fnCallback(err, null);
    }
    fs.readFile(file2, "utf8", (err, data2) => {
      if (err) {
        return fnCallback(err, null);
      }
      fs.readFile(file3, "utf8", (err, data3) => {
        if (err) {
          return fnCallback(err, null);
        }

        let dataPertama = JSON.parse(data1);
        let dataKedua = JSON.parse(data2);
        let dataKetiga = JSON.parse(data3);

        let message1 = dataPertama.message.split(" ");
        let message2 = dataKedua[0].message.split(" ");
        let message3 = dataKetiga[0].data.message.split(" ");

        let arrMessage = [];

        arrMessage.push(message1[1], message2[1], message3[1]);
        fnCallback(null, arrMessage);
      });
    });
  });
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
