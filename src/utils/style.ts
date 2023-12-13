/**
 * @author akash.yadav
 * @function getRandomColor
 * @description Get random color from the list of tailwind colors based on the first character of the string
 * @param {string} color - The string
 * @returns {string} - The random color
 */
export function getRandomColor(color: string) {
  const colors = [
    'bg-blue-400 text-white border-blue-700',
    'bg-red-400 text-white border-red-700',
    'bg-yellow-400 text-white border-yellow-700',
    'bg-green-400 text-white border-green-700',
    'bg-pink-400 text-white border-pink-700',
    'bg-purple-400 text-white border-purple-700',
    'bg-indigo-400 text-white border-indigo-700',
    'bg-gray-400 text-white border-gray-700',
    'bg-blue-300 text-white border-blue-900',
    'bg-red-300 text-white border-red-900',
    'bg-yellow-300 text-white border-yellow-900',
    'bg-green-300 text-white border-green-900',
    'bg-pink-300 text-white border-pink-900',
    'bg-purple-300 text-white border-purple-900',
    'bg-indigo-300 text-white border-indigo-900',
    'bg-gray-300 text-white border-gray-900',
  ];

  const index = color.charCodeAt(0) % colors.length;
  return colors[index];
}
