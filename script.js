document.addEventListener("DOMContentLoaded", () => {

  const welcomeSlide = document.getElementById("welcome-slide");

  setTimeout(() => {
    if (welcomeSlide) {
      welcomeSlide.classList.add("hidden");
      setTimeout(() => {
        welcomeSlide.style.display = "none";
        startTypingAnimations();
      }, 700);
    } else {
      startTypingAnimations();
    }
  }, 3000);

  let titleIndex = 0;
  let charIndex = 0;
  const titleSpeed = 120;

  const titleText = [
    "Student Web Developer",
    "Student Web Designer",
    "Student IT Enthusiast",
    "Student Script Writer"
  ];

  const descText =
    "I am a student who is passionate about digital technology and its rapid development. I am especially interested in information technology and continuously work on improving my skills to adapt to technological changes and contribute to the digital world in the future.";

  function typeTitle() {
    const titleSpan = document.querySelector(".typing-text span");
    if (!titleSpan) return;

    if (charIndex < titleText[titleIndex].length) {
      titleSpan.textContent += titleText[titleIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeTitle, titleSpeed);
    } else {
      setTimeout(eraseTitle, 1500);
    }
  }

  function eraseTitle() {
    const titleSpan = document.querySelector(".typing-text span");
    if (!titleSpan) return;

    if (charIndex > 0) {
      titleSpan.textContent =
        titleText[titleIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseTitle, titleSpeed / 2);
    } else {
      titleIndex = (titleIndex + 1) % titleText.length;
      setTimeout(typeTitle, 500);
    }
  }

  function typeDesc() {
    const descElement = document.querySelector(".typing-text-desc");
    if (!descElement) return;

    let descIndex = 0;
    function loopDesc() {
      if (descIndex < descText.length) {
        descElement.textContent += descText.charAt(descIndex);
        descIndex++;
        setTimeout(loopDesc, 35);
      }
    }
    loopDesc();
  }

  function startTypingAnimations() {
    setTimeout(typeTitle, 500);
    setTimeout(typeDesc, 1000);
  }

  AOS.init({
    duration: 1200,
    once: true,
    easing: "ease-in-out"
  });

  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  const observerOptions = {
    threshold: 0.3
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));

  const skillFills = document.querySelectorAll(".skill-fill");
  const skillsSection = document.getElementById("skills");

  function animateSkills() {
    skillFills.forEach(fill => {
      const skillValue = fill.getAttribute("data-skill");
      fill.style.width = skillValue;
      fill.textContent = skillValue;
    });
  }

  window.addEventListener("scroll", () => {
    if (!skillsSection) return;

    const sectionTop = skillsSection.offsetTop;
    const sectionHeight = skillsSection.offsetHeight;
    const scrollY = window.scrollY + window.innerHeight;

    if (scrollY > sectionTop + sectionHeight / 4) {
      animateSkills();
    }
  });

});

AOS.init({
    duration: 1200,
    once: true,
    easing: "ease-in-out"
});
