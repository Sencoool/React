// function Contact(props) {
//   // App is our only Component
//   // function retur only 1 elements if want more make it div
//   return (
//     <div>
//       {props.email} {props.phone}
//     </div>
//   );
// }

// export default Contact;

import PropTypes from "prop-types";

export default function Contact(props) {
  return (
    <div>
      <h2>
        {props.email} {props.phone}
      </h2>
      <p>Send me a message!</p>
    </div>
  );
}

Contact.PropTypes = {
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

Contact.defaultProp = {
  email: "No email",
  phone: "No phone",
};
