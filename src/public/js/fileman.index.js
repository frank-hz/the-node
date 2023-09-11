(function(d){
    let input_file;
    let drop_area;
    let button_file;
    let files_;
    

    d.addEventListener('DOMContentLoaded', ()=>{
        input_file = d.getElementById('file-input');
        drop_area = d.getElementById('drop_container');
        button_file = d.getElementById('button_file');

        button_file.addEventListener('click', (event) => {
            let ev = event.target;
            input_file.click();
        });
        input_file.addEventListener('change', event => {
            let files = this.files;
                  
        });
        drop_area.addEventListener('dragover', event => {
            event.preventDefault();
            drop_area.classList.add('actived'); 

        });
        drop_area.addEventListener('dragleave', event => {
            event.preventDefault();
            drop_area.classList.remove('actived'); 
            
        });
        drop_area.addEventListener('drop', event => {
            event.preventDefault();
            file_ = event.dataTransfer.files;
            files_render(file_);
            drop_area.classList.remove('actived'); 
            
        });
    });
    

function files_render(files){
    if (files.length === undefined) {
        files_validate(files);
    }else {
        for (const file of files) {
            files_validate(file);
        }
    }
}
function files_validate(file){
    file_message('close');
    const extension_filter = ['image/jpeg','image/jpg','image/png'];
    console.log(file.type);
    if (extension_filter.includes(file.type)) {
        console.log(file);
    }else {
        file_message('open','Invalid File','danger');
       
    }
}
function file_message(action, message = '', type = 'danger'){  
    let content = d.getElementById('file_message');
    switch (action) {
        case 'open':
            content.innerHTML = message;
            content.classList.add('show');
            content.classList.add(type);
            console.log('file error')
            break;
    
        case 'close':
            content.innerHTML = '';
            content.className = 'file-message-area';
            break;
    }
}

})(document);