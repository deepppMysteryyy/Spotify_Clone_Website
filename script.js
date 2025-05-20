console.log("Welcome to Spotify");

//Initalizing Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterClassName = document.getElementById('masterClassName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [

    { songName: "Warriyo - Mortals", filePath: "Songs 1.mp3", coverPath: "Images/1.jpg" },
    { songName: "Cielo - Huma-Huma", filePath: "Songs 2.mp3", coverPath: "Images/2.jpg" },
    { songName: "DEAF KEV - Invincible", filePath: "Songs 3.mp3", coverPath: "Images/3.jpg" },
    { songName: "Different Heaven & EH!DE - My Heart", filePath: "Songs 4.mp3", coverPath: "Images/4.jpg" },
    { songName: "Janji-Heroes-Tonight-feat-Johnning", filePath: "Songs 5.mp3", coverPath: "Images/5.jpg" },
    { songName: "Ye Rabba - Salam-e-Ishq", filePath: "Songs 6.mp3", coverPath: "Images/6.jpg" },
    { songName: "True Stories - AP Dhillion", filePath: "Songs 7.mp3", coverPath: "Images/7.jpg" },
    { songName: "Tere Liye - Atif Aslam", filePath: "Songs 8.mp3", coverPath: "Images/8.jpeg" },
    { songName: "Chammak Challo - Vishal Dadlani", filePath: "Songs 9.mp3", coverPath: "Images/9.jpg" },
    { songName: "Duno Ballon Dhuk Dhuk Kare - Golu Gold", filePath: "Songs 10.mp3", coverPath: "Images/10.jpg" },
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;
})

//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-circle-play')
        gif.style.opacity = 0;
    }
})
//Listen to Events
audioElement.addEventListener('timeupdate' , ()=>{
    //Updating Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-pause-circle');
    })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerHTML = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.add('fa-pause-circle')
        masterPlay.classList.remove('fa-circle-play')
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex >=10){
        songIndex = 0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerHTML = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.add('fa-pause-circle')
    masterPlay.classList.remove('fa-circle-play')
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex <=0){
        songIndex = 4;
    }
    else{
        songIndex -=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerHTML = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.add('fa-pause-circle')
    masterPlay.classList.remove('fa-circle-play')
})