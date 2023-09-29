const countValue = document.getElementById('counter');          //getelementsbyid ke jagah par hum query selector v lga sakte h, jab ye lagao to #counter likhna kyuki wo id h

function increment(){
    // get the vlue from UI
    let value = parseInt(countValue.innerText);       // hume value string ke form me milegi aur hume int ke form me chahiye to hum parseint ki help se usko convert karlenge
    //Update the value
    value = value + 1;
    //set the value onto UI
    countValue.innerText = value;
};


function decrement(){
        // get the vlue from UI
        let value = parseInt(countValue.innerText);
        //Update the value
        value = value - 1;
        //set the value onto UI
        countValue.innerText = value;
};