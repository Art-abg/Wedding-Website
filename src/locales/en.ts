export default {
  NotFound: {
    title: 'Page Not Found',
    description: 'Oops! The page you are looking for does not exist.'
  },
  nav: {
    home: "Home",
    attend: "Attend",
    language: "Language"
  },
  home: {
    title: "{brideName} & {groomName}'s Wedding",
    tagline: "Join us for a celebration of love!",
    coupleImageAlt: "A photo of Artur & Anna",
    dateLabel: "When",
    weddingDate: "{date} at {time}",
    venueLabel: "Where is the venue?",
    venueName: "Villa Hills, Yerevan",
    venueMapLink: "View on Google Maps",
    venueAddress: "Verin Ptghni Kotayk Province, Armenia",
    rsvpTitle: "Kindly Respond",
    rsvpDeadline: "Please RSVP by {date}",
    rsvpButton: "Confirm Attendance",
    celebrate: "Celebrate  With  Us", // New key
    addToCalendar: "Add to Calendar", // New key
    footer: "Made with love by Artur & Anna",
    backToHome: "Back to Home Page", // New key
    dressCodeTitle: "Attire Inspiration",
    dressCodeText: "You can wear whatever makes you feel fabuluous",
    heroTitleL1: "Artur & Anna's",
    heroTitleL2: "Wedding",
    weddingDateValue: "September 12, 2025",
    weddingTimeValue: "5:00 PM",
    atTime: "at {time}",
    churchTimeValue: "2:00 PM",
    rsvpDeadlineValue: "August 20, 2025",
    church: {
      title: "Church Ceremony",
      name: "Surb Anna Church",
      mapLink: "View on Map"
    },
    registrationCeremony: {
      title: "Marriage Registration",
      time: "5:00 PM",
      description: "The official signing will take place at the restaurant"
    },
    childhoodPhotos: {
      title: "Our Story Begins",
      text: "Two paths, once separate, now intertwine..."
    }
  },
  Countdown: {
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    completed: "The big day is here!"
  },
  rsvpPage: {
    // Renamed from rsvp_form and new keys added
    title: "Will You Be Joining Us?",
    description: "Please let us know if you can make it by August 20, 2025.",
    form: {
      nameLabel: "Full Name",
      namePlaceholder: "Your full name",
      emailLabel: "Email Address",
      emailPlaceholder: "your.email@example.com",
      attendingLabel: "Will you be attending?",
      attendingYes: "Yes, I will be there!",
      attendingNo: "No, I cannot make it.",
      guestsLabel: "Number of Guests (including yourself)",
      guestsPlaceholder: "e.g., 2",
      phoneLabel: "Phone Number", // New
      phonePlaceholder: "+123456789", // New
      messageLabel: "Leave a Message (Optional)",
      messagePlaceholder: "Any special requests or notes for Anna & Artur?",
      submitButton: "Send RSVP",
      submittingButton: "Sending...", // For loading state
      fieldRequired: "This field is required.",
      invalidGuests: "Please enter a valid number of guests.",
      submissionSuccessTitle: "Thank You!",
      submissionSuccessMessage:
        "Your RSVP has been successfully submitted. We can't wait to celebrate with you!",
      submissionErrorTitle: "Oops!",
      submissionErrorMessage:
        "Something went wrong. Please try submitting your RSVP again.",
      tryAgainButton: "Try Again"
    }
  }
} as const;
