//object literal
// arrays []
//objects{}

let petSalon={
    name:"the fashion pet",
    address:"ave university 768",
     hours:{
         open:"9:00am",
         close:"6:00pm"
     },
     pets:[]
}

for(let i=0;i<petSalon.pets.length;i++){
  console.log(petSalone.pets[i].name);

function displayInfo(){
    document.getElementById("info").innerHTML=`welcome to the ${petSalon.name} family. it is available at ${petSalon.address} from ${petSalon.hours.open} to ${petSalon.hours.close}`;
    
}
function displayNumberOfPets(){
    document.getElementById('number-pets').innerHTML=`There are ${petSalon.pets.length}pets`;

}
function register(){
    let petName=document.getElementById('txtPetName').value;
    let petAge=document.getElementById('numPetAge').value;
    let petGender=document.getElementById('txtPetGender').value;
    let petBreade=document.getElementById('txtPetBread').value;
    let petService=document.getElementById('txtService').value;
    let petOwner=document.getElementById('txtOwnerName').value;
    let petPhone=document.getElementById('txtPhone').value;
    let petComment=document.getElementById('txtComment').value;
  
//create the obj
 let newPet= new pet(petName,petAge,petGender,petBreade,petService,petOwner,petPhone,petComment);
    console.log(newPet);
        //push the obj
    petSalon.pets.push(newPet);
    console.log(petSalon.pets);
    displayNumberofPets();
    clearInputs();
    
    
}
function clearInputs(){
    document.getElementById("txtPetName").value="";
    document.getElementById('numPetAge').value="";
    document.getElementById('txtPetGender').value="";
    document.getElementById('txtPetBread').value="";
    document.getElementById('txtService').value="";
    document.getElementById('txtOwnerName').value="";
    document.getElementById('txtPhone').value="";
    document.getElementById('txtComment').value="";

}
function deletePets(petID){
   document.getElementById(petID).remove();
   //travel the array
   let petIndex;
   for(let i=0;i<petSalon.pets.length;i++){
    let pet=petSalon.pets[i];
 //compare the id of the pet
    if(pet.id ==petID){
        petIndex=i;//get the pet index
    }

   }
petSalon.pets.splice(petIndex,1);//remove the array
displayNumberOfPets();//update the displaynumberofpets()
}

function init(){
let scooby = new pet('scooby',50,'male','dane','grooming','shaggy','xxxxxxxxxx','comment'); 
let scrappy= new pet('scrappy',40,'male','mixed','vaccines','shaggy','xxxxxxxx','comment');
let speedy= new pet ('speedy',80,'male','mixed','nailes','bugs','xxxxxxxx','comment');
  
  petSalon.pets.push(scooby,scrappy,speedy);
//calling the function
displayInfo();
  displayNumberofPets();
   //hook events
}

window.onload=init;
