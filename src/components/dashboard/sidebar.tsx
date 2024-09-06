

type SidebarProps = {
    paths: Array<{
        label: string
        href: string
    }>
}

export function Sidebar({ paths }: SidebarProps) {
    return (
        <aside className="border-r border-border">
            <nav>
                {paths.map(path => (
                    <a key={path.href} href="{path.href}">{path.label}</a>
                ))}
            </nav>
        </aside>
    )
}



