console.log('Welcome to spotify')

//Initializing variables
let audioElement=new Audio("/media/songs/Heroes-Tonight.mp3")
let masterPlay=document.getElementById("masterPlay");
let myProgressBar=document.getElementById("myProgressBar")
let songIndex=0;


let songs=[
    {songnName:"Heroes Tonight",filePath:"./../media/songs/Heroes-Tonight.mp3",coverPath:"./../media/imgs/Heroes-Tonight.webp"},
    {songnName:"Heroes Tonight",filePath:"./../media/songs/Heroes-Tonight.mp3",coverPath:"./../media/imgs/Heroes-Tonight.webp"},
    {songnName:"Heroes Tonight",filePath:"./../media/songs/Heroes-Tonight.mp3",coverPath:"./../media/imgs/Heroes-Tonight.webp"},
    {songnName:"Heroes Tonight",filePath:"./../media/songs/Heroes-Tonight.mp3",coverPath:"./../media/imgs/Heroes-Tonight.webp"},
    {songnName:"Heroes Tonight",filePath:"./../media/songs/Heroes-Tonight.mp3",coverPath:"./../media/imgs/Heroes-Tonight.webp"}
]
//play pause action
masterPlay.addEventListener(`click`,()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play")
        masterPlay.classList.add("fa-pause")
    }else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause")
        masterPlay.classList.add("fa-play")
    }
})

//seekbar updation

audioElement.addEventListener("timeupdate",()=>{
    let progress=parseInt(audioElement.currentTime/audioElement.duration*100);
    myProgressBar.value=progress;
})

//Updating currentTime of audio from seekbar
myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100
})