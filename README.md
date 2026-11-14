# ScholarSpot – Scholarship & Financial Assistance Finder 🎓

A React Native mobile application for discovering scholarships and financial assistance opportunities for school and university students.

Built with **Expo**, **React Navigation** and **AsyncStorage**. The app works **completely offline** – all data comes from a local JavaScript dataset, and no public APIs or online databases are used.

> ⚠️ **Data notice:** all 18 scholarship records in `src/data/scholarships.js` are **sample data** created for the ICA 03 assignment (fictional organisations, amounts and deadlines). Every record carries `dataStatus: 'Sample'`, and the app shows a "Sample data" notice on the Home and Details screens.

## ✨ What makes ScholarSpot different: Smart Match + Document Readiness

Most scholarship apps are just long lists that make students read every eligibility rule themselves. ScholarSpot does the checking for them – **offline and privately**:

| Special feature | What it does |
|---|---|
| **Smart Match** | The student fills in a 1-minute profile (school / university, GPA, household income, circumstances such as disability, rural area, first-generation, sport, arts…). A matching engine compares it with each scholarship's machine-readable `criteria` and ranks every scholarship by **match %**. |
| **"Why / why not" checklist** | On every scholarship, a *Your match* card shows each requirement as ✅ met, ❌ not met or ❓ missing from your profile – so the student knows exactly what blocks them. |
| **Apply First** | Highlights the open scholarship you fully qualify for with the **nearest deadline**. |
| **Document readiness tracker** | Required documents become a tick-list with a progress bar ("3/4 ready"), saved on the device, so a student can prepare an application over several days. Saved scholarships show their readiness at a glance. |
| **Private & offline** | The profile and checklist never leave the phone (AsyncStorage). No account, no internet. |

## Screens

| Screen | What it does |
|---|---|
| **Home** | Gradient hero, Smart Match banner / top matches, categories, featured carousel, closing-soon list |
| **Scholarships** | Every scholarship from the local dataset, sortable by deadline or name |
| **Search & Filter** | Search by name; filter by education level (School, University) and type (Merit-Based, Need-Based, Special Category) |
| **Scholarship Details** | Gradient hero, key facts, your match, benefits, eligibility, interactive document checklist |
| **Saved Scholarships** | Favourites with document-readiness progress, badge count, clear-all |
| **Smart Match** | Ranked matches, *Apply first* card, filters (all / fully qualify / partial) |
| **My Profile** | Questions used by Smart Match; stored locally |

## Tech stack
React Native · Expo SDK 58 · JavaScript · React Navigation (tabs + stack) · AsyncStorage · expo-linear-gradient · local JavaScript dataset

## Project structure
```
ScholarSpot/
├── App.js                      # Providers + NavigationContainer
├── index.js                    # Expo entry point
├── docs/TESTING.md             # Test plan + bug-fix log
└── src/
    ├── data/                   # scholarships.js – 18 sample records incl. `criteria`
    ├── theme/                  # colours, gradients, spacing, typography, shadows
    ├── navigation/             # AppNavigator (bottom tabs + stack)
    ├── context/                # Favorites · Profile · Readiness (AsyncStorage)
    ├── hooks/                  # usePersistentState
    ├── utils/                  # helpers (dates, deadlines) · matcher (Smart Match engine)
    ├── components/
    │   ├── common/             # Badge, ProgressBar, EmptyState, FilterChips, SectionHeader, PressableScale
    │   ├── scholarship/        # ScholarshipCard, FeaturedCard, DeadlineChip, DocumentChecklist
    │   └── match/              # MatchChip, MatchPanel
    └── screens/                # Home, Scholarships, Search, Details, Saved, Match, Profile
```

## Dataset fields
`id`, `name`, `organization`, `educationLevel`, `category`, `amountLabel`, `eligibility[]`, `benefits`, `requiredDocuments[]`, `deadline` (YYYY-MM-DD), `description`, `featured`, `dataStatus` (`Sample` | `Verified`), and **`criteria`** → `{ minGpa?, maxIncome?, requires?: [...] }` used by Smart Match.

## How the match score works
For each scholarship the engine builds a list of checks – *education level*, *minimum GPA*, *maximum household income* and any *required circumstances*. `match % = requirements met ÷ total requirements`. A wrong education level gives no match; a missing answer is shown as "add this in your profile".

## Run the app
Requirements: Node.js 20+ and the **Expo Go** app on your phone.
```bash
npm install
npx expo start            # then scan the QR code with Expo Go
npx expo start --web      # laptop browser
npx expo start --tunnel   # if the phone cannot reach the laptop
```

## Testing
See [`docs/TESTING.md`](docs/TESTING.md).

## Author
Individual project for ICA 03 – React Native.
