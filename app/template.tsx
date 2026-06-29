// A template re-mounts on every navigation, which re-triggers the CSS
// enter animation in globals.css (a subtle slide-in + fade on route change).
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>
}
