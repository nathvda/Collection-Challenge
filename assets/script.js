const KpopGroups = [ 
    { 
        name : "Red Velvet",
        agency : "SM Entertainment",
        debutYear : 2014,
        picture : "./assets/images/redvelvet.jpg",
        type : "Groupe féminin",
        members : [ 
            "Irene", 
            "Wendy",
            "Yeri",
            "Seulgi",
            "Joy"
        ],
    },
    { 
        name : "Ateez",
        agency : "KQ entertainment",
        debutYear : 2018,
        picture : "./assets/images/ateez.jpg",
        type : "Groupe masculin",
        members : [ 
            "Jongho", 
            "Yeosang",
            "Mingi",
            "Hongjoong",
            "Yunho",
            "San",
            "Seonghwa",
            "Wooyoung"
        ],
    },
    { 
        name : "Monsta X",
        agency : "Starship",
        debutYear : 2015,
        picture : "./assets/images/monstax.png",
        type : "Groupe masculin",
        members : [ 
            "Hyungwon", 
            "Kihyun",
            "Jooheon",
            "Shownu",
            "IM",
        ],
    }, 
     { 
        name : "Twice",
        agency : "JYP",
        debutYear : 2015,
        picture : "./assets/images/twice.jpg",
        type : "Groupe féminin",
        members : [ 
            "Nayeon", 
            "Momo",
            "Sana",
            "Tzuyu",
            "Jeongyeon",
            "Jihyo",
            "Mina",
            "Chaeyoung",
            "Dahyun"
        ],
    },
    { 
        name : "Mamamoo",
        agency : "RBW Entertainment",
        debutYear : 2014,
        picture : "./assets/images/mamamoo.jpg",
        type : "Groupe féminin",
        members : [ 
            "Hwasa", 
            "Wheein",
            "Moonbyul",
            "Solar",
        ],
    },
    { 
        name : "Seventeen",
        agency : "HYBE",
        debutYear : 2015,
        picture : "./assets/images/svt.jpg",
        type : "Groupe masculin",
        members : [ 
            "Mingyu", 
            "Jeonghan",
            "Wonwoo",
            "Solar",
            "Hoshi",
            "Joshua",
            "Jun",
            "The8",
            "DK",
            "Woozi",
            "S.Coups",
            "Vernon",
            "Seungkwan",
            "Dino"
        ],
    }, 
    { 
        name : "Everglow",
        agency : "YueHua Entertainment",
        debutYear : 2019,
        picture : "./assets/images/everglow.jpg",
        type : "Groupe féminin",
        members : [ 
            "Yiren", 
            "Aisha",
            "Sihyeon",
            "Onda",
            "Mia",
            "E:U",
        ],
    },
    { 
        name : "Stray Kids",
        agency : "JYP Entertainment",
        debutYear : 2018,
        picture : "./assets/images/straykids.jpg",
        type : "Groupe masculin",
        members : [ 
            "Hyunjin", 
            "Felix",
            "Bang Chan",
            "Lee Know",
            "IN",
            "Han",
            "Seungmin",
            "Changbin",
        ],
    },
    { 
        name : "Oneus",
        agency : "RBW Entertainment",
        debutYear : 2019,
        picture : "./assets/images/oneus.jpg",
        type : "Groupe masculin",
        members : [ 
            "Xion", 
            "Hwanwoong",
            "Seoho",
            "Leedo",
            "Keonhee",
            "Ravn"
        ],
    },
    { 
        name : "Ab6ix",
        agency : "Brand New Music",
        debutYear : 2019,
        picture : "./assets/images/ab6ix.jpg",
        type : "Groupe masculin",
        members : [ 
            "Jeon Woong", 
            "Dongyun",
            "Daehwi",
            "Woojin",
        ],
    },

];

let container = document.getElementById("myCollection");

document.getElementById("numberGroup").innerHTML = KpopGroups.length;

