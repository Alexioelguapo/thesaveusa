
import React from 'react';
import { SITE_TITLE } from '../../constants';
import { FlagIcon } from '../icons/FlagIcon'; // Assuming you have a FlagIcon

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white p-6 md:p-10 rounded-lg shadow-xl prose prose-lg max-w-4xl mx-auto border-2 border-blue-800">
      <div className="text-center mb-8">
        <FlagIcon className="h-20 w-20 mx-auto text-red-700 mb-4" />
        <h1 className="text-4xl font-display text-blue-900">About {SITE_TITLE}</h1>
      </div>
      
      <p className="text-xl leading-relaxed text-gray-800">
        Welcome to <strong className="text-red-700">{SITE_TITLE}</strong>, your dedicated platform for <strong className="text-blue-900">AMERICA FIRST NEWS & COMMENTARY</strong>.
      </p>

      <h2 className="text-3xl font-display text-red-700 mt-8 mb-4">Our Mission</h2>
      <p className="leading-relaxed text-gray-700">
        Our mission is to provide a powerful platform for conservative voices and to champion the traditional American values that have made our nation exceptional. We strive to cut through the noise and distortion of mainstream media, delivering honest, accurate news and fearless analysis to our readers.
      </p>
      <p className="leading-relaxed text-gray-700 mt-3">
        The very name, <strong className="text-blue-900">{SITE_TITLE}</strong>, signifies our unwavering commitment to preserving the founding principles of this great republic and to "save" our country from policies and ideologies that threaten its foundations. This is a common and urgent theme in populist and nationalist movements, one we wholeheartedly embrace.
      </p>

      <h2 className="text-3xl font-display text-red-700 mt-8 mb-4">Content and Focus</h2>
      <p className="leading-relaxed text-gray-700">
        Our content is laser-focused on issues critical to the future of America:
      </p>
      <ul className="list-disc list-inside space-y-2 my-4 pl-4 text-gray-700">
        <li><strong>US Politics:</strong> Unflinching critique of the Democratic party, President Biden, and liberal policies that undermine American strength.</li>
        <li><strong>Cultural Warfare:</strong> Exposing and combating the "Woke" agenda, "Radical Left" ideologies, and the influence of the "Deep State."</li>
        <li><strong>Election Integrity:</strong> Championing transparency and security in our elections, addressing skepticism surrounding recent electoral processes.</li>
        <li><strong>Immigration:</strong> Advocating for secure borders and sensible immigration policies that prioritize American citizens.</li>
        <li><strong>Economic Policy:</strong> Promoting free-market principles and criticizing policies that harm American workers and businesses.</li>
        <li><strong>International Affairs:</strong> Analyzing global events through a steadfast "America First" lens.</li>
      </ul>
      <p className="leading-relaxed text-gray-700">
        The tone of our platform is proudly partisan, often aggressive, and highly critical of opposing viewpoints. We utilize strong, direct language designed to awaken and mobilize patriots.
      </p>

      <h2 className="text-3xl font-display text-red-700 mt-8 mb-4">Political Leaning and Bias</h2>
      <p className="leading-relaxed text-gray-700">
        We are explicitly Conservative and "America First." This is the core of our identity. Our content frequently reflects a strong alignment with Pro-Trump/MAGA principles, praising leaders who fight for American sovereignty and prosperity. We operate as a vital voice for those who feel ignored by the mainstream, reinforcing shared beliefs and values. We maintain a healthy distrust of mainstream media narratives, positioning ourselves as an alternative source of truth.
      </p>
      
      <h2 className="text-3xl font-display text-red-700 mt-8 mb-4">Our Target Audience</h2>
      <p className="leading-relaxed text-gray-700">
        {SITE_TITLE} is for individuals who identify as conservative, Republican, supporters of Donald Trump, and all patriots skeptical of mainstream media. We appeal to those who believe traditional American values are under assault and who advocate for an "America First" approach to governance.
      </p>

      <blockquote className="border-l-4 border-red-700 pl-4 py-2 my-8 italic text-blue-900 bg-gray-50">
        <p className="mb-0">"{SITE_TITLE} is not a source of neutral, objective journalism in the traditional sense. It is a platform for political advocacy, strong opinion, and a rallying point for the America First movement. We provide the news and information that aligns with a conservative, patriotic perspective. If you seek balanced, objective reporting with diverse viewpoints, this is not the place to find it. We offer something more vital: a voice for the silenced majority."</p>
      </blockquote>

      <p className="leading-relaxed text-gray-700 mt-6 text-center font-semibold">
        Join us in the fight to Save USA. Stand Tall. Stand Proud. Stand American.
      </p>
    </div>
  );
};

export default AboutPage;
