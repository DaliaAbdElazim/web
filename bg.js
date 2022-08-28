localStorage.setItem('color', JSON.stringify("#9b59b6"));
function x() {
    var color = document.getElementById("color").value;
    var c = document.getElementsByClassName("bgGround");
    localStorage.setItem('color', JSON.stringify(color))
    console.log(color);
    console.log(c);
}

function SHOW_LOCALSTORAGE() {
    document.getElementById('usersTable').innerHTML = ` <thead>
    <th>Email</th>
    <th>Password</th>
</thead>`
    var retrievedArray = JSON.parse(localStorage.getItem("x"));
    for (let i = 0; i < retrievedArray.length; i++) {
        document.getElementById('usersTable').innerHTML += `<tr><td>${retrievedArray[i].email}</td>
            <td>${retrievedArray[i].password}</td></tr>`
    }
}