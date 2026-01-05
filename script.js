function showPage(pageId, btn) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));

    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.n-btn');
    buttons.forEach(b => b.classList.remove('active'));

    // Show the selected page
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }
    
    // Set button as active
    btn.classList.add('active');
}

function uploadProfile(files) {
    if (files && files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
            document.getElementById('displayProfile').src = e.target.result;
        };
        reader.readAsDataURL(files[0]);
    }
}

// Typing effect
const myName = "Cyrus Vinchie Vicente";
let i = 0;
function type() {
    if (i < myName.length) {
        document.getElementById("typing-name").innerHTML += myName.charAt(i);
        i++;
        setTimeout(type, 100);
    }
}

window.onload = type;