$(document).ready(function(){
    var name=$("#name");
    var lname=$("#lname");
    var email=$("#email-address");
    var pass=$("#Password");
    var conf=$("#confirm");
   

    $("#send").click(function(e){
        var info={
            firstName :name.val(),
            lastname:lname.val(),
            email:email.val(),
            password:pass.val(),
            confirm:conf.val()
        };
        if (info.firstName =="" || info.lastname=="" || info.lastname=="" || info.lastname=="" || info.lastname==""){
            alert("لطفا فیلد های خالی را پر کنید")
        }
        else if (info.password != info.confirm){
            alert("رمز عبور و تکرار آن با هم هم خوانی ندارند")
        }
        else{

            $.ajax({
                method:"post",
                url:"http://localhost:3000/users",
                data:info,
                success : function(user){
                    alert(user.firstName +"جان به سایت 30book خوش آمدی");
                    setTimeout(() => {
                        goHome();
                    }, 1000);
                },
                erorr:function(){
                    alert("با عرض معذرت مشکلی در سمت سرور پیش آمده")
                }

            })
        }
        function goHome(){
            location.href="file:///C:/Users/Asus/Desktop/project/index.html";
        }

    })
})