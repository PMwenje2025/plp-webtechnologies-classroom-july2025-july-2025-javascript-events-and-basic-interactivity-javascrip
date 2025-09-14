// ===============================
// 1. Event Handling - Theme Toggle
// ===============================
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeToggle.textContent = document.body.classList.contains("dark-mode")
    ? "🌑 Switch to Light Mode"
    : "🌙 Switch to Dark Mode";
});

// ===============================
// 2. Counter Game
// ===============================
let counter = 0;
const counterValue = document.getElementById("counterValue");
document.getElementById("counterBtn").addEventListener("click", () => {
  counter++;
  counterValue.textContent = counter;
});
document.getElementById("resetBtn").addEventListener("click", () => {
  counter = 0;
  counterValue.textContent = counter;
});

// ===============================
// 3. Collapsible FAQ
// ===============================
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach(q => {
  q.addEventListener("click", () => {
    q.nextElementSibling.classList.toggle("hidden");
  });
});

// ===============================
// 4. Tabbed Interface
// ===============================
const tabs = document.querySelectorAll(".tab-btn");
const panels = document.querySelectorAll(".tab-panel");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // deactivate all
    tabs.forEach(btn => btn.classList.remove("active"));
    panels.forEach(panel => panel.classList.add("hidden"));

    // activate selected
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.remove("hidden");
  });
});

// ===============================
// 5. Form Validation
// ===============================
const form = document.getElementById("joinForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const country = document.getElementById("country").value;
  const consent = document.getElementById("consent").checked;

  let errors = [];

  // Name check
  if (name.length < 2) errors.push("Name must be at least 2 characters.");

  // Email regex
  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailRegex.test(email)) errors.push("Enter a valid email address.");

  // Password check
  if (password.length < 6) errors.push("Password must be at least 6 characters.");

  // Country check
  if (!country) errors.push("Please select a country.");

  // Consent check
  if (!consent) errors.push("You must agree to participate.");

  // Display feedback
  if (errors.length > 0) {
    message.textContent = errors.join(" ");
    message.style.color = "red";
  } else {
    message.textContent = "✅ Form submitted successfully!";
    message.style.color = "green";
    form.reset();
  }
});
