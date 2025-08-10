import"https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js";/*!
* Start Bootstrap - Clean Blog v6.0.9 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/window.addEventListener("DOMContentLoaded",()=>{let e=0;const i=document.getElementById("mainNav"),t=i.clientHeight;window.addEventListener("scroll",function(){const s=document.body.getBoundingClientRect().top*-1;s<e?s>0&&i.classList.contains("is-fixed")?i.classList.add("is-visible"):(console.log(123),i.classList.remove("is-visible","is-fixed")):(i.classList.remove(["is-visible"]),s>t&&!i.classList.contains("is-fixed")&&i.classList.add("is-fixed")),e=s})});
