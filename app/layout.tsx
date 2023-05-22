import './globals.css'
export const metadata = {
  title: 'Clone Spotfy',
  description: 'Perfect clone to play musics',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-Br">
      <body className="bg-zinc-700 text-zinc-50">{children}</body>
    </html>
  )
}
