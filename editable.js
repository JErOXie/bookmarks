javascript:(function() { 
   document.querySelectorAll('*').forEach(tmpArr => { 
      tmpArr.setAttribute('contentEditable', true); 
   }, true);
})()
