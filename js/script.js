document.addEventListener("DOMContentLoaded", function() {

    
    // SERVICE DRONE AND MODAL
    const drone = document.getElementById("drone");
    const modal = document.getElementById("modal");
    const closeModal = document.getElementById("closeModal");
    const copyButton = document.getElementById("copyButton");
    const promoText = document.getElementById("promoText");
    const header = document.querySelector(".header-head");
    // Show modal when drone is clicked
    drone.addEventListener("click", function() {
        modal.style.display = "flex";
        document.body.classList.add("no-scroll");
        header.classList.add("no-click");
    });

    // Close modal when X is clicked
    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
        document.body.classList.remove("no-scroll");
        header.classList.remove("no-click");
    });

    // Close modal when clicking outside modal content
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
            document.body.classList.remove("no-scroll");
            header.classList.remove("no-click"); 
        }
    });

    // Copy promo code to clipboard
    copyButton.addEventListener("click", function() {
        navigator.clipboard.writeText(promoText.innerText).then(() => {
            alert("Promo code copied: " + promoText.innerText);
        }).catch(err => {
            console.error("Error copying text: ", err);
        });
    });

    //END SERVICE DRONE AND MODAL

    
    // HOSTING LINK DROP DOWN START
    
    const dropdownBtn = document.querySelector(".dropbtn");
    const dropdownContent = document.querySelector(".dropdown-content");
    const hostingLink = document.getElementById("hosting-link");
    dropdownContent.style.display = "none";

    if(window.innerWidth <= 1024){
        dropdownContent.style.display = "none"; 

        hostingLink.addEventListener("click", function (event) {
            event.preventDefault();
            dropdownContent.classList.toggle("show");
            console.log("Dropdown Clicked! Classlist: ", dropdownContent.classList);
            if (dropdownContent.classList.contains("show")) {
                dropdownContent.style.display = "block";
            } else {
                dropdownContent.style.display = "none";
            }
        });

        
        dropdownContent.addEventListener("click", function (event) {
            event.stopPropagation();
        });

        
        document.addEventListener("click", function (event) {
            if (!hostingLink.contains(event.target) && !dropdownContent.contains(event.target)) {
                dropdownContent.classList.remove("show");
            }
        });
    }
    else{
        hostingLink.addEventListener("click", function (event) {
        event.preventDefault(); 
        dropdownContent.classList.toggle("show");
    });
    
    dropdownBtn.addEventListener("click", function (event) {
        event.preventDefault();
        dropdownContent.style.display =
            dropdownContent.style.display === "block" ? "none" : "block";
    });

    
    document.addEventListener("click", function (event) {
        if (!dropdownBtn.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.style.display = "none";
        }
        if (!hostingLink.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.classList.remove("show");
        }
    });}

    

    // END HOSTING LINK DROP DOWN


    //START FAQS
    const faqs = document.querySelectorAll(".faq-item");

    faqs.forEach(faq => {
        const question = faq.querySelector(".faq-question");
        const answer = faq.querySelector(".faq-answer");
        const icon = faq.querySelector(".toggle-icon");

        question.addEventListener("click", () => {
            const isActive = faq.classList.contains("active");

            // Close all other open FAQs
            document.querySelectorAll(".faq-item").forEach(item => {
                item.classList.remove("active");
                item.querySelector(".faq-answer").style.maxHeight = null;
                item.querySelector(".toggle-icon").textContent = "+";
            });

            // Toggle the clicked FAQ
            if (!isActive) {
                faq.classList.add("active");
                answer.style.maxHeight = answer.scrollHeight + "px"; // Expanding effect
                icon.textContent = "−"; // Change plus to minus
            } else {
                faq.classList.remove("active");
                answer.style.maxHeight = null; // Collapsing effect
                icon.textContent = "+";
            }
        });
    });

    //END FAQS

    // MENU BUTTON START
    const menuBtn = document.querySelector('.menu-btn svg');
    const navLinks = document.querySelector('.nav-right');

    menuBtn.addEventListener('click', (e) => {
        navLinks.classList.toggle('active'); 
        console.log(e.target)
    });

    // Close the menu if a link is clicked (optional, but good UX)
    const navLinksList = document.querySelectorAll('.nav-right li');
    navLinksList.forEach(link => {
        link.addEventListener('click', (event) => {
            if(!hostingLink.contains(event.target)){
                navLinks.classList.remove('active');// Close the menu
            }
             
        });
    });
});

