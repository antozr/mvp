// console.log("niveau des maps ");

let newArrayData = ["", "", "", "", "", ""];

export function ViewStateVisited() {
  let nbLandVisited = 0;
  newArrayData.forEach((el) => {
    if (el.valueOf() === "") {

        }
        else {

      nbLandVisited++;
      localStorage.setItem("numberStateVisited", nbLandVisited);
      //console.log("You have visited : " + nbLandVisited);
    }
  });
}

export function initStatDataView() {
  
    if(localStorage.getItem('ViewCheckPageStart') === false){
        localStorage.setItem('US', false);
        localStorage.setItem('UK', false);
        localStorage.setItem('Nordic', false);
        localStorage.setItem('Russia', false);
        localStorage.setItem('Japan', false);
        localStorage.setItem('Maori', false);
        localStorage.setItem('EU', false);
    }
  

  
}

export function ChangeStateDataVisited() {

  // //// a changer a l'upload en ligne 
  let arrayListPathName = [
    "/projets/tfe/oldschool",
    "/projets/tfe/japon",
    "/projets/tfe/nordic",
    "/projets/tfe/russie",
    "/projets/tfe/europe",
    "/projets/tfe/pacifique",
    "/projets/tfe/celtic",
  ];
  // let arrayListPathName = [
  //   "/oldschool",
  //   "/japon",
  //   "/nordic",
  //   "/russie",
  //   "/europe",
  //   "/pacifique",
  //   "/celtic"
  // ];
  let pathNamePage = window.location.pathname;
  //console.log(pathNamePage);
  //console.log(arrayListPathName[1]);
  localStorage.setItem("ViewCheckPageStart", false);
  let SecondVisiteSelect = false;

  if (SecondVisiteSelect === true) {
    localStorage.setItem("ViewCheckPageStart", true);
  } else {
    localStorage.setItem("ViewCheckPageStart", false);
  }
  //alert(pathNamePage)

  if (pathNamePage === "/oldschool") {
    localStorage.setItem("US", true);
    SecondVisiteSelect = true;
    localStorage.setItem("ViewCheckPageStart", true);
  } else if (pathNamePage === arrayListPathName[1]) {
    localStorage.setItem("Japan", true);
    SecondVisiteSelect = true;
    localStorage.setItem("ViewCheckPageStart", true);
  } else if (pathNamePage === arrayListPathName[2]) {
    localStorage.setItem("Nordic", true);
    SecondVisiteSelect = true;
    localStorage.setItem("ViewCheckPageStart", true);
  } else if (pathNamePage === arrayListPathName[3]) {
    localStorage.setItem("Russia", true);
    SecondVisiteSelect = true;
    localStorage.setItem("ViewCheckPageStart", true);
  } else if (pathNamePage === arrayListPathName[4]) {
    localStorage.setItem("EU", true);
    SecondVisiteSelect = true;
    localStorage.setItem("ViewCheckPageStart", true);
  } else if (pathNamePage === arrayListPathName[5]) {
    localStorage.setItem("Maori", true);
    SecondVisiteSelect = true;
    localStorage.setItem("ViewCheckPageStart", true);
  }else if (pathNamePage === arrayListPathName[6]){
    localStorage.setItem("Celtic", true);
    SecondVisiteSelect = true;
    localStorage.setItem("ViewCheckPageStart", true);
  }
}

export function GetItemStateTrue() {
  let USdataLoad = localStorage.getItem("US");
  let JapandataLoad = localStorage.getItem("Japan");
  let NordicdataLoad = localStorage.getItem("Nordic");
  let EUdataLoad = localStorage.getItem("EU");
  let PussiadataLoad = localStorage.getItem("Russia");
  let MaoridataLoad = localStorage.getItem("Maori");
  //console.log(USdataLoad);
}

export function loadDataMapAdventure() {
  //console.log("heu");
  /// récupérer les données localStorage
  let USdataLoad = localStorage.getItem("US");
  let JapandataLoad = localStorage.getItem("Japan");
  let NordicdataLoad = localStorage.getItem("Nordic");
  let EUdataLoad = localStorage.getItem("EU");
  let RussiadataLoad = localStorage.getItem("Russia");
  let MaoridataLoad = localStorage.getItem("Maori");
  let CelticLoad = localStorage.getItem("Celtic");
  //console.log(USdataLoad);
  //// tableau donnee recuperee
  let arrayAllDataLoad = [
    USdataLoad,
    JapandataLoad,
    NordicdataLoad,
    EUdataLoad,
    RussiadataLoad,
    MaoridataLoad,
    CelticLoad
  ];
  //console.table(arrayAllDataLoad);
  //// tableau contenant le retour pour les liens
  let tableVisitedand = [];
  //console.table(tableVisitedand);
  //// tableau avec les noms des lieux
  let tabLandName = [
    "Old school",
    "Japon",
    "Nordic ",
    "Tradi européens",
    "Russie & prisons ",
    "Maori",
    "Celtes"
  ];
  let i = 0;

  arrayAllDataLoad.forEach((el) => {
    //console.log(el);
    if (el === "true") {
      tableVisitedand.push(tabLandName[i]);
      //console.table(tableVisitedand);
    }
    i++;
  });
  //console.table(tableVisitedand);
  return tableVisitedand;
}