function hideGirlGroups(){
  
 let element = document.querySelector('input[name="display"]:checked').value; 
switch(element){

    case "all":
    let i = 0;
    for(elem of container.children){
       i++;
      elem.style.display = "flex";
    }    
    break;
    case "fem":
    for(elem of container.children){
            elem.classList.contains(element) ? elem.style.display = "flex" : elem.style.display = "none";
          }      
    break;
    case "masc":
        for(elem of container.children){
            elem.classList.contains(element) ? elem.style.display = "flex" : elem.style.display = "none";
          }  
    break;
 }
}


for (group in KpopGroups){

let groupBox = document.createElement("section");
let groupName = document.createElement("h3");
let groupNameText = document.createTextNode(`${KpopGroups[group]["name"]}`);
let groupImage = document.createElement("img");
let groupContent = document.createElement("ul");
let groupMembers = document.createElement("ul");
let groupMemberWrap = document.createElement("div");
let groupButton = document.createElement("button");
let buttonText = document.createTextNode("Voir les membres");


groupBox.classList.add("groupItem");
groupMembers.classList.add("members");
groupMemberWrap.classList.add("hidden");
groupMemberWrap.classList.add("box");


groupButton.addEventListener('click', () => {
    groupMemberWrap.classList.toggle("hidden");
});

groupButton.appendChild(buttonText);
groupBox.appendChild(groupButton);

if (KpopGroups[group]["type"] === "Groupe féminin"){
    groupBox.classList.add("fem");

} else if (KpopGroups[group]["type"] === "Groupe masculin") {
    groupBox.classList.add("masc");
} else {
    groupBox.classList.add("mix");
}

groupContent.classList.add("groupContent");

groupImage.src = KpopGroups[group]["picture"];

for (elem in KpopGroups[group]["members"]){
    let person = document.createElement("li");
    let personText = document.createTextNode(KpopGroups[group]["members"][elem]);
    person.appendChild(personText);
    groupMembers.appendChild(person);
}

groupContent.innerHTML = `
<li><b>Agence: </b>${KpopGroups[group]["agency"]}</li>
<li><b>Année de début: </b>${KpopGroups[group]["debutYear"]}</li>
<li><b>Type: </b>${KpopGroups[group]["type"]}</li>`;

groupName.appendChild(groupNameText);
groupMemberWrap.appendChild(groupMembers);
groupBox.appendChild(groupName);
groupBox.appendChild(groupImage);
groupBox.appendChild(groupContent);
groupBox.appendChild(groupMemberWrap);
container.appendChild(groupBox);
}
let newtable = container.children;
for (elem of newtable){
 elem.style.opacity = `0`;
 elem.style.transition = '0.5s';
 }

window.addEventListener('load', function(){

let newtable = container.children;
container.style.position = `relative`; 

for (let i = 0 ; i < newtable.length ; i++){
       setTimeout(() => {
    newtable[i].style.opacity = `1`;
    
       } , (100 * i));
       console.log(i);
} 

});

/* 
let containchild = container.children;
for (let i = 0 ; i < newtable.length ; i++){
window.addEventListener('mouseover', function(event){
    var posX = event.clientX;
    var posY = event.clientY;

    container.style.position = `relative`; 
    
console.log(newtable[i].style.width.value);
    
        if ( posX < 600 && posY < 400){
            newtable[i].style.transform = `rotateY(30deg) rotateX(-30deg)`;
        } else if ( posX > 1800 && posY < 400) { newtable[i].style.transform = `rotateY(30deg) rotateX(30deg)`;}
        else if ( posX > 1800 && posY > 400) { newtable[i].style.transform = `rotateY(30deg) rotateX(-30deg)`;}
     else if ( posX < 1800 && posY > 400) { newtable[i].style.transform = `rotateY(-30deg) rotateX(-30deg)`;}
    else { newtable[i].style.transform = `rotateY(0deg) rotateX(0deg)`;}
   
});
 };*/