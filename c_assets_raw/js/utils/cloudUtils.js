const isCloudConfigSet=()=>!!localStorage.getItem("iset1");function runCloud1(e,t,a,n,f,c,m,r,d,o,g,l,s,u,p,h,i,y){const C=e=>new Promise((t=>setTimeout(t,e)));for(let g=0,u=Promise.resolve();g<1;g++)u=u.then((()=>C(1e3*Math.random()))).then((()=>cloudinary(e,l,"01",(e=>({f1:e})),s))).then((()=>C(1e3*Math.random()))).then((()=>cloudinary(t,l,"02",(e=>({f2:e})),s))).then((()=>cloudinary(a,l,"03",(e=>({f3:e})),s))).then((()=>cloudinary(n,l,"04",(e=>({f4:e})),s))).then((()=>cloudinary(f,l,"05",(e=>({f5:e})),s))).then((()=>cloudinary(c,l,"06",(e=>({f6:e})),s))).then((()=>cloudinary(m,l,"07",(e=>({f7:e})),s))).then((()=>C(1e3*Math.random()))).then((()=>cloudinary(r,l,"08",(e=>({f8:e})),s))).then((()=>cloudinary(d,l,"09",(e=>({f9:e})),s))).then((()=>cloudinary(o,l,"10",(e=>({f10:e})),s))).then((()=>{})).then((()=>{var e=document.getElementById("thedpwd");const t=ppp=null!=e&&""!=e.value?window.document.getElementById("thedpwd").value:window.document.getElementById("thepwd").value;localStorage.iset1&&w(l,t)}));async function w(e,t){var a=[];await getAllbyKeys([`CR01${e}`,`CR02${e}`,`CR03${e}`,`CR04${e}`,`CR05${e}`,`CR06${e}`,`CR07${e}`,`CR08${e}`,`CR09${e}`,`CR10${e}`],"packet","packet","readwrite").then((e=>{a=e}));const[n,f,c,m,r,d,o,g,l,u]=a;fragment1=n.f1,fragment2=f.f2,fragment3=c.f3,fragment4=m.f4,fragment5=r.f5,fragment6=d.f6,fragment7=o.f7,fragment8=g.f8,fragment9=l.f9,fragment10=u.f10,s=document.getElementById("tags").value,"",document.getElementById("timmystamp").value,p="CY","";const h={packetId:`CR00${e}`,f1:fragment1,f2:fragment2,f3:fragment3,f4:fragment4,f5:fragment5,f6:fragment6,f7:fragment7,f8:fragment8,f9:fragment9,f10:fragment10,hash:"",puk:e,tags:s,text:"",cloud1:p,cloud2:"no",cloud3:"no",timestap:0,type:"CR00"},i={packetId:`CR0A${e}`,f1:fragment1,f2:fragment2,f3:fragment3,f4:"",f5:"",f6:"",f7:fragment7,f8:fragment8,f9:fragment9,f10:fragment10,hash:"",puk:e,tags:s,text:"",cloud1:p,cloud2:"no",cloud3:"no",timestap:0,type:"CR0A"},y={packetId:`CR0B${e}`,f1:"",f2:"",f3:"",f4:fragment4,f5:fragment5,f6:fragment6,f7:fragment7,f8:fragment8,f9:fragment9,f10:fragment10,hash:"",puk:e,tags:s,text:"",cloud1:p,cloud2:"no",cloud3:"no",timestap:0,type:"CR0B"},C={packetId:`CR0C${e}`,f1:fragment1,f2:fragment2,f3:fragment3,f4:fragment4,f5:fragment5,f6:fragment6,f7:fragment7,f8:fragment8,f9:"",f10:"",hash:"",puk:e,tags:s,text:"",cloud1:p,cloud2:"no",cloud3:"no",timestap:0,type:"CR0C"};addToDatabase(h,"packet","packet","readwrite"),addToDatabase(i,"packet","packet","readwrite"),addToDatabase(y,"packet","packet","readwrite"),addToDatabase(C,"packet","packet","readwrite");document.getElementById("messc").innerHTML='<svg width="25px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 501.982 501.982" xmlns:v="https://vecta.io/nano"><path d="M416.688 312.979v141.356H10V47.647h406.688z" fill="#c7ebff"/><path d="M209.288 377.863c-7.414 0-14.826-2.828-20.482-8.484L90.32 270.894c-11.312-11.312-11.312-29.653 0-40.965s29.652-11.312 40.965 0l78.003 78.003L442.552 74.669c11.313-11.312 29.652-11.312 40.965 0s11.312 29.653 0 40.965L229.771 369.38a28.88 28.88 0 0 1-20.483 8.483z" fill="#50a5dc"/><path d="M416.688 302.979c-5.522 0-10 4.477-10 10v131.356H20V57.647h396.688c5.522 0 10-4.477 10-10s-4.478-10-10-10H10c-5.522 0-10 4.477-10 10v406.688c0 5.523 4.478 10 10 10h406.688c5.522 0 10-4.477 10-10V312.979c0-5.523-4.478-10-10-10zm0-72.996c-5.522 0-10 4.477-10 10v26.65c0 5.523 4.478 10 10 10s10-4.477 10-10v-26.65c0-5.523-4.478-10-10-10zm73.899-162.386c-15.193-15.19-39.913-15.19-55.106 0L209.288 293.79l-70.933-70.933c-15.191-15.191-39.913-15.192-55.106 0s-15.192 39.914 0 55.106l98.486 98.486a38.71 38.71 0 0 0 27.553 11.413 38.71 38.71 0 0 0 27.554-11.413l253.746-253.746c15.192-15.191 15.192-39.912-.001-55.106zm-14.142 40.966L222.7 362.308c-3.583 3.582-8.346 5.555-13.412 5.555a18.84 18.84 0 0 1-13.411-5.555l-98.485-98.486c-7.395-7.395-7.395-19.428-.001-26.823 3.698-3.698 8.555-5.546 13.412-5.546a18.91 18.91 0 0 1 13.411 5.545l78.003 78.004c1.876 1.875 4.419 2.929 7.071 2.929s5.195-1.054 7.071-2.929L449.622 81.741c7.396-7.394 19.428-7.395 26.823 0s7.395 19.427 0 26.822z"/></svg><span class="en38">Complete</span>',document.getElementById("crud").hidden=!0,document.getElementById("crudclear").hidden=!1,applyLanguage()}}
