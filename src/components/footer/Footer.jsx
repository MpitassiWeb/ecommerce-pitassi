export const Footer = () => {
  const fecha = new Date()
  return (
    <div>
      <span>Copyright © Optitech Solutions {fecha.getFullYear()}</span>
      <nav>
        <a
          href="https://www.instagram.com/opti.tech.solutions"
          alt="Enlace a Instagram de Optitech"
        >
          Instagram
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61556247433513"
          alt="Enlace a Faceboook de Optitech"
        >
          Facebook
        </a>
        <a
          href="https://optitechsolutionsar.blogspot.com/"
          alt="Enlace a Blogger"
        >
          Blogger
        </a>
      </nav>
    </div>
  );
};
