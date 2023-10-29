import buildGif from '@/assets/img/building.gif';

export const Building = () => {
  return (
    <div className="avance__info">
      <img className='img' src={buildGif} alt="Muestra imagen de sitio web en costruncción" />
      <h2 className="title">Sitio web en construción</h2>
    </div>
  );
};
