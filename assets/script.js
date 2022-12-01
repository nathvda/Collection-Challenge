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
            "Yeosang",
            "San",
            "Seonghwa",
            "Wooyoung"
        ],
    },
];


let container = document.getElementById("myCollection");

/*function createCard(b){
    
}*/

for (group in KpopGroups){

let groupBox = document.createElement("section");
let groupName = document.createElement("h3");
let groupNameText = document.createTextNode(`${KpopGroups[group]["name"]}`);
let groupImage = document.createElement("img");
let groupContent = document.createElement("ul");
let groupMembers = document.createElement("ul");

let personTitle = document.createElement("b");
let personTitleText = doculment.createTextNode("Members");

groupBox.classList.add("groupItem");
groupMembers.classList.add("members");

groupImage.src = KpopGroups[group]["picture"];

for (elem in KpopGroups[group]["members"]){
    let person = document.createElement("li");
    let personText = document.createTextNode(KpopGroups[group]["members"][elem]);
    person.appendChild(personText);
    groupMembers.appendChild(person);
}

groupContent.innerHTML = `
<li><b>Agence:</b>${KpopGroups[group]["agency"]}</li>
<li><b>Année de début:</b>${KpopGroups[group]["debutYear"]}</li>
<li><b>Type:</b>${KpopGroups[group]["type"]}</li>`;

groupName.appendChild(groupNameText);

personTitle.appendChild(personTitleText);

groupMembers.appendChild(personTitle);

groupBox.appendChild(groupName);
groupBox.appendChild(groupImage);
groupBox.appendChild(groupContent);
groupBox.appendChild(groupMembers);
container.appendChild(groupBox);

}

