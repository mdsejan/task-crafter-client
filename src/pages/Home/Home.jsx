import Container from "../../components/Container";
import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <Container>
        <div className="min-h-[40vh]">
          <h2>Home Page</h2>
        </div>
      </Container>
    </>
  );
};

export default Home;
