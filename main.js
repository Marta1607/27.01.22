function pobieranie() {
const podstawa = document.getElementById('podstawa').value
const wynik = document.getElementById('wynik')
const puszki = Math.ceil(podstawa/4)
wynik.innerHTML = "Liczba jednokitrowych puszek farby potrzebnych do pomalowania wynisi: "+ puszki
    }
