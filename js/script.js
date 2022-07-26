const tabs = document.querySelectorAll('.tabs_toggle');
const tabsContent = document.querySelectorAll('.tabs-content ');

tabs.forEach(function(tab,index){
    tab.addEventListener('click',function(){
        tabsContent.forEach(content => content.classList.remove('active'));
  
        tabs.forEach(tab => tab.classList.remove('active'));
        
        tabsContent[index].classList.add('active');
        tabs[index].classList.add('active');
    }); 
    
});

