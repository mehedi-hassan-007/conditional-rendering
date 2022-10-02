import React from 'react';

const user =[
    {
        fullname:"mehedi hassan",
        age:"243",
        phonenumber: [
            {home: "8946759043285389"},
            {office: "097432986"},
        ],
    },
{
    fullname:"mehedi hassan",
    age:"243",
    phonenumber: [
        {home: "8946759043285389"},
        {office: "097432986"},
    ],
},
];
const Index = () => {
    return (
        <div>
             {
             user.map((user,index)=> 
                <div key={index}>
                    <h1>{user.fullname}</h1>
                    <h2>{user.age}</h2>
                    {user.phonenumber.map((phonenumber)=> 
                         <div key={index}>
                            <h3>{phonenumber.home}</h3>
                            <h4>{phonenumber.office}</h4>
                        </div>)
                    }
                    </div> 
                )
            }
        </div>
    )
}

export default Index;