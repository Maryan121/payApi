const labels = document.querySelectorAll('.form-label');
const inputs = document.querySelectorAll('.form-input')

//hiding the label message if the input is clicked
for(let i=0; i<inputs.length; i++){
    inputs[i].addEventListener('input',()=>{
        labels[i].style.display = 'none';
    })
}


//displaying error message if the user tries to submit the form when email field is empty
const submitBtn = document.querySelector('.submit')
const email = document.querySelector('#email')
const name = document.querySelector('#name')
const messageField = document.querySelector('#message')
submitBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(email.value == '' || name.value == '' || messageField.value == ''){
        if(name.value == ''){
            document.querySelector('.error').innerHTML = "this field can't be empty"
            name.style.borderBottom = 'solid #FF0000 1px'
            labels[0].style.color = '#FF0000'
            
            //setting email and messageField to default
            email.style.borderBottom = 'solid #36536B 1p'
            messageField.style.borderBottom = 'solid #36536B 1px'
            document.querySelector('.error1').innerHTML = ""
            document.querySelector('.erro2').innerHTML = ""
        }else if(email.value == ''){
            document.querySelector('.error1').innerHTML = "this field can't be empty"
            email.style.borderBottom = 'solid #FF0000 1px'
            labels[1].style.color = '#FF0000'

            //setting name and messageField to default
            name.style.borderBottom = 'solid #36536B 1px'
            messageField.style.borderBottom = 'solid #36536B 1px'
            document.querySelector('.error').innerHTML = ""
            document.querySelector('.error2').innerHTML = ""
        }else{
            //getting textarea message 
            messageField.addEventListener('input', function handleChange(event) {
                console.log(event.target.value);
            });
            document.querySelector('.error2').innerHTML = "this field can't be empty"
            messageField.style.borderBottom = 'solid #FF0000 1px'
            labels[4].style.color = '#FF0000'

            //setting name and email to default
            name.style.borderBottom = 'solid #36536B 1px'
            email.style.borderBottom = 'solid #36536B 1px'
            document.querySelector('.error').innerHTML = ""
            document.querySelector('.error1').innerHTML = ""

           
        } 
    }
    else{
        document.querySelector('.sub-cont').style.marginTop = '4rem'
        document.querySelector('.sub-cont').style.marginBottom = '4rem'
        document.querySelector('.Title').style.display = 'none';
        let forme = document.querySelector('.formSec')
        forme.innerHTML = `Thanks for submitting our team will contact you within 24 Hours in your email ${email.value} `;
        forme.classList.add('thanks-message')
    }
    console.log(messageField.innerHTML);
})