function cloudinary(e,t,o,a,c){const n=localStorage.getItem("iset1"),l=localStorage.getItem("iset2"),s=localStorage.getItem("iset3");str=e;const d="data:text/plain;base64,"+btoa(encodeURIComponent(str)),u=new FormData;u.append("file",d),u.append("upload_preset",s);return fetch(`https://api.cloudinary.com/v1_1/${n}/raw/upload`,{method:"POST",body:u,folder:l,disallow_public_id:!0,unique_filename:!1,filename_override:!0,use_filename:!0,tags:"cyqur"+t,public_id:t,format:"text/plain"}).then((e=>{if(e.status>=200&&e.status<=299)return e.json();console.log("cloudinary error")})).then((e=>{const n=e.secure_url,l=a(n),s={packetId:`CR${o}${t}`,f1:"",f2:"",f3:"",f4:"",f5:"",f6:"",f7:"",f8:"",f9:"",f10:"",hash:"",puk:t,tags:c,text:"",cloud1:"c1",cloud2:"no",cloud3:"no",timestap:0,type:`CR${o}`,...l};addToDatabase(s,"packet","packet",READWRITE),document.getElementById("messc").innerHTML='<div class="ww fs80">...'+o+" "+n+"</div>",localStorage.setItem("cloudStatus:"+t,"Clouded")})).catch((()=>{document.getElementById("messc").innerHTML="Packets not clouded. Check settings. Is the internet connected?",localStorage.setItem("cloudStatus:"+t,"Not clouded")}))}
