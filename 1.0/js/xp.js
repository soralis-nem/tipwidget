function tipwidget_xp_createqr(to,amount,comment){
	var url =tipwidget_xp_createurl(to,amount,comment);
	var qr = "http://chart.apis.google.com/chart?chs=547x547&cht=qr&chl="+encodeURIComponent(url);
	return qr;
}
function tipwidget_xp_createurl(to,amount,comment){
	var to = encodeURIComponent(tipwidget_xp_popup.to.value);
	var amount = tipwidget_xp_popup.amount.value;
	var comment = encodeURIComponent(tipwidget_xp_popup.comment.value);
	var url = "https://twitter.com/intent/tweet?text=%40tip_XPchan%20tip%20"+to+"%20"+amount+"%20"+comment+"&hashtags=tipxp";
	return url;
}

function tipwidget_xp_show()
{
	document.getElementById("tipwidget_xp_back").style.display="block";
	document.getElementById("tipwidget_xp_widget").style.display="block";

}

function tipwidget_xp_close()
{
	document.getElementById("tipwidget_xp_back").style.display="none";
	document.getElementById("tipwidget_xp_widget").style.display="none";
}
function tipwidget_xp_showqr()
{
	var to=encodeURIComponent(tipwidget_xp_popup.to.value);
	var amount=tipwidget_xp_popup.amount.value;
	var comment=encodeURIComponent(tipwidget_xp_popup.comment.value);
	document.getElementById("tipwidget_xp_qr").style.display="block";
	tipwidget_xp_qr.src =tipwidget_xp_createqr(to, amount, comment);
}
function tipwidget_xp_tip()
{
	tipwidget_xp_close();
	var to=encodeURIComponent(tipwidget_xp_popup.to.value);
	var amount=tipwidget_xp_popup.amount.value;
	var comment=encodeURIComponent(tipwidget_xp_popup.comment.value);
	var url = tipwidget_xp_createurl(to, amount, comment);
	window.open(url);
}





var dom = document.getElementById('tipwidget_xp');

dom.insertAdjacentHTML('afterbegin',"<img src='https://soralis-nem.github.io/tipwidget/img/xp.png' height='90' width='300' onclick='tipwidget_xp_show ();'><div id='tipwidget_xp_back' style='display: none;'></div><div id='tipwidget_xp_widget' style='display: none;'><img src='https://soralis-nem.github.io/tipwidget/img/close.png'  id='tipwidget_xp_close_button' onclick='tipwidget_xp_close();'><form name='tipwidget_xp_popup'  style='margin: 20px;'><div class='mui-textfield' name='input' ><input type='text' name='to' value='' required><label>送る相手</label></div><div class='mui-textfield' name='input' ><input type='text' name='amount' required><label>数量</label></div><div class='mui-textfield' name='input' ><input type='text' name='comment' ><label>コメント</label></div><button type='button' onclick='tipwidget_xp_tip ();' class='mui-btn mui-btn--primary' >送る</button><button type='button' onclick='tipwidget_xp_showqr ();' class='mui-btn mui-btn--primary' >QR</button></form><img src='' width='256' height='256' id='tipwidget_xp_qr' style='display: none;' ></div>");
tipwidget_xp_popup.to.value=document.getElementById( 'tipwidget_xp_arg' ).getAttribute( 'to' );
tipwidget_xp_popup.amount.value=document.getElementById( 'tipwidget_xp_arg' ).getAttribute( 'amount' );
tipwidget_xp_popup.comment.value=document.getElementById( 'tipwidget_xp_arg' ).getAttribute( 'comment' );

