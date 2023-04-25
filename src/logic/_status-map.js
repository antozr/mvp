console.log('niveau des maps ');

let newArrayData = ["", "", "", "", "", ""];

export function ViewStateVisited() {
    let nbLandVisited = 0;
    newArrayData.forEach((el) => {
        if (el.valueOf() === "") {

        }
        else {

            nbLandVisited++;
            localStorage.setItem('numberStateVisited', nbLandVisited);
            console.log("You have visited : " + nbLandVisited);
        }
    });
};

export function initStatDataView() {
    // localStorage.setItem('US', false);
    // localStorage.setItem('UK', false);
    // localStorage.setItem('Nordic', false);
    // localStorage.setItem('Russia', false);
    // localStorage.setItem('Japan', false);
    // localStorage.setItem('Maori', false);
    // localStorage.setItem('EU', false);

    
    if(localStorage.getItem('ViewCheckPageStart') === false){
        localStorage.setItem('US', false);
        localStorage.setItem('UK', false);
        localStorage.setItem('Nordic', false);
        localStorage.setItem('Russia', false);
        localStorage.setItem('Japan', false);
        localStorage.setItem('Maori', false);
        localStorage.setItem('EU', false);
    }
   
};

export function ChangeStateDataVisited() {
    let arrayListPathName = ["/oldschool", "/japan", "/nordic", "/russie", "/europe", "/pacifique"];
    let pathNamePage = window.location.pathname;
    localStorage.setItem('ViewCheckPageStart',false);
    let SecondVisiteSelect = false;

    if(SecondVisiteSelect === true){
        localStorage.setItem('ViewCheckPageStart', true);
    }else{
        localStorage.setItem('ViewCheckPageStart',false);
    }
    //alert(pathNamePage)

    if (pathNamePage === "/oldschool") {
        localStorage.setItem('US', true);
        SecondVisiteSelect = true;
        localStorage.setItem('ViewCheckPageStart', true);
    } else if (pathNamePage === arrayListPathName[1]) {
        localStorage.setItem('Japan', true);
        SecondVisiteSelect = true;
        localStorage.setItem('ViewCheckPageStart', true);

    } else if (pathNamePage === arrayListPathName[2]) {
        localStorage.setItem('Nordic', true);
        SecondVisiteSelect = true;
        localStorage.setItem('ViewCheckPageStart', true);


    } else if (pathNamePage === arrayListPathName[3]) {
        localStorage.setItem('Russia', true);
        SecondVisiteSelect = true;
        localStorage.setItem('ViewCheckPageStart', true);


    } else if (pathNamePage === arrayListPathName[4]) {
        localStorage.setItem('EU', true);
        SecondVisiteSelect = true;
        localStorage.setItem('ViewCheckPageStart', true);

    } else if (pathNamePage === arrayListPathName[5]) {
        localStorage.setItem('Maori', true);
        SecondVisiteSelect = true;
        localStorage.setItem('ViewCheckPageStart', true);

    }

};


export function GetItemStateTrue() {

    let USdataLoad = localStorage.getItem('US');
    let JapandataLoad = localStorage.getItem('Japan');
    let NordicdataLoad = localStorage.getItem('Nordic');
    let EUdataLoad = localStorage.getItem('EU');
    let PussiadataLoad = localStorage.getItem('Russia');
    let MaoridataLoad = localStorage.getItem('Maori');
    console.log(USdataLoad);

    if (USdataLoad === true) {


    }

}

