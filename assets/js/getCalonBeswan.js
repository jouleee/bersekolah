async function ambilData() {
    try {
        const response = await fetch("http://127.0.0.1:8000/api/berkas-calon-beswan");

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const result = await response.json();
        const tbody = document.getElementById("data-body");
        tbody.innerHTML = "";

        // Jika result adalah array langsung, gunakan result saja
        const dataList = Array.isArray(result) ? result : result.data;

        dataList.forEach(item => {
            const tr = document.createElement("tr");

            // Foto
            const tdFoto = document.createElement("td");
            tdFoto.innerHTML = `<img src="${item.photo}" alt="Foto" style="width: 50px; height: 50px; object-fit: cover; border-radius: 5px;">`;

            // Nama
            const tdNama = document.createElement("td");
            tdNama.textContent = item.fullName;

            // Jenjang
            const tdJenjang = document.createElement("td");
            tdJenjang.textContent = item.school;

            // Email
            const tdEmail = document.createElement("td");
            tdEmail.textContent = item.email;

            // Tanggal Daftar
            const tdTanggal = document.createElement("td");
            tdTanggal.textContent = item.created_at ? new Date(item.created_at).toLocaleDateString() : "-";

            // Status
            const tdStatus = document.createElement("td");
            tdStatus.innerHTML = `<span class="badge badge-secondary">Belum diverifikasi</span>`; // Ganti sesuai kebutuhan

            // Aksi
            const tdAksi = document.createElement("td");
            tdAksi.innerHTML = `
                <button class="btn btn-sm btn-warning"><i class="fas fa-edit"></i></button>
                <button class="btn btn-sm btn-danger"><i class="fas fa-trash"></i></button>
            `;

            tr.appendChild(tdFoto);
            tr.appendChild(tdNama);
            tr.appendChild(tdJenjang);
            tr.appendChild(tdEmail);
            tr.appendChild(tdTanggal);
            tr.appendChild(tdStatus);
            tr.appendChild(tdAksi);

            tbody.appendChild(tr);
        });
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
}

ambilData();
