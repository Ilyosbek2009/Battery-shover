navigator.getBattery().then(function (Battery) {
    function updateAllBatteryInfo() {
        updateChargeInfo();
        updateLevelInfo();
        // updateChargingInfo();
        // updateDischargingInfo();
    }

    updateAllBatteryInfo();

    Battery.addEventListener('chargingchange' , function(){
        updateChargeInfo();
    });

    function updateChargeInfo() {
        console.log(Battery.charging);
        if(Battery.charging){
            document.querySelector('.status').innerHTML = 'zarayad olyapti' ; 
            document.querySelector('#battery_level').classList.add('battery_animation');
        }
        else{
            document.querySelector('.status').innerHTML = 'Zarayad olmayapti';
            document.querySelector('#battery_level').classList.remove('battery_animation');
        }
    }

    Battery.addEventListener('levelchange', updateLevelInfo);
    function updateLevelInfo () {
        document.querySelector('.battery_level_digit').innerHTML = Battery.level*100+'%';
        document.querySelector('#battery_level').style.width = Battery.level*100+'%';
    }
})