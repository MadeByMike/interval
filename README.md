Interval
=========

A quick little wrapper to make dealing with intervals in JavaScript slightly easier.

##Usage
###interval(every, task, [until])
every: int - time in milliseconds, how often to execute the task <br/>
task: function - the task to execute <br/>
until: int - time in milliseconds, when to stop execution of the task
```javascript
// Do task every second for 10 sec
var i=0;
interval(1000, function(){
  console.log(i++);
},10000);  
```
###.rest()
Pause a task without restarting the 'until' timer.
```javascript
var el = document.getElementById('stop');
var myinterval = interval(1000, myfunction); 
el.addEventListener('click', function(){
  myinterval.rest();
});
```
###.resume()
Resume a task without restarting the 'until' timer.
If the until timer has elapsed the task will not resume.
```javascript
var el = document.getElementById('start');
el.addEventListener('click', function(){
  myinterval.resume();
});
```
###.restart([until])
Restart a task. This will restart the 'until' timer. The length of the until timer can optionally be changed.
```javascript
// Restart interval for 10 sec
var el = document.getElementById('restart');
el.addEventListener('click', function(){
  myinterval.restart(10000);
});
```
