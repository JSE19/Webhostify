document.addEventListener("DOMContentLoaded", function() {
    // const faqs = document.querySelectorAll(".faq-item");

    // faqs.forEach(faq => {
    //     const question = faq.querySelector(".faq-question");
    //     const answer = faq.querySelector(".faq-answer");
    //     const icon = faq.querySelector(".toggle-icon");

    //     question.addEventListener("click", () => {
    //         const isOpen = answer.style.display === "block";
            
    //         // Hide all other answers
    //         document.querySelectorAll(".faq-answer").forEach(ans => ans.style.display = "none");
    //         document.querySelectorAll(".toggle-icon").forEach(i => i.textContent = "+");

    //         // Toggle current answer
    //         answer.style.display = isOpen ? "none" : "block";
    //         icon.textContent = isOpen ? "+" : "−";
    //     });
    // });

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

    // script.js
const menuBtn = document.querySelector('.menu-btn svg');
const navLinks = document.querySelector('.nav-right');

menuBtn.addEventListener('click', (e) => {
    navLinks.classList.toggle('active'); 
    console.log(e.target)
});


// Close the menu if a link is clicked (optional, but good UX)
const navLinksList = document.querySelectorAll('.nav-right li');
navLinksList.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active'); // Close the menu
    });
});
});

