function readNotifications(){return $('#notification-dot,\x20#mobile-notification-dot')['fadeOut'](0x1f4),new Promise(function(_0x211f49,_0x28accd){$['post']('/notifications/read');});}function getNotifications(){return new Promise(function(_0x3a2a48,_0x4e3c02){$['getJSON']('/notifications/get',async function(_0x4a6c77){return _0x3a2a48(_0x4a6c77);});});}async function hasUnreadNotif(){let _0x167957=![];return await $['getJSON']('/notifications/has-unseen',async function(_0x5aa6ed){_0x167957=_0x5aa6ed['hasUnread'];}),_0x167957;}const notificationEls=[document['querySelector']('#nav-notifications'),document['querySelector']('#mobile-nav-notifications')];async function populateNotifications(){const _0x2b736b=await getNotifications();if(_0x2b736b['length']>0x0){notificationEls['forEach'](function(_0x44edc4){_0x44edc4['innerHTML']='',_0x44edc4['style']['padding']='0';});for(const _0x35d419 of _0x2b736b){let _0x1b00bc;if(_0x35d419['icon']=='default'||_0x35d419['icon']['length']==0x0)_0x1b00bc='<i\x20class=\x22fad\x20fa-info-square\x20small\x20text-blue\x20size-14\x22></i>';else{if(_0x35d419['icon']=='congrats')_0x1b00bc='<img\x20height=\x2218\x22\x20src=\x22https://assets.tryhackme.com/img/icons/confetti.png\x22>';else _0x35d419['icon']=='message'?_0x1b00bc='<img\x20height=\x2218\x22\x20src=\x22https://assets.tryhackme.com/img/icons/message.png\x22>':_0x1b00bc='<img\x20alt=\x22icon\x22\x20class=\x22avatar-tiny\x22\x20src=\x22'+_0x35d419['icon']+'\x22>';}const _0xabfe79='<div\x20class=\x22row\x20notification\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-auto\x20text-center\x22>'+_0x1b00bc+'</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col\x20p-0\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>'+_0x35d419['description']+'</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x27size-12\x20faded\x20mt-1\x27>'+prettifyShd(_0x35d419['created'])+'</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>';notificationEls['forEach'](function(_0x23e215){_0x23e215['innerHTML']+=_0xabfe79;});}}else notificationEls['forEach'](function(_0x1bf0c2){_0x1bf0c2['innerHTML']='<div\x20class=\x22text-center\x20mt-2\x20mb-2\x22>You\x20have\x20no\x20notifications</div>';});}async function initNotifications(){const _0x5859bb=await hasUnreadNotif();_0x5859bb==!![]?(document['querySelector']('#notification-dot')['style']['display']='block',document['querySelector']('#mobile-notification-dot')['style']['display']='block',document['querySelector']('#notification-icon')['className']+='\x20animated\x20swing',document['querySelector']('#mobile-notification-icon')['className']+='\x20animated\x20swing'):readNotificationsReq=!![];}let readNotificationsReq=![],areNotifPopulated=![];const notifButEl=[document['querySelector']('#notification-btn'),document['querySelector']('#mobile-notification-btn')];notifButEl['forEach'](function(_0x15299d){_0x15299d['addEventListener']('click',function(){!readNotificationsReq&&(readNotificationsReq=!![],readNotifications()),!areNotifPopulated&&(populateNotifications(),areNotifPopulated=!![]);}),_0x15299d['addEventListener']('mouseenter',function(){!areNotifPopulated&&(populateNotifications(),areNotifPopulated=!![]);});}),$(document)['ready'](async function(){initNotifications();});