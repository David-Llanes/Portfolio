interface AppContainerProps {
  children: React.ReactNode
}

export default function AppContainer({ children }: AppContainerProps) {
  return (
    <div className="layout h-dvh overflow-hidden max-w-[1920px] mx-auto min-[1921px]:border-x">
      {children}
    </div>
  )
}
