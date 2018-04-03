//按钮轮播
{
	function wheel(parent){
		let pagers=parent.querySelectorAll(".xulie_yuan");
		const prev=parent.querySelector(".xulie_left");
		const next=parent.querySelector(".xulie_right");
		const inner=parent.querySelector(".rw_xiang_inner");
		
		console.dir(pagers)
		let n=0;
		next.onclick=function(){
			n++;
	
			
			if(n===3){
				n=2;
				return;
			}	
			inner.style.marginLeft=-1240*n+"px";
			pagers[n].classList.add("active");
			pagers[n-1].classList.remove("active");
			obj=pagers[n];
			
		}
		prev.onclick=function(){
			n--;
			if(n<0){
				n=0;
				return;
			}
			inner.style.marginLeft=-1240*n+"px";
			pagers[n].classList.add("active");
			pagers[n+1].classList.remove("active");
			obj=pagers[n];
	
		}
		let obj=pagers[0];
		pagers.forEach(function(ele,index){
			ele.onclick=function(){
				obj.classList.remove("active");
				ele.classList.add("active");
				obj=ele;
				n=index;
				inner.style.marginLeft=-1240*n+"px";
			}
			
		})}
		let items=document.querySelectorAll(".rw_xiang");
		items.forEach(function(ele){
			wheel(ele);
		})
}
//选项卡
{

	function content(parent){
	const types=parent.querySelectorAll(".type");
	const goods=parent.querySelectorAll(".content2_bottom");
	types.forEach(function(ele,index){
		ele.onmouseenter=function(){
			for(let i=0;i<types.length;i++){
				types[i].classList.remove("active");
				goods[i].classList.remove("active");
			}
			this.classList.add("active");
			goods[index].classList.add("active");
		}
	})
	}
	const contentList=document.querySelectorAll(".content2");
	contentList.forEach(function(ele){
		content(ele);
	})
}
