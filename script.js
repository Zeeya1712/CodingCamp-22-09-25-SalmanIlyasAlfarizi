// Update current time
function updateCurrentTime() {
    const now = new Date();
    const options = {
        timeZone: 'GMT',
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short'
    };

    const timeString = now.toLocaleDateString('en-US', options);
    document.getElementById('currentTime').textContent = timeString;
}

// Update time every second
setInterval(updateCurrentTime, 1000);

// Handle form submission
document.getElementById('messageForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const tanggal = document.getElementById('tanggal').value;
    const jenisKelamin = document.querySelector('input[name="jenis_kelamin"]:checked');
    const pesan = document.getElementById('pesan').value;

    // Format date
    let formattedDate = '';
    if (tanggal) {
        const dateObj = new Date(tanggal);
        const day = String(dateObj.getDate()).padStart(2, '0');
        const month = String(dateObj.getMonth() + 1).padStart(2, '0');
        const year = dateObj.getFullYear();
        formattedDate = `${day}/${month}/${year}`;
    }

    // Format gender
    let formattedGender = '';
    if (jenisKelamin) {
        formattedGender = jenisKelamin.value === 'Laki-Laki' ? 'Laki - Laki' : 'Perempuan';
    }

    // Update output
    document.getElementById('outputNama').textContent = nama || 'Salman Ilyas Alfarizi';
    document.getElementById('outputEmail').textContent = email || 'iliassalman59@gmail.com';
    document.getElementById('outputTanggal').textContent = formattedDate || '01/16/2009';
    document.getElementById('outputKelamin').textContent = formattedGender || 'Laki - Laki';
    document.getElementById('outputPesan').textContent = pesan || 'Lagi Belajar buat Website';

    // Clear form
    document.getElementById('messageForm').reset();
});

// Initialize time on page load
updateCurrentTime();