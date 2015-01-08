// Code goes here

$(document).ready(function(){


	//呼叫初始選單
	ResetSelect();


	//JQUERY取得選擇值, 若是修改月份就要重算日的天數
	$(".YearPicker").change(function(){
		var picked = $(".MonthPicker").find('option:selected').text();
		var nowyear = $(this).find('option:selected').text();
		var nowmonth = picked;

		var stryear = nowyear.toString();
		var strmonth = nowmonth.toString();

		//重設日值
		CreateDayOptions(stryear, strmonth);
		$(".DayPicker").val("01");
	});


	$(".MonthPicker").change(function(){

		var picked = $(this).find('option:selected').text();
		var nowyear = $(".YearPicker").find('option:selected').text();
		var nowmonth = picked;

		var stryear = nowyear.toString();
		var strmonth = nowmonth.toString();

		//重設日值
		CreateDayOptions(stryear, strmonth);
		$(".DayPicker").val("01");
	});


	$(".DayPicker").change(function(){
		var picked = $(this).find('option:selected').text();
	});
});


// 初始選單
function ResetSelect(){

	//取得今年的日期
	var d = new Date();
	var nowyear = d.getFullYear();
	var nowmonth = d.getMonth() + 1;
	var nowday = d.getDate();

	var stryear = nowyear.toString();
	var strmonth = nowmonth.toString();

	//產生年選項
	for(year = 1880; year <= (nowyear+1); year++){
		var syear = year.toString();
		$(".YearPicker").append($("<option></option>").attr("value", syear).text(syear));
	}

	//產生月選項
	for(month = 1; month <= 12; month++){
		var zpmonth = zeropadding(month);
		$(".MonthPicker").append($("<option></option>").attr("value", zpmonth).text(zpmonth));
	}

	//產生日選項 (注意閏年和單雙月)
	CreateDayOptions(stryear, strmonth);

	//預設為今天的日期
	$(".YearPicker").val(stryear);
	$(".MonthPicker").val(zeropadding(nowmonth));
	$(".DayPicker").val(zeropadding(nowday));
};


function zeropadding(digit){
	return ("0" + digit.toString()).slice(-2);
};


function CreateDayOptions(stryear, strmonth){
	$(".DayPicker").empty();

	var daynum = 31;
	if(strmonth == "02"){
		if((parseInt(stryear)%4==0 && parseInt(stryear)%100!=0) || (parseInt(stryear)%400==0))
			daynum = 29;
		else
			daynum = 28;
	}
	else if(strmonth == "04" || strmonth == "06" || strmonth == "09" || strmonth == "11"){
		daynum = 30;
	}

	for(day = 1; day <= daynum; day++){
		var zpday = zeropadding(day);
		$(".DayPicker").append($("<option></option>").attr("value", zpday).text(zpday));
	}
};
