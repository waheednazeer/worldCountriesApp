function t(){const e=`
    <div class="flag-card">
    <img class="flag">
    <p class="country"></p>
    <p class= "input-btn">
    <label for="search">Enter Country Name: 
    <input id="search" type="Text" placeholder="us | usa | united states" pattern="[aA-zZ ]{2,}"></label>
    <button id="btn">Get Data</button>
    </p>
    <hr class="hr-line">
    </div>`;document.querySelector(".main-cards").innerHTML=e}function n(){const e=`
    <section class="country-card"></section>
    <section class="int-card"></section>
    <section class="wb-card"></section>    
    `;document.querySelector(".cards").innerHTML=e}function i(e){const l=`
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
`;document.querySelector(".country-card").innerHTML=l}function s(e){const l=`
    <h3>Country Interntaional Data</h3>
        <p>Telephone Dialing Code: ${e[0]}</p>
        <p>
        
        Region: ${e[1]} </br>
        Sub-Region: ${e[2]}
        </p>
        Neighbours:
        <div class="ulist">
        
        </div>
    `;document.querySelector(".int-card").innerHTML=l}function a(){const e=`
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
        `;document.querySelector(".ulist").innerHTML=e}function o(e){const l=`
        <h3>Country World Bank Data</h3>
        <p>GDP: ${e[0]}$ Billion <br>
        Education Expense % of GDP: ${e[2]}% <br>
        Inflation: ${e[1]}% </p>
        <p>Population Growth: ${e[3]}% </p>
        <p>
        Electricity Availability: ${e[4]}% <br>
        Forest Area: ${e[5]}% 
        </p>
        `;document.querySelector(".wb-card").innerHTML=l}class c{constructor(){this.helpline=`
            <h4>How to Enter Country Name<h4>
            <ul>
            <li>Please enter two or three letters iso2 or iso3 country code,or full name.</li>
            <li>Name can be any format, upper, lower or title case</li>
            </ul>
            <h4>How to Fill Feedback Form<h4>
            <ul>
            <li>Full Name must be in Title Case. Must have space between First name and Last name.</li>
            <li>No digit is allowed in name</li>
            <li>Email id must be in email format. no space allowed in email id on left side of @ sign.</li>
            </ul>     
            `}renderHelpTemplate(){document.querySelector(".help-detail").innerHTML=this.helpline}}export{c as H,i as a,n as c,s as i,a as l,t as m,o as w};
