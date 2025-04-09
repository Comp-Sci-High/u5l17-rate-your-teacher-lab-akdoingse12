// Add an event listener to the form that upon submits creates a new rating
// When the rating is created redirect to the ratings page
const ratingform = document.querySelector("ratingform")
rating.adddEventListener("submit", async(e)=>{
    e.preventDefault();

    const formData = new FormData(ratingForm);
    const ratingData = Object.formEntries(formData.entries(ratingData));

const response = await fetch("/add/rating", {
    method: "Post",
    headers: {
        "Content-Type": "application/json"
    },
    body:JSON.stringify(ratingData),
})
const FormData= await response.JSON()
console.log(ratingData)
})