
import axios from 'axios';
import './Contact.css'

function Contact() {

  const sendMessage = (e) => {
    e.preventDefault();
    const token =  "7067329402:AAEGunIJCoHOAJ1uF_oNy80ya2HbKsMJvgA";''
    const id = -1002022260815;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    const textContent = `Ism: ${name} \n Email manzil: ${email} \n Telefon_raqam: ${phone} \n Xabar:${message}`
    axios({
      url:url,
      method:'POST',
      data:{
        "chat_id": id,
        "text": textContent,
      }

    })
    .then((res) =>{
      document.getElementById("form").reset();
      alert("yuborildi")
    }).catch((error) =>{
      console.log("yuborishda xotilik yuz berdi",error);
    })
  }

 

  return (
    <>
    <hr />
    <div className='contact' id='contact'>
      <div className='container contact__container'>
        <p className='contact__text'>Contact</p>
        <h1 className='contact__title'>Contact With Me</h1>
        <div>
          <form id='form' onSubmit={sendMessage}>
          <label>Your name*</label><br />
          <input id='name' type="text" required/><br />
          <label>Email*</label><br />
          <input id='email' type="email" required/><br />
          <label>Phoen number*</label><br />
          <input id='phone' type="text" required/><br />
          <label>Your message*</label><br />
          <textarea id='message' type="area" required/><br />
          <button type='submit' className='contact__btn'>Send Message</button>
        </form>
        </div>
      </div>
    </div>  
    </>
  )
}

export default Contact