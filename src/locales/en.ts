export default {
  home: {
    title: "{brideName} & {groomName}'s Wedding",
    tagline: "Join us for a celebration of love!",
    coupleImageAlt: "A photo of Anna & Artur",
    dateLabel: "When",
    weddingDate: "{date} at {time}",
    venueLabel: "Where",
    venueName: "Villa Hills, Yerevan",
    venueMapLink: "View on Google Maps",
    rsvpTitle: "Kindly Respond",
    rsvpDeadline: "Please RSVP by {date}",
    rsvpButton: "RSVP Now",
    celebrate: "Celebrate With Us", // New key
    addToCalendar: "Add to Calendar", // New key
    footer: "Made with love for Anna & Artur",
    backToHome: "Back to Home Page", // New key
    dressCodeTitle: "Attire Inspiration",
    dressCodeText: "To enhance our Enchanted Garden Soirée, we invite you to embrace a palette of jewel tones, soft pastels, or earthy neutrals. Think emerald green, sapphire blue, amethyst purple, dusty rose, lavender, sage, or warm beige. Floral patterns are also warmly welcomed!"
  },
  rsvpPage: { // Renamed from rsvp_form and new keys added
    title: 'Will You Be Joining Us?',
    description: 'Please let us know if you can make it by August 20, 2025.',
    form: {
      nameLabel: 'Full Name',
      namePlaceholder: 'Your full name',
      emailLabel: 'Email Address',
      emailPlaceholder: 'your.email@example.com',
      attendingLabel: 'Will you be attending?',
      attendingYes: 'Yes, I will be there!',
      attendingNo: 'No, I cannot make it.',
      guestsLabel: 'Number of Guests (including yourself)',
      guestsPlaceholder: 'e.g., 2',
      dietaryLabel: 'Dietary Restrictions or Allergies (Optional)',
      dietaryPlaceholder: 'e.g., vegetarian, gluten-free, nut allergy',
      messageLabel: 'Leave a Message (Optional)',
      messagePlaceholder: 'Any special requests or notes for Anna & Artur?',
      submitButton: 'Send RSVP',
      submittingButton: 'Sending...', // For loading state
      fieldRequired: 'This field is required.',
      invalidGuests: 'Please enter a valid number of guests.',
      submissionSuccessTitle: 'Thank You!',
      submissionSuccessMessage: "Your RSVP has been successfully submitted. We can't wait to celebrate with you!",
      submissionErrorTitle: 'Oops!',
      submissionErrorMessage: 'Something went wrong. Please try submitting your RSVP again.'
    }
  }
} as const;
