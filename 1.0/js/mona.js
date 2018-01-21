function tipwidget_mona_createqr(to,amount,comment){
	var url =tipwidget_mona_createurl(to,amount,comment);
	var qr = "http://chart.apis.google.com/chart?chs=547x547&cht=qr&chl="+encodeURIComponent(url);
	return qr;
}
function tipwidget_mona_createurl(to,amount,comment){
	var to = encodeURIComponent(tipwidget_mona_popup.to.value);
	var amount = tipwidget_mona_popup.amount.value;
	var comment = encodeURIComponent(tipwidget_mona_popup.comment.value);
	var url = "https://twitter.com/intent/tweet?text=%40tipmona%20tip%20"+to+"%20"+amount+"%20"+comment+"&hashtags=%e3%82%82%e3%81%aa%e3%81%92";
	return url;
}

function tipwidget_mona_show()
{
	document.getElementById("tipwidget_mona_back").style.display="block";
	document.getElementById("tipwidget_mona_widget").style.display="block";

}

function tipwidget_mona_close()
{
	document.getElementById("tipwidget_mona_back").style.display="none";
	document.getElementById("tipwidget_mona_widget").style.display="none";
}
function tipwidget_mona_showqr()
{
	var to=encodeURIComponent(tipwidget_mona_popup.to.value);
	var amount=tipwidget_mona_popup.amount.value;
	var comment=encodeURIComponent(tipwidget_mona_popup.comment.value);
	document.getElementById("tipwidget_mona_qr").style.display="block";
	tipwidget_mona_qr.src =tipwidget_mona_createqr(to, amount,comment);
}
function tipwidget_mona_tip()
{
	tipwidget_mona_close();
	var to=encodeURIComponent(tipwidget_mona_popup.to.value);
	var amount=tipwidget_mona_popup.amount.value;
	var comment=encodeURIComponent(tipwidget_mona_popup.comment.value);
	var url = tipwidget_mona_createurl(to, amount, comment);
	window.open(url);
}





	var dom = document.getElementById('tipwidget_mona');

	dom.insertAdjacentHTML('afterbegin',"<img src='https://soralis-nem.github.io/tipwidget/img/mona.png' height='90' width='300' onclick='tipwidget_mona_show ();'><div id='tipwidget_mona_back' style='display: none;'></div><div id='tipwidget_mona_widget' style='display: none;'><img src='https://soralis-nem.github.io/tipwidget/img/close.png'  id='tipwidget_mona_close_button' onclick='tipwidget_mona_close();'><form name='tipwidget_mona_popup' style='margin: 20px;'><div class='mui-textfield' name='input' ><input type='text' name='to' value='' required><label>送る相手</label></div><div class='mui-textfield' name='input' ><input type='text' name='amount' required><label>数量</label></div><div class='mui-textfield' name='input' ><input type='text' name='comment' ><label>コメント</label></div><button type='button' onclick='tipwidget_mona_tip ();' class='mui-btn mui-btn--primary' >送る</button><button type='button' onclick='tipwidget_mona_showqr ();' class='mui-btn mui-btn--primary' >QR</button></form><img src='' width='256' height='256' id='tipwidget_mona_qr' style='display: none;' ></div>");
	tipwidget_mona_popup.to.value=document.getElementById( 'tipwidget_mona_arg' ).getAttribute( 'to' );
	tipwidget_mona_popup.amount.value=document.getElementById( 'tipwidget_mona_arg' ).getAttribute( 'amount' );
	tipwidget_mona_popup.comment.value=document.getElementById( 'tipwidget_mona_arg' ).getAttribute( 'comment' );

