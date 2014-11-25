//Because Browserify encapsulates every module, use strict won't apply to the global scope and break everything
'use strict';

/**
 * Potion Component constructor
 *
 * @class Potion
 * @classdesc The potion of an entity
 * NOTE: this class is due to some heavy changes
 *
 * @param {Number} damage - The damage that this weapon does
 */
var Potion = function(lifeGain) {

	/**
	 * @property {String} name - The name of this system. This field is always required!
	 */
	this.name = 'potion';

	/**
	 * @property {Number} damage - The damage that this weapon does
	 */
	this.LifeGain = lifeGain;

	this.count = 3;

};

Potion.prototype = {

	/**
	 * Add a new item to the inventory
	 * @protected
	 */
	use: function(){

		this.count --;
		
	},



};

//Export the Browserify module
module.exports = Potion;
