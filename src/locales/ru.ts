export default {
  NotFound: {
    title: 'Страница не найдена',
    description: 'Ой! Страница, которую вы ищете, не существует.'
  },
  nav: {
    home: "Главная",
    attend: "Присутствовать",
    language: "Язык"
  },
  home: {
    title: "Свадьба {brideName} и {groomName}",
    tagline: "Присоединяйтесь к нам на праздник любви!",
    coupleImageAlt: "Фото Артура и Анны",
    dateLabel: "Когда",
    weddingDate: "{date} в {time}",
    venueLabel: "Где проходит мероприятие?",
    venueName: "Вилла Хиллз, Ереван",
    venueMapLink: "Посмотреть на Google Картах",
    venueAddress: "Верин Птгни, Котайкская область, Армения",
    rsvpTitle: "Пожалуйста, ответьте до",
    rsvpDeadline: "Пожалуйста, ответьте до {date}",
    rsvpButton: "Подтвердить присутствие",
    celebrate: "Празднуйте  с  нами", // New key
    addToCalendar: "Добавить в календарь", // New key
    footer: "Сделано с любовью Артуром и Анной",
    backToHome: "Вернуться на главную",
    dressCodeTitle: "Вдохновение для нарядов",
    dressCodeText: "Надевайте то, в чём вы чувствуете себя превосходно.",
    heroTitleL1: "Свадьба Артура и Анны",
    heroTitleL2: " ",
    weddingDateValue: "12 сентября 2025",
    weddingTimeValue: "17:00",
    churchTimeValue: "14:00",
    rsvpDeadlineValue: "20 августа 2025",
    church: {
      title: "Церковная церемония",
      name: "Церковь Сурб Анна",
      mapLink: "Посмотреть на карте"
    },
    registrationCeremony: {
      title: "Регистрация брака",
      time: "17:00",
      description: "Официальная роспись состоится в ресторане"
    },
    childhoodPhotos: {
      title: "Наша история начинается",
      text: "Два пути, когда-то раздельные, теперь переплетаются..."
    }
  },
  Countdown: {
    days: "Дней",
    hours: "Часов",
    minutes: "Минут",
    seconds: "Секунд",
    completed: "Этот великий день настал!"
  },
  rsvpPage: {
    title: "Присоединитесь к нам?",
    description:
      "Пожалуйста, сообщите нам, сможете ли вы прийти, до 20 августа 2025 г.",
    form: {
      nameLabel: "Полное имя",
      namePlaceholder: "Ваше полное имя",
      emailLabel: "Адрес электронной почты",
      emailPlaceholder: "your.email@example.com",
      attendingLabel: "Вы будете присутствовать?",
      attendingYes: "Да, я буду!",
      attendingNo: "Нет, я не смогу.",
      guestsLabel: "Количество гостей (включая вас)",
      guestsPlaceholder: "например, 2",
      dietaryLabel: "Диетические ограничения или аллергии (необязательно)",
      dietaryPlaceholder:
        "например, вегетарианец, без глютена, аллергия на орехи",
      messageLabel: "Оставить сообщение (необязательно)",
      messagePlaceholder: "Особые пожелания или заметки для Анны и Артура?",
      submitButton: "Отправить RSVP",
      submittingButton: "Отправка...",
      fieldRequired: "Это поле обязательно для заполнения.",
      invalidGuests: "Пожалуйста, введите действительное количество гостей.",
      submissionSuccessTitle: "Спасибо!",
      submissionSuccessMessage:
        "Ваш RSVP успешно отправлен. Мы с нетерпением ждем встречи с вами!",
      submissionErrorTitle: "Ой!",
      submissionErrorMessage:
        "Что-то пошло не так. Пожалуйста, попробуйте отправить RSVP еще раз.",
      tryAgainButton: "Попробовать снова"
    }
  }
} as const;
