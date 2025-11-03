// 🟦 국가 목록
const countries = [
  "US", "Japan", "Colombia", "Thailand", "Spain", "Russia", "Vietnam",
  "Brazil", "Indonesia", "SaudiArabia", "Malaysia", "Taiwan", "Philippines", 
  "Kazakhstan", "Pakistan", "Mongolia", "Myanmar", "Nepal", "HongKong",
  "India", "China", "Singapore", "Lebanon", "UAE", "Palestine", "Bahrain",
  "Turkey", "Iraq", "Jordan", "Kuwait", "Israel", "Oman", "PuertoRico",
  "Canada", "Mexico", "Chile", "Peru", "Ecuador", "Argentina",
  "Paraguay", "Dominica", "Nicaragua", "Uruguay",
  "Bolivia","CostaRica","El Salvador","Venezuela","France","Czech",
  "Romania","Austria","Portugal","Hungary","Ukraine","Greece","Moldova",
  "Poland", "UK","Netherlands","Italy","Belgium","Cyprus","Georgia",
  "Switzerland", "Slovakia","Bosnia","Australia","SouthAfrica","Morocco",
  "Nigeria", "Tunisia", "Algeria","Libya","Kenya","Egypt"

];

const blinkingCountries = [
  "US", "Japan", "Colombia", "Thailand", "Spain", "Russia", "Vietnam",
  "Brazil", "Indonesia", "SaudiArabia"
];

// 🟦 버튼을 생성할 위치
const grid = document.getElementById("flagGrid");

// 🟦 각 국가 버튼 생성
countries.forEach(country => {
  const button = document.createElement("button");
  button.className = "flag-button";

  const img = document.createElement("img");
  img.src = `images/${country}.png`; // 🟦 이미지 경로
  img.alt = country;

  if (blinkingCountries.includes(country)) {
    img.classList.add("blink");
  }
  
  const label = document.createElement("span");
  label.textContent = country;

  button.appendChild(img);
  button.appendChild(label);

  button.onclick = () => {
    window.location.href = `detail.html?country=${encodeURIComponent(country)}`;
  };

  grid.appendChild(button);
});
