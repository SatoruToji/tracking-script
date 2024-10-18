"use strict";
function show(getIdTag, getBrowserName) {
    const name = document.getElementById(getIdTag);
    name.innerHTML = getBrowserName;
    console.log(getBrowserName);
}
function cout(info, value) {
    console.log(info, `: ${value}`);
}
document.getElementById('show__browser-name')?.addEventListener('click', () => {
    getBrowserName();
    getOsName();
});
const BROWSERMAPPING = [
    { name: 'yandex', browser: 'YaBrowser' },
    { name: 'opera', browser: 'OPR' },
    { name: 'firefox', browser: 'Firefox' },
    { name: 'chrome', browser: 'Chrome' },
    { name: 'safari', browser: 'Safari' }
];
function getBrowserName() {
    let browserName = 'чзх';
    for (const browser of BROWSERMAPPING) {
        if (navigator.userAgent.includes(browser.browser)) {
            browserName = browser.name;
            break;
        }
    }
    show('browser-name', browserName);
}
const pasteButton = document.getElementById('pasteButton');
const output = document.getElementById('output');
pasteButton.addEventListener('click', async () => {
    try {
        const text = await navigator.clipboard.readText();
        output.textContent = `Твой буфер: ${text}`;
    }
    catch (err) {
        console.error('Ошибка чтения из буфера:', err);
        output.textContent = 'Не получилось прочитатть буфер';
    }
});
const DEVICEMEMORY = navigator.deviceMemory;
console.log(DEVICEMEMORY);
function getNetworkInfo() {
    const CONNECT = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    cout('скорость Mbps', CONNECT.downlink);
    cout('max скорость Mbit/s', CONNECT.downlinkMax);
    cout('тип сети', CONNECT.effectiveType);
    cout('ping ms', CONNECT.rtt);
    cout('тип соединения', CONNECT.type);
}
const OSMAPPING = [
    { name: 'android', os: 'Android' },
    { name: 'параша для калхозников', os: 'IOS' },
    { name: 'macOS', os: 'Mac OS X' },
    { name: 'linux', os: 'Linux' },
    { name: 'windows', os: 'Windows NT' }
];
function getOsName() {
    let osName = 'не понятно';
    for (const os of OSMAPPING) {
        if (navigator.userAgent.includes(os.os)) {
            osName = os.name;
            break;
        }
    }
    show('os-name', osName);
}
function getPlugins() {
    const PLUGINS = navigator.plugins;
    let pluginsList = [];
    for (let i = 0; i < PLUGINS.length; i++) {
        pluginsList.push(PLUGINS[i].name);
    }
    console.log(pluginsList);
}
