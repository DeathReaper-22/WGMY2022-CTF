let apexChart;const apexChartAnimations={'enabled':!![]},showUserAmount=0x32,chartEl=document['querySelector']('#chart-data');async function updateScoreboard(_0xc9a1bb){const _0x56df29=_0xc9a1bb,_0x139423=0x2,_0x3a6bd1=document['querySelector']('#scoreboard_header');if(_0x56df29['length']>0x0&&Object['keys'](_0x56df29[0x0]['tasks'])['length']>0x0&&_0x3a6bd1){_0x3a6bd1['innerHTML']='<th\x20class=\x22rotated\x22\x20colspan=\x22'+_0x139423+'\x22><div\x20class=\x22rotated-left-edge\x22></div></th>';const _0x426e74=_0xc9a1bb[0x0];for(const _0x4d284b of Object['keys'](_0x426e74['tasks'])){for(const _0x3b4cab of _0x426e74['tasks'][_0x4d284b]){_0x3a6bd1['innerHTML']+='<th\x20class=\x22rotated\x22><div\x20class=\x22category-header-0\x22><span>[Task\x20'+_0x4d284b+']\x20#'+_0x3b4cab['questionNo']+'</span></div></th>';}}_0x3a6bd1['innerHTML']+='<th\x20class=\x22rotated\x22><div\x20class=\x22rotated-right-edge\x22></div></th>';}const _0xa0a4c6=document['querySelector']('#scoreboard_body');_0xa0a4c6&&(_0xa0a4c6['innerHTML']='',_0x56df29['forEach'](async function(_0x12c924,_0x59f3df){const _0x50e382=_0x12c924['rankNo']?_0x12c924['rankNo']:_0x59f3df+0x1;let _0x829b53='<tr\x20class=\x22scoreboard_row\x22>';_0x829b53='<td\x20class=\x22scoreboard_rank\x22>'+_0x50e382+'</td>',_0x829b53+='<td\x20class=\x22scoreboard_name\x22\x20style=\x27line-height:0;\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x27d-inline-block\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22media\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20class=\x22user-square-img-med\x20mr-2\x22\x20src=\x22'+_0x12c924['avatar']+'\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22media-body\x20text-left\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20class=\x22mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20class=\x22nocss\x22\x20href=\x22/p/'+_0x12c924['username']+'\x22>'+_0x12c924['username']+'</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x27m-0\x20size-12\x27><span\x20class=\x22level-simple-design\x20level\x20level-'+_0x12c924['level']+'\x22></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>';for(const _0x196c67 of Object['keys'](_0x12c924['tasks'])){for(const _0x1b874c of _0x12c924['tasks'][_0x196c67]){let _0x1d2a19='<i\x20class=\x22fas\x20fa-check-circle\x20scoreboard-points\x22\x20data-toggle=\x22tooltip\x22\x20data-placement=\x22top\x22\x20title=\x22'+_0x1b874c['score']+'\x20points\x22></i>';!_0x1b874c['correct']&&(_0x1d2a19='<i\x20class=\x22fas\x20fa-check-circle\x22\x20style=\x22opacity:\x200.2;\x22></i>'),_0x829b53+='<td\x20class=\x22scoreboard_check\x22>'+_0x1d2a19+'</td>';}}_0x829b53+='<td\x20class=\x22scoreboard_score\x22>'+_0x12c924['score']+'</td>',_0x829b53+='</tr>',_0xa0a4c6['innerHTML']+=_0x829b53,$('.scoreboard-points')['tooltip']();}));}function showChart(_0x273b34){$['getJSON']('/api/room/scoreboard?code='+_0x273b34+'&limit=10',async function(_0x5be273){populateChart(_0x5be273);});}function populateChart(_0x2caa98){if(_0x2caa98['length']>0x0){updateScoreboard(_0x2caa98);const _0x3db073=formatChartData(_0x2caa98);renderLineChart(_0x3db073);}else{const _0x443739=document['querySelector']('#scoreboard');_0x443739&&(_0x443739['innerHTML']='</br><div\x20class=\x22alert\x20alert-info\x22\x20id=\x22ctf-scoreboard\x22\x20role=\x22alert\x22>There\x20are\x20no\x20scores\x20to\x20show\x20yet.</div>',chartEl['innerHTML']='<div\x20class=\x22alert\x20alert-info\x22\x20id=\x22ctf-chart\x22\x20role=\x22alert\x22>No\x20chart\x20data\x20to\x20display.</div>',chartEl['style']['height']='auto');}}function formatChartData(_0x19a6ef){let _0x231337=[];const _0x1ffff2=[];for(const _0x214f97 of _0x19a6ef){_0x1ffff2['push']({'username':_0x214f97['username'],'currentPoints':0x0,'data':[]});for(const _0x2479ba of Object['keys'](_0x214f97['tasks'])){for(const _0x315420 of _0x214f97['tasks'][_0x2479ba]){_0x231337['push']({'username':_0x214f97['username'],'points':_0x315420['score'],'awarded':_0x315420['timeCorrect']});}}}_0x231337=_0x231337=_['sortBy'](_0x231337,'awarded');const _0xbb9480=[];for(const _0x914aaa of _0x231337){if(_0x914aaa['awarded']!=0x0){for(const _0x324d7f of _0x1ffff2){_0x324d7f['username']==_0x914aaa['username']?(_0x324d7f['currentPoints']+=_0x914aaa['points'],_0x324d7f['data']['push'](_0x324d7f['currentPoints'])):_0x324d7f['data']['push'](_0x324d7f['currentPoints']);}_0xbb9480['push'](_0x914aaa['awarded']);}}return{'series':_0x1ffff2,'labels':_0xbb9480};}function renderLineChart(_0x1d5f98){if(apexChart)apexChart['destroy']();const _0x49fe24=_0x1d5f98['labels'],_0x1efbde=[];for(const _0x128198 of _0x49fe24){const _0x461325=_0x128198?prettifyDate3(_0x128198):'-';_0x1efbde['push'](_0x461325);}const _0x580470=_0x1d5f98['series'],_0x3da646=[];for(const _0x584c71 of _0x580470){_0x3da646['push']({'name':_0x584c71['username'],'type':'line','data':_0x584c71['data']});}var _0xa7d873={'series':_0x3da646,'chart':{'animations':apexChartAnimations,'zoom':{'enabled':![]},'height':0x15e,'type':'line','toolbar':{'show':![]}},'stroke':{'curve':'smooth'},'fill':{'type':'solid','opacity':[0.35,0x1]},'labels':_0x1efbde,'markers':{'size':0x0},'xaxis':{'tooltip':{'enabled':![]},'labels':{'show':![]}},'selection':{'enabled':![]},'tooltip':{'shared':!![],'intersect':![],'y':{'formatter':function(_0xff6dc1){if(typeof _0xff6dc1!=='undefined')return _0xff6dc1['toFixed'](0x0)+'\x20points';return _0xff6dc1;}},'x':{'format':'dd\x20MMM'}}};apexChart=new ApexCharts(chartEl,_0xa7d873),apexChart['render'](),apexChartAnimations['enabled']=![];}