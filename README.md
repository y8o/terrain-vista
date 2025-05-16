# Terrain Vista

A modern web application for visualizing and exploring terrain data using Three.js and React.

## Features

- Interactive 3D terrain visualization using Three.js
- Real-time terrain manipulation and exploration
- Responsive design with support for both desktop and mobile
- Dark/light theme support
- Modern UI components built with Radix UI
- Performance-optimized rendering

## Tech Stack

- **Frontend**: React 19, Next.js 15
- **3D Rendering**: Three.js
- **State Management**: React Hook Form
- **UI Components**: Radix UI, Tailwind CSS
- **Animation**: Framer Motion
- **Type Safety**: TypeScript
- **Data Visualization**: Recharts
- **File Handling**: Expo File System
- **GL Integration**: Expo GL

## Getting Started

1. Install dependencies:
```bash
pnpm install
```

2. Start the development server:
```bash
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
terrain-vista/
├── app/              # Next.js app directory
├── components/       # React components
├── hooks/           # Custom React hooks
├── lib/             # Utility functions and shared code
├── public/          # Static assets
├── styles/          # Global styles
└── tailwind.config.ts # Tailwind configuration
```

## Development

### Prerequisites

- Node.js (v18 or higher)
- pnpm

### Running Tests

```bash
pnpm test
```

### Building for Production

```bash
pnpm build
```

### Linting

```bash
pnpm lint
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

- Three.js for 3D rendering capabilities
- Radix UI for accessible components
- Tailwind CSS for styling
- React Hook Form for form handling
