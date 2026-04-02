let zSpacing = -1200,
    lastPos = zSpacing / 5,
    frames = document.querySelectorAll('.frame'),
    zVals = []

window.addEventListener('scroll', () => {

    let top = document.documentElement.scrollTop
    let delta = lastPos - top

    lastPos = top

    frames.forEach((frame, i) => {

        if (zVals[i] == null) {
            zVals[i] = i * zSpacing
        }

        zVals[i] += delta * -5

        let transform = `translateZ(${zVals[i]}px)`
        let opacity = zVals[i] < Math.abs(zSpacing) / 1.5 ? 1 : 0

        frame.style.transform = transform
        frame.style.opacity = opacity
    })

})

window.scrollTo(0, 1)

/* музыка */
let btn = document.querySelector('.soundbutton')
let audio = document.querySelector('.audio')

btn.onclick = () => {
    btn.classList.toggle('paused')
    audio.paused ? audio.play() : audio.pause()
}