
const rankingTitleEl = document.querySelector(".rankingtitle");
const rankingContainerEl = document.querySelector(".rankingcontainer");
const rankingNumbersEl = document.querySelector(".rankingcontainer > .numbers");
const rankingItemsEl = document.querySelector(".rankingcontainer > .items");
const rankingSelectEl = document.querySelector("#ranking");
const rankings = {
  carLiveries: {
    rankingName: "Car Liveries",
    layout: {
      columns: 3,
      aspectRatio: 3/1,
    },
    rankingItems: [
      {
        name: "Alpine",
        imgUrl: "images/carliveries/alpine.avif",
      },
      {
        name: "Aston Martin",
        imgUrl: "images/carliveries/aston-martin.avif",
      },
      {
        name: "Ferrari",
        imgUrl: "images/carliveries/ferrari.avif",
      },
      {
        name: "Haas",
        imgUrl: "images/carliveries/haas.avif",
      },
      {
        name: "Kick Sauber",
        imgUrl: "images/carliveries/kick-sauber.avif",
      },
      {
        name: "McLaren",
        imgUrl: "images/carliveries/mclaren.avif",
      },
      {
        name: "Mercedes",
        imgUrl: "images/carliveries/mercedes.avif",
      },
      {
        name: "Racing Bulls",
        imgUrl: "images/carliveries/racing-bulls.avif",
      },
      {
        name: "Red Bull Racing",
        imgUrl: "images/carliveries/red-bull-racing.avif",
      },
      {
        name: "Williams",
        imgUrl: "images/carliveries/williams.avif",
      },
    ],
  },
  drivers: {
    rankingName: "Drivers",
    layout: {
      columns: 5,
      aspectRatio: 4/3,
    },
    rankingItems: [
      { 
        name: "Albon", 
        imgUrl: "images/drivers/albon.png", 
      },
      { 
        name: "Alonso", 
        imgUrl: "images/drivers/alonso.png", 
      },
      { 
        name: "Antonelli", 
        imgUrl: "images/drivers/antonelli.png", 
      },
      { 
        name: "Bearman", 
        imgUrl: "images/drivers/bearman.png", 
      },
      { 
        name: "Bortoleto", 
        imgUrl: "images/drivers/bortoleto.png", 
      },
      { 
        name: "Doohan", 
        imgUrl: "images/drivers/doohan.png", 
      },
      { 
        name: "Gasly", 
        imgUrl: "images/drivers/gasly.png", 
      },
      { 
        name: "Hadjar", 
        imgUrl: "images/drivers/hadjar.png", 
      },
      { 
        name: "Hamilton", 
        imgUrl: "images/drivers/hamilton.png", 
      },
      { 
        name: "Hulkenberg", 
        imgUrl: "images/drivers/hulkenberg.png", 
      },
      { 
        name: "Lawson", 
        imgUrl: "images/drivers/lawson.png", 
      },
      { 
        name: "Leclerc", 
        imgUrl: "images/drivers/leclerc.png", 
      },
      { 
        name: "Norris", 
        imgUrl: "images/drivers/norris.png", 
      },
      { 
        name: "Ocon", 
        imgUrl: "images/drivers/ocon.png", 
      },
      { 
        name: "Piastri", 
        imgUrl: "images/drivers/piastri.png", 
      },
      { 
        name: "Russell", 
        imgUrl: "images/drivers/russell.png", 
      },
      { 
        name: "Sainz", 
        imgUrl: "images/drivers/sainz.png", 
      },
      { 
        name: "Stroll", 
        imgUrl: "images/drivers/stroll.png", 
      },
      { 
        name: "Tsunoda", 
        imgUrl: "images/drivers/tsunoda.png", 
      },
      { 
        name: "Verstappen", 
        imgUrl: "images/drivers/verstappen.png", 
      },
    ]
  },
  driverHelmets: {
    rankingName: "Driver Helmets",
    layout: {
      columns: 5,
      aspectRatio: 4/2.5,
    },
    rankingItems: [
      { 
        name: "Albon", 
        imgUrl: "images/driverhelmets/albon.avif", 
      },
      { 
        name: "Alonso", 
        imgUrl: "images/driverhelmets/alonso.avif", 
      },
      { 
        name: "Antonelli", 
        imgUrl: "images/driverhelmets/antonelli.avif", 
      },
      { 
        name: "Bearman", 
        imgUrl: "images/driverhelmets/bearman.avif", 
      },
      { 
        name: "Bortoleto", 
        imgUrl: "images/driverhelmets/bortoleto.avif", 
      },
      { 
        name: "Doohan", 
        imgUrl: "images/driverhelmets/doohan.avif", 
      },
      { 
        name: "Gasly", 
        imgUrl: "images/driverhelmets/gasly.avif", 
      },
      { 
        name: "Hadjar", 
        imgUrl: "images/driverhelmets/hadjar.avif", 
      },
      { 
        name: "Hamilton", 
        imgUrl: "images/driverhelmets/hamilton.avif", 
      },
      { 
        name: "Hulkenberg", 
        imgUrl: "images/driverhelmets/hulkenberg.avif", 
      },
      { 
        name: "Lawson", 
        imgUrl: "images/driverhelmets/lawson.avif", 
      },
      { 
        name: "Leclerc", 
        imgUrl: "images/driverhelmets/leclerc.avif", 
      },
      { 
        name: "Norris", 
        imgUrl: "images/driverhelmets/norris.avif", 
      },
      { 
        name: "Ocon", 
        imgUrl: "images/driverhelmets/ocon.avif", 
      },
      { 
        name: "Piastri", 
        imgUrl: "images/driverhelmets/piastri.avif", 
      },
      { 
        name: "Russell", 
        imgUrl: "images/driverhelmets/russell.avif", 
      },
      { 
        name: "Sainz", 
        imgUrl: "images/driverhelmets/sainz.avif", 
      },
      { 
        name: "Stroll", 
        imgUrl: "images/driverhelmets/stroll.avif", 
      },
      { 
        name: "Tsunoda", 
        imgUrl: "images/driverhelmets/tsunoda.avif", 
      },
      { 
        name: "Verstappen", 
        imgUrl: "images/driverhelmets/verstappen.avif", 
      },
    ]
  },
  circuits: {
    rankingName: 'Circuits',
    layout: {
      columns: 5,
      aspectRatio: 5/3,
    },
    rankingItems: [
      {
        name: "Abu Dhabi",
        imgUrl: "images/circuits/abu_dhabi.avif",
      },
      {
        name: "Australia",
        imgUrl: "images/circuits/australia.avif",
      },
      {
        name: "Austria",
        imgUrl: "images/circuits/austria.avif",
      },
      {
        name: "Bahrain",
        imgUrl: "images/circuits/bahrain.avif",
      },
      { 
        name: "Azerbaijan",
        imgUrl: "images/circuits/baku.avif",
      },
      {
        name: "Belgium",
        imgUrl: "images/circuits/belgium.png",
      },
      {
        name: "Brazil",
        imgUrl: "images/circuits/brazil.avif",
      },
      {
        name: "Canada",
        imgUrl: "images/circuits/canada.avif",
      },
      {
        name: "China",
        imgUrl: "images/circuits/china.png",
      },
      {
        name: "Great Britain",
        imgUrl: "images/circuits/great_britain.avif",
      },
      {
        name: "Italy - Imola",
        imgUrl: "images/circuits/italy_imola.avif",
      },
      {
        name: "Hungary",
        imgUrl: "images/circuits/hungary.avif"
      },
      {
        name: "Italy - Monza",
        imgUrl: "images/circuits/italy_monza.avif",
      },
      {
        name: "Japan",
        imgUrl: "images/circuits/japan.avif",
      },
      {
        name: "Mexico",
        imgUrl: "images/circuits/mexico.avif",
      },
      {
        name: "Monaco",
        imgUrl: "images/circuits/monaco.avif",
      },
      {
        name: "Netherlands",
        imgUrl: "images/circuits/netherlands.avif",
      },
      {
        name: "Qatar",
        imgUrl: "images/circuits/qatar.avif",
      },
      {
        name: "Saudi Arabia",
        imgUrl: "images/circuits/saudi_arabia.avif",
      },
      {
        name: "Singapore",
        imgUrl: "images/circuits/singapore.avif",
      },
      {
        name: "Spain",
        imgUrl: "images/circuits/spain.avif",
      },
      {
        name: "USA - Austin",
        imgUrl: "images/circuits/usa_austin.avif",
      },
      {
        name: "USA - Las Vegas",
        imgUrl: "images/circuits/usa_las_vegas.avif",
      },
      {
        name: "USA - Miami",
        imgUrl: "images/circuits/usa_miami.avif"
      }
    ]

  }
}

