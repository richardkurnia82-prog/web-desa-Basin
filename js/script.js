// =====================================================================
// 1. EVENT LISTENER UTAMA WEBSITE
// =====================================================================

// Menunggu semua HTML selesai dimuat
document.addEventListener("DOMContentLoaded", function(){ // Menjalankan fungsi setelah HTML selesai dimuat



    // =====================================================================
    // 2. WARNING SELAMAT DATANG
    // =====================================================================

    // Mengecek apakah warning sudah pernah muncul
    if(!sessionStorage.getItem("welcomeShown")){ // Jika belum pernah muncul

        alert("Selamat Datang di Website Resmi Desa Basin"); // Menampilkan popup warning

        // Menyimpan data agar warning tidak muncul lagi
        sessionStorage.setItem("welcomeShown", "true");

    }



    // =====================================================================
    // 3. PESAN CONSOLE
    // =====================================================================

    // Menampilkan pesan di console browser
    console.log("Website Desa Basin Berhasil Dimuat!"); // Mengecek apakah file JS berhasil terhubung



    // =====================================================================
    // 4. UCAPAN BERDASARKAN WAKTU
    // =====================================================================

    // Mengambil elemen dengan id welcome-text
    const welcomeText = document.getElementById("welcome-text"); // Mengambil tulisan hero



    // Mengambil jam saat ini dari perangkat user
    const jam = new Date().getHours(); // Mengambil angka jam sekarang



    // Variabel ucapan default
    let salam = "Selamat Datang"; // Teks default



    // =====================================================================
    // 5. PENGKONDISIAN WAKTU
    // =====================================================================

    // Jika jam kurang dari 11
    if(jam < 11){ // Kondisi pagi

        salam = "Selamat Pagi"; // Mengubah salam menjadi pagi



    // Jika jam kurang dari 15
    }else if(jam < 15){ // Kondisi siang

        salam = "Selamat Siang"; // Mengubah salam menjadi siang



    // Jika jam kurang dari 18
    }else if(jam < 18){ // Kondisi sore

        salam = "Selamat Sore"; // Mengubah salam menjadi sore



    // Selain itu
    }else{ // Kondisi malam

        salam = "Selamat Malam"; // Mengubah salam menjadi malam

    }



    // =====================================================================
    // 6. TEKS BERJALAN
    // =====================================================================

    // Jika elemen welcome ditemukan
    if(welcomeText){ // Mengecek apakah elemen ada

        // Mengubah teks menjadi marquee berjalan
        welcomeText.innerHTML =
        `<marquee behavior="scroll" direction="left" scrollamount="8">
        ${salam}, Selamat Datang di Website Resmi Desa Basin
        </marquee>`; // Membuat teks berjalan dari kanan ke kiri

    }



    // =====================================================================
    // 7. ANIMASI CARD
    // =====================================================================

    // Mengambil semua card
    const cards = document.querySelectorAll(".card"); // Mengambil semua elemen card



    // Melakukan perulangan setiap card
    cards.forEach((card, index)=>{ // Perulangan semua card



        // Card awalnya transparan
        card.style.opacity = "0"; // Card disembunyikan sementara



        // Posisi card turun 30px
        card.style.transform = "translateY(30px)"; // Card digeser ke bawah



        // Memberi delay animasi
        setTimeout(()=>{ // Menjalankan animasi dengan jeda



            // Durasi animasi
            card.style.transition = "0.5s"; // Durasi animasi setengah detik



            // Card muncul
            card.style.opacity = "1"; // Card dimunculkan



            // Card kembali normal
            card.style.transform = "translateY(0)"; // Posisi card kembali normal



        }, index * 200); // Delay berbeda tiap card

    });

});



// =====================================================================
// 8. EFEK NAVBAR SAAT SCROLL
// =====================================================================

// Saat halaman discroll
window.addEventListener("scroll", function(){ // Menjalankan fungsi saat halaman digulir



    // Mengambil navbar
    const navbar = document.querySelector(".navbar"); // Mengambil elemen navbar



    // Jika scroll lebih dari 50px
    if(window.scrollY > 50){ // Mengecek posisi scroll



        // Navbar menjadi lebih solid
        navbar.style.background = "rgba(255,255,255,0.98)"; // Background navbar lebih jelas



        // Bayangan navbar lebih jelas
        navbar.style.boxShadow =
        "0 4px 20px rgba(0,0,0,0.1)"; // Shadow navbar diperbesar



    }else{ // Jika kembali ke atas



        // Navbar kembali normal
        navbar.style.background = "white"; // Background putih normal



        // Bayangan kembali tipis
        navbar.style.boxShadow =
        "0 2px 10px rgba(0,0,0,0.1)"; // Shadow kecil

    }

})
