import Container from "../../components/Container";
import Card from "./card";
import developer from "../../assets/developer-icon.png";
import corporate from "../../assets/corporate-icon.png";
import financial from "../../assets/financial-icon.png";
import entrepreneur from "../../assets/entrepreneur-icon.png";

const Benefits = () => {
  return (
    <div className="py-12">
      <Container>
        <div className="text-center py-6">
          <h2 className="text-4xl font-semibold">
            <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
              Who Benefits
            </span>{" "}
            from Our Platform?
          </h2>
          <p className="text-md md:text-lg text-gray-600 mt-2">
            Empowering Various Professions
          </p>
        </div>

        <section className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <Card
              cardImg={developer}
              title={"Developers"}
              description={[
                "Efficient Task Collaboration",
                "Project Management Simplified",
              ]}
            />
            <Card
              cardImg={corporate}
              title={"Corporate Professionals"}
              description={[
                "Enhanced Workflow Management",
                "Time Optimization",
              ]}
            />
            <Card
              cardImg={financial}
              title={"Bankers & Financial Experts"}
              description={["Task Prioritization", "Seamless Task Handling"]}
            />
            <Card
              cardImg={entrepreneur}
              title={"Entrepreneurs & Business Owners"}
              description={["Holistic Task Oversight", "Adaptability & Growth"]}
            />
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Benefits;
