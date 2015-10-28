/*
* This script assumes you are using jQuery. You could include the function like this,
* or in side a $(document).ready() statement after jQuery.
*/

(function(){
  var queue = '{{chatqueue}}'; //put the name of your chat queue here
  var presence_url = 'https://us.libraryh3lp.com/presence/jid/' + queue + '/chat.libraryh3lp.com/js';

  var chat_status = function(){
      $.getScript(presence_url, function(){
          if (jabber_resources[0].show === 'available' || jabber_resources[0].show === 'chat'){
              $('#chat-widget').addClass('chat-widget-closed');
          }
          else{
              $('#chat-widget').removeClass('chat-widget-closed');
          }
      });

  };

  chat_status();

  $('#chat-button').click(function() {
      $(this).parent().toggleClass('chat-widget-opened chat-widget-closed');
  });
});
