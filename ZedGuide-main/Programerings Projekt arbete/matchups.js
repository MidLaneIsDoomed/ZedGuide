document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("selected-champ");
  
    const allBuilds = document.querySelectorAll(
      "#conq-build-opacity, #first-strike-build-opacity, #electrocute-build-opacity, #arcane-comet-build-opacity"
    );
  
    select.addEventListener("change", () => {
      allBuilds.forEach(build => {
        build.classList.remove("build-active");
      });
  
      const selectedOption = select.options[select.selectedIndex];
      const targetId = selectedOption.dataset.target;
  
      if (targetId) {
        const targetBuild = document.getElementById(targetId);
        if (targetBuild) {
          targetBuild.classList.add("build-active");
        }
      }
    });
  });