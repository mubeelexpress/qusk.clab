let student = [

]

function Submit(){
    const name = document.querySelector('#name');
    const quNum = document.querySelector('#qu-number');
    const phone = document.querySelector('#phone-number');
    const collage = document.querySelector('#collage');
    const computerNumber = document.querySelector('#computer-num')

    if(name === '' || 
        quNum === '' || 
        phone === '' || 
        collage === '' || 
        computerNumber === '') {
            name.style.outline = "red"
        }else{
        student.push({
        name:name.value,
        quNum:quNum.value,
        collage:collage.value,
        phone:phone.value,
        computerNumber:computerNumber.value,
        logtime:"12/21pm",
        exitTime:"21:34"
        
    })
    
        }

    console.log(student);
    
}
