bbmk.ui.ready = function () {

    window.controllerUKM = new bbmk.controllerUKM();
	controllerUKM = window.controllerUKM;
	
    bbmk.ui.rivets.bind();
    bbmk.ui.rivets.setup();
    bbmk.ui.bind();
	
	controllerUKM.setUKMList("{}",view);
}

/* Function to bind the element with handler */
bbmk.ui.bind = function () {

    $("#test").bind("click", function(){
        $("#test-click").show();
    });    

}