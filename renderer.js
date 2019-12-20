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
  calculatorDiv.addEventListener('keypress', (evt)=>{
    if(String(evt.keyCode) == '13'){
      if(evt.target && evt.target.name == 'stdin'){
        let result =  eval(evt.target.value);
        resultsDiv.innerHTML = `<span>${result}</span>`
      }

    }
  });
}
