const users = [];
const banners = [
  {
    id: 1,
    image: "https://res.cloudinary.com/dtcc4spyv/image/upload/v1776238139/banner_explore_lqmlpd.png"
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/dtcc4spyv/image/upload/v1776238140/dragonbridge_yjxhki.png"
  }
];

const journeys = [
  {
    id: 1,
    image: "https://res.cloudinary.com/dtcc4spyv/image/upload/v1776238143/img1_nudx79.png",
    title: "Da Nang - Ba Na - Hoi An",
    date: "Jan 30, 2020",
    days: "3 days",
    price: "\$400.00"
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/dtcc4spyv/image/upload/v1776238148/thailan_c7izuo.png",
    title: "Thailand",
    date: "Jan 30, 2020",
    days: "3 days",
    price: "\$600.00"
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/dtcc4spyv/image/upload/v1776238141/HanoiHaLongBay_yz1qcd.png",
    title: "Ha Long Bay",
    date: "Jan 30, 2020",
    days: "3 days",
    price: "\$500.00"
  }
];

const guides = [
  {
    id: 1,
    image: "https://res.cloudinary.com/dtcc4spyv/image/upload/v1776238139/anna_n6mlql.png",
    name: "Emmy",
    role: "Hanoi, Vietnam"
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/dtcc4spyv/image/upload/v1776238144/John_adlt2a.png",
    name: "Khai Ho",
    role: "Ho Chi Minh, Vietnam"
  }
];

const experiences = [
  {
    id: 1,
    image: "https://res.cloudinary.com/dtcc4spyv/image/upload/v1776238143/hoian_hbizoz.png",
    avatar: "https://res.cloudinary.com/dtcc4spyv/image/upload/v1776238147/TuanTran_je3t3m.png",
    name: "Tuan Tran",
    title: "2 Hour Bicycle Tour exploring Hoian",
    location: "Hoian, Vietnam"
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/dtcc4spyv/image/upload/v1776238139/bana_lnauzj.png",
    avatar: "https://res.cloudinary.com/dtcc4spyv/image/upload/v1776238146/lina_lnb2jm.png",
    name: "Linh Hana",
    title: "1 day at Bana Hill",
    location: "Bana, Vietnam"
  }
];

const tours = [
  {
    id: 1,
    image: "https://res.cloudinary.com/dtcc4spyv/image/upload/v1776238143/img1_nudx79.png",
    title: "Da Nang - Ba Na - Hoi An",
    date: "Jan 30, 2020",
    days: "3 days",
    price: "\$400.00",
    liked: false,
    saved: false
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/dtcc4spyv/image/upload/v1776238146/MelbourneSydney_ppdbuj.png",
    title: "Melbourne - Sydney",
    date: "Jan 30, 2020",
    days: "3 days",
    price: "\$600.00",
    liked: true,
    saved: false
  },
    {
    id: 3,
    image: "https://res.cloudinary.com/dtcc4spyv/image/upload/v1776238141/HanoiHaLongBay_yz1qcd.png",
    title: "Hanoi - Ha Long Bay",
    date: "Jan 30, 2020",
    days: "3 days",
    price: "\$300.00",
    liked: true,
    saved: false
  }
];

const news = [
  {
    id: 1,
    title: "New Destination in Danang City",
    date: "Feb 5, 2020",
    image: "https://res.cloudinary.com/dtcc4spyv/image/upload/v1776238140/dragonbridge_yjxhki.png"
  },
  {
    id: 2,
    title: "\$1 Flight Ticket",
    date: "Feb 5, 2020",
    image: "https://res.cloudinary.com/dtcc4spyv/image/upload/v1776238140/fight_ts8q1b.png"
  },
    {
    id: 3,
    title: "\$ Visit Korea in this Tet Holiday",
    date: "Jan 6, 2020",
    image: "https://res.cloudinary.com/dtcc4spyv/image/upload/v1776238145/Kroea_erpko4.png"
  }
];

const tourMoreBanner = {
  id: 1,
  image: "https://res.cloudinary.com/dtcc4spyv/image/upload/v1776238139/banner_explore_lqmlpd.png",
  title: "Plenty of amazing tours are waiting for you"
};

