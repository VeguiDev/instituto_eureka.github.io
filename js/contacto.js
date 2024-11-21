var input=  document.getElementById('phone');
input.addEventListener('input',function(){
  if (this.value.length > 12) 
     this.value = this.value.slice(0,12); 
})

var nombre = document.getElementById('name');
nombre.addEventListener('input',function(){
    this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
    if (this.value.length > 30) 
        this.value = this.value.slice(0, 30); 
})

var asunto = document.getElementById('subject');
asunto.addEventListener('input',function(){
    if (this.value.length > 30) 
        this.value = this.value.slice(0, 30); 
})

var email = document.getElementById('email');
email.addEventListener('input',function(){
    if (!this.value.includes('@')) {
        this.setCustomValidity('El correo electrónico debe ser valido');
    } else {
        this.setCustomValidity('');
    }
})

window.addEventListener('load', function() {
    document.getElementById('formulario').reset();
});


