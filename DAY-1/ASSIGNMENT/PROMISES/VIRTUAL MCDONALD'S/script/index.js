function ValidateSelection()  
{  
    var cb = document.getElementsByName("veggies");  
    var CheckedItems = 0; 
    for(var i = 0; i < cb.length; i++)  
    {  
        if(cb[i].checked)  
            CheckedItems++;  
    }  
    if(CheckedItems > 2){  
        alert("You can't select more than three veggies!");  
        return false;}  
}  