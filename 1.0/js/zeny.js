function tipwidget_zeny_createqr(to,amount,comment){
	var url =tipwidget_zeny_createurl(to,amount,comment);
	var qr = "http://chart.apis.google.com/chart?chs=547x547&cht=qr&chl="+encodeURIComponent(url);
	return qr;
}
function tipwidget_zeny_createurl(to,amount,comment){
	var to = encodeURIComponent(tipwidget_zeny_popup.to.value);
	var amount = tipwidget_zeny_popup.amount.value;
	var comment = encodeURIComponent(tipwidget_zeny_popup.comment.value);
	var url = "https://twitter.com/intent/tweet?text=%40zenyhime%20%e6%8a%95%e9%8a%ad%20"+to+"%20"+amount+"%20"+comment+"&hashtags=%e6%8a%95%e3%81%92%e9%8a%ad";
	return url;
}

function tipwidget_zeny_show()
{
	document.getElementById("tipwidget_zeny_back").style.display="block";
	document.getElementById("tipwidget_zeny_widget").style.display="block";

}

function tipwidget_zeny_close()
{
	document.getElementById("tipwidget_zeny_back").style.display="none";
	document.getElementById("tipwidget_zeny_widget").style.display="none";
}
function tipwidget_zeny_showqr()
{
	var to=encodeURIComponent(tipwidget_zeny_popup.to.value);
	var amount=tipwidget_zeny_popup.amount.value;
	var comment=encodeURIComponent(tipwidget_zeny_popup.comment.value);
	document.getElementById("tipwidget_zeny_qr").style.display="block";
	tipwidget_zeny_qr.src =tipwidget_zeny_createqr(to, amount, comment);
}
function tipwidget_zeny_tip()
{
	tipwidget_zeny_close();
	var to=encodeURIComponent(tipwidget_zeny_popup.to.value);
	var amount=tipwidget_zeny_popup.amount.value;
	var comment=encodeURIComponent(tipwidget_zeny_popup.comment.value);
	var url = tipwidget_zeny_createurl(to, amount, comment);
	window.open(url);
}





var dom = document.getElementById('tipwidget_zeny');

dom.insertAdjacentHTML('afterbegin',"<img src='https://soralis-nem.github.io/tipwidget/img/zeny.png' height='90' width='300' onclick='tipwidget_zeny_show ();'><div id='tipwidget_zeny_back' style='display: none;'></div><div id='tipwidget_zeny_widget' style='display: none;'><img src='https://soralis-nem.github.io/tipwidget/img/close.png'  id='tipwidget_zeny_close_button' onclick='tipwidget_zeny_close();'><form name='tipwidget_zeny_popup'  style='margin: 20px;'><div class='mui-textfield' name='input' ><input type='text' name='to' value='' required><label>送る相手</label></div><div class='mui-textfield' name='input' ><input type='text' name='amount' required><label>数量</label></div><div class='mui-textfield' name='input' ><input type='text' name='comment' ><label>コメント</label></div><button type='button' onclick='tipwidget_zeny_tip ();' class='mui-btn mui-btn--primary' >送る</button><button type='button' onclick='tipwidget_zeny_showqr ();' class='mui-btn mui-btn--primary' >QR</button></form><img src='' width='256' height='256' id='tipwidget_zeny_qr' style='display: none;' ></div>");
tipwidget_zeny_popup.to.value=document.getElementById( 'tipwidget_zeny_arg' ).getAttribute( 'to' );
tipwidget_zeny_popup.amount.value=document.getElementById( 'tipwidget_zeny_arg' ).getAttribute( 'amount' );
tipwidget_zeny_popup.comment.value=document.getElementById( 'tipwidget_zeny_arg' ).getAttribute( 'comment' );

