$(document).ready(function() {
    $('.example').DataTable( {
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
        
    } );
   
      $('.edit').click(function(){
      var id=$(this).val();
      $.post("/edit",{no:id},function(data){
      var a=JSON.stringify(data);
      var pd=JSON.parse(a);
      //alert(pd[0]._id);
      //alert(pd[0].description);
      $("#id").val(pd[0]._id);
      $("#teamsize").val(pd[0].Teamsize); 
      $("#breakfast").val(pd[0].breakfast);
      $("#breakfasttype").val(pd[0].breakfasttype);
      $("#veglunch").val(pd[0].vegluch);
      $("#nonveglunch").val(pd[0].nonveglunch);
      $("#nonveglunchtype").val(pd[0].nonveglunchtype);
      $("#snacks").val(pd[0].snacks);
      $("#tea").val(pd[0].tea);
      $("#coffee").val(pd[0].coffee);
      $("#vegdinner").val(pd[0].vegdinner);
      $("#nonvegdinner").val(pd[0].nonvegdinner);
      $("#nonvegdinnertype").val(pd[0].nonvegdinnertype);
      $("#amount").val(pd[0].amount);
      });
    });
    $(".remove").click(function(){
   var id = $(this).val();
   $.post("/remove",{no:id},function(data){
    location.reload('/');
   });
   });
   $(".download").click(function(){
    var id=$(this).val();
  });
});