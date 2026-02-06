const form = document.getElementById("contactform");
const error = document.getElementById("errormsg");

form.addEventListener("submit",function(e)
{
    e.preventDefault();

const name = document.getElementById("name").value .trim();

const email = document.getElementById("email").value .trim();

const message = document.getElementById("message").value .trim();

if(name==="" || email ===""|| message==="" ){
    errormsg .textContent = "All fields are required.";
    return;
}
 if(!email.includes("@")){
    errormsg .textContent = "Please enter the valid email.";
    return;
}
    errormsg .textContent = "Message send SUCCESFULLY!";
    errormsg .style.color = "green";
    form.reset();
});
