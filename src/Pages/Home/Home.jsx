import React from 'react';
import UserCard from "../../components/UserCard/UserCard";

function Home() {
    const users = [
        {name: "John Doe",
        age: "40",
        },
        {name: "Martin Luther",
        age: "41",
        },
        {name: "Janna Clark",
        age: "42",
        },
        {name: "Clara Morgane",
        age: "43",
        },
        {name: "Nina Parker",
        age: "63",
        },
    ];
  return (
    <section className="Home">
        <div className="container">
            <h1>Home Page</h1>
            <h2>Our Users</h2>
            <div className="container">
                {users.map((user, idx) => {
                    return (<UserCard userName={user.name} userAge={user.age} key={`${idx}-${user.name}`} />
                    );
                })}
            </div>
        </div>
    </section>
  )
}

export default Home