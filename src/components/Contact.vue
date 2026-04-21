<template> 
  <section id="contact" class="contact"> 
    <h2>Contato</h2> 
    <div class="contact-container"> 
      <form @submit.prevent="submitForm"> 
        <div class="form-group"> 
          <label for="name">Nome</label> 
          <input type="text" id="name" v-model="form.name" required> 
        </div> 
        <div class="form-group"> 
          <label for="email">Email</label> 
          <input type="email" id="email" v-model="form.email"  
required> 
        </div> 
        <div class="form-group"> 
          <label for="message">Mensagem</label> 
          <textarea id="message" v-model="form.message"  
required></textarea> 
        </div> 
        <button type="submit">Enviar</button> 
      </form> 
    </div> 
  </section> 
</template> 
 
<script> 
export default { 
  name: 'Contact', 
  data() { 
    return { 
      form: { 
        name: '', 
        email: '', 
        message: '' 
      } 
    } 
  }, 
  methods: { 
    submitForm() { 
      // Aqui você pode implementar o envio do formulário 
      console.log('Formulário enviado:', this.form); 
      alert('Mensagem enviada com sucesso!'); 
      this.form = { name: '', email: '', message: '' }; 
    } 
  } 
} 
</script> 
