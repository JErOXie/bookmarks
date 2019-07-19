document.addEventListener('click', function(element) {
   if (element.target.title) {
      window.setTimeout(function() {
         require(['function-widget-1:share/util/shareFriend/createLinkShare.js']).prototype.makePrivatePassword = () => {
            return prompt('请输入自定义密码', '1234');
         }
      }, 500);
   }
}, false);
