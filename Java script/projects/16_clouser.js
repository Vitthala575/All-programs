var global_variable = 100;

function outer_fun() {
    let local_variable = 200;
    let inner_fun = function() {
        const inner_variable = 300;
        console.log(inner_variable);
        console.log(local_variable);
        console.log(global_variable);
    }
    return inner_fun;
}
let inner = outer_fun();
inner();
console.log(`---------------------`);
function do_assignment(callback) {
    console.log("Vinayak solving assignment.... ");
    console.log("Completed assignment...");
    callback();
}
// Kumar Raut want to copy
function copy_assignment() {
    console.log("Copying assignment");
    console.log("Copying assignment done");
}

do_assignment(copy_assignment)