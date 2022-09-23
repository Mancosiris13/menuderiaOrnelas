import { GiBottleCap } from 'react-icons/gi';
const Bebidas = () => {
  return (
    <div className="py-5 ">
      <div>
        <button className="  p-3 container mx-auto  px-4 font-semibold bg-red-200 rounded">
          <GiBottleCap className="inline-block" /> Bebidas{' '}
          <GiBottleCap className="inline-block" />
        </button>
      </div>
    </div>
  );
};

export default Bebidas;
