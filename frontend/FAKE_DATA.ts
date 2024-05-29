const fakeData = [
  {
    User: {
      id: 1,
      email: "john.doe@example.com",
      password: "hashedpassword1",
      salt: "randomsalt1",
      createdAt: "2024-05-27T10:00:00Z",
      updatedAt: "2024-05-27T10:00:00Z",
      Url: [
        {
          id: 1,
          url: "https://example.com/1",
          shortUrl: "short.ly/1",
          userId: 1,
          clickCount: 5,
          createdAt: "2024-05-27T10:00:00Z",
          updatedAt: "2024-05-27T10:00:00Z",
          UrlAnalytics: [
            {
              id: 1,
              urlId: 1,
              geo: "NORTH_AMERICA",
              referrer: "google.com",
              userAgent: "Mozilla/5.0",
              deviceType: "DESKTOP",
              utmSource: "google",
              utmMedium: "cpc",
              utmCampaign: "spring_sale",
              utmTerm: "shoes",
              utmContent: "ad1",
              createdAt: "2024-05-27T10:00:00Z",
              updatedAt: "2024-05-27T10:00:00Z",
            },
            {
              id: 2,
              urlId: 1,
              geo: "EUROPE",
              referrer: "bing.com",
              userAgent: "Mozilla/5.0",
              deviceType: "MOBILE",
              utmSource: "bing",
              utmMedium: "cpc",
              utmCampaign: "summer_sale",
              utmTerm: "sunglasses",
              utmContent: "ad2",
              createdAt: "2024-05-27T11:00:00Z",
              updatedAt: "2024-05-27T11:00:00Z",
            },
            {
              id: 3,
              urlId: 1,
              geo: "ASIA",
              referrer: "yahoo.com",
              userAgent: "Mozilla/5.0",
              deviceType: "TABLET",
              utmSource: "yahoo",
              utmMedium: "cpc",
              utmCampaign: "winter_sale",
              utmTerm: "coats",
              utmContent: "ad3",
              createdAt: "2024-05-27T12:00:00Z",
              updatedAt: "2024-05-27T12:00:00Z",
            },
            {
              id: 4,
              urlId: 1,
              geo: "OCEANIA",
              referrer: "duckduckgo.com",
              userAgent: "Mozilla/5.0",
              deviceType: "DESKTOP",
              utmSource: "duckduckgo",
              utmMedium: "cpc",
              utmCampaign: "autumn_sale",
              utmTerm: "jackets",
              utmContent: "ad4",
              createdAt: "2024-05-27T13:00:00Z",
              updatedAt: "2024-05-27T13:00:00Z",
            },
            {
              id: 5,
              urlId: 1,
              geo: "SOUTH_AMERICA",
              referrer: "baidu.com",
              userAgent: "Mozilla/5.0",
              deviceType: "MOBILE",
              utmSource: "baidu",
              utmMedium: "cpc",
              utmCampaign: "holiday_sale",
              utmTerm: "gadgets",
              utmContent: "ad5",
              createdAt: "2024-05-27T14:00:00Z",
              updatedAt: "2024-05-27T14:00:00Z",
            },
          ],
        },
        {
          id: 2,
          url: "https://example.com/2",
          shortUrl: "short.ly/2",
          userId: 1,
          clickCount: 3,
          createdAt: "2024-05-27T15:00:00Z",
          updatedAt: "2024-05-27T15:00:00Z",
          UrlAnalytics: [
            {
              id: 6,
              urlId: 2,
              geo: "AFRICA",
              referrer: "facebook.com",
              userAgent: "Mozilla/5.0",
              deviceType: "TABLET",
              utmSource: "facebook",
              utmMedium: "cpc",
              utmCampaign: "spring_sale",
              utmTerm: "dresses",
              utmContent: "ad1",
              createdAt: "2024-05-27T15:00:00Z",
              updatedAt: "2024-05-27T15:00:00Z",
            },
            {
              id: 7,
              urlId: 2,
              geo: "EUROPE",
              referrer: "instagram.com",
              userAgent: "Mozilla/5.0",
              deviceType: "MOBILE",
              utmSource: "instagram",
              utmMedium: "cpc",
              utmCampaign: "summer_sale",
              utmTerm: "sunglasses",
              utmContent: "ad2",
              createdAt: "2024-05-27T16:00:00Z",
              updatedAt: "2024-05-27T16:00:00Z",
            },
            {
              id: 8,
              urlId: 2,
              geo: "NORTH_AMERICA",
              referrer: "linkedin.com",
              userAgent: "Mozilla/5.0",
              deviceType: "DESKTOP",
              utmSource: "linkedin",
              utmMedium: "cpc",
              utmCampaign: "winter_sale",
              utmTerm: "coats",
              utmContent: "ad3",
              createdAt: "2024-05-27T17:00:00Z",
              updatedAt: "2024-05-27T17:00:00Z",
            },
          ],
        },
      ],
    },
  },
  {
    User: {
      id: 2,
      email: "jane.smith@example.com",
      password: "hashedpassword2",
      salt: "randomsalt2",
      createdAt: "2024-05-27T11:00:00Z",
      updatedAt: "2024-05-27T11:00:00Z",
      Url: [
        {
          id: 3,
          url: "https://example.com/3",
          shortUrl: "short.ly/3",
          userId: 2,
          clickCount: 4,
          createdAt: "2024-05-27T11:00:00Z",
          updatedAt: "2024-05-27T11:00:00Z",
          UrlAnalytics: [
            {
              id: 9,
              urlId: 3,
              geo: "ASIA",
              referrer: "yahoo.com",
              userAgent: "Mozilla/5.0",
              deviceType: "TABLET",
              utmSource: "yahoo",
              utmMedium: "cpc",
              utmCampaign: "winter_sale",
              utmTerm: "coats",
              utmContent: "ad1",
              createdAt: "2024-05-27T12:00:00Z",
              updatedAt: "2024-05-27T12:00:00Z",
            },
            {
              id: 10,
              urlId: 3,
              geo: "NORTH_AMERICA",
              referrer: "twitter.com",
              userAgent: "Mozilla/5.0",
              deviceType: "TABLET",
              utmSource: "twitter",
              utmMedium: "cpc",
              utmCampaign: "autumn_sale",
              utmTerm: "jackets",
              utmContent: "ad2",
              createdAt: "2024-05-27T18:00:00Z",
              updatedAt: "2024-05-27T18:00:00Z",
            },
            {
              id: 11,
              urlId: 3,
              geo: "EUROPE",
              referrer: "facebook.com",
              userAgent: "Mozilla/5.0",
              deviceType: "MOBILE",
              utmSource: "facebook",
              utmMedium: "cpc",
              utmCampaign: "spring_sale",
              utmTerm: "dresses",
              utmContent: "ad3",
              createdAt: "2024-05-27T15:00:00Z",
              updatedAt: "2024-05-27T15:00:00Z",
            },
            {
              id: 12,
              urlId: 3,
              geo: "AFRICA",
              referrer: "linkedin.com",
              userAgent: "Mozilla/5.0",
              deviceType: "DESKTOP",
              utmSource: "linkedin",
              utmMedium: "cpc",
              utmCampaign: "winter_sale",
              utmTerm: "coats",
              utmContent: "ad4",
              createdAt: "2024-05-27T17:00:00Z",
              updatedAt: "2024-05-27T17:00:00Z",
            },
          ],
        },
        {
          id: 4,
          url: "https://example.com/4",
          shortUrl: "short.ly/4",
          userId: 2,
          clickCount: 2,
          createdAt: "2024-05-27T13:00:00Z",
          updatedAt: "2024-05-27T13:00:00Z",
          UrlAnalytics: [
            {
              id: 13,
              urlId: 4,
              geo: "EUROPE",
              referrer: "twitter.com",
              userAgent: "Mozilla/5.0",
              deviceType: "MOBILE",
              utmSource: "twitter",
              utmMedium: "cpc",
              utmCampaign: "autumn_sale",
              utmTerm: "jackets",
              utmContent: "ad1",
              createdAt: "2024-05-27T18:00:00Z",
              updatedAt: "2024-05-27T18:00:00Z",
            },
            {
              id: 14,
              urlId: 4,
              geo: "NORTH_AMERICA",
              referrer: "youtube.com",
              userAgent: "Mozilla/5.0",
              deviceType: "DESKTOP",
              utmSource: "youtube",
              utmMedium: "cpc",
              utmCampaign: "winter_sale",
              utmTerm: "toys",
              utmContent: "ad2",
              createdAt: "2024-05-27T22:00:00Z",
              updatedAt: "2024-05-27T22:00:00Z",
            },
          ],
        },
        {
          id: 5,
          url: "https://example.com/5",
          shortUrl: "short.ly/5",
          userId: 2,
          clickCount: 3,
          createdAt: "2024-05-27T14:00:00Z",
          updatedAt: "2024-05-27T14:00:00Z",
          UrlAnalytics: [
            {
              id: 15,
              urlId: 5,
              geo: "ASIA",
              referrer: "reddit.com",
              userAgent: "Mozilla/5.0",
              deviceType: "DESKTOP",
              utmSource: "reddit",
              utmMedium: "cpc",
              utmCampaign: "spring_sale",
              utmTerm: "electronics",
              utmContent: "ad1",
              createdAt: "2024-05-27T19:00:00Z",
              updatedAt: "2024-05-27T19:00:00Z",
            },
            {
              id: 16,
              urlId: 5,
              geo: "EUROPE",
              referrer: "pinterest.com",
              userAgent: "Mozilla/5.0",
              deviceType: "MOBILE",
              utmSource: "pinterest",
              utmMedium: "cpc",
              utmCampaign: "summer_sale",
              utmTerm: "furniture",
              utmContent: "ad2",
              createdAt: "2024-05-27T20:00:00Z",
              updatedAt: "2024-05-27T20:00:00Z",
            },
            {
              id: 17,
              urlId: 5,
              geo: "SOUTH_AMERICA",
              referrer: "quora.com",
              userAgent: "Mozilla/5.0",
              deviceType: "TABLET",
              utmSource: "quora",
              utmMedium: "cpc",
              utmCampaign: "autumn_sale",
              utmTerm: "books",
              utmContent: "ad3",
              createdAt: "2024-05-27T21:00:00Z",
              updatedAt: "2024-05-27T21:00:00Z",
            },
          ],
        },
      ],
    },
  },
  {
    User: {
      id: 3,
      email: "alice.jones@example.com",
      password: "hashedpassword3",
      salt: "randomsalt3",
      createdAt: "2024-05-27T12:00:00Z",
      updatedAt: "2024-05-27T12:00:00Z",
      Url: [
        {
          id: 6,
          url: "https://example.com/6",
          shortUrl: "short.ly/6",
          userId: 3,
          clickCount: 2,
          createdAt: "2024-05-27T13:00:00Z",
          updatedAt: "2024-05-27T13:00:00Z",
          UrlAnalytics: [
            {
              id: 18,
              urlId: 6,
              geo: "EUROPE",
              referrer: "twitter.com",
              userAgent: "Mozilla/5.0",
              deviceType: "MOBILE",
              utmSource: "twitter",
              utmMedium: "cpc",
              utmCampaign: "autumn_sale",
              utmTerm: "jackets",
              utmContent: "ad1",
              createdAt: "2024-05-27T18:00:00Z",
              updatedAt: "2024-05-27T18:00:00Z",
            },
            {
              id: 19,
              urlId: 6,
              geo: "NORTH_AMERICA",
              referrer: "youtube.com",
              userAgent: "Mozilla/5.0",
              deviceType: "DESKTOP",
              utmSource: "youtube",
              utmMedium: "cpc",
              utmCampaign: "winter_sale",
              utmTerm: "toys",
              utmContent: "ad2",
              createdAt: "2024-05-27T22:00:00Z",
              updatedAt: "2024-05-27T22:00:00Z",
            },
          ],
        },
        {
          id: 7,
          url: "https://example.com/7",
          shortUrl: "short.ly/7",
          userId: 3,
          clickCount: 4,
          createdAt: "2024-05-27T14:00:00Z",
          updatedAt: "2024-05-27T14:00:00Z",
          UrlAnalytics: [
            {
              id: 20,
              urlId: 7,
              geo: "ASIA",
              referrer: "reddit.com",
              userAgent: "Mozilla/5.0",
              deviceType: "DESKTOP",
              utmSource: "reddit",
              utmMedium: "cpc",
              utmCampaign: "spring_sale",
              utmTerm: "electronics",
              utmContent: "ad1",
              createdAt: "2024-05-27T19:00:00Z",
              updatedAt: "2024-05-27T19:00:00Z",
            },
            {
              id: 21,
              urlId: 7,
              geo: "EUROPE",
              referrer: "pinterest.com",
              userAgent: "Mozilla/5.0",
              deviceType: "MOBILE",
              utmSource: "pinterest",
              utmMedium: "cpc",
              utmCampaign: "summer_sale",
              utmTerm: "furniture",
              utmContent: "ad2",
              createdAt: "2024-05-27T20:00:00Z",
              updatedAt: "2024-05-27T20:00:00Z",
            },
            {
              id: 22,
              urlId: 7,
              geo: "SOUTH_AMERICA",
              referrer: "quora.com",
              userAgent: "Mozilla/5.0",
              deviceType: "TABLET",
              utmSource: "quora",
              utmMedium: "cpc",
              utmCampaign: "autumn_sale",
              utmTerm: "books",
              utmContent: "ad3",
              createdAt: "2024-05-27T21:00:00Z",
              updatedAt: "2024-05-27T21:00:00Z",
            },
            {
              id: 23,
              urlId: 7,
              geo: "NORTH_AMERICA",
              referrer: "youtube.com",
              userAgent: "Mozilla/5.0",
              deviceType: "DESKTOP",
              utmSource: "youtube",
              utmMedium: "cpc",
              utmCampaign: "winter_sale",
              utmTerm: "toys",
              utmContent: "ad4",
              createdAt: "2024-05-27T22:00:00Z",
              updatedAt: "2024-05-27T22:00:00Z",
            },
          ],
        },
      ],
    },
  },
];

export default fakeData