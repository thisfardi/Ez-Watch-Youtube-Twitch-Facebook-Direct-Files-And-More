import React from "react";

export const ArgentinaIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 36 36"
    className={className}
  >
   <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M450 2372 c-95 -49 -108 -58 -156 -105 -49 -50 -69 -80 -109 -165
l-25 -54 0 -718 c0 -419 4 -740 10 -769 37 -198 186 -348 388 -390 36 -7 271
-11 725 -11 729 0 734 1 852 56 75 36 173 134 209 209 56 118 56 118 56 902
l0 722 -25 53 c-68 145 -128 205 -273 273 l-53 25 -772 0 -772 0 -55 -28z
m1583 -152 c76 -29 130 -79 169 -157 28 -57 33 -79 36 -158 l4 -92 -58 -14
c-47 -11 -219 -14 -834 -17 -757 -3 -894 1 -994 29 l-39 11 5 92 c4 81 9 101
38 155 39 73 94 123 164 150 49 19 81 20 753 20 679 1 704 0 756 -19z m352
-1257 c-9 -445 -21 -490 -159 -629 -89 -89 -137 -116 -251 -141 -60 -14 -162
-16 -690 -16 -674 0 -699 1 -821 57 -80 37 -206 168 -234 244 -38 100 -42 141
-47 475 l-5 327 1107 0 1107 0 -7 -317z"/>
</g>
  </svg>
);

export const HeartIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 36 36"
    className={className}
  >
    <path
      fill="#DD2E44"
      d="M35.885 11.833c0-5.45-4.418-9.868-9.867-9.868-3.308 0-6.227 1.633-8.018 4.129-1.791-2.496-4.71-4.129-8.017-4.129-5.45 0-9.868 4.417-9.868 9.868 0 .772.098 1.52.266 2.241C1.751 22.587 11.216 31.568 18 34.034c6.783-2.466 16.249-11.447 17.617-19.959.17-.721.268-1.469.268-2.242z"
    />
  </svg>
);

export const NextIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    role="button"
    className={className}
  >
    <path
      fill-rule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
      clip-rule="evenodd"
    />
  </svg>
);

export const LinkIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
      clipRule="evenodd"
    />
  </svg>
);

export const PlayIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
      clipRule="evenodd"
    />
  </svg>
);

export const SpinnerIcon = ({ className = "" }) => (
  <svg
    className={"animate-spin " + className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);
