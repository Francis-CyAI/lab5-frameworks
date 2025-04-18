let themeToggle = document.getElementById("themeToggle")
if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
    });

}

let contactForm = document.getElementById("contactForm")
if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("nameInput").value.trim();
        const message =
            document.getElementById("messageInput").value.trim();
        if (name === "" || message === "") {
            alert("Please fill out all fields.");
        } else {
            document.getElementById("response").innerText = `Thanks, ${name}.
We'll get back to you soon!`;
            // Optional: reset form
            e.target.reset();
        }
    });

}

let loadUsersBtn = document.getElementById("loadUsersBtn")
if (loadUsersBtn) {
    loadUsersBtn.addEventListener("click",
        async () => {
            try {
                const res = await
                    fetch('https://jsonplaceholder.typicode.com/users');
                const users = await res.json();
                const userList = document.getElementById("userList");
                userList.innerHTML = "";
                users.forEach(user => {
                    const li = document.createElement("li");
                    li.textContent = user.name;
                    userList.appendChild(li);
                });
            } catch (err) {
                console.error("Failed to load users:", err);
            }
        });

}

let questionClass = document.querySelectorAll(".question")
if (questionClass) {
    questionClass.forEach((q) => {
        q.addEventListener("click", () => {
            q.nextElementSibling.classList.toggle("visible");
        });
        3
    });
}

let backToTopBtn = document.getElementById("backToTopBtn")

if (backToTopBtn) {

    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY || window.pageYOffset;
        var viewportHeight = window.innerHeight;

        if (scrollPosition > viewportHeight) {
            // backToTopBtn.classList.remove('hidden');
            // backToTopBtn.classList.add('visible');
            backToTopBtn.classList.toggle('visible');
        } else {
            // backToTopBtn.classList.remove('visible');
            // backToTopBtn.classList.add('hidden');
            backToTopBtn.classList.toggle('visible');
        }
    });

    backToTopBtn.addEventListener("click", () => {
        window.location.href = `#top`;
    })
}