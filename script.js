function clearError(errorId) {
    document.getElementById(errorId).innerText = ""; // Clears the error message dynamically
}

function clearError(errorId) {
    document.getElementById(errorId).innerText = ""; // Clears error dynamically
}

function yourDoctor() {
    let symptoms = document.getElementById("symptoms").value.trim().toLowerCase();
    let symptomserror = document.getElementById("symptomserror");

    // Doctor list
    const doctors = {
        heart: { Name: "Dr. John DOE", Speciality: "Cardiologist", Image: "doctor1.webp", Description: "Expert in heart diseases", Contact: "john@gmail.com" },
        skin: { Name: "Dr. Alice Thrash", Speciality: "Dermatologist", Image: "doctor2.avif", Description: "Skin care and allergy specialist", Contact: "alice@gmail.com" },
        mental: { Name: "Dr. Mike Johnson", Speciality: "Neurologist", Image: "doctor4.jpg", Description: "Brain and nervous system specialist", Contact: "mike@gmail.com" },
        common: { Name: "Dr. Sarah Woods", Speciality: "General Physician", Image: "doctor3.jpg", Description: "Handles common illnesses and check-ups", Contact: "sarah@gmail.com" }
    };

    // Find doctor based on user input
    let assignedDoctor = null;
    for (let key in doctors) {
        if (symptoms.includes(key)) {
            assignedDoctor = doctors[key];
            break;
        }
    }

    if (!assignedDoctor) {
        symptomserror.innerText = "Please enter one of: Heart, Skin, Mental, or Common illnesses and check-ups.";
        return;
    }

    // Save doctor data to local storage
    let doctorHistory = JSON.parse(localStorage.getItem("doctorHistory")) || [];
    doctorHistory.push(assignedDoctor);
    localStorage.setItem("doctorHistory", JSON.stringify(doctorHistory));

    // Redirect after a short delay to ensure storage update
    setTimeout(() => {
        window.location.href = "services.html";
    }, 500);
}

// Clear doctor history
function clearDoctorHistory() {
    localStorage.removeItem("doctorHistory");
    document.getElementById("doctor-history").innerHTML = "No previous doctor assigned.";
}

// Login form validation
function loginPrompt(event) {
    event.preventDefault(); // Prevent form from refreshing

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let isvalid = true;

    document.getElementById("usernameerror").innerText = "";
    document.getElementById("emailerror").innerText = "";
    document.getElementById("passworderror").innerText = "";

    if (username.length < 3 || username.length > 15) {
        document.getElementById("usernameerror").innerText = "Username must be between 3 and 15 characters.";
        isvalid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("emailerror").innerText = "Please enter a valid email.";
        isvalid = false;
    }

    if (password.length < 8 || password.length > 15 || !/[A-Z]/.test(password)) {
        document.getElementById("passworderror").innerText = "Password must be between 8-15 characters and include at least one uppercase letter.";
        isvalid = false;
    }

    if (isvalid) {
        alert("INFORMATION OBTAINED");
    } else {
        alert("PLEASE CORRECT THE ERRORS");
    }
}




