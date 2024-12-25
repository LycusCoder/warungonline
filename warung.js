// warung.js

// Menangani tombol chatbot
document.getElementById('chatbotButton').addEventListener('click', function() {
    document.getElementById('chatbotContainer').classList.toggle('hidden');
});

document.getElementById('closeChatbot').addEventListener('click', function() {
    document.getElementById('chatbotContainer').classList.add('hidden');
});

// Menangani gambar zoomable
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.zoomable');
    images.forEach(image => {
        image.addEventListener('click', function () {
            const modal = document.createElement('div');
            modal.classList.add('fixed', 'inset-0', 'bg-black', 'bg-opacity-75', 'flex', 'items-center', 'justify-center', 'z-50');
            modal.innerHTML = `
                <div class="relative">
                    <img src="${this.src}" alt="${this.alt}" class="max-w-full max-h-full">
                    <button class="absolute top-0 right-0 m-4 text-white text-2xl">&times;</button>
                </div>
            `;
            document.body.appendChild(modal);
            modal.querySelector('button').addEventListener('click', function () {
                document.body.removeChild(modal);
            });
        });
    });

    // Menangani tombol pencarian
    document.getElementById('searchButton').addEventListener('click', function() {
        var searchContainer = document.getElementById('searchContainer');
        searchContainer.classList.toggle('hidden');
    });

    // Countdown Timer
    function startCountdown(duration, display) {
        var timer = duration, hours, minutes, seconds;
        setInterval(function () {
            hours = parseInt(timer / 3600, 10);
            minutes = parseInt((timer % 3600) / 60, 10);
            seconds = parseInt(timer % 60, 10);

            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = hours + ":" + minutes + ":" + seconds;

            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }

    // Memulai countdown saat halaman dimuat
    var countdownDuration = 60 * 60 * 24; // 24 hours in seconds
    var display = document.querySelector('#countdown');
    startCountdown(countdownDuration, display);
});
