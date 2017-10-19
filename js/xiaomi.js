/*
* @Author: admin
* @Date:   2017-10-10 08:59:57
* @Last Modified by:   admin
* @Last Modified time: 2017-10-10 09:00:58
*/
	let bt1 = document.querySelectorAll(".jiadian1 .wenzi");
	let bb1 = document.querySelectorAll(".jiadian-bottom1");
	bt1.forEach(function(val,index){
		val.onmouseover = function(){
			for(let a = 0;a < bt1.length;a++){
			bt1[a].classList.remove("underline");
			bb1[a].style.display = "none";
			}
			val.classList.add("underline");
			bb1[index].style.display = "block";
		}
		
	})
	

