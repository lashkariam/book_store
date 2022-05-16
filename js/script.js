$(document).ready(function(){
    var user="";
    $('.mega-area .dropdown-item').click(function(){
        var se=$(this).html();
        $('.search-click').html(se)
    });
    
    $('.btn .badge').html("0")
    $('.book-body .card .btn').click(function(){
        var se=parseInt($('.btn .badge').html());
        sum=se+1;
        toString(se)
        $('.btn .badge').html(sum)
        console.log(sum)
    });
    $('.sell-bas .btn').click(function(){
        window.location="file:///C:/Users/Asus/Desktop/project/shop-cart.html"
    });
    $('.nav-item .btn-info').click(function(){
        window.location="file:///C:/Users/Asus/Desktop/project/search.html"
    });
    var phone=$("#phoneEnter");
    var phoneNum=$("#number");
    $('#phoneSub').click(function(){
        if(phone.val()==""){
            alert("شماره ا ی وارد نکردید")
        }
        else{
            phoneNum.val(phone.val())
        }
           
    });
    






});