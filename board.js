// Keep the fixing pins on the same 32px grid as the board holes.
// Ordinary page links continue to work if JavaScript is disabled.
function alignObjects(){
 const board=document.querySelector('.board');if(!board)return;
 const b=board.getBoundingClientRect();
 const originX=b.left+board.clientLeft+16,originY=b.top+board.clientTop+16;
 document.querySelectorAll('.object').forEach(object=>{
  object.style.transform='none';
  const pin=object.querySelector('.pin');if(!pin)return;
  const r=pin.getBoundingClientRect(),x=r.left+r.width/2,y=r.top+r.height/2;
  const dx=originX+Math.round((x-originX)/32)*32-x;
  const dy=originY+Math.round((y-originY)/32)*32-y;
  object.style.transform=`translate(${dx}px,${dy}px)`;
 });
}
window.addEventListener('load',alignObjects);window.addEventListener('resize',alignObjects);
if(document.fonts)document.fonts.ready.then(alignObjects);
