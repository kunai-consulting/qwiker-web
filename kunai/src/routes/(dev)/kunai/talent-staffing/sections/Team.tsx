import { component$ } from '@builder.io/qwik';
import TeamComponent from './TeamComponent';

export default component$(() => {
  const teams = [
    {
      team: 'Developer',
      icon: 'https://cdn.sanity.io/images/f9g2uuqu/production/29b29570a2c50fd71753854f65d5302ce32f3781-64x64.svg?w=64&amp;h=64&amp;auto=format',
      roles: [
        'Software Architects',
        'Mobile & Web Developers',
        'Full Stack',
        'Back End',
        'Data & Dev Ops Engineers',
      ],
    },
    {
      team: 'Designer',
      icon: 'https://cdn.sanity.io/images/f9g2uuqu/production/527b3a60fa50f5ae7808b64ae78cebbbdc94eb13-64x64.svg?w=64&amp;h=64&amp;auto=format',
      roles: [
        'User Experience Designers',
        'User Interface Designers',
        'Illustration Designers',
        'Animation Designers',
      ],
    },
    {
      team: 'Project Manager',
      icon: 'https://cdn.sanity.io/images/f9g2uuqu/production/933650355c6aa705ba4fa91dcfb38dad424d10ee-64x64.svg?w=64&amp;h=64&amp;auto=format',
      roles: ['Seasoned Project Managers', 'Agile Coaches', 'Scrum Masters'],
    },
    {
      team: 'Product Manager',
      icon: 'https://cdn.sanity.io/images/f9g2uuqu/production/fb1d598a6e405e04a51bfbdb36ccea85f4b7c2c3-64x64.svg?w=64&amp;h=64&amp;auto=format',
      roles: [
        'Data-driven',
        'Digital Product Managers',
        'Deliver to Complex Org',
      ],
    },
  ];
  return (
    <div class=" bg-gray-100">
      <div class="container mx-auto my-10 max-w-7xl px-4 sm:px-6">
        <h2 class="mb-8 flex pt-8 text-4xl font-medium">Get the Dream Team</h2>
        <p class="mb-4 text-xl">Hire the top 3% of US and global talent.</p>
        <div class="flex justify-center space-x-4">
          {teams.map((team, index) => (
            <TeamComponent key={index} teamData={team} />
          ))}
        </div>
      </div>
    </div>
  );
});
