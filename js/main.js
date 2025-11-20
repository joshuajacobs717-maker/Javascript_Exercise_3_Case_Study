let rotation = true
const toggleSideBar = document.querySelector('.btn-toggle-nav')
let sideBar = document.querySelector('.nav-sidebar')
const sideBarLists = document.querySelector('.nav-sidebar ul')


let removeAlert = document.querySelector('.modal');
if(removeAlert){removeAlert.style.display = 'none'};


function dismissModal(){
        removeAlert.remove()
};


let loginForm = document.getElementById('login-form')
loginForm.addEventListener('submit', (form) =>{
    const{uname, pwd} = loginForm.elements
    if(uname.value == ''){
        form.preventDefault()
        alert('Username field cannot be left emtpy')
    }
    else if(pwd.value == ''){
        form.preventDefault()
        alert('Password field cannot be left empty')
    }
    else if(uname.value == 'Joshua J' && pwd.value == 'password'){
        form.preventDefault()
        window.location.href = 'index.html'
        
    }
    else{
        form.preventDefault()
        if(removeAlert){removeAlert.style.display = 'block'}
    }
});


function toggleNav(){
        rotate = 0  
        if (rotation == true){
            rotate= 90;
            toggleSideBar.style.transform = `rotate(${rotate}deg)`;
            sideBar.style.width = '272px';
            sideBarLists.style.visibility = 'visible';
            sideBarLists.style.color = 'white';
            rotation= false
            } 
        else if(rotation == false){
            rotate = 0;
            toggleSideBar.style.transform = `rotate(${rotate}deg)`;
            sideBar.style.width = '50px';
            sideBarLists.style.visibility = 'hidden';
            rotation = true
        }
    
}



