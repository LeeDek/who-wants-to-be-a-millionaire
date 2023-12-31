// Get users from local storage
function getUsers() {
    var usersString = localStorage.getItem("users");
    if (usersString) {
        return JSON.parse(usersString);
    }
    else {
        return [];
    }
}
var usersString = localStorage.getItem("users");
if (usersString) {
    // Convert string to array
    window.onload = function () {
        var usersFromLocalStorage = getUsers();
        renderUsers(usersFromLocalStorage);
    };
}
function handleRegisterFormSubmit(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.name.value;
        var password = ev.target.password.value;
        var nameRoot = document.querySelector("#rootName");
        if (!nameRoot)
            throw new Error("couldnt find rootName html element");
        checkUserExists(name, password);
        // const usersFromLocalStorage = getUsers();
        renderUsers(users);
        ev.target.reset();
        var usersJson = JSON.stringify(users);
        localStorage.setItem("users", usersJson);
    }
    catch (error) {
        console.error(error);
    }
}
function checkUserExists(name, password) {
    var existingUser = users.find(function (user) { return user.userName === name && user.password === password; });
    if (existingUser) {
        alert("User already exists");
    }
    else {
        users.push(new User(name, password));
    }
}
function renderUsers(usersArray) {
    // יש לוודא קיום של אלמנט עם ה-id #rootName בדף
    var nameRoot = document.querySelector("#rootName");
    if (!nameRoot) {
        throw new Error("Could not find #rootName element");
    }
    // בדיקה אם יש לך משתנה users והוא לא ריק, ואז להשתמש בו
    var userName = usersArray.length > 0 ? usersArray[usersArray.length - 1].userName : "";
    // בניית התבנית ה-HTML עם המשתנה userName
    var html = "\n      <div dir=\"ltr\" class=\"row\">\n        <div class=\"background-iamge\">\n          <div class=\"container-txt\">\n            <h2 class=\"heading\">   It's great that you signed up for it  " + userName + "</h2> \n            <h3>Welcome to: <br> Who Wants to Be a Millionaire?</h3>\n            <div class=\"mill\">\n              <p>$1 Million</p>\n            </div>\n            <div class=\"win\">\n              <p>$500,000</p>\n              <p>$250,000</p>\n              <p>$100,000</p>\n              <p>$50,000</p>\n              <p>$25,000</p>\n              <p>$15,000</p>\n              <p>$12,000</p>\n              <p>$10,000</p>\n              <p>$7,500</p>\n              <p>$5,000</p>\n              <p>$3,000</p>\n              <p>$2,000</p>\n              <p>$1,000</p>\n              <p>$500</p>\n            </div>\n            <button id=\"play\">Play</button>\n          </div>\n        </div>\n      </div>\n    ";
    var newhtml = html;
    // החלפת התוכן של האלמנט ב-#rootName עם התבנית החדשה
    nameRoot.innerHTML = newhtml;
    // Add the event listener to the "Play" button
    var playButton = nameRoot.querySelector("#play");
    if (playButton) {
        playButton.addEventListener("click", function () {
            // Replace "YOUR_URL_HERE" with the URL of the page you want to navigate to
            window.location.href = " /Who-want-to-be-a-millionaire/view/single-page.html";
        });
    }
}
