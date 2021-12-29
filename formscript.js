const name11 = document.getElementById('name1')
const password = document.getElementById('password1')
const form = document.getElementById('form12')
const phone = document.getElementById('phone1')
const message = document.getElementById('message')

const errorElement = document.getElementById('error1')
const email = document.getElementById('email1')

form.addEventListener('submit',(e)=>{
    let messages = []
if (name11.value === ' '|| name11.value==null) {
    messages.push('Name is required')
}
if(password.value.length<=6){
    messages.push('Password must be at least 6 characters')
}
if(password.value.length>=20){
    messages.push('Password must be less than 20 characters')
}
if(password.value === 'password'){
    messages.push('Password cannot be password')
}
if(password.value.indexOf('password')>=0){
    messages.push('Password cannot contain the word password')
}
if(messages.length>0){
    e.preventDefault()
    errorElement.innerText = message.join(',')
}
})
                    