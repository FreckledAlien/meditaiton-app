const app = () => {

    const song = document.querySelector('.song')
    const play = document.querySelector('.play')
    const outline = document.querySelector('.moving-outline circle')
    const video = document.querySelector('.video-container video')

    // sounds
    const sounds = document.querySelectorAll('.sound-picker button')
    // time display
    const timeDisplay = document.querySelector('.time-display')
    const timeSelect = document.querySelectorAll('.time-select button')
    // get the length of the outline
    const outlineLength = outline.getTotalLength()
    // duration
    let fakeDuration = 600;

        outline.style.strokeDasharray = outlineLength
        outline.style.strokeDashoffset = outlineLength

    // pick different sounds
    sounds.forEach(sound => {
        sound.addEventListener("click", function(){
            song.src = this.getAttribute('data-sound')
            video.src = this.getAttribute('data-video')
            checkPlaying(song)
        })

    })

    //play sound
    play.addEventListener("click", () =>{
        checkPlaying(song)
    })

    // select sound
    timeSelect.forEach(option =>{
        option.addEventListener("click", function(){
            fakeDuration = this.getAttribute("data-time")
            timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(fakeDuration % 60)}` + '0'
        })

    })

    //Create a function specific to stop and play sounds
    const checkPlaying = song =>{
      
        if(song.paused){
            song.play()
            video.play()
            play.src = "./svg/pause.svg"
            
        }
        else{
            song.pause()
            video.pause()
            play.src = "./svg/play.svg"
        }
    
    }
    // we can animate circle
    song.ontimeupdate = () => {
        let currentTime = song.currentTime
        let elapsed = fakeDuration - currentTime
        let seconds = Math.floor(elapsed % 60) 
        let minutes = Math.floor(elapsed / 60)

        // animate the circle
        let progress = outlineLength - (currentTime / fakeDuration) * outlineLength
        outline.style.strokeDashoffset = progress

        // animate the text
        timeDisplay.textContent = `${minutes}:${seconds}`
        if(currentTime >= fakeDuration){
            song.pause()
            song.currentTime = 0
            play.src = "./svg/play.svg"
            video.pause()
        }
    }  
  
}


  
function mute(){
    const song = document.querySelector('.song')
    const video = document.querySelector('.video-container video')

    var mute = document.getElementById('mute')
    var pause = false
 

    if(mute){
        console.log("mute")
        song.pause()
        video.play()
        pause = true
        console.log(pause)
    } else if(mute && pause == true){ 
        song.play()
        video.play()
    }
}



// function bird(click){
// var clicks = []
// clicks = click
// console.log(clicks)
// var birdClick =  document.getElementById('birdClick').onclick 
// var beachClick = document.getElementById('beachClick').onclick 
// var rainClick = document.getElementById('rainClick').onclick 
// var change = document.getElementById("60")
// var change1 = document.getElementById("120")
// var change2 = document.getElementById("300")
// var change3 = document.getElementById("600")




// if(rainClick){
//     console.log(rainClick)
  
// change.style.backgroundColor = '#757575'
// change1.style.backgroundColor = '#757575'
// change2.style.backgroundColor = '#757575'
// change3.style.backgroundColor = '#757575'
// }
// else if(beachClick){
//     console.log(beachClick)
// change.style.backgroundColor = '#ffffff'
// change1.style.backgroundColor = '#ffffff'
// change2.style.backgroundColor = '#ffffff'
// }
// else{
// change.style.backgroundColor = 'pink'
// change1.style.backgroundColor = 'pink'
// change2.style.backgroundColor = 'pink'
// }
// }
// }
app();