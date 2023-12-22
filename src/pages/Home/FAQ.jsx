import { useState } from "react";

const FAQuastions = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  //======>> FAQ Quastions <<======

  const faqData = [
    {
      question: "What kind of tasks can I manage using this platform?",
      answer:
        "Our platform is designed to accommodate a wide range of tasks, from personal to professional. Whether it's project management, to-do lists, or collaborative efforts, you can organize various tasks efficiently.",
    },
    {
      question:
        "Is there a limit to the number of tasks I can create and manage?",
      answer:
        "No, there's no predefined limit on the number of tasks you can create and handle. You have the freedom to organize and manage as many tasks as needed within the platform.",
    },
    {
      question: "How secure is my data on this platform?",
      answer:
        "We prioritize data security. Our platform employs robust encryption and follows industry best practices to safeguard your information. Rest assured, your data's confidentiality and integrity are paramount.",
    },
    {
      question: "Can I collaborate with others on tasks or projects?",
      answer:
        "Yes, our platform supports collaboration. You can easily invite team members, assign tasks, share updates, and work collectively on projects, fostering seamless teamwork.",
    },
    {
      question:
        "Is there a mobile app available for on-the-go task management?",
      answer:
        "Absolutely! We offer a dedicated mobile app for iOS and Android devices, ensuring you can manage tasks conveniently anytime, anywhere.",
    },
    {
      question:
        "How can I get in touch with customer support if I encounter an issue?",
      answer:
        "You can reach our responsive customer support team through various channels, including email, live chat, and a dedicated support portal. We're here to assist you promptly with any queries or concerns.",
    },
  ];

  return (
    <>
      {/* FAQ Title */}
      <div className="text-center py-6">
        <h2 className="text-4xl font-semibold">
          Help &{" "}
          <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
            Information
          </span>
        </h2>
        <p className="text-md md:text-lg text-gray-600 mt-2">
          Answers to Common Queries
        </p>
      </div>

      {/* FAQ Loop */}
      <div className="mt-8 mx-auto max-w-screen-sm lg:max-w-screen-md pb-20">
        {faqData?.map((item, index) => (
          <div key={index} className="w-full">
            <div
              className="question-and-answer select-none cursor-pointer border-2 mx-8 my-3 px-6 py-4 rounded-lg text-sm group"
              onClick={() => toggleAnswer(index)}
            >
              <dt className="question">
                <div className="flex justify-between">
                  <div className="text-blue-600 text-base md:text-lg font-semibold">
                    {item.question}
                  </div>
                  <div>
                    <svg
                      fill="currentColor"
                      className={`question-chevron h-5 block text-indigo-800 bg-yellow-500 rounded-full p-1 ${
                        expandedIndex === index ? "transform rotate-180" : ""
                      }`}
                      viewBox="0 0 20 20"
                    >
                      <polygon points="9.29289322 12.9497475 10 13.6568542 15.6568542 8 14.2426407 6.58578644 10 10.8284271 5.75735931 6.58578644 4.34314575 8" />
                    </svg>
                  </div>
                </div>
              </dt>
              {expandedIndex === index && (
                <dd className="answer text-md md:text-lg text-gray-600 mt-6">
                  {item.answer}
                </dd>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FAQuastions;
