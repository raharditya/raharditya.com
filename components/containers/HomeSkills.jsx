import React from "react";
import SkillItem from "../SkillItem";
import SkillIcon from "../SkillIcon";

export default function HomeSkills() {
  return (
    <div className="container md:px-8 mx-auto">
      <h2 className="text-3xl font-bold mt-8 mb-5">What I do</h2>

      <SkillItem color="skill-1">
        <div className="flex-1 pl-8 py-6">
          <SkillIcon
            class="icon-1"
            skill1="/assets/skill/skill1.0.svg"
            skill2="/assets/skill/skill1.1.svg"
          />

          <h3 className="text-2xl font-bold mt-4 mb-2">Web Development</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum,
            fuga. Consectetur, et sunt? Tenetur, culpa tempora.
          </p>
        </div>

        <div className="flex-1">
          <img src="" alt="" />
          <h1>test</h1>
        </div>
      </SkillItem>

      <SkillItem color="skill-2">
        <div className="flex-1">
          <img src="" alt="" />
          <h1>aaaa</h1>
        </div>

        <div className="flex-1 pr-8 py-6">
          <SkillIcon
            class="icon-2"
            skill1="/assets/skill/skill2.0.svg"
            skill2="/assets/skill/skill2.1.svg"
          />

          <h3 className="text-2xl font-bold mt-4 mb-2">UI/UX Designing</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum,
            fuga. Consectetur, et sunt? Tenetur, culpa tempora optio in qui
            voluptate reiciendis minima incidunt quia, molestiae nisi, beatae
            eaque libero nostrum.
          </p>
        </div>
      </SkillItem>

      <SkillItem color="skill-3">
        <div className="flex-1 pl-8 py-6">
          <SkillIcon
            class="icon-3"
            skill1="/assets/skill/skill1.0.svg"
            skill2="/assets/skill/skill1.1.svg"
          />

          <h3 className="text-2xl font-bold mt-4 mb-2">Fullstack Javascript</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum,
            fuga. Consectetur, et sunt? Tenetur, culpa tempora optio in qui
            voluptate reiciendis minima incidunt quia, molestiae nisi, beatae
            eaque libero nostrum.
          </p>
        </div>

        <div className="flex-1">
          <img src="" alt="" />
          <h1>test</h1>
        </div>
      </SkillItem>
    </div>
  );
}
