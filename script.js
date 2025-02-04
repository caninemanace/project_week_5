function clearError(errorId) {
    document.getElementById(errorId).innerText = ""; // Clears the error message dynamically
}

function yourDoctor() {
    let symptoms = document.getElementById("symptoms").value.trim();
    let symptomserror = document.getElementById("symptomserror");
    
    // Doctor list
    const doctors = [
        {Name: "Dr. John DOE", Speciality: "Cardiologist", Image: "doctor1.webp", Description: "Expert in heart diseases", Contact:"john@gmail.com"},
        {Name: "Dr. Alice Thrash", Speciality: "Dermatologist", Image: "doctor2.avif", Description: "Skin care and allergy specialist", Contact:"alice@gmail.com"},
        {Name: "Dr. Mike Johnson", Speciality: "Neurologist", Image: "doctor4.jpg", Description: "Brain and nervous system specialist", Contact:"mike@gmail.com"},
        {Name: "Dr. Sarah Woods", Speciality: "General Physician", Image: "doctor3.jpg", Description: "Handles common illnesses and check-ups", Contact:"sarah@gmail.com"},
    ];

    // Error checking: Ensure symptoms match predefined categories
    if (!["Heart", "Skin", "Mental", "Common illnesses and check-ups"].includes(symptoms)) {
        symptomserror.innerText = "Please enter one of: Heart, Skin, Mental, or Common illnesses and check-ups (case-sensitive).";
        return; // Stop function if input is invalid
    }

    // Assign a doctor based on symptoms
    let assignedDoctor;
    if (symptoms === "Heart") {
        assignedDoctor = doctors[0]; // Dr. John DOE (Cardiologist)
    } else if (symptoms === "Skin") {
        assignedDoctor = doctors[1]; // Dr. Alice Thrash (Dermatologist)
    } else if (symptoms === "Mental") {
        assignedDoctor = doctors[2]; // Dr. Mike Johnson (Neurologist)
    } else if (symptoms === "Common illnesses and check-ups") {
        assignedDoctor = doctors[3]; // Dr. Sarah Woods (General Physician)
    }

    // Display assigned doctor
    document.getElementById("doctor-info").innerHTML = `
        <h3>Assigned Doctor:</h3>
        <p><strong>Name:</strong> ${assignedDoctor.Name}</p>
        <p><strong>Specialty:</strong> ${assignedDoctor.Speciality}</p>
        <p><strong>Description:</strong> ${assignedDoctor.Description}</p>
        <p><strong>Contact:</strong> ${assignedDoctor}</p>
        <img src="${assignedDoctor.Image}" alt="Doctor Image" width="150">
    `;

     // Save the assigned doctor to localStorage
     let doctorHistory = JSON.parse(localStorage.getItem("doctorHistory")) || []; // Get existing history
     doctorHistory.push(assignedDoctor); // Add new doctor to history
     localStorage.setItem("doctorHistory", JSON.stringify(doctorHistory)); // Save back to localStorage
 
     // Redirect to the new page
     window.location.href = "services.html"; 
}

function clearDoctorHistory() {
    localStorage.removeItem("assignedDoctor");
    document.getElementById("doctor-history").innerHTML = "No previous doctor assigned.";
}
function loginPrompt(){
    event.preventDefault();//prevent refreshing of the screen

    let username= document.getElementById("username").value.trim();
    let email= document.getElementById("email").value.trim();
    let password= document.getElementById("password").value;
    let isvalid=true

    //to clear prevous errors
    document.getElementById("usernameerror").innerText="";
    document.getElementById("emailerror").innerText="";
    document.getElementById("passworderror").innerText="";

    //username validation
    if(username.length < 3 || username.length > 15){
        document.getElementById("usernameerror").innerText="Username must be more between 3 and 15 characters.";
        isvalid=false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        document.getElementById("emailerror").innerText="Please enter the correct email";
        isvalid=false
    }

    
    if(password.length < 3 || password.length > 15){
        document.getElementById("passworderror").innerText = "password must be 8 characters long and include a mix of uppercase";
        isvalid=false
    }
    if(isvalid){
        alert("INFORMATION OBTAINED")
    }else{
        alert("PLEASE CORRECT THE ERRORS")
    }
}



