function validateform(){  
    var name=document.myform.name.value;  
    var password=document.myform.password.value;  
      
    if (name==null || name==""){  
      alert("please enter the name");  
      return false;  
    }else if(password.length<=6 || password.length>=6){  
      alert("Password must be 6 characters");  
      return false;  
      }  
    }  
    