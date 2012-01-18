/*

	Name: 			ca_sfu_icat_calscheduler
	Description: 	Temporary replacement for the Zimbra-supplied calendar scheduler zimlet
	Author: 		Graham Ballantyne <grahamb@sfu.ca>
	Notes:
*/

function ca_sfu_icat_calscheduler() { };

ca_sfu_icat_calscheduler.prototype = new ZmZimletBase();
ca_sfu_icat_calscheduler.prototype.constructor = ca_sfu_icat_calscheduler;

ca_sfu_icat_calscheduler.prototype.init = function() {
	this.logLoadingZimlet();
};

ca_sfu_icat_calscheduler.prototype.singleClicked = function () {
    var dialog = this.createZimletDialog({
		title     : 'SFU Connect',
		width     : 500, 	// width of the inner canvas area
		height    : '100%',	// height of the inner canvas area
		popup     : true,	// if true, pops up immediately; if false, returns the dialog object for later use
		ok_button : {
			enabled : true,
			string 	: 'Create New Appointment',
			handler : [this, function() { dialog.popdown(); dialog.dispose(); this.openApptComposeTab(); }]
		},
		cancel_button : {
			enabled : true,
			string	: 'Cancel',
			handler	: [null, function() { dialog.popdown(); dialog.dispose(); }]
		},
		override_tab_handler : true,
		wrap_html: true,
        html: '<p>The Calendar Scheduler has been moved to the appointment menu, now with more features. Create or edit an appointment, add attendees, and the Calendar Scheduler will automatically appear.</p><p><a href="http://www.sfu.ca/email/usingsfuconnect/calendar/calendar_scheduler.html" target=_blank>Learn more about the new Calendar Scheduler</a></p><p>Click the <strong>Create New Appointment</strong> button to start creating a new calendar appointment.</p>'
	});
};

ca_sfu_icat_calscheduler.prototype.doubleClicked = function () {
    this.singleClicked();
};

ca_sfu_icat_calscheduler.prototype.openApptComposeTab = function() {
     AjxDispatcher.run("GetCalController").newAppointment(null, null, null, null);
};
