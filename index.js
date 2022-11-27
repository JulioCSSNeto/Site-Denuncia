const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const complaint = document.getElementById('complaint')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()

})


function checkInputs() {

    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const complaintValue = complaint.value.trim()
    
    if(usernameValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(username, 'Preencha esse campo')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(username)
    }

    if(emailValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(email, 'Preencha esse campo')
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email inválido')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(email)
    }
    
    if(complaintValue === ''){
        setErrorFor(complaint, 'Preencha esse campo')
    } else{
        setSuccessFor(complaint)
    }
   
   

}

function setErrorFor(input, message) {
    const formControlJulio = input.parentElement;
    const small = formControlJulio.querySelector('small')

    small.innerText = message

    formControlJulio.className = 'form-control-julio error'
}

function setSuccessFor(input) {
    const formControlJulio = input.parentElement;

    formControlJulio.className = 'form-control-julio success'
}

function isEmail(email) {
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}