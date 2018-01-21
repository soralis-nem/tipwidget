function tipwidget_nem_createqr(to,amount,name,comment){
	var url =tipwidget_nem_createurl(to,amount,name,comment);
	var qr = "http://chart.apis.google.com/chart?chs=547x547&cht=qr&chl="+encodeURIComponent(url);
	return qr;
}
function tipwidget_nem_createurl(to,amount,name,comment){
	var to = encodeURIComponent(tipwidget_nem_popup.to.value);
	var amount = tipwidget_nem_popup.amount.value;
	var name = encodeURIComponent(tipwidget_nem_popup.name.value);
	var comment = encodeURIComponent(tipwidget_nem_popup.comment.value);
	var url = "https://twitter.com/intent/tweet?text=%40tipnem%20tip%20"+to+"%20"+amount+"%20"+name+"%20"+comment+"&hashtags=tipnem";
	return url;
}

function tipwidget_nem_show()
{
	document.getElementById("tipwidget_nem_back").style.display="block";
	document.getElementById("tipwidget_nem_widget").style.display="block";

}

function tipwidget_nem_close()
{
	document.getElementById("tipwidget_nem_back").style.display="none";
	document.getElementById("tipwidget_nem_widget").style.display="none";
}
function tipwidget_nem_showqr()
{
	var to=encodeURIComponent(tipwidget_nem_popup.to.value);
	var amount=tipwidget_nem_popup.amount.value;
	var name=encodeURIComponent(tipwidget_nem_popup.name.value);
	var comment=encodeURIComponent(tipwidget_nem_popup.comment.value);
	document.getElementById("tipwidget_nem_qr").style.display="block";
	tipwidget_nem_qr.src = tipwidget_nem_createqr(to, amount, name, comment);
}
function tipwidget_nem_tip()
{
	tipwidget_nem_close();
	var to=encodeURIComponent(tipwidget_nem_popup.to.value);
	var amount=tipwidget_nem_popup.amount.value;
	var name=encodeURIComponent(tipwidget_nem_popup.name.value);
	var comment=encodeURIComponent(tipwidget_nem_popup.comment.value);
	var url = tipwidget_nem_createurl(to, amount, name, comment);
	window.open(url);
}



	var dom = document.getElementById('tipwidget_nem');

	dom.insertAdjacentHTML('afterbegin',"<img src='https://soralis-nem.github.io/tipwidget/img/nem.png' height='90' width='300' onclick='tipwidget_nem_show ();'><div id='tipwidget_nem_back' style='display: none;'></div><div id='tipwidget_nem_widget' style='display: none;'><img src='https://soralis-nem.github.io/tipwidget/img/close.png'  id='tipwidget_nem_close_button' onclick='tipwidget_nem_close();'><form name='tipwidget_nem_popup'  style='margin: 20px;'><div class='mui-textfield' name='input' ><input type='text' name='to' value='' required><label>送る相手</label></div><div class='mui-textfield' name='input' ><input type='text' name='amount' required><label>数量</label></div><div class='mui-textfield' name='input' ><input type='text' name='name'  required><label>mosaic名</label></div><div class='mui-textfield' name='input' ><input type='text' name='comment' ><label>コメント</label></div><button type='button' onclick='tipwidget_nem_tip ();' class='mui-btn mui-btn--primary' >送る</button><button type='button' onclick='tipwidget_nem_showqr ();' class='mui-btn mui-btn--primary' >QR</button></form><img src='' width='256' height='256' id='tipwidget_nem_qr' style='display: none;' ></div>");
	tipwidget_nem_popup.to.value=document.getElementById( 'tipwidget_nem_arg' ).getAttribute( 'to' );
	tipwidget_nem_popup.amount.value=document.getElementById( 'tipwidget_nem_arg' ).getAttribute( 'amount' );
	tipwidget_nem_popup.name.value=document.getElementById( 'tipwidget_nem_arg' ).getAttribute( 'name' );
	tipwidget_nem_popup.comment.value=document.getElementById( 'tipwidget_nem_arg' ).getAttribute( 'comment' );

