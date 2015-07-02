document.querySelector("#submit").addEventListener("click",function(evt) {
    evt.preventDefault();
    if(document.getElementById("class").value == "") {
        alert("请输入班级");
    }
    if(document.getElementById("name").value == "") {
        alert("请输入姓名");
    }
    if(document.getElementById("id").value == "") {
        alert("请输入学号");
    }else {
        document.getElementById("score").value = comparison();
    }
});
