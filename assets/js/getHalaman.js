async function ambilData() {
    try {
        const response = await fetch("http://127.0.0.1:8000/api/halaman");

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

            const tdjudul_halaman = document.createElement("td");
            tdjudul_halaman.textContent = item.judul_halaman;

            const tdslug = document.createElement("td");
            tdslug.textContent = item.slug;

            const tdcreated_at = document.createElement("td");
            tdcreated_at.textContent = item.created_at;

            const tdstatus = document.createElement("td");
            tdstatus.textContent = item.status;

            const tdaksi = document.createElement("td");
            tdaksi.innerHTML = `
                <button class="btn btn-sm btn-warning"><i class="fas fa-edit"></i></button>
                <button class="btn btn-sm btn-danger"><i class="fas fa-trash"></i></button>
            `;

            //  <th>Judul Halaman</th>
            //  <th>Slug</th>
            //  <th>Tanggal Dibuat</th>
            //  <th>Status</th>

            tr.appendChild(tdjudul_halaman);
            tr.appendChild(tdslug);
            tr.appendChild(tdcreated_at);
            tr.appendChild(tdstatus);
            tr.appendChild(tdaksi);
            tbody.appendChild(tr);
        });

        // console.log(result.data); // Optional: log the result
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
}

ambilData();
