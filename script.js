function hitungNilai() {

    // Mengambil nilai dari input
    let nilai1 = Number(document.getElementById("nilai1").value);
    let nilai2 = Number(document.getElementById("nilai2").value);
    let nilai3 = Number(document.getElementById("nilai3").value);
    let nilai4 = Number(document.getElementById("nilai4").value);
    let nilai5 = Number(document.getElementById("nilai5").value);

    // Mengecek apakah semua nilai sudah diisi
    if (
        document.getElementById("nilai1").value === "" ||
        document.getElementById("nilai2").value === "" ||
        document.getElementById("nilai3").value === "" ||
        document.getElementById("nilai4").value === "" ||
        document.getElementById("nilai5").value === ""
    ) {
        document.getElementById("hasil").innerHTML =
            "<p>Silakan masukkan semua nilai terlebih dahulu!</p>";

        return;
    }

    // Menghitung total
    let total = nilai1 + nilai2 + nilai3 + nilai4 + nilai5;

    // Menghitung rata-rata
    let rataRata = total / 5;

    // Mencari nilai tertinggi
    let tertinggi = Math.max(
        nilai1,
        nilai2,
        nilai3,
        nilai4,
        nilai5
    );

    // Mencari nilai terendah
    let terendah = Math.min(
        nilai1,
        nilai2,
        nilai3,
        nilai4,
        nilai5
    );

    // Menampilkan hasil
    document.getElementById("hasil").innerHTML = `
        <h2>Hasil Perhitungan</h2>

        <p>Total Nilai = ${total}</p>

        <p>Rata-rata = ${rataRata}</p>

        <p>Nilai Tertinggi = ${tertinggi}</p>

        <p>Nilai Terendah = ${terendah}</p>
    `;
}
