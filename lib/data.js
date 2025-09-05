import {
  Calendar,
  Video,
  CreditCard,
  User,
  FileText,
  ShieldCheck,
} from "lucide-react";

// JSON data for features
export const features = [
  {
    icon: <CreditCard className="h-6 w-6 text-white-500" />,
    title: "Flexible Plans",
    description:
      "Choose from affordable consultation credit packages designed to fit your healthcare needs.",
  },
  {
    icon: <FileText className="h-6 w-6 text-white-500" />,
    title: "Health Records",
    description:
      "Keep track of your consultations, doctor’s notes, and medical history in one secure place.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-white-500" />,
    title: "Trusted Professionals",
    description:
      "Every doctor on our platform is thoroughly vetted to ensure safe and reliable care.",
  },
  {
    icon: <User className="h-6 w-6 text-white-500" />,
    title: "Personalized Profile",
    description:
      "Create your account and set up your health profile to unlock tailored recommendations and services.",
  },
  {
    icon: <Video className="h-6 w-6 text-white-500" />,
    title: "Virtual Care",
    description:
      "Meet with trusted doctors through secure video calls without leaving your home.",
  },
  {
    icon: <Calendar className="h-6 w-6 text-white-500" />,
    title: "Easy Scheduling",
    description:
      "Explore doctor availability and schedule appointments at times that work best for you.",
  },
];

// JSON data for testimonials
// export const testimonials = [
//   {
//     initials: "SP",
//     name: "Sarah P.",
//     role: "Patient",
//     quote:
//       "The video consultation feature saved me so much time. I was able to get medical advice without taking time off work or traveling to a clinic.",
//   },
//   {
//     initials: "DR",
//     name: "Dr. Robert M.",
//     role: "Cardiologist",
//     quote:
//       "This platform has revolutionized my practice. I can now reach more patients and provide timely care without the constraints of a physical office.",
//   },
//   {
//     initials: "JT",
//     name: "James T.",
//     role: "Patient",
//     quote:
//       "The credit system is so convenient. I purchased a package for my family, and we've been able to consult with specialists whenever needed.",
//   },
// ];

// JSON data for testimonials
export const testimonials = [
  {
    initials: "AN",
    name: "Dr. Anita N.",
    role: "Pediatrician",
    quote:
      "I love how seamless the scheduling is. Parents can book appointments easily, and I can manage my calendar without constant back-and-forth calls.",
  },
  {
    initials: "MK",
    name: "Maria K.",
    role: "Patient",
    quote:
      "Having access to my medical history in one secure place gives me peace of mind. I no longer worry about misplaced papers or forgotten details.",
  },
  {
    initials: "HL",
    name: "Henry L.",
    role: "General Practitioner",
    quote:
      "HealthBridge helps me provide quality care to patients remotely. It’s secure, reliable, and a game-changer for modern healthcare delivery.",
  },
  {
    initials: "LU",
    name: "Lee U.",
    role: "Patient",
    quote:
      "The virtual consultation feature has been a lifesaver. I received professional medical advice without needing to take time off work or travel to a clinic.",
  },
  {
    initials: "IB",
    name: "Dr. Ismaeel B.",
    role: "Cardiologist",
    quote:
      "This platform has completely transformed the way I practice medicine. I’m able to reach more patients and deliver care efficiently beyond the limits of my office.",
  },
  {
    initials: "JJ",
    name: "Janet J.",
    role: "Patient",
    quote:
      "The credit system is incredibly convenient. I bought a package for my family, and we can connect with specialists whenever we need to.",
  },
  
];


// JSON data for credit system benefits
// export const creditBenefits = [
//   "Each consultation requires <strong class='text-blue-500'>2 credits</strong> regardless of duration",
//   "Credits <strong class='text-blue-500'>never expire</strong> - use them whenever you need",
//   "Monthly subscriptions give you <strong class='text-blue-500'>fresh credits every month</strong>",
//   "Cancel or change your subscription <strong class='text-blue-500'>anytime</strong> without penalties",
// ];

export const creditBenefits = [
  "Every consultation costs just <strong class='text-blue-500'>2 credits</strong>, no matter how long it lasts",
  "<strong class='text-blue-500'>Credits never expire</strong>, save them and use whenever you need",
  "With a monthly plan, you receive <strong class='text-blue-500'>new credits each month</strong>",
  "Enjoy full flexibility, <strong class='text-blue-500'>pause, cancel, or change</strong> your subscription anytime",
];
