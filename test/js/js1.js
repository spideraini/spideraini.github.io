var div = document.getElementById("div");

	var zf = document.getElementById("zf");
	var cc= document.getElementById("cc");
	var hz = document.getElementById("hz");
	var zy = document.getElementById("zy");
	var gy = document.getElementById("gy");
	var mc = document.getElementById("mc");
	var z1 = document.getElementById("z1");
	var z2 = document.getElementById("z2");
	var z3 = document.getElementById("z3");
	var z4 = document.getElementById("z4");
	
	var score=document.getElementById("score");
//用1，2，3，4分别表示四种方块，在数组中的位置，代表它们排列的初始位置，9表示方块剩余部分的位置，可以忽略
var array=new Array(1,3,9,1,9,9,9,9,1,2,9,1,9,4,4,9,4,0,0,4);
//var array=new Array(4,0,0,4,1,3,9,1,9,9,9,9,1,2,9,1,9,4,4,9);
var flag=1;
var flag1=1;
for(var i=0;i<array.length;++i){ if(array[i]="==1){" if(flag="==1){" zf.style.left="(i%4)*100+5+"px";" zf.style.top="parseInt(i/4)*100+5+"px";" flag="2;" }="" else="" hz.style.left="(i%4)*100+5+"px";" hz.style.top="parseInt(i/4)*100+5+"px";" zy.style.left="(i%4)*100+5+"px";" zy.style.top="parseInt(i/4)*100+5+"px";" mc.style.left="(i%4)*100+5+"px";" mc.style.top="parseInt(i/4)*100+5+"px";" cc.style.left="(i%4)*100+5+"px";" cc.style.top="parseInt(i/4)*100+5+"px";" gy.style.left="(i%4)*100+5+"px";" gy.style.top="parseInt(i/4)*100+5+"px";" if(flag1="==1){" z1.style.left="(i%4)*100+5+"px";" z1.style.top="parseInt(i/4)*100+5+"px";" flag1="2;" z2.style.left="(i%4)*100+5+"px";" z2.style.top="parseInt(i/4)*100+5+"px";" z3.style.left="(i%4)*100+5+"px";" z3.style.top="parseInt(i/4)*100+5+"px";" z4.style.left="(i%4)*100+5+"px";" z4.style.top="parseInt(i/4)*100+5+"px";" var="" act="z1;" function="" z1_click(){="" z2_click(){="" z3_click(){="" z4_click(){="" zf_click(){="" cc_click(){="" hz_click(){="" zy_click(){="" gy_click(){="" mc_click(){="" array;="" px;="" py;="" count="0;" alert("z1");="" 判断当前获得焦点的控件="" div.onmousedown="function(e){" lx="parseInt(act.style.left);" rx="parseInt(act.style.left)+parseInt(act.style.width);" uy="parseInt(act.style.top);" dy="parseInt(act.style.top)+parseInt(act.style.height);" if(!e)="" e="window.event;" px="e.clientX;" py="e.clientY;" if((px="">rx)&&(py>uy)&&(py<dy)){ px="lx+100;" py="uy;" ++count;="" }="" else="" if((px<lx)&&(py="">uy)&&(py<dy)){ px="lx-100;" py="uy;" ++count;="" }="" else="" if((px="">lx)&&(px<rx)&&(py<uy)){ px="lx;" py="uy-100;" ++count;="" }="" else="" if((px="">lx)&&(px<rx)&&(py>dy)){
 			px=lx;
 			py=uy+100;
			++count;
 			
 		}
 		else{
 			px=lx;
 			py=uy;
 		}
 		score.textContent="已走步数："+count;
	}
	
	
	

 
 

div.onmouseup = function()
{
	/*var x=parseInt(act.style.left+act.style.width);
	var y1=parseInt(act.style.top);
	var y2=parseInt(act.style.top+act.style.height);
	alert(px+","+x);
	alert(py+","+y1+","+y2);*/
    act.style.left=px+"px";
	act.style.top=py+"px";
	if((parseInt(cc.style.left)===105)&&(parseInt(cc.style.top)===305)){
		alert(count);
	}
}

//检测当前点击位置是否能容纳下要移动的方块
function volume(/*var px,var py,var divbtn*/){
	//当前鼠标点击位置转换为数组坐标
	var i=parseInt(px/100)+1
	var j=parseInt(py/100)+1
	var width=parseInt(divbtn.style.width)/100
	var height=parseInt(divbtn.style.height)/100
	var uy=parseInt(act.style.top)/100;
	var lx=parseInt(act.style.left)/100;
	
	
	return false;
	
}



</rx)&&(py></rx)&&(py<uy)){></dy)){></dy)){></array.length;++i){>