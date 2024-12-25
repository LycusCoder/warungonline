// warung.js

// Menangani tombol chatbot
document.getElementById('chatbotButton').addEventListener('click', function() {
    console.log('Chatbot button clicked');
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
});
