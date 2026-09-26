document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll("[data-copy-target]").forEach(function (button) {
  button.addEventListener("click", function () {
    var id = button.getAttribute("data-copy-target");
    var target = document.querySelector('[data-edit-id="' + id + '"]');
    if (!target) return;
    var text = target.textContent.trim();
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        var original = button.textContent;
        button.textContent = "已复制";
        setTimeout(function () {
          button.textContent = original;
        }, 1500);
      });
    }
  });
});
