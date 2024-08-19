const createName = document.querySelector('.create-name');
const createSeria = document.querySelector('.create-seria');
const createReps = document.querySelector('.create-reps');
const popupName = document.querySelector('.popup-name');
const popupSeria = document.querySelector('.popup-seria');
const popupReps = document.querySelector('.popup-reps');

const addBtn = document.querySelector('.add');
const error = document.querySelector('.error');
const ulList = document.querySelector('ul');
const ulText = document.querySelector('.ul-list');

const editBtn = document.querySelector('.edit');
const completeBtn = document.querySelector('.complete');
const deleteBtn = document.querySelector('.delete');

const popup = document.querySelector('.popup');
const popupInput = document.querySelector('.popup-input');
const popupSaveBtn = document.querySelector('.popup-save');
const popupDeleteBtn = document.querySelector('.popup-delete');

let index = 0
let newExercise, text
let arr = []

const createButtons = () => {
    const newBtns = document.createElement('div')
    newBtns.classList.add('btns')
    newExercise.append(newBtns)

    const newEdit = document.createElement("button")
    newEdit.classList.add('edit')
    newEdit.innerText = 'Done'
    newBtns.append(newEdit)

    const newComplete = document.createElement('button')
    newComplete.classList.add('complete')
    newComplete.innerText = 'Edit'
    newBtns.append(newComplete)

    const newDelete = document.createElement('button')
    newDelete.classList.add('delete')
    newDelete.innerText = 'X'
    newBtns.append(newDelete)
};

const checkForm = () => {
    if(createName.value !==''&& createReps.value !==''&& createSeria.value !==''){
        index++
        newExercise = document.createElement('li')
        
        newExercise.setAttribute('id', index)
        ulList.append(newExercise)
        ulText.style.display = 'none'

        text = document.createElement('p')
        text.classList.add('text')
        newExercise.append(text)
        text.innerText = `${createName.value}/${createSeria.value}/${createReps.value}`
    
        createButtons()
        cleanForm()
        arr.push(newExercise)
        if(arr.length===4){
            addBtn.removeEventListener('click', checkForm)
        }
      
    }else{
        error.style.display = 'block'
    }
};
const cleanForm = () => {
    createName.value = ''
    createReps.value = ''
    createSeria.value = ''
    error.style.display = 'none'
};

const checkBtn = (e) => {
     if(e.target.classList.contains('edit')){
        e.target.closest('li').style.backgroundColor = 'green'
        popup.classList.remove('popup-open')
        popupInput.value = ''
     }
     if(e.target.classList.contains('complete')){
        popup.classList.toggle('popup-open')
     }
     if(e.target.classList.contains('delete')){
        deleteExercise(e)
        
        if(arr.length===0) {
            ulText.style.display = 'block'
        }
     }
};

const deleteExercise = (e) => {
    const deleteMe = e.target.closest('li')
    deleteMe.remove()
    popup.classList.remove('popup-open')
    arr.pop(newExercise)
    addBtn.addEventListener('click', checkForm)
};

const savePopup = () => {
    if(popupName.value !==''&& popupReps.value !==''&& popupSeria.value !=='') {
    const popupValue = `${popupName.value}/${popupSeria.value}/${popupReps.value}`
    text.innerText = popupValue
    popup.classList.remove('popup-open')
    popupName.value = ''
    popupSeria.value = ''
    popupReps.value = ''
    error.style.display = 'none'
}
else {
    error.style.display = 'block'
}
};


addBtn.addEventListener('click', checkForm)
ulList.addEventListener('click', checkBtn)
popupDeleteBtn.addEventListener('click', ()=>{
    popup.classList.remove('popup-open')
    popupInput.value = ''
})
popupSaveBtn.addEventListener('click', savePopup)
