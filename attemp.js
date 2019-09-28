
const lit = document.querySelectorAll('LI');
const yt= document.getElementsByTagName("div")[0];
const jay =[];
const nt=[];
//gets rid of content
for(var t=0;t<lit.length;t++){
    lit[t].style.display="none";
  }
  //counts correctly
var arayray=[];
for(var t=1; t<lit.length;t+=10){
  arayray.push(t);
}

for(var tb =0;tb<arayray.length; tb++){
	nt.push(tb);
}
//will places correct number of buttons
nt.forEach(function(item){
  var count =0;
  
  const yu =document.createElement("button");
 yu.className="gooy";
  // const po = dam(yu,gy);
  yu.textContent=item;
  yu.style.bottom="10px"; 
 yt.appendChild(yu);
 
})
for(var b=10;b<lit.length;b+=10){
	jay.push(b);
}
//hTML collection becoming readable by array type methods
const so = Array.prototype.slice.call( lit );
const reh= document.getElementsByClassName('gooy');
const ray = Array.prototype.slice.call( reh );
// this is the problematic for loop array
  ray.forEach((item)=>{
    item.addEventListener('click',(event)=>{
      
    nt.forEach((rot)=>{
		jay.forEach((ha) =>{
      var kid =so.slice(rot,ha);
	  for(var ef=0;ef<kid.length;ef++){
		kid[ef].style.display='block';
	  }
		});
	});
    
    });
  });
