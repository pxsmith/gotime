function fn(t){for(var e=tooltip.length;e--;)tooltip[e].style.left=t.pageX+"px",tooltip[e].style.top=t.pageY+"px"}var tooltip=document.querySelectorAll(".desc");document.addEventListener("mousemove",fn,!1);