const onFormSubmit = (evt) => {
  const form = evt.target;
  const formName = form.id;
  const formData = new FormData(form);
  const object = {};
  formData.forEach((value, key) => {
    object[key] = value;
  });
  const json = JSON.stringify(object);
  localStorage.setItem(`form[${formName}]`, json);
};

export const fillForm = (form) => {
  const formName = form.id;
  if (!localStorage.length) {
    return;
  } else {
    const json = localStorage.getItem(`form[${formName}]`);
    const object = JSON.parse(json);
    if (!object) {
      return;
    }
    for (let item of Object.entries(object)) {
      const key = item[0];
      const value = item[1];
      const input = form.querySelector(`input[name="${key}"]`);
      if (input) {
        input.value = value;
      }
    }
  }
};

export const initForm = () => {
  document.addEventListener('submit', onFormSubmit);
};
