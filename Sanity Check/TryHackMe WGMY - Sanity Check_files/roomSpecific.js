let currentDeployedIP='',connectionIP='';function checkRoomOnDeploy(_0x5ef57b,_0x5c3fd1){if(connectionIP['length']>0x0)replaceText(document['body'],'CONNECTION_IP',connectionIP);_0x5ef57b['internalIP']!=null&&(currentDeployedIP=_0x5ef57b['internalIP'],replaceText(document['body'],'MACHINE_IP',''+_0x5ef57b['internalIP']),replaceText(document['body'],'LAB_WEB_URL',formatIPForProxy(_0x5ef57b['internalIP']))),_0x5ef57b['remote']['active']&&(_0x5c3fd1['refreshWebBasedTab']&&(addWebBasedMachine(_0x5ef57b),userObj['splitScreen']==!![]?initWebBasedMachine(_0x5ef57b):showSplitScreenBtn('show')));}function updateMachineTag(_0x1d8b83,_0xfa1adc){if(_0x1d8b83=='clear')currentDeployedIP['length']>0x0&&(replaceText(document['body'],formatIPForProxy(currentDeployedIP),'LAB_WEB_URL'),replaceText(document['body'],currentDeployedIP,'MACHINE_IP')),currentDeployedIP='';else{if(_0x1d8b83=='update'){currentDeployedIP['length']>0x0&&(_0xfa1adc=_0xfa1adc['replace'](/MACHINE_IP/g,currentDeployedIP),_0xfa1adc=_0xfa1adc['replace'](/LAB_WEB_URL/g,formatIPForProxy(currentDeployedIP)));if(connectionIP['length']>0x0)_0xfa1adc=_0xfa1adc['replace'](/CONNECTION_IP/g,connectionIP);return _0xfa1adc;}}}function formatIPForProxy(_0x23c028){return _0x23c028&&(_0x23c028=_0x23c028['replaceAll']('.','-')),_0x23c028;}