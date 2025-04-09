// Add an event listener to the form that upon submits creates a new teacher
// When the teacher is created redirect to the teachers page
const teacherform = document.querySelector("teacherform")
teacher.adddEventListener("submit", async(e)=>{
    e.preventDefault();

    const formData = new FormData(teacherForm);
    const teacherData = Object.formEntries(formData.entries(formData));

const response = await fetch("/add/teachers", {
    method: "Post",
    headers: {
        "Content-Type": "application/json"
    },
    body:JSON.stringify(teacherData),
})
const FormData= await response.JSON()
console.log(FormData)
})