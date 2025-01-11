  // more 

  const more = document.getElementById("more");
  const container = document.getElementById("container");
  more.addEventListener("click", function() {
      const userPanel = document.getElementById("userPanel");
      const activeuser = document.getElementById("active-user");
      const userList = document.getElementById("userList");
      const label = document.createElement("label");
      const span = document.createElement("span");
      const img = document.createElement("img");
      img.src = "/public/IMG/menu.png";
      userPanel.style.width = "250px";

      if (userPanel.style.width === "250px") {
          userPanel.style.transition = "1s ease-in-out";
          userPanel.style.width = "50px";

          span.appendChild(img);
          label.appendChild(span);
          userPanel.appendChild(label);
          userPanel.style.background = "white";
          activeuser.style.display = "none";
          userList.style.display = "none";

      }
      img.addEventListener("click", function() {

          //   alert("h")
          userPanel.style.width = "250px";
          activeuser.style.display = "flex";
          userList.style.display = "block";
          img.remove();
          userPanel.style.background = "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)";
      })
  });