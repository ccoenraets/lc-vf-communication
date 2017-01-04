({
  	recordChangeHandler : function(component, event) {
		var id = event.getParam("recordId");
		component.set("v.recordId", id);
		var service = component.find("service");
		service.reloadRecord();
	},
    
  	propertyChangeHandler : function(component, event) {
		var property = component.get("v.property");
        var vfOrigin = "https://" + component.get("v.vfHost");
		var vfWindow = component.find("vfFrame").getElement().contentWindow;
		vfWindow.postMessage(property, vfOrigin);
	}
})