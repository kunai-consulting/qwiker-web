import type { HTMLAttributes } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";

interface SVGProps extends HTMLAttributes<HTMLElement> {
  preserveAspectRatio?: string;
  xmlSpace?: string;
  height?: number;
  width?: number;
  display?: string;
  style?: string;
  dark?: boolean;
}

export default component$<SVGProps>((props) => {
  const color = props.dark ? "#2D3654" : "#FFFFFF";

  return (
    <svg
      version="1.1"
      viewBox="0 0 1000 421.86"
      preserveAspectRatio={props.preserveAspectRatio || "xMinYMin meet"}
      xmlSpace={props.xmlSpace || "preserve"}
      height={props.height || "auto"}
      width={props.width || "100%"}
      display={props.display || "block"}
      style={props.style || { margin: 0 }}
    >
      <title>The Kunai Logo</title>
      <desc>
        The Kunai icon, composed of two overlapping chevron triangles, sharp
        pointing left, and curved pointing right, followed by the logotype: the
        word Kunai in all caps san-serif font
      </desc>

      <path
        fill="#FF4A4A"
        d="M94.59,212.88c0-27.2,48.69-37.91,78.19-53.83c44.1-23.8,82.32-62.47,100.54-44.71c21.8,21.24-29.06,70.95-29.06,
          98.34s50.86,77.1,29.06,98.34c-18.22,17.76-56.44-20.91-100.54-44.71c-29.5-15.92-78.19-26.63-78.19-53.83V212.88z"
      />
      <path
        fill={color}
        d="M133.05,123.98l88.69,88.69l-88.69,88.69V123.98 M122.85,99.36v226.64l113.32-113.32L122.85,99.36L122.85,99.36z"
      />

      <g>
        <title>The Kunai Mark</title>
        <desc>
          The Kunai mark reflects our commitment to delivering solutions that
          have both the creative and analytical thinking behind them required to
          create meaningful value. Combining intelligence and intuition is what
          makes Kunai unique, and it&apos;s how we make technology work for you
        </desc>

        <path
          fill={color}
          d="M385.98,234.3l-19.57-24.96l-5.11,4.89v20.07h-10.21v-56.02h10.21v24.39l24.39-24.39h12.12l-24.11,24.53
        l24.75,31.48H385.98z"
        />
        <path
          fill={color}
          d="M497.23,235.01c-13.4,0-23.26-5.11-23.26-17.73c0-1.13,0-39,0-39h10.21c0,0,0,37.01,0,38.08c0,6.24,4.68,9.86,
        13.26,9.86c7.44,0,12.83-3.55,12.83-9.79c0-1.06,0-38.15,0-38.15h10.21c0,0,0,38.57,0,39.57C520.48,229.34,510.84,235.01,497.23,235.01z"
        />
        <path
          fill={color}
          d="M637.54,234.3l-24.32-40.98v40.98h-9.79v-56.02h12.05l23.47,39.78v-39.78h9.79v56.02H637.54z"
        />
        <path
          fill={color}
          d="M736.94,234.3h-10.49l21.56-56.02h12.83l20.49,56.02H770.7l-4.96-13.61h-23.61L736.94,234.3z M755.66,192.46
        l-1.42-4.75l-1.42,4.82l-7.45,19.36h17.23L755.66,192.46z"
        />
        <path fill={color} d="M859.39,234.3v-56.02h10.42v56.02H859.39z" />
      </g>
    </svg>
  );
});
