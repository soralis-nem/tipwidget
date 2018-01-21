function tipwidget_verge_createqr(to,amount){
	var url =tipwidget_verge_createurl(to,amount);
	var qr = "http://chart.apis.google.com/chart?chs=547x547&cht=qr&chl="+encodeURIComponent(url);
	return qr;
}
function tipwidget_verge_createurl(to,amount){
	var to = encodeURIComponent(tipwidget_verge_popup.to.value);
	var amount = tipwidget_verge_popup.amount.value;
	var url = "https://twitter.com/intent/tweet?text=%40vergetips%20tip%20"+to+"%20"+amount;
	return url;
}

function tipwidget_verge_show()
{
	document.getElementById("tipwidget_verge_back").style.display="block";
	document.getElementById("tipwidget_verge_widget").style.display="block";

}

function tipwidget_verge_close()
{
	document.getElementById("tipwidget_verge_back").style.display="none";
	document.getElementById("tipwidget_verge_widget").style.display="none";
}
function tipwidget_verge_showqr()
{
	var to=encodeURIComponent(tipwidget_verge_popup.to.value);
	var amount=tipwidget_verge_popup.amount.value;
	document.getElementById("tipwidget_verge_qr").style.display="block";
	tipwidget_verge_qr.src =tipwidget_verge_createqr(to, amount);
}
function tipwidget_verge_tip()
{
	tipwidget_verge_close();
	var to=encodeURIComponent(tipwidget_verge_popup.to.value);
	var amount=tipwidget_verge_popup.amount.value;
	var url = tipwidget_verge_createurl(to, amount);
	window.open(url);
}





var dom = document.getElementById('tipwidget_verge');
dom.insertAdjacentHTML('afterbegin',"<img src='https://soralis-nem.github.io/tipwidget/img/verge.png' height='90' width='300' onclick='tipwidget_verge_show ();'><div id='tipwidget_verge_back' style='display: none;'></div><div id='tipwidget_verge_widget' style='display: none;'><img src='https://soralis-nem.github.io/tipwidget/img/close.png'  id='tipwidget_verge_close_button' onclick='tipwidget_verge_close();'><form name='tipwidget_verge_popup'  style='margin: 20px;'><div class='mui-textfield' name='input' ><input type='text' name='to' value='' required><label>送る相手</label></div><div class='mui-textfield' name='input' ><input type='text' name='amount' required><label>数量</label></div><button type='button' onclick='tipwidget_verge_tip ();' class='mui-btn mui-btn--primary' >送る</button><button type='button' onclick='tipwidget_verge_showqr ();' class='mui-btn mui-btn--primary' >QR</button></form><img src='' width='256' height='256' id='tipwidget_verge_qr' style='display: none;' ></div>");
tipwidget_verge_popup.to.value=document.getElementById( 'tipwidget_verge_arg' ).getAttribute( 'to' );
tipwidget_verge_popup.amount.value=document.getElementById( 'tipwidget_verge_arg' ).getAttribute( 'amount' );

