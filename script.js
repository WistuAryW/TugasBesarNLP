const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");

let userMessage;

const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p>${message}</p>`: `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`
    chatLi.innerHTML = chatContent;
    return chatLi;
}

const handleChat = ()=> {
    userMessage = chatInput.value.trim();
    if(!userMessage) return;
    chatInput.value = "";

    let jawaban;

    if (userMessage.includes("ekstrakurikuler")) {
        jawaban = "SMPN 1 Kesamben memiliki beberapa kstrakurikule yaitu, Multimedia, Paduan Suara, Basket, PickelBall, PASKIBRAKA, PRAMUKA, Seni Tari, PMR, Kompetisi Sins Nasional(MATEMATIKA,IPS,IPA), AL-Banjari, Atletik, Sepak Bola, Voli dan Nembang Jawa";
    } else if (userMessage.includes("fasilitas")) {
        jawaban = "Kampus kami dilengkapi dengan fasilitas modern, termasuk perpustakaan, ruang bimbingan konseling, masjid, pos penjagaan, ruang kepala sekolah, Laboratorium Ilmu Pengetahuan Alam, Lapangan Basket, Panggung / Sanggar Budaya, Laboratorium Teknologi Informasi dan Komunikasi, dan taman hias";
    } else if (userMessage.includes("biaya sekolah")) {
        jawaban = "Informasi tentang biaya sekolah dapat ditemukan di halaman resmi kami. Silakan kunjungi situs web kami.";
    } else if (userMessage.includes("alamat")) {
        jawaban = "Jl. Taman Siswa No.3, Ds. Pojokrejo, Kec. Kesamben, Kab. Jombang, 61484";
    }
    else if (userMessage.includes("kepala sekolah")) {
        jawaban = "Kepalah sekolah SMPN 1 Kesamben sekarang adalah Irawan Budi Santoso, S.Pd";
    }
    else if (userMessage.includes("sejara")) {
        jawaban = "Pada tahun 1982 berdirilah sebuah lembaga pendidikan pemerintah yang berlokasi di jalan Taman Siswa nomor 3, Kesamben, Jombang, Jawa Timur dengan Surat Keputusan Menteri  Pendidikan dan Kebudayaan nomor 0299/0/1982, tanggal 9 Oktober 1982 yang berlaku surut mulai tanggal 1 Juli 1982 yang sebelumnya merupakan sekolah Filial dari SMP Negeri 1 Mojoagung. Untuk itu hari lahir sekolah ditetapkan tanggal 9 Oktober.";
    }
     else {
        jawaban = "Maaf, kami tidak dapat menemukan informasi yang Anda cari. Silakan coba pertanyaan lain.";
    };

    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);


    let incomingChatLi1;

    setTimeout(() => {
        incomingChatLi1 = createChatLi("Mengetik..", "incoming");
        chatbox.appendChild(incomingChatLi1);
    }, 2000);

    setTimeout(() => {
        chatbox.removeChild(incomingChatLi1);
        const incomingChatLi = createChatLi(jawaban, "incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
    }, 4500);

    
}

sendChatBtn.addEventListener("click", handleChat)