let tokenInputTimer;const onTokenInput=t=>{const e=t.target.value.match(tokenFormatRegex),o=document.getElementById("token-error-indicator");e||""===t.target.value?hide("#token-error-indicator"):(o.innerText="Token is not in valid format",show("#token-error-indicator")),clearTimeout(tokenInputTimer),tokenInputTimer=setTimeout((()=>{localStorage.setItem("token",t.target.value)}),500)},tokenbut=document.getElementById("thetoken");tokenbut.addEventListener("keyup",onTokenInput);const isStoredOnBlockchain=(t,e)=>{localStorage.getItem("connection")?console.log("You're offline."):fetch(`${BACKEND_URL_PREFIX}tasks/${t}`,{method:"GET",headers:{"Content-Type":"application/json",accept:"application/json"}}).then((async t=>{const o=await t.json();if("SUCCESS"===o?.task_status){removeBackendTask(o.task_id);const t=`LR00${e}`,n=await getItem(t,PACKET,PACKET,READWRITE);n.transactionHash=o.task_result,updateItem(t,n,PACKET,PACKET,READWRITE);const a=await getItem(e,CHAIN,CHAIN,READWRITE);a.transactionHash=o.task_result,a.token=document.getElementById("thetoken").value,updateItem(e,a,CHAIN,CHAIN,READWRITE)}})).catch((e=>{removeBackendTask(t),console.log("blockchain error",e)}))},invokeSmartContract=({data:t,token:e,puk:o,callback:n})=>{localStorage.getItem("connection")?(console.log("You're offline."),n()):fetch(`${BACKEND_URL_PREFIX}contract/invoke`,{method:"POST",body:JSON.stringify({data:t,token:e}),headers:{"Content-Type":"application/json",accept:"application/json"}}).then((async t=>{const e=await t.json();t.status>=400?document.getElementById("messc-bc").classList.remove("hiddo"):(n(),document.getElementById("messc-bc").classList.add("hiddo"),setBackendTasks([{taskId:e.task_id,puk:o}]),startObservingTasks())})).catch((t=>{document.getElementById("messc-bc").classList.remove("hiddo"),console.log("response",t)}))};