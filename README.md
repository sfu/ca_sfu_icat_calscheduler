#Calendar Scheduler Replacement Zimlet (ca\_sfu\_icat\_calcheduler)

ZCS 7+ has rolled the functionality of Zimbra's Calendar Scheduler Zimlet (com\_zimbra\_calscheduler) into the application core. As such, the existing zimlet isn't needed in v7 and should be removed. However, many users may be used to clicking on the zimlet to find good appointment times, so this stub zimlet was born. When a user clicks on the zimlet in the sidebar, they will be presented with a dialog informing them that the calsched functionality has moved, with a link to documentation. They will have the option to cancel (dismissing the dialog and leaving them where they are), or creating a new appointment (which will launch the New Appointment interface). There is a "don't show me this again" checkbox as well.

Launching the appointment compose interface is accomplished with this pithy one-liner:
     AjxDispatcher.run("GetCalController").newAppointment(null, null, null, null);

## Deployment Information
Deploy to all COSes as a mandatory zimlet.