/*!
 * ${copyright}
 */

// Provides control sap.ui.unified.CalendarAppointment.
sap.ui.define(['jquery.sap.global', './DateTypeRange', './library'],
	function(jQuery, DateTypeRange, library) {
	"use strict";

	/**
	 * Constructor for a new <code>CalendarAppointment</code>.
	 *
	 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
	 * @param {object} [mSettings] Initial settings for the new control
	 *
	 * @class
	 * An appointment for use in a team calendar or similar. The rendering must be done in the Row collecting the appointments.
	 * (Because there are different visualizations possible.)
	 *
	 * Applications could inherit from this element to add own fields.
	 * @extends sap.ui.unified.DateTypeRange
	 * @version ${version}
	 *
	 * @constructor
	 * @public
	 * @since 1.34.0
	 * @alias sap.ui.unified.CalendarAppointment
	 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
	 */
	var CalendarAppointment = DateTypeRange.extend("sap.ui.unified.CalendarAppointment", /** @lends sap.ui.unified.CalendarAppointment.prototype */ { metadata : {

		library : "sap.ui.unified",
		properties : {

			/**
			 * Title of the appointment.
			 */
			title : {type : "string", group : "Data"},

			/**
			 * Text of the appointment.
			 */
			text : {type : "string", group : "Data"},

			/**
			 * Icon of the Appointment. (e.g. picture of the person)
			 *
			 * URI of an image or an icon registered in sap.ui.core.IconPool.
			 */
			icon : {type : "sap.ui.core.URI", group : "Data", defaultValue : null},

			/**
			 * Indicates if the icon is tentative.
			 */
			tentative : {type : "boolean", group : "Data", defaultValue : false},

			/**
			 * Indicates if the icon is selected.
			 */
			selected : {type : "boolean", group : "Data", defaultValue : false}
		}
	}});

	return CalendarAppointment;

}, /* bExport= */ true);
