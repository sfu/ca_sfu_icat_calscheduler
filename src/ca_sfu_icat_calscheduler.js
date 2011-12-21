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
    this.displayZimletDialog({
        
    });
};

ca_sfu_icat_calscheduler.prototype.doubleClicked = function () {
    this.singleClicked();
};

ca_sfu_icat_calscheduler.prototype.openApptComposeTab = function() {
     AjxDispatcher.run("GetCalController").newAppointment(null, null, null, null);
};
