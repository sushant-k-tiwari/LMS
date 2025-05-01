# 📚 LMS Mobile App

A modern, mobile-first Learning Management System (LMS) built with React Native and Expo. This app empowers learners to access, enroll in, and track progress across a wide range of online courses, all from their mobile device. Designed for both students and lifelong learners, the app offers a seamless, intuitive experience with a focus on accessibility, personalization, and ease of use.

Whether you're looking to pick up a new skill, follow a structured curriculum, or simply browse educational content, this LMS app provides a robust platform to support your learning journey. With secure authentication, real-time course updates, and a user-friendly interface, you can learn anywhere, anytime.

---

## 📺 Demo Video

[![LMS App Demo](https://img.youtube.com/vi/NugbhwSjZlc/0.jpg)](https://youtu.be/NugbhwSjZlc)

> Click the image above or [watch the demo on YouTube](https://youtu.be/NugbhwSjZlc)

---

## ✨ Features

- **Browse Courses:** Discover a variety of online courses with detailed descriptions, banners, and author information.
- **Enroll & Track:** Enroll in courses and monitor your progress through interactive chapters and completion tracking.
- **Personalized Profile:** View and manage your profile, including your profile image, name, and email, with options to customize preferences.
- **Course Management:** Instantly access all your enrolled courses in one place for easy navigation and continued learning.
- **User Preferences:** Manage notification settings, language, privacy, and theme to tailor the app to your needs.
- **Secure Authentication:** Powered by Clerk, ensuring your data and progress are always protected.
- **Responsive UI:** Clean, modern, and mobile-friendly design for a smooth experience on any device.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/LMS.git
   cd LMS
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Start the app:**
   ```bash
   npx expo start
   ```
4. **Open on your device:**
   - Scan the QR code with Expo Go (iOS/Android)
   - Or run on an emulator/simulator

---

## 🛠️ Tech Stack

- **React Native & Expo:**
  - The core framework for building cross-platform mobile apps using JavaScript and React. Expo streamlines development with easy builds, device previews, and over-the-air updates.
- **TypeScript:**
  - Adds static typing to JavaScript, improving code quality, maintainability, and developer experience.
- **GraphQL (Hygraph CMS):**
  - All course data, user enrollments, and progress are managed via a GraphQL API, powered by Hygraph (a headless CMS). This enables flexible, real-time data fetching and easy content management.
- **Clerk:**
  - Provides secure, modern authentication and user management, including social logins, profile management, and session handling.
- **React Navigation:**
  - Handles navigation and routing between screens, supporting stack, tab, and drawer navigation patterns for a smooth user experience.
- **Custom UI Components:**
  - Modular, reusable components for profile sections, course cards, and more, ensuring a consistent and maintainable UI.
- **Other Libraries:**
  - Includes libraries for icons, image handling, and state management to enhance the app's functionality and appearance.

---

## 📁 Folder Structure

```
app/
  components/         # Reusable UI components
  screens/            # App screens (Home, Courses, Profile, etc.)
  services/           # API and data fetching logic
  utils/              # Utility functions and constants
assets/               # Images, fonts, etc.
```

---

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bug fixes or enhancements.

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

---
## 🙏 Acknowledgements
- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [Clerk](https://clerk.com/)
- [Hygraph](https://hygraph.com/)

---

> LMS Mobile App – Learn anywhere, anytime!

