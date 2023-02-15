const contentWrapper = document.querySelector('.content-wrapper');
const customScript = document.querySelector('#custom-script');

let keySequence = [];
const secretCodes = ['video','panel','back']
const keySequenceHandler = function(e){
    console.log(e.key);
    keySequence.push(e.key.toLowerCase());
    
    keySequence.splice(-6,keySequence.length-5);
    console.log(keySequence);
    const matchCode = keySequence.join("");
    secretCodes.forEach(secretCode => {
        if (matchCode.includes(secretCode)){
            console.log(secretCode);
            contentWrapper.innerHTML = secretHTML[secretCode];
            customScript.src = `js/${secretCode}.js`;
        }
    })
};
window.addEventListener('keyup',keySequenceHandler);

const secretHTML = {
    back:`        <p>Type "video" to watch a video</p>
    <p>Type "pannel" to view flex panels</p>
    <p>Type "back" to return</p>`,
    video:`        <video autoplay src="652333414.mp4"></video>
    <div class="video-controller">
        <div class="progress-bar">
            <div class="progress-filled"></div>
        </div>
        <div class="toggle">▶</div>
        <input type="range" class="player-slider" step="0.01" name="volume" id="volume" min="0" max="1" value="0.5">
        <input type="range" class="player-slider"  name="playbackRate" id="playbackRate" min="0.2" max="5" value="1">
        <button class="player-button" data-skip="-10">⏪10s</button>
        <button class="player-button" data-skip="10">10s⏩</button>`,
    panel:`        <div class="panel panel1">
    <p>hey</p>
    <p>let's</p>
    <p>dance</p>
</div>
<div class="panel panel2">
    <p>give</p>
    <p>talk</p>
    <p>receive</p>
</div>
<div class="panel panel3">
    <p>experience</p>
    <p>it</p>
    <p>today</p>
</div>
<div class="panel panel4">
    <p>give</p>
    <p>all</p>
    <p>you can</p>
</div>
<div class="panel panel5">
    <p>life</p>
    <p>in</p>
    <p>motion</p>
</div>`
}
console.log(secretHTML);
