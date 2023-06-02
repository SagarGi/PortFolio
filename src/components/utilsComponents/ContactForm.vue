<template>
  <div id="popup" class="popup-modal" :class="modeType">
    <div class="overlay" @click="$emit('closePingMeForm')"></div>
    <div class="content">
      <div class="close-btn" @click="$emit('closePingMeForm')">&times;</div>
      <div class="contact-form">
        <h2>Message Me</h2>
        <form action="" @submit.prevent="submitContactForm">
          <input
            type="text"
            id="name"
            v-model="username"
            @click="resetSuccessMessage"
            name="firstname"
            placeholder="Your name.."
          />
          <p class="validation-error" v-if="inputError.username">
            {{ inputError.username }}
          </p>
          <input
            type="text"
            id="email"
            @click="resetSuccessMessage"
            v-model="emailAddress"
            name="firstname"
            placeholder="Your email.."
          />
          <p class="validation-error" v-if="inputError.emailAddress">
            {{ inputError.emailAddress }}
          </p>
          <textarea
            id="subject"
            v-model="message"
            @click="resetSuccessMessage"
            name="subject"
            placeholder="Write something.."
          ></textarea>
          <p class="validation-error" v-if="inputError.message">
            {{ inputError.message }}
          </p>
          <button id="submit">Send Message</button>
          <p class="form-success" v-if="formSuccessMessage">
            {{ formSuccessMessage }}
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { Email } from "../assets/SMTP/smtp";
export default {
  name: "ContactForm",
  props: ["modeType"],
  data() {
    return {
      username: "",
      emailAddress: "",
      message: "",
      inputError: {
        username: "",
        emailAddress: "",
        message: "",
      },
      formSuccessMessage: "",
    };
  },
  methods: {
    isValidEmailAddress(email) {
      const emailRegex =
        /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return emailRegex.test(email);
    },
    resetInputField() {
      this.username = "";
      this.emailAddress = "";
      this.message = "";
    },
    resetSuccessMessage() {
      this.formSuccessMessage = "";
    },
    isFormNotEmptyValidation() {
      const errorMessage = "Fields cannot be empty !!";
      if (!this.username) {
        this.inputError.username = errorMessage;
        return false;
      } else {
        this.inputError.username = null;
      }
      if (!this.emailAddress) {
        this.inputError.emailAddress = errorMessage;
        return false;
      } else {
        this.inputError.emailAddress = null;
      }
      if (!this.message) {
        this.inputError.message = errorMessage;
        return false;
      } else {
        this.inputError.message = null;
      }
      return true;
    },
    submitContactForm() {
      if (this.isFormNotEmptyValidation()) {
        if (!this.isValidEmailAddress(this.emailAddress)) {
          this.inputError.emailAddress = "Your email address is invalid !!";
        } else {
          this.sendEmail();
        }
      }
    },
    sendEmail() {
      Email.send({
        SecureToken: "de7731cc-0294-4bb1-a9d5-cec473b76ab7",
        To: "sagargurung5005@gmail.com",
        name: this.username,
        From: "sagargurung5005@gmail.com",
        Subject: "Ping Me",
        Body:
          this.message +
          "\n\n" +
          "Regards,\n" +
          this.username +
          "\n" +
          "Email: " +
          this.emailAddress,
      }).then((message) => {
        if (message === "OK") {
          this.formSuccessMessage = "Thank you, your email has been sent !!!";
          this.resetInputField();
        } else {
          this.formSuccessMessage = message;
        }
      });
    },
  },
};
</script>

<style>
.popup-modal .overlay {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
}

.popup-modal .content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  width: 320px;
  z-index: 2;
  box-sizing: border-box;
  padding: 22px 30px;
  border-radius: 1.5%;
}

.popup-modal .close-btn {
  position: absolute;
  right: 20px;
  top: 20px;
  width: 25px;
  height: 25px;
  background: #222;
  color: white;
  font-size: 25px;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  border-radius: 50%;
}
input[type="text"],
select,
textarea {
  width: 100%;
  padding: 8px;
  border: 0.1px solid #9b9b9b;
  box-sizing: border-box;
  margin-top: 3px;
  margin-bottom: 16px;
  resize: vertical;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
  font-size: 11px;
}

h2 {
  margin-bottom: 15px;
  font-size: 18px;
  text-align: center;
}

textarea {
  height: 120px;
}

#submit {
  background-color: #ff4539;
  color: white;
  padding: 8px 10px;
  border: none;
  cursor: pointer;
  font-size: 11px;
  border-radius: 3%;
}
input[type="text"]:focus {
  border: 1px solid #ff4539;
}

textarea:focus {
  border: 0.1px solid #ff4539;
}

.contact-form {
  border-radius: 5px;
}
#submit:hover {
  background-color: #000000;
}

.dark .content {
  background-color: #000;
}

.dark #submit:hover {
  background-color: #ffffff;
  color: black;
}
.validation-error {
  font-size: 10px;
  color: red;
}

.form-success {
  padding-top: 20px;
  font-size: 15px;
  color: #3ca23c;
}
</style>
