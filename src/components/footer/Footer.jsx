import { Container, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import BookIcon from "@mui/icons-material/Book";

export const Footer = () => {
  const fecha = new Date();
  return (
    <Container
      component="footer"
      sx={{
        borderTop: "1px solid",
        padding: "25px",
        maxWidth: "sm",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <Typography variant="span">
        Copyright © Optitech Solutions {fecha.getFullYear()}
      </Typography>
      <nav>
        <a
          href="https://www.instagram.com/opti.tech.solutions"
          alt="Enlace a Instagram de Optitech"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61556247433513"
          alt="Enlace a Faceboook de Optitech"
        >
          <FacebookIcon />
        </a>
        <a
          href="https://optitechsolutionsar.blogspot.com/"
          alt="Enlace a Blogger"
        >
          <BookIcon />
        </a>
      </nav>
    </Container>
  );
};
