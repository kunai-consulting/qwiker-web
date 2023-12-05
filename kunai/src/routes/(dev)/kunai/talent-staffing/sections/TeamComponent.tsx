import { component$ } from "@builder.io/qwik";

interface TeamProps {
  icon: string;
  team: string;
  roles: string[];
}
interface TeamComponentProps {
  teamData: TeamProps;
}

export default component$<TeamComponentProps>((props) => {
  return (
    <div class="overflow-hidden rounded-2xl">
      <div class="flex flex-col items-center p-5">
        <div class="mb-4 rounded-full p-2">
          <img
            src={props.teamData.icon}
            class="h-12 w-12 text-red-600"
            alt={`${props.teamData.team} icon`}
            width="64"
            height="64"
          />
        </div>
        <div class="mb-4 text-lg font-semibold text-gray-800">
          {props.teamData.team}
        </div>
        <div class="grid grid-cols-2 gap-4">
          {props.teamData.roles.map((role, index) => (
            <button
              key={index}
              class={`rounded-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm text-gray-700 ${
                index === props.teamData.roles.length - 1 &&
                props.teamData.roles.length % 2 !== 0
                  ? "col-span-2"
                  : ""
              }`}
            >
              {role}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
});
