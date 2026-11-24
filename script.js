
function register() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user === "" || pass === "") {
    alert("Isi semua data!");
    return;
  }

  localStorage.setItem("username", user);
  localStorage.setItem("password", pass);

  alert("Pendaftaran berhasil!");
}

function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (
    user === localStorage.getItem("username") &&
    pass === localStorage.getItem("password")
  ) {
    document.getElementById("hasil").innerHTML =
      "Selamat datang, " + user + " 🌸";
  } else {
    alert("Username atau password salah!");
  }
}

function logout() {
  document.getElementById("hasil").innerHTML =
    "Anda sudah logout.";
    }
