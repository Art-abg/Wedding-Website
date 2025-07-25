export default {
  NotFound: {
    title: 'Էջը չի գտնվել',
    description: 'Ցավոք, ձեր փնտրած էջը գոյություն չունի։'
  },
  nav: {
    home: "Գլխավոր",
    attend: "Ներկա գտնվել",
    language: "Լեզու"
  },
  home: {
    title: "{brideName} և {groomName} Հարսանիքը",
    tagline: "Միացե՛ք մեր սիրո տոնակատարությանը",
    coupleImageAlt: "Արթուրի և Աննայի լուսանկարը",
    dateLabel: "Ե՞րբ",
    weddingDate: "{date} ժամը {time}",
    venueLabel: "Որտե՞ղ է տեղի ունենալու հարսանիքը",
    venueName: "Վիլլա Հիլզ, Երևան",
    venueMapLink: "Դիտել Google Maps-ում",
    venueAddress: "Վերին Պտղնի, Կոտայքի մարզ, Հայաստան",
    rsvpTitle: "Խնդրում ենք պատասխանել",
    rsvpDeadline: "Խնդրում ենք պատասխանել մինչև {date}",
    rsvpButton: "Հաստատել ներկայությունը",
    celebrate: "Նշե՛ք  մեզ  հետ", // New key
    addToCalendar: "Ավելացնել օրացույցում", // New key
    footer: "Ստեղծված է սիրով Արթուրի և Աննայի համար",
    backToHome: "Վերադառնալ գլխավոր էջ",
    dressCodeTitle: "Հագուստի ոգեշնչում",
    dressCodeText: "Հագեք այն, ինչով դուք ձեզ հիասքանչ եք զգում։",
    heroTitleL1: "Արթուրի և Աննայի",
    heroTitleL2: "Հարսանիքը",
    weddingDateValue: "Սեպտեմբերի 12, 2025",
    weddingTimeValue: "17:00",
    churchTimeValue: "14:00",
    rsvpDeadlineValue: "Օգոստոսի 20, 2025",
    church: {
      title: "Պսակադրության արարողություն",
      name: "Սուրբ Աննա Եկեղեցի",
      mapLink: "Դիտել քարտեզի վրա"
    },
    registrationCeremony: {
      title: "Ամուսնության գրանցում",
      time: "17:00",
      description: "Պաշտոնական գրանցումը տեղի կունենա ռեստորանում"
    },
    childhoodPhotos: {
      title: "Մեր պատմությունը սկսվում է",
      text: "Երկու ճանապարհ, որոնք ժամանակին առանձին էին, այժմ միահյուսվում են..."
    }
  },
  Countdown: {
    days: "Օր",
    hours: "Ժամ",
    minutes: "Րոպե",
    seconds: "Վայրկյան",
    completed: "Եկավ այդ մեծ օրը։"
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
