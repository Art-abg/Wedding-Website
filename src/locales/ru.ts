export default {
  home: {
    title: "Свадьба {brideName} и {groomName}",
    tagline: "Присоединяйтесь к нам на праздник любви!",
    coupleImageAlt: "Фото Анны и Артура",
    dateLabel: "Когда",
    weddingDate: "{date} в {time}",
    venueLabel: "Где",
    venueName: "Вилла Хиллз, Ереван",
    venueMapLink: "Посмотреть на Google Картах",
    rsvpTitle: "Пожалуйста, ответьте",
    rsvpDeadline: "Пожалуйста, ответьте до {date}",
    rsvpButton: "Ответить сейчас",
    celebrate: "Празднуйте с нами", // New key
    addToCalendar: "Добавить в календарь", // New key
    footer: "Сделано с любовью для Анны и Артура",
    backToHome: "Вернуться на главную",
    dressCodeTitle: "Вдохновение для нарядов",
    dressCodeText: "Чтобы подчеркнуть атмосферу нашего «Зачарованного сада», предлагаем вам выбрать наряды в палитре драгоценных камней, нежных пастельных или естественных природных оттенков. Подумайте об изумрудно-зеленом, сапфирово-синем, аметистово-фиолетовом, пыльно-розовом, лавандовом, шалфейном или теплом бежевом. Цветочные узоры также горячо приветствуются!"
  },
  rsvpPage: {
    title: 'Присоединитесь к нам?',
    description: 'Пожалуйста, сообщите нам, сможете ли вы прийти, до 20 августа 2025 г.',
    form: {
      nameLabel: 'Полное имя',
      namePlaceholder: 'Ваше полное имя',
      emailLabel: 'Адрес электронной почты',
      emailPlaceholder: 'your.email@example.com',
      attendingLabel: 'Вы будете присутствовать?',
      attendingYes: 'Да, я буду!',
      attendingNo: 'Нет, я не смогу.',
      guestsLabel: 'Количество гостей (включая вас)',
      guestsPlaceholder: 'например, 2',
      dietaryLabel: 'Диетические ограничения или аллергии (необязательно)',
      dietaryPlaceholder: 'например, вегетарианец, без глютена, аллергия на орехи',
      messageLabel: 'Оставить сообщение (необязательно)',
      messagePlaceholder: 'Особые пожелания или заметки для Анны и Артура?',
      submitButton: 'Отправить RSVP',
      submittingButton: 'Отправка...',
      fieldRequired: 'Это поле обязательно для заполнения.',
      invalidGuests: 'Пожалуйста, введите действительное количество гостей.',
      submissionSuccessTitle: 'Спасибо!',
      submissionSuccessMessage: 'Ваш RSVP успешно отправлен. Мы с нетерпением ждем встречи с вами!',
      submissionErrorTitle: 'Ой!',
      submissionErrorMessage: 'Что-то пошло не так. Пожалуйста, попробуйте отправить RSVP еще раз.'
    }
  }
} as const;
