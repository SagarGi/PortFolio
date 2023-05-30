<template>
  <div class="footer" :class="modeType">
    <div class="footer-wrapper">
      <div class="follow-links">
        <a href="https://github.com/SagarGi" target="_blank">
          <i class="fa fa-github" aria-hidden="true"></i>
        </a>
        <a href="https://dev.to/sagargi" title="dev-to" target="_blank">
          <i class="fab fa-dev" aria-hidden="true"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/sagar-gurung-99450619b/"
          title="linkedin"
          target="_blank"
        >
          <i class="fa fa-linkedin" aria-hidden="true"></i>
        </a>
      </div>
      <div class="made-with">
        <p>
          Made with <span><i class="fa fa-heart"></i></span> by sagar gurung
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["modeType"],
  name: "FooterComponent",
};
</script>

<style>
.footer {
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.follow-links {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 14vh;
}

.follow-links a {
  color: #000;
  line-height: 30px;
  font-size: 30px;
  margin: 0 10px;
  text-decoration: none;
}

.made-with span {
  color: black;
}

.dark span {
  color: white;
}
.dark p {
  color: white;
}

.dark a {
  color: white;
}

.made-with {
  font-size: 13px;
  color: #7e7e7e;
}

.follow-links a i {
  font-size: 30px;
  -webkit-transition: all 200ms ease-in;
  -webkit-transform: scale(1);
  -ms-transition: all 200ms ease-in;
  -ms-transform: scale(1);
  -moz-transition: all 200ms ease-in;
  -moz-transform: scale(1);
  transition: all 200ms ease-in;
  transform: scale(1);
}
.follow-links a:hover i {
  box-shadow: 0px 0px 150px #000000;
  z-index: 2;
  -webkit-transition: all 200ms ease-in;
  -webkit-transform: scale(1.5);
  -ms-transition: all 200ms ease-in;
  -ms-transform: scale(1.5);
  -moz-transition: all 200ms ease-in;
  -moz-transform: scale(1.5);
  transition: all 200ms ease-in;
  transform: scale(1.5);
}
</style>
