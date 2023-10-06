const form = document.getElementById("form-activation");
const inputOwnerMail = document.getElementById("owner-mail");


form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const ownerMail = inputOwnerMail.value;
    const formSubmitterDomain = `https://formsubmitter.fast-page.org/submit?target=${ownerMail}`;
    form.action = formSubmitterDomain;
    form.submit();
})
