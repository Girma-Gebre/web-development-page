const darknessBtn = document.getElementById('darkness');
const sectionHeaders = document.querySelectorAll('.section-headers');

darknessBtn.addEventListener("click", () => {
    if (darknessBtn.textContent === "Brightness mode") {
        darknessBtn.textContent = "Darkness mode";
        document.body.style.backgroundColor = "rgba(57, 59, 59, 1)";

        sectionHeaders.forEach((header)=>{
            header.style.color = "white"; // Apply to each header
        })

        // button style handling 
        darknessBtn.style.backgroundColor = "white";
        darknessBtn.style.color = "black";
        darknessBtn.style.border = "2px solid red";
        return;
    }

    if (darknessBtn.textContent === "Darkness mode") {
        darknessBtn.textContent = "Brightness mode";
        document.body.style.backgroundColor = "rgb(221, 236, 236)";
         sectionHeaders.forEach((header)=>{
            header.style.color = "black"; // Apply to each header
        })

        // button style handling 
        darknessBtn.style.backgroundColor = "black";
        darknessBtn.style.color = "white";
         darknessBtn.style.border = "2px solid black";
        return;
    }
})

