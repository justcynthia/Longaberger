(function(){
 var grid=document.getElementById('grid'),cards=[].slice.call(grid.querySelectorAll('.card'));
 var q=document.getElementById('q'),cat=document.getElementById('cat'),lot=document.getElementById('lot'),
     sort=document.getElementById('sort'),tally=document.getElementById('tally'),
     empty=document.getElementById('empty'),dlg=document.getElementById('dlg'),body=document.getElementById('dbody');
 function apply(){
  var t=q.value.trim().toLowerCase(),c=cat.value,l=lot.value,n=0;
  cards.forEach(function(el){
   var ok=(!t||el.dataset.search.indexOf(t)>-1)&&(!c||el.dataset.cat===c)&&
          (!l||el.dataset.lot.indexOf('|'+l+'|')>-1);
   el.hidden=!ok; if(ok)n++;
  });
  tally.textContent=n+(n===1?' item':' items');
  empty.hidden=n>0;
  var s=sort.value;
  cards.slice().sort(function(a,b){
   if(s==='price-desc')return (+b.dataset.low)-(+a.dataset.low);
   if(s==='price-asc') return (+a.dataset.low)-(+b.dataset.low);
   if(s==='name') return a.querySelector('h3').textContent.localeCompare(b.querySelector('h3').textContent);
   return (+a.dataset.order)-(+b.dataset.order);
  }).forEach(function(el){grid.appendChild(el);});
 }
 [q,cat,lot,sort].forEach(function(el){el.addEventListener('input',apply);});
 apply();
 cards.forEach(function(el){
  el.querySelector('.shot').addEventListener('click',function(){
   body.innerHTML='';
   body.appendChild(el.querySelector('template.detail').content.cloneNode(true));
   body.parentElement.scrollTop=0;
   if(typeof dlg.showModal==='function'){dlg.showModal();}else{dlg.setAttribute('open','');}
  });
 });
 document.getElementById('close').addEventListener('click',function(){dlg.close();});
 dlg.addEventListener('click',function(e){if(e.target===dlg)dlg.close();});
})();