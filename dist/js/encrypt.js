/*! DropMyMessage v0.0.1 | (c) 2020 Gajendra Mehra | MIT License | http://link-to-your-git-repo.com */

  var url=window.location.href;
  var t=url.search("r=");
  var e= null;
  var myString   = "Gajendra Mehra";
var myPassword = "myPassword";
var decrypted="";
  if (t>0) {
      
      var e = url.substring(t+2,url.length);
      console.log(e.toString());
var decrypted = CryptoJS.AES.decrypt(e.toString(), myPassword);
console.log('decrypted');
console.log(decrypted);
  }


// PROCESS
var encrypted = CryptoJS.AES.encrypt(myString, myPassword);
// var e = getAllUrlParams().r+"=";


if (!decrypted.toString()&&e) {

    window.location =  url.substring(0,t-1);;
}
document.getElementById("demo0").innerHTML = myString;
document.getElementById("demo1").innerHTML = encrypted;
document.getElementById("demo2").innerHTML = decrypted;
document.getElementById("demo3").innerHTML = decrypted.toString(CryptoJS.enc.Utf8);