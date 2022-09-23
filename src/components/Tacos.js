import { GiTacos } from 'react-icons/gi';

const Tacos = () => {
  return (
    <div className="py-5 ">
      <div>
        <button className="  p-3 container mx-auto  px-4 font-semibold bg-blue-200 rounded">
          <GiTacos className="inline-block" /> Tacos{' '}
          <GiTacos className="inline-block" />
        </button>
      </div>
    </div>
  );
};

export default Tacos;
