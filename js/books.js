$(document).ready(function(){
    $(".dropdown-item").click(function(e){
        e.preventDefault();
        var sub=$(this).html();
        $.ajax({
            type:"get",
            url:"http://localhost:3000/books?sub-name="+sub ,
            contentType: "text/plain",
            dataType: "json",
            success:function(books){
                var tex='';
                for(var i=0;i<books.length;i++){

                    tex+='<div class="col-sm-12 col-md-4 col-lg-3">\
                    <div class="card">\
                     <div class="p-2">\
                       <img src="'+ books[i].img +'" class="card-img-top" alt="...">\
                     </div>\
                     <div class="card-body">\
                       <div class="font-weight-bolder">\
                         <p>ناشر : <span>'+ books[i].nashr +'</span></p>\
                         <p>'+ books[i].name +'</p>\
                       </div>\
                       <div class="price">\
                         <p><del><span>'+ books[i].old +'</span>ریال</del></p>\
                         <p><span>'+ books[i].new +'</span>ریال</p>\
                       </div>\
                       <button class="btn btn-primary book_btn btn-block"><i class="fas fa-shopping-bag ml-2"></i>خرید کالا</button>\
                     </div>\
                    </div>\
                  </div>'

                }
                $(".book-body .row").html(tex);
            }
        })
    })
    
})