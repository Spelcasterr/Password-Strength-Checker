const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("masukan password anda: ", function(password) {
    console.log('password anda:', password);

    let skor = 0;

    if (password.length >= 8) {
        console.log('password anda aman');
        skor++;
    } else {
        console.log('password anda tidak aman');
    }

    if (/[A-Z]/.test(password)) {
        console.log('password anda mengandung huruf kapital');
        skor++;
    } else {
        console.log('password anda tidak mengandung huruf kapital');
    }

    if (/[a-z]/.test(password)) {
        console.log('password anda mengandung huruf kecil');
        skor++;
    } else {
        console.log('password anda tidak mengandung huruf kecil');
    }

    if (/[0-9]/.test(password)) {
        console.log('password anda mengandung angka');
        skor++;
    } else {
        console.log('password anda tidak mengandung angka');
    }
    
    if (/[^A-Za-z0-9]/.test(password)) {
        console.log('password anda mengandung karakter spesial');
        skor++;
    } else {
        console.log('password anda tidak mengandung karakter spesial');
    }

    console.log('skor keamanan password anda:', skor);

    input.close();
});


