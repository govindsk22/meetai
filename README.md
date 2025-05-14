# MeetAI - Modern Video Conferencing Platform

MeetAI is a powerful, open-source video conferencing platform inspired by Google Meet, built with Next.js and LiveKit. This project was created as part of a Vibe Coding Hackathon.

## 🌟 Features

- **High-Quality Video Conferencing**

  - HD video and audio streaming
  - Real-time communication
  - Low-latency connections
  - Adaptive quality based on network conditions

- **Meeting Controls**

  - Camera and microphone controls
  - Screen sharing capabilities
  - Chat functionality
  - Participant management

- **User Experience**

  - Pre-join room configuration
  - Room creation and management
  - Responsive design for all devices
  - Intuitive user interface

- **Security & Privacy**
  - Secure room access
  - Privacy controls

## 🛠 Tech Stack

- **Frontend Framework**: [Next.js](https://nextjs.org/) (v15.2.4)
- **Video Infrastructure**: [LiveKit](https://livekit.io/) (v2.11.4)
- **UI Components**: [@livekit/components-react](https://github.com/livekit/components-js/) (v2.9.3)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/) (v5.0.0-beta.28)

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- pnpm package manager (v9.15.9)
- LiveKit account and API keys

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/govindsk22/meetai
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
     LIVEKIT_API_KEY=your_api_key
     LIVEKIT_API_SECRET=your_api_secret
     LIVEKIT_URL=your_livekit_url
     ```

4. Start the development server:

   ```bash
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Environment Variables

Required environment variables in `.env.local`:

- `LIVEKIT_API_KEY`: LiveKit API key
- `LIVEKIT_API_SECRET`: LiveKit API secret
- `LIVEKIT_URL`: Your LiveKit server URL (example: `wss://my-livekit-project.livekit.cloud`)

Optional environment variables:

- `NEXT_PUBLIC_SHOW_SETTINGS_MENU`: Enable settings menu with Krisp noise filters
- `NEXT_PUBLIC_LK_RECORD_ENDPOINT`: Endpoint for recording functionality
- Various S3 settings for recording storage

## 🏗 Project Structure

```
meetai/
├── app/                   # Next.js app directory
│   ├── components/        # Reusable UI components
│   ├── auth/              # Authentication related code
│   ├── api/               # API routes
│   ├── liveKit/           # LiveKit integration
│   └── rooms/             # Meeting room components
├── lib/                   # Utility functions and helpers
├── public/                # Static assets
└── styles/                # Global styles
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
- All contributors who participated in the Vibe Coding Hackathon
