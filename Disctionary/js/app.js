let input =  document.querySelector(".input");
let cta = document.querySelector(".btn");
let notFound = document.querySelector(".notFound");
let audio = document.querySelector(".audio");
let suggestions = document.querySelector(".suggestions")
let definations = document.querySelector(".defination")
let loading = document.querySelector(".loading");

let apikey = "3673c996-b054-4511-bbff-9fad4f844f7e";
// Note : we can not include api key in Real world Project . we include it on server-side .This is our personal project 
// so we do this .




cta.addEventListener("click",(e)=>{
    e.preventDefault();
 //clear the last input word data  :
            notFound.innerHTML = " " ;
            suggestions.innerHTML = " " ;
            definations.innerHTML = " " ;
            audio.innerHTML = " " ;


    let inputWord = input.value;
    if(inputWord==""){
        alert("Please Put a word")
    }else{
        fetchData(inputWord);
    }
    
});

async function fetchData(inputWord){
    loading.style.display = "block";
   
let result = await (await fetch(`https://www.dictionaryapi.com/api/v3/references/learners/json/${inputWord}?key=${apikey}`)).json();
console.log(result);

     // if user put word that is not exit :

if(!result.length){
    loading.style.display = "none";
   let htmlElement0 = document.createElement('p')
   htmlElement0.innerHTML= "This word is not exit <br> Kindly check your word...";
  notFound.appendChild(htmlElement0);

}


//for suggestions :


 
   if (typeof result[0]==='string' ){
    loading.style.display = "none";
    let htmlElement = document.createElement("h3");
    htmlElement.innerHTML = " Did you mean ?";
    suggestions.appendChild(htmlElement);
  result.forEach(element => {
    let htmlElement2 = document.createElement("span");
    htmlElement2.innerText = element;
    htmlElement2.classList.add('suggested');
    suggestions.appendChild(htmlElement2);
    return ;
  });
};

    // if user put correct word->include defination and sound :

let def;
if ( def = result[0].shortdef[0]){
    loading.style.display = "none";
    definations.innerText = def;
    let soundName =  result[0].hwi.prs[0].sound.audio;
    let subFolder = soundName.charAt(0);
    let srcSound = ` https://media.merriam-webster.com/soundc11/${subFolder}/${soundName}.wav?key=${apikey}`;
    let audioTag = document.createElement('audio');
    audioTag.controls = true;
    audioTag.src =srcSound;
    audio.appendChild(audioTag);
    return ;
    }
  };