let tourMoreTours = [
  {
    id: 1,
    from: "Da Nang",
    to: "Ha Noi",
    days: 3,
    price: 400.0,
    image: "https://res.cloudinary.com/dtcc4spyv/image/upload/v1776238143/img1_nudx79.png",
    rating: 5,
    favorite: false
  },
  {
    id: 2,
    from: "Ha Noi",
    to: "Ha Long Bay",
    days: 3,
    price: 300.0,
    image: "https://res.cloudinary.com/dtcc4spyv/image/upload/v1776238141/HanoiHaLongBay_yz1qcd.png",
    rating: 4,
    favorite: true
  },
  {
    id: 3,
    from: "Ho Chi Minh",
    to: "Mausoleum Tour",
    days: 2,
    price: 250.0,
    image: "https://res.cloudinary.com/dtcc4spyv/image/upload/v1776238143/img1_nudx79.png",
    rating: null,
    favorite: false
  },
  {
    id: 4,
    from: "Explore VN",
    to: "Various Destinations",
    days: 5,
    price: 800.0,
    image: "https://res.cloudinary.com/dtcc4spyv/image/upload/v1776238143/img1_nudx79.png",
    rating: 5,
    favorite: false
  },
  {
    id: 5,
    from: "Melbourne",
    to: "Sydney",
    days: 5,
    price: 1200.0,
    image: "https://res.cloudinary.com/dtcc4spyv/image/upload/v1776238146/MelbourneSydney_ppdbuj.png",
    rating: 4.5,
    favorite: true
  },
  {
    id: 6,
    from: "Tokyo",
    to: "Kyoto",
    days: 7,
    price: 1800.0,
    image: "https://res.cloudinary.com/dtcc4spyv/image/upload/v1776238143/img1_nudx79.png",
    rating: 5.0,
    favorite: false
  },
  {
    id: 7,
    from: "Seoul",
    to: "Jeju",
    days: 6,
    price: 1100.0,
    image: "https://res.cloudinary.com/dtcc4spyv/image/upload/v1776238143/img1_nudx79.png",
    rating: 4.8,
    favorite: true
  },
  {
    id: 8,
    from: "Singapore",
    to: "City Tour",
    days: 4,
    price: 650.0,
    image: "https://res.cloudinary.com/dtcc4spyv/image/upload/v1776238143/img1_nudx79.png",
    rating: 4.7,
    favorite: false
  }
];
const currentTrips = [
  {
    id: 1,
    title: "Dragon Bridge Trip",
    location: "Da Nang, Vietnam",
    date: "Jan 30, 2020",
    time: "13:00 - 15:00",
    image: "https://res.cloudinary.com/dtcc4spyv/image/upload/v1776238140/dragonbridge_yjxhki.png",
    avatar: "https://res.cloudinary.com/dtcc4spyv/image/upload/v1776238139/anna_n6mlql.png"
  },
  {
    id: 2,
    title: "Ho Guom Trip",
    location: "Hanoi, Vietnam",
    date: "Feb 2, 2020",
    time: "8:00 - 10:00",
    image: "https://res.cloudinary.com/dtcc4spyv/image/upload/v1776238143/HoGuomTrip_yrc5xu.jpg",
    avatar: "https://res.cloudinary.com/dtcc4spyv/image/upload/v1776238146/lina_lnb2jm.png"
  },
  {
    id: 3,
    title: "Ho Chi Minh Mausoleum",
    location: "Ho Chi Minh, Vietnam",
    date: "Feb 2, 2020",
    time: "8:00 - 10:00",
    image: "https://res.cloudinary.com/dtcc4spyv/image/upload/v1776238142/HCMmausoleum_k94jnw.jpg",
    avatar: "https://res.cloudinary.com/dtcc4spyv/image/upload/v1776238144/John_adlt2a.png"
  }
];

