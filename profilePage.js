const a0_0x2a8961=a0_0x5d7c;(function(_0x1b6838,_0x230a6b){const _0x30c2cd=a0_0x5d7c,_0x1c4910=_0x1b6838();while(!![]){try{const _0x29093a=-parseInt(_0x30c2cd(0x7f))/0x1*(parseInt(_0x30c2cd(0x73))/0x2)+parseInt(_0x30c2cd(0x88))/0x3*(parseInt(_0x30c2cd(0x75))/0x4)+parseInt(_0x30c2cd(0x70))/0x5*(-parseInt(_0x30c2cd(0x84))/0x6)+-parseInt(_0x30c2cd(0x87))/0x7*(parseInt(_0x30c2cd(0x78))/0x8)+parseInt(_0x30c2cd(0x7c))/0x9+parseInt(_0x30c2cd(0x68))/0xa*(-parseInt(_0x30c2cd(0x6d))/0xb)+parseInt(_0x30c2cd(0x7e))/0xc*(parseInt(_0x30c2cd(0x69))/0xd);if(_0x29093a===_0x230a6b)break;else _0x1c4910['push'](_0x1c4910['shift']());}catch(_0x338588){_0x1c4910['push'](_0x1c4910['shift']());}}}(a0_0x18aa,0x92f70));import{initializeApp}from'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';import{getAuth,onAuthStateChanged,signOut}from'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';import{getFirestore,getDoc,doc}from'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';import{firebaseConfig}from'./config.js';function a0_0x5d7c(_0x4a3d9c,_0x51c5da){const _0x18aa03=a0_0x18aa();return a0_0x5d7c=function(_0x5d7c0e,_0x488bfb){_0x5d7c0e=_0x5d7c0e-0x68;let _0x242005=_0x18aa03[_0x5d7c0e];return _0x242005;},a0_0x5d7c(_0x4a3d9c,_0x51c5da);}function a0_0x18aa(){const _0x2e50d6=['JpGbn','removeItem','YxQSA','href','KKNsI','oNhdU','log','saFZi','loggedUserFName','30wxqCPW','9010820Tdvfrv','exists','addEventListener','lastName','985589gAvYGc','User\x20Id\x20not\x20Found\x20in\x20Local\x20storage','loggedInUserId','8915niHsIT','uPrCc','data','2faipCe','SJYLk','20ribDTq','getItem','users','88dCUKUo','loggedUserEmail','Error\x20getting\x20document','innerText','6803802kOgSaG','then','12QaMEGa','761003yVEDbY','emailVerified','getElementById','tHdXR','email','372RCaHkn','nxQLw','RKoyj','317093MVZbQp','474891IBUGsB'];a0_0x18aa=function(){return _0x2e50d6;};return a0_0x18aa();}const app=initializeApp(firebaseConfig),auth=getAuth(),db=getFirestore();onAuthStateChanged(auth,_0x52ef0e=>{const _0x5a6f58=a0_0x5d7c,_0x369267={'KKNsI':_0x5a6f58(0x79),'KAHnw':'loggedUserLName','SJYLk':'no\x20document\x20found\x20matching\x20id','yYczM':_0x5a6f58(0x7a),'tHdXR':_0x5a6f58(0x6f),'oNhdU':function(_0x218110,_0x2455d8,_0x318f14,_0x48d1fc){return _0x218110(_0x2455d8,_0x318f14,_0x48d1fc);},'saFZi':_0x5a6f58(0x77),'RKoyj':function(_0x29e4d3,_0x3d502e){return _0x29e4d3(_0x3d502e);},'uPrCc':_0x5a6f58(0x80)},_0x29aca0=localStorage[_0x5a6f58(0x76)](_0x369267[_0x5a6f58(0x82)]);if(_0x29aca0){console[_0x5a6f58(0x8f)](_0x52ef0e);const _0x5906c8=_0x369267[_0x5a6f58(0x8e)](doc,db,_0x369267[_0x5a6f58(0x90)],_0x29aca0);_0x369267[_0x5a6f58(0x86)](getDoc,_0x5906c8)['then'](_0xbf03c2=>{const _0x4bf770=_0x5a6f58;if(_0xbf03c2[_0x4bf770(0x6a)]()){const _0x169201=_0xbf03c2[_0x4bf770(0x72)]();document[_0x4bf770(0x81)](_0x4bf770(0x91))[_0x4bf770(0x7b)]=_0x169201['firstName'],document[_0x4bf770(0x81)](_0x369267[_0x4bf770(0x8d)])[_0x4bf770(0x7b)]=_0x169201[_0x4bf770(0x83)],document[_0x4bf770(0x81)](_0x369267['KAHnw'])[_0x4bf770(0x7b)]=_0x169201[_0x4bf770(0x6c)];}else console[_0x4bf770(0x8f)](_0x369267[_0x4bf770(0x74)]);})['catch'](_0x3ad60a=>{console['log'](_0x369267['yYczM']);});}else console[_0x5a6f58(0x8f)](_0x5a6f58(0x6e));const _0xef390e=_0x52ef0e['emailVerified'];document[_0x5a6f58(0x81)](_0x369267[_0x5a6f58(0x71)])[_0x5a6f58(0x7b)]=_0xef390e;});const logoutButton=document[a0_0x2a8961(0x81)]('logout');logoutButton[a0_0x2a8961(0x6b)]('click',()=>{const _0x27fb8a=a0_0x2a8961,_0x415ec6={'YxQSA':'index.html','JpGbn':'loggedInUserId','nxQLw':function(_0x288d50,_0x38ec68){return _0x288d50(_0x38ec68);}};localStorage[_0x27fb8a(0x8a)](_0x415ec6[_0x27fb8a(0x89)]),_0x415ec6[_0x27fb8a(0x85)](signOut,auth)[_0x27fb8a(0x7d)](()=>{const _0x33993d=_0x27fb8a;window['location'][_0x33993d(0x8c)]=_0x415ec6[_0x33993d(0x8b)];})['catch'](_0x1751bd=>{console['error']('Error\x20Signing\x20out:',_0x1751bd);});});