document.getElementById("scholarshipForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form); // Ini otomatis handle file juga

    try {
        const response = await fetch("http://127.0.0.1:8000/api/post-berkas-calon-beswan", {
            method: "POST",
            body: formData, // kirim FormData, bukan JSON
            headers: {
                "Accept": "application/json",
                // Jangan isi Content-Type, biarkan browser yang atur
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Gagal menyimpan data.");
        }

        const result = await response.json();
        console.log(result);
        alert("Halaman berhasil ditambahkan!");
        form.reset(); // reset form setelah submit
        window.location.href = "index.php"; // redirect ke index.php
    } catch (error) {
        console.error("Terjadi kesalahan:", error);
        alert("Gagal menambahkan halaman: " + error.message);
    }
});
