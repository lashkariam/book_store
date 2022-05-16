$(document).ready(function(){

    $("#single3").change(function(){
        var subject=$(this).val();
        $.ajax({
            method:"get",
            url:"http://localhost:3000/subjects",

            success:function(data){
                for(var i=0 ;i<data.length;i++){
                    if (data[i].id==subject){
                        var txt="";
                        for(var j=0;j<data[i].book.length;j++){
                            txt+="<option value="+j+">" +data[i].book[j]+ "</option>"
                            $("#ori-subject , #sec-subject").html(txt)
                        }
                    }
                }
            },
            
        })
    });
    
   
})