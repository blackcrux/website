$(document).ready(function() {
    $('#sub').click(function(){
        var recipient1 = $('#email').val()
        var name1 = $('#name').val()
        var subject1 = $('#subject').val()
        var message1 = $('#message').val()

        
      $.ajax({
        type: "POST",
        url: "http://18.224.72.121:8080/sendmail/v1/html",
        data: 
        {
            recipient : recipient1,
            name : "BLACKCRUX",
            sub : "[noReply] BlackCrux Query Response",
            html : "<html><body><h1>HI "+name1+"</h1><br><p>We have recieved your query realated to "+subject1+". We will reach you out shortly.</p><br><br>"
            +"<small>This is an auto generated email please do not reply</small></body><html>"
        },
        cache: false,
        success: function(data){
            $("#sendmessage").addClass("show");
            $("#errormessage").removeClass("show");
        },
        error: function(data) {
            $("#sendmessage").removeClass("show");
            $("#errormessage").addClass("show");
            $('#errormessage').html(msg);
        }
      });

      $.ajax({
        type: "POST",
        url: "http://18.224.72.121:8080/sendmail/v1/html",
        data: 
        {
            recipient : "info@blackcrux.com",
            name : 'INFO BlackCrux',
            sub : "Customer Query",
            html : "<html><body><br><h1>NAME: </h1>"+name1+"<br><h1>EMAIL: </h1>"+recipient1+"<br><h1>SUBJECT: "+subject1+"<br><h1>MESSAGE: </h1><p>"+message1+"</p></body></html>"
        },
        cache: false,
        success: function(data){
           $("#resultarea").text(data);
        },
        error: function(data) {
            console.log(data)
        }
      });
    })
})