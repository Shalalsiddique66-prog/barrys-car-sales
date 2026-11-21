(function () {
    "use strict";

    var form = document.getElementById("enquiry-form");
    if (!form) { return; }

    var summary = document.getElementById("error-summary");
    var success = document.getElementById("success");

    var rules = [
        { id: "name", missing: "Enter your full name." },
        { id: "email", missing: "Enter your email address.",
          invalid: "Enter an email address in the correct format, like name@example.com." }
    ];

    function setError(input, message) {
        var err = document.getElementById(input.id + "-error");
        if (message) {
            err.textContent = message;
            err.hidden = false;
            input.setAttribute("aria-invalid", "true");
        } else {
            err.textContent = "";
            err.hidden = true;
            input.removeAttribute("aria-invalid");
        }
    }

    function check(rule) {
        var input = document.getElementById(rule.id);
        var value = input.value.trim();
        var message = "";
        if (!value) {
            message = rule.missing;
        } else if (rule.invalid && !input.checkValidity()) {
            message = rule.invalid;
        }
        setError(input, message);
        return message ? { input: input, message: message } : null;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        success.hidden = true;

        var problems = rules.map(check).filter(Boolean);

        if (problems.length) {
            summary.innerHTML = "<h2>There is a problem</h2><ul></ul>";
            var list = summary.querySelector("ul");
            problems.forEach(function (p) {
                var li = document.createElement("li");
                var a = document.createElement("a");
                a.href = "#" + p.input.id;
                a.textContent = p.message;
                a.addEventListener("click", function (e) {
                    e.preventDefault();
                    p.input.focus();
                });
                li.appendChild(a);
                list.appendChild(li);
            });
            summary.hidden = false;
            summary.focus();
            return;
        }

        summary.hidden = true;
        form.reset();
        success.hidden = false;
        success.focus();
    });
    rules.forEach(function (rule) {
        document.getElementById(rule.id).addEventListener("input", function () {
            if (this.getAttribute("aria-invalid")) { check(rule); }
        });
    });
})();

(function () {
    "use strict";
    var select = document.getElementById("car");
    if (!select) { return; }
    var wanted = new URLSearchParams(window.location.search).get("car");
    if (!wanted) { return; }
    for (var i = 0; i < select.options.length; i++) {
        if (select.options[i].value === wanted) {
            select.selectedIndex = i;
            break;
        }
    }
})();
