import Link from 'next/link'

const Navbar = () => {
  const links = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'User', url: '/user' },
  ]
  return (
    <ul>
      {links.map((link) => (
        <li key={link.url}>
          <Link href={link.url}>
            <a href="#!">{link.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Navbar
