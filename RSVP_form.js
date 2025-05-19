document.getElementById('confirmacionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Cambia este email por el tuyo
    const email = 'euribe95@gmail.com';
    
    // Prepara los datos
    const formData = new FormData(this);
    const data = {
        name: formData.get(0),
        contact: formData.get(1),
        attendance: formData.get(2),
        message: formData.get(3)
    };
// Mostrar/ocultar campo de acompañante
document.getElementById('asistencia').addEventListener('change', function() {
    const acompananteSection = document.getElementById('acompananteSection');
    if (this.value === 'si') {
        acompananteSection.style.display = 'block';
    } else {
        acompananteSection.style.display = 'none';
    }
});

// Mostrar campo de nombre si selecciona "pareja" o "acompanante"
document.getElementById('acompañante').addEventListener('change', function() {
    const nombreInput = document.getElementById('nombreAcompanante');
    if (this.value === 'pareja' || this.value === 'acompanante') {
        nombreInput.style.display = 'block';
    } else {
        nombreInput.style.display = 'none';
    }
});
    // Envía los datos a FormSubmit (requiere registrarse)
    fetch('https://formsubmit.co/ajax/' + email, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        alert('¡Confirmación enviada! Gracias.');
        this.reset();
    })
    .catch(error => {
        alert('Error al enviar. Por favor, intenta nuevamente.');
    });
});
