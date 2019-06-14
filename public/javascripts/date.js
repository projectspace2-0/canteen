$(document).ready(function(){
	//alert('hi');
	$("#datereport").click(function(){
	    var from=$("#yesterdaydate").val();
          //alert(from);
	    var to=$("#todaydate").val();
	      //(to);
		$.post('/report', {"from":from, "to":to}, function(data){
          alert('success');
          var jsondata1=JSON.stringify(data);
          alert(jsondata1);
			$.each($.parseJSON(jsondata1),function(i,v){
			        var listtable = $('.data1').DataTable();
			        listtable.row.add( [
			            v.description,
			            v.date,
			            v.Teamsize,
			            v.breakfast,
			            v.veglunch,
			            v.nonveglunch,
			            v.snacks,
			            v.tea,
			            v.coffee,
			            v.vegdinner,
			            v.nonvegdinner,
			            v.amount,
			          ] ).draw(false);            
			});
		});
    });
});