# The Thirsty Student Shop

A small web application that simulates a convenience-store style shop.
Users can browse drink categories, view store locations, search for products, register, and complete a customer survey.

## Features

- Home, Search, About, Register, and Survey pages
- Shop data stored in the application (`shopData`)
- About page displays shop locations with manager name and address
- Survey form collects:
  - First name
  - Surname
  - Email
  - Age
  - Favourite drink category (radio buttons)
  - Student status (checkbox)
- Survey responses are displayed on a results page
- Styled navigation bar and consistent page layout
- EJS templates and shared CSS styling

## Technologies Used

- Node.js
- Express
- EJS templating
- HTML / CSS

## Project Structure

```
05_thirsty_33751409/
│  index.js                   # Main server
├─ routes/
│    main.js                  # Routes + shopData
├─ views/
│    index.ejs
│    search.ejs
│    about.ejs
│    survey.ejs
│    survey_result.ejs
│    register.ejs
├─ public/
│    styles.css
│    images/
└─ package.json
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/KoalaGrylls/05_thirsty_33751409
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the server:
   ```
   node index.js
   ```
4. Open in a browser:

   ```
   http://localhost:8000
   ```

## How It Works

- The application stores shop information (shop name, product categories, shop locations).
- Pages are rendered using EJS templates.
- The `about` page lists shop locations using data from `shopData`.
- The `survey` page presents a form. When submitted, the data is shown on a results page.

