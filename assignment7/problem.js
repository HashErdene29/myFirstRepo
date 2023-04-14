// ------------------------QUESTION 1----------------------------------
function askPassword (ok, fail) {
    let password = prompt("Password?", "");
    if (password == "test") {
        ok();
        //console.log("ok");
    }
    else {
        fail();
        //console.log("fail");
    }
}
let user = {
    name: 'John',
    loginok() {
        console.log(`${this.name} logged in`);
    },
    loginFail() {
        console.log(`${this.name} failed to log in`);
    }
};

// askPassword(user.loginok, user.loginFail);
// askPassword(() => user.loginok(), () => user.loginFail());        //--------------------------WRAPPER
// askPassword.call(user, () => user.loginok(), () => user.loginFail()); //-----------------------------CALL
// askPassword.apply(user, [()=> user.loginok(), () => user.loginFail()]); // --------------------------APPLY
let bound = askPassword.bind(user, () => user.loginok(), () => user.loginFail()); // -----------------BIND
bound();
  