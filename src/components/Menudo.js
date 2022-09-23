import React from 'react';
import { TbSoup } from 'react-icons/tb';
import listOfMenudos from '../Menudos.json';
import { useState } from 'react';

const Menudo = () => {
  let [total, setTotal] = useState(0);
  let [toggleForm, setToggleForm] = useState(true);
  let [menudosPedidos, setMenudosPedidos] = useState(0);
  return (
    <div className="py-5 ">
      <div>
        <button
          onClick={() => {
            setToggleForm(!toggleForm);
          }}
          className="  p-3 container mx-auto  px-4 font-semibold bg-teal-200 rounded"
        >
          <TbSoup className="inline-block" /> Menudo{' '}
          <TbSoup className="inline-block" />
        </button>
        {toggleForm && (
          <table className="table">
            <thead>
              <tr>
                <th>Menudo</th>
                <th>Precio</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {listOfMenudos.map((menudo) => (
                <tr key={menudo["'id"]}>
                  <td>{menudo.productName}</td>
                  <td>{menudo.price}</td>
                  <td>
                    <button
                      onClick={() => setTotal(total + menudo.price)}
                      className=" rounded px-2  pb-0.5 bg-blue-200   "
                    >
                      +
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => setTotal(total - menudo.price)}
                      className=" rounded px-3 pb-0.5 bg-red-200  ml-2 "
                    >
                      -
                    </button>
                  </td>
                  <td>{menudosPedidos} </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <p>{total}</p>
      </div>
    </div>
  );
};

export default Menudo;
