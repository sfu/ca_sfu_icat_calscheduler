/*

	Name: 			ca_sfu_icat_calscheduler
	Description: 	Temporary replacement for the Zimbra-supplied calendar scheduler zimlet
	Author: 		Graham Ballantyne <grahamb@sfu.ca>
	Notes:
*/

function ca_sfu_icat_calscheduler() { };

ca_sfu_icat_calscheduler.prototype = new ZmZimletBase();
ca_sfu_icat_calscheduler.prototype.constructor = ca_sfu_icat_template;

ca_sfu_icat_calscheduler.prototype.init = function() {

	this.logLoadingZimlet();

};

ca_sfu_icat_calscheduler.prototype.singleClicked = function () {

	// do something when the zimlet icon is single-clicked

};

ca_sfu_icat_calscheduler.prototype.doubleClicked = function () {

	// do something when the zimlet icon is double-clicked
};


