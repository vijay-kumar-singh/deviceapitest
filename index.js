import './style.css';

if (!('ondevicelight' in window)) {
  document.getElementById('dl-unsupported').classList.remove('hidden');
}
else {
  var lightValue = document.getElementById('dl-value');

  window.addEventListener('devicelight', function (event) {
    lightValue.innerHTML = Math.round(event.value);
    document.getElementById("myProgress").value = event.value;

    if (event.value < 50) {
      document.body.className = 'dark-theme';
    } else if (event.value < 10000) {
      document.body.className = 'classic-theme';
    } else {
      document.body.className = 'light-theme';
    }
  });
}

if (!('onlightlevel' in window)) {
  document.getElementById('ll-unsupported').classList.remove('hidden');
} else {
  var lightStateValue = document.getElementById('ll-value');

  window.addEventListener('lightlevel', function (event) {
    lightStateValue.innerHTML = event.value;
  });
}
var box = document.getElementById('box');
function onDeviceProximityChanged(event) {
  document.getElementById('deviceValue').innerHTML = event.value + ' cm (' + event.min + '-' + event.max + ' cm range)';
  var size = Math.min(200, Math.max(20, 500 / (event.value || 1)));

  box.style.width = size + 'px';
  box.style.height = size + 'px';
}

function onUserProximityChanged(event) {
  document.getElementById('nearValue').innerHTML = event.near ? 'near' : 'rather far';
  box.style.backgroundColor = event.near ? 'red' : 'green';
}

window.addEventListener('deviceproximity', onDeviceProximityChanged);
window.addEventListener('userproximity', onUserProximityChanged);
