function toggleAnswer(id, element) {
    const answer = document.getElementById(id);
    const arrow = element.querySelector('.arrow');
    if (answer.style.display === "none" || !answer.style.display) {
        answer.style.display = "block";
        arrow.classList.add("rotate");
    } else {
        answer.style.display = "none";
        arrow.classList.remove("rotate");
    }
}

// boton abajo, arriba pf

function togglePaymentMethods() {
    const methods = document.getElementById('paymentMethods');
    if (methods.style.display === 'none' || methods.style.display === '') {
      methods.style.display = 'flex';
    } else {
      methods.style.display = 'none';
    }
  }