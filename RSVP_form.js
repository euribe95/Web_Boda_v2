document.getElementById('confirmacionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Cambia este email por el tuyo
    const email = 'tucorreo@gmail.com';
    
    // Prepara los datos
    const formData = new FormData(this);
    const data = {
        name: formData.get(0),
        contact: formData.get(1),
        attendance: formData.get(2),
        message: formData.get(3)
    };

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