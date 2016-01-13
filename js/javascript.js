	var max=5;
	var now=1;

	function scroll(number){
		if(Number(number)){
			clearTimeout(t);
			now = number;
		}
		for(var i=1;i<=max;i++){
			if(now==i){
				document.getElementById("bg"+i).style.display="block";
				document.getElementById("bt"+i).style.background="rgba(214,45,1,.9)";
			}
			else{
				document.getElementById("bg"+i).style.display="none";
				document.getElementById("bt"+i).style.background="rgba(0,0,0,.9)";
			}
		}
		if(now==max)
			now=1;
		else
			now++;	
		t = setTimeout("scroll()",2000);
	}

	function postchange(number){
		for(var i=1;i<=4;i++){
			if(i==number){
				document.getElementById("artical-"+i).style.display="block";
			}
			else{
				document.getElementById("artical-"+i).style.display="none";
			}
		}
	}


	function schheadchange(number){
		for(var i=1;i<=2;i++){
			if(number==i){
				document.getElementById("sch-main-header-"+i).className="sch-main-header-01";
				document.getElementById("sch-main-"+i).style.display="block";
			}
			else{
				document.getElementById("sch-main-header-"+i).className="sch-main-header-0";
				document.getElementById("sch-main-"+i).style.display="none";
			}
		}
	}
	window.onload=function(){
		scroll();
		postchange(1);
		schheadchange(1);
	};