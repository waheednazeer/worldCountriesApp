(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function c(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=c(t);fetch(t.href,a)}})();function y(){const e=`
    <div class="flag-card">
    <img class="flag">
    <p class="country"></p>
    <p class= "input-btn">
    <label for="search">Enter Country Name: 
    <input id="search" type="Text" placeholder="us | usa | united states" pattern="[aA-zZ ]{2,}"></label>
    <button id="btn">Get Data</button>
    </p>
    <hr class="hr-line">
    </div>`;document.querySelector(".main-cards").innerHTML=e}function h(){const e=`
    <section class="country-card"></section>
    <section class="int-card"></section>
    <section class="wb-card"></section>    
    `;document.querySelector(".cards").innerHTML=e}function g(e){const l=`
<h3>Country Demographic Data</h3>
    <p>
    Official Name: ${e[0]} <br>
    Alpha-2 Code: ${e[2]} </br>
    Alpha-3 Code: ${e[3]}
    </p>
    <p>Capital: ${e[1]}</p>
    <p>
    Area: ${e[4]} <br>
    Population: ${e[5]} 
    </p>
    <p>
    Languages: ${e[6]}
    </p>
`;document.querySelector(".country-card").innerHTML=l}function C(e){const l=`
    <h3>Country Interntaional Data</h3>
        <p>Telephone Dialing Code: ${e[0]}</p>
        <p>
        
        Region: ${e[1]} </br>
        Sub-Region: ${e[2]}
        </p>
        Neighbours:
        <div class="ulist">
        
        </div>
    `;document.querySelector(".int-card").innerHTML=l}function T(){const e=`
        <section class="list-1">
        <ul class="ul-1"></ul>
        </section>
        <section class="list-2">
        <ul class="ul-2"></ul>
        </section>
        <section class="list-3">
        <ul class="ul-3"></ul>
        </section>
        <section class="list-4">
        <ul class="ul-4"></ul>
        </section>
        <section class="list-5">
        <ul class="ul-5"></ul>
        </section>
        `;document.querySelector(".ulist").innerHTML=e}function A(e){const l=`
        <h3>Country World Bank Data</h3>
        <p>GDP: ${e[0]}$ Billion <br>
        Education Expense % of GDP: ${e[2]}% <br>
        Inflation: ${e[1]}% </p>
        <p>Population Growth: ${e[3]}% </p>
        <p>
        Electricity Availability: ${e[4]}% <br>
        Forest Area: ${e[5]}% 
        </p>
        `;document.querySelector(".wb-card").innerHTML=l}async function L(e,l){try{const o=await(await fetch(e)).json();m(l,o)}catch(c){console.error(c)}}async function S(e,l){try{const o=await(await fetch(e)).json();m(l,o)}catch(c){console.error(c)}}function m(e,l){let c=JSON.stringify(l);localStorage.setItem(e,c)}function f(e){let l=localStorage.getItem(e);return JSON.parse(l)}function E(e){let l;for(let c=0;c<e.length;c++)if(c==0)l=e[c].toUpperCase();else if(e[c]==" "){let o=c+1;l=l+" "+e[o].toUpperCase(),c++}else l=l+e[c].toLowerCase();return l}function v(e,l,c){let o=l,t,a,i,d,r,p=!0;if(e.forEach(n=>{(n.name.common==o||n.cca2==o||n.cca3==o)&&(o=n.name.common,t=n.flag,d=n.cca2,r=n.cca3,a=[n.name.official,n.capital,n.cca2,n.cca3,n.area,n.population,Object.values(n.languages)],i=[n.callingCodes[0],n.region,n.subregion,n.borders],p=!1)}),p){alert("Please check your country name!");return}document.querySelector(".flag").setAttribute("src",t),h(),g(a),C(i),T(),$(e,d),A(N(c,d,r))}function $(e,l){let c=document.querySelector(".ul-1"),o=document.querySelector(".ul-2"),t=document.querySelector(".ul-3"),a=document.querySelector(".ul-4"),i=document.querySelector(".ul-5");e.forEach(d=>{if(d.cca2==l){let r=0;d.borders.forEach(p=>{e.forEach(s=>{if(s.cca3==p){if(r<3){let n=document.createElement("li");n.appendChild(document.createTextNode(s.name.common)),c.appendChild(n),r++}else if(r>=3&&r<6){let n=document.createElement("li");n.appendChild(document.createTextNode(s.name.common)),o.appendChild(n),r++}else if(r>=6&&r<9){let n=document.createElement("li");n.appendChild(document.createTextNode(s.name.common)),t.appendChild(n),r++}else if(r>=9&&r<12){let n=document.createElement("li");n.appendChild(document.createTextNode(s.name.common)),a.appendChild(n),r++}else if(r>=12&&r<15){let n=document.createElement("li");n.appendChild(document.createTextNode(s.name.common)),i.appendChild(n),r++}}})})}})}function N(e,l,c){let o=[];return e.forEach(t=>{(t.country.id==l||t.country.countryiso3code==c)&&(t.value==null?(t.value="--",o[0]=t.value):o[0]=(t.value/1e9).toFixed(2),t.inflation==null?(t.inflation="--",o[1]=t.inflation):o[1]=t.inflation.toFixed(2),t.education==null?(t.education="--",o[2]=t.education):o[2]=t.education.toFixed(2),t.population_growth==null?(t.population_growth="--",o[3]=t.population_growth):o[3]=t.population_growth.toFixed(2),t.electricity==null?(t.electricity="--",o[4]=t.electricity):o[4]=t.electricity.toFixed(2),t.forest_area==null?(t.forest_area="--",o[5]=t.forest_area):o[5]=t.forest_area.toFixed(2))}),o}let u;function q(){let e=document.getElementById("search").value,l=document.getElementById("search");if(!l.checkValidity()){alert(l.validationMessage);return}u=E(e),console.log(u),u.length<4&&(u=u.toUpperCase()),localStorage.setItem("countryKey",u);let c=f("wbKey"),o=f("apiKey");v(o,u,c)}function F(){alert(`Please follow below rules,
1: Country Name can be two letters,
2: Three letters or full name including space if any.
3: Capital/ Small/ Title case allowed`)}let x="../src/json/wbApi.json",M="../src/json/countryfactsApi.json";y();document.querySelector("#btn").addEventListener("click",q);document.querySelector(".help").addEventListener("click",F);let j=f("wbKey");j==null&&(console.log("First Api Fetch!!!"),L(x,"wbKey"));let P=f("apiKey");P==null&&(console.log("First Api Fetch!!!"),S(M,"apiKey"));var b=new Date().getFullYear();document.getElementById("currentyear").innerHTML=b;var I=document.lastModified;document.getElementById("lastmodified").innerHTML=I;
