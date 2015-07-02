document.querySelector("#submit").addEventListener("click",function(evt) {
    window.scroll(0,0);
    evt.preventDefault();
    if(document.getElementById("class").value == "") {
        alert("请输入班级");
    }
    if(document.getElementById("name").value == "") {
        alert("请输入姓名");
    }
    if(document.getElementById("id").value == "") {
        alert("请输入学号");
    }if(isNaN(document.getElementById("id").value)){
        alert("请输入数字");
    }else {
        document.getElementById("score").value = comparison();
    }
    isText();
});
