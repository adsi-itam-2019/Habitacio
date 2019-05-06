
    function click_login(){


        var  imail=document.getElementById("e-mail-box").value;
        var pos = imail.search("@itam");
        
        if (pos!=-1) {
        	window.open("buscar.html","_top");
        	window.alert(pos);
           
        }else{
        	
      	  	window.open("mispropiedades.html","_top");
      	  	window.alert(100);
        }    
    }