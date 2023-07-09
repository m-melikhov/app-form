export const FORM_LABELS = {
  name: 'Логін',
  password: 'Пароль',
  email: 'Email',
  age: 'Вік',
  site: 'Сайт',
  role: 'Роль',
};

export const FORM_PLACEHOLDER = {
  name: 'Логін...',
  password: 'Пароль...',
  email: 'Email...',
  age: 'Вік...',
  site: 'Сайт...',
  role: 'Оберіть роль...',
};

export const FORM_SUCCESS = {
  name: 'Прийнято!',
  password: 'Прийнято!',
  email: 'Прийнято!',
  age: 'Прийнято!',
  site: 'Прийнято!',
  role: 'Прийнято!',
};

export const FORM_ERRORS = {
  name: '',
  password: '',
  email: '',
  age: '',
  site: '',
  role: '',
};

export const FORM_VALIDATION_MESSAGES = {
  name: {
    required: 'Ім\ʼя обов\ʼязкове.',
    minlength: 'Ім\ʼя повинно бути не менш ніж 4 символів.',
    maxlength: 'Ім\ʼя повинно бути не більш ніж 15 символів.',
  },
  password: {
    required: 'Пароль обов\ʼязковий.',
    minlength: 'Пароль повинен бути не менш ніж 7 символів.',
    maxlength: 'Пароль повинен бути не більш ніж 25 символів.',
  },
  email: {
    required: 'Email обов\ʼязковий.',
    emailValidator: 'Неправильний формат email адреси.',
  },
  age: {
    required: 'Вік обов\ʼязковий.',
    rengeMustBeNumber: 'Значення повинно бути числом в діапазоні 10..90.',
    rengeMinValue: 'Значення повинно бути більше або дорівнює 10.',
    rengeMaxValue: 'Значення повинно бути менше або дорівнює 90.',
  },
  site: {
    required: 'Сайт обов\ʼязковий',
    urlNotAllowed: 'Неправильний формат сайта.',
    pending: 'Виконується перевірка...',
  },
  role: {
    required: 'Роль обов\ʼязкова',
  }
};

export const FORM_ROLES = ['Гість', 'Модератор', 'Адміністаротор'];