let songIndex = 1;
let audioElement = new Audio('Iguess.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs =[
    {songName: "Lil Bunty", filePath: "Ontop.mp3", coverPath: "background.png"},
    {songName: "Tony Montana", filePath: "Iguess.mp3", coverPath: "favicon.jpg"},
    {songName: "Never fold", filePath: "Ontop.mp3", coverPath: "giphyTwo.gif"},
    {songName: "Players", filePath: "Players.mp3", coverPath: "favicon.jpg"},
    {songName: "I guess", filePath: "Iguess.mp3", coverPath: "background.png"},
    {songName: "Ek Din Pyaar", filePath: "Players.mp3", coverPath: "giphyTwo.gif"},
    {songName: "295 - Siddhu Moose Wala", filePath: "Iguess.mp3", coverPath: "favicon.jpg"},
    {songName: "Chosen", filePath: "Players.mp3", coverPath: "favicon.jpg"},
    {songName: "No China", filePath: "Iguess.mp3", coverPath: "background.png"},
    {songName: "If I Die", filePath: "Players.mp3", coverPath: "giphyTwo.gif"}
]


songItems.forEach((element,i)=>{
    
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})


audioElement.addEventListener('timeupdate',()=>{
    const progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value= progress;
});

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
});

const makeAllPlays = ()=>{
   
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
       
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `${index + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})


