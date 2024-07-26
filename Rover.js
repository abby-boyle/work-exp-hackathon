
const MARSapi = "UNOjVw432dJ8QaHJlmPsTEhk4uQuD1VcsaeJleCY";
const RoverInput = document.querySelector(".");
const RoverForm = document.querySelector(".");

RoverForm.addEventListener("submit", async event => {

    event.preventDefault()
    const Rover = RoverInput.value;

    if(Rover){
        try{
            const RoverData = await getRoverData(Rover)
            Display(RoverData);
        } catch{
            console.log(error)
            var errorMessage = window.prompt("Please select a rover and try again");
        }
    } else{
         errorMessage = window.prompt("Please select a rover and try again")
    }

});

async function getRoverData(Rover){

    const apiURL = ``;

    const response = await fetch(apiURL);

}

function Display(JSONdata){

}