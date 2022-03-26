import React from 'react';

const Question = () => {
    return (
        <div>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            How React works?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>React</strong> এর মাধ্যমে যখন কোন website তৈরি করা হয় তখন real dom এবং Virtual dom আকারে ২ টা dom তৈরি করে। user real dom এর ইনফরমেশন গুলো দেখতে পায়। একি সাথে backend এ Virtual dom ও তৈরি হয়। যখন Website এর কোন component এর মধ্যে কোন কিছু update বা পরিবর্তন করা হয় তখন তা প্রথমে ভার্চুয়াল dom এ গিয়ে প্রধান জিনিস গুলকে আপডেট করে তারপর সেখান থেকে Real dom final update করে।

                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Props Vs state?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Props</strong>
                            <p>1. Props are read only.(props ব্যাবহার করে React যেকোনো property সহজে আদান প্রদান করা যায়)</p>
                            <p>2.Props can not modify.(Props কে update বা পরিবর্তন করা যাই নাহ)</p>
                            <strong>State</strong>
                            <p>1.State change can be asynchronous.(State সময় নিয়ে তার পুরো data কে দেখায়)</p>
                            <p>2.State can be modified using this.setState.(this.setState এর মাধ্যমে আমরা আমাদের ডাটাকে update বা পরিবর্তন করতে পারি)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;