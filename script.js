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

  // Automatically show modal on load with register tab active
  setTimeout(() => {
    showModal("register");
  }, 2000);
});
