//Define UI vars
const form = document.querySelector("#task-form");
const tasklist = document.querySelector(".collection");
const clearbtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskinput = document.querySelector("#task");

//load all eventlist
loadEventListeners();
//function for loadevent listeners
function loadEventListeners() {
    //Add task
    form.addEventListener("submit", addTask);
    //Remove task event
    tasklist.addEventListener("click", removetask);
    //clear task
    clearbtn.addEventListener("click", cleartask);
    //filter task
    filter.addEventListener("keyup", filtertasks);
}
function addTask(e) {
    if (taskinput.value === '') {
        alert("Add a task");
    }
    //creat li element
    const li = document.createElement("li");
    //li classname
    li.className = "collection-item";
    //textnode
    li.appendChild(document.createTextNode(taskinput.value));
    //creat link
    const link = document.createElement("a");
    link.className = "delete-item secondary-content";
    //add icon
    link.innerHTML = '<i class="fas fa-times"></i>';
    //link in li
    li.appendChild(link);
    //li in ul
    tasklist.appendChild(li);
    taskinput.value = "";
    e.preventDefault();

}
//Remove task 
function removetask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        /*console.log(e.target);*/
        e.target.parentElement.parentElement.remove();
    }
}
//clear task
function cleartask() {
    // tasklist.innerHTML = "";
    //Faster way
    while (tasklist.firstChild) {
        tasklist.removeChild(tasklist.firstChild);
    }
}
//filter task
function filtertasks(e) {
    const text = e.target.value.toLowerCase();
    console.log(text);
    document.querySelectorAll(".collection-item").forEach(function (task) {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = "block";
        }
        else {
            task.style.display = "none";
        }
    });
}

