// import { useState } from 'react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here, e.g., send the data to a server
//     console.log('Form submitted:', formData);
//     // You can add further logic for form submission like sending the data to a server
//   };

//   return (
//     <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
//       <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message:</label>
//           <textarea
//             id="message"
//             name="message"
//             rows="4"
//             value={formData.message}
//             onChange={handleChange}
//             className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
//           ></textarea>
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Contact;

const Contact = () => {
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      <h1 className="font-bold text-2xl p-4 m-4">Contact Us</h1>
      <form>
        <input type="text" className="mt-2 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500" placeholder="Name"/>
        <input type="text" className="mt-2 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500" placeholder="Message"/>
        {/* <input type="text" className="border border-black p-2 m-2" placeholder="message"/> */}
        <button className="mt-3 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
      </form>
    </div>
  );
};

export default Contact;