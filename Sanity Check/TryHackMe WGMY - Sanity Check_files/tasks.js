const colorAnswers={'incorrect':{'text':'red','border':'task-incomplete','icon':'<i\x20class=\x22far\x20fa-circle\x20text-lgray\x22></i>'},'correct':{'text':'hacker-green','border':'task-complete','icon':'<i\x20class=\x22fas\x20fa-check-circle\x22></i>'}};function getCurrentTaskNo(_0x434542){let _0xc94ba6=0x1;for(const _0x5b0117 of _0x434542){for(const _0x324c86 of _0x5b0117['tasksInfo']){if(_0x324c86['correct']==![])return _0xc94ba6;}_0xc94ba6++;}return 0x1;}function renderTasks(){const _0x24be0a=getCurrentTaskNo(taskData);let _0x1883e7=![],_0x14255f='';for(const _0x204ebf of taskData){_0x14255f+=renderSingleTask(_0x204ebf,_0x24be0a);const _0x5d709d=_0x204ebf['staticSites']?_0x204ebf['staticSites']['some'](_0x335747=>_0x335747['autoOpen']):![];if(_0x5d709d)_0x1883e7=!![];}taskEl['innerHTML']+=_0x14255f,Prism['highlightAll'](),setupMagnificPopup(),setTimeout(function(){currentDeployedIP['length']>0x0&&(replaceText(document['body'],'MACHINE_IP',currentDeployedIP),replaceText(document['body'],'LAB_WEB_URL',formatIPForProxy(currentDeployedIP))),connectionIP['length']>0x0&&replaceText(document['body'],'CONNECTION_IP',connectionIP),setEnterAnswerEvent(),$('[data-toggle=\x22tooltip\x22]')['tooltip']();},0x3e8);if(_0x1883e7)startIntroStaticLab();}function openConnModal(){$('#navConnModal')['modal']('toggle');}function viewTaskSites(_0x17a0bf){const _0x18504b=_0x17a0bf['dataset']['taskno'],_0x5c1566=taskData['find'](_0x2fd720=>_0x2fd720['taskNo']==_0x18504b);for(const _0x47107d of _0x5c1566['staticSites']){const _0x117131=('s'+_0x18504b+_0x47107d['title'])['replace'](/[^a-zA-Z0-9\.]+/g,'')['slice'](0x0,0xf)['toLowerCase'](),_0x3d0d0e={'instanceId':_0x117131,'url':_0x47107d['url'],'title':_0x47107d['title'],'type':'static-site'};addWebBasedMachine(_0x3d0d0e),initWebBasedMachine(_0x3d0d0e),startIntroStaticLab();}}function handleStaticSites(_0x1ccb30,_0x39e342){let _0x3bd043='';for(const _0x170ab6 of _0x39e342){_0x3bd043='<button\x20class=\x27btn\x20btn-success\x20float-right\x20ml-2\x20mb-2\x27\x20data-taskno=\x22'+_0x1ccb30+'\x22\x20\x20\x20\x20\x20onclick=\x22viewTaskSites(this)\x22><i\x20class=\x22far\x20fa-browser\x20mr-1\x22></i>\x20View\x20Site</button>';if(_0x170ab6['autoOpen']==!![]){const _0x3ab7e6=('s'+_0x1ccb30+_0x170ab6['title'])['replace'](/[^a-zA-Z0-9\.]+/g,'')['slice'](0x0,0xf)['toLowerCase'](),_0x2bda4c={'instanceId':_0x3ab7e6,'url':_0x170ab6['url'],'title':_0x170ab6['title'],'type':'static-site'};addWebBasedMachine(_0x2bda4c),initWebBasedMachine(_0x2bda4c);}}return _0x3bd043;}function renderSingleTask(_0x33d67b,_0x4a1577){let _0x25b643=!![];const _0x42eca9=_0x33d67b['taskDesc'],_0xcd4945=_0x33d67b['taskNo'];let _0x13967b='';if(errorCodes['includes'](errorCode)&&_0x33d67b['questions']['length']>0x0)_0x25b643=![],_0x13967b+=showTasksForViewers(_0x33d67b['questions'],_0xcd4945);else{const _0x2b2fa1=showTasksForUser(_0x33d67b,_0x25b643);_0x13967b+=_0x2b2fa1['html'],_0x25b643=_0x2b2fa1['allCorrect'];}_0x33d67b['questions']['length']==0x0&&(_0x13967b='<h5>No\x20questions\x20have\x20been\x20set..</h5>');let _0x7f9406;if(_0x33d67b['taskType']=='vm'||_0x33d67b['taskType']=='THM'){const _0x22730b=!allowDeployment?'disabled':'';_0x7f9406='<div\x20class=\x27btn-group\x20mb-3\x20ml-3\x20float-right\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-success\x22\x20value=\x22'+_0x33d67b['uploadId']+'\x22\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20onclick=\x22deploy(this)\x22\x20'+_0x22730b+'><i\x20class=\x22fas\x20fa-play\x20mr-2\x22></i>\x20Start\x20Machine</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>';}else{if(_0x33d67b['taskType']=='downloadable'){let _0x5ef219='';errorCode===0x2&&(_0x5ef219='disabled'),_0x7f9406='<form\x20class=\x27float-right\x27\x20method=\x22post\x22\x20action=\x22/material/deploy\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22hidden\x22\x20name=\x22roomCode\x22\x20value=\x22'+roomCode+'\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22hidden\x22\x20name=\x22id\x22\x20value=\x27'+_0x33d67b['uploadId']+'\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22submit\x22\x20class=\x22btn\x20btn-primary\x20mb-3\x20ml-3\x22\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20value=\x22Download\x22\x20'+_0x5ef219+'>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-cloud-download-alt\x20mr-2\x22></i>\x20Download\x20Task\x20Files</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</form>';}else{if(_0x33d67b['taskType']=='static-site')_0x7f9406=handleStaticSites(_0xcd4945,_0x33d67b['staticSites']);else _0x33d67b['taskType']=='none'&&(_0x7f9406='');}}const _0x1f0871=_0x25b643?colorAnswers['correct']:colorAnswers['incorrect'];let _0x1abea3='';(_0x7f9406&&_0x7f9406['length']>0x0||_0x42eca9['length']>0x0)&&(_0x1abea3='<div\x20class=\x27room-task-desc\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x27room-task-desc-data\x27>'+_0x7f9406+'\x20'+_0x42eca9+'</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22room-questions-split\x20vertical-align-custom\x20'+_0x1f0871['text']+'\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Answer\x20the\x20questions\x20below</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20');const _0x4ef792=_0x4a1577==_0x33d67b['taskNo']?'show':'';let _0x5192ce='';if(_0x33d67b['taskType']=='vm'||_0x33d67b['taskType']=='THM')_0x5192ce='<i\x20class=\x22far\x20fa-server\x20text-lgreen\x22\x20data-toggle=\x22tooltip\x22\x20data-placement=\x22left\x22\x20\x20\x20\x20\x20title=\x22Task\x20includes\x20a\x20deployable\x20machine\x22></i>';else{if(_0x33d67b['taskType']=='downloadable')_0x5192ce='<i\x20class=\x22far\x20fa-download\x20text-lblue\x22\x20data-toggle=\x22tooltip\x22\x20data-placement=\x22left\x22\x20\x20\x20\x20\x20title=\x22Task\x20includes\x20a\x20downloadable\x20file\x22></i>';else _0x33d67b['taskType']=='static-site'&&(_0x5192ce='<i\x20class=\x22far\x20fa-browser\x20text-lgreen\x22\x20data-toggle=\x22tooltip\x22\x20data-placement=\x22left\x22\x20\x20\x20\x20\x20title=\x22Task\x20includes\x20website\x22></i>');}const _0x334a3e='<div\x20class=\x22card\x22\x20id=\x22task-'+_0x33d67b['taskNo']+'\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20task-header\x22\x20data-toggle=\x22collapse\x22\x20href=\x22#collapse'+_0x33d67b['taskNo']+'\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20class=\x22card-link\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22task-dropdown-title\x20'+_0x1f0871['text']+'\x22>Task\x20'+_0x33d67b['taskNo']+'\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x27task-dropdown-icon\x27>'+_0x1f0871['icon']+'</span></span>\x20'+_0x33d67b['taskTitle']+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><i\x20class=\x22fas\x20fa-chevron-down\x22></i></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22task-resources\x22>'+_0x5192ce+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22collapse'+_0x33d67b['taskNo']+'\x22\x20class=\x22collapse\x20'+_0x4ef792+'\x22\x20data-parent=\x22#taskContent\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20'+_0x1f0871['border']+'\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x1abea3+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x13967b+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>';return _0x334a3e;}function setTaskColor(_0x5efa94,_0x2442b8){const _0x14e304=document['querySelector']('#task-'+_0x5efa94+'\x20.card-body'),_0x30c8ec=document['querySelector']('#task-'+_0x5efa94+'\x20.task-dropdown-title'),_0x4880c1=document['querySelector']('#task-'+_0x5efa94+'\x20.task-dropdown-icon'),_0x474af1=_0x14e304['querySelector']('.room-questions-split');_0x14e304['classList']['remove'](colorAnswers['correct']['border']),_0x14e304['classList']['remove'](colorAnswers['incorrect']['border']),_0x30c8ec['classList']['remove'](colorAnswers['correct']['text']),_0x30c8ec['classList']['remove'](colorAnswers['incorrect']['text']),_0x474af1['classList']['remove'](colorAnswers['correct']['text']),_0x474af1['classList']['remove'](colorAnswers['incorrect']['text']),_0x4880c1['innerHTML']='',_0x2442b8?(_0x14e304['className']+='\x20'+colorAnswers['correct']['border'],_0x30c8ec['className']+='\x20'+colorAnswers['correct']['text'],_0x4880c1['innerHTML']=colorAnswers['correct']['icon'],_0x474af1['className']+='\x20'+colorAnswers['correct']['text']):(_0x14e304['className']+='\x20'+colorAnswers['incorrect']['border'],_0x30c8ec['className']+='\x20'+colorAnswers['incorrect']['text'],_0x4880c1['innerHTML']=colorAnswers['incorrect']['icon'],_0x474af1['className']+='\x20'+colorAnswers['incorrect']['text']);}function showTasksForUser(_0x4422bf,_0x4d50d6){let _0x2ddffa='';for(const _0x9aaf7b of _0x4422bf['tasksInfo']){let _0x351e49='<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-outline-success\x20task-answer\x22\x20onclick=\x22answerQuestion(this)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22far\x20fa-paper-plane\x22></i>\x20Submit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>',_0x22a8b0='';_0x9aaf7b['noAnswer']&&(_0x351e49='<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-outline-success\x20task-answer\x22\x20onclick=\x22answerQuestion(this)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22far\x20fa-paper-plane\x22></i>\x20Completed\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>',_0x22a8b0='disabled');if(_0x9aaf7b['correct']&&!_0x9aaf7b['noAnswer'])_0x351e49='<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-success\x20task-answer\x22\x20disabled>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Correct\x20Answer\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>',_0x22a8b0='disabled';else _0x9aaf7b['correct']?(_0x351e49='<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-success\x20task-answer\x22\x20disabled>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Question\x20Done\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>',_0x22a8b0='disabled'):_0x4d50d6=![];let _0x4d127b='';typeof _0x9aaf7b['submission']!=='undefined'&&(_0x4d127b=sanitiseHTML(_0x9aaf7b['submission']));let _0x4f620b='';if(_0x9aaf7b['extraPoints']>0x0){const _0x6c1af7='Extra\x20points\x20upon\x20answering';_0x4f620b='<span\x20class=\x22badge\x20badge-hacker-green\x20extra-points\x20mr-2\x22\x20data-toggle=\x27tooltip\x27\x20\x20\x20\x20\x20\x20\x20data-html=\x27true\x27\x20title=\x27'+_0x6c1af7+'\x27>+\x20'+_0x9aaf7b['extraPoints']+'</span>';}let _0x3bd59d='';_0x9aaf7b['hint']['length']!=0x0&&(_0x3bd59d='<div\x20class=\x27room-task-input-hint\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+getHintHtml(_0x9aaf7b['correct'])+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>'),_0x2ddffa+='<div\x20class=\x27room-task-questions\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x27room-task-question-no\x20vertical-align-custom\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x4f620b+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x27room-task-question-details\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x9aaf7b['question']+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x27room-task-input\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x27room-task-input-questions\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20class=\x22form-control\x20room-answer-field\x22\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20placeholder=\x22'+_0x9aaf7b['answerDesc']+'\x22\x20value=\x22'+_0x4d127b+'\x22\x20'+_0x22a8b0+'>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22hidden\x22\x20value=\x27'+_0x9aaf7b['questionNo']+'\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22hidden\x22\x20value=\x27'+_0x4422bf['taskNo']+'\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x27room-task-input-answer\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x351e49+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x3bd59d+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>';}return{'html':_0x2ddffa,'allCorrect':_0x4d50d6};}function setupMagnificPopup(){$('#taskContent\x20:not(a)\x20>\x20img')['magnificPopup']({'type':'image','callbacks':{'elementParse':function(_0x490375){_0x490375['src']=_0x490375['el']['attr']('src');}}});}function showTasksForViewers(_0xa03b64,_0xe924a){let _0x160847='';return _0xa03b64['forEach'](function(_0x544533,_0x24e046){let _0x28576f='Login\x20to\x20answer..';errorCode===0x3&&(_0x28576f='Join\x20this\x20room');const _0x32c55a='<button\x20type=\x22button\x22\x20onclick=\x22quickJoin()\x22class=\x22btn\x20btn-outline-primary\x20task-answer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x28576f+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>',_0xf165bd='disabled',_0x1c86cc='';let _0x2f7615='';_0x544533['hint']['length']!=0x0&&(_0x2f7615='<div\x20class=\x27room-task-input-hint\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+getHintHtml(_0x544533['correct'])+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>'),_0x160847+='<div\x20class=\x27room-task-questions\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x27room-task-question-details\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x544533['question']+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x27room-task-input\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x27room-task-input-questions\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20class=\x22form-control\x22\x20placeholder=\x22'+_0x28576f+'\x22\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20value=\x22'+_0x1c86cc+'\x22\x20'+_0xf165bd+'>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22hidden\x22\x20value=\x27'+(_0x24e046+0x1)+'\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22hidden\x22\x20value=\x27'+_0xe924a+'\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x27room-task-input-answer\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x32c55a+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x2f7615+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>';}),_0x160847;}function getHintHtml(_0x323eae){let _0x3461eb='',_0x42941d='btn-outline-dorange';return _0x323eae&&(_0x42941d='btn-dorange\x20faded'),_0x3461eb='<button\x20type=\x22button\x22\x20class=\x22btn\x20'+_0x42941d+'\x20btn-noline\x20task-hint\x22\x20onclick=\x22getHint(this)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fal\x20fa-lightbulb\x22></i>\x20Hint\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>',_0x3461eb;}