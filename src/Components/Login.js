// import React, { useState } from 'react';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [response, setResponse] = useState('');

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:5000/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();
//       setResponse(data.message);
//     } catch (error) {
//       setResponse("An error occurred");
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email:</label>
//           <input type="email" value={email} onChange={handleEmailChange} />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input type="password" value={password} onChange={handlePasswordChange} />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//       <p>{response}</p>
//     </div>
//   );
// }

// export default Login;





import React, { useState } from 'react';
import Home from './Home';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {
        console.log("sending...")
        const response = await fetch('http://localhost:5000/login', {
        
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      console.log(data);
      if (data.success) {
        // alert('success');
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    } 
    catch (error) {
      // console.error('Error:', error);
    }
  };

  if (isLoggedIn) {
    return <Home/>;
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;


