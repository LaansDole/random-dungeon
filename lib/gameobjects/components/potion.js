//Because Browserify encapsulates every module, use strict won't apply to the global scope and break everything
'use strict';

/**
 * Potion Component constructor
 *
 * @class Potion
 * @classdesc The potion of an entity
 *
 * @param {Number} lifeGain - The lifeGain that this potion gives
 */
var Potion = function(lifeGain,count) {

	/**
	 * @property {String} name - The name of this system. This field is always required!
	 */
	this.name = 'potion';

	/**
	 * @property {Number} LifeGain - the lifeGain that this potion gives
	 */
	this.LifeGain = lifeGain;

	this.count = count;

};

Potion.prototype = {

	/**
	 * Add a new item to the inventory
	 * @protected
	 */
	usePotion: function(){

		if(this.count >0){
			this.count --;
		}else{
			this.count = 0;
		}
		
	},

	hasPotion: function(){
		if(this.count > 0){
			return true;
		}else{
			return false;
		}
	}



};

//Export the Browserify module
module.exports = Potion;
