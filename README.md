# MeetAI - Modern Video Conferencing Platform

MeetAI is a powerful, open-source video conferencing platform inspired by Google Meet, built with Next.js and LiveKit. It provides a seamless, feature-rich experience for virtual meetings and collaboration.

## 🌟 Features

- **High-Quality Video Conferencing**
  - HD video and audio streaming
  - Real-time communication
  - Low-latency connections
  - Adaptive quality based on network conditions

- **Meeting Controls**
  - Camera and microphone controls
  - Screen sharing capabilities
  - Meeting recording
  - Chat functionality
  - Participant management

- **User Experience**
  - Pre-join room configuration
  - Profile customization
  - Meeting scheduling
  - Room creation and management
  - Responsive design for all devices

- **Security & Privacy**
  - End-to-end encryption
  - Secure room access
  - Authentication system
  - Privacy controls

## 🛠 Tech Stack

- **Frontend Framework**: [Next.js](https://nextjs.org/)
- **Video Infrastructure**: [LiveKit](https://livekit.io/)
- **UI Components**: [@livekit/components-react](https://github.com/livekit/components-js/)
- **Authentication**: NextAuth.js
- **Styling**: Tailwind CSS
- **State Management**: React Context

## 🚀 Getting Started

### Prerequisites

- Node.js 16.x or later
- pnpm package manager
- LiveKit account and API keys

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/meetai.git
   cd meetai
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Fill in the required environment variables:
     ```
     NEXT_PUBLIC_LIVEKIT_URL=your_livekit_url
     NEXT_PUBLIC_LIVEKIT_API_KEY=your_api_key
     NEXT_PUBLIC_LIVEKIT_API_SECRET=your_api_secret
     ```

4. Start the development server:
   ```bash
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Environment Variables

Required environment variables in `.env.local`:

- `NEXT_PUBLIC_LIVEKIT_URL`: Your LiveKit server URL
- `NEXT_PUBLIC_LIVEKIT_API_KEY`: LiveKit API key
- `NEXT_PUBLIC_LIVEKIT_API_SECRET`: LiveKit API secret
- `NEXTAUTH_SECRET`: Secret for NextAuth.js
- `NEXTAUTH_URL`: Your application URL

## 🏗 Project Structure

```
meetai/
├── app/                    # Next.js app directory
│   ├── components/        # Reusable UI components
│   ├── auth/             # Authentication related code
│   ├── api/              # API routes
│   ├── liveKit/          # LiveKit integration
│   └── rooms/            # Meeting room components
├── lib/                   # Utility functions and helpers
├── public/               # Static assets
└── styles/               # Global styles
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [LiveKit](https://livekit.io/) for the video infrastructure
- [Next.js](https://nextjs.org/) for the framework
- All contributors who have helped shape this project
