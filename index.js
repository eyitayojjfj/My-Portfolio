var icon = document.getElementById("icon");
const body = document.getElementById("body");
        icon.onclick = function(){
           body.classList.toggle("dark-theme")
           if(body.classList.contains("dark-theme")){
               icon.src = "3efc11be-0df3-4228-b9e5-77b4e01d97d0.jpg";
           }else{
               icon.src = "Free Printable Sun Coloring Pages for Kids.jpg"
           }
}
const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone-number");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const btn = document.getElementById("submit");
const postData = async (value) => {
  const data = await fetch("http://localhost:8080/data/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(value),
  });
};
btn.addEventListener("click", (e) => {
  e.preventDefault();
  const values = {
    id: "1",
    "full-name": fullName.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  };
  postData(values)
});
