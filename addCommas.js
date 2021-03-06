const g_minusSign = "-";
const g_commaDigits = 3; // add comma every 3 digits, only for integer


function addCommas(nums) {
    let res = nums < 0 ? g_minusSign : "";

    function handleInteger(integerString) {
        let str = "";
        let digit = 0;
        for (let i = integerString.length - 1; i >= 0; i--){
            str += integerString[i];
            digit += 1;
            if (i === 0){
                continue;
            }
            if (digit % g_commaDigits === 0){
                str += ",";
            }
        }
        return str.split("").reverse().join("");
    }

    if (!Number.isInteger(nums)) {
        let arr = Math.abs(nums).toString().split(".");
        integerString = arr[0];
        bonusString = arr[1];
        return res + handleInteger(integerString) + "." + bonusString;
    }
    else {
        return res + handleInteger(Math.abs(nums).toString());
    }


}


module.exports = addCommas;