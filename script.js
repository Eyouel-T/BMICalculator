if(parseFloat("tagv")){
    alert("this may work");
}

document.querySelector("#calculate").onclick = function(){
    if((parseFloat(document.querySelector("#height").value)/100)&&(parseFloat(document.querySelector("#weight").value))){
    var height = parseFloat(document.querySelector("#height").value)/100
    var weight =  parseFloat(document.querySelector("#weight").value)
    var bmi =  (weight)/(height*height)
    var status
    alert(bmi)
    if(bmi<18.5){
        status = "under weight"
    }
    else if((18.5<=bmi)&&(bmi<=24.9)){
        status = "Normal"
    }
    else if((25<=bmi)&&(bmi<=29)){
        status = "over weight"
    }
    else if(30<=bmi){
        status = "obese"
    }

    document.querySelector("#bmi").innerHTML =
     `<p>BMI is ${bmi}</p>
     `
     document.querySelector("#status").innerHTML =
     `<p>your status is ${status}</p>
     `
     aler
    }
    else{
        alert("please input integer in the fields")
    }
}