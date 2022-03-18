//var siteurl = document.location.protocol + "//192.168.0.37/mitul/sociamonials/";	// LOCAL
//var sm_share_button_url = document.location.protocol + "//192.168.0.37/mitul/sociamonials/share/";	// LOCAL 
//var sm_share_button_origin_url = document.location.protocol + "//192.168.0.37";	// LOCAL

var siteurl = document.location.protocol + "//www.sociamonials.com/";				// SERVER
var sm_share_button_url = document.location.protocol + "//www.sociamonials.com/share/";	// SERVER 
var sm_share_button_origin_url = document.location.protocol + "//www.sociamonials.com";	// SERVER

if(!document.getElementById('sm-share-button-external-popup-js')) {
	var sm_external_script_tag = document.createElement('script');
	sm_external_script_tag.setAttribute("type","text/javascript");
	sm_external_script_tag.setAttribute("src",sm_share_button_url+"js/popup.js");
	sm_external_script_tag.setAttribute("id","sm-share-button-external-popup-js");
	(document.getElementsByTagName("head")[0] || document.documentElement).appendChild(sm_external_script_tag);
}

if(!document.getElementById('sm-share-button-external-popup-css')) {
	var sm_external_link_tag = document.createElement('link');
	sm_external_link_tag.setAttribute("type","text/css");
	sm_external_link_tag.setAttribute("href",sm_share_button_url+"css/popup.css");
	sm_external_link_tag.setAttribute("id","sm-share-button-external-popup-css");
	sm_external_link_tag.setAttribute("rel","stylesheet");
	(document.getElementsByTagName("head")[0] || document.documentElement).appendChild(sm_external_link_tag);
}

function share_window(buttonid)
{
	sm_share_button_datacounter_status = SM_GetShareButtonCounterStatus(buttonid);
	
	var sm_share_button_blanket_div = document.createElement('div');
	sm_share_button_blanket_div.setAttribute("id","sm-share-button-blanket-"+buttonid);
	sm_share_button_blanket_div.setAttribute("data-id",buttonid);
	sm_share_button_blanket_div.setAttribute("class","sm-share-button-blanket");
	(document.getElementsByTagName("body")[0] || document.documentElement).appendChild(sm_share_button_blanket_div);

	var sm_share_button_popup_div = document.createElement('div');
	sm_share_button_popup_div.setAttribute("id","sm-share-button-popupdiv-"+buttonid);
	sm_share_button_popup_div.setAttribute("data-id",buttonid);
	sm_share_button_popup_div.setAttribute("class","sm-share-button-popupdiv");
	sm_share_button_popup_div.innerHTML = "";
	sm_share_button_popup_div.innerHTML += "<div class='sm-share-button-close'><a id='sm-share-button-close' data-id='"+buttonid+"'></a></div>";
	sm_share_button_popup_div.innerHTML += "<iframe id='sm-share-button-iframe-"+buttonid+"' src='"+sm_share_button_url+"share_btnwindow.php?id="+buttonid+"&datacounter="+sm_share_button_datacounter_status+"' frameborder='0' scrolling='no' width='288' height='250'></iframe>";
	(document.getElementsByTagName("body")[0] || document.documentElement).appendChild(sm_share_button_popup_div);
	
	sm_share_button_popup_window_pos(buttonid);
}
function SM_monitorClick(e)
{
	var evt = (e)?e:event;  
	var elemt = (evt.srcElement)?evt.srcElement:evt.target;
	var elemt_id = elemt.id;
	
	sm_share_button_popupdiv = document.querySelectorAll('.sm-share-button-popupdiv');
	sm_share_button_blanket = document.querySelectorAll('.sm-share-button-blanket');
	
	if(!elemt_id) {
		for (var index = 0; index < sm_share_button_popupdiv.length; index++) {
			document.body.removeChild(sm_share_button_popupdiv[index]);
		}
		for (var index = 0; index < sm_share_button_blanket.length; index++) {
			document.body.removeChild(sm_share_button_blanket[index]);
		}
	} else if(elemt_id=='sm-share-button-close') {
		sm_share_buttonid = elemt.getAttribute("data-id");
		document.body.removeChild(document.getElementById('sm-share-button-blanket-'+sm_share_buttonid));
		document.body.removeChild(document.getElementById('sm-share-button-popupdiv-'+sm_share_buttonid));
	}
}
document.onclick = SM_monitorClick;