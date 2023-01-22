import React from "react";

/**
 * @author
 * @function Create
 **/

export const Art_Create = (props) => {
  return (
    <div className="mx-auto my-8 w-full max-w-[1400px] p-4">
      <div className="flex flex-col md:flex-row m-auto px-4 py-8 gap-4 w-full max-w-[1100px]">
        <div className="md:w-2/12 w-full mx-auto ">
          <h3>Table of Content</h3>
          <ul className="text-left my-4">
            <li className="truncate">Prolific writer?</li>
            <li className="truncate">Focus at writing</li>
            <li className="truncate">How to spread the word</li>
          </ul>
        </div>
        <div className="md:w-6/12 w-full mx-auto">
          <h3>Content</h3>
          <textarea
            className="w-full h-96 box-border rounded-md border my-4 p-4"
            value={`Focusing and being productive at work can be a challenge, especially in today's fast-paced, technology-driven world. However, there are several strategies that can help improve your focus and productivity while on the job.

First, it is important to set clear goals and priorities for your workday. This will help you stay focused on the tasks that are most important and prevent you from getting sidetracked by less important tasks or distractions. To do this, make a to-do list for the day and prioritize the items on it based on their level of importance. You can also use a calendar or planner to schedule specific times for working on different tasks.`}
          />
        </div>
        <div className="md:w-4/12 w-full mx-auto">
          <h3>Ideas</h3>
          <textarea
            className="w-full h-96 box-border rounded-md border my-4 p-4"
            value={`- Set clear goals and priorities for your workday and make a to-do list
- Eliminate distractions by turning off electronic devices, closing unnecessary tabs, and finding a quiet space
- Take regular breaks to rest and recharge
- Take care of your physical and mental well-being through sleep, diet, and exercise
- Practice meditation and mindfulness to clear your mind and focus on the present moment
- Use time management techniques like the Pomodoro Technique to avoid procrastination and stay focused on specific tasks.`}
          />
        </div>
      </div>
      <button className="bg-blue-600 text-white px-6 py-2 rounded-md md:w-fit w-full">
        Save
      </button>
    </div>
  );
};
