# mystrom-switch
mystrom-switch is a library that helps to turn on/off the myStorm wifi switch

## Installation

`npm install mystrom-switch`

## Usage

### Power On

```
var MyStrom = require('mystrom-switch');
var plug = new MyStrom(MyStromIp);

// turn on myStrom wifi switch
plug.powerOn(function (result, err) {
    if (err) console.log(err);

	// If the switch has been well powered on
    if (result === true) {
		console.log("ok, it's on");
    }
});
```

### Power Off

```
var MyStrom = require('mystrom-switch');
var plug = new MyStrom(MyStromIp);

// turn on myStrom wifi switch
plug.powerOff(function (result, err) {
    if (err) console.log(err);

	// If the switch has been well powered on
    if (result === true) {
		console.log("ok, it's on");
    }
});
```

### Power Toggle

```
var MyStrom = require('mystrom-switch');
var plug = new MyStrom(MyStromIp);

// turn on myStrom wifi switch
plug.toggle(function (result, err) {
    if (err) console.log(err);

	// If the switch has been well powered on
    if (result === true) {
		console.log("ok, it's on");
    }
});
```

### Get Values

```
var MyStrom = require('mystrom-switch');
var plug = new MyStrom(MyStromIp);

// turn on myStrom wifi switch
plug.getValues(function (result, err) {
    if (err) console.log(err);

	console.log(result);
});
```