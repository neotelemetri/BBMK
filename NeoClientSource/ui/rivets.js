﻿bbmk.ui.rivets = {}
bbmk.ui.rivets.setup = function() {		

	rivets.formatters.status = {
	    read: function (value) {
	        return value == 1 ? "active" : "inactive";
	    }
	}

};



/**
 * Bind Rivets.js to individual UI elements
 * 
 * Unlike normal jQuery bindings it doesn't have to be recalled if you inject new elements into the UI.
 */
bbmk.ui.rivets.bind = function () {
    view = rivets.bind($("#ukmList"),{ 
        controllerUKM: controllerUKM
    });        
};