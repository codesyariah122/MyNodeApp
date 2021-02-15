import React from "react";
import axios from "axios";
import styled from 'styled-components'

class App extends React.Component {
  state = {
    users: [],
  };
  componentDidMount() {
    axios.get("http://localhost:5151/DataPublic").then((response) => {
      this.setState({ users: response.data });
    });
  }

  render() {
    const { users } = this.state;
    const ViewData = styled.div`
    body {
        font-size: 20px;
      }

      .users {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }

      .user {
        padding: 2rem;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      }

      .user > div {
        margin-top: 1rem;
        color: #ccc;
      }
    `

    return (
      <>
        <ViewData>
          <ul className="users">
            {users.map((user) => (
              <li className="user">
                <p>
                  <strong>Name:</strong> {user.name}
                </p>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <p>
                  <strong>City:</strong> {user.address.city}
                </p>
              </li>
            ))}
          </ul>
        </ViewData
      </>
    );
  }
}


export default App