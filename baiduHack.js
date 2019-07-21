document.addEventListener('click',function(event) {
   window.setTimeout(function() {
      require(['function-widget-1:share/util/shareFriend/createLinkShare.js']).prototype.makePrivatePassword = () => {
         return prompt('请输入自定义密码', '1234');
      }
   }, 1000);
}, true)
