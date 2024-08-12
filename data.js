const table = document.getElementById("tableBody");
const editable = true;
const tableMaker = () =>{
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        const shop = JSON.parse(value);
        const row = document.createElement("tr")
        const customdata = `<td>${shop.name}</td>
            <td>${shop.Location}</td>
            <td>${shop.GoogleMap}</td>
            <td>${shop.ContactNumber}</td>
            <td><button id="${shop.UserId}" onClick=HandleEdit(${shop.UserId})>Edit</button></td>
            <td><button id="${shop.UserId}" onClick=HandleDelete(${shop.UserId})>Delete</button></td>`
        row.innerHTML = (customdata)
        table.appendChild(row)

}
} 
tableMaker()


const HandleDelete = (id) =>{
        localStorage.removeItem("formData"+id)
        window.location.reload()
}


const HandleEdit = (id) =>{

    let fd = "formData"+id
    let handledata = JSON.parse(localStorage.getItem(fd));
    console.log(handledata);

    const btn = document.getElementById("updateBtn");
    const uName = document.getElementById("updateName");
    const uLoc = document.getElementById("updateLocation");
    const uGM = document.getElementById("updateURL");
    const uContact = document.getElementById("updateContact");

    uName.value = handledata.name
    uLoc.value = handledata.Location
    uGM.value = handledata.GoogleMap
    uContact.value = handledata.ContactNumber

    btn.addEventListener('click',function(){
        const formData = {
        UserId :id,
        name :uName.value,
        Location : uLoc.value,
        GoogleMap:uGM.value,
        ContactNumber:uContact.value
     }
     console.log(formData)
    if(uName.value===""||uLoc.value===""|| uGM.value ==="" || uContact.value==="" ){
        alert("Missing values")
    }else{
    localStorage.setItem(fd ,JSON.stringify(formData));
    uName.value = ""
    uLoc.value = ""
    uGM.value = ""
    uContact.value = ""
    alert("Data Updated")
        window.location.reload()

    }})
    
}
