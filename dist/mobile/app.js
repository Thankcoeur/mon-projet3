 var content =  $('.content')


 var h2 =  $('.menu  h2')






$( ".menu h2" ).click(function( ) {
  content.css('display',"none")
  console.log($(this).parent().children('.content').css('display','block'))
})