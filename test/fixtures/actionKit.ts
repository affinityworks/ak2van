export const actionKitEvents: ActionKitEvent[] = [
  { // eventsResponse.objects[0]
    address1: "123 Albany Avenue",
    address2: "",
    attendee_count: 1,
    city: "New York",
    confirmed_at: "2018-06-07T15:58:33",
    country: "United States",
    created_at: "2018-06-07T15:57:50",
    directions: "",
    ends_at: null,
    ends_at_utc: null,
    host_is_confirmed: true,
    id: 1049,
    is_approved: false,
    is_private: false,
    latitude: 40.6664,
    longitude: -73.9855,
    max_attendees: 50,
    note_to_attendees: "",
    notes: "",
    phone: "",
    plus4: "1104",
    postal: "11215",
    public_description: "Affinity Test Event #1",
    region: "NY",
    resource_uri: "/rest/v1/event/1049/",
    signups: [
      { // signupResponseAttendee
        attended: false,
        created_at: "2018-06-07T15:59:20",
        id: 1268,
        role: "attendee",
        status: "active",
        updated_at: "2018-06-07T15:59:20",
        user: { // userResponseAttendee
          actions: "/rest/v1/action/?user=350568",
          address1: "",
          address2: "",
          city: "Brooklyn",
          country: "United States",
          created_at: "2018-06-07T15:59:20",
          email: "james+coolguy@affinity.works",
          fields: {},
          first_name: "Cool",
          id: 350568,
          lang: "/rest/v1/language/100/",
          last_name: "Guy",
          middle_name: "",
          phones: [],
          plus4: "",
          postal: "11213",
          prefix: "",
          rand_id: 25979440,
          region: "",
          resource_uri: "/rest/v1/user/350568/",
          source: "website",
          state: "NY",
          subscription_status: "subscribed",
          suffix: "",
          updated_at: "2018-06-07T15:59:20",
          zip: "11213",
        },
      },
      { // signupResponseHost
        attended: false,
        created_at: "2018-06-07T15:57:50",
        id: 1267,
        role: "host",
        status: "active",
        updated_at: "2018-06-07T15:57:50",
        user: { // userResponseHost
          actions: "/rest/v1/action/?user=350567",
          address1: "",
          address2: "",
          city: "Brooklyn",
          country: "United States",
          created_at: "2018-06-07T15:57:50",
          email: "james@affinity.works",
          fields: {},
          first_name: "James",
          id: 350567,
          lang: "/rest/v1/language/100/",
          last_name: "V",
          middle_name: "",
          phones: [],
          plus4: "",
          postal: "11213",
          prefix: "",
          rand_id: 842258417,
          region: "",
          resource_uri: "/rest/v1/user/350567/",
          source: "website",
          state: "NY",
          subscription_status: "subscribed",
          suffix: "",
          updated_at: "2018-06-07T16:09:34",
          zip: "11213",
        },
      },
    ],
    starts_at: "2018-07-25T12:00:00",
    starts_at_utc: "2018-07-25T16:00:00",
    state: "NY",
    status: "active",
    title: "Affinity Test Event #1",
    updated_at: "2018-06-07T16:09:34",
    venue: "Space Jam",
    zip: "11215",
  },
  { // eventsResponse.objects[0]
    address1: "789 Dean Road",
    address2: "",
    attendee_count: 1,
    city: "Nashville",
    confirmed_at: "2018-06-07T15:58:33",
    country: "United States",
    created_at: "2018-06-07T15:57:50",
    directions: "",
    ends_at: null,
    ends_at_utc: null,
    host_is_confirmed: true,
    id: 1049,
    is_approved: false,
    is_private: false,
    latitude: 50.6664,
    longitude: -83.9855,
    max_attendees: 50,
    note_to_attendees: "",
    notes: "",
    phone: "",
    plus4: "1104",
    postal: "37201",
    public_description: "Affinity Test Event #2",
    region: "TN",
    resource_uri: "/rest/v1/event/1050/",
    signups: [],
    starts_at: "2018-07-25T12:00:00",
    starts_at_utc: "2018-07-25T16:00:00",
    state: "TN",
    status: "active",
    title: "Affinity Test Event #2",
    updated_at: "2018-06-07T16:09:34",
    venue: "Barn",
    zip: "37201",
  },
]
