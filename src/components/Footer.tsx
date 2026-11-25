const Footer = () => (
  <footer className="border-t border-border py-12 mt-20">
    <div className="page-container text-center">
      <p className="text-primary font-bold text-lg text-glow-green mb-2">July Uprising</p>
      <p className="text-muted-foreground text-sm">
        In memory, in reverence, in resolve — the student-people's uprising of Bangladesh, 2024
      </p>
      <p className="text-muted-foreground text-sm mt-6">
        Created by{" "}
        <a
          href="https://ibrahimmahmud.pro.bd"
          target="_blank"
          rel="noreferrer"
          className="text-foreground font-semibold hover:text-primary hover:underline"
        >
          Ibrahim Mahmud
        </a>
      </p>
      <div className="gradient-line h-px w-32 mx-auto mt-6 rounded-full opacity-50" />
    </div>
  </footer>
);

export default Footer;