const tripDetails = [
  {
    id: 1,
    title: "Dragon Bridge Trip",
    image: "https://res.cloudinary.com/dtcc4spyv/image/upload/v1776238140/dragonbridge_yjxhki.png",
    price: 400.0,
    oldPrice: 500.0,
    discountPercent: 20,
    provider: "travel viet",
    summary: {
      from: "Dragon Bridge",
      duration: "2 days, 2 nights",
      departureDate: "Departure Date",
      departurePlace: "Da Nang",
      destination: "Ho Chi Minh"
    },
    schedule: [
      {
        day: 1,
        title: "Ho Chi Minh - Da Nang",
        timeBlocks: [
          {
            time: "10:00AM",
            title: "Lorem",
            description:
              "Lorem ipsum is simply dummy text of the printing and typesetting industry."
          },
          {
            time: "1:00PM",
            title: "Lorem",
            description:
              "Lorem ipsum is simply dummy text of the printing and typesetting industry."
          }
        ]
      },
      {
        day: 2,
        title: "Da Nang",
        timeBlocks: [
          {
            time: "10:00AM",
            title: "Lorem",
            description:
              "Lorem ipsum is simply dummy text of the printing and typesetting industry."
          },
          {
            time: "6:00PM",
            title: "Lorem",
            description:
              "Lorem ipsum is simply dummy text of the printing and typesetting industry."
          }
        ]
      }
    ],
    policies: [
      { label: "Adult (10+ years old)", price: 400.0 },
      { label: "Child (5 - 10 years old)", price: 200.0 },
      { label: "Child (< 5 years old)", price: 0.0 }
    ]
  },
  {
    id: 2,
    title: "Ho Guom Trip",
    image: "https://res.cloudinary.com/dtcc4spyv/image/upload/v1776238143/HoGuomTrip_xqbkfa.png",
    price: 300.0,
    oldPrice: 380.0,
    discountPercent: 15,
    provider: "travel viet",
    summary: {
      from: "Ha Noi - Ho Guom",
      duration: "1 day",
      departureDate: "Departure Date",
      departurePlace: "Ha Noi",
      destination: "Ho Guom Lake"
    },
    schedule: [
      {
        day: 1,
        title: "Ha Noi",
        timeBlocks: [
          {
            time: "08:00AM",
            title: "Visit Ho Guom",
            description: "Enjoy a classic Hanoi city trip."
          }
        ]
      }
    ],
    policies: [
      { label: "Adult (10+ years old)", price: 300.0 },
      { label: "Child (5 - 10 years old)", price: 150.0 },
      { label: "Child (< 5 years old)", price: 0.0 }
    ]
  },
  {
    id: 3,
    title: "Ho Chi Minh Mausoleum",
    image: "https://res.cloudinary.com/dtcc4spyv/image/upload/v1776238142/HCMmausoleum_k94jnw.jpg",
    price: 250.0,
    oldPrice: 320.0,
    discountPercent: 10,
    provider: "travel viet",
    summary: {
      from: "Ho Chi Minh City Tour",
      duration: "1 day",
      departureDate: "Departure Date",
      departurePlace: "Ho Chi Minh",
      destination: "Mausoleum"
    },
    schedule: [
      {
        day: 1,
        title: "City Tour",
        timeBlocks: [
          {
            time: "09:00AM",
            title: "Museum and city landmarks",
            description: "Half-day historical city experience."
          }
        ]
      }
    ],
    policies: [
      { label: "Adult (10+ years old)", price: 250.0 },
      { label: "Child (5 - 10 years old)", price: 120.0 },
      { label: "Child (< 5 years old)", price: 0.0 }
    ]
  }
];
const nextTrips = [
  {
    id: 1,
    title: "Ho Guom Trip",
    location: "Hanoi, Vietnam",
    image: "https://res.cloudinary.com/dtcc4spyv/image/upload/v1776238143/HoGuomTrip_xqbkfa.png",
    date: "Feb 2, 2020",
    time: "8:00 - 10:00",
    status: "Empty",
    avatar: "https://res.cloudinary.com/dtcc4spyv/image/upload/v1776238139/anna_n6mlql.png",
    badge: null,
    buttons: ["Detail", "Chat", "Pay"]
  },
  {
    id: 2,
    title: "Ho Chi Minh Mausoleum",
    location: "Hanoi, Vietnam",
    image: "https://res.cloudinary.com/dtcc4spyv/image/upload/v1776238142/HCMmausoleum_k94jnw.jpg",
    date: "Feb 2, 2020",
    time: "8:00 - 10:00",
    status: "Empty",
    avatar: "https://res.cloudinary.com/dtcc4spyv/image/upload/v1776238139/anna_n6mlql.png",
    badge: "Waiting",
    buttons: ["Detail"]
  },
  {
    id: 3,
    title: "Duc Ba Church",
    location: "Ho Chi Minh, Vietnam",
    image: "https://res.cloudinary.com/dtcc4spyv/image/upload/v1776238139/Church_d3rw00.png",
    date: "Feb 2, 2020",
    time: "8:00 - 10:00",
    status: "Waiting for offers",
    avatar: "https://res.cloudinary.com/dtcc4spyv/image/upload/v1776238144/John_adlt2a.png",
    badge: "Bidding",
    buttons: ["Detail", "Chat"]
  }
];
const nextTripDetails = [
  {
    id: 1,
    title: "Ho Guom Trip",
    image: "https://res.cloudinary.com/dtcc4spyv/image/upload/v1776238143/HoGuomTrip_xqbkfa.png",
    price: 300.0,
    oldPrice: 380.0,
    provider: "travel viet",
    summary: {
      from: "Hanoi",
      duration: "1 day",
      departureDate: "Feb 2, 2020",
      departurePlace: "Hanoi",
      destination: "Ho Guom"
    },
    schedule: [
      {
        day: 1,
        title: "City Tour",
        timeBlocks: [
          {
            time: "08:00AM",
            title: "Visit Ho Guom",
            description: "Enjoy the lake and old quarter."
          }
        ]
      }
    ],
    policies: [
      { label: "Adult", price: 300 },
      { label: "Child", price: 150 }
    ]
  },
  {
    id: 2,
    title: "Ho Chi Minh Mausoleum",
    image: "https://res.cloudinary.com/dtcc4spyv/image/upload/v1776238142/HCMmausoleum_k94jnw.jpg",
    price: 250.0,
    oldPrice: 320.0,
    provider: "travel viet",
    summary: {
      from: "Hanoi",
      duration: "1 day",
      departureDate: "Feb 2, 2020",
      departurePlace: "Hanoi",
      destination: "Mausoleum"
    },
    schedule: [
      {
        day: 1,
        title: "City Tour",
        timeBlocks: [
          {
            time: "09:00AM",
            title: "Museum and landmarks",
            description: "Half-day historical tour."
          }
        ]
      }
    ],
    policies: [
      { label: "Adult", price: 250 },
      { label: "Child", price: 120 }
    ]
  },
  {
    id: 3,
    title: "Duc Ba Church",
    image: "https://res.cloudinary.com/dtcc4spyv/image/upload/v1776238139/Church_d3rw00.png",
    price: 200.0,
    oldPrice: 260.0,
    provider: "travel viet",
    summary: {
      from: "Ho Chi Minh",
      duration: "1 day",
      departureDate: "Feb 2, 2020",
      departurePlace: "HCM",
      destination: "Church"
    },
    schedule: [
      {
        day: 1,
        title: "City Tour",
        timeBlocks: [
          {
            time: "10:00AM",
            title: "Visit Church",
            description: "Explore Duc Ba Church."
          }
        ]
      }
    ],
    policies: [
      { label: "Adult", price: 200 },
      { label: "Child", price: 100 }
    ]
  }
];
const pastTrips = [
  {
    id: 201,
    title: "Quoc Tu Giam Temple",
    location: "Hanoi, Vietnam",
    image: "https://res.cloudinary.com/dtcc4spyv/image/upload/v1776238147/quoctugiam_aj6bge.png",
    date: "Feb 2, 2020",
    time: "8:00 - 10:00",
    guide: "Emmy",
    avatar: "https://res.cloudinary.com/dtcc4spyv/image/upload/v1776238139/anna_n6mlql.png",
    highlight: false
  },
  {
    id: 202,
    title: "Dinh Doc Lap",
    location: "Ho Chi Minh, Vietnam",
    image: "https://res.cloudinary.com/dtcc4spyv/image/upload/v1776238140/dinhdoclap_wtsm3i.png",
    date: "Feb 2, 2020",
    time: "8:00 - 10:00",
    guide: "Khai Ho",
    avatar: "https://res.cloudinary.com/dtcc4spyv/image/upload/v1776238144/John_adlt2a.png",
    highlight: false
  }
];

