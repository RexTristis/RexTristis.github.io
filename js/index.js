const btnOne = document.querySelector('#btn-one');
const btnTwo = document.querySelector('#btn-two');
const scriptId = '_helpia_ws_chat';
const scriptSrc = 'https://statics.helpia.com/cgc/webchat/develop/widget.js';

console.log('cargador de widgets');
const scriptInfo = [
    //multiagente de joaquin
    'eyJjb25maWdJZCI6ImhlMS1rczFtemktcm5hYSIsIndzVG9rZW4iOiJyODc3V1pENUhmZ01kZ0loS1c1Yjd2UUowVDMxNWZlWUptOFZBalhsVEg3YUEiLCJiYWNrU2VydmVyIjoiaHR0cHM6Ly9kZXYuYmFja2VuZC5jZ2MuaGVscGlhLmNvbSIsIndzU2VydmVyIjoid3NzOi8vZGV2LndzLmJhY2tlbmQuY2djLmhlbHBpYS5jb20vY2hhbm5lbHMifQ==',
    //Fenalco Presidencia.
    //'eyJjb25maWdJZCI6InNib3RsbC0tNnducXJieSIsIndzVG9rZW4iOiJMUFBtVHlaWEFtUmsySEV3dER3bWsyaGZzQjFmQWI5MkFKdm5DRXhuNjFHQTciLCJiYWNrU2VydmVyIjoiaHR0cHM6Ly9kZXYuYmFja2VuZC5jZ2MuaGVscGlhLmNvbSIsIndzU2VydmVyIjoid3NzOi8vZGV2LndzLmJhY2tlbmQuY2djLmhlbHBpYS5jb20vY2hhbm5lbHMifQ==',
    'eyJjb25maWdJZCI6ImhlMS1rczFtemktcm5hYSIsIndzVG9rZW4iOiJyODc3V1pENUhmZ01kZ0loS1c1Yjd2UUowVDMxNWZlWUptOFZBalhsVEg3YUEiLCJiYWNrU2VydmVyIjoiaHR0cHM6Ly9kZXYuYmFja2VuZC5jZ2MuaGVscGlhLmNvbSIsIndzU2VydmVyIjoid3NzOi8vZGV2LndzLmJhY2tlbmQuY2djLmhlbHBpYS5jb20vY2hhbm5lbHMifQ==',
];

btnOne.addEventListener('click', () => {
    const newScript = document.createElement('script');
    newScript.id = scriptId;
    newScript.src = scriptSrc;
    newScript.setAttribute('config', scriptInfo[0]);
    document.body.appendChild(newScript);
});

btnTwo.addEventListener('click', () => {
    const newScript = document.createElement('script');
    newScript.id = scriptId;
    newScript.src = scriptSrc;
    newScript.setAttribute('config', scriptInfo[1]);
    document.body.appendChild(newScript);
});
