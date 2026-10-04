/* TradeSphere - Frontend Demo JavaScript */
const TradeSphereDemo = {
  handleForm(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const button = form.querySelector('button[type="submit"], input[type="submit"]');
    if (button) {
      const old = button.innerHTML || button.value;
      if (button.tagName === "INPUT") button.value = "Demo Only";
      else button.innerHTML = "✓ Demo Only";
      setTimeout(() => {
        if (button.tagName === "INPUT") button.value = old;
        else button.innerHTML = old;
      }, 1400);
    }
    return false;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const search = document.getElementById("searchBox");
  const table = document.getElementById("stockTable");
  if (search && table) {
    search.addEventListener("input", () => {
      const q = search.value.toLowerCase().trim();
      table.querySelectorAll("tr").forEach(row => {
        const text = row.innerText.toLowerCase();
        row.style.display = text.includes(q) ? "" : "none";
      });
    });
  }
});
