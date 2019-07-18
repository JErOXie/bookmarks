document.addEventListener('click', function(eke) {
   if (eke.target.title == '分享' || eke.target.textContent == '分享') {
      window.setTimeout(function() {
         require(['function-widget-1:share/util/shareFriend/createLinkShare.js']).prototype.makePrivatePassword = () => {
            return prompt('请输入自定义密码', '');
         }
      }, 500);
   }
}, false);
