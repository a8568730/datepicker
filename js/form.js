$(document).ready(function(){

	//按下送出後，顯示輸入的時間與資料{"time":..., "texts":...}
	$("#myForm").submit(function(){
		var $inputs = $('#myForm input');
		var arr = {};

		arr["texts"] = new Array();

		$inputs.each(function() {
			var value = $(this).val();
			//若是空字串就不顯示
			if(value != ""){
				arr["texts"].push(value);
			};
		})
		.promise()
		.done(function(){
			arr["times"] = new Array();
			arr["times"].push($(".YearPicker").val() + $(".MonthPicker").val() + $(".DayPicker").val());

			console.log(arr["times"]);
			console.log(arr["texts"]);
		});
	});
});

