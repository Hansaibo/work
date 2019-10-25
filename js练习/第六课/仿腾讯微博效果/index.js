/*-----------
   获取id,class,tagName
 * */
var get = {
	byId: function(id){
	    return typeof id ==="string" ? document.getElementById(id) : id
	},
	byClass: function(sClass,oParent){
		var aClass = [];
		var reClass = new RegExp("(^|)" + sClass + "(|$)");
		var aElem = this.byTagName("*",oParent);
		for(var i = 0; i <aElem.length;i++){
			reClass.test(aElem[i].className) && aClass.push(aElem[i]);
			return aClass;
		}
	},
	byTagName: function(elem,obj){
		return (obj || document).getElementsByTagName(elem);
	}
}; 

/*
 事件绑定，删除
 * */

var EventUtil = {
	 addHandler : function(oElement,sEvent,fnHandler){
	 	oElement.addEventListener ? oElement.addEventListener(sEvent,fnHandler,false) 
	 	: (oElement["-" + sEvent + fnHandler] = fnHandler, oElement[sEvent + fnHandler] = function(){oElement["-" + sEvent + fnHandler]()},
	 	  oElement.attachEvent("on" + sEvent, oElement[sEvent + fnHandler]))
	 },
	 removeHandler : function(oElement,sEvent,fnHandler){
	 	oElement.removeEventListener ? oElement.removeEventListener(sEvent,fnHandler,false) : oElement.detachEvent("on" + sEvent,oElement[sEvent + fnHandler])
	 },
	 addLoadHandler : function(fnHandler){
	 	this.addHandler(window,"load",fnHandler)
	 }
};
