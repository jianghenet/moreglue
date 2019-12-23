// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
function showClock(){
  let clock = document.getElementById('clock');

  setInterval(()=>{
    clock.innerText = new Date().toLocaleString();
  }, 500);
  return clock;
}

function addEventHandler(){
  let asideNav = document.getElementById('aside');
  asideNav.addEventListener('click', (evt)=>{
    let target = evt.target;
    if(target && target.hash){
      let elId = target.hash.replace("#", '')
      let toolDiv = document.getElementById(elId);
      toolDiv.classList.replace('inactive' , 'active');
    }
  });

  let calculatorDiv = document.getElementById("calculator");
  let resultsDiv = document.getElementById('results');
  let functionsDiv = document.getElementById('functions');
  let stdinInput = document.getElementById('stdin');
  let cmdDiv = document.getElementById('cmd-buttons');
  calculatorDiv.addEventListener('keypress', (evt)=>{
    if(evt.ctrlKey && String(evt.keyCode) == '13'){
      if(evt.target && evt.target.name == 'stdin'){
        let result =  eval(evt.target.value);
        resultsDiv.innerHTML = `<span>${result}</span>`
      }
    }
  });

  functionsDiv.addEventListener('click', (evt) => {
    var funcBtn = null;
    if(evt.target.tagName.toLowerCase() === 'button'){
      funcBtn = evt.target;
    }
    if(evt.target.parentElement.tagName.toLowerCase() === 'button'){
      funcBtn = evt.target.parentElement;
    }
    if(funcBtn){
      var functionName = funcBtn.name;
      stdinInput.value = stdinInput.value + functionName+"()";
    }
  });

  cmdDiv.addEventListener('click', (evt) => {
    if(evt.target.tagName.toLowerCase() == 'input'){
      switch (evt.target.name){
        case 'clear':
          stdinInput.value = '';
          resultsDiv.innerHTML = '';
          break;
        case 'execute':
          let result =  eval(stdinInput.value);
          resultsDiv.innerHTML = `<span>${result}</span>`;
          break;
        default:
          break;
      }
    }
  });

}
