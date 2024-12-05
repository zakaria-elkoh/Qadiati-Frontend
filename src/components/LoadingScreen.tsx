// src/components/LoadingScreen.tsx
const LoadingScreen = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
    </div>
  );
};

export default LoadingScreen;
