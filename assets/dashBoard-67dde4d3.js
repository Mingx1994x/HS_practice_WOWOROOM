import"./main-b8c900b3.js";import{a as m}from"./axios-1779699b.js";const v="https://livejs-api.hexschool.io/",P="yameow999",h=`${v}api/livejs/v1/admin/${P}`,j="vruPjVITW7PaX7ruCuJr2t744jk2",C={headers:{authorization:j}};function k(){q()}let n=new Array;const q=async()=>{try{const e=await m.get(`${h}/orders`,C);console.log(e.data),n=e.data.orders,g(n),p(n,y)}catch(e){console.log(e)}},F=async()=>{try{n=(await m.delete(`${h}/orders`,C)).data.orders,g(n),p(n,y)}catch(e){console.log(e.message)}},z=async e=>{try{n=(await m.delete(`${h}/orders/${e}`,C)).data.orders,g(n),p(n,y)}catch(t){console.log(t)}},H=async e=>{let r=n.filter(o=>o.id===e)[0].paid,d={data:{id:e,paid:!r}};try{n=(await m.put(`${h}/orders`,d,C)).data.orders,g(n)}catch(o){console.log(o)}},I=e=>new Date(e*1e3).toLocaleDateString(),N=e=>{let t=new Object;return e.forEach(r=>{r.products.forEach(o=>{const{category:a,price:c,quantity:l}=o;t[a]?t[a]+=c*l:t[a]=c*l})}),Object.entries(t)},y=e=>{let t=new Object;return e.forEach(r=>{r.products.forEach(o=>{const{title:a,price:c,quantity:l}=o;t[a]?t[a]+=c*l:t[a]=c*l})}),R(Object.entries(t))},R=e=>{let t=new Array,r=0;return e.sort((d,o)=>o[1]-d[1]),console.log(e),e.forEach((d,o)=>{o<=2?t.push(d):r+=d[1]}),t.push(["其他",r]),t},J=document.querySelector(".orderPage-table"),f=J.querySelector("tbody"),g=e=>{f.innerHTML="",e.forEach(t=>{let{id:r,user:d,products:o,createdAt:a,paid:c}=t;M(r,d,o,a,c)})},M=(e,t,r,d,o)=>{let a=document.createElement("tr");a.dataset.id=`${e}`;let c=document.createElement("td");c.textContent=`${e}`;let l=document.createElement("td"),D=document.createElement("p");D.textContent=`${t.name}`;let $=document.createElement("p");$.textContent=`${t.tel}`,l.appendChild(D),l.appendChild($);let T=document.createElement("td");T.textContent=`${t.address}`;let x=document.createElement("td");x.textContent=`${t.email}`;let A=document.createElement("td");r.forEach((O,L)=>{let w=document.createElement("p");w.textContent=`${L+1}. ${O.title}x${O.quantity}`,A.appendChild(w)});let b=document.createElement("td"),B=I(d);b.textContent=`${B}`;let E=document.createElement("td");E.classList.add("orderStatus");let s=document.createElement("a");s.classList.add("orderStatusBtn"),s.href="#",o?(s.textContent="已處理",s.style.color="green"):(s.textContent="未處理",s.style.color="red"),E.appendChild(s);let S=document.createElement("td"),u=document.createElement("input");u.type="button",u.classList.add("delSingleOrder-Btn"),u.value="刪除",S.appendChild(u),a.appendChild(c),a.appendChild(l),a.appendChild(T),a.appendChild(x),a.appendChild(A),a.appendChild(b),a.appendChild(E),a.appendChild(S),f.appendChild(a)},p=(e,t)=>{let r=t(e);c3.generate({bindto:"#chart",color:{pattern:["#DACBFF","#9D7FEA","#5434A7","#301E5F","#C3A5FF","#8465D6","#482B91","#271A4F"]},data:{type:"pie",columns:r}})},V=document.querySelector(".discardAllBtn");V.addEventListener("click",e=>{e.preventDefault(),F()});f.addEventListener("click",e=>{e.preventDefault();let t=e.target,r=t.closest("tr");t.classList.contains("delSingleOrder-Btn")&&z(r.dataset.id),t.classList.contains("orderStatusBtn")&&H(r.dataset.id)});const W=document.querySelector("#chartToggleBtn"),i=document.querySelector(".section-title h2");W.addEventListener("click",()=>{let e=["products","category"],t=["全品項營收比重","全產品類別營收比重"],r=i.dataset.chart;r===e[0]?(i.dataset.chart=e[1],i.textContent=t[1],p(n,N)):r===e[1]&&(i.dataset.chart=e[0],i.textContent=t[0],p(n,y))});k();
