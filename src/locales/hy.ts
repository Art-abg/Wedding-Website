export default {
  nav: {
    home: "Գլխավոր",
    attend: "Ներկա գտնվել",
    language: "Լեզու"
  },
  home: {
    title: "{brideName} և {groomName} Հարսանիքը",
    tagline: "Միացե՛ք մեր սիրո տոնակատարությանը",
    coupleImageAlt: "Աննայի և Արթուրի լուսանկարը",
    dateLabel: "Ե՞րբ",
    weddingDate: "{date} ժամը {time}",
    venueLabel: "Որտե՞ղ",
    venueName: "Վիլլա Հիլզ, Երևան",
    venueMapLink: "Դիտել Google Maps-ում",
    venueAddress: "Վիլլա Հիլզ, Երևան",
    rsvpTitle: "Խնդրում ենք պատասխանել",
    rsvpDeadline: "Խնդրում ենք պատասխանել մինչև {date}",
    rsvpButton: "Հաստատել ներկայությունը",
    celebrate: "Նշե՛ք մեզ հետ", // New key
    addToCalendar: "Ավելացնել օրացույցում", // New key
    footer: "Ստեղծված է սիրով Աննայի և Արթուրի համար",
    backToHome: "Վերադառնալ գլխավոր էջ",
    dressCodeTitle: "Հագուստի ոգեշնչում",
    dressCodeText:
      "Մեր «Կախարդական այգու երեկույթն» էլ ավելի գեղեցկացնելու համար առաջարկում ենք ձեզ ընտրել թանկարժեք քարերի երանգներ, նուրբ պաստելային կամ բնական հողագույն գույներ: Մտածեք զմրուխտե կանաչի, շափյուղայի կապույտի, ամեթիստի մանուշակագույնի, փոշոտ վարդագույնի, նարդոսի, եղեսպակի կամ տաք բեժի մասին: Ծաղկային նախշերը նույնպես ջերմորեն ողջունվում են։",
    heroTitleL1: "Աննայի և Արթուրի",
    heroTitleL2: "Հարսանիքը",
    weddingDateValue: "Սեպտեմբերի 12, 2025",
    weddingTimeValue: "17:00",
    churchTimeValue: "14:00",
    rsvpDeadlineValue: "Օգոստոսի 20, 2025",
    church: {
      title: "Եկեղեցական արարողություն",
      name: "Սուրբ Աննա Եկեղեցի",
      mapLink: "Դիտել քարտեզի վրա"
    },
    registrationCeremony: {
      title: "Նշանադրության արարողություն",
      time: "17:00",
      description: "Պաշտոնական ստորագրումը տեղի կունենա ռեստորանում՝ դասական երաժշտության և հյուրասիրության ուղեկցությամբ։"
    },
    childhoodPhotos: {
      title: "Մեր պատմությունը սկսվում է",
      text: "Երկու ճանապարհ, որոնք ժամանակին առանձին էին, այժմ միահյուսվում են..."
    }
  },
  rsvpPage: {
    title: "Կմիանա՞ք մեզ",
    description:
      "Խնդրում ենք տեղեկացնել մեզ, թե արդյոք կկարողանաք ներկա գտնվել, մինչև 2025թ. օգոստոսի 20-ը:",
    form: {
      nameLabel: "Անուն Ազգանուն",
      namePlaceholder: "Ձեր անուն ազգանունը",
      emailLabel: "Էլեկտրոնային հասցե",
      emailPlaceholder: "your.email@example.com",
      attendingLabel: "Պատրաստվու՞մ եք ներկա գտնվել",
      attendingYes: "Այո, ներկա կլինեմ",
      attendingNo: "Ոչ, չեմ կարողանա",
      guestsLabel: "Հյուրերի քանակը (ներառյալ ձեզ)",
      guestsPlaceholder: "օրինակ՝ 2",
      phoneLabel: "Հեռախոսահամար",
      phonePlaceholder: "+374xxxxxxxx",
      messageLabel: "Թողնել հաղորդագրություն (ըստ ցանկության)",
      messagePlaceholder:
        "Հատուկ խնդրանքներ կամ նշումներ Աննայի և Արթուրի համար",
      submitButton: "Ուղարկել RSVP",
      submittingButton: "Ուղարկվում է...",
      fieldRequired: "Այս դաշտը պարտադիր է:",
      invalidGuests: "Խնդրում ենք մուտքագրել հյուրերի վավեր քանակ:",
      submissionSuccessTitle: "Շնորհակալություն:",
      submissionSuccessMessage:
        "Ձեր RSVP-ն հաջողությամբ ուղարկվել է: Անհամբեր սպասում ենք ձեզ հետ տոնելու:",
      submissionErrorTitle: "Վայ:",
      submissionErrorMessage:
        "Ինչ որ բան սխալ գնաց: Խնդրում ենք նորից փորձել ուղարկել ձեր RSVP-ն:",
      tryAgainButton: "Փորձել կրկին"
    }
  }
} as const;
