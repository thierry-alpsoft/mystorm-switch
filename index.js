'use strict';
var Http = require("http");

module.exports = myStromSwitch;

function myStromSwitch(ip) {
    this.ip = ip;
    return this;
}

var SendGetRequest = function(plugUrl, callback) {
    Http.get(plugUrl,
        (res) => {

            const { statusCode } = res;

            res.setEncoding('utf8');
            let rawData = '';
            res.on('data', (chunk) => { rawData += chunk; });
            res.on('end',
                () => {
                    callback(statusCode === 200);
                });
        }).on('error',
        (e) => {
            callback(false, e);
        });
};

myStromSwitch.prototype.powerOn = function(callback) {
    callback = callback || function() {};

    const plugUrl = "http://" + this.ip + "/relay?state=1";
    SendGetRequest(plugUrl, callback);
}

myStromSwitch.prototype.powerOff = function(callback) {
    callback = callback || function() {};

    const plugUrl = "http://" + this.ip + "/relay?state=0";
    SendGetRequest(plugUrl, callback);
}

myStromSwitch.prototype.toggle = function(callback) {
    callback = callback || function() {};

    const plugUrl = "http://" + this.ip + "/toggle";
    SendGetRequest(plugUrl, callback);
}

myStromSwitch.prototype.getValues = function(callback) {
    callback = callback || function() {};

    const plugUrl = "http://" + this.ip + "/toggle";
    Http.get(plugUrl,
        (res) => {
            res.setEncoding('utf8');
            let rawData = '';
            res.on('data', (chunk) => { rawData += chunk; });
            res.on('end',
                () => {
                    try {
                        const parsedData = JSON.parse(rawData);
                        callback(parsedData);
                    } catch (e) {
                        callback(e.message);
                    }
                });
        }).on('error',
        (e) => {
            callback(false, e);
        });
}