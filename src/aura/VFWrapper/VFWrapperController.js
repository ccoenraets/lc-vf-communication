({
    doInit : function(component, event, helper) {
        var vfBaseURL = component.get("v.vfBaseURL");
		window.addEventListener("message", function(event) {
            if (event.origin !== vfBaseURL) {
				return;
			}
            var vfMessages = component.get("v.vfMessages");
            vfMessages = vfMessages + event.data + "\n";
            component.set("v.vfMessages", vfMessages);
		}, false);
    },

    sendToVF : function(component, event, helper) {
        var vfBaseURL = component.get("v.vfBaseURL");
        var vfWindow = component.find("vfFrame").getElement().contentWindow;
		vfWindow.postMessage(component.get("v.message"), vfBaseURL);
	}
})