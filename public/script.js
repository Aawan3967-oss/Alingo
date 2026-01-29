const emojis = ["🚕","🍔","🛒","✈️","🎟️","📦"];
const fallBox = document.getElementById("emoji-fall");

// splash falling balls
emojis.forEach((e,i)=>{
  const el=document.createElement("div");
  el.textContent=e;
  el.style.position="absolute";
  el.style.left=10+i*12+"%";
  el.style.top="-40px";
  el.style.fontSize="24px";
  fallBox.appendChild(el);

  setTimeout(()=>{
    el.animate([
      {transform:"translateY(0)"},
      {transform:"translateY(65vh)"},
      {transform:"translateY(60vh)"}
    ],{
      duration:2200,
      easing:"ease-out",
      fill:"forwards"
    });
  },i*900);
});

// after 10 seconds → home
setTimeout(()=>{
  document.getElementById("splash").style.display="none";
  document.getElementById("home").style.display="block";

  // emojis on disk
  const disk=document.getElementById("disk");
  emojis.forEach((e,i)=>{
    const d=document.createElement("div");
    d.className="disk-emoji";
    d.textContent=e;
    const angle=(360/emojis.length)*i;
    d.style.transform=`rotate(${angle}deg) translate(130px) rotate(-${angle}deg)`;
    disk.appendChild(d);
  });

},10000);
