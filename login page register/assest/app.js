let username_input = document.getElementById("username");
let password_input = document.getElementById("password");
let email_input_register = document.getElementById("email");
let password_register_input = document.getElementById("password_register");
let password_register_repeat_input = document.getElementById("demo");
/////
let user_label = document.getElementById("user_label");
let pass_label = document.getElementById("pass_label");
let email_label_register = document.getElementById("email_label");
let pass_register_label = document.getElementById("pass_register_label");
let pass_register_repeat_label = document.getElementById("pass_register_repeat_label");
////
let eye = document.getElementById("eye");
let eye_slash = document.getElementById("eye_slash");
let eye_register = document.getElementById("eye_register");
let eye_slash_register = document.getElementById("eye_slash_register");
let eye_register_repeat = document.getElementById("eye_register_repeat");
let eye_slash_register_repeat = document.getElementById("eye_slash_register_repeat");
////
let user_icon = document.getElementById("user-icon");
let email_icon = document.getElementById("email-icon");
////
let email_box = document.getElementById("email_box");
let password_register_box = document.getElementById("password_box");
let password_repeat_register_box = document.getElementById("password_repeat_box");
let text_register = document.getElementById("text_register");
////
let register_form = document.getElementById("form_register");
let exit_icon = document.getElementById("exit_icon");
username_input.addEventListener("focus", () => {
    user_label.classList.add('move');
    username_input.classList.add('move');
    user_icon.classList.add('move');
});
username_input.addEventListener("focusout", () => {
    user_label.classList.remove('move');
    username_input.classList.remove('move');
    user_icon.classList.remove('move');
});
password_input.addEventListener("focus", () => {
    pass_label.classList.add('move');
    password_input.classList.add('move');
    eye.classList.add('move');
    eye_slash.classList.add('move');
});
password_input.addEventListener("focusout", () => {
    pass_label.classList.remove('move');
    password_input.classList.remove('move');
    eye.classList.remove('move');
    eye_slash.classList.remove('move');
})
email_input_register.addEventListener("focus", () => {
    email_label_register.classList.add('move');
    email_input_register.classList.add('move');
    email_icon.classList.add('move');
});
email_input_register.addEventListener("focusout", () => {
    email_label_register.classList.remove('move');
    email_input_register.classList.remove('move');
    email_icon.classList.remove('move');
})
password_register_input.addEventListener("focus", () => {
    pass_register_label.classList.add('move');
    password_register_input.classList.add('move');
    eye_register.classList.add('move');
    eye_slash_register.classList.add('move');
});
password_register_input.addEventListener('focusout', () => {
    pass_register_label.classList.remove('move');
    password_register_input.classList.remove('move');
    eye_register.classList.remove('move');
    eye_slash_register.classList.remove('move');
});
password_register_repeat_input.addEventListener("focus", () => {
    pass_register_repeat_label.classList.add('move');
    password_register_repeat_input.classList.add('move');
    eye_slash_register_repeat.classList.add('move');
    eye_register_repeat.classList.add('move');
});
password_register_repeat_input.addEventListener("focusout", () => {
    pass_register_repeat_label.classList.remove('move');
    password_register_repeat_input.classList.remove('move');
    eye_slash_register_repeat.classList.remove('move');
    eye_register_repeat.classList.remove('move');
});
eye_slash.addEventListener("click", () => {
    eye_slash.classList.add('show');
    eye.classList.add('show');
    if (password_input.type === "password") {
        password_input.type = "text"
    }
});
eye.addEventListener("click", () => {
    eye.classList.remove('show');
    eye_slash.classList.remove('show');
    if (password_input.type === "text") {
        password_input.type = "password";
    }
});
eye_slash_register.addEventListener("click", () => {
    eye_slash_register.classList.add('show');
    eye_register.classList.add('show');
    if (password_register_input.type === 'password') {
        password_register_input.type = "text";
    }
});

eye_register.addEventListener("click", () => {
    eye_slash_register.classList.remove('show');
    eye_register.classList.remove('show');
    if (password_register_input.type === 'text') {
        password_register_input.type = "password";
    }
});
eye_slash_register_repeat.addEventListener("click", () => {
    eye_slash_register_repeat.classList.add('show');
    eye_register_repeat.classList.add('show');
    if (password_register_repeat_input.type === 'password') {
        password_register_repeat_input.type = "text";
    }
});
eye_register_repeat.addEventListener("click", () => {
    eye_slash_register_repeat.classList.remove('show');
    eye_register_repeat.classList.remove('show');
    if (password_register_repeat_input.type === 'text') {
        password_register_repeat_input.type = "password";
    }
});
register_form.addEventListener("click", () => {
    register_form.classList.add('center');
    register_form.classList.add('environment');
    exit_icon.classList.add('left');
    setTimeout(() => {
        exit_icon.classList.add('right-top')
    },300);
    email_box.classList.add('visible');
    password_register_box.classList.add('visible');
    password_repeat_register_box.classList.add('visible');
    text_register.classList.add('visible');
});
exit_icon.addEventListener("dblclick",()=>{
    register_form.classList.remove('center');
    register_form.classList.remove('environment');
    exit_icon.classList.remove('left');
    setTimeout(() => {
        exit_icon.classList.remove('right-top')
    },300);
    email_box.classList.remove('visible');
    password_register_box.classList.remove('visible');
    password_repeat_register_box.classList.remove('visible');
    text_register.classList.remove('visible');
})