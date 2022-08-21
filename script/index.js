const state = {
   taskList: [],
};

const taskContents = document.querySelector(".task__contents");
const taskModal = document.querySelector(".task__modal__body");

const htmltaskcontent = ({ id, title, description, type, url }) => `
  <div class="col-md-6 col-lg-4 mt-3" id=${id} key=${id}>
      <div class="card shadow-sm task__card">
         <div class="card-header d-flex justify-content-end task__card__header">
            <button type="button" class="btn btn-outline-info mr-2" name=${id}>
               <i class="fas fa-pencil-alt" name=${id}></i>
               <i class="fas fa-trash-alt" name=${id}></i>
            </button>
         </div>
         <div class="card-body">
            ${url ?
      `<img width="100%" src=${url} alt="card image" class="card-top-img" md-3 rounded-lg`
      :
      `<img width="100%" src=" https://image.pngaaa.com/742/1915742-middle.png" md-3 rounded-lg`
   }
         <h4 class="card-task-title">${title}</h4>
         
         <p class="card-task-description trim-3-lines text-muted" data-gram_editor="false">${description}</p>
         <h5 class="card-task-type bg-primary m-1">${type}</h5>
         </div>
         <div class="card-footer">
         <button type="button" 
         class="btn btn-outline-primary float-right" 
         data-bs-toggle="modal" 
         dats-bs-target="#showtask"
        
         >Open task</button>
         
         </div>
      </div>
  </div>
`;

const htmlmodalcontent = ({ id, url, title, description }) => {
   const date = new Date(parseInt(id));
   return `
    <div id=${id}>
    ${url ?
         `<img width="100%" src=${url} alt="card image" class="img-fluid place_holder_img" mb-3`
         :
         `<img width="100%" src=" https://image.pngaaa.com/742/1915742-middle.png" md-3 rounded-lg`
      }
      <strong class="text-sm text-muted">Created on ${date.toDateString()}</strong>
      <h2 class="my-3">${title}</h2>
      <p class="lead">${description}</p>
    </div>
  `;
};

const updatelocalstorage = () => {
   localStorage.setItem("task", JSON.stringify({
      tasks: state.taskList,
   })
   );
};

const loadinitialdata = () => {
   const localStoragecopy = JSON.parse(localStorage.tasks);

   if (localStoragecopy) state.taskList = localStoragecopy.tasks;

   state.taskList.map((cardDate) => {
      taskContents.insertAdjacentHTML("beforeend", htmltaskcontent(cardDate));
   });
};

const handlesubmit = (event) => {

   const id = `${Date.now()}`;
   const input = {
      url: document.getElementById("imageurl").value,
      title: document.getElementById("tasktitle").value,
      description: document.getElementById("taskdescription").value,
      type: document.getElementById("tasktype").value,

   };



   taskContents.insertAdjacentHTML("beforeend", htmltaskcontent({
      ...input, id,
   })
   );

   state.taskList.push({ ...input, id });
   updatelocalstorage();

};