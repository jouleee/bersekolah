document.getElementById("myForm").addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent the form from submitting the default way
    console.log("Hello World");

    const form = e.target;
    const formData = new FormData(form); // Create a FormData object from the form

    const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        password: formData.get("password"),
        password_confirmation: formData.get("password_confirmation"),
    }

    try {
        const response = await fetch("http://127.0.0.1:8000/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error("Network response was not ok " + response.statusText);
        }

        const result = await response.json();
        console.log(result); // Handle the result as needed
    }
    catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
})