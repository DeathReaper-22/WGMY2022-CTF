let existingTerms=[];function retrieveTerm(_0x53a072){return new Promise(async function(_0x27feb2,_0x306f55){$['getJSON']('/glossary/get-terms?term='+_0x53a072,function(_0x10aae9){let _0x3ae480=[];return _0x10aae9['glossaryData']['length']>0x0&&_0x10aae9['success']&&(_0x3ae480=_0x10aae9['glossaryData']),_0x27feb2(_0x3ae480);});});}function retrieveAllTerms(){return new Promise(async function(_0x796acd,_0x50303b){$['getJSON']('/glossary/all-terms',function(_0x588b7d){return _0x796acd(_0x588b7d);});});}function searchTerm(_0x2d8e17){let _0x447a2e=_0x2d8e17,_0x3bafde=[],_0x392ee1={};if(allGlossaryTerms['length']>0x0&&_0x2d8e17['length']>0x0)for(let _0xb7b0c7=0x1;_0xb7b0c7<=_0x2d8e17['length'];_0xb7b0c7++){let _0x128cd2=_0x2d8e17['slice'](0x0,_0xb7b0c7)['join']('\x20'),_0x3d52c7=allGlossaryTerms['filter'](_0x559ebd=>_0x559ebd==_0x128cd2);_0x3d52c7['length']==0x1&&(_0x392ee1['searchedTerm']=allGlossaryTerms['filter'](_0x30a929=>_0x30a929==_0x3d52c7[0x0])[0x0],_0x392ee1['originalTerm']=_0x447a2e['slice'](0x0,_0xb7b0c7)['join']('\x20'),_0x3bafde['push'](_0x392ee1));}return _0x392ee1=_0x3bafde[_0x3bafde['length']-0x1]?_0x3bafde[_0x3bafde['length']-0x1]:{},_0x392ee1;}function makeId(_0x4218dc){const _0x26efff=[];var _0x5e4f1e='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',_0x12cb93=_0x5e4f1e['length'];for(var _0x565863=0x0;_0x565863<_0x4218dc;_0x565863++){_0x26efff['push'](_0x5e4f1e['charAt'](Math['floor'](Math['random']()*_0x12cb93)));}return _0x26efff['join']('');}const replace_nth=function(_0x1d6d5f,_0x121530,_0x375f9d,_0x5d78da){return _0x1d6d5f['replace'](RegExp('^(?:.*?'+_0x121530+'){'+_0x5d78da+'}'),_0x24466a=>_0x24466a['replace'](RegExp(_0x121530+'$'),_0x375f9d));};async function replaceTermsRecursive(_0x55b135){if(_0x55b135['classList']&&Array['from'](_0x55b135['classList'])['includes']('glossary-term')||_0x55b135['tagName']=='A')return;let _0x4a4ad2=_0x55b135['childNodes'];if(_0x4a4ad2['length']>0x0)for(node of _0x4a4ad2){replaceTermsRecursive(node);}else{if(_0x55b135['nodeType']==Node['TEXT_NODE']){let _0xfc2859=_0x55b135['textContent'],_0x429679=_0x55b135['textContent']['replace'](/[.,\/#!$%\^&\*;:{}=_`~()]/g,'')['replace'](/\n/gi,''),_0x2531de=_0x429679['split']('\x20')['filter'](_0x11b56b=>_0x11b56b),_0x3c648e={};for(let _0xc0c1b0=0x0;_0xc0c1b0<_0x2531de['length'];_0xc0c1b0++){let _0x1689e4=searchTerm(_0x2531de['slice'](_0xc0c1b0));if(Object['keys'](_0x1689e4)['length']>0x0){_0x1689e4['searchedTerm']['split']('\x20')['length']>0x1&&(matchedTermSelector=_0x1689e4['originalTerm']['split']('\x20')['join']('-'));_0x3c648e[_0x1689e4['searchedTerm']]?_0x3c648e[_0x1689e4['searchedTerm']]+=0x2:_0x3c648e[_0x1689e4['searchedTerm']]=0x1;let _0x50caba=makeId(0x8),_0x134f9a='<a\x20class=\x27'+_0x50caba+'\x20glossary-term\x27\x20onclick=\x22initPopOver(\x27'+_0x1689e4['searchedTerm']+'\x27,\x20\x27'+_0x50caba+'\x27)\x22>'+_0x1689e4['originalTerm']+'</a>',_0x713709=replace_nth(_0xfc2859,_0x1689e4['originalTerm'],_0x134f9a,_0x3c648e[_0x1689e4['searchedTerm']]),_0x3daa0f=document['createElement']('span');_0x55b135['parentNode']&&(_0x3daa0f['innerHTML']=_0x713709,_0x55b135['parentNode']['replaceChild'](_0x3daa0f,_0x55b135));}}}return;}}async function replaceTerms(){let _0x2c9315=document['querySelectorAll']('.room-task-desc-data,\x20.room-task-question-details');for(term of _0x2c9315){replaceTermsRecursive(term);}}function resetBootStrapAllowList(){let _0x2c7e35=$['fn']['tooltip']['Constructor']['Default']['whiteList'];return _0x2c7e35['a']=['data-toggle','href','data-original-title','title'],_0x2c7e35;}function generateResourceLinks(_0x3a99ca,_0x4b8b8c){return _0x3a99ca['length']==0x0?'No\x20specified\x20resource\x20exists':_0x4b8b8c=='codes'?_0x3a99ca['map'](function(_0x2605b2){return'<a\x20href=https://tryhackme.com/room/'+_0x2605b2+'>'+_0x2605b2+'</a>\x0a';})['join'](','):_0x3a99ca['map'](function(_0x482d76){return'<a\x20href='+_0x482d76+'>'+_0x482d76+'</a>\x0a';});}async function checkTermExists(_0x27f1b5){let _0x3922cc=existingTerms['filter'](_0x57f488=>_0x57f488['term']==_0x27f1b5)[0x0];if(_0x3922cc)return _0x3922cc;else{const _0x4328e2=await retrieveTerm(_0x27f1b5);if(_0x4328e2['length']>0x0){const _0xcc9432=_0x4328e2['filter'](_0x3b0a29=>_0x3b0a29['term']==_0x27f1b5)[0x0];if(_0xcc9432)return _0xcc9432;}}return null;}let initialisedSelectors=[],linkClick=![];async function initPopOver(_0x131570,_0x32cd2b){if(!initialisedSelectors['includes'](_0x32cd2b)){const _0x300b31=await checkTermExists(_0x131570),_0x45030d=resetBootStrapAllowList();if(_0x300b31){initialisedSelectors['push'](_0x32cd2b);let _0x586a07=generateResourceLinks(_0x300b31['resources']['videos'],'videos'),_0x5e80a3=generateResourceLinks(_0x300b31['resources']['articles'],'articles'),_0x2f5595=generateResourceLinks(_0x300b31['resources']['roomCodes'],'codes'),_0x294f6d='<ul\x20class=\x22nav\x20nav-tabs\x20mb-3\x22\x20role=\x22tablist\x22>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22nav-item\x20mr-1\x22>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20class=\x22nav-link\x20active\x22\x20data-toggle=\x22tab\x22\x20href=\x22#glossaryDefinition\x22><i\x20class=\x22fas\x20fa-spell-check\x22></i></a>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22nav-item\x20mr-1\x22>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20class=\x22nav-link\x22\x20data-toggle=\x22tab\x22\x20href=\x22#glossaryVideos\x22><i\x20class=\x22fas\x20fa-video-slash\x22></i></a>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22nav-item\x20mr-1\x22>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20class=\x22nav-link\x22\x20data-toggle=\x22tab\x22\x20href=\x22#glossaryRooms\x22><i\x20class=\x22fas\x20fa-book-open\x22></i></a>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22nav-item\x20mr-1\x22>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20class=\x22nav-link\x22\x20data-toggle=\x22tab\x22\x20href=\x22#glossaryArticles\x22><i\x20class=\x22fas\x20fa-newspaper\x22></i></a>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</ul>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tab-content\x22>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22glossaryDefinition\x22\x20class=\x22tab-pane\x20active\x22>\x20'+_0x300b31['definition']+'\x20</div>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22glossaryVideos\x22\x20class=\x22tab-pane\x22>\x20'+_0x586a07+'\x20</div>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22glossaryRooms\x22\x20class=\x22tab-pane\x22>\x20'+_0x2f5595+'\x20</div>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22glossaryArticles\x22\x20class=\x22tab-pane\x22>\x20'+_0x5e80a3+'\x20</div>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>';$('.'+_0x32cd2b)['popover']({'html':!![],'trigger':'click','title':_0x131570,'placement':'top','whiteList':_0x45030d,'content':_0x294f6d})['on']('show.bs.popover',function(_0x327a49){$('.popover')['not'](_0x327a49['target'])['popover']('hide');}),$('.'+_0x32cd2b)['popover']('show');}}else $('.'+_0x32cd2b)['popover']('show');}$('body')['on']('click',function(_0x124e9c){$('.popover')['each'](function(){!$(this)['is'](_0x124e9c['target'])&&_0x124e9c['target']['tagName']!='A'&&$(this)['has'](_0x124e9c['target'])['length']===0x0&&$('.popover')['has'](_0x124e9c['target'])['length']===0x0&&$(this)['popover']('hide');});});