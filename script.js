$(document).ready(function(){
	console.log("ready");


	var temp_y = 0;
	var flag = 1;
	var shakepoint = 0;


	var shake = function(){ // 폰을 좌우로 흔듬에 따라 shakepoint가 +1 씩 증가한다.


		if(temp_y > 3 && flag === -1){ // 여기서 flag는 만약 한쪽으로 폰을 기울이고 있으면
			shakepoint++;          // 값이 계속 증가하기 때문에 값이 한번 증가하면 더이상 증가하지 않도록
			flag = 1;              // 해주기 위해 넣은 조건변수.
		}
		else if(temp_y < -3 && flag === 1) // 폰을 흔들면 x값이 양수와 음수값으로 왔다갔다하는데 
		{				   // 이부분을 체크하여 shakepoint가 +1씩 증가한다. 
			shakepoint++;              // 위의 if문은 x가 양수일때 +1
			flag = -1;                 //  else if문은 x가 음수일때 +1
		}
	}


	var fan = function(){
		if(shakepoint > 15){
	           $('.w01').addClass('w04');
	        }
	        else if(shakepoint > 10){
	           $('.w01').addClass('w03');
	        }
	        else if (shakepoint > 5){
	           $('.w01').addClass('w02');
	        }
	}


	var firepoint = function(){
		if(y > -1 && y < 1){
	           $('.fan').addClass('fan');
	        }
	        else if(y < -1){
	           $('.fan').addClass('fan2');
	        }
	        else if (y > 1){
	           $('.fan').addClass('fan3');
	        }
	}




	function handleMotionEvent(event) {


		var x = event.accelerationIncludingGravity.x; // 스마트폰 센서 값 받아오는 명령어 x값
		var y = event.accelerationIncludingGravity.y; // y값
		var z = event.accelerationIncludingGravity.z; // z값
		y = Math.round(y); // 1이하 소숫점 버림.
		temp_y = y;
