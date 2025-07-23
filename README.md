# 🚚 Tentai Checkout App

This is a responsive checkout application for a transportation service, with route-based pricing, contact information, comment section, validation, and a sidebar summary. On mobile devices, the sidebar opens on a separate page.

---

## 📦 Technologies Used

- [Next.js 14+](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Yup](https://github.com/jquense/yup) for validation
- [Lucide Icons](https://lucide.dev/)
- `localStorage` for form persistence

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Inna-Khalas/checkout-app.git
cd checkout-app
```

### 2. Install dependencies

```bash
npm install
# or
yarn
```

### 3. Start the development server

```bash
npm run dev
# or
yarn dev
```

App will be running at [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
app/
  checkout/
    page.tsx           - main page
    order-sidebar/
          page.tsx
   - mobile OrderSidebar page
components/
  Header.tsx
  Footer.tsx
  RouteForm.tsx
  AboutTheCargo.tsx
  LeaveAComment.tsx
  ContactInfo.tsx
  PaymentBlock.tsx
  OrderSidebar.tsx
```

---

## 📱 Features

- ✅ Responsive design for all devices
- ✅ Separate OrderSidebar page for mobile
- ✅ Saves form state in `localStorage`
- ✅ Full field validation with Yup
- ✅ Disabled “Continue” button until form is valid
- ✅ Editable contact information
- ✅ Dynamic route system with additional points

---

## 🧪 Testing

Input form values, refresh the page — your data persists via `localStorage`. On mobile, the **Continue** button navigates to a separate order summary page.

---

## 📜 License

MIT — free for personal and commercial use.

---

## 🤝 Author

**Inna** — Test project showcasing advanced form logic, UX interaction, and responsive layout.
