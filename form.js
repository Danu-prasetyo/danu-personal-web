/*let nama = "Danu";
let email = "Example@gmail.com";
let gender = "Laki-laki";
let message = "Halo";
let alldata = "nama : " + nama + "email : " + email + "gender : " + gender + "message : " + message;
let alldata2 = `name : ${nama} 
email : ${email} 
gender : ${email} 
message : ${message}`;

alert(alldata);
alert(alldata2);*/

function submitData() {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let gender = document.getElementById("gender");
  let subject = document.getElementById("subject");
  let message = document.getElementById("description");

  name = name.value;
  email = email.value;
  gender = gender.value;
  subject = subject.value;
  message = message.value;

  /*if (name == "") {
    return alert("Namanya tidak boleh kosong");
  } else if (email == "") {
    return alert("Email tidak boleh kosong");
  } else if (gender == "") {
    return alert("Gender tidak boleh kosong");
  } else if (subject == "") {
    return alert("Subject tidak boleh kosong");
  } else if (message == "") {
    return alert("Pesan tidak boleh kosong");
  }*/

  if (name == "" || email == "" || gender == "" || subject == "" || message == "") {
    return alert("Data tidak boleh kosong BosQ");
  }
  /** fungsi return adalah mengembalikan nilai
  artinya program berenti disini, kode selanjutnya ga akan dieksekusi */

  let emailReceiver = "danuchama@gmail.com";

  let a = document.createElement("a");
  a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello my name ${name}, ${subject}, ${message}`;
  a.target = "_blank";
  a.click();

  //object
  //key-value
  let dataObject = {
    name: name,
    email: email,
    gender: gender,
    subject: subject,
    message: message,
  };

  console.log(dataObject.email);
}
