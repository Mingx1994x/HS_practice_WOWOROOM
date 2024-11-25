import"./main-49110b26.js";import{c as q,l as w,a as m,d as y,e as h,m as g}from"./config-15a6555d.js";function F(){v()}let o=new Array;const v=async()=>{w("訂單資料讀取中...");try{o=(await m.get(`${y}/orders`,h)).data.orders,C(o),u(o,f)}catch(e){g(e.response.data.message||`系統忙線中，
請稍候再試或洽詢客服人員`)}},P=async()=>{let t;try{const e=await m.delete(`${y}/orders`,h);t=e.status,o=e.data.orders,C(o),u(o,f)}catch(e){t=e.status,g(e.response.data.message||`系統忙線中，
請稍候再試或洽詢客服人員`)}return t},j=async t=>{let e;try{const r=await m.delete(`${y}/orders/${t}`,h);e=r.status,o=r.data.orders,C(o),u(o,f)}catch(r){e=r.status,g(r.response.data.message||`系統忙線中，
請稍候再試或洽詢客服人員`)}return e},I=async t=>{let r=o.filter(a=>a.id===t)[0].paid,n={data:{id:t,paid:!r}};w("訂單狀態更改中...");try{o=(await m.put(`${y}/orders`,n,h)).data.orders,C(o)}catch(a){g(a.response.data.message||`系統忙線中，
請稍候再試或洽詢客服人員`)}},N=t=>new Date(t*1e3).toLocaleDateString(),R=t=>{let e=new Object;return t.forEach(r=>{r.products.forEach(s=>{const{category:a,price:l,quantity:d}=s;e[a]?e[a]+=l*d:e[a]=l*d})}),Object.entries(e)},f=t=>{let e=new Object;return t.forEach(r=>{r.products.forEach(s=>{const{title:a,price:l,quantity:d}=s;e[a]?e[a]+=l*d:e[a]=l*d})}),z(Object.entries(e))},z=t=>{let e=new Array,r=0;return t.sort((n,s)=>s[1]-n[1]),t.forEach((n,s)=>{s<=2?e.push(n):r+=n[1]}),e.push(["其他",r]),e},H=document.querySelector(".orderPage-table"),D=H.querySelector("tbody"),C=t=>{const e=document.querySelector(".emptyStatusOrder");t.length===0?e.style.display="block":(e.style.display="none",D.innerHTML="",t.forEach(r=>{let{id:n,user:s,products:a,createdAt:l,paid:d}=r;G(n,s,a,l,d)}))},G=(t,e,r,n,s)=>{let a=document.createElement("tr");a.dataset.id=`${t}`;let l=document.createElement("td");l.textContent=`${t}`;let d=document.createElement("td"),S=document.createElement("p");S.textContent=`${e.name}`;let b=document.createElement("p");b.textContent=`${e.tel}`,d.appendChild(S),d.appendChild(b);let A=document.createElement("td");A.textContent=`${e.address}`;let O=document.createElement("td");O.textContent=`${e.email}`;let $=document.createElement("td");r.forEach((x,M)=>{let B=document.createElement("p");B.textContent=`${M+1}. ${x.title}x${x.quantity}`,$.appendChild(B)});let T=document.createElement("td"),L=N(n);T.textContent=`${L}`;let E=document.createElement("td");E.classList.add("orderStatus");let c=document.createElement("a");c.classList.add("orderStatusBtn"),c.href="#",s?(c.textContent="已處理",c.style.color="green"):(c.textContent="未處理",c.style.color="red"),E.appendChild(c);let k=document.createElement("td"),p=document.createElement("input");p.type="button",p.classList.add("delSingleOrder-Btn"),p.value="刪除",k.appendChild(p),a.appendChild(l),a.appendChild(d),a.appendChild(A),a.appendChild(O),a.appendChild($),a.appendChild(T),a.appendChild(E),a.appendChild(k),D.appendChild(a)},u=(t,e)=>{const r=document.querySelector(".emptyDataMsg"),n=document.querySelector("#chart");if(t.length===0)n.style.display="none",r.style.display="block";else{n.style.display="block",r.style.display="none";let s=e(t);c3.generate({bindto:"#chart",color:{pattern:["#DACBFF","#9D7FEA","#5434A7","#301E5F","#C3A5FF","#8465D6","#482B91","#271A4F"]},data:{type:"pie",columns:s}})}},J=document.querySelector(".discardAllBtn");J.addEventListener("click",t=>{t.preventDefault();const e={ask:"確定清除全部訂單嗎?",result:"訂單已全部清除"};q(e.ask,P,e.result)});D.addEventListener("click",t=>{t.preventDefault();let e=t.target,r=e.closest("tr");const n=r.dataset.id;if(e.classList.contains("delSingleOrder-Btn")){const s={ask:"確定刪除這筆訂單嗎?",result:"訂單已清除"};q(s.ask,()=>j(n),s.result)}e.classList.contains("orderStatusBtn")&&I(r.dataset.id)});const K=document.querySelector("#chartToggleBtn"),i=document.querySelector(".section-title h2");K.addEventListener("click",()=>{let t=["products","category"],e=["全品項營收比重","全產品類別營收比重"],r=i.dataset.chart;r===t[0]?(i.dataset.chart=t[1],i.textContent=e[1],u(o,R)):r===t[1]&&(i.dataset.chart=t[0],i.textContent=e[0],u(o,f))});F();