const pastTripDetails = [
  {
    id: 201,
    title: "Quoc Tu Giam Temple",
    image: "https://res.cloudinary.com/dtcc4spyv/image/upload/v1776238147/quoctugiam_aj6bge.png",
    price: 220.0,
    oldPrice: 280.0,
    provider: "travel viet",
    summary: {
      from: "Hanoi",
      duration: "1 day",
      departureDate: "Feb 2, 2020",
      departurePlace: "Hanoi",
      destination: "Quoc Tu Giam Temple"
    },
    schedule: [
      {
        day: 1,
        title: "Temple Tour",
        timeBlocks: [
          {
            time: "08:00AM",
            title: "Visit Temple",
            description: "Explore the historic Temple of Literature."
          }
        ]
      }
    ],
    policies: [
      { label: "Adult", price: 220 },
      { label: "Child", price: 120 }
    ]
  },
  {
    id: 202,
    title: "Dinh Doc Lap",
    image: "https://res.cloudinary.com/dtcc4spyv/image/upload/v1776238140/dinhdoclap_wtsm3i.png",
    price: 260.0,
    oldPrice: 320.0,
    provider: "travel viet",
    summary: {
      from: "Ho Chi Minh",
      duration: "1 day",
      departureDate: "Feb 2, 2020",
      departurePlace: "Ho Chi Minh",
      destination: "Dinh Doc Lap"
    },
    schedule: [
      {
        day: 1,
        title: "City History Tour",
        timeBlocks: [
          {
            time: "09:00AM",
            title: "Visit Reunification Palace",
            description: "Explore one of the iconic historical landmarks."
          }
        ]
      }
    ],
    policies: [
      { label: "Adult", price: 260 },
      { label: "Child", price: 130 }
    ]
  }
];
const wishListTrips = [
  {
    id: 301,
    image: "https://res.cloudinary.com/dtcc4spyv/image/upload/v1776238146/MelbourneSydney_ppdbuj.png",
    title: "Melbourne - Sydney",
    date: "Jan 30, 2020",
    days: "3 days",
    price: "$600.00",
    liked: true,
    saved: true,
    likes: 1247
  },
  {
    id: 302,
    image: "https://res.cloudinary.com/dtcc4spyv/image/upload/v1776238141/HanoiHaLongBay_yz1qcd.png",
    title: "Hanoi - Ha Long Bay",
    date: "Jan 30, 2020",
    days: "3 days",
    price: "$300.00",
    liked: false,
    saved: true,
    likes: 1247
  }
];
const profileData = {
  profile: {
    cover: "https://res.cloudinary.com/dtcc4spyv/image/upload/v1778114383/profile_fw21uu.png"
  },
  photos: [
    "https://res.cloudinary.com/dtcc4spyv/image/upload/v1778114383/myphoto1_eecrgy.png",
    "https://res.cloudinary.com/dtcc4spyv/image/upload/v1778114381/myphoto2_f9emed.png",
    "https://res.cloudinary.com/dtcc4spyv/image/upload/v1778114382/myphoto3_ui9pdt.jpg",
    "https://res.cloudinary.com/dtcc4spyv/image/upload/v1778114383/myphoto4_d8csvm.jpg"
  ],
  journeys: [
    {
      id: 1,
      title: "A memory in Danang",
      location: "Danang, Vietnam",
      date: "Jan 20, 2020",
      likes: 234,
      images: [
        "https://res.cloudinary.com/dtcc4spyv/image/upload/v1778114383/myJourneys1_vo6ccw.jpg",
        "https://res.cloudinary.com/dtcc4spyv/image/upload/v1778114383/myJourneys2_gkfrm1.jpg",
        "https://res.cloudinary.com/dtcc4spyv/image/upload/v1778114383/myJourneys3_tp0mqq.jpg"
      ]
    },
    {
      id: 2,
      title: "Sapa in spring",
      location: "Sapa, Vietnam",
      date: "Jan 20, 2020",
      likes: 234,
      images: [
        "https://res.cloudinary.com/dtcc4spyv/image/upload/v1778114382/myJourneys4_j0uotk.jpg",
        "https://res.cloudinary.com/dtcc4spyv/image/upload/v1778114383/myJourneys3_tp0mqq.jpg",
        "https://res.cloudinary.com/dtcc4spyv/image/upload/v1778114381/myJourneys5_rgq13w.jpg"
      ]
    }
  ]
};

const checkoutData = {
  location: "Hanoi, Vietnam",
  image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=600&fit=crop",
  guideAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&fit=crop",
  date: "Feb 2, 2020",
  time: "8:00AM - 10:00AM",
  guideName: "Emmy",
  travelers: 2,
  attractions: ["Ho Guom", "Ho Hoan Kiem", "Pho 12 Pho Kim Ma"],
  total: 20.00,
  upfrontPayment: 10.00
};

module.exports = {
  banners,
  journeys,
  guides,
  experiences,
  tours,
  news,
  tourMoreBanner,
  tourMoreTours,
  currentTrips,
  tripDetails,
  nextTrips,
  nextTripDetails,
  pastTrips,
  wishListTrips,
  users,
  profileData,
  checkoutData
};