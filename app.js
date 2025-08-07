function updateContent() {
  const verse = document.getElementById('newVerse').value;
  const trans = document.getElementById('newVerseTrans').value;
  const vSource = document.getElementById('verseSource').value;
  const quote = document.getElementById('newQuote').value;
  const qSource = document.getElementById('quoteSource').value;

  if (verse && trans && vSource) {
    document.getElementById('verse').innerHTML = verse + '<br><br><span class="highlight">ژباړه:</span> ' + trans;
    document.querySelectorAll('.source')[0].innerText = vSource;
  }
  if (quote && qSource) {
    document.getElementById('quote').innerText = quote;
    document.querySelectorAll('.source')[1].innerText = qSource;
  }

  localStorage.setItem("verse", verse);
  localStorage.setItem("trans", trans);
  localStorage.setItem("vSource", vSource);
  localStorage.setItem("quote", quote);
  localStorage.setItem("qSource", qSource);
}

// Load saved content
window.onload = () => {
  if (localStorage.getItem("verse")) {
    document.getElementById('verse').innerHTML =
      localStorage.getItem("verse") + '<br><br><span class="highlight">ژباړه:</span> ' + localStorage.getItem("trans");
    document.querySelectorAll('.source')[0].innerText = localStorage.getItem("vSource");
    document.getElementById('quote').innerText = localStorage.getItem("quote");
    document.querySelectorAll('.source')[1].innerText = localStorage.getItem("qSource");
  }

  if (!navigator.onLine) {
    document.getElementById("status").style.backgroundColor = "gray";
  } else {
    document.getElementById("status").style.backgroundColor = "green";
  }
};
