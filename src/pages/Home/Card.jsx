import PropTypes from "prop-types";

const Card = ({ cardImg, title, description }) => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow">
      <div className="flex flex-col items-center p-10">
        <img
          className="w-20 h-20 mb-3 p-2 rounded-full shadow-md  border "
          src={cardImg}
          alt={title}
        />
        <h5 className="mb-1 text-xl font-medium text-center  text-gray-900 ">
          {title}
        </h5>
        <div className="text-sm text-gray-500 mt-4">
          <ol className="list-disc">
            {description?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  cardImg: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.array,
};

export default Card;
