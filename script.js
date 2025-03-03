const companyInput = document.getElementById("company");
const websiteInput = document.getElementById("website");
const titleInput = document.getElementById("title");
const descInput = document.getElementById("description");

const titleCounter = document.getElementById("title-counter");
const descCounter = document.getElementById("desc-counter");

const previewCompany = document.getElementById("preview-company");
const previewUrl = document.getElementById("preview-url");
const previewTitle = document.getElementById("preview-title");
const previewDesc = document.getElementById("preview-description");

companyInput.addEventListener("input", () => {
  previewCompany.textContent = companyInput.value || "Company Name";
});

websiteInput.addEventListener("input", () => {
  previewUrl.textContent = websiteInput.value || "www.example.com";
});

titleInput.addEventListener("input", () => {
  let titleLength = titleInput.value.length;
  titleCounter.textContent = `${titleLength} / 60 characters`;
  titleCounter.classList.toggle("warning", titleLength > 60);

  previewTitle.textContent = titleInput.value || "Your title will appear here";
});

descInput.addEventListener("input", () => {
  let descLength = descInput.value.length;
  descCounter.textContent = `${descLength} / 160 characters`;
  descCounter.classList.toggle("warning", descLength > 160);
  previewDesc.textContent =
    descInput.value || "Your meta description will appear here.";
});
document.getElementById("hamburger").addEventListener("click", function () {
  const navItems = document.querySelector(".nav-items");
  navItems.classList.toggle("active");
});
