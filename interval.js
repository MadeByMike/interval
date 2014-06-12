(function(glob){
	"use strict";
	var interval;
	interval = function(every, func, until){
		if (!(this instanceof interval)) {
			return new interval(every, func, until);
		}
		var taskInterval, count, expires, spent=false;
		var task = function() {
			var obj = this, args = arguments;
			if(spent){
				clearInterval(taskInterval);
				return false;
			}
			func.apply(obj, args);
			count++;
		};
		/** rest() */
		this.rest = function() {
			clearInterval(taskInterval);
			return this;
		}
		/** resume() */
		this.resume = function() {
			taskInterval = setInterval(task, every);
			return this;
		}
		/** restart() */
		this.restart = function(newtime) {
			until = until || newtime;
			count = 0;
			spent=false;
			taskInterval = setInterval(task, every);
			if (typeof until !== "undefined"){
				expires = setTimeout(function(){
					clearInterval(taskInterval);
					spent=true;
				}, until);
			}
			return this;
		}
		this.restart();
		return this;
	//Fin
	};

	if (typeof module !== "undefined" && module.exports) {
		module.exports = interval;
	} else if (typeof define !== "undefined") {
		 define([], function() { return URL; });
	} else {
		glob.interval = interval;
	}
})(this);
