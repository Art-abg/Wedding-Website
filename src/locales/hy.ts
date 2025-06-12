export default {
  home: {
    title: "{brideName} և {groomName} Հարսանիքը",
    tagline: "Միացե՛ք մեզ սիրո տոնակատարությանը:",
    coupleImageAlt: "Աննայի և Արթուրի լուսանկարը",
    dateLabel: "Ե՞րբ",
    weddingDate: "{date} ժամը {time}",
    venueLabel: "Որտե՞ղ",
    venueName: "Վիլլա Հիլզ, Երևան",
    venueMapLink: "Դիտել Google Maps-ում",
    rsvpTitle: "Խնդրում ենք պատասխանել",
    rsvpDeadline: "Խնդրում ենք պատասխանել մինչև {date}",
    rsvpButton: "Պատասխանել հիմա",
    celebrate: "Նշե՛ք մեզ հետ", // New key
    addToCalendar: "Ավելացնել օրացույցում", // New key
    footer: "Ստեղծված է սիրով Աննայի և Արթուրի համար",
    backToHome: "Վերադառնալ գլխավոր էջ",
    dressCodeTitle: "Հագուստի ոգեշնչում",
    dressCodeText: "Մեր «Կախարդական այգու երեկույթն» էլ ավելի գեղեցկացնելու համար առաջարկում ենք ձեզ ընտրել թանկարժեք քարերի երանգներ, նուրբ պաստելային կամ բնական հողագույն գույներ: Մտածեք զմրուխտե կանաչի, շափյուղայի կապույտի, ամեթիստի մանուշակագույնի, փոշոտ վարդագույնի, նարդոսի, եղեսպակի կամ տաք բեժի մասին: Ծաղկային նախշերը նույնպես ջերմորեն ողջունվում են։"
  },
  rsvpPage: {
    title: 'Կմիանա՞ք մեզ',
    description: 'Խնդրում ենք տեղեկացնել մեզ, թե արդյոք կկարողանաք ներկա գտնվել, մինչև 2025թ. օգոստոսի 20-ը:',
    form: {
      nameLabel: 'Անուն Ազգանուն',
      namePlaceholder: 'Ձեր անուն ազգանունը',
      emailLabel: 'Էլեկտրոնային հասցե',
      emailPlaceholder: 'your.email@example.com',
      attendingLabel: 'Պատրաստվու՞մ եք ներկա գտնվել',
      attendingYes: 'Այո, ներկա կլինեմ',
      attendingNo: 'Ոչ, չեմ կարողանա',
      guestsLabel: 'Հյուրերի քանակը (ներառյալ ձեզ)',
      guestsPlaceholder: 'օրինակ՝ 2',
      dietaryLabel: 'Սննդային սահմանափակումներ կամ ալերգիաներ (ըստ ցանկության)',
      dietaryPlaceholder: 'օրինակ՝ բուսակեր, առանց գլյուտենի, ընկույզի ալերգիա',
      messageLabel: 'Թողնել հաղորդագրություն (ըստ ցանկության)',
      messagePlaceholder: 'Հատուկ խնդրանքներ կամ նշումներ Աննայի և Արթուրի համար',
      submitButton: 'Ուղարկել RSVP',
      submittingButton: 'Ուղարկվում է...',
      fieldRequired: 'Այս դաշտը պարտադիր է:',
      invalidGuests: 'Խնդրում ենք մուտքագրել հյուրերի վավեր քանակ:',
      submissionSuccessTitle: 'Շնորհակալություն:',
      submissionSuccessMessage: 'Ձեր RSVP-ն հաջողությամբ ուղարկվել է: Անհամբեր սպասում ենք ձեզ հետ տոնելու:',
      submissionErrorTitle: 'Վայ:',
      submissionErrorMessage: 'Ինչ որ բան սխալ գնաց: Խնդրում ենք նորից փորձել ուղարկել ձեր RSVP-ն:'
    }
  }
} as const;
