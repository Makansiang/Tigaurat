const scriptURL = 'https://script.google.com/macros/s/AKfycby3JiUSgWtI6tRuFjebxlxzvUKTcS_7euwGz-PTs5i-m9w5QSDBNMSh2nzlrF6irBJ1XA/exec'
      const form = document.forms['kontaku']
      const kirim = document.querySelector('.kirim');
      const loading = document.querySelector('.load');
      const alert1 = document.querySelector('.betul');
      const alert2 = document.querySelector('.salah');
      form.addEventListener('submit', e => {
        e.preventDefault()
// pencet kirim tampil loading
        loading.classList.toggle('d-none');
        kirim.classList.toggle('d-none');
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => {
            // balikin tombol kirim  dan munculkan alert sukses
          loading.classList.toggle('d-none');
        kirim.classList.toggle('d-none');
        alert1.classList.toggle('d-none');
        
        form.reset();
            console.log('Success!', response)
        })
          .catch(error => console.error('Error!', error.message))

        
      })
