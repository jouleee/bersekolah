async function ambilData() {
    try {
        const response = await fetch("http://127.0.0.1:8000/api/user");

        if (!response.ok) {
            throw new Error("Network response was not ok " + response.statusText);
        }
        
        const result = await response.json();
        // console.log("API response:", result);
        const tbody = document.getElementById("data-body");
        tbody.innerHTML = ""; // Clear existing rows
        // console.log("API response:", result);
        
        result.data.forEach(item => {
            const tr = document.createElement("tr");

            const tdNama = document.createElement("td");
            tdNama.textContent = item.name;

            const tdEmail = document.createElement("td");
            tdEmail.textContent = item.email;

            const tdPhone = document.createElement("td");
            tdPhone.textContent = item.phone;

            tr.appendChild(tdNama);
            tr.appendChild(tdEmail);
            tr.appendChild(tdPhone);
            tbody.appendChild(tr);
        });

        // console.log(result.data); // Optional: log the result
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
}

ambilData();
