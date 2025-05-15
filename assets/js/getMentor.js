async function ambilData() {
    try {
        const response = await fetch("http://127.0.0.1:8000/api/mentor");

        if (!response.ok) {
            throw new Error("Network response was not ok " + response.statusText);
        }
        
        const result = await response.json();
        const tbody = document.getElementById("data-body");
        tbody.innerHTML = ""; // Kosongkan dulu isi tabel

        result.data.forEach(item => {
            const tr = document.createElement("tr");

            const tdnama = document.createElement("td");
            tdnama.textContent = item.nama ?? "Ajamm";

            const tdemail = document.createElement("td");
            tdemail.textContent = item.email ?? "-";

            const tdbidang = document.createElement("td");
            tdbidang.textContent = item.bidang_keahlian ?? "-";

            const tdtanggal = document.createElement("td");
            const date = new Date(item.created_at);
            tdtanggal.textContent = date.toLocaleDateString("id-ID");

            const tdstatus = document.createElement("td");
            tdstatus.innerHTML = `<span class="badge badge-success">Aktif</span>`; // kamu bisa ganti sesuai status sebenarnya

            const tdaksi = document.createElement("td");
            tdaksi.innerHTML = `
                <button class="btn btn-sm btn-warning"><i class="fas fa-edit"></i></button>
                <button class="btn btn-sm btn-danger"><i class="fas fa-trash"></i></button>
            `;

            tr.appendChild(tdnama);
            tr.appendChild(tdemail);
            tr.appendChild(tdbidang);
            tr.appendChild(tdtanggal);
            tr.appendChild(tdstatus);
            tr.appendChild(tdaksi);

            tbody.appendChild(tr);
        });

    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
}

ambilData();
