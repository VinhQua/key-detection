const body = document.querySelector('body');

const customCSS = document.querySelector('#custom-css');
const docHead = document.getElementsByTagName('head');

let keySequence = [];
const secretCodes = ['video','pannel','back']
const keySequenceHandler = function(e){
    //console.log(e.key);
    keySequence.push(e.key.toLowerCase());

    keySequence.splice(-7,keySequence.length-6);
    console.log(keySequence);
    const matchCode = keySequence.join("");
    secretCodes.forEach(secretCode => {
        if (matchCode.includes(secretCode)){
            console.log(secretCode);
            body.innerHTML = "";
            body.innerHTML = secretHTML[secretCode];
            customCSS.href = `css/${secretCode}.css`;

                const customScript = document.createElement('script');
                customScript.src = `js/${secretCode}script.js`; 
                document.body.append(customScript);
            
            
            
            
            
        }
    })
};
window.addEventListener('keyup',keySequenceHandler);

const secretHTML = {
    back:`        <p>Type "video" to watch a video</p>
    <p>Type "pannel" to view flex panels</p>
    <p>Type "back" to return</p>`,
    video:`     <div class="player">
    <video autoplay src="652333414.mp4"></video>
    <div class="video-controller">
        <div class="progress-bar">
            <div class="progress-filled"></div>
        </div>
        <div class="toggle">▶</div>
        <input type="range" class="player-slider" step="0.01" name="volume" id="volume" min="0" max="1" value="0.5">
        <input type="range" class="player-slider"  name="playbackRate" id="playbackRate" min="0.2" max="5" value="1">
        <button class="player-button" data-skip="-10">⏪10s</button>
        <button class="player-button" data-skip="10">10s⏩</button>
    </div>`,
    pannel:`    <div class="panels">
    <div class="panel panel1">
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
    </div>
</div>`
}

