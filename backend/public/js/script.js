document.querySelector("#form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = String(e.target.email.value).toLowerCase();

    if (name.split(" ").length < 2) {
        alert("Coloque seu nome e sobrenome");
        return;
    }

    const res = await fetch("http://localhost:4040/subscribe", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
    });

    const data = await res.json();

    if (!res.ok) {
        return alert(data.error || "Erro desconhecido");
    }

    window.location.href = "login-success.html";
});
