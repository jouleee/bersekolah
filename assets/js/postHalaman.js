// document.getElementById("myForm").addEventListener("submit", async (e) => {
//     e.preventDefault();

//     const form = e.target;
//     const formData = new FormData(form);

//     // Tambahkan hanya field yang sesuai dengan struktur tabel
//     const data = {
//         judul_halaman: formData.get("judul_halaman"),
//         slug: formData.get("slug"),
//         status: formData.get("status"),
//         gambar: formData.get("gambar")
//         // Tidak perlu user_id, created_at, updated_at → ditangani backend
//     };

//     try {
//         const response = await fetch("http://127.0.0.1:8000/api/post_halaman", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json",
//                 // Sertakan token jika perlu autentikasi
//                 // Authorization: `Bearer ${token}`
//             },
//             body: JSON.stringify(data),
//         });

//         if (!response.ok) {
//             throw new Error("Gagal menyimpan data: " + response.statusText);
//         }

//         const result = await response.json();
//         console.log(result);
//         alert("Halaman berhasil ditambahkan!");
//     }
//     catch (error) {
//         console.error("Terjadi kesalahan:", error);
//         alert("Gagal menambahkan halaman.");
//     }
// });

document.getElementById("myForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form); // Ini otomatis handle file juga

    try {
        const response = await fetch("http://127.0.0.1:8000/api/post_halaman", {
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
    } catch (error) {
        console.error("Terjadi kesalahan:", error);
        alert("Gagal menambahkan halaman: " + error.message);
    }
});
