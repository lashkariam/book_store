$(document).ready(function(){
    var em = $("#login-email");
    var pass = $("#login-pass");
    $("#auth").click(function(){
       var emai=em.val();
       var passwor=pass.val();
        if (emai=="" || passwor==""){
            alert("لطفا فیلد های خالی را پر کنید")
        }else{
            $.ajax({
                method:"get",
                url:"http://localhost:3000/users",
                success:function(users){
                    $.each(users,function(i,user){
                        if (user.email==emai&&user.password==passwor){
                            alert(user.firstName +"جان به سایت 30book خوش آمدی");
                            setTimeout(() => {
                                location.href="file:///C:/Users/Asus/Desktop/project/index.html";
                            }, 1000);
                        }
                        else{
                            var r = confirm("شما هنوز در سایت ثبت نام نکردید آیا میخواهید ثبت نام کنید؟");
                            if (r == true) {
                                location.href="file:///C:/Users/Asus/Desktop/project/register.html";
                            }
                        }
                    })
                }

            });
        }
    })
})