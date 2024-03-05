// function Hello({ name, tell, surname }) {
//   // App is our only Component
//   // function retur only 1 elements if want more make it div
//   return (
//     <div>
//       <h1>
//         Hello {name} {tell} {surname}
//       </h1>
//     </div>
//   );
// }

const Hello = ({ message, name }) => {
  console.log({ message, name });
  return (
    <div>
      <h1>
        {name} {message}
      </h1>
    </div>
  );
};

import PropTypes from "prop-types";

Hello.propTypes = {
  message: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Hello;
