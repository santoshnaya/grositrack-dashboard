# GrosiTrack - Sales Dashboard

A stylish, dark-mode sales dashboard built with Next.js, designed for wholesalers and eCommerce teams to track product revenue, orders, and performance metrics in one elegant view.

## Features

### 🎨 Design
- **Dark Mode Theme**: Deep black background with neon green accents
- **Modern Typography**: Clean Inter font family
- **Responsive Layout**: Mobile-first design with Tailwind CSS
- **Smooth Animations**: Interactive hover states and transitions

### 📊 Dashboard Components
- **KPI Cards**: Track total revenue, orders, and average order value
- **Interactive Charts**: Animated line graphs with trend indicators
- **Product Management**: Searchable product table with filtering
- **Navigation Tabs**: Overview, Analytics, Products, and Reports sections

### 🚀 Interactive Features
- Real-time search and filtering
- Time period toggles (Weekly/Monthly/Quarterly/Yearly)
- Product selection and bulk actions
- Modal dialogs for new product creation
- Animated notifications and tooltips

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Custom CSS animations

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## Deploy on Vercel

The easiest way to deploy this application is to use [Vercel](https://vercel.com/). Connect your GitHub repository and deploy with one click.

## Project Structure

```
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── Header.tsx       # Top navigation and profile
│   │   ├── Navigation.tsx   # Tab navigation
│   │   ├── KPICards.tsx     # Metrics cards
│   │   ├── MiniChart.tsx    # Chart component
│   │   ├── Controls.tsx     # Filter controls
│   │   └── ProductTable.tsx # Product data table
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main dashboard page
├── tailwind.config.js       # Tailwind configuration
└── package.json
```

## Color Scheme

- **Background**: `#111827` (Deep black)
- **Cards**: `#1F2937` (Dark gray)
- **Primary**: `#22C55E` (Neon green)
- **Danger**: `#EF4444` (Red)
- **Info**: `#3B82F6` (Blue)
- **Warning**: `#FB923C` (Orange)

## License

This project is licensed under the MIT License.