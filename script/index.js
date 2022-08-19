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
               <i class="fas fa-delete-alt" name=${id}></i>
            </button>
         </div>
      </div>
  </div>
`;


