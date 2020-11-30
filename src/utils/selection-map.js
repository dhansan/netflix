export default function selectionMap({ series, films }) {
  return {
    series: [
      {
        title: 'Documantaries',
        data: series.filter((item) => item.genre === 'documentaries'),
      },
    ],
  };
}
