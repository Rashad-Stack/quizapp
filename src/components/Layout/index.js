import Navigation from '../Navigation';

function Layout({ children }) {
  return (
    <>
      <Navigation />
      <main className="w-full py-16 font-Montserrat bg-neutral-100">
        <section className="container mx-auto">{children}</section>
      </main>
    </>
  );
}

export default Layout;
