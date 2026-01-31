function verifyOTP(){
  const otp = document.getElementById("otp").value;
  if(otp.length === 4){
    window.location.href="tnc.html";
  }else{
    alert("Invalid OTP");
  }
}
