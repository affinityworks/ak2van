export const actionKitEventTree: ActionKitEvent[] = [
  {
    address1: "123 Albany Avenue",
    address2: "",
    attendee_count: 1,
    campaign: "/rest/v1/campaign/289/",
    city: "New York",
    confirmed_at: "2018-06-07T15:58:33",
    country: "United States",
    created_at: "2018-06-07T15:57:50",
    creator: "/rest/v1/user/350567/",
    directions: "",
    ends_at: "2018-07-25T16:00:00",
    ends_at_utc: "2018-07-25T20:00:00",
    fields: [
      {
        event: "/rest/v1/event/1049/",
        id: 224,
        name: "id",
        resource_uri: "/rest/v1/eventfield/224/",
        value: "2481975",
      },
    ],
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
      {
        attended: false,
        created_at: "2018-06-07T15:57:50",
        event: "/rest/v1/event/1049/",
        fields: {},
        id: 1267,
        page: "/rest/v1/eventcreatepage/13235/",
        resource_uri: "/rest/v1/eventsignup/1267/",
        role: "host",
        signupaction: [],
        signupfields: [],
        status: "active",
        updated_at: "2018-06-07T15:57:50",
        user: {
          actions: "/rest/v1/action/?user=350567",
          address1: "",
          address2: "",
          city: "Brooklyn",
          country: "United States",
          created_at: "2018-06-07T15:57:50",
          email: "james@affinity.works",
          events: "/rest/v1/event/?creator=350567",
          eventsignups: "/rest/v1/eventsignup/?user=350567",
          fields: {},
          first_name: "James",
          id: 350567,
          lang: "/rest/v1/language/100/",
          last_name: "V",
          location: "/rest/v1/location/350567/",
          logintoken: "/rest/v1/user/350567/logintoken/",
          middle_name: "",
          orderrecurrings: "/rest/v1/orderrecurring/?user=350567",
          orders: "/rest/v1/order/?user=350567",
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
          subscriptionhistory: "/rest/v1/subscriptionhistory/?user=350567",
          subscriptions: "/rest/v1/subscription/?user=350567",
          suffix: "",
          token: ".350567.bwkTl8",
          updated_at: "2018-06-07T16:09:34",
          usergeofields: "/rest/v1/usergeofield/?user=350567",
          usermailings: "/rest/v1/usermailing/?user=350567",
          useroriginal: "/rest/v1/useroriginal/350567/",
          zip: "11213",
        },
      },
      {
        attended: false,
        created_at: "2018-06-07T15:59:20",
        event: "/rest/v1/event/1049/",
        fields: {},
        id: 1268,
        page: "/rest/v1/eventsignuppage/13236/",
        resource_uri: "/rest/v1/eventsignup/1268/",
        role: "attendee",
        signupaction: [
          "/rest/v1/eventsignupaction/2481976/",
        ],
        signupfields: [],
        status: "active",
        updated_at: "2018-06-07T15:59:20",
        user: {
          actions: "/rest/v1/action/?user=350568",
          address1: "",
          address2: "",
          city: "Brooklyn",
          country: "United States",
          created_at: "2018-06-07T15:59:20",
          email: "james+coolguy@affinity.works",
          events: "/rest/v1/event/?creator=350568",
          eventsignups: "/rest/v1/eventsignup/?user=350568",
          fields: {},
          first_name: "Cool",
          id: 350568,
          lang: "/rest/v1/language/100/",
          last_name: "Guy",
          location: "/rest/v1/location/350568/",
          logintoken: "/rest/v1/user/350568/logintoken/",
          middle_name: "",
          orderrecurrings: "/rest/v1/orderrecurring/?user=350568",
          orders: "/rest/v1/order/?user=350568",
          phones: [
            {
              created_at: "2018-06-12T20:13:49",
              id: 568,
              normalized_phone: "6151234567",
              phone: "6151234567",
              resource_uri: "/rest/v1/phone/568/",
              source: "user",
              type: "home",
              updated_at: "2018-06-12T20:13:49",
              user: "/rest/v1/user/350568/",
            },
            {
              created_at: "2018-06-12T20:15:11",
              id: 569,
              normalized_phone: "3041234567",
              phone: "+1-304-123-4567",
              resource_uri: "/rest/v1/phone/569/",
              source: "user",
              type: "mobile",
              updated_at: "2018-06-12T20:15:11",
              user: "/rest/v1/user/350568/",
            },
          ],
          plus4: "",
          postal: "11213",
          prefix: "",
          rand_id: 25979440,
          region: "",
          resource_uri: "/rest/v1/user/350568/",
          source: "website",
          state: "NY",
          subscription_status: "subscribed",
          subscriptionhistory: "/rest/v1/subscriptionhistory/?user=350568",
          subscriptions: "/rest/v1/subscription/?user=350568",
          suffix: "",
          token: ".350568.9bPKai",
          updated_at: "2018-06-07T15:59:20",
          usergeofields: "/rest/v1/usergeofield/?user=350568",
          usermailings: "/rest/v1/usermailing/?user=350568",
          useroriginal: "/rest/v1/useroriginal/350568/",
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
    campaign: "/rest/v1/campaign/289/",
    city: "Nashville",
    confirmed_at: "2018-06-07T15:58:33",
    country: "United States",
    created_at: "2018-06-07T15:57:50",
    creator: "/rest/v1/user/350567/",
    directions: "",
    ends_at: "2018-07-25T16:00:00",
    ends_at_utc: "2018-07-25T20:00:00",
    fields: [
      {
        event: "/rest/v1/event/1050/",
        id: 225,
        name: "id",
        resource_uri: "/rest/v1/eventfield/225/",
        value: "2481975",
      },
    ],
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

export const actionKitEventTreeWithNoSyncEvent: ActionKitEvent[] = [
  { // eventsResponse.objects[0]
    address1: "789 Dean Road",
    address2: "",
    attendee_count: 1,
    campaign: "/rest/v1/campaign/289/",
    city: "Nashville",
    confirmed_at: "2018-06-07T15:58:33",
    country: "United States",
    created_at: "2018-06-07T15:57:50",
    creator: "/rest/v1/user/350567/",
    directions: "",
    ends_at: "2018-07-25T16:00:00",
    ends_at_utc: "2018-07-25T20:00:00",
    fields: [
      {
        event: "/rest/v1/event/1050/",
        id: 225,
        name: "id",
        resource_uri: "/rest/v1/eventfield/225/",
        value: "2481975",
      },
    ],
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
