({
    doInit : function(component, event, helper) {
        var vfOrigin = "https://" + component.get("v.vfHost");
		window.addEventListener("message", function(event) {
			if (event.origin !== vfOrigin) {
				// Not the expected origin: reject message
				return;
			}
			// Only handle messages we are interested in
			if (event.data.name === "com.mycompany.chatmessage") {
				var vfMessages = component.get("v.vfMessages");
				vfMessages = vfMessages + event.data.payload + "\n";
				component.set("v.vfMessages", vfMessages);
			}
		}, false);
	},

	sendToVF : function(component, event, helper) {
        var vfOrigin = "https://" + component.get("v.vfHost");
		var vfWindow = component.find("vfFrame").getElement().contentWindow;
		var message = {
			name: "com.mycompany.chatmessage",
			payload: component.get("v.message")
		};
        vfWindow.postMessage(message, vfOrigin);
	}
})