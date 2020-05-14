function writed(x){
	var ek = $(x).html();
	var yazi = $('.grid-item1').html();
	if(ek == "x"){
		ek = "*";
	}
	yazi += ek;
	$('.grid-item1').html(yazi);
}
function hesapla(){
	var hesap = eval($('.grid-item1').html());
	$('.grid-item1').html(hesap);
}
function c(){
	$('.grid-item1').html("");
}
function del(){
	var text = $('.grid-item1').html();
	var res = text.toString().substr(0, text.toString().length - 1);
	$('.grid-item1').html(res);
}
function sqrt(){
	var yazi = $('.grid-item1').html();
	$('.grid-item1').html(Math.sqrt(yazi));
}
function oneDivide(){
	var yazi = 1/$('.grid-item1').html();
	var sonuc = eval(yazi);
	$('.grid-item1').html(sonuc);
}
function pow(){
	var yazi = $('.grid-item1').html();
	var sonuc = Math.pow(yazi,2);
	$('.grid-item1').html(sonuc);
}
function convert(){
	var yazi = $('.grid-item1').html();
	var sonuc = yazi*-1;
	$('.grid-item1').html(sonuc);
}