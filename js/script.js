// =====================================================================
// 1. EVENT LISTENER UTAMA WEBSITE
// =====================================================================

// Menunggu semua HTML selesai dimuat
document.addEventListener("DOMContentLoaded", function(){ // Menjalankan fungsi setelah HTML selesai dimuat



    // =====================================================================
    // 2. PESAN CONSOLE
    // =====================================================================

    // Menampilkan pesan di console browser
    console.log("Website Desa Basin Berhasil Dimuat!"); // Mengecek apakah file JS berhasil terhubung



    // =====================================================================
    // 3. UCAPAN BERDASARKAN WAKTU
    // =====================================================================

    // Mengambil elemen dengan id welcome-text
    const welcomeText = document.getElementById("welcome-text"); // Mengambil tulisan hero



    // Mengambil jam saat ini dari perangkat user
    const jam = new Date().getHours(); // Mengambil angka jam sekarang



    // Variabel ucapan default
    let salam = "Selamat Datang"; // Teks default



    // =====================================================================
    // 4. PENGKONDISIAN WAKTU
    // =====================================================================

    // Jika jam kurang dari 11
    if(jam < 11){

        salam = "Selamat Pagi";



    // Jika jam kurang dari 15
    }else if(jam < 15){

        salam = "Selamat Siang";



    // Jika jam kurang dari 18
    }else if(jam < 18){

        salam = "Selamat Sore";



    // Selain itu
    }else{

        salam = "Selamat Malam";

    }



    // =====================================================================
    // 5. TEKS BERJALAN NORMAL HP & LAPTOP
    // =====================================================================

    // Jika elemen ditemukan
    if(welcomeText){

        // Isi teks hero
        welcomeText.innerHTML =
        `<marquee behavior="scroll" direction="left">
        ${salam}, Selamat Datang di Website Resmi Desa Basin
        </marquee>`; // Membuat teks berjalan normal di HP & Laptop

    }



    // =====================================================================
    // 6. ANIMASI CARD
    // =====================================================================

    // Mengambil semua card
    const cards = document.querySelectorAll(".card");



    // Perulangan semua card
    cards.forEach((card, index)=>{



        // Card transparan
        card.style.opacity = "0";



        // Card turun sedikit
        card.style.transform = "translateY(30px)";



        // Delay animasi
        setTimeout(()=>{



            // Durasi animasi
            card.style.transition = "0.5s";



            // Card muncul
            card.style.opacity = "1";



            // Posisi normal
            card.style.transform = "translateY(0)";



        }, index * 200);

    });

});



// =====================================================================
// 7. EFEK NAVBAR SAAT SCROLL
// =====================================================================

// Saat halaman discroll
window.addEventListener("scroll", function(){



    // Mengambil navbar
    const navbar = document.querySelector(".navbar");



    // Jika scroll lebih dari 50px
    if(window.scrollY > 50){



        // Navbar lebih solid
        navbar.style.background = "rgba(255,255,255,0.98)";



        // Shadow lebih jelas
        navbar.style.boxShadow =
        "0 4px 20px rgba(0,0,0,0.1)";



    }else{



        // Navbar normal
        navbar.style.background = "white";



        // Shadow normal
        navbar.style.boxShadow =
        "0 2px 10px rgba(0,0,0,0.1)";

    }

});