setSelectedRanking({ fallback: 'drivers' });
resetRanking();

Sortable.create(rankingItemsEl, { 
  animation: 150,
  ghostClass: 'dragging',
});

const captureContainer = document.querySelector('.capturecontainer');
const captureBtns = document.querySelectorAll(".capture-btn");
captureBtns.forEach(btn => btn.addEventListener('click', capture))

function capture({currentTarget}){
  const type = currentTarget.dataset.captureType;
  captureContainer.setAttribute("capture", true);
  html2canvas(captureContainer).then(canvas => {
    const image = canvas.toDataURL('image/png');
    if(type === 'save'){
      const link = document.createElement('a');
      link.href = image;
      link.download = 'ranking_' + rankingSelectEl.value.toLowerCase() + '.png'; 
      link.click();
    } else if (type=== 'copy'){
      const imageBlob = dataURItoBlob(image);
      const clipboardItem = new ClipboardItem({ 'image/png': imageBlob });
      navigator.clipboard.write([clipboardItem])
        .then(() => { alert('Image copied to clipboard!')})
        .catch(err => { onsole.error('Failed to copy image to clipboard', err) });
    }
  })
  captureContainer.setAttribute("capture", false);
}
function dataURItoBlob(dataURI) {
  const byteString = atob(dataURI.split(',')[1]);
  const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

  const arrayBuffer = new ArrayBuffer(byteString.length);
  const uintArray = new Uint8Array(arrayBuffer);

  for (let i = 0; i < byteString.length; i++) {
    uintArray[i] = byteString.charCodeAt(i);
  }

  return new Blob([uintArray], { type: mimeString });
}
function setSelectedRanking({fallback}){

  Object.entries(rankings).forEach(([key, value]) => {
    const optionEl = document.createElement("option");
    optionEl.value = key;
    optionEl.innerText = value.rankingName;
    rankingSelectEl.append(optionEl);
  })
  rankingSelectEl.addEventListener("change", resetRanking)

  let selectedKey = fallback;
  const params = new URLSearchParams(window.location.search);
  const allParams = {};
  for(const [key, value] of params.entries()) {
    allParams[key.toLowerCase()] = value.toLowerCase();
  }
  if(allParams['ranking']){
    const matchingKey = Object.keys(rankings).find(key => key.toLowerCase() === allParams['ranking'].toLowerCase());
    if(matchingKey) selectedKey = matchingKey;
  }
  rankingSelectEl.value = selectedKey;
}
function resetRanking(){
  const ranking = rankingSelectEl.value;
  setOnlyUrlParam('ranking', ranking);
  const {rankingName, rankingItems, layout} = rankings[ranking];

  rankingNumbersEl.innerHTML = "";
  rankingItemsEl.innerHTML = "";
  rankingTitleEl.innerText = rankingName;
  rankingContainerEl.style.setProperty("--max-columns", layout.columns);
  rankingContainerEl.style.setProperty("--aspect-ratio", layout.aspectRatio);
  rankingItems.sort((a,b) => a.name.localeCompare(b.name)).forEach((rankingItem, index) => {
    rankingNumbersEl.append(createRankingNumber(index));
    rankingItemsEl.append(createRankingItem(rankingItem))
  })
}
function createRankingNumber(index){
  const divEl = document.createElement("div");
  divEl.innerText = index + 1;
  return divEl;
}
function createRankingItem({name, imgUrl}){
  const figureEl = document.createElement("figure");
  const imgHolderEl = document.createElement("div");
  const imgEl = document.createElement("img");
  imgEl.src = imgUrl;
  imgEl.alt = name;
  imgHolderEl.append(imgEl);
  const figCaptionEl = document.createElement("figcaption");
  figCaptionEl.innerText = name;
  figureEl.append(imgHolderEl, figCaptionEl);
  return figureEl;
}
function setOnlyUrlParam(key, value, reload = false) {
  const newParams = new URLSearchParams();
  newParams.set(key, value);
  
  const newUrl = `${window.location.pathname}?${newParams.toString()}`;
  
  if (reload) {
    window.location.href = newUrl;
  } else {
    window.history.pushState({}, '', newUrl);
  }
}