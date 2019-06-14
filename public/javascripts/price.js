$(document).ready(function(){
//alert('hi');
 // $('#breakfast').val();
 // $('#breakfasttype').val();
 // $('#veglunch').val();
 // $('#nonveglunch').val();
 // $('#nonveglunchtype').val();
 // $('#snacks').val();
 // $('#tea').val();
 // ;$('#coffee').val()
 // $('#vegdinner').val();
 // $('#nonvegdinner').val();
 // $('#nonvegdinnertype').val();
 // $('#poo').val();
 // $('#dosa').val();
 // $('#idl').val();
 // $('#vegl').val();
 // $('#cdb)'.val();
 // $('#mb').val();      
 // $('#mib').val();      
 // $('#cfpb').val();      
 // $('#sna').val();
 // $('#tea').val();      
 // $('#cof').val(); 
 // $('#vegd').val();
 // $('#cdbd').val();
 // $('#mbd').val();
 // $('#mibd').val();
 // $('#cfpbd').val();
$('.sub').click(function() {
      if ($("#breakfasttype").val()=="idly") {
            Breakfast_price =($("#breakfast").val())*($('#idl').val());
      }
      else if($("#breakfasttype").val()=="poori"){
            Breakfast_price =($("#breakfast").val())*($('#poo').val());     
      }
      else{
            Breakfast_price =($("#breakfast").val())*($('#dosa').val());   
      }
      if ($("#nonveglunchtype").val()=="chicken dum biryani") {
            nlunch_price =($('#nonveglunch').val())*($('#cdb').val());
      }
      else if($("#nonveglunchtype").val()=="mutton biryani") {
            nlunch_price =($('#nonveglunch').val())*($('#mb').val());
      }
      else if($("#nonveglunchtype").val()=="mixed biryani") {
            nlunch_price =($('#nonveglunch').val())*($('#mib').val());
      }
      else{
            nlunch_price =($('#nonveglunch').val())*($('#cfpb').val());
      }
       if ($("#nonvegdinnertype").val()=="chicken dum biryani") {
            ndinner_price =($('#nonvegdinner').val())*($('#cdb').val());
      }
      else if($("#nonvegdinnertype").val()=="mutton biryani") {
            ndinner_price =($('#nonvegdinner').val())*($('#mb').val());
      }
      else if($("#nonvegdinnertype").val()=="mixed biryani") {
            ndinner_price =($('#nonvegdinner').val())*($('#mib').val());
      }
      else{
            ndinner_price =($('#nonvegdinner').val())*($('#cfpb').val());
      }
      var vlunch_price =($('#veglunch').val())*($('#vegl').val());
      var vdinner_price =($('#vegdinner').val())*($('#vegl').val());
      var snacks=(($('#snacks').val())*($('#sna').val()));
      var tea=(($('#tea').val())*($('#tea').val()));
      var coffee=(($('#coffee').val())*($('#cof').val()));
      //alert($('#cof').val());
      //alert(vlunch_price);
      //alert(vdinner_price);
      //alert(tea);
      //alert(coffee);
      //alert(Breakfast_price+nlunch_price+ndinner_price+vlunch_price+vdinner_price+snacks+tea+coffee);
      //alert(Breakfast_price);
      //alert(Breakfast_price+nlunch_price+ndinner_price);
      var amount = Breakfast_price+nlunch_price+ndinner_price+vlunch_price+vdinner_price+snacks+tea+coffee;
      $('.amount').val(amount);      
});
});