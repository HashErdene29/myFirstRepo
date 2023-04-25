console.log("start")
const registerBtn = document.getElementById("registerForm");
const btn = document.getElementById("btnRegisterPatient");
if(registerBtn){
    registerBtn.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("test");
    });
}


    // registerBtn.addEventListener("click", ev => register(ev));
    // console.log("eee", registerBtn);

    // function register(ev){
    //     ev.preventDefault();
    //     console.log("test")
    // }
// registerForm.addEventListener("click", (e) => {
//     e.preventDefault();
    // let patient_id = document.getElementById("patientIdNumber");
    // let firstname = document.getElementById("firstName");
    // let middle_initials = document.getElementById("middleInitials");
    // let lastName = document.getElementById("lastName");

    // console.log("values => ", patient_id, firstname, middle_initials, lastName);
// })