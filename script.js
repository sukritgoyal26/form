
document.getElementById('Storeform').addEventListener('submit', function(e) {e.preventDefault();
    let name = document.getElementById("ShopName").value;
    let Location = document.getElementById("Location").value;
    let GoogleMap = document.getElementById("GoogleMap").value;
    let ContactNumber = document.getElementById("ContactNumber").value;
    const formData = {
        UserId :Date.now(),
        name :name,
        Location : Location,
        GoogleMap:GoogleMap,
        ContactNumber:ContactNumber
    }
    if(name===""||location===""|| GoogleMap ==="" || ContactNumber==="" ){
        alert("Missing values")
    }else{
    localStorage.setItem('formData'+ Date.now() ,JSON.stringify(formData));

    alert("Data saved in storage")

    document.getElementById("Storeform").reset();    
    }
    
});