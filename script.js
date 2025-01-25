const first = document.querySelectorAll('.firstQuestion .pahla')
const content = document.getElementById('pahlacontent')

first.forEach(element => {
    element.addEventListener('click',function(){
        let para = this.nextElementSibling;
        if(para.style.display=='none'){
            para.style.display='block'
        }
        else{
            para.style.display='none'
        }
    })
});
